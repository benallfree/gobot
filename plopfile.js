import { times } from '@s-libs/micro-dash'
import { existsSync } from 'fs'
import { markdownTable } from 'markdown-table'
import apps from './apps.mjs'

const mkLink = (name, url) => `[${name}](${url})`
const code = (content) => `\`${content}\``
const space = (n = 5) => times(n, () => `&nbsp;`).join('')
const md = markdownTable([
  [space(10), code(`<app>`), `What is it?`],
  ...apps
    .sort((a, b) =>
      a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
    )
    .map((app) => {
      const { name, description, homepage, slug, logo } = app
      const hasReadme = slug && existsSync(`./src/plugins/${slug}/readme.md`)
      const readmeUrl = `https://github.com/benallfree/gobot/blob/main/src/plugins/${slug}/readme.md)`
      const logoUrl = `https://raw.githubusercontent.com/benallfree/gobot/main/assets/${logo || name}.png`
      return [
        mkLink(`<img src="${logoUrl}">`, homepage),
        code(name),
        `${description}${hasReadme ? `<br/>${mkLink(`gobot docs`, readmeUrl)}` : ''}`,
      ]
    }),
])
console.log(md)

export default function (plop) {
  // controller generator
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
          apps: md,
        },
      },
    ],
  })
}
