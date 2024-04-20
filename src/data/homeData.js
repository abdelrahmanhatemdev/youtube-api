import {createData} from "./apiData";
import {filterVideos} from "./videoData";
import { isShort } from "../helpers/check";

export  async function getInitialData() {

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
    return filterVideos(data);
} 

export  async function getRandomData() {
    let data = await getInitialData();
    if(data){
        data = data.sort(() => (Math.random() > 0.5) ? 1 : -1);
        return filterVideos(data);
    }
} 

export  async function getRandomLimited() {
    let data = await getRandomData();
    if (data) {
        return data.slice(0,50)   
    }
} 
export  async function getShorts() {
    let data = await getInitialData();
    if (data) {
        return data.filter( v => isShort(v));
    }
} 