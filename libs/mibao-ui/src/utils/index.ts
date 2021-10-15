import {
  OSS_IMG_HOSTS,
  OSS_IMG_PROCESS_QUERY_KEY,
  OSS_IMG_PROCESS_QUERY_KEY_SCALE
} from '../constants/env'

export function addParamsToUrl (
  url: string,
  params: Record<string, string | number>,
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
      urlSearchParams.set(key, String(params[key]))
    }
  })
  return decodeURI(urlObj.toString())
}

export function getImagePreviewUrl<U extends string | undefined> (
  url: U,
  size = 300
): U {
  if (!url) {
    return url
  }
  const urlObj = new URL(url)
  const isOssHost = OSS_IMG_HOSTS.some((host) => url?.startsWith(host))
  const isSvgOrWebp = /\.(svg|webp)$/i.test(urlObj.pathname)
  if (!isOssHost || isSvgOrWebp) {
    return url
  }
  const params: Record<string, string | number> = {}
  params[OSS_IMG_PROCESS_QUERY_KEY] = `${OSS_IMG_PROCESS_QUERY_KEY_SCALE}${size}`
  return addParamsToUrl(url, params) as U
}

export function omit<T extends {[key: string]: any}, K extends keyof T> (obj: T, keys: K[]): Omit<T, K> {
  return keys.reduce((acc, key) => ({ ...acc, [key]: undefined }), obj)
}

export const disableImageContext = (e: any): boolean => {
  e?.preventDefault?.()
  e?.stopPropagation?.()
  return false
}
