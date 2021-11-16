import React from 'react';

function TodoItem({title,description}){
    return (
        <React.Fragment>
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </React.Fragment>
    )
}

export {TodoItem}