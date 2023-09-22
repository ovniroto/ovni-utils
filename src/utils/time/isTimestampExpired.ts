/**
 * Checks if a date timestamp has expired relative to the current date.
 *
 * @param {number} timestamp Time in milliseconds
 * @return {Boolean} boolean
 * @example OU.isTimestampExpired(1695371156) // Return true
 */
const isTimestampExpired = (timestamp: number): Boolean => {
    return Date.now() > timestamp
}

export default isTimestampExpired