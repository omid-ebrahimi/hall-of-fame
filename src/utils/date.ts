/**
 * @param utcDateString format "YYYY-MM-DD HH:MM:SS".
 */
export function getLocalDate(utcDateString): Date {
    const dateParam = utcDateString.split(/[\s-:T+]/);
    dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString();
    return new Date(Date.UTC(dateParam[0], dateParam[1], dateParam[2], dateParam[3], dateParam[4], dateParam[5]));
}

export function getDateStamp(utcDate = '1971-01-01 00:00:00'): number {
    return getLocalDate(utcDate).setHours(0, 0, 0, 0);
}

export function isToday(dateStamp: number): boolean {
    return new Date().setHours(0, 0, 0, 0) === dateStamp;
}

export function isTomorrow(dateStamp: number): boolean {
    return new Date().setHours(0, 0, 0, 0) + 86400000 === dateStamp;
}

export function mergeDates(date: Date, time: Date): Date {
    return new Date(new Date(date.getTime()).setHours(time.getHours(), time.getMinutes()));
}

export function addHours(date: Date, hours: number): Date {
    return new Date(new Date(date.getTime()).setHours(date.getHours() + hours));
}

export function addMinutes(date: Date, minutes: number): Date {
    return new Date(new Date(date.getTime()).setMinutes(date.getMinutes() + minutes));
}
