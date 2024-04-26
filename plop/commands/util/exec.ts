import { delimiter, join } from 'path'
import { Flags } from '../../../src/util/flags'
import { spawn } from '../../../src/util/spawn'
import { GOBOT_TEST_CACHE_ROOT_NPM } from '../../run'

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }
  console.log({ env })

  const options = {
    ..._options,
    env: {
      ...env,
      PATH: !env[Flags.UseNpm]
        ? [
            GOBOT_TEST_CACHE_ROOT_NPM,
            join(GOBOT_TEST_CACHE_ROOT_NPM, `bin`),
            env.PATH,
          ].join(delimiter)
        : env.PATH,
      ..._options?.env,
    },
  }
  console.log({ PATH: options.env.PATH })
  const code = await spawn(cmd, options, onProc)
  return code
}
