import filenamify from 'filenamify'
import { dirname, join } from 'path'
import type { CustomActionFunction } from 'plop'
import { verbosity } from '../../../src/settings'
import { mkdir } from '../../../src/util/shell'
import type { SpawnOptions } from '../../../src/util/spawn'
import { exec as _exec } from '../util/exec'
import { matchSnapshot } from '../util/matchSnapshot'
import { SRC_PACKAGE_ROOT } from './root'

export const exec =
  (
    cmd: string,
    options: Partial<SpawnOptions> = {},
    snapshot?: string,
  ): CustomActionFunction =>
  async (answers, { onProgress }) => {
    const expectedExitCode = 0
    if (!cmd) throw new Error(`cmd required`)
    onProgress(`Starting ${cmd}`)
    const stdout: string[] = []
    const stderr: string[] = []
    const ret = await _exec(
      cmd,
      { cwd: SRC_PACKAGE_ROOT, ...options },
      (proc) => {
        if (verbosity() >= 3) return
        proc.stdout.on('data', (buf: Buffer) => {
          buf
            .toString()
            .split(/\n/)
            .forEach((line) => {
              if (line.trim()) onProgress(line)
              if (snapshot) stdout.push(line)
            })
        })
        proc.stderr.on('data', (buf: Buffer) => {
          buf
            .toString()
            .split(/\n/)
            .forEach((line) => {
              if (line.trim()) onProgress(line)
              if (snapshot) stderr.push(line)
            })
        })
      },
    )
    if (snapshot) {
      const snapshotFname = join(`__snapshots__`, filenamify(snapshot))
      mkdir(dirname(snapshotFname))
      onProgress(`Comparing snapshot ${snapshotFname}`)
      await matchSnapshot([ret, stdout, stderr], snapshotFname)
    }

    if (ret !== expectedExitCode) {
      const msg = `Expected code ${expectedExitCode} but got ${ret} for command ${cmd}`
      onProgress(msg)
      throw new Error(msg)
    }
    return `${cmd} exited with ${expectedExitCode}`
  }
