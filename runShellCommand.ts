import { spawn } from 'child_process'

export async function runShellCommand(
  command: string,
  directory?: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(/\s+/)
    if (!cmd) {
      throw new Error(`cmd expected`)
    }
    console.log(`${cmd} ${args.join(' ')}`)

    const cmdProcess = spawn(cmd, args, {
      cwd: directory ? directory : process.cwd(),
      shell: true,
      stdio: ['inherit', 'pipe', 'pipe'],
    })

    cmdProcess.stdout.on('data', (data) => {
      console.log(data.toString())
    })

    cmdProcess.stderr.on('data', (data) => {
      console.error(data.toString())
    })

    cmdProcess.on(`error`, (err) => {
      console.error(`Command failed`, command, directory)
      reject(err)
    })

    cmdProcess.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Command "${command}" exited with code ${code}`))
      }
    })
  })
}
