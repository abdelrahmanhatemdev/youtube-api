import { useState } from 'react'
import { useLoaderData, useNavigation } from "react-router-dom";
import { getHistory } from "../../data/historyData";
import HistoryList from "./HistoryList";
import HistoryOptions from "./HistoryOptions";
import "./HistoryList.css";
import useTitle from "../../hooks/useTitle";
import NoData from "../partials/NoData";


export async function loader({params, request}) {
    const dataVideos = await getHistory();
    return {dataVideos}
}

export default function History() {
    let {dataVideos} = useLoaderData();   
    const[videos, setVideos] = useState(dataVideos);
    const navigation = useNavigation();

    useTitle("History")
    

    function deleteHistoryVideo(id) {
        let historyArray = videos.filter(data => data.video.id !== id);
        setVideos(historyArray)
    }

    return (
        <>
            <section className="history">
                <h1 className="page-title">Watch History</h1>
                <div className='content'>
                    {!videos && 
                    <NoData title="No History List Found!" details={<><strong className='active'>Watch Videos</strong> to see history watch List!</>}/>}
                    <div className="results">
                        <HistoryList videos={videos} deleteHistoryVideo={deleteHistoryVideo} className={navigation.state === "loading" ? "loading": ""}/>
                    </div>
                    <HistoryOptions setVideos={setVideos}/>
                </div>
            </section>
        </>
    )
}
