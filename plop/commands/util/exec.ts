import { delimiter, join } from 'path'
import { platform } from 'process'
import { Flags } from '../../../src/util/flags'
import { spawn } from '../../../src/util/spawn'
import { GOBOT_TEST_CACHE_ROOT_NPM } from '../../run'

// https://github.com/nodejs/node/issues/20605#issuecomment-387489708
const PATH_SYM = platform === 'win32' ? `Path` : `PATH`

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }

  const options = {
    ..._options,
    env: {
      ...env,
      [PATH_SYM]: !env[Flags.UseNpm]
        ? [
            GOBOT_TEST_CACHE_ROOT_NPM,
            join(GOBOT_TEST_CACHE_ROOT_NPM, `bin`),
            env[PATH_SYM],
          ].join(delimiter)
        : env[PATH_SYM],
      ..._options?.env,
    },
  }

  const code = await spawn(cmd, options, onProc)
  return code
}
