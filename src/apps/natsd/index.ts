import { AppInfo } from '..'

export const natsd: AppInfo = {
  name: 'nats-server',
  description: `High-Performance server for NATS.io, the cloud and edge native messaging system.`,
  homepage: `https://nats.io`,
  isAlpha: true,
  factory: `nats-io/nats-server`,
}
