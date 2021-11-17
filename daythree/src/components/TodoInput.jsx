import React,{useState} from 'react';
import {Button} from "./Button"
import {v4 as uuid } from 'uuid'
import {TodoList} from "./TodoList"
import style from "./Todo.module.css"


function TodoInput(){
    const [container,setContainer] = useState([])
    const [buttonState,setButtonState] = useState("ShowCompleted")

    const [state,setState] = useState({
        title:"",
        description:"",
        
    })

    function handleToggle(id){
        var newContainer = [...container]
        for(var i=0;i<newContainer.length;i++){
            if (newContainer[i].id===id) {
                if (newContainer[i].status==="true") {
                    newContainer[i].status = "false"
                }else{
                    newContainer[i].status = "true"
                }
                break
            }
        }
        setContainer([...newContainer])
        console.log(container);
    }

    function handleAdd(title, description){
       
        const payload = {
            title:title,
            description:description,
            status:container.length%2===0?"false":"true",
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

    function handleBtn(){
        if (buttonState==="ShowCompleted") {
            setButtonState("HideCompleted")
        }else{
            setButtonState("ShowCompleted")
        }
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
                <Button title={buttonState} handleClick={handleBtn}color="blue" />
            </div>
            {
                buttonState==="ShowCompleted" && <TodoList array={container.filter(ele => ele.status==="false")} deleteFunc={handleDelete} toggleFunc={handleToggle} />
            }
            {
                buttonState==="HideCompleted" && <TodoList array={container.filter(ele => ele.status==="true")} deleteFunc={handleDelete} toggleFunc={handleToggle} />
            }
            
        </React.Fragment>
    )
}

export {TodoInput}