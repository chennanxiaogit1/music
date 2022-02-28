export function getSizeImage(imgUrl: string, size: number) {
  return `${imgUrl}?param=${size}x${size}`
}

export function getCount(count: number) {
  if (count < 0) return
  if (count < 10000) {
    return count + ''
  } else if (Math.floor(count / 10000) < 10000) {
    // 处理 单位为万
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}
