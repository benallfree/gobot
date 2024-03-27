import type { CustomActionFunction, NodePlopAPI } from 'plop'

export const localAction = (() => {
  let idx = 0
  return (plop: NodePlopAPI, fn: CustomActionFunction) => {
    const actionName = `custom_${idx++}`
    plop.setActionType(actionName, fn)
    return actionName
  }
})()
