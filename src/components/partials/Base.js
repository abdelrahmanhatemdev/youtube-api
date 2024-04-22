import {useEffect} from 'react';
import {Aside, NavBar} from "..";
import { getTheme } from "../../data/settingData";


export default function Base({children}) {

    useEffect(() => {
        (async function (){
            const dataTheme = await getTheme();
            document.body.setAttribute("class", dataTheme)
            return {dataTheme};
        })()
    }, )

    return (
        <div className='root'>
            <div className='container'>
                <aside className='no-sm'>
                    <Aside/>
                </aside>
                <main>
                    <NavBar/>
                    <section className='content'>
                        {children}
                    </section>
                    <aside className='no-lg'>
                        <Aside/>
                    </aside>
                </main>
            </div>
        </div>
    )
}
