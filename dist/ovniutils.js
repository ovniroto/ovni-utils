/*
 *
 *  OvniUtils v0.4.2
 *  https://github.com/ovniroto/ovni-utils
 *
 *  (c) 2023 Lucas O. S.
 *  OvniUtils may be freely distributed under the MIT license.
 *
*/

var token=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;var timezone=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g;var timezoneClip=/[^-+\dA-Z]/g;function dateFormat(date,mask,utc,gmt){if(arguments.length===1&&typeof date==="string"&&!/\d/.test(date)){mask=date;date=undefined;}date=date||date===0?date:new Date;if(!(date instanceof Date)){date=new Date(date);}if(isNaN(date)){throw TypeError("Invalid date")}mask=String(masks[mask]||mask||masks["default"]);var maskSlice=mask.slice(0,4);if(maskSlice==="UTC:"||maskSlice==="GMT:"){mask=mask.slice(4);utc=true;if(maskSlice==="GMT:"){gmt=true;}}var _=function _(){return utc?"getUTC":"get"};var _d=function d(){return date[_()+"Date"]()};var D=function D(){return date[_()+"Day"]()};var _m=function m(){return date[_()+"Month"]()};var y=function y(){return date[_()+"FullYear"]()};var _H=function H(){return date[_()+"Hours"]()};var _M=function M(){return date[_()+"Minutes"]()};var _s=function s(){return date[_()+"Seconds"]()};var _L=function L(){return date[_()+"Milliseconds"]()};var _o=function o(){return utc?0:date.getTimezoneOffset()};var _W=function W(){return getWeek(date)};var _N=function N(){return getDayOfWeek(date)};var flags={d:function d(){return _d()},dd:function dd(){return pad(_d())},ddd:function ddd(){return i18n.dayNames[D()]},DDD:function DDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()],short:true})},dddd:function dddd(){return i18n.dayNames[D()+7]},DDDD:function DDDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()+7]})},m:function m(){return _m()+1},mm:function mm(){return pad(_m()+1)},mmm:function mmm(){return i18n.monthNames[_m()]},mmmm:function mmmm(){return i18n.monthNames[_m()+12]},yy:function yy(){return String(y()).slice(2)},yyyy:function yyyy(){return pad(y(),4)},h:function h(){return _H()%12||12},hh:function hh(){return pad(_H()%12||12)},H:function H(){return _H()},HH:function HH(){return pad(_H())},M:function M(){return _M()},MM:function MM(){return pad(_M())},s:function s(){return _s()},ss:function ss(){return pad(_s())},l:function l(){return pad(_L(),3)},L:function L(){return pad(Math.floor(_L()/10))},t:function t(){return _H()<12?i18n.timeNames[0]:i18n.timeNames[1]},tt:function tt(){return _H()<12?i18n.timeNames[2]:i18n.timeNames[3]},T:function T(){return _H()<12?i18n.timeNames[4]:i18n.timeNames[5]},TT:function TT(){return _H()<12?i18n.timeNames[6]:i18n.timeNames[7]},Z:function Z(){return gmt?"GMT":utc?"UTC":formatTimezone(date)},o:function o(){return (_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60)*100+Math.abs(_o())%60,4)},p:function p(){return (_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60),2)+":"+pad(Math.floor(Math.abs(_o())%60),2)},S:function S(){return ["th","st","nd","rd"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function W(){return _W()},WW:function WW(){return pad(_W())},N:function N(){return _N()}};return mask.replace(token,function(match){if(match in flags){return flags[match]()}return match.slice(1,match.length-1)})}var masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"};var i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var pad=function pad(val){var len=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return String(val).padStart(len,"0")};var getDayName=function getDayName(_ref){var y=_ref.y,m=_ref.m,d=_ref.d,_=_ref._,dayName=_ref.dayName,_ref$short=_ref["short"],_short=_ref$short===void 0?false:_ref$short;var today=new Date;var yesterday=new Date;yesterday.setDate(yesterday[_+"Date"]()-1);var tomorrow=new Date;tomorrow.setDate(tomorrow[_+"Date"]()+1);var today_d=function today_d(){return today[_+"Date"]()};var today_m=function today_m(){return today[_+"Month"]()};var today_y=function today_y(){return today[_+"FullYear"]()};var yesterday_d=function yesterday_d(){return yesterday[_+"Date"]()};var yesterday_m=function yesterday_m(){return yesterday[_+"Month"]()};var yesterday_y=function yesterday_y(){return yesterday[_+"FullYear"]()};var tomorrow_d=function tomorrow_d(){return tomorrow[_+"Date"]()};var tomorrow_m=function tomorrow_m(){return tomorrow[_+"Month"]()};var tomorrow_y=function tomorrow_y(){return tomorrow[_+"FullYear"]()};if(today_y()===y&&today_m()===m&&today_d()===d){return _short?"Tdy":"Today"}else if(yesterday_y()===y&&yesterday_m()===m&&yesterday_d()===d){return _short?"Ysd":"Yesterday"}else if(tomorrow_y()===y&&tomorrow_m()===m&&tomorrow_d()===d){return _short?"Tmw":"Tomorrow"}return dayName};var getWeek=function getWeek(date){var targetThursday=new Date(date.getFullYear(),date.getMonth(),date.getDate());targetThursday.setDate(targetThursday.getDate()-(targetThursday.getDay()+6)%7+3);var firstThursday=new Date(targetThursday.getFullYear(),0,4);firstThursday.setDate(firstThursday.getDate()-(firstThursday.getDay()+6)%7+3);var ds=targetThursday.getTimezoneOffset()-firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours()-ds);var weekDiff=(targetThursday-firstThursday)/(864e5*7);return 1+Math.floor(weekDiff)};var getDayOfWeek=function getDayOfWeek(date){var dow=date.getDay();if(dow===0){dow=7;}return dow};var formatTimezone=function formatTimezone(date){return (String(date).match(timezone)||[""]).pop().replace(timezoneClip,"").replace(/GMT\+0000/g,"UTC")};

