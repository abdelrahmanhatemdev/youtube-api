import { search } from "../api/youtube";

export async function getData(searchTerm) {
    let storeObject={}

    let searchObject = localStorage.getItem("search");

    if (searchObject) {
        searchObject = JSON.parse(searchObject);
        let storedTerm = searchObject[searchTerm];

        if (storedTerm) {
            return storedTerm;
            
        }else{
            await createData(searchTerm, storeObject)
        }
    }else{

        await createData(searchTerm, storeObject)
    }
} 


async function createData(searchTerm, searchObject, ) {
    console.log("Fetching from Youtube Quota");
    await search(searchTerm)
    .then(res => {

        if (res.data) {
            const videos = res.data.items;
            if (videos?.length === 50 ){
                searchObject = {...searchObject, [searchTerm]:videos}
            localStorage.setItem("search", JSON.stringify(searchObject))
            }
        }
    })
    .catch(e => {
        console.error(e);
    });
}