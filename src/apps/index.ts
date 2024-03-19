import { isFunction } from '@s-libs/micro-dash'
import { Gobot, GobotOptions } from '../Gobot'

export type AppInfo = {
  name: string
  factory: AppFactory | string
  description: string
  homepage: string
  isAlpha: boolean
  version?: string
}

export type AppFactory = (optionsIn?: Partial<GobotOptions>) => Gobot

export function isAppFactory(app: AppInfo['factory']): app is AppFactory {
  return isFunction(app)
}
