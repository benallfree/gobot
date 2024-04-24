import { join } from 'path'
import { Flags } from '../../../src/util/flags'
import { spawn } from '../../../src/util/spawn'
import { GOBOT_TEST_CACHE_ROOT_NPM } from '../../run'

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }

  const options = {
    ..._options,
    env: {
      ...env,
      PATH: !process.env[Flags.UseNpm]
        ? `${GOBOT_TEST_CACHE_ROOT_NPM}:${join(GOBOT_TEST_CACHE_ROOT_NPM, `bin`)}:${process.env.PATH}`
        : process.env.PATH,
      ..._options?.env,
    },
  }
  console.log(options.env.PATH)
  const code = await spawn(cmd, options, onProc)
  return code
}
