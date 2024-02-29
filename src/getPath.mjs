import { chmodSync, existsSync, writeFileSync } from 'fs'
import JSZip from 'jszip'
import fetch from 'node-fetch'
import { resolve } from 'path'
import { config } from './config.mjs'
import { dbg } from './dbg.mjs'
import { getLatestReleaseVersion } from './getLatestRelease.mjs'
import { getOSAndArch } from './getOSAndArch.mjs'

export const getPath = async (
  /** @type{Partial<{version: string, refresh: boolean, debug:boolean}>|undefined}*/ cfg = {},
) => {
  if (typeof cfg.debug !== 'undefined') {
    config.debug = !!cfg.debug
  }

  const version = (
    cfg.version || (await getLatestReleaseVersion(cfg.refresh))
  ).replace(/^v/, '')
  const { os, arch } = getOSAndArch()

  dbg(`Cache path: ${config.cachePath}`)
  dbg(`Version: ${version}`)
  dbg(`OS: ${os}`)
  dbg(`Arch: ${arch}`)

  const binaryName_Out =
    os === 'windows' ? `pocketbase_${version}.exe` : `pocketbase_${version}`
  const fname = resolve(config.cachePath, binaryName_Out)

  // If binary exists, skip download
  if (!existsSync(fname) || cfg.refresh) {
    const link = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_${os}_${arch}.zip`
    dbg(`Downloading ${link}`)

    const res = await fetch(link)
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
