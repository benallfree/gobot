import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { PACKAGE_ROOT } from './getApp'

export const safeRimraf = (path: string, safePaths = [PACKAGE_ROOT]) => {
  const final = resolve(path)
  if (!safePaths.some((path) => final.startsWith(path))) {
    throw new Error(
      `Refusing to delete, path ${final} does not begin with ${safePaths.join(`, `)}`,
    )
  }
  return rimraf(final, { glob: true })
}
