import React from 'react';
import {Outlet} from "react-router-dom";
import {Aside, NavBar, Categories} from "../components";
import "../assets/styles/root.css";


export async function loader(){
    return {};
}

export default function Root() {

    return (
        <>
        <aside>
            <Aside/>
        </aside>
        <main>
            <NavBar/>
            <Categories/>
            <Outlet/>
        </main>
        </>
    )
}
