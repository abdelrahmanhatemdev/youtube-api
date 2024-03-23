

export function timeAgo(time){
    const old = new Date(time);
    let difference = "";
    const [oldYear, oldMonth, oldDay, oldHour, oldMinute, oldSecond] = 
    [
        old.getFullYear(),
        (old.getMonth()+1), 
        old.getDate(), 
        old.getHours(), 
        old.getMinutes(), 
        old.getSeconds()
    ]

    

    const now = new Date();
    const [nowYear, nowMonth, nowDay, nowHour, nowMinute, nowSecond] = 
    [
        now.getFullYear(),
        (now.getMonth()+1), 
        now.getDate(), 
        now.getHours(), 
        now.getMinutes(), 
        now.getSeconds()
    ];

    // console.log(nowMonth-oldMonth);
    // console.log(old);

    const yearDifference = nowYear - oldYear;

    if (yearDifference > 0) {
        difference += yearDifference + (yearDifference > 1 ? " years" : " year");
    }else{
        let monthDiffernce = nowMonth-oldMonth;
        // console.log(nowMonth,oldMonth);
        // console.log(monthDiffernce);
        monthDiffernce = monthDiffernce > 0 ? monthDiffernce : 12+ monthDiffernce
        difference += monthDiffernce + (monthDiffernce > 1 ? " months" : " month")
    }



    



    difference += " ago"

    return difference;
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