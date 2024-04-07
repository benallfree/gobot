import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { __root } from './__root'

export const safeRimraf = (path: string, safePaths = [__root]) => {
  const final = resolve(path)
  if (!safePaths.some((path) => final.startsWith(path))) {
    throw new Error(
      `Refusing to delete, path ${final} does not begin with ${safePaths.join(`, `)}`,
    )
  }
  return rimraf(final, { glob: true })
}
