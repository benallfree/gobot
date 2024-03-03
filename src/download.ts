import Bottleneck from 'bottleneck'
import { getPocketBasePath } from './getPocketBasePath'
import { log as _log, dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { RunOptions } from './run'
import { arch as _arch } from './settings/arch'
import { os as _os } from './settings/os'
import { version as _version } from './settings/version'
import { getMatchingVersions } from './versions'

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

  const tags = await getMatchingVersions(semver)

  log(`Downloading versions`, tags)
  const limiter = new Bottleneck({ maxConcurrent: 10 })
  await Promise.all(
    tags.map((version) => {
      return limiter.schedule(() => {
        log(`Downloading ${version}`)
        return getPocketBasePath(`${version}_${os}_${arch}`)({
          version,
          os,
          arch,
        })
      })
    }),
  )
}
