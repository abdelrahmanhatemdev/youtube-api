import { useLoaderData, useNavigation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getIntialData, isRequestLimit } from "../../helpers/data";
import {Categories, VideoItem} from "../";
import "./home.css";

export async function loader({params}) {
    const videos = await getIntialData();
    isRequestLimit(videos)
     return {videos}
    
}

export default function Home(props) {
    let {videos} = useLoaderData();
    let navigation = useNavigation();
    let content;
    useTitle("Home")

    if (videos.length > 0) {
        videos = videos.sort(() => (Math.random() > 0.5) ? 1 : -1);
       
        content =   <>
                        <section className={"category-content " +( navigation.state === "loading" ? "loading" : "")} > 
                            {
                            videos.map((video, i) => {
                                return video && <VideoItem video={video} index={i} videos={videos} key={i}/>;
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
