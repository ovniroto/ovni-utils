/**
 * Remove HTML from string
 *
 * @param {format} html `string` HTML string
 * @return {string} text without html `string`
 * @example OU.removeHTML("<html><body>Hello World!</body></html>") // Return "Hello World!"
 */
const removeHTML = (html: string): string => {
    return html.replace(/<[^>]*>?/gm, '')
}

export default removeHTML