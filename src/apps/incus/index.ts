import { AppInfo } from '../'
import { mkIncus } from './overrides'

export const incus: AppInfo = {
  name: 'incus',
  description: `Powerful system container and virtual machine manager `,
  homepage: `https://linuxcontainers.org/incus`,
  isAlpha: true,
  factory: mkIncus,
}
