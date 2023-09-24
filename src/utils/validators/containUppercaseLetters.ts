/**
 * Check if text contain uppercase letters
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @example
 * OU.containUppercaseLetters("TEXT WITH UPPERCASE LETTERS") // Return true
 * OU.containUppercaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containUppercaseLetters("text with normalcase letters") // Return false
 */
const containUppercaseLetters = (text: string): boolean => {
    return /[A-Z]/.test(text)
}

export default containUppercaseLetters