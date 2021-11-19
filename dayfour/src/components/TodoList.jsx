import React from 'react';
import {TodoElement} from './TodoElement'
import style from './Todo.module.css'

function TodoList({array,markFunc,btnText,background}){


    return(
        <div>
            {array.map(function(ele){
                return (
                    <TodoElement key={ele.id} background={background}
                    markFunc={markFunc} id={ele.id} btnText={btnText}  title={ele.title}/>
                )
            })}
        </div>
    )
}

export {TodoList}