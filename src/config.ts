import { archName, osName } from './getOSAndArch'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { ArchValue, PlatformValue } from './osArch'
import { cachePath } from './settings/cache'

export type Config = {
  arch: ArchValue
  os: PlatformValue
  version: string
  debug: boolean
  env: NodeJS.ProcessEnv
}

export const printConfig = () => {
  const { os, arch, version, debug, env } = config()
  dbg(`Current config: ${os}`)
  dbg(`\tOS: ${os}`)
  dbg(`\tArch: ${arch}`)
  dbg(`\tCache path:`, cachePath())
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
    env: {},
  }

  return (_in?: Partial<Config>) => {
    if (!_in) return { ..._config }

    _config = mergeConfig<Config>(_config, _in)

    printConfig()

    return _config
  }
})()
