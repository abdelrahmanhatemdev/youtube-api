import React from 'react';
import { useLoaderData, useLocation} from "react-router-dom";
import { VideoDetails } from "..";
import { addHistory } from "../../data/historyData";


export function loader({params}) {
    const id  = params.videoId;
    addHistory(id)
    return {id}
}

export default function Video() {
    const {id} = useLoaderData();
    let video, videos;

    const location = useLocation();
    const state = location.state;

    if (state) {
        video = state.video;
        videos = state.videos;
        if (video) {
           
        }
        
    }else{
        // video = getVideo(id)
        video = "";
        // console.log("video 1 => ", video);
        
    }
    
    
    return <VideoDetails video={video} id={id} videos={videos}/>
}
