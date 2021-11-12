import React from 'react';
import "./Mobile.module.css"
function Mobile({title,array}) {
    return (
        <React.Fragment>

        
        <h1>{title}</h1>
        {array.map(function (ele){
            return(
                <h4>{ele}</h4>
            )
        })}
        </React.Fragment>
    )
}

export default Mobile