import {
  spawn as _spawn,
  type ChildProcessByStdio,
  type SpawnOptionsWithStdioTuple,
  type StdioNull,
  type StdioPipe,
} from 'child_process'
import type { Readable } from 'stream'
import { dbg, dbge } from './log'
import { mergeConfig } from './mergeConfig'
import { pwd } from './shell'

export async function spawn(
  command: string,
  options: Partial<
    SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>
  > = {},
  onProc: (
    proc: ChildProcessByStdio<null, Readable, Readable>,
  ) => void = () => {},
): Promise<number> {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(/\s+/)
    if (!cmd) {
      throw new Error(`cmd expected`)
    }
    dbg(`${cmd} ${args.join(' ')}`)

    const finalOptions = mergeConfig<
      SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>
    >({ cwd: pwd(), shell: true, stdio: ['inherit', 'pipe', 'pipe'] }, options)
    const cmdProcess = _spawn(cmd, args, finalOptions)

    cmdProcess.stdout.on('data', (data) => {
      dbg(data.toString())
    })

    cmdProcess.stderr.on('data', (data) => {
      dbg(data.toString())
    })

    cmdProcess.on(`error`, (err) => {
      dbge(`Command failed`, command, finalOptions.cwd)
      reject(err)
    })

    cmdProcess.on('close', (code) => {
      if (code === null)
        throw new Error(`Command "${command}" exited with unexpected null code`)
      resolve(code)
    })

    onProc(cmdProcess)
  })
}
