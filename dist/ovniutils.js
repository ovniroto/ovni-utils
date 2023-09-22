/*
 *
 *  OvniUtils v0.1.2
 *  https://github.com/ovniroto/ovni-utils
 *
 *  (c) 2023 Lucas O. S.
 *  OvniUtils may be freely distributed under the MIT license.
 *
*/

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
        let [d, t] = datetime.split(" ");
        let time = t.split(":");
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

export { convertDateToTimestamp, isTimestampExpired };
