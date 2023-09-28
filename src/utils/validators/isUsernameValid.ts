type AllowedUsernameValues = 'a-z' | 'A-Z' | '0-9' | '_' | '-' | '.'

/**
 * Checks if username is valid
 *
 * @param {string} username `string` Username
 * @param {number} minLength `number` Minimum length
 * @param {number} maxLength `number` Maximum length
 * @param {Array[string]} charactersAllowed `array[string]` Characters allowed. Allowed values: ['a-z','A-Z','0-9','_']
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isUsernameValid | Recipebook `isUsernameValid`}
 * @example
 * OU.isUsernameValid("username", 3, 20, ['az','AZ','09','_']) // Return true
 * OU.isUsernameValid("user.name", 3, 20, ['az','AZ','09','_']) // Return false
 * OU.isUsernameValid("username", 1, 5, ['az','AZ','09','_']) // Return false
 * OU.isUsernameValid("12345awsd", 3, 10, ['az','AZ','09','_']) // Return true
 * OU.isUsernameValid("ovni.dev", 3, 10, ['az','AZ','.']) // Return true
 * OU.isUsernameValid("dev", 3, 10) // Return true
 */
const isUsernameValid = (username: string, minLength = 3, maxLength = 20, charactersAllowed: AllowedUsernameValues[] = []): boolean => {
    let charactersRegexp = ''
    charactersAllowed.forEach((char: string) => { charactersRegexp += char })
    const validRegexp = new RegExp(`^${charactersRegexp ? '[' + charactersRegexp + ']' : '[a-z]'}{${minLength},${maxLength}}$`)
    return validRegexp.test(username)
}

export default isUsernameValid