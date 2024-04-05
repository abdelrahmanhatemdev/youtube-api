import React from 'react';
import { useLoaderData, useLocation} from "react-router-dom";
import { VideoDetails } from "..";
import { getVideo } from "../../data/videoData";
import { addHistory } from "../../data/historyData";


export async function loader({params}) {
    const id  = params.videoId;
    const videoData = await getVideo(id);
    addHistory(id)
    return {id, videoData}
}

export default function Video() {
    const {id, videoData} = useLoaderData();
    let video, videos;

    const location = useLocation();
    const state = location.state;
    

    if (state) {
        video = state.video;
        videos = state.videos;
    }else{
        video = videoData
    }
    
    
    return <VideoDetails video={video} id={id} videos={videos}/>
}
