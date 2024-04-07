
import { useState} from 'react'
import { numberFormat} from "../../helpers/format";
import likeIcon from "../../assets/icons/short-like-light.png";
import viewsIcon from "../../assets/icons/views-light.png";
import useTitle from "../../hooks/useTitle";
import "./ShortDetails.css";

export default function ShortDetails({video}) {
    const[isLoading, setIsLoading] = useState(true);

    if (video) {
        const videoSrc = "https://www.youtube.com/embed/" + video.id;

    return (
        <div className="short">
             <div className="player">
                {
                <div className={'player-skelton' + (isLoading ? " active" : "") } >
                    <div className='background'></div>
                </div>
                }
                <iframe src={videoSrc+ "?autoplay=1&enable_js=1"} title="Video Player" autoPlay={1} onLoad={() => setIsLoading(false)}
                allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                ></iframe>
            </div>
            <div className="info">
                <div className="stats">
                    <span className="icon">
                        <img src={viewsIcon} alt="Views"/>
                    </span>
                    <span>{numberFormat(video.viewCount)}</span>
                </div>
                <span className="like">
                    <span className="icon">
                        <img src={likeIcon} alt="Like"/>
                    </span>
                    <span className="count">{numberFormat(video.likeCount)}</span>
                </span>
                <span className="dislike">
                    <span className="icon">
                            <img src={likeIcon} alt="Dislike"/>
                    </span>
                    <span>Dislike</span>
                </span>
            </div>
        </div>
    )
        
    }

    
}
