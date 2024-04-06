import { join } from 'path'
import { __root } from './__root'
import { Flags } from './flags'
import { safeRimraf } from './safeRimraf'
import { spawn } from './spawn'

const CACHE = join(__root, `.cache`)

export const VERDACCIO_LAUNCH_CMD = `verdaccio -c verdaccio.config.yaml -l '127.0.0.1:4873'`
export const VERDACCIO_REGISTRY_URL = `http://test.gobot.lvh.me:4873`

export const exec: typeof spawn = async (cmd, _options, onProc) => {
  const env = { ...process.env }
  if (!process.env[Flags.UseNpm]) {
    env[Flags.NpmRegistryEndpoint] = VERDACCIO_REGISTRY_URL
    env[Flags.NpmLocalRoot] = join(CACHE, `npm`)
  }
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
  const code = await spawn(cmd, options, onProc)
  return code
}

export const cleanLocalNpmAndRegistryCache = async () => {
  if (process.env[Flags.UseNpm]) return
  await safeRimraf(join(CACHE, `**/*`))
}
