import { diffLines } from 'diff'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { format, resolveConfig } from 'prettier'
import { stringify } from '../../../src/util/stringify'

export const matchSnapshot = async (obj: any, path: string) => {
  const options = resolveConfig(path)
  const snap = await format(stringify(obj), {
    ...options,
    parser: 'json',
  })
  if (existsSync(path)) {
    const savedSnap = await format(readFileSync(path, 'utf-8'), {
      ...options,
      parser: 'json',
    })

    if (snap !== savedSnap) {
      const diff = diffLines(snap, savedSnap)
      diff.forEach((part) => {
        const { added, removed, value: _value } = part
        const value = _value.trimEnd()
        if (added) {
          console.log(value.green)
        }
        if (removed) {
          console.log(value.red)
        }
        if (!added && !removed) {
          // console.log(value)
        }
      })
      throw new Error(`Snapshots do not match`)
    }
  } else {
    writeFileSync(path, snap)
  }
  return true
}
