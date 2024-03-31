import { useState } from 'react'
import { useLoaderData, useNavigation } from "react-router-dom";
import { getHistory } from "../../helpers/data";
import HistoryList from "./HistoryList";
import HistoryOptions from "./HistoryOptions";
import "./HistoryList.css";

export async function loader({params, request}) {
    const dataVideos = await getHistory();

    return {dataVideos}
}

export default function History() {
    let {dataVideos} = useLoaderData();   
    const[videos, setVideos] = useState(dataVideos);
    const navigation = useNavigation();
    

    function deleteHistoryVideo(id) {
        let historyArray = videos.filter(data => data.video.id !== id);
        setVideos(historyArray)
    }

    return (
        <>
            <section className="history">
                <div className="results">
                    <HistoryList videos={videos} deleteHistoryVideo={deleteHistoryVideo} className={navigation.state === "loading" ? "loading": ""}/>
                </div>
                <HistoryOptions setVideos={setVideos}/>
            </section>
        </>
    )
}
