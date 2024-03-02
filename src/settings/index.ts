import { dbg } from '../log'
import { mergeConfig } from '../mergeConfig'
import { arch } from './arch'
import { cachePath } from './cache'
import { debug } from './debug'
import { os } from './os'
import { version } from './version'

export type Config = {
  env: NodeJS.ProcessEnv
}

export const printSettings = () => {
  const { env } = config()
  dbg(`Current settings: ${os}`)
  dbg(`\tOS:`, os())
  dbg(`\tArch:`, arch())
  dbg(`\tCache path:`, cachePath())
  dbg(`\tVersion:`, version())
  dbg(`\tDebug:`, debug())
  dbg(`\tEnv:`, env)
}

export const config = (() => {
  let _config: Config = {
    env: {},
  }

  return (_in?: Partial<Config>) => {
    if (!_in) return { ..._config }

    _config = mergeConfig<Config>(_config, _in)

    printSettings()

    return _config
  }
})()
