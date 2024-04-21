import type { AppInfo } from '..'
import { mkGotify } from './overrides'

export const gotify: AppInfo = {
  name: 'Gotify',
  description: `A simple server for sending and receiving messages in real-time per WebSocket. (Includes a sleek web-ui)`,
  homepage: `https://gotify.net`,
  isAlpha: true,
  factory: mkGotify,
}