const dayNames = (lang) => {
    if (lang == 'es-ES')
        return [
            'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb',
            'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
        ];
    return [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
};
const monthNames = (lang) => {
    if (lang == 'es-ES')
        return [
            'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
    return [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
};
const timeNames = () => {
    return ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'];
};

const config$2 = {
    language: 'en-US'
};
const setConfig = (cfg) => {
    config$2.language = cfg.language;
    changeDateFormatLang();
};
const getConfig = () => {
    return config$2;
};
const changeDateFormatLang = () => {
    i18n.dayNames = dayNames(config$2.language);
    i18n.monthNames = monthNames(config$2.language);
    i18n.timeNames = timeNames();
};

const time = (lang, plural = false) => {
    if (lang == 'es-ES')
        return {
            ago: 'hace',
            in: 'en',
            now: 'justo ahora',
            lessthanaminute: 'menos de 1 minuto',
            millisecond: plural ? 'milisegundos' : 'milisegundo',
            second: plural ? 'segundos' : 'segundo',
            minute: plural ? 'minutos' : 'minuto',
            hour: plural ? 'horas' : 'hora',
            day: plural ? 'días' : 'día',
            week: plural ? 'semanas' : 'semana',
            month: plural ? 'meses' : 'mes',
            year: plural ? 'años' : 'año',
        };
    return {
        ago: 'ago',
        in: 'in',
        now: 'just now',
        lessthanaminute: 'less than a minute',
        millisecond: plural ? 'milliseconds' : 'millisecond',
        second: plural ? 'seconds' : 'second',
        minute: plural ? 'minutes' : 'minute',
        hour: plural ? 'hours' : 'hour',
        day: plural ? 'days' : 'day',
        week: plural ? 'weeks' : 'week',
        month: plural ? 'months' : 'month',
        year: plural ? 'years' : 'year',
    };
};

const config$1 = getConfig();
/**
 * Calculate reading time of text
 *
 * @param {string} text `string` Text you want to calculate
 * @return {number} Time `string` Time. Example: 4.5 minutes
 * @example OU.calculateReadingTime("Lorem ipsum dolor sit amet, consectetur adipiscing elit...") // Return "less than a minute"
 */
const calculateReadingTime = (text) => {
    const lang = config$1.language;
    let words = text.split(' ');
    let minutes = words.length / 225;
    minutes = Math.round(minutes * 10) / 10;
    if (minutes <= 0)
        return time(lang).lessthanaminute;
    if (minutes <= 60)
        return `${minutes} ${minutes > 1 ? time(lang, true).minute : time(lang).minute}`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
        return `${hours} ${hours > 1 ? time(lang, true).hour : time(lang).hour}`;
    const days = Math.floor(hours / 24);
    if (days < 7)
        return `${days} ${days > 1 ? time(lang, true).day : time(lang).day}`;
    // This part may never be used, but it doesn't cost me anything to put it on.
    // If someone calculates a text so long that it takes more than 1 day to read, please mention me at x.com/ovniroto xD
    const weeks = Math.floor(days / 7);
    if (weeks < 4)
        return `${weeks} ${weeks > 1 ? time(lang, true).week : time(lang).week}`;
    const months = Math.floor(days / 30);
    if (months < 12)
        return `${months} ${months > 1 ? time(lang, true).month : time(lang).month}`;
    const years = Math.floor(days / 365);
    return `${years} ${years > 1 ? time(lang, true).year : time(lang).year}`;
};

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
const getPasswordStrength = (password) => {
    let strong = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){14,20}$/);
    const checkStrong = strong.test(password);
    if (checkStrong)
        return 'strong';
    let good = new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/);
    const checkGood = good.test(password);
    if (checkGood)
        return 'good';
    let medium = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){1,16}$/);
    const checkMedium = medium.test(password);
    if (checkMedium)
        return 'medium';
    return 'bad';
};

