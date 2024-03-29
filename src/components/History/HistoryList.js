import React from 'react';
import { Link } from "react-router-dom";
import { dateFormat, durationFormat, numberFormat } from "../../helpers/format";
import { isNew, isShort} from "../../helpers/check";
import shortIcon from "../../assets/icons/short.png";
import newIcon from "../../assets/icons/fire.png";

export default function HistoryList({search, videos}) {

    let content;

    if (videos) {
        content = videos.map((data, index) => {
            if (data) {
                const video = data.video
                if (video) {
                    return <Link to={"/v/" + video.id} className="item" key ={index} state={{video: video, videos:videos}}>
                        <div className="img-holder">
                            <img src={video.thumbnails} alt={video.title} />
                            <span className="duration">{durationFormat(video.duration)}</span>
                        </div>
                        <div className="details">
                            <span className="title">{video.title}</span>
                            <span className="date">{numberFormat(video.viewCount)} views • {dateFormat(video.publishedAt)}</span>
                            <div className="tips">
                                <span className='description'>{video.description}</span>
                                <div className='badges'>
                                    {
                                        isNew(dateFormat(video.publishedAt)) && 
                                            <span className='badge'>
                                                <span className='icon'>
                                                    <img src={newIcon} alt='New'/>
                                                </span>
                                                New
                                            </span>
                                    }
                                     {
                                        isShort(durationFormat(video.duration)) && 
                                            <span className='badge'>
                                                <span className='icon'>
                                                    <img src={shortIcon} alt='Short'/>
                                                </span>
                                                Short
                                            </span>
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                }
                
            }
    
        })
    }

    
    

    return <div className='list'>{content}</div>;
}
