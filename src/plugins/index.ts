import { isFunction } from '@s-libs/micro-dash'
import { GobotBase, GobotOptions } from '../GobotBase'
import { mkWeaviateBot } from './WeaviateBot'

export type PluginKey = keyof typeof PLUGINS

export type PluginFactory = (optionsIn?: Partial<GobotOptions>) => GobotBase

export function isPluginName(name: string): name is keyof typeof PLUGINS {
  return name in PLUGINS
}

export function isPluginFactory(
  plugin: (typeof PLUGINS)[keyof typeof PLUGINS],
): plugin is PluginFactory {
  return isFunction(plugin)
}

export const PLUGINS = {
  pocketbase: `pocketbase/pocketbase`,
  caddy: 'caddyserver/caddy',
  act: 'nektos/act',
  pulumi: `pulumi/pulumi`,
  weaviate: mkWeaviateBot,
  AdGuardHome: `AdguardTeam/AdGuardHome`,
  rclone: `rclone/rclone`,
} as const
