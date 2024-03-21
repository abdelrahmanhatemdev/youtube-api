import { search } from "../api/youtube";

export function getData(searchTerm) {
    let searchObject = localStorage.getItem("search");

    if (searchObject) {
        searchObject = JSON.parse(searchObject);
        let storedTerm = searchObject[searchTerm];

        if (storedTerm) {
            return storedTerm;
            
        }else{
            
            return createData(searchTerm, searchObject)
        }
    }else{

        

        return createData(searchTerm, searchObject)
    }
} 

function createData(searchTerm, searchObject) {
    // return items.sort(() => (Math.random() > 0.5) ? 1 : -1)
    console.log("Fetching " + searchTerm + " data from Youtube API");
    const response = search(searchTerm)
    .then(res => {
        if (res?.data) {
            const videos = res.data.items;
            if (videos?.length === 50 ){
                searchObject = {...searchObject, [searchTerm]:videos}
                localStorage.setItem("search", JSON.stringify(searchObject))
                return videos;
            }
        }else{
            const check = checkQuota(res);
            if(!check){
                return "Request Limit";
            }
        }
    })
    .catch(e => {
        console.error(e);
    });

    return response;
}


export function checkQuota(res) {
    const error = res?.response?.data?.error.message;
    if (error?.includes("The request cannot be completed because you have exceeded your")) {
        return false;
    }
    return true;
}