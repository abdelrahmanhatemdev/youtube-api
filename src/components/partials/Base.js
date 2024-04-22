import {useEffect, useState} from 'react';
import {Aside, NavBar} from "..";
import { getTheme } from "../../data/settingData";


export default function Base({children}) {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
         async function dataLoader(){
            const dataTheme = await getTheme();
            document.body.setAttribute("class", dataTheme)
            setTheme(dataTheme)
            return {dataTheme};
        }
        dataLoader()

    }, )

    return (
        <div className='root'>
            <div className='container'>
                <aside className='no-sm'>
                    <Aside/>
                </aside>
                <main>
                    <NavBar 
                    theme={theme}
                    />
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
