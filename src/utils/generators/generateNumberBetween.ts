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
const generateNumberBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default generateNumberBetween