import { keys, map } from '@s-libs/micro-dash'
import findUpJson from 'find-up-json'
import { existsSync, readFileSync } from 'fs'
import { globSync } from 'glob'
import { ActionType, NodePlopAPI } from 'plop'
import { DEFAULT_PLATFORM_MAP, SUPPORTED_ARCH } from '../GithubReleaseProvider'
import { gobot } from '../api'
import { APPS_MAP } from './APPS_MAP'
import { getCurrentGitBranch } from './getCurrentGitBranch'
import { availableAppsMd } from './readme'

const pkg = findUpJson(`package.json`)
if (!pkg) {
  throw new Error(`Couldn't find package`)
}

export const postambleMd = readFileSync(
  `plop-templates/readme/postamble.md`,
).toString()
export const cliOptionsMd = readFileSync(
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
        availableAppsMd,
        cliOptionsMd,
        branch: getCurrentGitBranch(),
        version: versions[0]!,
        versions,
        platforms: keys(DEFAULT_PLATFORM_MAP),
        architectures: keys(SUPPORTED_ARCH),
      }
      data.postambleMd = plop.renderString(postambleMd, data)
      data.notesMd = plop.renderString(notes, data)

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
