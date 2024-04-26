import { delimiter, join } from 'path'
import { platform } from 'process'
import { Flags } from '../../../src/util/flags'
import { spawn } from '../../../src/util/spawn'
import { GOBOT_TEST_CACHE_ROOT_NPM } from '../../run'

// https://github.com/nodejs/node/issues/20605#issuecomment-387489708
const path = () => (platform === 'win32' ? `Path` : `PATH`)

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }
  console.log({ env })

  const options = {
    ..._options,
    env: {
      ...env,
      [path()]: !env[Flags.UseNpm]
        ? [
            GOBOT_TEST_CACHE_ROOT_NPM,
            join(GOBOT_TEST_CACHE_ROOT_NPM, `bin`),
            env[path()],
          ].join(delimiter)
        : env[path()],
      ..._options?.env,
    },
  }
  console.log({ env })
  const code = await spawn(cmd, options, onProc)
  return code
}
