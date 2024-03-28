export function isNew(date) {

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
    if (typeof duration === "string") {
        const durationArray = duration.split(":");
        if (durationArray.length <3) {
            if (durationArray[0] === "00" ) {
                return true
            } 
        }
      
    }
}

