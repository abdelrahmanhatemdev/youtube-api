import { useLoaderData, Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { getData } from "../helpers/data";
import { timeAgo } from "../helpers/date";

export async function loader({params}) {
    const category = params.category;
    const data = await getData(category);
    return {data, category}
}

export default function Category() {
    let {data, category} = useLoaderData();
    let videos= []

    useTitle(category)

    if (data?.length === 50 ) {
        // data = data.sort(() => (Math.random() > 0.5) ? 1 : -1);
        videos = data.map((video, i) => {
            return (
                <Link to={"/v/" + video?.id?.videoId} className="item" key ={i}>
                    <div className="img-holder">
                        <img src={video.snippet.thumbnails?.high.url} alt={video.snippet.title} key ={i}/>
                    </div>
                    <div className="details">
                        <span className="title">{video.snippet.title}</span>
                        <div className="tips">
                            <span className="channel">{video.snippet.channelTitle}</span>
                            <span className="date">{timeAgo(video.snippet.publishedAt)}</span>
                        </div>
                    </div>
                </Link>
            )
            
        })
    }

    return (
        <section className="category-content"> 
            { videos }  
        </section>
    )
}
