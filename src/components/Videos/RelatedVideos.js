import {Link} from "react-router-dom";
import { dateFormat, durationFormat, viewsFormat } from "../../helpers/formats";

export default function RelatedVideos({videos}) {

    let content;


    if (videos) {
        
        content= videos.map((video, index) => {

            return (
                <Link to={"/v/" + video?.id} className="item" key ={index} state={{video: video, videos:videos}}>
                <div className="img-holder">
                    <img src={video?.thumbnails} alt={video?.title} />
                    <span className="duration">{durationFormat(video?.duration)}</span>
                </div>
                <div className="details">
                    <span className="title">{video?.title}</span>
                    <div className="tips">
                        <span className="channel">{video?.channelTitle}</span>
                        <span className="date">
                            {viewsFormat(video?.viewCount)} • {dateFormat(video?.publishedAt)}</span>
                        
                    </div>
                </div>
            </Link>
            )
    
        })
    }

    return (
        <>
        {content}
            
        </>
    )
}
