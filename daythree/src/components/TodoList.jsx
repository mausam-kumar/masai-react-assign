import React from 'react';
import {TodoItem} from "./TodoItem"
function TodoList({array,deleteFunc}){
    
    function handleDelete(id){
        deleteFunc(id)
    }
    return (
        <React.Fragment>
            {array.map(ele => {
                return(<div key={ele.id}>
                    <TodoItem title={ele.title} 
                    description={ele.description} 
                    status = {ele.status}
                    handleDelete = {() => handleDelete(ele.id)}
                    />
                </div>
                )
            })}
        </React.Fragment>
    )
}

export {TodoList}