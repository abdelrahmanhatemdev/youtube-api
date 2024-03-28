
import {Link} from "react-router-dom";
import { dateFormat, durationFormat, numberFormat } from "../../helpers/formats";

export default function VideoItem({video, index, videos}) {

    const oldLiveImg = "/hqdefault_live.jpg";
    let videoItem;

    if (video) {
        if (video.thumbnails.includes(oldLiveImg)) {
            videoItem = ""
        }else{
            videoItem =  <Link to={"/v/" + video.id} className="item" key ={index} state={{video: video, videos:videos}}>
            <div className="img-holder">
                <img src={video.thumbnails} alt={video.title} />
                <span className="duration">{durationFormat(video.duration)}</span>
            </div>
            <div className="details">
                <span className="title">{video.title}</span>
                <div className="tips">
                    <span className="channel">{video.channelTitle}</span>
                    <span className="date">
                        {numberFormat(video.viewCount)} views • {dateFormat(video.publishedAt)}</span>
                    
                </div>
            </div>
        </Link>
        }
    }
    return videoItem
}
