import { ChildProcess } from 'child_process'
import { asyncExitHook } from 'exit-hook'
import { isPortTaken } from '../../../src/util/isPortTaken'
import { VERDACCIO_LAUNCH_CMD, exec } from './exec'

let proc: ChildProcess | boolean | undefined

export const startVerdaccio = async () => {
  if (await isPortTaken(4873)) {
    proc = true
  } else {
    proc = await new Promise<ChildProcess>((resolve, reject) => {
      exec(VERDACCIO_LAUNCH_CMD, {}, async (proc) => {
        const handle = (buf: Buffer) => {
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
      proc!.on('exit', (code) => {
        proc = undefined
        resolve(code || 0)
      })
      proc!.kill()
    })
  }

  const unsub = asyncExitHook(() => stop(), { wait: 300 })

  return stop
}
