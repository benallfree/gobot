import { AppInfo } from '../'

export const weed: AppInfo = {
  name: 'SeaweedFS',
  description:
    'SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.',
  homepage: 'https://github.com/seaweedfs/seaweedfs',
  isAlpha: true,
  factory: 'seaweedfs/seaweedfs',
}
