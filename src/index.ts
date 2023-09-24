export { getConfig, setConfig } from './config'

// Converters related utils
export { default as convertTextToSlug } from './utils/converters/convertTextToSlug'
export { default as convertBase64Data } from './utils/converters/convertBase64Data'

// Data related utils
export { default as extractBase64FileData } from './utils/data/extractBase64FileData'
export { default as formatBytes } from './utils/data/formatBytes'
export { default as removeHTML } from './utils/data/removeHTML'

// Generators related utils
export { default as generateCode } from './utils/generators/generateCode'
export { default as generateId } from './utils/generators/generateId'
export { default as generateNumberBetween } from './utils/generators/generateNumberBetween'

// Global utils
export { default as getPasswordStrength } from './utils/global/getPasswordStrength'

// Time related utils
export { default as calculateReadingTime } from './utils/time/calculateReadingTime'
export { default as convertDateToTimestamp } from './utils/time/convertDateToTimestamp'
export { default as convertTimestampToDate } from './utils/time/convertTimestampToDate'
export { default as formatActualDate } from './utils/time/formatActualDate'
export { default as formatTimestamp } from './utils/time/formatTimestamp'
export { default as getRelativeTime } from './utils/time/getRelativeTime'
export { default as getTimestamp } from './utils/time/getTimestamp'
export { default as isTimestampExpired } from './utils/time/isTimestampExpired'
export { default as sleep } from './utils/time/sleep'

// validators
export { default as containDigits } from './utils/validators/containDigits'
export { default as containNormalcaseLetters } from './utils/validators/containNormalcaseLetters'
export { default as containSpecialChars } from './utils/validators/containSpecialChars'
export { default as containUppercaseLetters } from './utils/validators/containUppercaseLetters'
export { default as isEmailValid } from './utils/validators/isEmailValid'
export { default as isPasswordValid } from './utils/validators/isPasswordValid'
export { default as isUsernameValid } from './utils/validators/isUsernameValid'