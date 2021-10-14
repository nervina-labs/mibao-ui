export function addParamsToUrl (
  url: string,
  params: { [key: string]: string },
  options?: {
    ignoreDuplicates?: boolean
  }
): string {
  if (!url) {
    return url
  }
  const urlObj = new URL(url)
  const urlSearchParams = urlObj.searchParams
  Object.keys(params).forEach((key) => {
    if (!urlSearchParams.has(key) || options?.ignoreDuplicates) {
      urlSearchParams.set(key, params[key])
    }
  })
  return decodeURI(urlObj.toString())
}

export function omit<T extends {[key: string]: any}, K extends keyof T> (obj: T, keys: K[]): Omit<T, K> {
  return keys.reduce((acc, key) => ({ ...acc, [key]: undefined }), obj)
}
