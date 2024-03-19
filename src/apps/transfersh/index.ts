import { AppInfo } from '../'
import { mkTransfersh } from './overrides'

export const transfersh: AppInfo = {
  name: 'transfer.sh',
  description: `Easy and fast file sharing from the command-line.`,
  homepage: `https://github.com/dutchcoders/transfer.sh`,
  isAlpha: true,
  factory: mkTransfersh,
}
