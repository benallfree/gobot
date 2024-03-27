import type { AppInfo } from '..'
import { mkGotifyc } from './overrides'

export const gotifyc: AppInfo = {
  name: 'Gotify CLI',
  description: `A command line interface for pushing messages to gotify/server.`,
  homepage: `https://github.com/gotify/cli`,
  isAlpha: true,
  factory: mkGotifyc,
}
