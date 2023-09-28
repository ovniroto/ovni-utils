/**
 * Stop code execution for as long as you need
 *
 * @param {format} milliseconds `number` Milliseconds. Example: 300
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#sleep | Recipebook `sleep`}
 * @example OU.sleep(300) // Sleep 300 milliseconds
 */
const sleep = (milliseconds: number) => new Promise((r) => setTimeout(r, milliseconds))

export default sleep