import { globSync } from 'glob'
import { join } from 'path'
import type { NodePlopAPI } from 'plop'
import { pathToFileURL } from 'url'
import { cliForApp, type AppInfoMeta } from '../../src/api'
import { program } from '../../src/cliCommands'
import { pwd } from '../../src/util/shell'
import { stringify } from '../../src/util/stringify'
import { exec } from './helpers/exec'
import { prettier } from './helpers/prettier'
import { resize } from './helpers/resize'
import { rimraf } from './helpers/rimraf'
import { buildData, buildDataForApp } from './util/buildData'
import { getCurrentGitBranch } from './util/getCurrentGitBranch'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'

export const buildCommand = (plop: NodePlopAPI) => {
  const subcommands: Subcommands = {
    docs: {
      gen: async () => [
        exec(`npm run docs -- --gitRevision ${getCurrentGitBranch()}`),
      ],
      clean: [rimraf(`docs`)],
    },
    gobot: {
      gen: [exec(`npm run build`)],
      clean: [rimraf(`dist/**`)],
    },
    [`gobot:readme`]: {
      gen: async () => {
        const serialized = JSON.parse(stringify(program))

        return [
          {
            type: `add`,
            path: `readme.md`,
            templateFile: `templates/readme/readme.md`,
            force: true,
            data: () => buildData(plop),
          },
          {
            type: `modify`,
            path: `readme.md`,
            pattern: /##CLI##/,
            templateFile: `templates/readme/cli.md.hbs`,
            data: { program: serialized, global: serialized },
          },
          {
            type: `modify`,
            path: `readme.md`,
            pattern: /##POSTAMBLE##/,
            templateFile: `templates/readme/postamble.md`,
            data: () => buildData(plop),
          },
          prettier(`readme.md`),
        ]
      },
      clean: [rimraf(`readme.md`)],
    },

    [`template:app:helper`]: {
      gen: () => {
        const merge = ({ cmd, msg }: any) =>
          exec(cmd, { cwd: `plop/templates/app/helper` })
        return [
          merge({
            cmd: `pnpm i`,
            msg: `Install deps`,
          }),
          merge({
            cmd: `pnpm link ../../../..`,
            msg: `Link gobot`,
          }),
          merge({
            cmd: `pnpm build`,
            msg: `Built helper template`,
          }),
        ]
      },
      clean: [rimraf(`plop/templates/app/helper/dist`)],
    },

    // `apps:helpers:archive`: {
    //   gen: async () => {
    //     const distFiles = globSync(`*`, {
    //       cwd: `plop/templates/app/helper/dist`,
    //     })

    //     const results = await Promise.all(
    //       getSlugsFromFileSystem().map(async (slug) => {
    //         const data = await buildDataForApp(slug, plop)

    //         return data.versions.flatMap((version) => {
    //           return [
    //             {
    //               type: `addMany`,
    //               destination: `build/apps/${slug}/${version}`,
    //               base: `templates/app/helper`,
    //               templateFiles: `templates/app/helper/**/*`,
    //               globOptions: {
    //                 dot: true,
    //                 ignore: [`**/node_modules`],
    //               },
    //               data: { ...data, version },
    //               force: true,
    //               verbose: true,
    //             },
    //             ...distFiles.map((file) => {
    //               const path = `build/apps/${slug}/${version}/dist/${file}`
    //               return {
    //                 type: `modify`,
    //                 path,
    //                 pattern: /__EXPORT__/g,
    //                 template: slug,
    //               }
    //             }),
    //           ]
    //         })
    //       }),
    //     )
    //     return flatten(results)
    //   },
    //   clean: [
    //     {
    //       type: `rimraf`,
    //       path: `build/apps`,
    //     },
    //   ],
    // },
  }

  getSlugsFromFileSystem().forEach((slug) => {
    subcommands[`app:${slug}`] = {
      gen: async () => {
        const srcFiles = globSync(`**/*.{ts,js}`, {
          cwd: `plop/templates/app/helper`,
        })
        return [
          resize(`src/apps/${slug}/logo.{png,webp}`, 50),
          {
            type: `addMany`,
            destination: `src/apps/${slug}`,
            base: `templates/app`,
            templateFiles: `templates/app/invite.md`,
            data: () => buildDataForApp(slug, plop),
            force: true,
          },
          {
            type: `addMany`,
            destination: `src/apps/${slug}/sample-project`,
            base: `templates/app/sample-project`,
            templateFiles: `templates/app/sample-project/**/*`,
            globOptions: { dot: true, ignore: [`node_modules`] },
            data: () => buildDataForApp(slug, plop),
            force: true,
          },
          prettier(`src/apps/${slug}/invite.md`),
          {
            type: `addMany`,
            destination: `src/apps/${slug}/helper`,
            base: `templates/app/helper`,
            templateFiles: `templates/app/helper/**/*`,
            globOptions: {
              dot: true,
              ignore: [`**/node_modules`, `**/.DS_Store`],
            },
            data: () => buildDataForApp(slug, plop),
            force: true,
            verbose: true,
          },
          ...srcFiles.map((path) => {
            return {
              type: `modify`,
              path: `src/apps/${slug}/helper/${path}`,
              pattern: /__EXPORT__/g,
              template: slug,
            }
          }),
          {
            type: `modify`,
            path: `src/apps/${slug}/helper/readme.md`,
            pattern: /##CLI##/,
            templateFile: `templates/readme/cli.helper.md.hbs`,
            data: async () => {
              const appHelperMetaPath = join(
                pwd(),
                `/src/apps/${slug}/helper/dist/api.js`,
              )
              const appHelperMetaUrl = pathToFileURL(appHelperMetaPath).href
              const appInfo = (await import(appHelperMetaUrl))
                .meta as AppInfoMeta
              const program = cliForApp(appInfo)
              const serialized = JSON.parse(stringify(program))
              return { program: serialized, global: serialized }
            },
          },
          {
            type: `modify`,
            path: `src/apps/${slug}/helper/readme.md`,
            pattern: /##POSTAMBLE##/,
            templateFile: `templates/readme/postamble.md`,
            data: () => buildData(plop),
          },
          prettier(`src/apps/${slug}/helper/readme.md`),
        ]
      },
      clean: [
        rimraf(`src/apps/${slug}/logo-*`),
        rimraf(`src/apps/${slug}/helper`),
        rimraf(`src/apps/${slug}/invite.md`),
        rimraf(`src/apps/${slug}/sample-project`),
      ],
    }
  })

  mkSubcommander(
    `build`,
    `Generate build artifacts`,
    `Choose build artifacts to generate`,
    subcommands,
    `gen`,
    plop,
  )
}
