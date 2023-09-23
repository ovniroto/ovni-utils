/**
 * Convert text to slug format for URLs and SEO
 *
 * @param {string} text `string` Text you want to convert
 * @return {string} slug `string`
 * @example 
 * OU.convertTextToSlug("Two black horses in the mountain") // Return "two-black-horses-in-the-mountain"
 * OU.convertTextToSlug("What do you want to do today?") // Return "what-do-you-want-to-do-today"
 * OU.convertTextToSlug("Dos caballos negros en la montaña") // Return "dos-caballos-negros-en-la-montana"
 * OU.convertTextToSlug("Két fekete ló a hegyen") // Return "ket-fekete-lo-a-hegyen"
 * OU.convertTextToSlug("@username is the best") // Return "username-is-the-best"
 */
const convertTextToSlug = (text: string): string => {

    const input = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const output = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const regexp = new RegExp(input.split('').join('|'), 'g')

    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(regexp, repl => output.charAt(input.indexOf(repl)))
        .replace(/&/g, '')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

export default convertTextToSlug