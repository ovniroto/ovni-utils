/**
 * Check if text contain normalcase letters
 *
 * @param {string} text `string` Text you want to check
 * @return {string} true/false `boolean` Returns true or false depending on whether the text contains normalcase letters or not
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#containNormalcaseLetters | Recipebook `containNormalcaseLetters`}
 * @example
 * OU.containNormalcaseLetters("text with normalcase letters") // Return true
 * OU.containNormalcaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containNormalcaseLetters("TEXT WITH UPPERCASE LETTERS") // Return false
 */
const containNormalcaseLetters = (text: string): boolean => {
    return /[a-z]/.test(text)
}

export default containNormalcaseLetters