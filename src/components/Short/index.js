import {useMemo} from 'react';
import {useLoaderData, useNavigate } from "react-router-dom";
import { getShorts} from "../../data/homeData";
import { getVideo } from "../../data/videoData";
import { isRequestLimit } from "../../data/apiData";
import ShortDetails from "./ShortDetails";

export async function loader({params}) {
    const shortId = params.short;
    const video = await getVideo(shortId);
    const videos = await getShorts();
    isRequestLimit(videos);
    return {video, videos}
}

export default function Short(props) {
    let content, shortIndex;
    let navigate = useNavigate();
    let {video, videos} = useLoaderData();

    videos = useMemo(() => videos, [videos]);

    const newShorts = videos.slice();
    shortIndex = newShorts.map(v => v.id).indexOf(video.id);   
    
    let nextIndex = (shortIndex +1) !== videos.length ? (shortIndex +1) : 0;
    const nextVideo = videos[nextIndex];

    if (nextVideo) {
        setInterval(() => {
            navigate("/shorts/" + nextVideo.id)
        }, 60000);
    }
    
    if (video) {
        content =<ShortDetails video={video} videos={videos}/>
    }

    return (
        <section className='shorts-page'>
            {content}
        </section>
    )
}
