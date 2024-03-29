import { useState } from 'react'
import { useLoaderData, useNavigation } from "react-router-dom";
import { getHistory } from "../../helpers/data";
import HistoryList from "./HistoryList";
import { Categories } from "..";
import "./HistoryList.css";

export async function loader({params, request}) {
    const dataVideos = await getHistory();
    return {dataVideos}
}

export default function History() {
    let {dataVideos} = useLoaderData();
    const[videos, setVideos] = useState(dataVideos)
    const navigation = useNavigation();

    function deleteHistoryVideo(id) {
        let historyArray = videos.filter(data => data.video.id !== id);
        setVideos(historyArray)
    }

    return (
        <>
            <Categories/>
            <section className="history">
                <div className={"results" + (navigation.state === "loading" ? "loading": "")}>
                    <HistoryList videos={videos} deleteHistoryVideo={deleteHistoryVideo}/>
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
