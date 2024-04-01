import { useLoaderData, useNavigation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getIntialData } from "../../data/homeData";
import { isRequestLimit } from "../../data/apiData";
import {Categories, VideoItem} from "../";
import "./home.css";

export async function loader({params}) {
    const data = await getIntialData();
    isRequestLimit(data)
    return {data}
    
}

export default function Home(props) {
    let {data} = useLoaderData();
    let navigation = useNavigation();
    let content;
    useTitle("Home")

    if (data.length > 0) {
        let videos = data.sort(() => (Math.random() > 0.5) ? 1 : -1);

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
