import React from 'react';
import {TodoItem} from "./TodoItem"
function TodoList({array,deleteFunc,toggleFunc}){
    
    function handleDelete(id){
        deleteFunc(id)
    }
    function toggleState(id){
        toggleFunc(id)
        console.log("mausam");
    }
    return (
        <React.Fragment>
            {array.map(ele => {
                return(<div key={ele.id}>
                    <TodoItem title={ele.title} 
                    description={ele.description} 
                    status = {ele.status}
                    handleDelete = {() => handleDelete(ele.id)}
                    toggleFunc = {() => toggleState(ele.id)}
                    />
                </div>
                )
            })}
        </React.Fragment>
    )
}

export {TodoList}