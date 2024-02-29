import { chmodSync, existsSync, readFileSync, writeFileSync } from 'fs'
import JSZip from 'jszip'
import fetch from 'node-fetch'
import { arch as _arch, platform } from 'os'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

// Get the __filename equivalent in ESM
const __filename = fileURLToPath(import.meta.url)

// Get the __dirname equivalent in ESM
const __dirname = dirname(__filename)

/**
 * @typedef {('darwin' | 'linux' | 'windows')} PlatformType
 * @typedef {('amd64' | 'arm64' | 'arm7')} ArchType
 */

/**
 * Gets the operating system name and architecture.
 * @returns {{os: PlatformType, arch: ArchType}} An object containing the operating system name and architecture.
 */
function getOSAndArch() {
  const platformMap = {
    darwin: 'darwin',
    linux: 'linux',
    win32: 'windows',
  }

  const archMap = {
    x64: 'amd64',
    arm64: 'arm64',
    arm: 'arm7',
  }

  const osName = /** @returns {PlatformType} */ () => {
    const _p = platform()
    if (!(_p in platformMap)) {
      throw new Error(`Unsupported platform: ${_p}`)
    }
    // @ts-ignore
    return platformMap[_p]
  }
  const archName = /** @returns {ArchType} */ () => {
    const _a = _arch()
    if (!(_a in archMap)) {
      throw new Error(`Unsupported architecture: ${_a}`)
    }
    // @ts-ignore
    return archMap[_a]
  }

  return { os: osName(), arch: archName() }
}

export const getPath = async () => {
  const pkg = JSON.parse(
    readFileSync(join(__dirname, `..`, `package.json`)).toString(),
  )
  const [version] = pkg.version.split(/-/)
  const { os, arch } = getOSAndArch()

  const binaryName = os === 'windows' ? `pocketbase.exe` : 'pocketbase'
  const fname = resolve(__dirname, binaryName)

  // If binary exists, skip download
  if (!existsSync(fname)) {
    const link = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_${os}_${arch}.zip`
    console.log(`Downloading ${link}`)

    const res = await fetch(link)
    const content = await res.arrayBuffer()

    var new_zip = new JSZip()
    const zip = await new_zip.loadAsync(content)

    const pb = await zip.file(binaryName)?.async('nodebuffer')

    if (!pb) {
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
