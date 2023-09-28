/**
 * Checks if code is valid
 *
 * @param {string} code `string` Code
 * @param {string} format `string` Format. Example: "XXX-XXX"
 * @param {boolean} deep `boolean` Deep format check
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isCodeValid | Recipebook `isCodeValid`}
 * @example
 * OU.isCodeValid("QW12-ER34","XXXX-XXXX") // Return true
 * OU.isCodeValid("1234-1234","DDDD-DDDD") // Return true
 * OU.isCodeValid("f2m1-2gf4","RRRR-RRRR") // Return true
 */
const isCodeValid = (code: string, format: string, deep: boolean = false): boolean => {

    const splitFormat = format.split("-")
    let formatRegexp: string = ''

    splitFormat.forEach((fmt, index) => {

        const count = fmt.length
        let expresion = ''

        if(deep) {

            expresion = fmt
            .replace(/X/g, '[a-zA-Z0-9]')
            .replace(/R/g, '[a-z0-9]')
            .replace(/P/g, '[A-Z0-9]')
            .replace(/D/g, '[0-9]')
            .replace(/U/g, '[A-Z]')
            .replace(/L/g, '[a-z]')

            formatRegexp += `(${expresion})`

        } else {

            if(fmt.includes("X")) expresion = '[a-zA-Z0-9]'
            else if(fmt.includes("R")) expresion = '[a-z0-9]'
            else if(fmt.includes("D")) expresion = '[A-Z0-9]'
            else if(fmt.includes("0")) expresion = '[0-9]'
            else if(fmt.includes("U")) expresion = '[A-Z]'
            else if(fmt.includes("L")) expresion = '[a-z]'
    
            formatRegexp += `(${expresion}{${count}})`

        }

        if(index == (splitFormat.length - 1)) return

        formatRegexp += `[-]`

    })

    const regex = new RegExp(`^${formatRegexp}$`)
    return regex.test(code)

}

export default isCodeValid