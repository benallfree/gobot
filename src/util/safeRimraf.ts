import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { __root } from './__root'

export const safeRimraf = (path: string) => {
  const final = resolve(path)
  if (!final.startsWith(__root)) {
    throw new Error(
      `Refusing to delete, path ${final} does not begin with ${__root}`,
    )
  }
  return rimraf(final, { glob: true })
}
