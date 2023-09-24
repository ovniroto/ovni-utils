/**
 * Format bytes (5232000 -> "4.99 MB")
 *
 * @param {format} bytes `number` Bytes of a file or something
 * @return {string} Bytes formatted `string`
 * @example OU.formatBytes(5232000) // Return "4.99 MB"
 */
const formatBytes = (bytes: number, decimals = 2): string => {
    if(!+bytes) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export default formatBytes