import { useLoaderData } from "react-router-dom";
import { getData } from "../../helpers/data";
import SearchResults from "./SearchResults";

export async function loader({params, request}) {
    const search = params;

    console.log("search", search);
    console.log("request", request);
    const data = await getData(search);
    return {search, data}
}

export default function Search() {
    let {search, data} = useLoaderData();
    let videos= []

    // if (data?.length === 50 ) {
    //     videos = data.map((video, i) => {
    //         return <div>
    //         <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} key ={i}/>
    //          {video.snippet.title}
    //     </div>
    //     })
    // }

    return (
        <div>
            <SearchResults/>
        </div>
    )
}
