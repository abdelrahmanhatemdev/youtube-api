import React from 'react'

export default function RequestLimit() {

    var myDate = new Date()
    var pstDate = myDate.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
    })
    
    console.log(pstDate)
    

    return (
        <>
            Request Limit 
        </>
    )
}
