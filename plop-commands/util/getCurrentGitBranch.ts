import { execSync } from 'child_process'

export const getCurrentGitBranch = (() => {
  let branch: string
  return () => {
    if (branch) return branch
    return (branch = execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim())
  }
})()
