/**
 * Check if text contain normalcase letters
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @example
 * OU.containNormalcaseLetters("text with normalcase letters") // Return true
 * OU.containNormalcaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containNormalcaseLetters("TEXT WITH UPPERCASE LETTERS") // Return false
 */
const containNormalcaseLetters = (text: string): boolean => {
    return /[a-z]/.test(text)
}

export default containNormalcaseLetters