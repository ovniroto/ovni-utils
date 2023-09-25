import { i18n } from 'dateformat'
import { dayNames, monthNames, timeNames } from '@language/dateformat'

const config = {
    language: 'en-US'
}

const setConfig = (cfg: Config) => {
    config.language = cfg.language
    changeDateFormatLang()
}

const getConfig = () => {
    return config
}

const changeDateFormatLang = () => {
    i18n.dayNames = dayNames(config.language)
    i18n.monthNames = monthNames(config.language)
    i18n.timeNames = timeNames()
}

export {
    setConfig,
    getConfig
}