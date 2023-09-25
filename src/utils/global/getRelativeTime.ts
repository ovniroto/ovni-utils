import { getConfig } from '../../config'
import { time } from '../../language/time'

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
    const elapsedTime = (Math.floor(Date.now() / 1000)) - timestamp

    if(elapsedTime < 60) return time(lang).now

    const seconds = elapsedTime
    if(seconds < 60) {
        return lang == 'es-ES' ? `${time(lang).ago} ${seconds} ${seconds > 1 ? time(lang, true).second : time(lang).second}` : `${seconds} ${seconds > 1 ? time(lang, true).second : time(lang).second} ${time(lang).ago}`
    }

    const minutes = Math.floor(seconds / 60)
    if(minutes < 60) {
        return lang == 'es-ES' ? `${time(lang).ago} ${minutes} ${minutes > 1 ? time(lang, true).minute : time(lang).minute}` : `${minutes} ${minutes > 1 ? time(lang, true).minute : time(lang).minute} ${time(lang).ago}`
    }

    const hours = Math.floor(minutes / 60)
    if(hours < 24) {
        return lang == 'es-ES' ? `${time(lang).ago} ${hours} ${hours > 1 ? time(lang, true).hour : time(lang).hour}` : `${hours} ${hours > 1 ? time(lang, true).hour : time(lang).hour} ${time(lang).ago}`
    }

    const days = Math.floor(hours / 24)
    if (days < 7) {
        return lang == 'es-ES' ? `${time(lang).ago} ${days} ${days > 1 ? time(lang, true).day : time(lang).day}` : `${days} ${days > 1 ? time(lang, true).day : time(lang).day} ${time(lang).ago}`
    }

    const weeks = Math.floor(days / 7)
    if (weeks < 4) {
        return lang == 'es-ES' ? `${time(lang).ago} ${weeks} ${weeks > 1 ? time(lang, true).week : time(lang).week}` : `${weeks} ${weeks > 1 ? time(lang, true).week : time(lang).week} ${time(lang).ago}`
    }

    const months = Math.floor(days / 30)
    if (months < 12) {
        return lang == 'es-ES' ? `${time(lang).ago} ${months} ${months > 1 ? time(lang, true).month : time(lang).month}` : `${months} ${months > 1 ? time(lang, true).month : time(lang).month} ${time(lang).ago}`
    }

    const years = Math.floor(days / 365)

    const timeAgo = lang == 'es-ES' ? `${time(lang).ago} ${years} ${years > 1 ? time(lang, true).year : time(lang).year}` : `${years} ${years > 1 ? time(lang, true).year : time(lang).year} ${time(lang).ago}`

    return timeAgo

}

export default getRelativeTime