import React from 'react';
import { useLoaderData, useLocation} from "react-router-dom";
import { getVideo } from "../helpers/data";

export async function loader({params}) {
    const id  = params.videoId;
    return {id}
}

export default function Video() {
    const {id} = useLoaderData();
    let video;

    const location = useLocation();
    const state = location.state;

    if (state) {
        video = state.video;
    }else{
        video = getVideo(id)
    }


    const videoSrc = "https://www.youtube.com/embed/" + id;

    // console.log(video.snippet);
    

    return (
        <>
            <iframe width="100%" height="500px" src={videoSrc+ "?autoplay=1&enable_js=1"} title="Video Player" autoplay={1}
            allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            ></iframe>
            <h1>{video?.title}</h1>
            <a href={"https://www.youtube.com/channel/"+video?.channelTitle}>{video?.channelTitle}</a>
            <div className="description">
                {video?.description}
            </div>
        </>
    )
}
