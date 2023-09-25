import { getConfig } from '@config'
import { time } from '@language/time'

const config = getConfig()

/**
 * Get relative time of timestamp
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @return {string} time `string`
 * @example OU.getRelativeTime(1695371156) // Return format "1 day ago"
 */
const getRelativeTime = (timestamp: number): string => {

    const lang = config.language as Lang
    const now = Date.now() / 1000
    const elapsedTime = Math.abs((Math.floor(now)) - timestamp)

    let amountTime, type

    const seconds = elapsedTime
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months =Math.floor(days / 30)
    const years = Math.floor(days / 365)

    /* Years */
    if(months > 12) {
        amountTime = years
        type = years > 1 ? time(lang, true).year : time(lang).year
    }

    /* Months */
    else if (days > 30) {
        amountTime = months
        type = months > 1 ? time(lang, true).month : time(lang).month
    }

    /* Weeks */
    else if (days > 7) {
        amountTime = weeks
        type = weeks > 1 ? time(lang, true).week : time(lang).week
    }

    /* Days */
    else if (hours > 24) {
        amountTime = days
        type = days > 1 ? time(lang, true).day : time(lang).day
    }

    /* hours */
    else if (minutes > 60) {
        amountTime = hours
        type = hours > 1 ? time(lang, true).hour : time(lang).hour
    }

    /* Minutes */
    else if (seconds > 60) {
        amountTime = minutes
        type = minutes > 1 ? time(lang, true).minute : time(lang).minute
    }

    /* Seconds */
    else {
        amountTime = seconds
        type = seconds > 1 ? time(lang, true).second : time(lang).second
    }

    let relative = amountTime + ' ' + type

    if(timestamp > now) return time(lang).in + ' ' + relative

    return lang == 'es-ES' ? (time(lang).ago + ' ' + relative) : (relative + ' ' + time(lang).ago)

}

export default getRelativeTime