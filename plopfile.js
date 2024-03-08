import { apps } from './apps.mjs'

export default function (plop) {
  plop.setGenerator('readme', {
    description: 'Generate readme',
    prompts: [],
    actions: [
      {
        type: 'add',
        path: 'readme.md',
        templateFile: 'plop-templates/readme.md',
        force: true,
        data: {
          apps,
        },
      },
    ],
  }),
    plop.setGenerator('invite', {
      description: 'Generate invite',
      prompts: [
        {
          type: 'input',
          name: 'app',
          message: 'What is the CLI name of the app?',
        },
        {
          type: 'input',
          name: 'semver',
          message: 'What is a good semver example for this app?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'build/invite.md',
          templateFile: 'plop-templates/invite.md',
          force: true,
        },
      ],
    })
}
