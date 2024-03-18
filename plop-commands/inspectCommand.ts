import { NodePlopAPI } from 'plop'
import { Gobot, mkGobot } from '../src/Gobot'

export function inspectCommand(plop: NodePlopAPI) {
  function extractUserAndRepo(url: string) {
    const regex = /^(?:https?:\/\/)?github\.com\/([^/]+)\/([^/]+).*$/
    const match = url.match(regex)
    if (match) {
      return {
        user: match[1],
        repo: match[2],
      }
    }

    throw new Error(`No match found for ${url}`)
  }

  plop.setGenerator(`inspect`, {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What is the <user>/<repo> of the repo?`,
      },
    ],
    actions: async (answers) => {
      if (!answers) throw new Error(`Expected answers`)
      const { name } = answers
      const { user, repo } = extractUserAndRepo(name)
      Gobot.verbosity(3)
      const bot = mkGobot(`${user}/${repo}`)
      bot.clearCache()
      const md = await bot.versions(`md`)
      console.log(md)
      return []
    },
  })
}
