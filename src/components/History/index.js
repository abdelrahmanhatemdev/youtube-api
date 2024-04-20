import { useState } from 'react'
import { useLoaderData, useNavigation, Link } from "react-router-dom";
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
        let historyArray = videos.filter(data => {
            if (data.video) {
                if (data.video.id !== id) {
                    return true
                }
            }
            return false
        });
        setVideos(historyArray)
    }

    return (
        <>
            <section className="history">
                <h1 className="page-title">Watch History</h1>
                <div className='content'>
                    {!videos && 
                    <NoData title="No History List Found!" details={<><Link to="/"><strong className='active'>Watch Videos</strong></Link> to see history watch List!</>}/>}
                    <div className="results">
                        <HistoryList videos={videos} deleteHistoryVideo={deleteHistoryVideo} className={navigation.state === "loading" ? "loading": ""}/>
                    </div>
                    <HistoryOptions/>
                </div>
            </section>
        </>
    )
}
