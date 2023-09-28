/*
 *
 *  OvniUtils v0.5.0
 *  https://github.com/ovniroto/ovni-utils
 *
 *  (c) 2023 Lucas O. S.
 *  OvniUtils may be freely distributed under the MIT license.
 *
*/

type Lang = 'es-ES' | 'en-EN';
type Config = {
    language: Lang;
};
declare const setConfig: (cfg: Config) => void;
declare const getConfig: () => {
    language: string;
};

/**
 * Calculate reading time of text
 *
 * @param {string} text `string` Text you want to calculate
 * @return {number} Time `string` Time. Example: 4.5 minutes
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#calculateReadingTime | Recipebook `calculateReadingTime`}
 * @example OU.calculateReadingTime("Lorem ipsum dolor sit amet, consectetur adipiscing elit...") // Return "less than a minute"
 */
declare const calculateReadingTime: (text: any) => string;

/**
 * Get password strength (bad/medium/good/strong)
 *
 * @param {string} password `string` Password
 * @return {string} (bad/medium/good/strong) `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#getPasswordStrength | Recipebook `getPasswordStrength`}
 * @example
 * OU.getPasswordStrength("12345") // Return "bad"
 * OU.getPasswordStrength("qwerty") // Return "bad"
 * OU.getPasswordStrength("Cxtx@5x") // Return "medium"
 * OU.getPasswordStrength("LBC&m3vPme") // Return "good"
 * OU.getPasswordStrength("CxziTy@V#utx5x") // Return "strong"
 */
declare const getPasswordStrength: (password: string) => string;

/**
 * Get relative time of timestamp
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @return {string} time `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#getRelativeTime | Recipebook `getRelativeTime`}
 * @example OU.getRelativeTime(1695371156) // Return format "1 day ago"
 */
declare const getRelativeTime: (timestamp: number) => string;

/**
 * Get unix timestamp in seconds (default) or milliseconds
 *
 * @param {number} milliseconds `boolean` Get unix timestamp in milliseconds (Default: false)
 * @return {number} `number` Unix timestamp in seconds or milliseconds
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#getTimestamp | Recipebook `getTimestamp`}
 * @example OU.getTimestamp() // Return format 1695593795 (unix timestamp in seconds)
 * @example OU.getTimestamp(true) // Return format 1695593795399 (unix timestamp in milliseconds)
 */
declare const getTimestamp: (milliseconds?: boolean) => number;

/**
 * Remove HTML from string
 *
 * @param {format} html `string` HTML string
 * @return {string} text without html `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#removeHTML | Recipebook `removeHTML`}
 * @example OU.removeHTML("<html><body>Hello World!</body></html>") // Return "Hello World!"
 */
declare const removeHTML: (html: string) => string;

/**
 * Stop code execution for as long as you need
 *
 * @param {format} milliseconds `number` Milliseconds. Example: 300
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#sleep | Recipebook `sleep`}
 * @example OU.sleep(300) // Sleep 300 milliseconds
 */
declare const sleep: (milliseconds: number) => Promise<unknown>;

type base64Data = {
    type: string;
    extension: string;
    data: string;
};
/**
 * Extract information of base64 file data
 *
 * @param {string} base64 `string` - base64 file data
 * @return {object} `object` { type: string, extension: string, data: string }
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertBase64Data | Recipebook `convertBase64Data`}
 * @example OU.extractBase64Data("data:image/jpeg;base64,/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...") // Return { type: 'jpg', extension: 'jpg', data: '/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...' }
 */
declare const convertBase64Data: (base64: string) => base64Data;

/**
 * Convert Base64 to File (Uint8Array)
 *
 * @param {number} base64 `string` Base64
 * @return {boolean} File Binary `Uint8Array` File Binary (Uint8Array)
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertBase64ToFile | Recipebook `convertBase64ToFile`}
 * @example OU.convertBase64ToFile("/9j/4Rh3RXhpZgAATU0AKgAAA...") // Return Uint8Array [ 82, 235, 123, 11, ... ]
 */
