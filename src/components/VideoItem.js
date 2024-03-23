
import {Link} from "react-router-dom";
import { timeAgo } from "../helpers/date";


export default function VideoItem({video, index}) {

    let duration; 
    
    if(video?.duration !== ("P0D") ){
        let [hours, minutes, seconds] = ["","",""];
        duration = video?.duration;
        duration = duration.replace("PT", "");

        duration = duration.split("H").join(",").split("M").join(",").split("S").join("").split(",");

        switch (duration.length) {
            case 2:
                duration.unshift(0)
                break;

            case 1:
                duration.unshift(0, 0)
                break;
        
            default:
            break;
        }
       
        hours = duration[0];
        hours = hours < 10 ? "0" + hours : hours;

        minutes = duration[1];
        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = duration[2];
        seconds = seconds < 10 ? "0" + seconds : seconds;

        duration = hours  + ":" + minutes +":"+ seconds
    }else{
        duration = <span className="live">Live</span>
    }

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
                    <span className="duration">{duration}</span>
                </div>
            </div>
        </Link>
    )
}
