

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
        console.log(monthDiffernce);
        monthDiffernce = monthDiffernce > 0 ? monthDiffernce : 12+ monthDiffernce
        difference += monthDiffernce + (monthDiffernce > 1 ? " months" : " month")
    }



    



    difference += " ago"

    return difference;
}