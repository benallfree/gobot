import { Gobot } from '../Gobot'

export const dbg = (...args: any[]) =>
  Gobot.verbosity() > 1 && console.log(...args)
export const dbge = (...args: any[]) =>
  Gobot.verbosity() > 1 && console.error(...args)
export const info = (...args: any[]) =>
  Gobot.verbosity() > 0 && console.log(...args)
export const infoe = (...args: any[]) =>
  Gobot.verbosity() > 0 && console.error(...args)
export const rdbg = (s: string) =>
  Gobot.verbosity() > 1 && process.stdout.write(s)
export const rdbge = (s: string) =>
  Gobot.verbosity() > 1 && process.stderr.write(s)
export const rinfo = (s: string) =>
  Gobot.verbosity() > 0 && process.stdout.write(s)
export const rinfoe = (s: string) =>
  Gobot.verbosity() > 0 && process.stderr.write(s)
