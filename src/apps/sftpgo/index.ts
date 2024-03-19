import { AppInfo } from '../'
import { mksftpgo } from './overrides'

export const sftpgo: AppInfo = {
  name: 'sftpgo',
  description:
    'Fully featured and highly configurable SFTP server with optional HTTP/S, FTP/S and WebDAV support - S3, Google Cloud Storage, Azure Blob',
  homepage: 'https://github.com/drakkan/sftpgo',
  isAlpha: true,
  factory: mksftpgo,
}
