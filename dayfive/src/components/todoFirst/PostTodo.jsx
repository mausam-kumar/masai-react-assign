
import React from 'react'
import {v4 as uuid} from 'uuid'
import {Button} from '../Button.jsx'
import style from './TodoFirst.module.css'

function PostTodo() {

    const [data,setData] = React.useState("")

    function handleChange(e){
        setData(e.target.value)
        console.log(data);
    }

    async function handleSubmit(){
        const payload = {
            title:data,
            status:"false",
            id:uuid()
        }

        const config = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }

        try {
            await fetch("http://localhost:3000/posts",config)
            alert("Success")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1 style={{color:"crimson"}}>CREATE A NEW TODO</h1>
            <input type="text" className={style.inputField} placeholder="Enter Something..." onChange={(e) => handleChange(e)} />
            <Button title="Submit" handleClick={handleSubmit} color="green"/>
        </div>
    )
}

export default PostTodo
