import { times } from '@s-libs/micro-dash'
import { readFileSync } from 'fs'
import { markdownTable } from 'markdown-table'
import { APPS_MAP } from '../../src/api'
import { getCurrentGitBranch } from './getCurrentGitBranch'

const mkLink = (name: string, url: string) => `[${name}](${url})`
const code = (content: string) => `\`${content}\``
const space = (n = 5) => times(n, () => `&nbsp;`).join('')

export const availableAppsMd = markdownTable([
  [space(10), code(`<app>`), `What is it?`],
  ...APPS_MAP.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
  ).map((app) => {
    const branch = getCurrentGitBranch()
    const { name, description, homepage, slug } = app
    const readmeUrl = `https://www.npmjs.com/package/gobot-${name.toLocaleLowerCase()}`
    const logoUrl = `https://raw.githubusercontent.com/benallfree/gobot/${branch}/src/apps/${name}/logo-50x.png`
    return [
      mkLink(`<img src="${logoUrl}">`, homepage),
      code(name),
      description,
      mkLink(`readme`, readmeUrl),
    ]
  }),
])

export const postambleMd = readFileSync(
  `plop-templates/readme/postamble.md`,
).toString()

export const cliOptionsMd = readFileSync(
  `plop-templates/readme/cli_options.md`,
).toString()