declare const convertBase64ToFile: (base64: string) => Uint8Array;

/**
 * Convert File or Blob to Base64 data
 *
 * @param {number} file `File` or `Blob` File or Blob data
 * @return {boolean} base64 `string` Base64 data
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertFileToBase64 | Recipebook `convertFileToBase64`}
 * @example OU.convertFileToBase64([File]) // Return data:[<mediatype>][;base64],<data>
 */
declare const convertFileToBase64: (file: File | Blob) => Promise<string>;

type RGB = {
    r: number;
    g: number;
    b: number;
};
/**
 * Convert Hex to RGB
 *
 * @param {number} hex `string` Hex color (#000000)
 * @return {boolean} { r, g, b } `object` Object with rgb
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertHexToRGB | Recipebook `convertHexToRGB`}
 * @example OU.convertHexToRGB("#ffffff") // Return { r: 255, g: 255, b: 255 }
 */
declare const convertHexToRGB: (hex: string) => RGB | null;

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
declare const convertRGBToHex: (r: number, g: number, b: number) => string;

/**
 * Convert date to timestamp
 *
 * @param {string} date `string` Date in format "DD-MM-YYYY" or "DD/MM/YYYY"
 * @param {string} time `string` Time in format "HH:MM"
 * @return {number} timestamp `number`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertDateToTimestamp | Recipebook `convertDateToTimestamp`}
 * @example OU.convertDateToTimestamp("22/09/2023","18:00") // Return 1695398400
 */
declare const convertDateToTimestamp: (date: string, time?: string) => number;

/**
 * Convert timestamp to date
 *
 * @param {number} timestamp `number` Example: 1695398400
 * @param {string} separator `string` Example: "/"
 * @param {boolean} includeTime `boolean` Example: true
 * @return {string} date `string` Example: "22/09/2023 18:00"
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertTimestampToDate | Recipebook `convertTimestampToDate`}
 * @example OU.convertTimestampToDate(1695398400) // Return "22/09/2023 18:00"
 */
declare const convertTimestampToDate: (timestamp: number, separator?: string, includeTime?: boolean) => string;

/**
 * Convert text to slug format for URLs and SEO
 *
 * @param {string} text `string` Text you want to convert
 * @return {string} slug `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#convertTextToSlug | Recipebook `convertTextToSlug`}
 * @example
 * OU.convertTextToSlug("Two black horses in the mountain") // Return "two-black-horses-in-the-mountain"
 * OU.convertTextToSlug("What do you want to do today?") // Return "what-do-you-want-to-do-today"
 * OU.convertTextToSlug("Dos caballos negros en la montaña") // Return "dos-caballos-negros-en-la-montana"
 * OU.convertTextToSlug("Két fekete ló a hegyen") // Return "ket-fekete-lo-a-hegyen"
 * OU.convertTextToSlug("@username is the best") // Return "username-is-the-best"
 */
declare const convertTextToSlug: (text: string) => string;

/**
 * Format actual date
 *
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Actual date formatted
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#formatActualDate | Recipebook `formatActualDate`}
 * @example OU.formatActualDate("dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
declare const formatActualDate: (format: string) => string;

/**
 * Format timestamp to date
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Timestamp date formatted
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#formatTimestamp | Recipebook `formatTimestamp`}
 * @example OU.formatTimestamp(1695371156, "dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
declare const formatTimestamp: (timestamp: number, format: string) => string;

/**
 * Format bytes (5232000 -> "4.99 MB")
 *
 * @param {format} bytes `number` Bytes of a file or something
 * @return {string} Bytes formatted `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#formatBytes | Recipebook `formatBytes`}
 * @example OU.formatBytes(5232000) // Return "4.99 MB"
 */
declare const formatBytes: (bytes: number, decimals?: number) => string;

