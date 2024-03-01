import { arch as _arch, platform } from 'os'

/**
 * @typedef {('darwin' | 'linux' | 'windows')} PlatformType
 * @typedef {('amd64' | 'arm64' | 'arm7')} ArchType
 */
/**
 * Gets the operating system name and architecture.
 * @returns {{os: PlatformType, arch: ArchType}} An object containing the operating system name and architecture.
 */

export function getOSAndArch() {
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
