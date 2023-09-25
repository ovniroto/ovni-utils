/**
 * Extract information of base64 file data
 *
 * @param {string} base64 `string` - base64 file data
 * @return {object} `object` { type: string, extension: string, data: string }
 * @example OU.extractBase64Data("data:image/jpeg;base64,/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...") // Return { type: 'jpg', extension: 'jpg', data: '/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...' }
 */
const convertBase64Data = (base64: string): { type: string, extension: string, data: string } => {

    const split = base64.split(',')
    const type = split[0].replace('data:', '')
        .replace(';base64', '')
        .replace('x-zip-compressed', 'zip')
        .replace('image/jpeg', 'jpg')
        .replace('image/png', 'png')
        .replace('image/gif', 'gif')
        .replace('image/svg+xml', 'svg')
        .replace('application/pdf', 'pdf')
        .replace('application/msword', 'doc')
        .replace('application/vnd.ms-excel', 'xls')
        .replace('application/vnd.ms-powerpoint', 'ppt')
        .replace('application/zip', 'zip')
        .replace('audio/mpeg', 'mp3')
        .replace('audio/wav', 'wav')
        .replace('audio/mp4', 'mp4')
        .replace('video/mp4', 'mp4')
        .replace('video/webm', 'webm')
        .replace('video/quicktime', 'mov')
        .replace('text/plain', 'txt')
        .replace('text/html', 'html')
        .replace('text/css', 'css')
        .replace('text/javascript', 'js')
        .replace('application/json', 'json')
        .replace('application/xml', 'xml')
        .replace('application/javascript', 'js')
        .replace('application/octet-stream', 'bin')
        .replace('multipart/form-data', 'form-data')
        .replace('message/rfc822', 'email')
        .replace('font/woff', 'woff')
        .replace('model/gltf+json', 'gltf')

    const ext = base64.substring(base64.indexOf('/') + 1, base64.indexOf(';base64'))
        .replace('x-zip-compressed', 'zip')
        .replace('image/jpeg', 'jpg')
        .replace('image/png', 'png')
        .replace('image/gif', 'gif')
        .replace('image/svg+xml', 'svg')
        .replace('application/pdf', 'pdf')
        .replace('application/msword', 'doc')
        .replace('application/vnd.ms-excel', 'xls')
        .replace('application/vnd.ms-powerpoint', 'ppt')
        .replace('application/zip', 'zip')
        .replace('audio/mpeg', 'mp3')
        .replace('audio/wav', 'wav')
        .replace('audio/mp4', 'mp4')
        .replace('video/mp4', 'mp4')
        .replace('video/webm', 'webm')
        .replace('video/quicktime', 'mov')
        .replace('text/plain', 'txt')
        .replace('text/html', 'html')
        .replace('text/css', 'css')
        .replace('text/javascript', 'js')
        .replace('application/json', 'json')
        .replace('application/xml', 'xml')
        .replace('application/javascript', 'js')
        .replace('application/octet-stream', 'bin')
        .replace('multipart/form-data', 'form-data')
        .replace('message/rfc822', 'email')
        .replace('font/woff', 'woff')
        .replace('model/gltf+json', 'gltf')

    const data = split[1]

    return {
        type: type,
        extension: ext,
        data: data
    }

}

export default convertBase64Data