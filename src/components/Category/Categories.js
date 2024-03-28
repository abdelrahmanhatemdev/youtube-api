import React from 'react';
import {NavLink} from "react-router-dom";
import categoryArray from "../../arrays/categories";

export default function Categories() {

    const categories = categoryArray.map((cat, i) => {
        return <NavLink 
        to={"/category/" + cat.replace("/", "_")} 
        key={i}
        className={({isActive, isPending}) => {
            return isActive ? "active" : isPending ? "pending" : "";
        }}
        
        >{cat}</NavLink>
    })
    
    return (
        <section className='categories'>
            {categories}
        </section>
    )
}
