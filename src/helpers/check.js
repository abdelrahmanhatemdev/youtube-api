export function isNew(date) {
    console.log(date);
    if (date.includes("Second")) {
        return true
    }else if (date.includes("Minute")){
        return true
    }else if (date.includes("Hour")){
        return true
    }
    return false
}

export function isShort(duration) {
    if (duration) {
        const durationArray = duration.split(":");
        console.log(durationArray);
    }
    return true
}