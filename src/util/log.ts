import { verbosity } from '../settings/verbosity'

export const dbg = (...args: any[]) => verbosity() > 1 && console.log(...args)
export const dbge = (...args: any[]) =>
  verbosity() > 1 && console.error(...args)
export const info = (...args: any[]) => verbosity() > 0 && console.log(...args)
export const infoe = (...args: any[]) =>
  verbosity() > 0 && console.error(...args)
export const rdbg = (s: string) => verbosity() > 1 && process.stdout.write(s)
export const rdbge = (s: string) => verbosity() > 1 && process.stderr.write(s)
export const rinfo = (s: string) => verbosity() > 0 && process.stdout.write(s)
export const rinfoe = (s: string) => verbosity() > 0 && process.stderr.write(s)
