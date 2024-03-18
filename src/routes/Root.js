import React from 'react';
import {useLoaderData, NavLink, Outlet } from "react-router-dom";
import categories from "../arrays/categories";
import {search} from "../api/youtube";

export async function loader(){
    // const videos = search("javascript");
    // console.log(videos)
    return {categories};
}

export default function Root() {

    const {categories} = useLoaderData();

    return (
        <>
        {
            categories.map((cat, i) => {
                return <NavLink to={"/categories/" + cat} key={i} style={{display: "block"}}>{cat}</NavLink>
            })
        }
        <div className='content'>
        <Outlet/>
        </div>
        
        
            
        </>
    )
}
