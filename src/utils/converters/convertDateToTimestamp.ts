/**
 * Convert date to timestamp
 *
 * @param {string} date `string` Date in format "DD-MM-YYYY" or "DD/MM/YYYY"
 * @param {string} time `string` Time in format "HH:MM"
 * @return {number} timestamp `number`
 * @example OU.convertDateToTimestamp("22/09/2023","18:00") // Return 1695398400
 */
const convertDateToTimestamp = (date: string, time?: string): number => {

    let timestamp = 0

    time ? time.split(":") as unknown as string[] : null

    if(date.includes('-')) date.split('-') as unknown as string[]
    if(date.includes('/')) date.split('/') as unknown as string[]

    const day = parseInt((date[0].length == 2) ? date[0] : date[2])
    const year = parseInt((date[0].length == 4) ? date[0] : date[2])
    const month = parseInt(date[1]) - 1

    const hours = time ? parseInt(time[0]) : 0
    const minutes = time ? parseInt(time[1]) : 0

    timestamp = new Date(year, month, day, hours, minutes).getTime() as number

    return timestamp / 1000

}

export default convertDateToTimestamp