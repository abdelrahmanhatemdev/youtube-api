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
    .then(res => res)
    .catch(e => e)

    return response;
}
