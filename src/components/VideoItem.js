
import {Link} from "react-router-dom";
import { timeAgo } from "../helpers/date";


export default function VideoItem({video, index}) {
    return (
        <Link to={"/v/" + video?.id} className="item" key ={index} state={{video: video}}>
            <div className="img-holder">
                <img src={video?.thumbnails} alt={video?.title} />
            </div>
            <div className="details">
                <span className="title">{video?.title}</span>
                <div className="tips">
                    <span className="channel">{video?.channelTitle}</span>
                    <span className="date">{timeAgo(video?.publishedAt)}</span>
                    <span className="duration">{video?.duration}</span>
                </div>
            </div>
        </Link>
    )
}
