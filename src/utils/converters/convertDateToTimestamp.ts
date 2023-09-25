/**
 * Convert date to timestamp
 *
 * @param {string} datetime `string` Date in format "DD-MM-YYYY" or "DD/MM/YYYY" or "DD-MM-YYYY 00:00:00" or "DD/MM/YYYY 00:00:00"
 * @return {number} timestamp `number`
 * @example OU.convertDateToTimestamp("22/09/2023 18:00") // Return 1695398400
 */
const convertDateToTimestamp = (datetime: string): number => {

    let date = [] as unknown as string[]
    let timestamp = 0

    if(datetime.includes('-')) date = datetime.split('-') as unknown as string[]
    if(datetime.includes('/')) date = datetime.split('/') as unknown as string[]

    if(datetime.includes(" ")) {

        const [ d, t ] = datetime.split(" ") as string[]
        const time = t.split(":") as unknown as string[]

        if(datetime.includes('-')) date = d.split('-') as unknown as string[]
        if(datetime.includes('/')) date = d.split('/') as unknown as string[]

        timestamp = new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0]), parseInt(time[0]), parseInt(time[1])).getTime() as number

    } else {

        timestamp = new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0])).getTime() as number

    }

    return timestamp / 1000

}

export default convertDateToTimestamp