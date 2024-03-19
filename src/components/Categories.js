import React from 'react';
import {NavLink} from "react-router-dom";
import categoryArray from "../arrays/categories";


export default function Categories() {

    const categories = categoryArray.map((cat, i) => {
        return <NavLink to={"/categories/" + cat} key={i} style={{display:"inline-block",margin: "1rem"}}>{cat}</NavLink>
    })
    
    return (
        <div className='categories'>
            {categories}
        </div>
    )
}
