import { getChannel } from "../../helpers/data";
import { numberFormat } from "../../helpers/formats";
import likeIcon from "../../assets/icons/like.png";
import RelatedVideos from "./RelatedVideos";

import "./videoDetails.css";
function VideoDetails({video, id, videos}) {
    const videoSrc = "https://www.youtube.com/embed/" + id;

    let channel = getChannel(video.channelID);

    return (
        <section className="video-page">
            <div className="video-details">
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
                            <span className="subscribers">{channel.subscriberCount} subscribers</span>
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
                    <div>
                        <span>{video.viewCount} views</span>
                        <span>{video.publishedAt}</span>
                    </div>
                    <div>
                        <span> {video.description}</span>
                    </div>
                </div>
            </div>
            <div className="related">
                <RelatedVideos videos={videos}/>
            </div>
        </section>
    )
}
export default VideoDetails;