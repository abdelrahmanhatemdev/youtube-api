import { search, channelInfo, videoInfo } from "../api/youtube";


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

async function createData(keywords, searchObject) {
    // return items.sort(() => (Math.random() > 0.5) ? 1 : -1)
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
                        checkLocalStorage()
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
    data = [...data]

    // console.log("data", data);
    return data;
}



export  async function getIntialData() {

    let searchObject = localStorage.getItem("search");
    let keywords = ["Food", "Music", "React"];
    let data =[];

    if (searchObject) {
        searchObject = JSON.parse(searchObject);

        keywords.map(keyword => {
            let storedTerm = searchObject[keyword];

            if (storedTerm) {
                data.push(...storedTerm.filter(v => v));
                
            }else{
                
                // return createData(searchTerm, searchObject)
            }
        })
        
    }else{
       
       
            let response = await createData(keywords, searchObject);
            
        // }).then(() => {
        //     // keywords.forEach(async keyword => {
        //     //     let keywordResults = await getData(keyword);
        //     //     data.push(keywordResults)
    
        //     //    })
        //        console.log("data", data);
        //        return data
               
        // })
           
           

          

        
        return response;
    }
    return filterVideos(data);
} 


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

        return ""
        
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

        const reponse = channelInfo(id)
        .then(channel=> {
                 localStorage.setItem("channels", JSON.stringify([...channelsObject, channel]))
                 if (channel) {
                    
                 }else{
                    console.log("channel", channel);
                 }
                
                    return channel;
            });

            console.log("response", reponse);

    }else{
        channelInfo(id)
        .then(channel=> {
                 localStorage.setItem("channels", JSON.stringify([channel]))
                    return channel;
            });
    }
    
}




export function checkQuota(res) {
    
    const error = res?.response?.data?.error.message;
    if (error?.includes("The request cannot be completed because you have exceeded your")) {
        return false;
    }
    return true;
}



export function checkLocalStorage() {

    // let lsTotal = 0, item, value;
    // for (item in localStorage) {
    //     if (!localStorage.hasOwnProperty(item)) {
    //         continue;
    //     }
    //     // value = ((localStorage[item].length + item.length) * 2);
    //     // lsTotal += value;
    //     // console.log(item.substr(0, 50) + " = " + (value / 1024).toFixed(2) + " KB")
    //     // console.log("Total = " +  lsTotal + " KB")
    // };
    
}

function filterVideos(array) {
    const oldLiveImg = "/hqdefault_live.jpg";
    return array.filter(v => !v.thumbnails.includes(oldLiveImg));
}


export function isRequestLimit(response) {
    const requestLimit = response.includes("requestLimit");
    if (requestLimit) {
        throw new Response("requestLimit")
    }
}


export function addHistory(id) {
  let historyObject = localStorage.getItem("history");
  if (historyObject) {
    localStorage.setItem("history", JSON.stringify([...historyObject, id]))
  }else{
    localStorage.setItem("history", JSON.stringify([id]))
  }
}

 


