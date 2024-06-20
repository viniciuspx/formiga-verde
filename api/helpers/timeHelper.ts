export const stringifyTime = (time: Date) => {
    return time.getUTCHours() + ':' + time.getUTCMinutes() + ":" + time.getUTCSeconds();
}

export const compareDates = (dateA: Date, dateB: Date) => {    
    
    const onlyDateA = zeroDateTime(dateA);
    const onlyDateB = zeroDateTime(dateB);
    
    if (onlyDateA.getTime() > onlyDateB.getTime()) {
        return 1;
    } else if (onlyDateA.getTime() < onlyDateB.getTime()) {
        return 0;
    } else {
        return -1;
    }
}

const zeroDateTime = (date: Date) => {
    return new Date(date.toISOString().split("T")[0] + 'T00:00:00Z');
}