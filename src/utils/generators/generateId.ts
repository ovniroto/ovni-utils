import { v4 as uuid } from 'uuid'

/**
 * Generate an unique id
 *
 * @return {string} id `string`
 * @example OU.generateId() // Return format d9df8552a6e04d5bb8d3625dca6ffbd5
 */
const generateId = (): string => {
    return uuid().replaceAll('-', '')
}

export default generateId