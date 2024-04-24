import { join } from 'path'
import { Flags } from '../../../src/util/flags'
import { spawn } from '../../../src/util/spawn'

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }

  const options = {
    ..._options,
    env: {
      ...env,
      PATH: !process.env[Flags.UseNpm]
        ? `${join(env[Flags.NpmLocalRoot]!, `bin`)}:${process.env.PATH}`
        : process.env.PATH,
      ..._options?.env,
    },
  }
  console.log(process.env.PATH)
  const code = await spawn(cmd, options, onProc)
  return code
}
