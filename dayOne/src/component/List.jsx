import React from "react";
import CategoryItem from './CategoryItem'
import './List.module.css'

function List({title,src,label}){
    return(
        <React.Fragment>
            <h4>{title}</h4>
            <CategoryItem src = {src} label = {label} />
        </React.Fragment>
    )
}

export default List;