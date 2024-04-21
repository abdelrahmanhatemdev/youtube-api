import {useEffect} from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import {Aside, NavBar} from "..";
import { getTheme, updateTheme } from "../../data/settingData";
import "./root.css";


export async function loader(){
    
    const dataTheme = await getTheme();
    return {dataTheme};
}

export default function Root() {
    const {dataTheme} = useLoaderData();

    useEffect(() => {
        document.body.setAttribute("class", dataTheme)

    }, [dataTheme])

    return (
        <div className='root'>
            <div className='container'>
                <aside>
                    <Aside/>
                </aside>
                <main>
                    <NavBar theme={dataTheme}/>
                    <section className='content'>
                        <Outlet/>
                    </section>
                </main>
            </div>
        </div>
    )
}
