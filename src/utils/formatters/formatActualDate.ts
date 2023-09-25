import dateFormat from 'dateformat'

/**
 * Format actual date
 *
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Actual date formatted
 * @example OU.formatActualDate("dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
const formatActualDate = (format: string) => {
    return dateFormat(new Date(), format)
}

export default formatActualDate