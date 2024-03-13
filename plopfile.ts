import { keys, map } from '@s-libs/micro-dash'
import { existsSync, readFileSync } from 'fs'
import { globSync } from 'glob'
import { dirname, join } from 'path'
import { ActionType, NodePlopAPI } from 'plop'
import { rimraf } from 'rimraf'
import sharp from 'sharp'
import {
  DEFAULT_PLATFORM_MAP,
  SUPPORTED_ARCH,
} from './src/GithubReleaseProvider'
import { gobot } from './src/api'
import { APPS_MAP, AppInfo } from './src/codegen/APPS_MAP'
import { cliOptionsMd, postambleMd } from './src/codegen/apps'
import { getCurrentGitBranch } from './src/codegen/getCurrentGitBranch'
import { availableAppsMd } from './src/codegen/readme'
import { stringify } from './src/util/stringify'

export default async function (plop: NodePlopAPI) {
  plop.setHelper('stringify', function (context) {
    return stringify(context)
  })
  plop.setHelper('count', function (context: any[]) {
    return context.length
  })
  plop.setHelper('csv', function (context: string[]) {
    return context?.join(`, `)
  })
  plop.setHelper('codecsv', function (context: string[]) {
    return context?.map((v) => `\`${v}\``).join(`, `)
  })

  plop.setGenerator('readme', {
    description: 'Generate readme',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: 'readme.md',
        templateFile: 'plop-templates/readme/readme.md',
        force: true,
        data: async () => {
          const branch = getCurrentGitBranch()
          const data: any = {
            branch,
            platforms: keys(DEFAULT_PLATFORM_MAP),
            architectures: keys(SUPPORTED_ARCH),
          }
          data.apps = plop.renderString(availableAppsMd, data)
          data.cli_options = plop.renderString(cliOptionsMd, data)
          data.postamble = plop.renderString(postambleMd, data)
          return data
        },
      },
    ],
  })

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

  plop.setActionType(`plugin-logos-clean`, async (answers, config, plop) => {
    await rimraf(`src/plugins/*/logo-*.png`, { glob: true })
    return 'ok'
  })

  plop.setGenerator('clean', {
    description: 'Clean build assets',
    prompts: [
      {
        message: `Choose all the assets you want to clean`,
        name: 'mode',
        type: 'checkbox',
        choices: [`logos`],
        default: [`logos`],
      },
    ],
    actions: (answers) => {
      if (!answers) {
        throw new Error(`Expected answers here`)
      }
      return [
        {
          type: 'plugin-logos-clean',
          skip: () => !answers.mode.includes(`logos`),
        },
      ]
    },
  })

  plop.setGenerator('plugins', {
    description: 'Generate plugins',
    prompts: [
      {
        message: `Choose all the assets you want to generate`,
        name: 'mode',
        type: 'checkbox',
        choices: [`logos`, `sample-project`, `helper`],
        default: [`logos`, `sample-project`, `helper`],
      },
    ],
    actions: (answers) => {
      if (!answers) {
        throw new Error(`Expected answers here`)
      }
      const actions: ActionType[] = [
        {
          type: 'plugin-logos-gen',
          skip: () => !answers.mode.includes(`logos`),
        },
      ]

      /**
       * Sample projects
       */
      map(APPS_MAP, (app) => {
        const { name } = app
        actions.push({
          skip: () => !answers.mode.includes(`sample-project`),
          type: 'addMany',
          destination: `src/plugins/${name}/sample-project`,
          base: 'plop-templates/plugin/sample-project',
          templateFiles: 'plop-templates/plugin/sample-project/**/*',
          globOptions: { dot: true, ignore: [`node_modules`] },
          data: () => buildDataForApp(app, plop),
          force: true,
        })
      })

      /**
       * Helper for current version
       */
      map(APPS_MAP, (app) => {
        const { name } = app
        actions.push({
          skip: () => !answers.mode.includes(`helper`),
          type: 'addMany',
          destination: `src/plugins/${name}/helper`,
          base: 'plop-templates/plugin/helper',
          templateFiles: 'plop-templates/plugin/helper/**/*',
          globOptions: {
            dot: true,
            ignore: [`**/node_modules`, `**/dist`, `**/.DS_Store`],
          },
          data: () => buildDataForApp(app, plop),
          force: true,
          verbose: true,
        })

        srcFiles.forEach((path) => {
          actions.push({
            type: 'modify',
            path: `src/plugins/${name}/helper/src/${path}`,
            pattern: /__EXPORT__/g,
            template: name,
          })
        })
      })

      console.log({ actions })

      return actions
    },
  })

  plop.setGenerator('invite', {
    description: 'Generate invite',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the CLI name of the app?',
      },
    ],
    actions: (data) => {
      if (!data) {
        throw new Error(`Data expected`)
      }
      return [
        {
          type: 'add',
          path: 'build/invite.md',
          templateFile: 'plop-templates/invite.md',
          force: true,
          data: async () => {
            const { name } = data
            const bot = gobot(name)
            const versions = await bot.versions()
            const version = await bot.getLatestVersion()
            return {
              slug: bot.slug,
              name,
              version,
              versions,
            }
          },
        },
      ]
    },
  })
}

const srcFiles = globSync(`**/*.ts`, {
  cwd: `plop-templates/plugin/helper/src`,
})

async function buildDataForApp(app: AppInfo, plop: NodePlopAPI) {
  const { name } = app

  const bot = gobot(name)
  const versions = await bot.versions()

  const notes = (() => {
    const notesPath = `./src/plugins/${name}/notes.md`
    if (!existsSync(notesPath)) return ''
    return readFileSync(notesPath).toString()
  })()

  const branch = getCurrentGitBranch()

  const data: any = {
    ...app,
    availableAppsMd,
    cliOptionsMd,
    branch,
    version: versions[0]!,
    versions,
    platforms: keys(DEFAULT_PLATFORM_MAP),
    architectures: keys(SUPPORTED_ARCH),
  }

  data.postambleMd = plop.renderString(postambleMd, data)
  data.notesMd = plop.renderString(notes, data)

  return data
}
