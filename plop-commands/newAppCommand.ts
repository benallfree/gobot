import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { NodePlopAPI } from 'plop'
import { format } from 'prettier'
import sharp from 'sharp'
import { AppInfo } from '../src/api'
import { extractUserAndRepo } from '../src/util/extractUserAndRepo'
import { mkdir } from '../src/util/shell'
import { stringify } from '../src/util/stringify'
import { localAction } from './util/localAction'

export function newAppCommand(plop: NodePlopAPI) {
  const GEN_APP_LOGO = localAction(plop, async (answers, config) => {
    const { path, data } = config
    const res = await fetch(data.owner.avatar_url)
    mkdir(`-p`, dirname(path))
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
        name: `name`,
      },
    ],
    actions: async (answers) => {
      if (!answers) throw new Error(`Answers expected here`)
      const { name } = answers
      const { user, repo } = extractUserAndRepo(name)
      const url = `https://api.github.com/repos/${user}/${repo}`
      const res = await fetch(url)
      const data = (await res.json()) as any
      const info: AppInfo = {
        name: data.name,
        slug: adjustCapitalization(data.name, data.description),
        description: data.description,
        homepage: data.homepage,
        isAlpha: true,
      }

      return [
        {
          type: 'modify',
          path: `src/apps/APPS_MAP.ts`,
          pattern: /\/\/\s+#app-gen/,
          template: `${stringify(info, null, 2)}\n  // #app-gen\n`,
          transform: (template: string) =>
            format(template, {
              ...JSON.parse(readFileSync(`.prettierrc`).toString()),
              filepath: resolve(`src/apps/APPS_MAP.ts`),
            }),
        },
        {
          type: 'modify',
          path: `src/apps/index.ts`,
          pattern: /\/\/\s+#app-gen/,
          template: `'${info.name}': '${repo}'\n  // #app-gen\n`,
          transform: (template: string) =>
            format(template, {
              ...JSON.parse(readFileSync(`.prettierrc`).toString()),
              filepath: resolve(`src/apps/index.ts`),
            }),
        },
        {
          type: GEN_APP_LOGO,
          path: `src/apps/${info.name}/logo.webp`,
          data,
        },
      ]
    },
  })
}
