import VideoItem from "../Category/VideoItem";
import "./relatedVideos.css";

export default function RelatedVideos({videos}) {
    let content;

    if (videos) {
        content= videos.map((video, index) => {
            return  video && <VideoItem video={video} index={index}/>;
        })
    }

    return (
        <div className={videos && "related"}>
            {content}
        </div>
    )

}
