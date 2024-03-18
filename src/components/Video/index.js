import { useState } from "react";
import { SearchBar, VideoDetails, VideoList, } from "../";
import { search } from "../../api/youtube";

export default function Video() {

    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null);
    

    function getSearch(term){
        const serachResponse = search(term)
        setVideos(serachResponse.data.items)
        setVideo(serachResponse.data.items[0])
    }

    

    return (
        <>
              <div className="video-details">
                    <VideoDetails  video={video}/>
                </div>
                <div className="video-list">
                    <VideoList videos={videos} setVideo={setVideo}/>
                </div>
        </>
    )
}
