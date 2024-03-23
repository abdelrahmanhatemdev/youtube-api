import { useLoaderData, useNavigation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { getData } from "../../helpers/data";
import {Categories, VideoItem, ErrorPage} from "..";

export async function loader({params}) {
    const category = params.category;
    category && category.replace("/", "_");
    const data = await getData(category);
    return {data, category}
}

export default function Category() {
    let {data, category} = useLoaderData();
    let navigation = useNavigation();
    let content;

    useTitle(category)

    if (data?.length > 0 ) {
        // data = data.sort(() => (Math.random() > 0.5) ? 1 : -1);
        content = <>
        
        <section className={"category-content " +( navigation.state === "loading" ? "loading" : "")} > 
            {
            data.map((video, i) => {
                return video && <VideoItem video={video} index={i}/>;
            })
            }
        </section>
        </>
       
    }else{
        if (data?.includes("Request Limit")) {
           
            content = <ErrorPage type="requestLimit"/>
        }
    }

    return (
        <>
            <Categories/>
            {content}
        </>
        );
}
