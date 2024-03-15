import { useState } from "react";
import "./assets/styles/App.css";
import { SearchBar, VideoDetails, VideoList } from "./components";
import youtube from "./api/youtube";

let API_KEY= process.env.REACT_APP_API_KEY;

function App() {
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null)
    

    async function getSearch(search){
        const serachResponse = await youtube.get("search", {
            params:{
                part: "snippet", 
                maxResults: 50,
                key: API_KEY,
                q:search
            }
        })
        setVideos(setVideos(serachResponse.data.items))
        setVideo(serachResponse.data.items[0])
    }

    return (
        <main className="App">
            <nav className="search">
                <SearchBar getSearch= {getSearch}/>
            </nav>
            <section className="content">
                <div className="video-details">
                    <VideoDetails  video={video}/>
                </div>
                <div className="video-list">
                    <VideoList videos={videos}/>
                </div>
            </section>
        </main>
    )
}

export default App;