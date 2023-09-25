/**
 * Convert Hex to RGB
 *
 * @param {number} hex `string` Hex color (#000000)
 * @return {boolean} { r, g, b } `object` Object with rgb
 * @example OU.convertHexToRGB("#ffffff") // Return { r: 255, g: 255, b: 255 }
 */
const convertHexToRGB = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

export default convertHexToRGB