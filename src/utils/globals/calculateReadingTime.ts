import { getConfig } from '@config'
import { time } from '@language/time'

type Lang = 'es-ES' | 'en-EN'

const config = getConfig()

/**
 * Calculate reading time of text
 *
 * @param {string} text `string` Text you want to calculate
 * @return {number} Time `string` Time. Example: 4.5 minutes
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#calculateReadingTime | Recipebook `calculateReadingTime`}
 * @example OU.calculateReadingTime("Lorem ipsum dolor sit amet, consectetur adipiscing elit...") // Return "less than a minute"
 */
const calculateReadingTime = (text: any): string => {

    const lang = config.language as Lang

    let words = text.split(' ')
    let minutes = words.length / 225
    minutes = Math.round(minutes * 10) / 10

    if (minutes <= 0) return time(lang).lessthanaminute
    if (minutes <= 60) return `${minutes} ${minutes > 1 ? time(lang, true).minute : time(lang).minute}`

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} ${hours > 1 ? time(lang, true).hour : time(lang).hour}`

    const days = Math.floor(hours / 24)
    if (days < 7) return `${days} ${days > 1 ? time(lang, true).day : time(lang).day}`

    // This part may never be used, but it doesn't cost me anything to put it on.
    // If someone calculates a text so long that it takes more than 1 day to read, please mention me at x.com/ovniroto xD

    const weeks = Math.floor(days / 7)
    if (weeks < 4) return `${weeks} ${weeks > 1 ? time(lang, true).week : time(lang).week}`

    const months = Math.floor(days / 30)
    if (months < 12) return `${months} ${months > 1 ? time(lang, true).month : time(lang).month}`

    const years = Math.floor(days / 365)
    return `${years} ${years > 1 ? time(lang, true).year : time(lang).year}`

}

export default calculateReadingTime