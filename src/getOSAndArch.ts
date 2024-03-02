import { platform } from 'os'
import { PLATFORM_MAP, isPlatformKey } from './osArch'

export const osName = () => {
  const _p = platform()

  if (!isPlatformKey(_p)) {
    throw new Error(`Unsupported platform: ${_p}`)
  }
  return PLATFORM_MAP[_p]
}
