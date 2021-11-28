import React from 'react'
import axios from 'axios'
import style from './UserDetail.module.css'
import {Button} from '../../Button.jsx'

function UserCard({ele,handleRefresh}) {

    async function handleDelete(id){
        const config = {
            method: 'DELETE',
            url: `http://localhost:3000/userdetail/${id}`,
        }
        await axios(config)
        handleRefresh()
        alert("Deleted")
    }

    return (
        <div className={style.diaplayCard}>
            <h2>Name : {ele.name}</h2>
            <h2>Age : {ele.age}</h2>
            <h2>Address : {ele.address}</h2>
            <h2>Dept : {ele.department}</h2>
            <h2>Salary : {ele.salary}</h2>
            <h2>Married : {ele.marital===true?"Yes":"No"}</h2>
            <Button title="Delete" color="red" handleClick={() => handleDelete(ele.id)}></Button>
        </div>
    )
}

export default UserCard
