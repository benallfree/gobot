import { AppInfo } from '../'

export const etcd: AppInfo = {
  name: 'etcd',
  description: `Distributed reliable key-value store for the most critical data of a distributed system`,
  homepage: `https://etcd.io`,
  isAlpha: true,
  factory: `etcd-io/etcd`,
}
