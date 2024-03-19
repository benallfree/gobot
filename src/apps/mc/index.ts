import { AppInfo } from '..'
import { mkMinioClientBot } from './mkMinioClientBot'

export const mc: AppInfo = {
  name: `Mc`,
  description: `The Object Store for AI Data Infrastructure (client)`,
  homepage: `https://min.io`,
  isAlpha: true,
  factory: mkMinioClientBot,
}
