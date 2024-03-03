import Bottleneck from 'bottleneck'
import { getBinaryPath } from './getBinaryPath'
import { log as _log, dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { BinaryProfile } from './run'
import { arch as _arch, os as _os, version as _version } from './settings'
import { getMatchingVersions } from './versions'

export interface DownloadOptions extends BinaryProfile {
  log: typeof _log
}

/**
 * Download one or more versions of a Go binary (default latest version for host machine). Downloads up to 10 binaries concurrently.
 *
 * @param options
 */
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
        return getBinaryPath({
          version,
          os,
          arch,
        })
      })
    }),
  )
}
