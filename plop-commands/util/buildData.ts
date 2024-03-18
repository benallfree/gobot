import { keys } from '@s-libs/micro-dash'
import { existsSync, readFileSync } from 'fs'
import { NodePlopAPI } from 'plop'
import {
  DEFAULT_PLATFORM_MAP,
  SUPPORTED_ARCH,
} from '../../src/GithubReleaseProvider'
import { AppInfo, gobot } from '../../src/api'
import { getCurrentGitBranch } from './getCurrentGitBranch'
import { availableAppsMd, cliOptionsMd, postambleMd } from './readme'

export async function buildData(plop: NodePlopAPI) {
  const branch = getCurrentGitBranch()

  const data = {
    cliOptionsMd: cliOptionsMd,
    branch,
    platforms: keys(DEFAULT_PLATFORM_MAP),
    architectures: keys(SUPPORTED_ARCH),
    availableAppsMd: '',
    postambleMd: '',
  }

  data.postambleMd = plop.renderString(postambleMd, data)
  data.availableAppsMd = plop.renderString(availableAppsMd, data)

  return data
}

export async function buildDataForApp(app: AppInfo, plop: NodePlopAPI) {
  const { name } = app

  const bot = gobot(name)
  const versions = await bot.versions()
  const releases = await bot.releases()

  const data = {
    ...(await buildData(plop)),
    ...app,
    bot,
    version: versions[0]!,
    versions,
    notesMd: '',
    releasesMd: '',
  }

  const notes = (() => {
    const notesPath = `./src/apps/${name}/notes.md`
    if (!existsSync(notesPath)) return ''
    return readFileSync(notesPath).toString()
  })()

  data.releasesMd = await bot.versions('md')

  data.notesMd = plop.renderString(notes, data)

  return data
}
