import { ChildProcess } from 'child_process'
import { asyncExitHook } from 'exit-hook'
import { isPortTaken } from '../../../src/util/isPortTaken'
import { exec } from './exec'

let proc: ChildProcess | boolean | undefined

export const VERDACCIO_LAUNCH_CMD = `npm run verdaccio:serve`

export const startVerdaccio = async () => {
  if (await isPortTaken(4873)) {
    proc = true
  } else {
    proc = await new Promise<ChildProcess>((resolve, reject) => {
      exec(VERDACCIO_LAUNCH_CMD, {}, async (proc) => {
        const handle = (buf: Buffer) => {
          console.log(buf.toString())
          if (buf.toString().includes(`http address`)) {
            proc.stdout.off('data', handle)
            exec(`npm run verdaccio:login`)
              .then(() => resolve(proc))
              .catch(reject)
          }
        }
        proc.stdout.on('data', handle)
      })
    })
  }

  const stop = async () => {
    unsub()
    await new Promise<number>((resolve) => {
      if (typeof proc === 'boolean') {
        resolve(0)
        return
      }
      if (proc?.killed) {
        console.log(`proc already killed`)
        resolve(proc.exitCode || 0)
      } else {
        console.log(`Stopping verdaccio...`)
        proc!.on('exit', (code) => {
          proc = undefined
          console.log(`proc exited`)
          resolve(code || 0)
        })
        proc!.kill()
      }
    })
  }

  const unsub = asyncExitHook(() => stop(), { wait: 300 })

  return stop
}
