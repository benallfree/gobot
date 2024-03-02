import { values } from '@s-libs/micro-dash'
import envPaths from 'env-paths'
import { resolve } from 'path'
import { dbg } from './dbg'
import { archName, osName } from './getOSAndArch'
import { mkdir, pwd } from './util'

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

export type Config = {
  arch: ArchValue
  os: PlatformValue
  cachePath: string
  version: string
  refresh: boolean
  debug: boolean
  env: NodeJS.ProcessEnv
}

const paths = envPaths('pbgo')

export const config = (() => {
  const _config: Config = {
    os: osName(),
    arch: archName(),
    debug: false,
    version: '',
    refresh: false,
    cachePath: paths.cache,
    env: {},
  }

  return (_in?: Partial<Config>) => {
    if (!_in) return { ..._config }

    const os = _in.os || osName()
    const arch = _in.arch || archName()
    const refresh = !!_in.refresh
    const debug = !!_in.debug
    const cachePath = _in.cachePath
      ? resolve(pwd(), _in.cachePath)
      : paths.cache
    const version = _in.version || ''
    const env = _in.env || {}

    mkdir('-p', cachePath)

    _config.os = os
    _config.arch = arch
    _config.cachePath = cachePath
    _config.debug = debug
    _config.version = version
    _config.refresh = refresh
    _config.env = env

    dbg(`OS: ${os}`)
    dbg(`Arch: ${arch}`)
    dbg(`Cache path: ${cachePath}`)
    dbg(`Version: ${version}`)
    dbg(`Debug: ${debug}`)
    dbg(`Refresh: ${refresh}`)
    dbg(`Env:`, env)

    return _config
  }
})()
