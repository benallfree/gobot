import envPaths from 'env-paths'
import { resolve } from 'path'
import { archName, osName } from './getOSAndArch'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { ArchValue, PlatformValue } from './osArch'
import { mkdir, pwd } from './util'

export type Config = {
  arch: ArchValue
  os: PlatformValue
  cachePath: string
  version: string
  debug: boolean
  env: NodeJS.ProcessEnv
}

const paths = envPaths('pbgo')

export const printConfig = () => {
  const { os, arch, cachePath, version, debug, env } = config()
  dbg(`Current config: ${os}`)
  dbg(`\tOS: ${os}`)
  dbg(`\tArch: ${arch}`)
  dbg(`\tCache path: ${cachePath}`)
  dbg(`\tVersion: ${version}`)
  dbg(`\tDebug: ${debug}`)
  dbg(`\tEnv:`, env)
}

export const config = (() => {
  let _config: Config = {
    os: osName(),
    arch: archName(),
    debug: false,
    version: '',
    cachePath: paths.cache,
    env: {},
  }

  return (_in?: Partial<Config>) => {
    if (!_in) return { ..._config }

    _config = mergeConfig<Config>(_config, _in)
    _config.cachePath = resolve(pwd(), _config.cachePath)

    mkdir('-p', _config.cachePath)

    printConfig()

    return _config
  }
})()
