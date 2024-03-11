import { keys } from '@s-libs/micro-dash'
import { NodePlopAPI } from 'plop'
import {
  DEFAULT_PLATFORM_MAP,
  SUPPORTED_ARCH,
} from './src/GithubReleaseProvider'
import { gobot } from './src/api'
import {
  appsTable,
  branch,
  cli_options,
  mkActions,
  postamble,
} from './src/codegen/apps'
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

  const actions = await mkActions(plop)

  plop.setGenerator('readme', {
    description: 'Generate plugins',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: 'readme.md',
        templateFile: 'plop-templates/readme/readme.md',
        force: true,
        data: async () => {
          const data: any = {
            branch,
            platforms: keys(DEFAULT_PLATFORM_MAP),
            architectures: keys(SUPPORTED_ARCH),
          }
          data.apps = plop.renderString(appsTable, data)
          data.cli_options = plop.renderString(cli_options, data)
          data.postamble = plop.renderString(postamble, data)
          return data
        },
      },
    ],
  })

  plop.setGenerator('plugins', {
    description: 'Generate plugins',
    prompts: [],
    actions,
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
