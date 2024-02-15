const JSZip = require('jszip')
const { writeFileSync, existsSync, unlinkSync, chmodSync } = require('fs')
const { resolve } = require('path')

function getOSAndArch() {
  const os = require('os')

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

  let osName = platformMap[os.platform()] || 'unknown'
  let archName = archMap[os.arch()] || 'unknown'

  return { os: osName, arch: archName }
}

;(async () => {
  const pkg = require('./package.json')
  const [version] = pkg.version.split(/-/)
  const { os, arch } = getOSAndArch()

  const link = `https://github.com/pocketbase/pocketbase/releases/download/v${version}/pocketbase_${version}_${os}_${arch}.zip`
  console.log(`Downloading ${link}`)

  const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))

  const res = await fetch(link)
  const content = await res.arrayBuffer()

  var new_zip = new JSZip()
  const zip = await new_zip.loadAsync(content)

  const isWindows = os === `windows`
  const binaryNameIn = isWindows ? `pocketbase.exe` : 'pocketbase'
  const pb = await zip.file(binaryNameIn).async('nodebuffer')

  const binaryNameOut = isWindows ? `pocketbase.exe` : 'pocketbase'
  const fname = resolve(__dirname, binaryNameOut)
  if (existsSync(fname)) {
    unlinkSync(fname)
  }

  writeFileSync(fname, pb, { mode: 0o755 })

  if (isWindows) {
    chmodSync(`pbgo.bat`, 0o755)
    pkg.bin.pbgo = './pbgo.bat'
    writeFileSync(`package.json`, JSON.stringify(pkg, null, 2))
  }
})()
