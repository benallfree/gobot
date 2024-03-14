import { keys } from '@s-libs/micro-dash'
import { existsSync, readFileSync } from 'fs'
import { NodePlopAPI } from 'plop'
import {
  DEFAULT_PLATFORM_MAP,
  SUPPORTED_ARCH,
} from '../../src/GithubReleaseProvider'
import { gobot } from '../../src/api'
import { AppInfo } from '../../src/apps/APPS_MAP'
import { getCurrentGitBranch } from './getCurrentGitBranch'
import { availableAppsMd, cliOptionsMd, postambleMd } from './readme'

export async function buildData(plop: NodePlopAPI) {
  const branch = getCurrentGitBranch()

  const data = {
    availableAppsMd: availableAppsMd,
    cliOptionsMd: cliOptionsMd,
    branch,
    platforms: keys(DEFAULT_PLATFORM_MAP),
    architectures: keys(SUPPORTED_ARCH),
    postambleMd: '',
  }

  data.postambleMd = plop.renderString(postambleMd, data)

  return data
}

export async function buildDataForApp(app: AppInfo, plop: NodePlopAPI) {
  const { name } = app

  const bot = gobot(name)
  const versions = await bot.versions()

  const data = {
    ...(await buildData(plop)),
    ...app,
    version: versions[0]!,
    versions,
    notesMd: '',
  }

  const notes = (() => {
    const notesPath = `./src/apps/${name}/notes.md`
    if (!existsSync(notesPath)) return ''
    return readFileSync(notesPath).toString()
  })()
  data.notesMd = plop.renderString(notes, data)

  return data
}
