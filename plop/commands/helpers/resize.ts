import { globSync } from 'glob'
import { basename, dirname, join } from 'path'
import type { CustomActionFunction } from 'plop'
import sharp from 'sharp'

export const resize =
  (path: string, size: number): CustomActionFunction =>
  async (answers, { onProgress }) => {
    onProgress(`Resizing ${path} to size ${size}`)
    const logos = globSync(path)
    await Promise.all(
      logos.map(async (logo) => {
        await sharp(logo)
          .resize({ width: 50 })
          .trim()
          .webp()
          .toFile(join(dirname(logo), `logo-${size}x.webp`))
        await sharp(logo)
          .resize({ height: 50 })
          .trim()
          .webp()
          .toFile(join(dirname(logo), `logo-x${size}.webp`))
      }),
    )
    return `resize ${logos.map((logo) => basename(logo)).join(`,`)}`
  }
