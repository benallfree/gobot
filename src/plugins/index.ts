import { BinaryProfile } from '../run'
import { ARCH_MAP, ArchKey, PLATFORM_MAP, PlatformKey } from '../settings'
import { act } from './act/src'
import { caddy } from './caddy/src'
import { pocketbase } from './pocketbase/src'

export interface Plugin {
  name: PluginKey
  repo: string
  prepare: (args: string[]) => void
  getZip(profile: BinaryProfile): string
  getExtractionName(profile: BinaryProfile): string
  os(osName: PlatformKey): string
  arch(archName: ArchKey): string
}

export type PluginKey = keyof typeof PLUGINS

export const PLUGINS = {
  pocketbase,
  caddy,
  act,
}

export const mkPlugin = (repo: string): Plugin => {
  const [userName, repoName] = repo.split('/') as [string, string]
  const plugin: Plugin = {
    name: repoName as PluginKey,
    repo,
    prepare(args) {},
    getZip(profile) {
      const { os, version, arch } = profile
      return `${repoName}_${version}_${os}_${arch}.zip`
    },
    getExtractionName(profile) {
      const { os, version, arch } = profile
      return os === 'windows' ? `${repoName}.exe` : repoName
    },
    os(osName) {
      return PLATFORM_MAP[osName]
    },
    arch(archName) {
      return ARCH_MAP[archName]
    },
  }
  return plugin
}
