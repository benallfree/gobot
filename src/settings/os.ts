import { flatten, values } from '@s-libs/micro-dash'
import { platform } from 'os'
import { mkSetting } from '../util/mkSetting'

export const PLATFORM_MAP = {
  aix: ['aix'],
  android: ['android'],
  darwin: ['darwin', 'mac', 'osx'],
  freebsd: ['freebsd'],
  haiku: ['haiku'],
  linux: ['linux'],
  openbsd: ['openbsd'],
  sunos: ['sunos'],
  win32: ['win32', 'windows'],
  cygwin: ['cygwin'],
  netbsd: ['netbsd'],
} as const

export type PlatformMap = typeof PLATFORM_MAP
export type PlatformKey = keyof PlatformMap

const PLATFORM_VALUES = flatten(values(PLATFORM_MAP))
/**
 * One of `darwin`, `linux`, or `windows`
 * @interface
 */
export type PlatformValue = (typeof PLATFORM_VALUES)[number]

export const isPlatformKey = (
  platformKey: string,
): platformKey is PlatformKey => {
  return !!PLATFORM_MAP[platformKey as PlatformKey]
}
export const isPlatformValue = (
  platformValue: string,
): platformValue is PlatformValue => {
  return PLATFORM_VALUES.includes(platformValue as PlatformValue)
}

export function platformValueGuard(platformValue: string): PlatformValue {
  if (!isPlatformValue(platformValue))
    throw new Error(
      `${platformValue} is not a known platform: ${PLATFORM_VALUES.join(`,`)}`,
    )
  return platformValue
}

/**
 * Get or set the operating system global (one of: `linux`, `windows`, `darwin`)
 */
export const os = mkSetting(platform(), platformValueGuard)
