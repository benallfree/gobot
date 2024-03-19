import { AppInfo } from '../'

export const caddy: AppInfo = {
  name: `Caddy`,
  description: `Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS`,
  homepage: `https://caddyserver.com/`,
  isAlpha: true,
  factory: 'caddyserver/caddy',
}
