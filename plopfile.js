import { actions } from './apps.mjs'

export default function (plop) {
  plop.setHelper('jsonStringify', function (context) {
    return JSON.stringify(context)
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
