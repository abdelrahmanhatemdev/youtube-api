import "../assets/styles/videoDetails.css";
function VideoDetails({video, id}) {
    const videoSrc = "https://www.youtube.com/embed/" + id;
    return (
        <section className="video-details">
            <iframe width="100%" height="500px" src={videoSrc+ "?autoplay=1&enable_js=1"} title="Video Player" autoplay={1}
            allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
            ></iframe>
            <h1>{video?.title}</h1>
            <a href={"https://www.youtube.com/channel/"+video?.channelTitle}>{video?.channelTitle}</a>
            <div className="description">
                {video?.description}
            </div>
        </section>
    )
}
export default VideoDetails;