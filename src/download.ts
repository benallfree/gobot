import Bottleneck from 'bottleneck'
import { satisfies } from 'semver'
import { getPocketBasePath } from './getPocketBasePath'
import { getReleaseTags } from './getReleaseTags'
import { log as _log, dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { RunOptions } from './run'
import { arch as _arch } from './settings/arch'
import { os as _os } from './settings/os'
import { version as _version } from './settings/version'

export type DownloadOptions = Omit<RunOptions, 'env'> & { log: typeof _log }

export const download = async (options: Partial<DownloadOptions> = {}) => {
  const {
    os,
    arch,
    version: semver,
    log,
  } = mergeConfig<DownloadOptions>(
    {
      os: _os(),
      arch: _arch(),
      version: _version(),
      log: dbg,
    },
    options,
  )

  const tags = await (async () => {
    const tags = await getReleaseTags()
    return tags.filter((version) => satisfies(version, semver))
  })()

  log(`Downloading versions`, tags)
  const limiter = new Bottleneck({ maxConcurrent: 1 })
  await Promise.all(
    tags.map((version) => {
      return limiter.schedule(() => {
        log(`Downloading ${version}`)
        return getPocketBasePath({ version, os, arch })
      })
    }),
  )
}
