import React from 'react';
import {useLoaderData} from "react-router-dom";

export async function loader({params}) {
    const menu = params.menu;
    console.log(menu);

    return "Menu"
    
}

export default function Menu() {
    

    return (
        <>
        Menu Page
            
        </>
    )
}
