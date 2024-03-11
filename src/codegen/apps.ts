import { keys, map, times } from '@s-libs/micro-dash'
import { execSync } from 'child_process'
import findUpJson from 'find-up-json'
import { existsSync, readFileSync } from 'fs'
import { globSync } from 'glob'
import { markdownTable } from 'markdown-table'
import { ActionType, NodePlopAPI } from 'plop'
import { DEFAULT_PLATFORM_MAP, SUPPORTED_ARCH } from '../GithubReleaseProvider'
import { gobot } from '../api'
import { APPS_MAP } from './APPS_MAP'

function getCurrentGitBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    return branch
  } catch (error) {
    console.error('Failed to get current git branch:', error)
    return null
  }
}

export const branch = getCurrentGitBranch()

const pkg = findUpJson(`package.json`)
if (!pkg) {
  throw new Error(`Couldn't find package`)
}

const mkLink = (name: string, url: string) => `[${name}](${url})`
const code = (content: string) => `\`${content}\``
const space = (n = 5) => times(n, () => `&nbsp;`).join('')

export const appsTable = markdownTable([
  [space(10), code(`<app>`), `What is it?`],
  ...APPS_MAP.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
  ).map((app) => {
    const { name, description, homepage, slug, logo } = app
    const readmeUrl = `https://github.com/benallfree/gobot/tree/${branch}/src/plugins/${name}/helper/readme.md`
    const logoUrl = `https://raw.githubusercontent.com/benallfree/gobot/${branch}/src/plugins/${name}/logo-50x.png`
    return [
      mkLink(`<img src="${logoUrl}">`, homepage),
      code(name),
      description,
      mkLink(`readme`, readmeUrl),
    ]
  }),
])

export const postamble = readFileSync(
  `plop-templates/readme/postamble.md`,
).toString()
export const cli_options = readFileSync(
  `plop-templates/readme/cli_options.md`,
).toString()

export const mkActions = async (plop: NodePlopAPI) => {
  const actions: ActionType[] = []
  const distFiles = globSync(`*`, { cwd: `plop-templates/plugin/helper/dist` })

  const srcFiles = globSync(`**/*.ts`, {
    cwd: `plop-templates/plugin/helper/src`,
  })

  await Promise.all(
    map(APPS_MAP, async (app) => {
      const { name } = app

      const bot = gobot(name)
      const versions = await bot.versions()

      const notes = (() => {
        const notesPath = `./src/plugins/${name}/notes.md`
        if (!existsSync(notesPath)) return ''
        return readFileSync(notesPath).toString()
      })()

      const data: any = {
        ...app,
        apps: appsTable,
        cli_options,
        branch,
        version: versions[0]!,
        versions,
        platforms: keys(DEFAULT_PLATFORM_MAP),
        architectures: keys(SUPPORTED_ARCH),
      }
      data.postamble = plop.renderString(postamble, data)
      data.notes = plop.renderString(notes, data)

      actions.push({
        type: 'addMany',
        destination: `src/plugins/${name}/sample-project`,
        base: 'plop-templates/plugin/sample-project',
        templateFiles: 'plop-templates/plugin/sample-project/**/*',
        globOptions: { dot: true, ignore: [`node_modules`] },
        data,
        force: true,
      })
      versions.forEach((version) => {
        actions.push({
          type: 'addMany',
          destination: `build/plugins/${name}/${version}`,
          base: 'plop-templates/plugin/helper',
          templateFiles: 'plop-templates/plugin/helper/**/*',
          globOptions: {
            dot: true,
            ignore: [`**/node_modules`],
          },
          data: { ...data, version },
          force: true,
          verbose: true,
        })
        distFiles.forEach((file) => {
          const path = `build/plugins/${name}/${version}/dist/${file}`
          actions.push({
            type: 'modify',
            path,
            pattern: /__EXPORT__/g,
            template: name,
          })
        })
      })
      const latest = versions[0]!
      actions.push({
        type: 'addMany',
        destination: `src/plugins/${name}/helper`,
        base: 'plop-templates/plugin/helper',
        templateFiles: 'plop-templates/plugin/helper/**/*',
        globOptions: {
          dot: true,
          ignore: [`**/node_modules`, `**/dist`, `**/.DS_Store`],
        },
        data: { ...data, version: latest },
        force: true,
        verbose: true,
      })
      srcFiles.forEach((path) => {
        actions.push({
          type: 'modify',
          path: `src/plugins/${name}/helper/src/${path}`,
          pattern: /__EXPORT__/g,
          template: name,
        })
      })
    }),
  )
  return actions
}
