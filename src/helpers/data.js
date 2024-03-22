import { search } from "../api/youtube";

export async function getData(searchTerm) {
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

async function createData(searchTerm, searchObject) {
    // return items.sort(() => (Math.random() > 0.5) ? 1 : -1)
    console.log("Fetching data from Youtube API");
    const response = search(searchTerm)
    .then(res =>res)
    .then(res => {
        const {videos} = res;

        if (videos?.length > 0) {
                searchObject = {...searchObject, [searchTerm]:videos}
                localStorage.setItem("search", JSON.stringify(searchObject))
                checkLocalStorage()
                return videos;
        
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



export function checkLocalStorage() {

    let lsTotal = 0, item, value;
    for (item in localStorage) {
        if (!localStorage.hasOwnProperty(item)) {
            continue;
        }
        value = ((localStorage[item].length + item.length) * 2);
        lsTotal += value;
        console.log(item.substr(0, 50) + " = " + (value / 1024).toFixed(2) + " KB")
    };
    
}

export function getVideo(id) {

    let searchObject = localStorage.getItem("search");

    

    if (searchObject) {
        searchObject = JSON.parse(searchObject);
        for (const key in searchObject) {
            for (const video of searchObject[key]) {
                 
                if (id === video?.id) {
                    return video;
                }
            }
        }
    }else{

        

        // return createData(searchTerm, searchObject)
    }

  return id
    
}