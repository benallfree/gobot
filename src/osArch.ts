import { values } from '@s-libs/micro-dash'

export const PLATFORM_MAP = {
  darwin: 'darwin',
  linux: 'linux',
  win32: 'windows',
} as const

export type PlatformMap = typeof PLATFORM_MAP
export type PlatformKey = keyof PlatformMap
export type PlatformValue = PlatformMap[PlatformKey]

export const isPlatformKey = (
  platformKey: string,
): platformKey is PlatformKey => {
  return !!PLATFORM_MAP[platformKey as PlatformKey]
}
export const isPlatformValue = (
  platformValue: string,
): platformValue is PlatformValue => {
  return values(PLATFORM_MAP).includes(platformValue as PlatformValue)
}

export function platformValueGuard(platformValue: string): PlatformValue {
  if (!isPlatformValue(platformValue))
    throw new Error(
      `${platformValue} is not a known platform: ${values(PLATFORM_MAP).join(`,`)}`,
    )
  return platformValue
}
