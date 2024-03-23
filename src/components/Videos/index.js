import React from 'react';
import { useLoaderData, useLocation} from "react-router-dom";
import { VideoDetails } from "..";
import { getVideo } from "../../helpers/data";

export async function loader({params}) {
    const id  = params.videoId;
    return {id}
}

export default function Video() {
    const {id} = useLoaderData();
    let video, videos;

    const location = useLocation();
    const state = location.state;

    if (state) {
        video = state?.video;
        videos = state?.videos;
    }else{
        video = getVideo(id)
    }
    

    return <VideoDetails video={video} id={id} videos={videos}/>
}
