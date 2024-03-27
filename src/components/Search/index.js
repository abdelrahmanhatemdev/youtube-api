import { useLoaderData } from "react-router-dom";
import { getData } from "../../helpers/data";
import SearchResults from "./SearchResults";
import { Categories } from "../";

export async function loader({params, request}) {
    const search = params.search;
    const videos = await getData(search);
    return {search, videos}
}

export default function Search() {
    let {search, videos} = useLoaderData();

    return (
        <>
            <Categories/>
            <SearchResults search={search} videos={videos} key={search}/>
        </>
    )
}
