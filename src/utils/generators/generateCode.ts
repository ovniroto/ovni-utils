/**
 * Generate codes
 *
 * @param {number} length `number` Number of characters the code must have
 * @param {number} pairs `number` Number of character pairs that the code must have
 * @param {boolean} onlyNumbers `boolean` Activate if the code should only have numbers
 * @param {boolean} onlyLetters `boolean` Activate if the code should only have letters
 * @param {boolean} uppercaseLetters `boolean` Activate if the code should only have uppercase letters
 * @return {string} code `string`
 * @example 
 * OU.generateCode(10, 2, true) // Return format "40911-84142"
 * OU.generateCode(8, 4) // Return format "40LW-6MD6"
 * OU.generateCode(20, 5, false, false, true) // Return format "XWRIF-58R4E-2SUC8-5Q67M"
 * OU.generateCode(15, 5, false, true, false) // Return format "wkprz-ukdsq-dxxqs"
 * OU.generateCode(30, 30) // Return format "bDxZW9R1et1W6LuNl3DRTNNZSuw2hD"
 * OU.generateCode(15, 15, true) // Return format "501961762571582"
 */
const generateCode = (length: number, pairs: number, onlyNumbers = false, onlyLetters = false, uppercaseLetters = false): string => {

    let result = ''
    const pair = pairs || 4
    
    const numbers = '0123456789'
    const letters = 'abcdefghijklmnopqrstuwxyz'
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const characters = onlyNumbers ? numbers : onlyLetters ? uppercaseLetters ? upperLetters : letters : uppercaseLetters ? upperLetters + numbers : letters + upperLetters + numbers

    const charactersLength = characters.length
    const regexp = new RegExp(`.{1,${pair}}`, 'g')

    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result.match(regexp)?.join('-') as unknown as string

}

export default generateCode