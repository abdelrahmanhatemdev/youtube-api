import React from 'react';
import { useLoaderData, useLocation} from "react-router-dom";
import { VideoDetails } from "../components";
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
    

    return <VideoDetails video={video} id={id}/>
}
