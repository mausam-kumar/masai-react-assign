import React from 'react';
import style from './Button.module.css';
function Button({handleClick,title,color}){
    return (
        <React.Fragment>
            <button 
            name = {title}
            className = {style.btn}
            style = {{backgroundColor:color}}
             onClick={handleClick}>{title}
             
             </button>
        </React.Fragment>
    )
}

export {Button}