/**
 * Generate codes
 *
 * @param {number} length `number` Number of characters the code must have
 * @param {number} pairs `number` Number of character pairs that the code must have
 * @param {boolean} onlyNumbers `boolean` Activate if the code should only have numbers
 * @param {boolean} onlyLetters `boolean` Activate if the code should only have letters
 * @param {boolean} uppercaseLetters `boolean` Activate if the code should only have uppercase letters
 * @return {string} code `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#generateCode | Recipebook `generateCode`}
 * @example
 * OU.generateCode(10, 2, true) // Return format "40911-84142"
 * OU.generateCode(8, 4) // Return format "40LW-6MD6"
 * OU.generateCode(20, 5, false, false, true) // Return format "XWRIF-58R4E-2SUC8-5Q67M"
 * OU.generateCode(15, 5, false, true, false) // Return format "wkprz-ukdsq-dxxqs"
 * OU.generateCode(30, 30) // Return format "bDxZW9R1et1W6LuNl3DRTNNZSuw2hD"
 * OU.generateCode(15, 15, true) // Return format "501961762571582"
 */
declare const generateCode: (length: number, pairs: number, onlyNumbers?: boolean, onlyLetters?: boolean, uppercaseLetters?: boolean) => string;

/**
 * Generate an unique id
 *
 * @return {string} id `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#generateId | Recipebook `generateId`}
 * @example OU.generateId() // Return format d9df8552a6e04d5bb8d3625dca6ffbd5
 */
declare const generateId: () => string;

/**
 * Generate number between two numbers
 *
 * @param {number} min `number` Minimum number
 * @param {number} min `number` Maximum number
 * @return {number} number `number` Number between min and max
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#generateNumberBetween | Recipebook `generateNumberBetween`}
 * @example
 * OU.generateNumberBetween(300, 500) // Return 382
 * OU.generateNumberBetween(10, 50) // Return 29
 * OU.generateNumberBetween(10000, 90000) // Return 46692
 */
declare const generateNumberBetween: (min: number, max: number) => number;

/**
 * Checks if text contain digits
 *
 * @param {string} text `string` Text you want to check
 * @return {boolean} true/false `boolean` Returns true or false depending on whether the text contains digits or not
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#containDigits | Recipebook `containDigits`}
 * @example
 * OU.containDigits("Area51") // Return true
 * OU.containDigits("ovni") // Return false
 */
declare const containDigits: (text: string) => boolean;

/**
 * Check if text contain normalcase letters
 *
 * @param {string} text `string` Text you want to check
 * @return {string} true/false `boolean` Returns true or false depending on whether the text contains normalcase letters or not
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#containNormalcaseLetters | Recipebook `containNormalcaseLetters`}
 * @example
 * OU.containNormalcaseLetters("text with normalcase letters") // Return true
 * OU.containNormalcaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containNormalcaseLetters("TEXT WITH UPPERCASE LETTERS") // Return false
 */
declare const containNormalcaseLetters: (text: string) => boolean;

/**
 * Check if text contain special chars
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#containSpecialChars | Recipebook `containSpecialChars`}
 * @example
 * OU.containSpecialChars("Text with speci@l ch@ract&r$") // Return true
 * OU.containSpecialChars("Text with spaces") // Return true
 * OU.containSpecialChars("TextWithoutSpaces") // Return false
 */
declare const containSpecialChars: (text: string) => boolean;

/**
 * Check if text contain uppercase letters
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#containUppercaseLetters | Recipebook `containUppercaseLetters`}
 * @example
 * OU.containUppercaseLetters("TEXT WITH UPPERCASE LETTERS") // Return true
 * OU.containUppercaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containUppercaseLetters("text with normalcase letters") // Return false
 */
declare const containUppercaseLetters: (text: string) => boolean;

/**
 * Checks if code is valid
 *
 * @param {string} code `string` Code
 * @param {string} format `string` Format. Example: "XXX-XXX"
 * @param {boolean} deep `boolean` Deep format check
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isCodeValid | Recipebook `isCodeValid`}
 * @example
 * OU.isCodeValid("QW12-ER34","XXXX-XXXX") // Return true
 * OU.isCodeValid("1234-1234","DDDD-DDDD") // Return true
 * OU.isCodeValid("f2m1-2gf4","RRRR-RRRR") // Return true
 */
