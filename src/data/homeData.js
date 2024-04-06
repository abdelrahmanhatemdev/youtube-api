import {createData} from "./apiData";
import {filterVideos} from "./videoData";

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
            }
            return "";
        })
    }else{
        return await createData(keywords, searchObject)
    }
    data = data.sort(() => (Math.random() > 0.5) ? 1 : -1);
    return filterVideos(data);
} 

export  async function getRandomLimited() {
    let data = await getIntialData();
    if (data) {
        return data.slice(0,50)   
    }
} 