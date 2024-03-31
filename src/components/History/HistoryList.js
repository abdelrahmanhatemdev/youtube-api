
import { memo } from 'react'
import { Link } from "react-router-dom";
import { dateFormat, durationFormat, numberFormat, historyDateFormat } from "../../helpers/format";
import { deleteHistory } from "../../data/historyData";
import { isNew, isShort} from "../../helpers/check";
import shortIcon from "../../assets/icons/short.png";
import newIcon from "../../assets/icons/fire.png";

const HistoryList = memo(function HistoryList({search, videos, deleteHistoryVideo}) {

    let content;
    

    if (videos) {
        content = videos.map((data, index) => {
            let link;
            if (data) {
               
                const video = data.video
                const date = data.date;
           

                if (video) {
                    link = <Link to={"/v/" + video.id} className="item" key ={index} state={{video: video, videos:videos}}>
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
                            { date &&  historyDateFormat(date)}
                            <span className='close' title="Remove From History List" onClick={e =>{
                                e.preventDefault()
                                deleteHistory(video.id)
                                deleteHistoryVideo(video.id)
                            } }>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                }
                
            }
            return link;
    
        })
    }

    return <>
               
                <div className='list'>
                    {content}
                </div>;
            </>
    
   
})

export default HistoryList;
