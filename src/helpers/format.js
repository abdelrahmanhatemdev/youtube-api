

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

        if (duration) {
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
    
            minutes = duration[1] > 0? duration[1]  : "00";

            if (duration[0]  > 0 ) {
                minutes = minutes > 9 ? minutes : "0"+ minutes; 
            }
            
    
            seconds = duration[2];
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            return hours  + minutes + ":" + seconds
        }
      
    }else{
        return <span className="live">Live</span>
    }
}

export function numberFormat(number){
    let viewFormat=0.00;
    let unit=""
    let billion = 1000000000
    if (number > billion) {
        viewFormat = number / billion
        unit = "B";
    }else if (number > billion/1000){
        viewFormat = number / (billion/1000) 
        unit = "M"
    }else if (number > billion/1000000){
        viewFormat = number / (billion/1000000) 
        unit = "K"
    }else{
        viewFormat = number
    }
    
    return parseFloat(Number(viewFormat)?.toFixed(1)) + unit 
}

export function historyDateFormat(date) {
    const now = new Date();
    const nowYear = now.getFullYear()
    const nowMonth = now.getMonth()
    const nowDay = now.getDate()
    let dateArray, year, month, monthName, day, weekday, time, timePeriod;
    dateArray = date ? date.split("_") : "";
    if (dateArray) {
        year = +dateArray[0];
        month = +dateArray[1];
        monthName = dateArray[2];
        day = +dateArray[3];
        weekday = dateArray[4];
        time = dateArray[5].split(":");
        let hour = time[0];
        timePeriod = " am";
        if (hour > 12) {
            hour = hour - 12;
            timePeriod = " pm";
        }
        time = hour + ":" + time[1] + ":"+ time[2] + timePeriod;

        if (year === nowYear && month === nowMonth) {
            year = "";

            let dayDifference = nowDay - day;
            let totalNowMonthDays = new Date(nowYear, nowMonth +1, 0).getDate();
            dayDifference = dayDifference < 0 ? (totalNowMonthDays-day) : dayDifference;

            if (dayDifference < 7) {
                month = "";
                switch (dayDifference) {
                    case 0:
                        day = "Today"
                        break;
                    case 1:
                        day = "Yesterday"
                        break;
                
                    default:
                        day = weekday
                        break;
                }
                
            }else{
                month = monthName;
            }
        }else{
            month = monthName
        }

        
    }

    return date && <span className='history-date'><strong>{year} {month} {day}</strong> {time}</span>
}