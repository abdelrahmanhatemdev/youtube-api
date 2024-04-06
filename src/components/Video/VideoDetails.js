import { useEffect, useRef } from 'react';
// import { iframeApi } from "../../api/youtube";
import { getChannel } from "../../data/videoData";
import { numberFormat, dateFormat } from "../../helpers/format";
import likeIcon from "../../assets/icons/like.png";
import RelatedVideos from "./RelatedVideos";
import useTitle from "../../hooks/useTitle";

import "./videoDetails.css";
function VideoDetails({video, id, videos}) {
    const detailsRef = useRef();
    const videoSrc = "https://www.youtube.com/embed/" + id;
    const title = video.title ? video.title : ""


    useTitle(title)

    

    useEffect(() => {
        
        detailsRef.current && detailsRef.current.scrollIntoView()
    }, [])

    // console.log("title", video.title);


  

    // console.log("id=> ", id);
    

    const channel = getChannel(video.channelID);

   

    return video &&  <section className="video-page">
        <div className="video-details" ref={detailsRef}>
            <div className="player">
                <iframe width="100%" height="500px" src={videoSrc+ "?autoplay=1&enable_js=1"} title="Video Player" autoplay={1}
                // allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                ></iframe>
            </div>
            <h1 className="video-title">{video.title}</h1>
            <div className="info">
                {channel && 
                <div className="channel">
                <a href={"https://www.youtube.com/channel/"+video.channelTitle} target="_blink" rel="noopenner noreferrer">
                    <img src={channel.thumbnails} alt={video.title}/>
                    <div className="data">
                        <span className="title">{channel.title}</span>
                        <span className="subscribers">{numberFormat(channel.subscriberCount)} subscribers</span>
                    </div>
                </a>
            </div>}
                
                <div className="actions">
                    <div className="likes">
                        <span className="like">
                            <span className="icon">
                                <img src={likeIcon} alt="Like Icon"/>
                            </span>
                            <span className="count">{numberFormat(video.likeCount)}</span>
                        </span>
                        <span className="dislike">
                        <span className="icon">
                                <img src={likeIcon} alt="Like Icon"/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="stats">
                    <span>{video.viewCount} views</span>
                    <span>{dateFormat(video.publishedAt)}</span>
                </div>
                <div>
                    <span> {video.description}</span>
                </div>
            </div>
        </div>
        
        {videos && <RelatedVideos videos={videos.filter(v => v ? v.id !== id : "")}/>}
        
    </section>
}
       
    

export default VideoDetails;