import type { CustomActionFunction, NodePlopAPI } from 'plop'

export const localAction = (() => {
  let idx = 0
  return (pfx: string, plop: NodePlopAPI, fn: CustomActionFunction) => {
    const actionName = `${pfx}.${idx++}`
    plop.setActionType(actionName, fn)
    return actionName
  }
})()