declare const isCodeValid: (code: string, format: string, deep?: boolean) => boolean;

/**
 * Checks if email is valid
 *
 * @param {string} email `string` Email
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isEmailValid | Recipebook `isEmailValid`}
 * @example
 * OU.isEmailValid("name@domain.com") // Return true
 * OU.isEmailValid("name#domain.com") // Return false
 * OU.isEmailValid("namedomain.com") // Return false
 * OU.isEmailValid("domain.com") // Return false
 */
declare const isEmailValid: (email: string) => boolean;

type AllowedUsernameValues = 'a-z' | 'A-Z' | '0-9' | '_' | '-' | '.';
/**
 * Checks if username is valid
 *
 * @param {string} username `string` Username
 * @param {number} minLength `number` Minimum length
 * @param {number} maxLength `number` Maximum length
 * @param {Array[string]} charactersAllowed `array[string]` Characters allowed. Allowed values: ['a-z','A-Z','0-9','_']
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isUsernameValid | Recipebook `isUsernameValid`}
 * @example
 * OU.isUsernameValid("username", 3, 20, ['az','AZ','09','_']) // Return true
 * OU.isUsernameValid("user.name", 3, 20, ['az','AZ','09','_']) // Return false
 * OU.isUsernameValid("username", 1, 5, ['az','AZ','09','_']) // Return false
 * OU.isUsernameValid("12345awsd", 3, 10, ['az','AZ','09','_']) // Return true
 * OU.isUsernameValid("ovni.dev", 3, 10, ['az','AZ','.']) // Return true
 * OU.isUsernameValid("dev", 3, 10) // Return true
 */
declare const isUsernameValid: (username: string, minLength?: number, maxLength?: number, charactersAllowed?: AllowedUsernameValues[]) => boolean;

type AllowedPasswordValues = 'alphabet' | 'digits' | 'symbols';
/**
 * Checks if password is valid
 *
 * @param {string} password `string` Password
 * @param {number} minLength `number` Minimum length
 * @param {number} maxLength `number` Maximum length
 * @param {Array[string]} charactersRequired `array[string]` Characters required. Allowed values: `alphabet`, `digits`, `symbols`
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isPasswordValid | Recipebook `isPasswordValid`}
 * @example
 * OU.isPasswordValid("R@ndomP@ss*1234", 3, 30, ['alphabet','digits','symbols']) // Return true
 * OU.isPasswordValid("RandomPass1234", 3, 30, ['alphabet']) // Return false
 * OU.isPasswordValid("1234", 3, 30, ['alphabet']) // Return false
 */
declare const isPasswordValid: (password: string, minLength?: number, maxLength?: number, charactersRequired?: AllowedPasswordValues[]) => boolean;

/**
 * Checks if a unix timestamp has expired relative to the current date.
 *
 * @param {number} timestamp `number` Unix timestamp in seconds or milliseconds
 * @param {number} milliseconds `boolean` Activate it if you are going to check a timestamp in milliseconds
 * @return {boolean} true/false `boolean`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#isTimestampExpired | Recipebook `isTimestampExpired`}
 * @example OU.isTimestampExpired(1695371156) // Return true
 * @example OU.isTimestampExpired(1695593795399, true) // Return true
 * @example OU.isTimestampExpired(2863283114) // Return false
 */
declare const isTimestampExpired: (timestamp: number, milliseconds?: boolean) => boolean;

export { calculateReadingTime, containDigits, containNormalcaseLetters, containSpecialChars, containUppercaseLetters, convertBase64Data, convertBase64ToFile, convertDateToTimestamp, convertFileToBase64, convertHexToRGB, convertRGBToHex, convertTextToSlug, convertTimestampToDate, formatActualDate, formatBytes, formatTimestamp, generateCode, generateId, generateNumberBetween, getConfig, getPasswordStrength, getRelativeTime, getTimestamp, isCodeValid, isEmailValid, isPasswordValid, isTimestampExpired, isUsernameValid, removeHTML, setConfig, sleep };
