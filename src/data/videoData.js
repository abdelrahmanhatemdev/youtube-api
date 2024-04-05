
import { videoInfo, channelInfo } from "../api/youtube";
export function getVideo(id) {

    let searchObject = localStorage.getItem("search");
    if (searchObject) {
        searchObject = JSON.parse(searchObject);

        
        
        for (const key in searchObject) {
            for (const video of searchObject[key]) {
                
                if (video) {
                     if (id === video.id) {
                        return video;
                    }
                }
               
            }
        }

        videoInfo(id).then(video =>{
            // console.log("data ", video);
            return video
        });

        
        
    }else{

    }

//   return id
    
}


export  function getChannel(id) {
    let channelsObject = localStorage.getItem("channels");
    if (channelsObject) {
        channelsObject = JSON.parse(channelsObject);

        for (const channel of channelsObject) {
            if (id === channel.id) {
                return channel;
            }
        }

        channelInfo(id)
        .then(channel=> {
                 localStorage.setItem("channels", JSON.stringify([...channelsObject, channel]))
                 if (channel) {
                    
                 }else{
                    // console.log("channel", channel);
                 }
                
                    return channel;
            });

            // console.log("response", reponse);

    }else{
        channelInfo(id)
        .then(channel=> {
                 localStorage.setItem("channels", JSON.stringify([channel]))
                    return channel;
            });
    }
    
}

export function filterVideos(array) {
    const oldLiveImg = "/hqdefault_live.jpg";
    const filtered = array.filter(video => {
        if(video){
            
            if( !video.thumbnails.includes(oldLiveImg)){
                return video;
            }
        }
        return "";
    })
    return filtered;
}

