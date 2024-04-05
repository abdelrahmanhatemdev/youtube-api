import {getVideo} from "./videoData";

export function getHistory() {
    let historyObject = localStorage.getItem("history");
    if (historyObject) {
        let historyArray= JSON.parse(localStorage.getItem("history"));
          let videos =  historyArray.map(v => {
                    const historyVideo = v;
                    const video = getVideo(historyVideo.id)
                    const date = historyVideo.date
                    return {video, date}
            })
            videos = videos.sort().reverse()
            return [...videos]
    }   
    return "";
}

export function addHistory(id) {
  let historyArray= localStorage.getItem("history");

  let now = new Date();
  let localeDate = now.toLocaleString( "default", {weekday: "long", month: "long"}).split(" ");
  let date = [now.getFullYear(), now.getMonth(), localeDate[0], now.getDate(), localeDate[1], `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`].join("_");
  
  if (historyArray) {
    historyArray = JSON.parse(historyArray);

    historyArray = historyArray.filter(v => v.id !== id)
    historyArray =[...historyArray, {id:id, date:date}];
    localStorage.setItem("history", JSON.stringify(historyArray))

  }else{
    historyArray =[{id:id, date:date}];
    localStorage.setItem("history", JSON.stringify(historyArray))
  }
}

export function deleteHistory(id) {
    let historyArray= localStorage.getItem("history");

    if (historyArray) {
      historyArray = JSON.parse(historyArray);
  
      historyArray = historyArray.filter(v => v.id !== id)
      historyArray =[...historyArray];
      localStorage.setItem("history", JSON.stringify(historyArray))
  
    }
}

export function clearHistory() {
    let historyArray= localStorage.getItem("history");
    historyArray && localStorage.setItem("history", [])
}

export function searchHistory(term) {
    let historyArray = getHistory();
    if (historyArray) {
        if (term) {
            const filtered = historyArray.filter(data => data.video.title.toLowerCase().includes(term))
            return filtered;
        }
        return historyArray;
    }
}