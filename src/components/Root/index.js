import React from 'react';
import {Outlet} from "react-router-dom";
import {Aside, NavBar} from "..";
import "./root.css";


export async function loader(){
    return {};
}

export default function Root() {

    return (
        <div className='root'>
            <div className='container'>
                <aside>
                    <Aside/>
                </aside>
                <main>
                    <NavBar/>
                    <section className='content'>
                        <Outlet/>
                    </section>
                </main>
            </div>
        </div>
    )
}
