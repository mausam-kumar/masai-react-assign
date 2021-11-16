import React from 'react';
import {TodoItem} from "./TodoItem"
function TodoList({array}){
    return (
        <React.Fragment>
            {array.map(ele => {
                return(<div key={ele.id}>
                    <TodoItem title={ele.title} 
                    description={ele.description} 
                    />
                </div>
                )
            })}
        </React.Fragment>
    )
}

export {TodoList}