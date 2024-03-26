import axios from "axios";

const API_KEY= process.env.REACT_APP_API_KEY;
const baseURL = `https://www.googleapis.com/youtube/v3`

export async function search(term){

    const response = await axios.get(`${baseURL}/search`, {
        params:{
            part: "snippet", 
            maxResults:50,
            key: API_KEY,
            q:term
        }
    })
    .then(async res => {
        if (res?.data) {
            const items = res.data.items;
            if (items?.length === 50 ){
                const videos = await Promise.all(
                    items.map( item => {
                        return videoInfo( item?.id.videoId).then(vidRes => {
                        const more  = vidRes;
                        if (more?.data) {
                            const video = {
                                id: item?.id.videoId, 
                                title: item?.snippet.title,
                                channelID : item?.snippet.channelId, 
                                channelTitle : item?.snippet.channelTitle, 
                                description: item?.snippet.description, 
                                publishedAt :item?.snippet.publishedAt, 
                                thumbnails: item?.snippet.thumbnails?.high?.url, 
                                duration: more.data?.items[0]?.contentDetails?.duration, 
                                viewCount: more.data?.items[0]?.statistics?.viewCount, 
                                likeCount: more.data?.items[0]?.statistics?.likeCount, 
                                commentCount: more.data?.items[0]?.statistics?.commentCount
                            }
                            return video;
                        }  
                        
                        }) 
                    })
                );
                return {res, videos};
            }
        }
    }).then(res => res)
    .catch(e => e)

    return response;
}

export async function videoInfo(id){

    const response = await axios.get(`${baseURL}/videos`, {
        params:{
            part: "contentDetails,statistics", 
            maxResults:50,
            key: API_KEY,
            id:id
        }
    })
    .then(res => res)
    .catch(e => e)

    return response;
}

export async function channelInfo(id){

    const response = await axios.get(`${baseURL}/channels`, {
        params:{
            part: "snippet,statistics", 
            maxResults:50,
            key: API_KEY,
            id:id
        }
    })
    .then(async res => {
        const items = res.data.items;
        
        
        if (items.length > 0 ) {
            return {id: items[0].id, 
                title: items[0].snippet.title, 
                description: items[0].snippet.description, 
                thumbnails: items[0].snippet.thumbnails.high.url, 
                subscriberCount: items[0].statistics.subscriberCount,
                videoCount: items[0].statistics.videoCount, 
                viewCount: items[0].statistics.viewCount
            }
                
        }else{
            console.log("No Quota");
        }
    })
    .catch(e => e)

    return response;
}

