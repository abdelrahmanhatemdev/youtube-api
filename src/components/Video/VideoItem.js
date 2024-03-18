

export default function VideoItem({video, setVideo}) {
    

    return (
        <div onClick={()=> setVideo(video)}>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
            {video.snippet.title}
        </div>
    )
}
