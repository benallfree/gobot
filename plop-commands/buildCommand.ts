import { flatten } from '@s-libs/micro-dash'
import { globSync } from 'glob'
import { dirname, join } from 'path'
import { NodePlopAPI } from 'plop'
import sharp from 'sharp'
import { runShellCommand } from '../runShellCommand'
import { buildData, buildDataForApp } from './util/buildData'
import { getCurrentGitBranch } from './util/getCurrentGitBranch'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { localAction } from './util/localAction'
import { mkSubcommander } from './util/mkSubcommander'

export const buildCommand = (plop: NodePlopAPI) => {
  const LOGOS_ACTION = localAction(plop, async (answers, config, plop) => {
    await Promise.all([
      ...globSync(`src/apps/*/logo.{png,webp}`).map(async (logo) => {
        await sharp(logo)
          .resize({ width: 50 })
          .trim()
          .webp()
          .toFile(join(dirname(logo), `logo-50x.webp`))
        await sharp(logo)
          .resize({ height: 50 })
          .trim()
          .webp()
          .toFile(join(dirname(logo), `logo-x50.webp`))
      }),
    ])
    return 'ok'
  })

  const GOBOT_BUILD_ACTION = localAction(
    plop,
    async (answers, config, plop) => {
      await runShellCommand(`pnpm build:gobot`)
      return 'Built gobot'
    },
  )

  const DOCS_BUILD_ACTION = localAction(plop, async (answers, config, plop) => {
    await runShellCommand(
      `pnpm run docs --gitRevision ${getCurrentGitBranch()}`,
    )
    return 'Built API docs'
  })

  const HELPER_TEMPLATE_BUILD_ACTION = localAction(
    plop,
    async (answers, config, plop) => {
      await runShellCommand(`pnpm i`, `plop-templates/app/helper`)
      await runShellCommand(`pnpm link ../../..`, `plop-templates/app/helper`)
      await runShellCommand(`pnpm build`, `plop-templates/app/helper`)
      return 'Built helper template'
    },
  )

  mkSubcommander(
    `build`,
    `Generate build artifacts`,
    `Choose build artifacts to generate`,
    {
      docs: {
        gen: async () => [
          {
            type: DOCS_BUILD_ACTION,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `docs`,
          },
        ],
      },
      'gobot:readme': {
        gen: async () => [
          {
            type: 'add',
            path: 'readme.md',
            templateFile: 'plop-templates/readme/readme.md',
            force: true,
            data: await buildData(plop),
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `readme.md`,
          },
        ],
      },

      'apps:helper-template': {
        gen: [{ type: HELPER_TEMPLATE_BUILD_ACTION }],
        clean: [
          {
            type: `rimraf`,
            path: `plop-templates/app/helper/dist`,
          },
        ],
      },
      'apps:logos': {
        gen: [
          {
            type: LOGOS_ACTION,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `src/apps/*/logo-*`,
            options: { glob: true },
          },
        ],
      },
      'apps:invites': {
        gen: async () =>
          Promise.all(
            getSlugsFromFileSystem().map(async (slug) => {
              return {
                type: 'addMany',
                destination: `src/apps/${slug}`,
                base: 'plop-templates/app',
                templateFiles: 'plop-templates/app/invite.md',
                data: await buildDataForApp(slug, plop),
                force: true,
              }
            }),
          ),
        clean: [
          {
            type: `rimraf`,
            path: `src/apps/*/invite.md`,
            options: { glob: true },
          },
        ],
      },
      'apps:sample-projects': {
        gen: async () =>
          Promise.all(
            getSlugsFromFileSystem().map(async (slug) => {
              return {
                type: 'addMany',
                destination: `src/apps/${slug}/sample-project`,
                base: 'plop-templates/app/sample-project',
                templateFiles: 'plop-templates/app/sample-project/**/*',
                globOptions: { dot: true, ignore: [`node_modules`] },
                data: await buildDataForApp(slug, plop),
                force: true,
              }
            }),
          ),
        clean: [
          {
            type: `rimraf`,
            path: `src/apps/*/sample-project`,
          },
        ],
      },
      'apps:helpers': {
        gen: async () => {
          const srcFiles = globSync(`**/*.{ts,js}`, {
            cwd: `plop-templates/app/helper`,
          })
          const results = await Promise.all(
            getSlugsFromFileSystem().map(async (slug) => {
              return [
                {
                  type: 'addMany',
                  destination: `src/apps/${slug}/helper`,
                  base: 'plop-templates/app/helper',
                  templateFiles: 'plop-templates/app/helper/**/*',
                  globOptions: {
                    dot: true,
                    ignore: [`**/node_modules`, `**/.DS_Store`],
                  },
                  data: await buildDataForApp(slug, plop),
                  force: true,
                  verbose: true,
                },
                ...srcFiles.map((path) => {
                  return {
                    type: 'modify',
                    path: `src/apps/${slug}/helper/${path}`,
                    pattern: /__EXPORT__/g,
                    template: slug,
                  }
                }),
              ]
            }),
          )
          return flatten(results)
        },
        clean: [
          {
            type: 'rimraf',
            path: `src/apps/*/helper`,
          },
        ],
      },
      'apps:helpers:archive': {
        gen: async () => {
          return []
          const distFiles = globSync(`*`, {
            cwd: `plop-templates/app/helper/dist`,
          })

          const results = await Promise.all(
            getSlugsFromFileSystem().map(async (slug) => {
              const data = await buildDataForApp(slug, plop)

              return data.versions.flatMap((version) => {
                return [
                  {
                    type: 'addMany',
                    destination: `build/apps/${slug}/${version}`,
                    base: 'plop-templates/app/helper',
                    templateFiles: 'plop-templates/app/helper/**/*',
                    globOptions: {
                      dot: true,
                      ignore: [`**/node_modules`],
                    },
                    data: { ...data, version },
                    force: true,
                    verbose: true,
                  },
                  ...distFiles.map((file) => {
                    const path = `build/apps/${slug}/${version}/dist/${file}`
                    return {
                      type: 'modify',
                      path,
                      pattern: /__EXPORT__/g,
                      template: slug,
                    }
                  }),
                ]
              })
            }),
          )
          return flatten(results)
        },
        clean: [
          {
            type: `rimraf`,
            path: `build/apps`,
          },
        ],
      },
    },
    'gen',
    plop,
  )
}
