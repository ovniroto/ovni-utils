import dateFormat from 'dateformat'

/**
 * Format timestamp to date
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Timestamp date formatted
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#formatTimestamp | Recipebook `formatTimestamp`}
 * @example OU.formatTimestamp(1695371156, "dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
const formatTimestamp = (timestamp: number, format: string): string => {
    const date = new Date(timestamp * 1000)
    return dateFormat(date, format)
}

export default formatTimestamp