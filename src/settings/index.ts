import { dbg } from '../log'
import { mergeConfig } from '../mergeConfig'
import { arch } from './arch'
import { cachePath } from './cache'
import { os } from './os'

export type Config = {
  version: string
  debug: boolean
  env: NodeJS.ProcessEnv
}

export const printSettings = () => {
  const { version, debug, env } = config()
  dbg(`Current settings: ${os}`)
  dbg(`\tOS:`, os())
  dbg(`\tArch:`, arch())
  dbg(`\tCache path:`, cachePath())
  dbg(`\tVersion: ${version}`)
  dbg(`\tDebug: ${debug}`)
  dbg(`\tEnv:`, env)
}

export const config = (() => {
  let _config: Config = {
    debug: false,
    version: '',
    env: {},
  }

  return (_in?: Partial<Config>) => {
    if (!_in) return { ..._config }

    _config = mergeConfig<Config>(_config, _in)

    printSettings()

    return _config
  }
})()
