import React from 'react';
import useTitle from "../../hooks/useTitle";
import { getIntialData } from "../../helpers/data";
import {Categories, VideoItem, ErrorPage} from "..";

export async function loader({params}) {
    const videos = await getIntialData();
    // console.log("home", videos);

    return "home"
    
}

export default function Home(props) {
    

    return (
        <>
        <Categories/>
            Home 
        </>
    )
}
