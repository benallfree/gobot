export async function getPluginVersion(name: string): Promise<string> {
  try {
    const moduleName = `gobot-${name}`
    const module = await import(moduleName)
    return module.version || '*'
  } catch (error) {
    return '*'
  }
}
