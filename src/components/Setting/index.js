import { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";
import { getTheme, updateTheme } from "../../data/settingData";
import "./setting.css";

export async function loader() {
    const dataTheme = await getTheme();
    return {dataTheme};
}

export default function Setting() {
    const {dataTheme} = useLoaderData();
    const [theme, setTheme] = useState(dataTheme);

    useEffect(() => {
        document.body.setAttribute("class", theme)

    }, [theme])

    function update(newTheme) {
        setTheme(newTheme);
        updateTheme(newTheme)
    }

    return (
        <div className='setting'>
            <ul className='list'>
                <li>Appearence</li>
            </ul>
            <section className='details'>
                <h3>Theme <strong className="theme">:{theme}</strong></h3>
                <div className="options">
                    <div className="option" onClick={() => update("light")}>
                        Light
                    </div>
                    <div className="option" onClick={() => update("dark")}>
                        Dark
                    </div>
                </div>
            </section>
        </div>
    )
}
