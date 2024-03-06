export const mkSetting = <T, I = T>(
  _default: T,
  setter: (v: I) => T = (v) => v as unknown as T,
) => {
  const container = { value: _default }
  return (newValue?: I) => {
    if (typeof newValue === 'undefined') return container.value
    return (container.value = setter(newValue))
  }
}
