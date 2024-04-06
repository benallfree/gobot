import {
  spawn as _spawn,
  type ChildProcessByStdio,
  type SpawnOptionsWithStdioTuple,
  type StdioNull,
  type StdioPipe,
} from 'child_process'
import type { Readable } from 'stream'
import { dbg, infoe, rdbg, rinfoe } from './log'
import { mergeConfig } from './mergeConfig'
import { pwd } from './shell'

export type ChildProcess = ChildProcessByStdio<null, Readable, Readable>
export type SpawnOptions = SpawnOptionsWithStdioTuple<
  StdioNull,
  StdioPipe,
  StdioPipe
>
export async function spawn(
  command: string,
  options: Partial<SpawnOptions> = {},
  onProc: (proc: ChildProcess) => void = () => {},
): Promise<number> {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(/\s+/)
    if (!cmd) {
      throw new Error(`cmd expected`)
    }
    dbg(`${cmd} ${args.join(' ')}`, { options })

    const finalOptions = mergeConfig<SpawnOptions>(
      { cwd: pwd(), shell: true, stdio: ['inherit', 'pipe', 'pipe'] },
      options,
    )
    const cmdProcess = _spawn(cmd, args, finalOptions)

    cmdProcess.stdout.on('data', (data) => {
      rdbg(data.toString())
    })

    cmdProcess.stderr.on('data', (data) => {
      rinfoe(data.toString())
    })

    cmdProcess.on(`error`, (err) => {
      infoe(`Command failed`, command, finalOptions.cwd)
    })

    cmdProcess.on('close', (code) => {
      resolve(code || 0)
    })

    cmdProcess.on('exit', (code) => {
      console.warn(`${command} exited with ${code}`)
    })

    onProc(cmdProcess)
  })
}
