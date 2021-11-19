import React from 'react';
import {Button} from './Button';
import style from './Todo.module.css'
function TodoElement({title,markFunc,id,btnText,background}){


    return(
        <div className={style.eleCard} style={{backgroundColor:background}}>
            <p>{title}</p>
            <Button title={btnText} 
            handleClick={() => markFunc(id)} color="orange"/>
        </div>
    )
}

export {TodoElement}