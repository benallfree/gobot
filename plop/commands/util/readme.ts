import { times } from '@s-libs/micro-dash'
import { markdownTable } from 'markdown-table'
import { getApp } from '../../../src/util/getApp'
import { getCurrentGitBranch } from './getCurrentGitBranch'
import { getSlugsFromFileSystem } from './getSlugsFromFileSystem'

const mkLink = (name: string, url: string) => `[${name}](${url})`
const code = (content: string) => `\`${content}\``
const space = (n = 5) => times(n, () => `&nbsp;`).join('')

export const mkAvailableAppsMd = async () => {
  const sortedSlugs = getSlugsFromFileSystem()
  const rows = await Promise.all(
    sortedSlugs.map(async (slug) => {
      const app = await getApp(slug)
      if (!app) throw new Error(`${slug} is not an app (mkAvailableAppsMd)`)
      const branch = getCurrentGitBranch()
      const { description, homepage } = app
      const npmUrl = `https://www.npmjs.com/package/gobot-${slug.toLocaleLowerCase()}`
      const logoUrl = `https://raw.githubusercontent.com/benallfree/gobot/${branch}/src/apps/${slug}/logo-50x.webp`
      return [
        mkLink(`<img src="${logoUrl}">`, homepage),
        code(slug),
        description,
        mkLink(`npm`, npmUrl),
      ]
    }),
  )
  return markdownTable([[space(10), code(`<app>`), `What is it?`], ...rows])
}
