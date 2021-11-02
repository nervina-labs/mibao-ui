export const OSS_IMG_PROCESS_QUERY_KEY = process.env.OSS_IMG_PROCESS_QUERY_KEY ?? 'x-oss-process'
export const OSS_IMG_PROCESS_QUERY_KEY_SCALE = process.env.OSS_IMG_PROCESS_QUERY_KEY_SCALE ?? 'image/resize,s_'
export const OSS_IMG_PROCESS_QUERY_KEY_FORMAT_WEBP = process.env.OSS_IMG_PROCESS_QUERY_KEY_FORMAT_WEBP ?? '/format,webp'
export const OSS_IMG_HOSTS = process.env.OSS_IMG_HOSTS
  ? process.env.OSS_IMG_HOSTS.split(',')
  : [
      'https://oss.jinse.cc',
      'https://goldenlegend.oss-accelerate.aliyuncs.com'
    ]
