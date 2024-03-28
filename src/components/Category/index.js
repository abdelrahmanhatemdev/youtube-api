import { useLoaderData, useNavigation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getData, isRequestLimit} from "../../helpers/data";
import {Categories, VideoItem} from "..";
import "./category.css";

export async function loader({params}) {
    const category = params.category;
    category && category.replace("/", "_");
    const videos = await getData(category);
    isRequestLimit(videos)

    return {videos, category}
}

export default function Category() {
    let {videos, category} = useLoaderData();
    let navigation = useNavigation();
    let content;

   

    useTitle(category)

    if (videos.length > 0) {
        // data = data.sort(() => (Math.random() > 0.5) ? 1 : -1);
        content = <>
        
        <section className={"category-content " +( navigation.state === "loading" ? "loading" : "")} > 
            {
            videos.map((video, i) => {
                return video && <VideoItem video={video} index={i} videos={videos}/>;
            })
            }
        </section>
        </>
       
    }
    return (
        <section className="category-page">
            <Categories/>
            {content}
        </section>
        );
}
