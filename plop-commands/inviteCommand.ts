import { NodePlopAPI } from 'plop'
import { APPS_MAP } from '../src/api'
import { addCleanCommand } from './cleanCommand'
import { buildDataForApp } from './util/buildData'

export function inviteCommand(plop: NodePlopAPI) {
  plop.setGenerator('invite', {
    description: 'Generate invite',
    prompts: [
      {
        type: 'list',
        name: 'name',
        choices: APPS_MAP.map((app) => app.name),
        message: 'Which app?',
        pageSize: 100,
      },
    ],
    actions: (data) => {
      if (!data) {
        throw new Error(`Data expected`)
      }
      const { name } = data

      const app = APPS_MAP.find((app) => app.name === name)!

      const actions = [
        {
          type: 'add',
          path: 'build/invite.md',
          templateFile: 'plop-templates/invite.md',
          force: true,
          data: () => buildDataForApp(app, plop),
        },
      ]

      return actions
    },
  })

  addCleanCommand(`invite`, [
    {
      type: `rimraf`,
      path: `invite.md`,
    },
  ])
}
