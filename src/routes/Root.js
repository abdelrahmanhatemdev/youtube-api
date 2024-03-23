import React from 'react';
import {Outlet} from "react-router-dom";
import {Aside, NavBar, Categories} from "../components";
import useTitle from "../hooks/useTitle";
import "../assets/styles/root.css";


export async function loader(){
    return {};
}

export default function Root() {

    useTitle("Home")

    return (
        <>
        <aside>
            <Aside/>
        </aside>
        <main>
            <NavBar/>
            <Outlet/>
         
        </main>
        </>
    )
}
