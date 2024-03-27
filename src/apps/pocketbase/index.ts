import type { AppInfo } from '../'
import { mkPocketBaseBot } from './PocketBaseBot'

export const pocketbase: AppInfo = {
  name: `PocketBase`,
  description: `Open Source realtime backend in 1 file`,
  homepage: `https://pocketbase.io`,
  isAlpha: true,
  factory: mkPocketBaseBot,
}
