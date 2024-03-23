

export function dateFormat(time){
    const old = new Date(time);
    let dateFormat = "";

    const oldDate = 
    [
        old.getFullYear(),
        (old.getMonth()+1), 
        old.getDate(), 
        old.getHours(), 
        old.getMinutes(), 
        old.getSeconds()
    ]

    const now = new Date();
    const nowDate = 
    [
        now.getFullYear(),
        (now.getMonth()+1), 
        now.getDate(), 
        now.getHours(), 
        now.getMinutes(), 
        now.getSeconds()
    ];

    let difference = nowDate.map((value, index) => value - oldDate[index]);

    console.log(nowDate, oldDate);
    console.log(difference);

    let differenceYears = difference[0];
    let differenceMonths = difference[1];
    let differenceDays = difference[2];
    let differenceHours = difference[3];
    let differenceMintues = difference[4];
    let differenceSeconds = difference[5];
    


    if (differenceYears > 0) {
        let months = (differenceYears* 12) +  differenceMonths;
        const years = Math.floor(months/12)
        if (years > 0 ) {
            dateFormat += years + (years> 1 ? " years" : " year");
        }else{
            dateFormat += Math.abs(differenceMonths) + (Math.abs(differenceMonths)> 1 ? " Months" : " Month");
        }
    }else if(differenceMonths > 0){
        let days = (differenceMonths* 30) +  differenceDays;
        const months = Math.floor(days/30)
        if (months > 0 ) {
            dateFormat += months + (months> 1 ? " Months" : " Month");
        }else{
            dateFormat += Math.abs(differenceDays) + (Math.abs(differenceDays)> 1 ? " Days" : " Day");
        }
    }else if(differenceDays > 0){
        let hours = (differenceDays* 24) +  differenceHours;
        const days = Math.floor(hours/24)
        if (days > 0 ) {
            dateFormat += days + (days> 1 ? " Days" : " Day");
        }else{
            dateFormat += Math.abs(differenceHours) + (Math.abs(differenceHours)> 1 ? " Hours" : " Hour");
        }
    }else if(differenceHours > 0){
        let minutes = (differenceHours* 60) +  differenceMintues;
        const hours = Math.floor(minutes/60)
        if (hours > 0 ) {
            dateFormat += hours + (hours> 1 ? " Hours" : " Hour");
        }else{
            dateFormat += Math.abs(differenceMintues) + (Math.abs(differenceMintues)> 1 ? " Minutes" : " Minute");
        }
    }else if(differenceMintues > 0){
        let seconds = (differenceMintues* 60) +  differenceSeconds;
        const minutes = Math.floor(seconds/60)
        if (minutes > 0 ) {
            dateFormat += minutes + (minutes> 1 ? " Minutes" : " Minute");
        }else{
            dateFormat += Math.abs(differenceSeconds) + (Math.abs(differenceSeconds)> 1 ? " Seconds" : " Second");
        }
    }else{
        dateFormat += differenceSeconds + (differenceSeconds> 1 ? " Seconds" : " Second");
    }

    dateFormat += " ago"

    return dateFormat
}

export function durationFormat(resDuration){
    if(resDuration!== ("P0D") ){
        let [hours, minutes, seconds] = ["","",""];
        let duration = resDuration;
        duration = duration.replace("PT", "");

        duration = duration.split("H").join(",").split("M").join(",").split("S").join("").split(",");

        switch (duration.length) {
            case 2:
                duration.unshift(0)
                break;

            case 1:
                duration.unshift(0, 0)
                break;
        
            default:
            break;
        }
       
        hours = duration[0] > 0? duration[0]  + ":" : "";

        minutes = duration[1] > 0? duration[1]  : "0";

        seconds = duration[2];
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return hours  + minutes + ":" + seconds
    }else{
        return <span className="live">Live</span>
    }
}

export function viewsFormat(views){
    let viewFormat=0.00;
    let unit=""
    let billion = 1000000000
    if (views > billion) {
        viewFormat = views / billion
        unit = "B";
    }else if (views > billion/1000){
        viewFormat = views / (billion/1000) 
        unit = "M"
    }else if (views > billion/1000000){
        viewFormat = views / (billion/1000000) 
        unit = "K"
    }else{
        viewFormat = views
    }

    return parseFloat(viewFormat.toFixed(1)) + unit + " views"
}