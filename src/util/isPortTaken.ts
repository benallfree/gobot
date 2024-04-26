import { createServer } from 'net'

export const isPortTaken = async (port: number): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    const tester = createServer()
      .once('error', (e) => {
        console.log(`port ${port} is not available`)
        resolve(true)
      })
      .once('listening', () => {
        console.log(`port ${port} is available`)
        tester.once('close', () => resolve(false)).close()
      })
      .listen(port, `localhost`)
  })
}
