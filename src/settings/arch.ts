import { values } from '@s-libs/micro-dash'
import { arch as _arch } from 'process'
import { mkSetting } from '../mkSetting'

/**
 * The map of available types.
 */
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

export const archName = () => {
  const _a = _arch
  if (!isArchKey(_a)) {
    throw new Error(`Unsupported architecture: ${_a}`)
  }
  return ARCH_MAP[_a]
}

/**
 * Get or set the architecture. This is the global default used whenever an architecture is not explicitly set.
 *
 * @param newValue The new value to set, one of `amd64`, `arm64`, or `arm7`
 */
export const arch = mkSetting<ArchValue>(archName(), archValueGuard)
