export const resolve = (path: string, obj: any) => {
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null
  }, obj)
}
