/**
 * Convert File or Blob to Base64 data
 *
 * @param {number} file `File` or `Blob` File or Blob data
 * @return {boolean} base64 `string` Base64 data
 * @example OU.convertFileToBase64([File]) // Return data:[<mediatype>][;base64],<data>
 */
const convertFileToBase64 = async (file: File | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader: any = new FileReader()
        reader.onend = reject
        reader.onabort = reject
        reader.readAsDataURL(file)
        reader.onloadend = () => resolve(reader.result)
    })
}

export default convertFileToBase64