const config = getConfig();
/**
 * Get relative time of timestamp
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @return {string} time `string`
 * @example OU.getRelativeTime(1695371156) // Return format "1 day ago"
 */
const getRelativeTime = (timestamp) => {
    const lang = config.language;
    const now = Date.now() / 1000;
    const elapsedTime = Math.abs((Math.floor(now)) - timestamp);
    let amountTime, type;
    const seconds = elapsedTime;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    /* Years */
    if (months > 12) {
        amountTime = years;
        type = years > 1 ? time(lang, true).year : time(lang).year;
    }
    /* Months */
    else if (days > 30) {
        amountTime = months;
        type = months > 1 ? time(lang, true).month : time(lang).month;
    }
    /* Weeks */
    else if (days > 7) {
        amountTime = weeks;
        type = weeks > 1 ? time(lang, true).week : time(lang).week;
    }
    /* Days */
    else if (hours > 24) {
        amountTime = days;
        type = days > 1 ? time(lang, true).day : time(lang).day;
    }
    /* hours */
    else if (minutes > 60) {
        amountTime = hours;
        type = hours > 1 ? time(lang, true).hour : time(lang).hour;
    }
    /* Minutes */
    else if (seconds > 60) {
        amountTime = minutes;
        type = minutes > 1 ? time(lang, true).minute : time(lang).minute;
    }
    /* Seconds */
    else {
        amountTime = seconds;
        type = seconds > 1 ? time(lang, true).second : time(lang).second;
    }
    let relative = amountTime + ' ' + type;
    if (timestamp > now)
        return time(lang).in + ' ' + relative;
    return lang == 'es-ES' ? (time(lang).ago + ' ' + relative) : (relative + ' ' + time(lang).ago);
};

/**
 * Get unix timestamp in seconds (default) or milliseconds
 *
 * @param {number} milliseconds `boolean` Get unix timestamp in milliseconds (Default: false)
 * @return {number} `number` Unix timestamp in seconds or milliseconds
 * @example OU.getTimestamp() // Return format 1695593795 (unix timestamp in seconds)
 * @example OU.getTimestamp(true) // Return format 1695593795399 (unix timestamp in milliseconds)
 */
const getTimestamp = (milliseconds = false) => {
    return milliseconds ? Date.now() : (Math.floor(Date.now() / 1000.0));
};

/**
 * Remove HTML from string
 *
 * @param {format} html `string` HTML string
 * @return {string} text without html `string`
 * @example OU.removeHTML("<html><body>Hello World!</body></html>") // Return "Hello World!"
 */
const removeHTML = (html) => {
    return html.replace(/<[^>]*>?/gm, '');
};

/**
 * Stop code execution for as long as you need
 *
 * @param {format} milliseconds `number` Milliseconds. Example: 300
 * @example OU.sleep(300) // Sleep 300 milliseconds
 */
const sleep = (milliseconds) => new Promise((r) => setTimeout(r, milliseconds));

/**
 * Extract information of base64 file data
 *
 * @param {string} base64 `string` - base64 file data
 * @return {object} `object` { type: string, extension: string, data: string }
 * @example OU.extractBase64Data("data:image/jpeg;base64,/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...") // Return { type: 'jpg', extension: 'jpg', data: '/9j/4RQKRXhpZgAATU0AKgAAAAgADAEAAAMAAA...' }
 */
const convertBase64Data = (base64) => {
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
 * Convert Base64 to File (Uint8Array)
 *
 * @param {number} base64 `string` Base64
 * @return {boolean} File Binary `Uint8Array` File Binary (Uint8Array)
 * @example OU.convertBase64ToFile("/9j/4Rh3RXhpZgAATU0AKgAAA...") // Return Uint8Array [ 82, 235, 123, 11, ... ]
 */
const convertBase64ToFile = (base64) => {
    let binary = atob(base64);
    let length = binary.length;
    let uint8Array = new Uint8Array(new ArrayBuffer(length));
    for (let index = 0; index < length; index++) {
        uint8Array[index] = binary.charCodeAt(index);
    }
    return uint8Array;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Convert File or Blob to Base64 data
 *
 * @param {number} file `File` or `Blob` File or Blob data
 * @return {boolean} base64 `string` Base64 data
 * @example OU.convertFileToBase64([File]) // Return data:[<mediatype>][;base64],<data>
 */
const convertFileToBase64 = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onend = reject;
        reader.onabort = reject;
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
    });
});

