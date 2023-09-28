/**
 * Checks if email is valid
 *
 * @param {string} email `string` Email
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isEmailValid | Recipebook `isEmailValid`}
 * @example
 * OU.isEmailValid("name@domain.com") // Return true
 * OU.isEmailValid("name#domain.com") // Return false
 * OU.isEmailValid("namedomain.com") // Return false
 * OU.isEmailValid("domain.com") // Return false
 */
const isEmailValid = (email: string): boolean => {
    return /^([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)([\.])([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)$/.test(email)
}

export default isEmailValid