import React,{useState} from 'react';
import {TodoList} from './TodoList'
import style from './Todo.module.css'
import {Button} from './Button';
import {v4 as uuid} from 'uuid'
import { set } from 'mongoose';


function Todo(){

    const [input,setInput] = useState("")

    const [state,setState] = useState([])

    const [showCompleted,setShowCompleted] = useState("false")

    function handleChange(e){
        setInput(e.target.value)
        
    }

    function handleAdd(){
        
        const payload = {
            title:input,
            status:"false",
            id:uuid()
        }
        setState([...state,payload])
        // console.log("state handleAdd",state);
    }

    function handleMark(id){
        // console.log(id);
        var newArray = [...state]
        for(var i=0;i<newArray.length;i++){
            if (newArray[i].id===id) {
                // console.log("inside if");
                if (newArray[i].status==="true") {
                    newArray[i].status="false"
                }else{
                    newArray[i].status="true"
                }
                break;
            }
        }
        setState([...newArray])
        // console.log("state handleMark",state);
    }

    function handleShow(){
        if (showCompleted==="true") {
            setShowCompleted("false")
        }else{
            setShowCompleted("true")
        }
        // setState([...state])
    }

    return(
        <div className={style.mainContainer}>
            <div className={style.inputfield}>
                <input type="text" 
                placeholder="Write Something..."
                onKeyUp={(e) => handleChange(e)}
                 />
                <Button title="ADD" color="crimson" 
                handleClick={(e) => handleAdd(e)}
                />
            </div>


            <TodoList array={state.filter(ele => ele.status==="false")} btnText="Mark Completed" markFunc = {handleMark} />


            <div className={style.showCompleted}>
                {state.filter(ele => ele.status==="true").length>0 && <Button title={showCompleted==="true"?
                "Show Completed":"Hide Completed"} 
                color="black" 
                handleClick={handleShow}
                />}
                {
                    showCompleted==="false"?<TodoList markFunc = {handleMark} btnText = "Unmark" background="green"
                     array={state.filter(ele => ele.status=="true")}
                    />:<></>
                }
            </div>
        </div>
    )
}

export {Todo}