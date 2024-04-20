import React from 'react';
import {useLoaderData } from "react-router-dom";
import { getShorts } from "../../data/homeData";
import { isRequestLimit } from "../../data/apiData";
import ShortItem from "./ShortItem";
import "./ShortItem.css";

export async function loader() {
    const shorts = await getShorts();
    isRequestLimit(shorts);
    return {shorts}
}

export default function Shorts(props) {
    const {shorts} = useLoaderData();
    let content;

    if (shorts) {
        content = shorts.map((video, index) => <ShortItem video={video} videos={shorts} key={index}/>)
    }
    return (
        <section className='shorts-page'>
            <div className='items'>
                {content}
            </div>
        </section>
    )
}
