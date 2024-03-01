import envPaths from 'env-paths'
import { mkdirSync } from 'fs'
import { dbg } from './dbg'

export type Config = {
  cachePath: string
  version: string
  refresh: boolean
  debug: boolean
  env: NodeJS.ProcessEnv
}

const paths = envPaths('pbgo')

export const config = (() => {
  const _config: Config = {
    debug: false,
    version: '',
    refresh: false,
    cachePath: '',
    env: {},
  }

  return (_in?: Partial<Config>) => {
    if (!_in) return { ..._config }

    const refresh = !!_in.refresh
    const debug = !!_in.debug
    const cachePath = _in.cachePath || paths.cache
    const version = _in.version || ''
    const env = _in.env || {}

    mkdirSync(cachePath, { recursive: true })

    _config.cachePath = cachePath
    _config.debug = debug
    _config.version = version
    _config.refresh = refresh
    _config.env = env

    dbg(`Cache path: ${cachePath}`)
    dbg(`Version: ${version}`)
    dbg(`Debug: ${debug}`)
    dbg(`Refresh: ${refresh}`)
    dbg(`Env:`, env)

    return _config
  }
})()
