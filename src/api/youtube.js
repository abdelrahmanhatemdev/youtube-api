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
    .then(res => {
        if (res?.data) {
            const items = res.data.items;
            if (items?.length === 50 ){
                const videos = [];

                return new Promise((resolve, reject) => {
                    items.map(async item => {
                        let more =  await videoInfo( item?.id.videoId)
                        // console.log(more);
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
                           
                            videos.push(video)
                        }
                    })
    
                   
                    resolve({res, videos}) ;

                })
                
            }
        }
        
        
        
    })
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