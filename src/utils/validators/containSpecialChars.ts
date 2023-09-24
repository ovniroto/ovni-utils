/**
 * Check if text contain special chars
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @example
 * OU.containSpecialChars("Text with speci@l ch@ract&r$") // Return true
 * OU.containSpecialChars("Text with spaces") // Return true
 * OU.containSpecialChars("TextWithoutSpaces") // Return false
 */
const containSpecialChars = (text: string): boolean => {
    return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(text)
}

export default containSpecialChars