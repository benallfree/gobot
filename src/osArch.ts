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

export const ARCH_MAP = {
  x64: 'amd64',
  arm64: 'arm64',
  arm: 'arm7',
} as const

export type ArchMap = typeof ARCH_MAP
export type ArchKey = keyof ArchMap
export type ArchValue = ArchMap[ArchKey]

export const isArchKey = (archKey: string): archKey is ArchKey => {
  return !!ARCH_MAP[archKey as ArchKey]
}
export const isArchValue = (archValue: string): archValue is ArchValue => {
  return values(ARCH_MAP).includes(archValue as ArchValue)
}
export function archValueGuard(archValue: string): ArchValue {
  if (!isArchValue(archValue))
    throw new Error(
      `${archValue} is not a known architecture: ${values(ARCH_MAP).join(`,`)}`,
    )
  return archValue
}
