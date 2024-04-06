import { globSync } from 'glob'
import { basename, dirname, join } from 'path'
import sharp from 'sharp'
import { fn } from './fn'

const _resize = async (path: string, size: number) => {
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

export const resize = (path: string, size: number) =>
  fn(() => _resize(path, size))
