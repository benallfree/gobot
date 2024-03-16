export async function getAppVersion(name: string): Promise<string> {
  try {
    const moduleName = `gobot-${name}`
    const module = await import(moduleName)
    return module.meta.version || '*'
  } catch (error) {
    console.error(error)
    return '*'
  }
}