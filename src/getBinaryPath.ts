import { chmodSync, existsSync, writeFileSync } from 'fs'
import JSZip from 'jszip'
import fetch from 'node-fetch'
import { resolve } from 'path'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { mkPromiseSingleton } from './mkPromiseSingleton'
import { BinaryProfile } from './run'
import {
  arch as _arch,
  os as _os,
  version as _version,
  cachePath,
  plugin,
} from './settings'
import { getMatchingVersion } from './versions'

const _getBinaryPath = mkPromiseSingleton(async (profile: BinaryProfile) => {
  const { version, os, arch } = profile
  const { name, repo, getZip, getExtractionName } = plugin()
  const binaryName_Out =
    os === 'windows'
      ? `${name}_${os}_${arch}_${version}.exe`
      : `${name}_${os}_${arch}_${version}`
  const binaryPath = resolve(cachePath(), binaryName_Out)
  dbg(`Binary path`, binaryPath)

  // If binary exists, skip download
  if (!existsSync(binaryPath)) {
    const link = `https://github.com/${repo}/releases/download/v${version}/${getZip({ version, os, arch })}`
    dbg(`Downloading ${link}`)

    const res = await fetch(link)
    if (res.status === 404) {
      throw new Error(`${link} is not a valid build.`)
    }
    const content = await res.arrayBuffer()

    var new_zip = new JSZip()
    const zip = await new_zip.loadAsync(content)

    const binaryName_In = getExtractionName({ version, os, arch })
    const binaryData = await zip.file(binaryName_In)?.async('nodebuffer')

    if (!binaryData) {
      dbg(`Extraction failure`)
      throw new Error(`Unable to extract ${link}`)
    }

    dbg(`Writing`, binaryPath)
    writeFileSync(binaryPath, binaryData, { mode: 0o755 })
  }

  // Ensure the binary is executable
  if (os !== 'windows') {
    chmodSync(binaryPath, '755')
  }

  return binaryPath
})

/**
 * Return the file path for the given binary profile (`version`, `os`, and `arch`, all defaulting to global settings which default to host machine compatibility)
 *
 */
export const getBinaryPath = async (options: Partial<BinaryProfile> = {}) => {
  const {
    os,
    arch,
    version: semver,
  } = mergeConfig<BinaryProfile>(
    {
      os: _os(),
      arch: _arch(),
      version: _version(),
    },
    options,
  )

  const version = await getMatchingVersion(semver)

  return _getBinaryPath(`${version}_${os}_${arch}`)({ version, os, arch })
}
