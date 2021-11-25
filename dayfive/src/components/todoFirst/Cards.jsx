import React from 'react'
import {Button} from '../Button.jsx'
import style from './TodoFirst.module.css'

function Cards({title,status,id,handleDelete,handleToggle}) {
    return (
        <div className={style.displayCard}>
            <div className={style.displayCardText}>
                <p>{title}</p>
                <p>{status}</p>
            </div>
            <div className={style.displayCardBtn}>
                <Button title="Toggle" color="black" handleClick={() => handleToggle(id,status)} />
                <Button title="Delete" color="red" handleClick={() => handleDelete(id)} />
            </div>

        </div>
    )
}

export default Cards
