/*
 *
 *  OvniUtils v0.2.0
 *  https://github.com/ovniroto/ovni-utils
 *
 *  (c) 2023 Lucas O. S.
 *  OvniUtils may be freely distributed under the MIT license.
 *
*/

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
const convertTextToSlug = (text) => {
    const input = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
    const output = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const regexp = new RegExp(input.split('').join('|'), 'g');
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(regexp, repl => output.charAt(input.indexOf(repl)))
        .replace(/&/g, '')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

/**
 * Extract information of base64 file data
 *
 * @param {string} base64 `string` - base64 file data
 * @return {object} `object` { type: string, extension: string, data: string }
 * @example OU.extractBase64Data("data:image/jpeg;base64,/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...") // Return { type: 'jpg', extension: 'jpg', data: '/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...' }
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
 * Generate codes
 *
 * @param {number} length `number` Number of characters the code must have
 * @param {number} pairs `number` Number of character pairs that the code must have
 * @param {boolean} onlyNumbers `boolean` Activate if the code should only have numbers
 * @param {boolean} onlyLetters `boolean` Activate if the code should only have letters
 * @param {boolean} uppercaseLetters `boolean` Activate if the code should only have uppercase letters
 * @return {string} code `string`
 * @example
 * OU.generateCode(10, 2, true) // Return format "40911-84142"
 * OU.generateCode(8, 4) // Return format "40LW-6MD6"
 * OU.generateCode(20, 5, false, false, true) // Return format "XWRIF-58R4E-2SUC8-5Q67M"
 * OU.generateCode(15, 5, false, true, false) // Return format "wkprz-ukdsq-dxxqs"
 * OU.generateCode(30, 30) // Return format "bDxZW9R1et1W6LuNl3DRTNNZSuw2hD"
 * OU.generateCode(15, 15, true) // Return format "501961762571582"
 */
const generateCode = (length, pairs, onlyNumbers = false, onlyLetters = false, uppercaseLetters = false) => {
    var _a;
    let result = '';
    const pair = pairs || 4;
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuwxyz';
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characters = onlyNumbers ? numbers : onlyLetters ? uppercaseLetters ? upperLetters : letters : uppercaseLetters ? upperLetters + numbers : letters + upperLetters + numbers;
    const charactersLength = characters.length;
    const regexp = new RegExp(`.{1,${pair}}`, 'g');
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return (_a = result.match(regexp)) === null || _a === void 0 ? void 0 : _a.join('-');
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/**
 * Generate an unique id
 *
 * @return {string} id `string`
 * @example OU.generateId() // Return format d9df8552a6e04d5bb8d3625dca6ffbd5
 */
const generateId = () => {
    return v4().replaceAll('-', '');
};

/**
 * Generate number between two numbers
 *
 * @param {number} min `number` Minimum number
 * @param {number} min `number` Máximum number
 * @return {number} number `number` Number between min and max
 * @example
 * OU.generateNumberBetween(300, 500) // Return 382
 * OU.generateNumberBetween(10, 50) // Return 29
 * OU.generateNumberBetween(10000, 90000) // Return 46692
 */
const generateNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Checks if a unix timestamp has expired relative to the current date.
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @return {boolean} true/false `boolean`
 * @example OU.isTimestampExpired(1695371156) // Return true
 */
const isTimestampExpired = (timestamp) => {
    return Math.floor(Date.now() / 1000) > timestamp;
};

/**
 * Convert date to timestamp
 *
 * @param {string} datetime `string` Date in format "DD-MM-YYYY" or "DD/MM/YYYY" or "DD-MM-YYYY 00:00:00" or "DD/MM/YYYY 00:00:00"
 * @return {number} timestamp `number`
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
 * Convert timestamp to date
 *
 * @param {number} timestamp `number` Example: 1695398400
 * @param {string} separator `string` Example: "/"
 * @param {boolean} includeTime `boolean` Example: true
 * @return {string} date `string` Example: "22/09/2023 18:00"
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

export { convertDateToTimestamp, convertTextToSlug, convertTimestampToDate, extractBase64Data, generateCode, generateId, generateNumberBetween, isTimestampExpired };
