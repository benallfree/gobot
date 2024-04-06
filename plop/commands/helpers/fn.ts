export const fn = (cb: () => string | Promise<string>) => ({
  type: 'fn',
  fn: cb,
})
