import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { Gobot } from '../Gobot'

export const RIMRAF_SAFE_PATHS = [Gobot.DEFAULT_GOBOT_CACHE_ROOT()]
export const safeRimraf = (
  path: string,
  safePaths: string[] = RIMRAF_SAFE_PATHS,
) => {
  const final = resolve(path)
  if (!safePaths.some((path) => final.startsWith(path))) {
    throw new Error(
      `Refusing to delete, path ${final} does not begin with ${safePaths.join(`, `)}`,
    )
  }
  return rimraf(final, { glob: true })
}
