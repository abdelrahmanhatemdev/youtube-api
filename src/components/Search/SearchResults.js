import React from 'react';
import { getChannel } from "../../helpers/data";
import { Link } from "react-router-dom";
import "./SearchResults.css";
import { dateFormat, durationFormat, numberFormat } from "../../helpers/formats";
import { isNew} from "../../helpers/check";
export default function SearchResults({search, videos}) {

    const content = videos.map((video, index) => {
        if (video) {
            let channel = getChannel(video.channelID);
          return <Link to={"/v/" + video.id} className="item" key ={index} state={{video: video, videos:videos}}>
                    <div className="img-holder">
                        <img src={video.thumbnails} alt={video.title} />
                        <span className="duration">{durationFormat(video.duration)}</span>
                    </div>
                    <div className="details">
                        <span className="title">{video.title}</span>
                        <span className="date">{numberFormat(video.viewCount)} views • {dateFormat(video.publishedAt)}</span>
                        <div className="tips">
                        {channel && 
                            <div className="channel">
                                <a href={"https://www.youtube.com/channel/"+video.channelTitle} target="_blink" rel="noopenner noreferrer">
                                    <img src={channel.thumbnails} alt={video.title}/>
                                    <div className="data">
                                        <span className="title">{channel.title}</span>
                                        <span className="subscribers">{numberFormat(channel.subscriberCount)} subscribers</span>
                                    </div>
                                </a>
                            </div>
                            }
                            <span className='description'>{video.description}</span>
                            {
                                isNew(dateFormat(video.publishedAt)) && <span className='new'>New</span>
                            }
                            
                        </div>
                    </div>
                </Link>
        }

    })
    

    return (
        <section className='results'>
       {content}
        </section>
    )
}
