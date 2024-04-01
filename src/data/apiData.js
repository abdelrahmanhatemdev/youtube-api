import { search } from "../api/youtube";
import { filterVideos } from "./videoData";

export async function getData(searchTerm) {
    let searchObject = localStorage.getItem("search");

    if (searchObject) {
        searchObject = JSON.parse(searchObject);
        let storedTerm = searchObject[searchTerm];
        if (storedTerm) {
            return filterVideos(storedTerm)
            
        }else{
            return createData([searchTerm], searchObject)
        }
    }else{
        return createData([searchTerm], searchObject)
    }
} 

export async function createData(keywords, searchObject) {
    console.log("Fetching data from Youtube API");
    let data = await Promise.all(
        keywords.map(async keyword => {
           
            return search(keyword)
            .then(res =>res)
            .then(res => {
                let {videos} = res;
               
        
                if (videos) {
                        searchObject = {...searchObject, [keyword]:videos}
                        localStorage.setItem("search", JSON.stringify(searchObject))
                        videos = videos.filter(v => v)
                        return videos
                
                }else{
    
                    const check = checkQuota(res);
                    if(!check){
                        return  "requestLimit";
                    }
                }
            })
            .catch(e => e);
        })
    );
    data = data.flat();
   
    return data;
}

export function checkQuota(res) {
    
    const error = res?.response?.data?.error.message;
    if (error?.includes("The request cannot be completed because you have exceeded your")) {
        return false;
    }
    return true;
}



export function isRequestLimit(response) {
    const requestLimit = response.includes("requestLimit");
    if (requestLimit) {
        throw new Response("requestLimit")
    }
}
