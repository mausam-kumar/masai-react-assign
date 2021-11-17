import React,{useState} from 'react';
import {Button} from "./Button";
import style from "./Todo.module.css";


function TodoItem({title,description,status,handleDelete,toggleFunc}){
    const [eleState,setEleState] = useState(`${status}`)
    
    
    function handleToggle(){
        if (eleState==="false") {
            setEleState("true")
        }else{
            setEleState("false")
        }
        toggleFunc()
    }

    return (

        <div className={style.card}>
            <div className={style.cardLeft}>
                <p>Title : {title}</p>
                <p>Description : {description}</p>
                <p>Status : {eleState}</p>
            </div>
            <Button title="Toggle" 
           color="orange" handleClick={handleToggle}/>
            <Button title="Delete" 
           color="red" handleClick={handleDelete} />

        </div>
    )
}

export {TodoItem}