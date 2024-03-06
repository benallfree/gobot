export type PluginKey = keyof typeof PLUGINS

export const PLUGINS = {
  pocketbase: `pocketbase/pocketbase`,
  caddy: 'caddyserver/caddy',
  act: 'nektos/act',
  pulumi: `pulumi/pulumi`,
}
