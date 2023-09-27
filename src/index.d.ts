export declare type Config = { language: Lang }
export declare type Lang = 'es-ES' | 'en-EN'
export declare type AllowedPasswordValues = 'alphabet' | 'digits' | 'symbols'
export declare type AllowedUsernameValues = 'a-z' | 'A-Z' | '0-9' | '_' | '-' | '.'

export declare const setConfig: (cfg: Config) => void;
export declare const getConfig: () => {
    language: string;
};

/**
 * Extract information of base64 file data
 *
 * @param {string} base64 `string` - base64 file data
 * @return {object} `object` { type: string, extension: string, data: string }
 * @example OU.extractBase64Data("data:image/jpeg;base64,/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...") // Return { type: 'jpg', extension: 'jpg', data: '/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...' }
 */
export declare const convertBase64Data: (base64: string) => {
    type: string;
    extension: string;
    data: string;
};

/**
 * Convert Base64 to File (Uint8Array)
 *
 * @param {number} base64 `string` Base64
 * @return {boolean} File Binary `Uint8Array` File Binary (Uint8Array)
 * @example OU.convertBase64ToFile("/9j/4Rh3RXhpZgAATU0AKgAAA...") // Return Uint8Array [ 82, 235, 123, 11, ... ]
 */
export declare const convertBase64ToFile: (base64: string) => Uint8Array;

/**
 * Convert date to timestamp
 *
 * @param {string} date `string` Date in format "DD-MM-YYYY" or "DD/MM/YYYY"
 * @param {string} time `string` Time in format "HH:MM"
 * @return {number} timestamp `number`
 * @example OU.convertDateToTimestamp("22/09/2023","18:00") // Return 1695398400
 */
export declare const convertDateToTimestamp: (date: string, time?: string) => number;

/**
 * Convert File or Blob to Base64 data
 *
 * @param {number} file `File` or `Blob` File or Blob data
 * @return {boolean} base64 `string` Base64 data
 * @example OU.convertFileToBase64([File]) // Return data:[<mediatype>][;base64],<data>
 */
export declare const convertFileToBase64: (file: File | Blob) => Promise<string>;

/**
 * Convert Hex to RGB
 *
 * @param {number} hex `string` Hex color (#000000)
 * @return {boolean} { r, g, b } `object` Object with rgb
 * @example OU.convertHexToRGB("#ffffff") // Return { r: 255, g: 255, b: 255 }
 */
export declare const convertHexToRGB: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;

/**
 * Convert RGB to Hex
 *
 * @param {number} r `number` Red color
 * @param {number} g `number` Green color
 * @param {number} b `number` Blue color
 * @return {boolean} Hex `string` Hex color
 * @example OU.convertRGBToHex(255, 255, 255) // Return "#ffffff"
 */
export declare const convertRGBToHex: (r: number, g: number, b: number) => string;

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
export declare const convertTextToSlug: (text: string) => string;

/**
 * Convert timestamp to date
 *
 * @param {number} timestamp `number` Example: 1695398400
 * @param {string} separator `string` Example: "/"
 * @param {boolean} includeTime `boolean` Example: true
 * @return {string} date `string` Example: "22/09/2023 18:00"
 * @example OU.convertTimestampToDate(1695398400) // Return "22/09/2023 18:00"
 */
export declare const convertTimestampToDate: (timestamp: number, separator?: string, includeTime?: boolean) => string;

/**
 * Format actual date
 *
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Actual date formatted
 * @example OU.formatActualDate("dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
export declare const formatActualDate: (format: string) => string;

/**
 * Format bytes (5232000 -> "4.99 MB")
 *
 * @param {format} bytes `number` Bytes of a file or something
 * @return {string} Bytes formatted `string`
 * @example OU.formatBytes(5232000) // Return "4.99 MB"
 */
export declare const formatBytes: (bytes: number, decimals?: number) => string;

