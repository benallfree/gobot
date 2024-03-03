import { chmodSync, existsSync, writeFileSync } from 'fs'
import JSZip from 'jszip'
import fetch from 'node-fetch'
import { resolve } from 'path'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { mkPromiseSingleton } from './mkPromiseSingleton'
import { RunOptions } from './run'
import { arch as _arch } from './settings/arch'
import { cachePath } from './settings/cache'
import { os as _os } from './settings/os'
import { version as _version } from './settings/version'
import { getMatchingVersion } from './versions'

export type BinaryOptions = Omit<RunOptions, 'env'>

export const getPocketBasePath = mkPromiseSingleton(
  async (options: Partial<BinaryOptions> = {}) => {
    const {
      os,
      arch,
      version: semver,
    } = mergeConfig<BinaryOptions>(
      {
        os: _os(),
        arch: _arch(),
        version: _version(),
      },
      options,
    )

    const version = await getMatchingVersion(semver)

    const binaryName_Out =
      os === 'windows'
        ? `pocketbase_${os}_${arch}_${version}.exe`
        : `pocketbase_${os}_${arch}_${version}`
    const fname = resolve(cachePath(), binaryName_Out)

    // If binary exists, skip download
    if (!existsSync(fname)) {
      const link = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_${os}_${arch}.zip`
      dbg(`Downloading ${link}`)

      const res = await fetch(link)
      if (res.status === 404) {
        throw new Error(`${link} is not a valid build.`)
      }
      const content = await res.arrayBuffer()

      var new_zip = new JSZip()
      const zip = await new_zip.loadAsync(content)

      const binaryName_In = os === 'windows' ? `pocketbase.exe` : `pocketbase`
      const pb = await zip.file(binaryName_In)?.async('nodebuffer')

      if (!pb) {
        dbg(`Extraction failure`)
        throw new Error(`Unable to extract ${link}`)
      }

      writeFileSync(fname, pb, { mode: 0o755 })
    }

    // Ensure the binary is executable
    if (os !== 'windows') {
      chmodSync(fname, '755')
    }

    return fname
  },
)
