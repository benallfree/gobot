import { flatten, map } from '@s-libs/micro-dash'
import { globSync } from 'glob'
import { dirname, join } from 'path'
import { NodePlopAPI } from 'plop'
import sharp from 'sharp'
import { APPS_MAP } from './APPS_MAP'
import { buildDataForApp } from './util/buildData'
import { mkSubcommander } from './util/mkSubcommander'

export const pluginCommand = (plop: NodePlopAPI) => {
  plop.setActionType(`plugin-logos-gen`, async (answers, config, plop) => {
    await Promise.all([
      ...globSync(`src/plugins/*/logo.png`).map(async (logo) => {
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

  mkSubcommander(
    `plugin`,
    `Generate plugin artifacts`,
    `Choose plugin artifacts to generate`,
    {
      'plugin:logos': {
        gen: [
          {
            type: `plugin-logos-gen`,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `src/plugins/*/logo-*.png`,
            options: { glob: true },
          },
        ],
      },
      'plugin:sample-projects': {
        gen: async () =>
          Promise.all(
            map(APPS_MAP, async (app) => {
              const { name } = app
              return {
                type: 'addMany',
                destination: `src/plugins/${name}/sample-project`,
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
            path: `src/plugins/*/sample-project`,
          },
        ],
      },
      'plugin:helpers': {
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
                  destination: `src/plugins/${name}/helper`,
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
                    path: `src/plugins/${name}/helper/src/${path}`,
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
            path: `src/plugins/*/helper`,
          },
        ],
      },
      'plugin:helpers:archive': {
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
                    destination: `build/plugins/${name}/${version}`,
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
                    const path = `build/plugins/${name}/${version}/dist/${file}`
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
            path: `build/plugins`,
          },
        ],
      },
    },
    'gen',
    plop,
  )
}
