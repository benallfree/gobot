import { isFunction } from '@s-libs/micro-dash'
import { Gobot, GobotOptions } from '../Gobot'
import { mkMinioClientBot } from './mc/mkMinioClientBot'
import { mkMinioServerBot } from './minio/mkMinioServerBot'
import { mkOllamaBot } from './ollama/factory'
import { mkPocketBaseBot } from './pocketbase/PocketBaseBot'

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
  act: 'nektos/act',
  age: 'FiloSottile/age',
  AdGuardHome: `AdguardTeam/AdGuardHome`,
  backrest: `garethgeorge/backrest`,
  caddy: 'caddyserver/caddy',
  fzf: `junegunn/fzf`,
  gptscript: `gptscript-ai/gptscript`,
  hugo: `gohugoio/hugo`,
  lazygit: `jesseduffield/lazygit`,
  loki: `grafana/loki`,
  mc: mkMinioClientBot,
  minio: mkMinioServerBot,
  ollama: mkOllamaBot,
  pocketbase: mkPocketBaseBot,
  pulumi: `pulumi/pulumi`,
  rclone: `rclone/rclone`,
  restic: 'restic/restic',
  reviewdog: `reviewdog/reviewdog`,
  weaviate: `weaviate/weaviate`,
} as const
