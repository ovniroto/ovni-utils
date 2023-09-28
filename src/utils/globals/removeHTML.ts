/**
 * Remove HTML from string
 *
 * @param {format} html `string` HTML string
 * @return {string} text without html `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#removeHTML | Recipebook `removeHTML`}
 * @example OU.removeHTML("<html><body>Hello World!</body></html>") // Return "Hello World!"
 */
const removeHTML = (html: string): string => {
    return html.replace(/<[^>]*>?/gm, '')
}

export default removeHTML