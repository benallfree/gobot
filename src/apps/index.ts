import { isFunction } from '@s-libs/micro-dash'
import { Gobot, GobotOptions } from '../Gobot'
import { mkMinioClientBot } from './mc/mkMinioClientBot'
import { mkMinioServerBot } from './minio/mkMinioServerBot'
import { mkPocketBaseBot } from './pocketbase/PocketBaseBot'
import { mkWeaviateBot } from './weaviate/WeaviateBot'

export type PluginKey = keyof typeof PLUGINS

export type PluginFactory = (optionsIn?: Partial<GobotOptions>) => Gobot

export function isPluginName(name: string): name is keyof typeof PLUGINS {
  return name in PLUGINS
}

export function isPluginFactory(
  plugin: (typeof PLUGINS)[keyof typeof PLUGINS],
): plugin is PluginFactory {
  return isFunction(plugin)
}

export const PLUGINS = {
  pocketbase: mkPocketBaseBot,
  caddy: 'caddyserver/caddy',
  act: 'nektos/act',
  pulumi: `pulumi/pulumi`,
  weaviate: mkWeaviateBot,
  AdGuardHome: `AdguardTeam/AdGuardHome`,
  rclone: `rclone/rclone`,
  minio: mkMinioServerBot,
  mc: mkMinioClientBot,
} as const
