import { delimiter, join } from 'path'
import { EnvVarNames } from '../../../src/constants'
import { spawn } from '../../../src/util/spawn'
import { GOBOT_TEST_CACHE_ROOT_NPM } from '../../run'

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }

  const options = {
    ..._options,
    env: {
      ...env,
      [EnvVarNames.Path]: !env[EnvVarNames.UseNpm]
        ? [
            GOBOT_TEST_CACHE_ROOT_NPM,
            join(GOBOT_TEST_CACHE_ROOT_NPM, `bin`),
            env[EnvVarNames.Path],
          ].join(delimiter)
        : env[EnvVarNames.Path],
      ..._options?.env,
    },
  }

  const code = await spawn(cmd, options, onProc)
  return code
}
