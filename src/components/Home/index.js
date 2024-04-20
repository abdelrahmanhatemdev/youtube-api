import { useLoaderData, useNavigation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getRandomData } from "../../data/homeData";
import { isRequestLimit } from "../../data/apiData";
import {Categories, VideoItem} from "../";
import "./home.css";

export async function loader({params}) {
    const data = await getRandomData();
    isRequestLimit(data)
    return {data}
    
}

export default function Home(props) {
    let {data} = useLoaderData();
    let navigation = useNavigation();
    let content;
    useTitle("Home")

    if (data.length > 0) {
        let videos = data;

        content =   <>
                        <section className={"category-content " +( navigation.state === "loading" ? "loading" : "")} > 
                            {
                            videos.map((video, i) => {
                                return video && <VideoItem video={video} index={i} videos={videos.slice(0,50)} key={i}/>;
                            })
                            }
                        </section>
                    </>
            
    }
    return (
        <section className="home-page">
            <Categories/>
            {content}
        </section>
        );

}
