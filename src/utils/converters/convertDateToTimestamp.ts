/**
 * Convert date to timestamp
 *
 * @param {string} datetime `string` Date in format "DD-MM-YYYY" or "DD/MM/YYYY" or "DD-MM-YYYY 00:00:00" or "DD/MM/YYYY 00:00:00"
 * @return {number} timestamp `number`
 * @example OU.convertDateToTimestamp("22/09/2023 18:00") // Return 1695398400
 */
const convertDateToTimestamp = (datetime: string): number => {

    const [ d, t ] = datetime.split(" ") as string[]

    let date = [] as unknown as string[]
    let timestamp = 0

    const time = t ? t.split(":") as unknown as string[] : null

    if(datetime.includes('-')) date = d ? d.split('-') as unknown as string[] : datetime.split('-') as unknown as string[]
    if(datetime.includes('/')) date = d ? d.split('/') as unknown as string[] : datetime.split('/') as unknown as string[]

    const day = parseInt((date[0].length == 2) ? date[0] : date[2])
    const year = parseInt((date[0].length == 4) ? date[0] : date[2])
    const month = parseInt(date[1]) - 1

    const hours = time ? parseInt(time[0]) : 0
    const minutes = time ? parseInt(time[1]) : 0

    timestamp = new Date(year, month, day, hours, minutes).getTime() as number

    return timestamp / 1000

}

export default convertDateToTimestamp