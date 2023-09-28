/**
 * Checks if a unix timestamp has expired relative to the current date.
 *
 * @param {number} timestamp `number` Unix timestamp in seconds or milliseconds
 * @param {number} milliseconds `boolean` Activate it if you are going to check a timestamp in milliseconds
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isTimestampExpired | Recipebook `isTimestampExpired`}
 * @example OU.isTimestampExpired(1695371156) // Return true
 * @example OU.isTimestampExpired(1695593795399, true) // Return true
 * @example OU.isTimestampExpired(2863283114) // Return false
 */
const isTimestampExpired = (timestamp: number, milliseconds = false): boolean => {
    return milliseconds ? (Date.now() > timestamp) : (Math.floor(Date.now() / 1000) > timestamp)
}

export default isTimestampExpired