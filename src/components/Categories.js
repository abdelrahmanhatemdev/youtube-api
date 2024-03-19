import React from 'react';
import {NavLink} from "react-router-dom";
import categoryArray from "../arrays/categories";
import "../assets/styles/categories.css"


export default function Categories() {

    const categories = categoryArray.map((cat, i) => {
        return <NavLink 
        to={"/categories/" + cat} 
        key={i}
        className={({isActive, isPending}) => {
            return isActive ? "active" : isPending ? "pending" : "";
        }}
        
        >{cat}</NavLink>
    })
    
    return (
        <div className='categories'>
            {categories}
        </div>
    )
}
