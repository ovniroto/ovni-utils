/*
 *
 *  OvniUtils v0.1.3
 *  https://github.com/ovniroto/ovni-utils
 *
 *  (c) 2023 Lucas O. S.
 *  OvniUtils may be freely distributed under the MIT license.
 *
*/

/**
 * Extract information of base64 file data
 *
 * @param {string} base64 - base64 data file
 * @return {object} { type: string, extension: string, data: string }
 * @example OU.extractBase64Data("data:image/jpeg;base64,/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...")
 */
const extractBase64Data = (base64) => {
    const split = base64.split(',');
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
        .replace('model/gltf+json', 'gltf');
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
        .replace('model/gltf+json', 'gltf');
    const data = split[1];
    return {
        type: type,
        extension: ext,
        data: data
    };
};

/**
 * Checks if a date timestamp has expired relative to the current date.
 *
 * @param {number} timestamp Time in milliseconds
 * @return {Boolean} boolean
 * @example OU.isTimestampExpired(1695371156) // Return true
 */
const isTimestampExpired = (timestamp) => {
    return Date.now() > timestamp;
};

/**
 * Convert date to timestamp
 *
 * @param {string} datetime Date in format "DD-MM-YYYY" or "DD/MM/YYYY" or "DD-MM-YYYY 00:00:00" or "DD/MM/YYYY 00:00:00"
 * @return {number} number
 * @example OU.convertDateToTimestamp("22/09/2023 18:00") // Return 1695398400
 */
const convertDateToTimestamp = (datetime) => {
    let date = [];
    let timestamp = 0;
    if (datetime.includes('-'))
        date = datetime.split('-');
    if (datetime.includes('/'))
        date = datetime.split('/');
    if (datetime.includes(" ")) {
        const [d, t] = datetime.split(" ");
        const time = t.split(":");
        if (datetime.includes('-'))
            date = d.split('-');
        if (datetime.includes('/'))
            date = d.split('/');
        timestamp = new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0]), parseInt(time[0]), parseInt(time[1])).getTime();
    }
    else {
        timestamp = new Date(parseInt(date[2]), parseInt(date[1]) - 1, parseInt(date[0])).getTime();
    }
    return timestamp / 1000;
};

/**
 * Convert timestamp to time
 *
 * @param {number} timestamp `number` Example: 1695398400
 * @param {string} separator `string` Example: "/"
 * @param {boolean} includeTime `boolean` Example: true
 * @return {string} `string` Example: "22/09/2023 18:00"
 * @example OU.convertTimestampToDate(1695398400) // Return "22/09/2023 18:00"
 */
const convertTimestampToDate = (timestamp, separator = "-", includeTime = false) => {
    let time = '';
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    if (includeTime) {
        const arrTime = [];
        arrTime[0] = date.getHours();
        arrTime[1] = date.getMinutes();
        time = ` ${arrTime[0]}:${arrTime[1]}`;
    }
    return `${day}${separator}${month}${separator}${year}${time}`;
};

export { convertDateToTimestamp, convertTimestampToDate, extractBase64Data, isTimestampExpired };
