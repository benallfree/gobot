import type { ActionType } from 'plop'
import { __root } from '../../../src/util/__root'
import type { SpawnOptions } from '../../../src/util/spawn'

export const exec = (
  cmd: string,
  options: Partial<SpawnOptions> = {},
): ActionType => {
  return {
    type: `exec`,
    cmd,
    options: {
      cwd: __root,
      ...options,
    },
  }
}
