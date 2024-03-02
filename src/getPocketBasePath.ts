import { chmodSync, existsSync, writeFileSync } from 'fs'
import JSZip from 'jszip'
import fetch from 'node-fetch'
import { resolve } from 'path'
import { maxSatisfying } from 'semver'
import { getAvailableVersions } from './api'
import { config } from './config'
import { dbg } from './log'

export const getPocketBasePath = async () => {
  const { version: semver, cachePath, os, arch } = config()

  dbg(`Requested semver: ${semver}`)
  const versions = await getAvailableVersions()
  const version = maxSatisfying(versions, semver)
  if (!version) {
    throw new Error(`No version satisfies ${semver} (${versions.join(', ')})`)
  }
  dbg(`Selected version: ${version}`)

  const binaryName_Out =
    os === 'windows'
      ? `pocketbase_${os}_${arch}_${version}.exe`
      : `pocketbase_${os}_${arch}_${version}`
  const fname = resolve(cachePath, binaryName_Out)

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
}
