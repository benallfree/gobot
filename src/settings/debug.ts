import { dbg } from '../log'
import { mkSetting } from '../mkSetting'
import { arch } from './arch'
import { cachePath } from './cache'
import { env } from './env'
import { os } from './os'
import { version } from './version'

export const printSettings = () => {
  dbg(`Current settings: ${os}`)
  dbg(`\tOS:`, os())
  dbg(`\tArch:`, arch())
  dbg(`\tCache path:`, cachePath())
  dbg(`\tVersion:`, version())
  dbg(`\tDebug:`, debug())
  dbg(`\tEnv:`, env())
}

export const debug = mkSetting(false)
