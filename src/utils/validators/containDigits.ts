/**
 * Checks if text contain digits
 *
 * @param {string} text `string` Text
 * @return {boolean} true/false `boolean`
 * @example
 * OU.containDigits("Area51") // Return true
 * OU.containDigits("ovni") // Return false
 */
const containDigits = (text: string): boolean => {
    return /[0-9]/.test(text)
}

export default containDigits