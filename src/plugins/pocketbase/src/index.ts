import { join } from 'path'
import { Plugin } from '../..'
import { pwd } from '../../../util'

export const pocketbase: Plugin = {
  name: 'pocketbase',
  repo: `pocketbase/pocketbase`,
  prepare(args) {
    // Check if "--dir" is already specified
    if (!args.find((arg) => arg.startsWith('--dir'))) {
      args.push(`--dir=${join(pwd(), `pb_data`)}`)
    }
  },
  getZip(profile) {
    const { os, version, arch } = profile
    return `pocketbase_${version}_${os}_${arch}.zip`
  },
  getExtractionName(profile) {
    const { os, version, arch } = profile
    return os === 'windows' ? `pocketbase.exe` : `pocketbase`
  },
}
