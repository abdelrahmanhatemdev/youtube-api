import VideoItem from "../Category/VideoItem";

export default function RelatedVideos({videos}) {

    let content;


    if (videos) {
        
        content= videos.map((video, index) => {

            return  video && <VideoItem video={video} index={index}/>;
    
        })
    }

    return (
        <>
        {content}
            
        </>
    )
}
