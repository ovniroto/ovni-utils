/**
 * Convert RGB to Hex
 *
 * @param {number} r `number` Red color
 * @param {number} g `number` Green color
 * @param {number} b `number` Blue color
 * @return {boolean} Hex `string` Hex color
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertRGBToHex | Recipebook `convertRGBToHex`}
 * @example OU.convertRGBToHex(255, 255, 255) // Return "#ffffff"
 */
const convertRGBToHex = (r: number, g: number, b: number): string => {

    const hexR = Math.min(255, Math.max(0, r)).toString(16).padStart(2, '0')
    const hexG = Math.min(255, Math.max(0, g)).toString(16).padStart(2, '0')
    const hexB = Math.min(255, Math.max(0, b)).toString(16).padStart(2, '0')

    return `#${hexR}${hexG}${hexB}`

}

export default convertRGBToHex