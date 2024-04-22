import {useEffect} from 'react';
import {Outlet, useLoaderData} from "react-router-dom";


import Base from "../partials/Base";
import "./root.css";


export async function loader(){
    
   
    return {};
}

export default function Root() {
  
    // useEffect(() => {
    //     document.body.setAttribute("class", dataTheme)

    // }, [dataTheme])

    return <Base children={<Outlet/>}/>
}
