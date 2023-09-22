/**
 * Convert timestamp to time
 *
 * @param {number} timestamp `number` Example: 1695398400
 * @param {string} separator `string` Example: "/"
 * @param {boolean} includeTime `boolean` Example: true
 * @return {string} `string` Example: "22/09/2023 18:00"
 * @example OU.convertTimestampToDate(1695398400) // Return "22/09/2023 18:00"
 */
const convertTimestampToDate = (timestamp: number, separator = "-", includeTime = false): string => {

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