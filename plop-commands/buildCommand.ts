import { flatten, map } from '@s-libs/micro-dash'
import { globSync } from 'glob'
import { dirname, join } from 'path'
import { NodePlopAPI } from 'plop'
import sharp from 'sharp'
import { runShellCommand } from '../runShellCommand'
import { APPS_MAP } from '../src/apps/APPS_MAP'
import { buildData, buildDataForApp } from './util/buildData'
import { getCurrentGitBranch } from './util/getCurrentGitBranch'
import { localAction } from './util/localAction'
import { mkSubcommander } from './util/mkSubcommander'

export const buildCommand = (plop: NodePlopAPI) => {
  const LOGOS_ACTION = localAction(plop, async (answers, config, plop) => {
    await Promise.all([
      ...globSync(`src/apps/*/logo.png`).map(async (logo) => {
        await sharp(logo)
          .resize({ width: 50 })
          .trim()
          .png()
          .toFile(join(dirname(logo), `logo-50x.png`))
        await sharp(logo)
          .resize({ height: 50 })
          .trim()
          .png()
          .toFile(join(dirname(logo), `logo-x50.png`))
      }),
    ])
    return 'ok'
  })

  const GOBOT_BUILD_ACTION = localAction(
    plop,
    async (answers, config, plop) => {
      await runShellCommand(`pnpm build`)
      return 'Built gobot'
    },
  )

  const DOCS_BUILD_ACTION = localAction(plop, async (answers, config, plop) => {
    await runShellCommand(
      `pnpm run docs --gitRevision ${getCurrentGitBranch()}`,
    )
    return 'Built API docs'
  })

  const HELPER_BUILD_ACTION = localAction(
    plop,
    async (answers, config, plop) => {
      await runShellCommand(`pnpm i`, `plop-templates/plugin/helper`)
      await runShellCommand(
        `pnpm link ../../..`,
        `plop-templates/plugin/helper`,
      )
      await runShellCommand(`pnpm build`, `plop-templates/plugin/helper`)
      return 'Built helper template'
    },
  )

  mkSubcommander(
    `build`,
    `Generate build artifacts`,
    `Choose build artifacts to generate`,
    {
      gobot: {
        gen: async () => [
          {
            type: GOBOT_BUILD_ACTION,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `dist`,
          },
        ],
      },
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
      'plugins:helper-template': {
        gen: [{ type: HELPER_BUILD_ACTION }],
        clean: [
          {
            type: `rimraf`,
            path: `plop-templates/plugin/helper/dist`,
          },
        ],
      },
      'plugins:logos': {
        gen: [
          {
            type: LOGOS_ACTION,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `src/apps/*/logo-*.png`,
            options: { glob: true },
          },
        ],
      },
      'plugins:sample-projects': {
        gen: async () =>
          Promise.all(
            map(APPS_MAP, async (app) => {
              const { name } = app
              return {
                type: 'addMany',
                destination: `src/apps/${name}/sample-project`,
                base: 'plop-templates/plugin/sample-project',
                templateFiles: 'plop-templates/plugin/sample-project/**/*',
                globOptions: { dot: true, ignore: [`node_modules`] },
                data: await buildDataForApp(app, plop),
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
      'plugins:helpers': {
        gen: async () => {
          const srcFiles = globSync(`**/*.ts`, {
            cwd: `plop-templates/plugin/helper/src`,
          })
          const results = await Promise.all(
            map(APPS_MAP, async (app) => {
              const { name } = app
              return [
                {
                  type: 'addMany',
                  destination: `src/apps/${name}/helper`,
                  base: 'plop-templates/plugin/helper',
                  templateFiles: 'plop-templates/plugin/helper/**/*',
                  globOptions: {
                    dot: true,
                    ignore: [`**/node_modules`, `**/dist`, `**/.DS_Store`],
                  },
                  data: await buildDataForApp(app, plop),
                  force: true,
                  verbose: true,
                },
                ...srcFiles.map((path) => {
                  return {
                    type: 'modify',
                    path: `src/apps/${name}/helper/src/${path}`,
                    pattern: /__EXPORT__/g,
                    template: name,
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
      'plugins:helpers:archive': {
        gen: async () => {
          const distFiles = globSync(`*`, {
            cwd: `plop-templates/plugin/helper/dist`,
          })

          const results = await Promise.all(
            map(APPS_MAP, async (app) => {
              const { name } = app
              const data = await buildDataForApp(app, plop)

              return data.versions.flatMap((version) => {
                return [
                  {
                    type: 'addMany',
                    destination: `build/apps/${name}/${version}`,
                    base: 'plop-templates/plugin/helper',
                    templateFiles: 'plop-templates/plugin/helper/**/*',
                    globOptions: {
                      dot: true,
                      ignore: [`**/node_modules`],
                    },
                    data: { ...data, version },
                    force: true,
                    verbose: true,
                  },
                  ...distFiles.map((file) => {
                    const path = `build/apps/${name}/${version}/dist/${file}`
                    return {
                      type: 'modify',
                      path,
                      pattern: /__EXPORT__/g,
                      template: name,
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
