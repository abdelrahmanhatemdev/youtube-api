
import {Link} from "react-router-dom";
import { numberFormat } from "../../helpers/format";


export default function VideoItem({video, index, videos}) {

    const oldLiveImg = "/hqdefault_live.jpg";
    let videoItem;

    if (video) {
        if (video.thumbnails) {
            if (video.thumbnails.includes(oldLiveImg)) {
                videoItem = ""
            }else{
                videoItem =  <Link to={"/shorts/" + video.id} className="item" key ={index} state={{video: video, videos:videos}}>
                <div className="img-holder">
                    <img src={video.thumbnails} alt={video.title} loading="lazy"/>
                </div>
                <div className="details">
                    <span className="title">{video.title}</span>
                    <span className="views">{numberFormat(video.viewCount)} views</span>
                </div>
            </Link>
            }
        }
    }
    return videoItem
}
