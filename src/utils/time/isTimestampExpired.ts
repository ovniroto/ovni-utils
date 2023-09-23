/**
 * Checks if a unix timestamp has expired relative to the current date.
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @return {boolean} true/false `boolean`
 * @example OU.isTimestampExpired(1695371156) // Return true
 */
const isTimestampExpired = (timestamp: number): boolean => {
    return Math.floor(Date.now() / 1000) > timestamp
}

export default isTimestampExpired