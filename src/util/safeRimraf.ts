import { resolve } from 'path'
import { rimraf } from 'rimraf'
import { Gobot } from '../../dist/api'

export const safeRimraf = (
  path: string,
  safePaths = [Gobot.DEFAULT_GOBOT_CACHE_ROOT()],
) => {
  const final = resolve(path)
  if (!safePaths.some((path) => final.startsWith(path))) {
    throw new Error(
      `Refusing to delete, path ${final} does not begin with ${safePaths.join(`, `)}`,
    )
  }
  return rimraf(final, { glob: true })
}
