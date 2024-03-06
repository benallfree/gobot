const inFlightPromises: Map<string, Promise<any>> = new Map()

export function mkPromiseSingleton<T, Args extends any[]>(
  fn: (...args: Args) => Promise<T>,
): (key?: string) => (...args: Args) => Promise<T> {
  return function (key = `default`) {
    return function (...args: Args): Promise<T> {
      if (inFlightPromises.has(key)) return inFlightPromises.get(key)!

      const promise = fn(...args).finally(() => inFlightPromises.delete(key))
      inFlightPromises.set(key, promise)
      return promise
    }
  }
}
