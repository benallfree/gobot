import { spawn } from 'child_process'
import { dbg, dbge } from './src/util/log'

export async function runShellCommand(
  command: string,
  directory?: string,
): Promise<number> {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(/\s+/)
    if (!cmd) {
      throw new Error(`cmd expected`)
    }
    dbg(`${cmd} ${args.join(' ')}`)

    const cmdProcess = spawn(cmd, args, {
      cwd: directory ? directory : process.cwd(),
      shell: true,
      stdio: ['inherit', 'pipe', 'pipe'],
    })

    cmdProcess.stdout.on('data', (data) => {
      dbg(data.toString())
    })

    cmdProcess.stderr.on('data', (data) => {
      dbg(data.toString())
    })

    cmdProcess.on(`error`, (err) => {
      dbge(`Command failed`, command, directory)
      reject(err)
    })

    cmdProcess.on('close', (code) => {
      if (code === 0) {
        resolve(code)
      } else {
        reject(new Error(`Command "${command}" exited with code ${code}`))
      }
    })
  })
}
