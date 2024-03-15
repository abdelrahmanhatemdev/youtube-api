function VideoDetails({video}) {
    if(!video){ return <>Loading...</>}

    const videoSrc = "https://www.youtube.com/embed/" + video.id.videoId

    console.log(video.snippet);
    

    return (
        <>
            <iframe width="100%" height="500px" src={videoSrc} title="Video Player"></iframe>
            <h1>{video.snippet.title}</h1>
            <a href={"https://www.youtube.com/channel/"+video.snippet.channelTitle}>{video.snippet.channelTitle}</a>
            <div className="description">
                {video.snippet.description}
            </div>
        </>
    )
}
export default VideoDetails;