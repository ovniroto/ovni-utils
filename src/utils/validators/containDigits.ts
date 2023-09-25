/**
 * Checks if text contain digits
 *
 * @param {string} text `string` Text you want to check
 * @return {boolean} true/false `boolean` Returns true or false depending on whether the text contains digits or not
 * @example
 * OU.containDigits("Area51") // Return true
 * OU.containDigits("ovni") // Return false
 */
const containDigits = (text: string): boolean => {
    return /[0-9]/.test(text)
}

export default containDigits