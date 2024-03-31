import React from 'react';
import noDataIcon from "../../assets/icons/noData.png";

export default function NoData({title, details}) {
    return (
        <div className='no-data'>
            <div className='icon'>
                <img src={noDataIcon} alt="No data"/>
            </div>
            <div className='details'>
                <h2 className='title'>{title}</h2>
                <p>{details}</p>
            </div>
        </div>

    )
}
