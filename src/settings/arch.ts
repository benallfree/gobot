import { flatten, values } from '@s-libs/micro-dash'
import { arch as _arch } from 'process'
import { mkSetting } from '../util/mkSetting'

/**
 * The map of available types.
 */
export const ARCH_MAP = {
  arm7: ['arm', 'arm7'],
  arm64: ['arm64'],
  ia32: ['ia32', `i386`],
  mips: ['mips'],
  mipsel: ['mipsel'],
  ppc: ['ppc'],
  ppc64: ['ppc64'],
  riscv64: ['riscv64'],
  s390: ['s390'],
  s390x: ['s390x'],
  x64: ['x64', `x86_64`],
} as const

const ARCH_VALUES = flatten(values(ARCH_MAP))

export type ArchMap = typeof ARCH_MAP
export type ArchKey = keyof ArchMap
export type ArchValue = (typeof ARCH_VALUES)[number]

export const isArchKey = (archKey: string): archKey is ArchKey => {
  return !!ARCH_MAP[archKey as ArchKey]
}
export const isArchValue = (archValue: string): archValue is ArchValue => {
  return ARCH_VALUES.includes(archValue as ArchValue)
}
export function archValueGuard(archValue: string): ArchValue {
  if (!isArchValue(archValue))
    throw new Error(
      `${archValue} is not a known architecture: ${values(ARCH_MAP).join(`,`)}`,
    )
  return archValue
}

/**
 * Get or set the architecture. This is the global default used whenever an architecture is not explicitly set.
 *
 * @param newValue The new value to set, one of `amd64`, `arm64`, or `arm7`
 */
export const arch = mkSetting<ArchValue>(_arch, archValueGuard)
