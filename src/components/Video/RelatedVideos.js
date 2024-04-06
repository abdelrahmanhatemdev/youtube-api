import VideoItem from "../Category/VideoItem";
import "./relatedVideos.css";

export default function RelatedVideos({videos}) {
    let content;

    if (videos) {
        content= videos.map((video, index) => {
            return  video && <VideoItem video={video} key={index} videos={videos}/>;
        })
    }

    return (
        <div className={videos && "related"}>
            {content}
        </div>
    )

}
