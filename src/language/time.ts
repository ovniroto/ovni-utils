export const time = (lang: Lang, plural = false) => {
    if(lang == 'es-ES') return {
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
    }
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
    }
}