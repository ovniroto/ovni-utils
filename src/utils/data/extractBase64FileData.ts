/**
 * Extract Base64 data of File or Blob
 *
 * @param {number} file `File` or `Blob` File or Blob data
 * @return {boolean} base64 `string` Base64 data
 * @example OU.extractBase64FileData([File]) // Return data:[<mediatype>][;base64],<data>
 */
const extractBase64FileData = async (file: File | Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader: any = new FileReader()
        reader.onend = reject
        reader.onabort = reject
        reader.readAsDataURL(file)
        reader.onloadend = () => resolve(reader.result)
    })
}

export default extractBase64FileData