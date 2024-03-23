import "./videoDetails.css";
function VideoDetails({video, id}) {
    const videoSrc = "https://www.youtube.com/embed/" + id;
    return (
        <section className="video-page">
            <div className="video-details">
                <div className="player">
                    <iframe width="100%" height="500px" src={videoSrc+ "?autoplay=1&enable_js=1"} title="Video Player" autoplay={1}
                    // allow="accelerometer; autoplay *; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                    ></iframe>
                </div>
                <h1 className="title">{video?.title}</h1>
                <div className="info">
                    <div className="channel">
                        <a href={"https://www.youtube.com/channel/"+video?.channelTitle} target="_blink" rel="noopenner noreferrer">{video?.channelTitle}</a>
                    </div>
                    <div className="actions">
                        <div className="likes">
                            <span className="like">{video?.likeCount}</span>
                            <span className="dislike"></span>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div>
                        <span>{video?.viewCount} views</span>
                        <span>{video?.publishedAt}</span>
                    </div>
                    <div>
                        <span> {video?.description}</span>
                    </div>
                </div>
            </div>
            <div className="related">

            </div>
        </section>
    )
}
export default VideoDetails;