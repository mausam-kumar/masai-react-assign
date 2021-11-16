import React,{useState} from 'react';
import {Button} from "./Button"
import {v4 as uuid } from 'uuid'
import {TodoList} from "./TodoList"
function TodoInput(){
    const [container,SetContainer] = useState([])
    const [state,setState] = useState({
        title:"",
        description:"",
        
    })

    function handleAdd(title, description){
        const payload = {
            title:title,
            description:description,
            status:false,
            id:uuid()
        }
        console.log(container);
        SetContainer([...container,payload])
    }

    function handleChange(e){
        const value = e.target.name
        
        setState({
            ...state,[value]:e.target.value
        })

        
    }
    return (
        <React.Fragment>
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
            <Button title="ADD"
             color="green" 
             handleClick={() => handleAdd(state.title,state.description)} 
             />
             <TodoList array={container} />
        </React.Fragment>
    )
}

export {TodoInput}