/**
 * Get unix timestamp in seconds (default) or milliseconds
 *
 * @param {number} milliseconds `boolean` Get unix timestamp in milliseconds (Default: false)
 * @return {number} `number` Unix timestamp in seconds or milliseconds
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#getTimestamp | Recipebook `getTimestamp`}
 * @example OU.getTimestamp() // Return format 1695593795 (unix timestamp in seconds)
 * @example OU.getTimestamp(true) // Return format 1695593795399 (unix timestamp in milliseconds)
 */
const getTimestamp = (milliseconds: boolean = false): number => {
    return milliseconds ? Date.now() : (Math.floor(Date.now() / 1000.0))
}

export default getTimestamp