import { ActionConfig, NodePlopAPI } from 'plop'
import { addCleanCommand } from './cleanCommand'
import { buildData } from './util/buildData'

export function readmeCommand(plop: NodePlopAPI) {
  plop.setGenerator('readme', {
    description: 'Generate readme',
    prompts: [],
    actions: async (data) => {
      if (!data) {
        throw new Error(`Data expected`)
      }

      return [
        {
          type: 'add',
          path: 'readme.md',
          templateFile: 'plop-templates/readme/readme.md',
          force: true,
          data: await buildData(plop),
        },
      ]
    },
  })

  addCleanCommand(`readme`, [
    {
      type: `rimraf`,
      path: `readme.md`,
    } as ActionConfig,
  ])
}
