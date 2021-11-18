import {
  OSS_IMG_HOSTS,
  OSS_IMG_PROCESS_QUERY_KEY,
  OSS_IMG_PROCESS_QUERY_KEY_FORMAT_WEBP,
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
  try {
    const urlObj = new URL(url)
    const urlSearchParams = urlObj.searchParams
    Object.keys(params).forEach((key) => {
      if (!urlSearchParams.has(key) || options?.ignoreDuplicates) {
        urlSearchParams.set(key, String(params[key]))
      }
    })
    return decodeURIComponent(urlObj.toString())
  } catch {
    return url
  }
}

export function getImagePreviewUrl<U extends string | undefined> (
  url: U,
  options?: {
    size?: number
    webp?: boolean
  }
): U {
  if (!url) {
    return url
  }
  try {
    const urlObj = new URL(url)
    const isSvgOrWebp = /\.(svg|webp)$/i.test(urlObj.pathname)
    if (isSvgOrWebp) {
      return url
    }
  } catch {
    return url
  }
  const isOssHost = OSS_IMG_HOSTS.some((host) => url?.startsWith(host))
  if (!isOssHost) {
    return url
  }
  const webpParam = options?.webp ? OSS_IMG_PROCESS_QUERY_KEY_FORMAT_WEBP : ''
  const params: Record<string, string | number> = {}
  const size = options?.size ?? 300
  params[OSS_IMG_PROCESS_QUERY_KEY] = `${OSS_IMG_PROCESS_QUERY_KEY_SCALE}${size}${webpParam}`
  return addParamsToUrl(url, params) as U
}

export function omit<T extends {[key: string]: any}, K extends keyof T> (obj: T, keys: K[]): Omit<T, K> {
  return keys.reduce((acc, key) => ({ ...acc, [key]: undefined }), obj)
}

export function disableImageContext (e: any): boolean {
  e?.preventDefault?.()
  e?.stopPropagation?.()
  return false
}

const MILLION = 1e6

export function roundDown (n: number, decimals = 1): number {
  return Math.floor(n * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

export const formatCount = (count: number, lang = 'en'): number | string => {
  if (lang === 'zh') {
    if (count >= MILLION) {
      return `${roundDown(count / MILLION)} 百万`
    } else if (count >= 10000) {
      return `${roundDown(count / 10000)} 万`
    }
    return count
  }
  if (count >= MILLION) {
    return `${roundDown(count / MILLION)}m`
  }
  return count >= 1000 ? `${roundDown(count / 1000)}k` : count
}

export function debounce<Params extends unknown[]> (
  func: (...args: Params) => unknown,
  timeout: number
): (...args: Params) => NodeJS.Timeout {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
    return timer
  }
}
