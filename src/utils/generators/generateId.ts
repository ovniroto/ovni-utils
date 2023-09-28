import { v4 as uuid } from 'uuid'

/**
 * Generate an unique id
 *
 * @return {string} id `string`
 * @link {@link https://github.com/ovniroto/ovni-utils/wiki/Recipebook#generateId | Recipebook `generateId`}
 * @example OU.generateId() // Return format d9df8552a6e04d5bb8d3625dca6ffbd5
 */
const generateId = (): string => {
    return uuid().replaceAll('-', '')
}

export default generateId