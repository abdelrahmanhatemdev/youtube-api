import React from 'react';
import {useLoaderData } from "react-router-dom";
import { getIntialData } from "../../data/homeData";
import { isRequestLimit } from "../../data/apiData";
import { isShort } from "../../helpers/check";
import ShortDetails from "./ShortDetails";

export async function loader() {
    const data = await getIntialData();
    isRequestLimit(data);
    return {data}
}

export default function Shorts(props) {
    const {data} = useLoaderData();
    let content;

    if (data) {
        const shorts = data.filter( v => isShort(v));
        if (shorts) {
            content =<ShortDetails video={shorts[0]} videos={shorts}/>
        }
        
        console.log("shorts", shorts);
    }
    

    return (
        <section className='shorts-page'>
            {content}
        </section>
    )
}
