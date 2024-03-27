import type { AppInfo } from '..'
import { mkMinioServerBot } from './mkMinioServerBot'

export const minio: AppInfo = {
  name: `Minio`,
  description: `The Object Store for AI Data Infrastructure (server)`,
  homepage: `https://min.io`,
  isAlpha: true,
  factory: mkMinioServerBot,
}