/**
 * Format timestamp to date
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Timestamp date formatted
 * @example OU.formatTimestamp(1695371156, "dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
export declare const formatTimestamp: (timestamp: number, format: string) => string;

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
export declare const generateCode: (length: number, pairs: number, onlyNumbers?: boolean, onlyLetters?: boolean, uppercaseLetters?: boolean) => string;

/**
 * Generate an unique id
 *
 * @return {string} id `string`
 * @example OU.generateId() // Return format d9df8552a6e04d5bb8d3625dca6ffbd5
 */
export declare const generateId: () => string;

/**
 * Generate number between two numbers
 *
 * @param {number} min `number` Minimum number
 * @param {number} min `number` Maximum number
 * @return {number} number `number` Number between min and max
 * @example
 * OU.generateNumberBetween(300, 500) // Return 382
 * OU.generateNumberBetween(10, 50) // Return 29
 * OU.generateNumberBetween(10000, 90000) // Return 46692
 */
export declare const generateNumberBetween: (min: number, max: number) => number;

/**
 * Calculate reading time of text
 *
 * @param {string} text `string` Text you want to calculate
 * @return {number} Time `string` Time. Example: 4.5 minutes
 * @example OU.calculateReadingTime("Lorem ipsum dolor sit amet, consectetur adipiscing elit...") // Return "less than a minute"
 */
export declare const calculateReadingTime: (text: any) => string;

/**
 * Get password strength (bad/medium/good/strong)
 *
 * @param {string} password `string` Password
 * @return {string} (bad/medium/good/strong) `string`
 * @example
 * OU.getPasswordStrength("12345") // Return "bad"
 * OU.getPasswordStrength("qwerty") // Return "bad"
 * OU.getPasswordStrength("Cxtx@5x") // Return "medium"
 * OU.getPasswordStrength("LBC&m3vPme") // Return "good"
 * OU.getPasswordStrength("CxziTy@V#utx5x") // Return "strong"
 */
export declare const getPasswordStrength: (password: string) => string;

/**
 * Get relative time of timestamp
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @return {string} time `string`
 * @example OU.getRelativeTime(1695371156) // Return format "1 day ago"
 */
export declare const getRelativeTime: (timestamp: number) => string;

/**
 * Get unix timestamp in seconds (default) or milliseconds
 *
 * @param {number} milliseconds `boolean` Get unix timestamp in milliseconds (Default: false)
 * @return {number} `number` Unix timestamp in seconds or milliseconds
 * @example OU.getTimestamp() // Return format 1695593795 (unix timestamp in seconds)
 * @example OU.getTimestamp(true) // Return format 1695593795399 (unix timestamp in milliseconds)
 */
export declare const getTimestamp: (milliseconds?: boolean) => number;

/**
 * Remove HTML from string
 *
 * @param {format} html `string` HTML string
 * @return {string} text without html `string`
 * @example OU.removeHTML("<html><body>Hello World!</body></html>") // Return "Hello World!"
 */
export declare const removeHTML: (html: string) => string;

/**
 * Stop code execution for as long as you need
 *
 * @param {format} milliseconds `number` Milliseconds. Example: 300
 * @example OU.sleep(300) // Sleep 300 milliseconds
 */
export declare const sleep: (milliseconds: number) => Promise<unknown>;

/**
 * Checks if text contain digits
 *
 * @param {string} text `string` Text you want to check
 * @return {boolean} true/false `boolean` Returns true or false depending on whether the text contains digits or not
 * @example
 * OU.containDigits("Area51") // Return true
 * OU.containDigits("ovni") // Return false
 */
export declare const containDigits: (text: string) => boolean;

/**
 * Check if text contain normalcase letters
 *
 * @param {string} text `string` Text you want to check
 * @return {string} true/false `boolean` Returns true or false depending on whether the text contains normalcase letters or not
 * @example
 * OU.containNormalcaseLetters("text with normalcase letters") // Return true
 * OU.containNormalcaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containNormalcaseLetters("TEXT WITH UPPERCASE LETTERS") // Return false
 */