/**
 * Convert Hex to RGB
 *
 * @param {number} hex `string` Hex color (#000000)
 * @return {boolean} { r, g, b } `object` Object with rgb
 * @example OU.convertHexToRGB("#ffffff") // Return { r: 255, g: 255, b: 255 }
 */
const convertHexToRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

/**
 * Convert RGB to Hex
 *
 * @param {number} r `number` Red color
 * @param {number} g `number` Green color
 * @param {number} b `number` Blue color
 * @return {boolean} Hex `string` Hex color
 * @example OU.convertRGBToHex(255, 255, 255) // Return "#ffffff"
 */
const convertRGBToHex = (r, g, b) => {
    const hexR = Math.min(255, Math.max(0, r)).toString(16).padStart(2, '0');
    const hexG = Math.min(255, Math.max(0, g)).toString(16).padStart(2, '0');
    const hexB = Math.min(255, Math.max(0, b)).toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
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
 * Format actual date
 *
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Actual date formatted
 * @example OU.formatActualDate("dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
const formatActualDate = (format) => {
    return dateFormat(new Date(), format);
};

/**
 * Format timestamp to date
 *
 * @param {number} timestamp `number` Unix timestamp in seconds
 * @param {format} format `string` Format options: https://www.npmjs.com/package/dateformat
 * @return {string} date `string` Timestamp date formatted
 * @example OU.formatTimestamp(1695371156, "dddd, mmmm dS, yyyy, h:MM:ss TT") // Return "Friday, September 22nd, 2023, 10:25:56 AM"
 */
const formatTimestamp = (timestamp, format) => {
    const date = new Date(timestamp * 1000);
    return dateFormat(date, format);
};

/**
 * Format bytes (5232000 -> "4.99 MB")
 *
 * @param {format} bytes `number` Bytes of a file or something
 * @return {string} Bytes formatted `string`
 * @example OU.formatBytes(5232000) // Return "4.99 MB"
 */
const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
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
 * @param {number} min `number` Maximum number
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
 * Checks if text contain digits
 *
 * @param {string} text `string` Text you want to check
 * @return {boolean} true/false `boolean` Returns true or false depending on whether the text contains digits or not
 * @example
 * OU.containDigits("Area51") // Return true
 * OU.containDigits("ovni") // Return false
 */
const containDigits = (text) => {
    return /[0-9]/.test(text);
};

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
const containNormalcaseLetters = (text) => {
    return /[a-z]/.test(text);
};

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
const containSpecialChars = (text) => {
    return /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(text);
};

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
const containUppercaseLetters = (text) => {
    return /[A-Z]/.test(text);
};

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
const isEmailValid = (email) => {
    return /^([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)([\.])([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)$/.test(email);
};

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
const isUsernameValid = (username, minLength = 3, maxLength = 20, charactersAllowed = []) => {
    let charactersRegexp = '';
    charactersAllowed.forEach((char) => { charactersRegexp += char; });
    const validRegexp = new RegExp(`^${charactersRegexp ? '[' + charactersRegexp + ']' : '[a-z]'}{${minLength},${maxLength}}$`);
    return validRegexp.test(username);
};

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
const isPasswordValid = (password, minLength = 3, maxLength = 30, charactersRequired = []) => {
    let charactersRegexp = '';
    charactersRequired.forEach((chars) => {
        if (chars == 'alphabet')
            charactersRegexp += '(?=.*[a-z])(?=.*[A-Z])';
        if (chars == 'digits')
            charactersRegexp += '(?=.*\d)';
        if (chars == 'symbols')
            charactersRegexp += '(?=.*[¿!?Ç#$^+=!*()@%&_.·-])';
    });
    const validRegexp = new RegExp(`^${charactersRegexp ? charactersRegexp : '(?=.*[a-z])'}.{${minLength},${maxLength}}$`);
    return validRegexp.test(password);
};

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
const isTimestampExpired = (timestamp, milliseconds = false) => {
    return milliseconds ? (Date.now() > timestamp) : (Math.floor(Date.now() / 1000) > timestamp);
};

export { calculateReadingTime, containDigits, containNormalcaseLetters, containSpecialChars, containUppercaseLetters, convertBase64Data, convertBase64ToFile, convertDateToTimestamp, convertFileToBase64, convertHexToRGB, convertRGBToHex, convertTextToSlug, convertTimestampToDate, formatActualDate, formatBytes, formatTimestamp, generateCode, generateId, generateNumberBetween, getConfig, getPasswordStrength, getRelativeTime, getTimestamp, isEmailValid, isPasswordValid, isTimestampExpired, isUsernameValid, removeHTML, setConfig, sleep };
