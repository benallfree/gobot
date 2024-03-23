import { AppInfo } from '../'
import { mk_gitea_Gobot } from './overrides'

export const gitea: AppInfo = {
  name: 'gitea',
  description: `Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD`,
  homepage: `https://about.gitea.com`,
  isAlpha: true,
  factory: mk_gitea_Gobot,
}
