import { isFunction } from '@s-libs/micro-dash'
import { Gobot, GobotOptions } from '../Gobot'
import { mkMinioClientBot } from './mc/mkMinioClientBot'
import { mkMinioServerBot } from './minio/mkMinioServerBot'
import { mkPocketBaseBot } from './pocketbase/PocketBaseBot'
import { mkWeaviateBot } from './weaviate/WeaviateBot'

export type AppKey = keyof typeof APPS

export type AppFactory = (optionsIn?: Partial<GobotOptions>) => Gobot

export function isAppName(name: string): name is keyof typeof APPS {
  return name in APPS
}

export function isAppFactory(
  app: (typeof APPS)[keyof typeof APPS],
): app is AppFactory {
  return isFunction(app)
}

export const APPS = {
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
