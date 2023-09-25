/**
 * Convert Base64 to File (Uint8Array)
 *
 * @param {number} base64 `string` Base64
 * @return {boolean} File Binary `Uint8Array` File Binary (Uint8Array)
 * @example OU.convertBase64ToFile("/9j/4Rh3RXhpZgAATU0AKgAAA...") // Return Uint8Array [ 82, 235, 123, 11, ... ]
 */
const convertBase64ToFile = (base64: string): Uint8Array => {
    let binary = atob(base64)
    let length = binary.length
    let uint8Array = new Uint8Array(new ArrayBuffer(length))
    for(let index = 0; index < length; index++) { uint8Array[index] = binary.charCodeAt(index) }
    return uint8Array
}

export default convertBase64ToFile