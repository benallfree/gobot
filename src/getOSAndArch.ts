import { arch as _arch, platform } from 'os'
import { ARCH_MAP, PLATFORM_MAP, isArchKey, isPlatformKey } from './config'

export const osName = () => {
  const _p = platform()

  if (!isPlatformKey(_p)) {
    throw new Error(`Unsupported platform: ${_p}`)
  }
  return PLATFORM_MAP[_p]
}

export const archName = () => {
  const _a = _arch()
  if (!isArchKey(_a)) {
    throw new Error(`Unsupported architecture: ${_a}`)
  }
  return ARCH_MAP[_a]
}
