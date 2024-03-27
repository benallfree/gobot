import { dirname } from 'path'
import type { ActionType, NodePlopAPI } from 'plop'
import sharp from 'sharp'
import type { AppInfo } from '../src/api'
import { extractUserAndRepo } from '../src/util/extractUserAndRepo'
import { mkdir } from '../src/util/shell'
import { localAction } from './util/localAction'

export function newAppCommand(plop: NodePlopAPI) {
  const GEN_APP_LOGO = localAction(plop, async (answers, config) => {
    const { path, data } = config
    const res = await fetch(data.owner.avatar_url)
    mkdir(dirname(path))
    await sharp(await res.arrayBuffer())
      .webp()
      .toFile(path)
    return `${path} written`
  })

  function adjustCapitalization(word: string, reference: string) {
    // Check if the word exists in the reference string with any capitalization
    const regex = new RegExp(`\\b${word}\\b`, 'i')
    const match = reference.match(regex)

    // If the word is found in the reference string
    if (match) {
      return match[0]! // Return the matched word
    }
    return word
  }

  plop.setGenerator(`add`, {
    description: `Add a new app`,
    prompts: [
      {
        type: 'input',
        message: `What is the <user>/<repo> of the app?`,
        name: `_name`,
      },
      {
        type: 'check',
        message: `Do you want to create a custom provider?`,
        name: `_custom`,
        default: false,
      },
    ],
    actions: async (answers) => {
      if (!answers) throw new Error(`Answers expected here`)
      const { _name, _custom } = answers
      const { user, repo } = extractUserAndRepo(_name)
      const slug = repo.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '')
      const url = `https://api.github.com/repos/${user}/${repo}`
      const res = await fetch(url)
      const apiData = (await res.json()) as any
      const info: AppInfo = {
        name: adjustCapitalization(apiData.name, apiData.description),
        description: apiData.description,
        homepage: apiData.homepage || apiData.html_url,
        isAlpha: true,
        factory: `\`${user}/${repo}\``,
      }

      const data = { ...info, slug, user, repo }
      const actions: ActionType[] = [
        {
          type: GEN_APP_LOGO,
          path: `src/apps/${slug}/logo.webp`,
          data: apiData,
        },
        {
          type: 'add',
          path: `src/apps/${slug}/index.ts`,
          templateFile: `./plop-templates/app/index.ts`,
          force: true,
          data,
        },
      ]

      if (_custom) {
        actions.push({
          type: 'add',
          path: `src/apps/${slug}/overrides.ts`,
          templateFile: `./plop-templates/app/overrides.ts`,
          force: true,
          data,
        })
      }

      return actions
    },
  })
}