export declare const containNormalcaseLetters: (text: string) => boolean;

/**
 * Check if text contain special chars
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @example
 * OU.containSpecialChars("Text with speci@l ch@ract&r$") // Return true
 * OU.containSpecialChars("Text with spaces") // Return true
 * OU.containSpecialChars("TextWithoutSpaces") // Return false
 */
export declare const containSpecialChars: (text: string) => boolean;

/**
 * Check if text contain uppercase letters
 *
 * @param {string} text `string` Text
 * @return {string} true/false `boolean`
 * @example
 * OU.containUppercaseLetters("TEXT WITH UPPERCASE LETTERS") // Return true
 * OU.containUppercaseLetters("Text With Normalcase And Uppercase Letters") // Return true
 * OU.containUppercaseLetters("text with normalcase letters") // Return false
 */
export declare const containUppercaseLetters: (text: string) => boolean;

/**
 * Checks if email is valid
 *
 * @param {string} email `string` Email
 * @return {boolean} true/false `boolean`
 * @example
 * OU.isEmailValid("name@domain.com") // Return true
 * OU.isEmailValid("name#domain.com") // Return false
 * OU.isEmailValid("namedomain.com") // Return false
 * OU.isEmailValid("domain.com") // Return false
 */
export declare const isEmailValid: (email: string) => boolean;

/**
 * Checks if password is valid
 *
 * @param {string} password `string` Password
 * @param {number} minLength `number` Minimum length
 * @param {number} maxLength `number` Maximum length
 * @param {Array[string]} charactersRequired `array[string]` Characters required. Allowed values: ['alphabet','digits','symbols']
 * @return {boolean} true/false `boolean`
 * @example
 * OU.isPasswordValid("R@ndomP@ss*1234", 3, 30, ['alphabet','digits','symbols']) // Return true
 * OU.isPasswordValid("RandomPass1234", 3, 30, ['alphabet']) // Return false
 * OU.isPasswordValid("1234", 3, 30, ['alphabet']) // Return false
 */
export declare const isPasswordValid: (password: string, minLength?: number, maxLength?: number, charactersRequired?: AllowedPasswordValues[]) => boolean;

/**
 * Checks if a unix timestamp has expired relative to the current date.
 *
 * @param {number} timestamp `number` Unix timestamp in seconds or milliseconds
 * @param {number} milliseconds `boolean` Activate it if you are going to check a timestamp in milliseconds
 * @return {boolean} true/false `boolean`
 * @example OU.isTimestampExpired(1695371156) // Return true
 * @example OU.isTimestampExpired(1695593795399, true) // Return true
 * @example OU.isTimestampExpired(2863283114) // Return false
 */
export declare const isTimestampExpired: (timestamp: number, milliseconds?: boolean) => boolean;

/**
 * Checks if username is valid
 *
 * @param {string} username `string` Username
 * @param {number} minLength `number` Minimum length
 * @param {number} maxLength `number` Maximum length
 * @param {Array[string]} charactersAllowed `array[string]` Characters allowed. Allowed values: ['a-z','A-Z','0-9','_']
 * @return {boolean} true/false `boolean`
 * @example
 * OU.isUsernameValid("username", 3, 20, ['az','AZ','09','_']) // Return true
 * OU.isUsernameValid("user.name", 3, 20, ['az','AZ','09','_']) // Return false
 * OU.isUsernameValid("username", 1, 5, ['az','AZ','09','_']) // Return false
 * OU.isUsernameValid("12345awsd", 3, 10, ['az','AZ','09','_']) // Return true
 * OU.isUsernameValid("ovni.dev", 3, 10, ['az','AZ','.']) // Return true
 * OU.isUsernameValid("dev", 3, 10) // Return true
 */
export declare const isUsernameValid: (username: string, minLength?: number, maxLength?: number, charactersAllowed?: AllowedUsernameValues[]) => boolean;