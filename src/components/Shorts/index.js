import React from 'react';
import {useLoaderData } from "react-router-dom";
import { getIntialData } from "../../data/homeData";
import { isRequestLimit } from "../../data/apiData";
import { isShort } from "../../helpers/check";
import ShortItem from "./ShortItem";
import "./ShortItem.css";

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
            content = shorts.map(video => <ShortItem video={video} videos={shorts}/>)
        }
    }
    return (
        <section className='shorts-page'>
            <div className='items'>
                {content}
            </div>
        </section>
    )
}
