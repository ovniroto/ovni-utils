type AllowedPasswordValues = 'alphabet' | 'digits' | 'symbols'

/**
 * Checks if password is valid
 *
 * @param {string} password `string` Password
 * @param {number} minLength `number` Minimum length
 * @param {number} maxLength `number` Maximum length
 * @param {Array[string]} charactersRequired `array[string]` Characters required. Allowed values: `alphabet`, `digits`, `symbols`
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isPasswordValid | Recipebook `isPasswordValid`}
 * @example
 * OU.isPasswordValid("R@ndomP@ss*1234", 3, 30, ['alphabet','digits','symbols']) // Return true
 * OU.isPasswordValid("RandomPass1234", 3, 30, ['alphabet']) // Return false
 * OU.isPasswordValid("1234", 3, 30, ['alphabet']) // Return false
 */
const isPasswordValid = (password: string, minLength: number = 3, maxLength: number = 30, charactersRequired: AllowedPasswordValues[] = []): boolean => {

    let charactersRegexp = ''

    charactersRequired.forEach((chars: string) => {
        if(chars == 'alphabet') charactersRegexp += '(?=.*[a-z])(?=.*[A-Z])'
        if(chars == 'digits') charactersRegexp += '(?=.*\d)'
        if(chars == 'symbols') charactersRegexp += '(?=.*[¿!?Ç#$^+=!*()@%&_.·-])'
    })

    const validRegexp = new RegExp(`^${charactersRegexp ? charactersRegexp : '(?=.*[a-z])'}.{${minLength},${maxLength}}$`)

    return validRegexp.test(password)

}

export default isPasswordValid