/**
 * Get password strength (bad/medium/good/strong)
 *
 * @param {string} password `string` Password
 * @return {string} (bad/medium/good/strong) `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#getPasswordStrength | Recipebook `getPasswordStrength`}
 * @example
 * OU.getPasswordStrength("12345") // Return "bad"
 * OU.getPasswordStrength("qwerty") // Return "bad"
 * OU.getPasswordStrength("Cxtx@5x") // Return "medium"
 * OU.getPasswordStrength("LBC&m3vPme") // Return "good"
 * OU.getPasswordStrength("CxziTy@V#utx5x") // Return "strong"
 */
const getPasswordStrength = (password: string): string => {

    let strong = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){14,20}$/)
    const checkStrong = strong.test(password)
    if(checkStrong) return 'strong'

    let good = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)
    const checkGood = good.test(password)
    if(checkGood) return 'good'

    let medium = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){1,16}$/)
    const checkMedium = medium.test(password)
    if(checkMedium) return 'medium'

    return 'bad'

}

export default getPasswordStrength