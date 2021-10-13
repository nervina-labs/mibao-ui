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
  return decodeURIComponent(urlObj.toString())
}

export function omit (obj: {[key: string]: any}, keys: string[]) {
  const keySet = new Set(keys)
  return Object.keys(obj).filter(key => !keySet.has(key)).reduce<{[key: string]: any}>((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {})
}
