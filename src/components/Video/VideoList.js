import {VideoItem} from "..";
function VideoList({videos, setVideo}) {

  console.log("videos => ", videos);

  if (!videos) {
    return <>Loading...</>
  }

  let videoList = videos.map(video => <VideoItem video={video} key={video.id.videoId} setVideo={setVideo}/>)
    

    return (
        <>
        
        {videoList}
           
        </>
    )
}
export default VideoList;