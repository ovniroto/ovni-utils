/**
 * Convert timestamp to date
 *
 * @param {number} timestamp `number` Example: 1695398400
 * @param {string} separator `string` Example: "/"
 * @param {boolean} includeTime `boolean` Example: true
 * @return {string} date `string` Example: "22/09/2023 18:00"
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertTimestampToDate | Recipebook `convertTimestampToDate`}
 * @example OU.convertTimestampToDate(1695398400) // Return "22/09/2023 18:00"
 */
const convertTimestampToDate = (timestamp: number, separator: string = "-", includeTime: boolean = false): string => {

    let time = ''

    const date = new Date(timestamp)

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()

    if(includeTime) {
        const arrTime: number[] = []
        arrTime[0] = date.getHours()
        arrTime[1] = date.getMinutes()
        time = ` ${arrTime[0]}:${arrTime[1]}`
    }

    return `${day}${separator}${month}${separator}${year}${time}`

}

export default convertTimestampToDate