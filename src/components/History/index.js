import { useLoaderData, useNavigation } from "react-router-dom";
import { getHistory, isRequestLimit } from "../../helpers/data";
import HistoryList from "./HistoryList";
import { Categories } from "..";
import "./HistoryList.css";

export async function loader({params, request}) {
    const videos = await getHistory();

    console.log("videos",videos);

    return {videos}
}

export default function History() {
    let {videos} = useLoaderData();
    const navigation = useNavigation();

    return (
        <>
            <Categories/>
            <section className="history">
                <div className={"results" + (navigation.state === "loading" ? "loading": "")}>
                    <HistoryList videos={videos}/>
                </div>
                <div className="options">
                    <div className="option">
                        <span className="icon">Icon </span>
                        <span className="title">Clear All history</span>
                    </div>
                     
                </div>

            </section>
           
        </>
    )
}
