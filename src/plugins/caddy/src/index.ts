import { platform } from 'os'
import { Plugin, mkPlugin } from '../..'

platform
export const caddy: Plugin = {
  ...mkPlugin(`caddyserver/caddy`),
  getZip(profile) {
    const { os, version, arch } = profile
    return `caddy_${version}_${os}_${arch}.zip`
  },
}
