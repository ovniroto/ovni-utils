export { getConfig, setConfig } from './config'

// Global utils
export { default as calculateReadingTime } from './utils/globals/calculateReadingTime'
export { default as getPasswordStrength } from './utils/globals/getPasswordStrength'
export { default as getRelativeTime } from './utils/globals/getRelativeTime'
export { default as getTimestamp } from './utils/globals/getTimestamp'
export { default as removeHTML } from './utils/globals/removeHTML'
export { default as sleep } from './utils/globals/sleep'

// Converters related utils
export { default as convertBase64Data } from './utils/converters/convertBase64Data'
export { default as convertBase64ToFile } from './utils/converters/convertBase64ToFile'
export { default as convertFileToBase64 } from './utils/converters/convertFileToBase64'
export { default as convertHexToRGB } from './utils/converters/convertHexToRGB'
export { default as convertRGBToHex } from './utils/converters/convertRGBToHex'
export { default as convertDateToTimestamp } from './utils/converters/convertDateToTimestamp'
export { default as convertTimestampToDate } from './utils/converters/convertTimestampToDate'
export { default as convertTextToSlug } from './utils/converters/convertTextToSlug'

// Formatters
export { default as formatActualDate } from './utils/formatters/formatActualDate'
export { default as formatTimestamp } from './utils/formatters/formatTimestamp'
export { default as formatBytes } from './utils/formatters/formatBytes'

// Generators related utils
export { default as generateCode } from './utils/generators/generateCode'
export { default as generateId } from './utils/generators/generateId'
export { default as generateNumberBetween } from './utils/generators/generateNumberBetween'

// validators
export { default as containDigits } from './utils/validators/containDigits'
export { default as containNormalcaseLetters } from './utils/validators/containNormalcaseLetters'
export { default as containSpecialChars } from './utils/validators/containSpecialChars'
export { default as containUppercaseLetters } from './utils/validators/containUppercaseLetters'
export { default as isEmailValid } from './utils/validators/isEmailValid'
export { default as isUsernameValid } from './utils/validators/isUsernameValid'
export { default as isPasswordValid } from './utils/validators/isPasswordValid'
export { default as isTimestampExpired } from './utils/validators/isTimestampExpired'