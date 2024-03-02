export const mkSetting = <T>(_default: T, setter: (v: T) => T) => {
  const container = { value: _default }
  return (newValue?: T) => {
    if (typeof newValue === 'undefined') return container.value
    return (container.value = setter(newValue))
  }
}
