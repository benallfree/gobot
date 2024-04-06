import { execSync } from 'child_process'
import pkg from '../../../package.json'

export const getCurrentGitBranch = (() => {
  let branch: string
  return () => {
    branch = `v${pkg.version}`
    if (branch) return branch
    branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    if (branch === 'main') {
      branch = `v${pkg.version}`
    }
    return branch
  }
})()
