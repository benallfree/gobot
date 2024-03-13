import { ActionConfig, NodePlopAPI } from 'plop'
import { APPS_MAP } from '../src/api'
import { addCleanCommand } from './cleanCommand'
import { buildDataForApp } from './util/buildData'

export function inviteCommand(plop: NodePlopAPI) {
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
      const { name } = data

      return [
        {
          type: 'add',
          path: 'build/invite.md',
          templateFile: 'plop-templates/invite.md',
          force: true,
          data: buildDataForApp(APPS_MAP[name]!, plop),
        },
      ]
    },
  })

  addCleanCommand(`invite`, [
    {
      type: `rimraf`,
      path: `invite.md`,
    } as ActionConfig,
  ])
}
