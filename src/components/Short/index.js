import React from 'react';
import {useLoaderData } from "react-router-dom";

export async function loader() {

    return "shorts"
    
}

export default function Shorts(props) {
    const shorts = useLoaderData();
    console.log(shorts);
    

    return (
        <>
            
        </>
    )
}
