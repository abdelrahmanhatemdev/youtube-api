import React from 'react';
import {useLoaderData, useLocation } from "react-router-dom";
import { getIntialData} from "../../data/homeData";
import { isRequestLimit } from "../../data/apiData";
import { isShort } from "../../helpers/check";
import ShortDetails from "./ShortDetails";

export async function loader({params}) {
    const shortId = params.short;
    console.log(params);
    const shorts = await getIntialData();
    isRequestLimit(shorts);
    return {shortId, shorts}
}

export default function Short(props) {
    let video, videos;
    let {shortId, shorts} = useLoaderData();
    const{state} = useLocation();
    if (state) {
        video = state.video;
        videos = state.videos;
    }else{
        shorts = shorts.filter( v => isShort(v));
        video = shorts.filter(v => v.id === shortId);
        videos = shorts;
    }
    let content;

    console.log(video);

    if (video) {
        content =<ShortDetails video={video} videos={videos}/>
    }

    return (
        <section className='shorts-page'>
            {content}
        </section>
    )
}
