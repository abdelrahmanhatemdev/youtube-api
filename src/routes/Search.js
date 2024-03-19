import { useLoaderData } from "react-router-dom";
import { getData } from "../helpers/data";

export async function loader({params}) {
    const search = params.search;
    const data = await getData(search);

    return {search, data}
    
}

export default function Category() {
    let {search, data} = useLoaderData();
    let videos= []

    if (data?.length === 50 ) {
        // data = data.sort(() => (Math.random() > 0.5) ? 1 : -1);
        videos = data.map((video, i) => {
            return <div>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} key ={i}/>
             {video.snippet.title}
        </div>
        })

    }

    return (
        <>
        {search}
        { videos }  
            
        </>
    )
}
