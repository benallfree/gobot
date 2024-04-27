import { gracefulExit } from 'exit-hook'
import minimist from 'minimist'
import path, { dirname, join, resolve } from 'node:path'
import { cwd } from 'node:process'
import { fileURLToPath } from 'node:url'
import { Plop, run } from 'plop'
import { EnvVarNames } from '../src/constants'
import { RIMRAF_SAFE_PATHS } from '../src/util/safeRimraf'
import { mkdir } from '../src/util/shell'
import { SRC_PACKAGE_ROOT } from './commands/helpers/root'
import {} from './commands/util/exec'
import { startVerdaccio } from './commands/util/startVerdaccio'

const args = process.argv.slice(2)
const argv = minimist(args)

const __dirname = dirname(fileURLToPath(import.meta.url))

process.on('uncaughtException', (err, origin) => {
  console.error(origin, err)
  gracefulExit()
})

export const GOBOT_TEST_CACHE_ROOT = resolve(
  join(SRC_PACKAGE_ROOT, `..`, `.gobot-test-cache`),
)
mkdir(GOBOT_TEST_CACHE_ROOT)
RIMRAF_SAFE_PATHS.push(GOBOT_TEST_CACHE_ROOT)
RIMRAF_SAFE_PATHS.push(SRC_PACKAGE_ROOT)

export const GOBOT_TEST_CACHE_ROOT_NPM = join(GOBOT_TEST_CACHE_ROOT, `npm`)
mkdir(GOBOT_TEST_CACHE_ROOT_NPM)

export const VERDACCIO_REGISTRY_URL = `http://127.0.0.1:4873`

console.log({ GOBOT_TEST_CACHE_ROOT, GOBOT_TEST_CACHE_ROOT_NPM })

async function main() {
  if (!process.env[EnvVarNames.UseNpm]) {
    process.env[EnvVarNames.NpmRegistryEndpoint] = VERDACCIO_REGISTRY_URL
    process.env[EnvVarNames.NpmLocalRoot] = GOBOT_TEST_CACHE_ROOT_NPM
  }

  await new Promise<void>((resolve, reject) => {
    Plop.prepare(
      {
        cwd: argv.cwd || cwd(),
        configPath: path.join(__dirname, 'plopfile.ts'),
        preload: argv.preload || [],
        completion: argv.completion,
      },
      (env) => {
        Plop.execute(env, async (env, argv) => {
          try {
            const stop = await startVerdaccio()
            await run(env, undefined, false)
            await stop()
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      },
    )
  })
  console.log(`plop finished`)
  gracefulExit(0)
}
main().catch((e) => {
  console.error(e)
  gracefulExit(1)
})
