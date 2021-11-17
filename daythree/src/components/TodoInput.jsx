import React,{useState} from 'react';
import {Button} from "./Button"
import {v4 as uuid } from 'uuid'
import {TodoList} from "./TodoList"
import style from "./Todo.module.css"


function TodoInput(){
    const [container,setContainer] = useState([])

    const [state,setState] = useState({
        title:"",
        description:"",
        
    })

    function handleAdd(title, description){
       
        const payload = {
            title:title,
            description:description,
            status:"false",
            id:uuid()
        }
        
        setContainer([...container,payload])
        
    }

    function handleDelete(id){
        var newArray = container.filter(ele => ele.id !== id)

        setContainer([...newArray])
    }

    function handleChange(e){
        e.preventDefault()
        const value = e.target.name
        
        setState({
            ...state,[value]:e.target.value
        })

        
    }
    return (
        <React.Fragment>
            <div className={style.header}>

                <form action="" className={style.form}>

                    <input type="text"
                    placeholder="Title" 
                    name="title"
                    onChange={handleChange}
                    />
                    <input type="text" 
                    placeholder="Description" 
                    name="description"
                    onChange={handleChange}
                    />
                </form>

                
                <Button title="ADD"
                color="green" 
                handleClick={() => handleAdd(state.title,state.description)} 
                />
            </div>
             <TodoList array={container} deleteFunc={handleDelete} />
        </React.Fragment>
    )
}

export {TodoInput}