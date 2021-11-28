import React,{useState,useEffect,useRef} from 'react'
import {Button} from '../../Button.jsx'
import style from "./UserDetail.module.css"
import axios from "axios"
import {v4 as uuid} from 'uuid'

function Form({handleRefresh}) {

    const [state,setState] = useState({
        name:"Enter Name",
        age:"Enter age",
        address:"Enter address",
        department:"Select Dept",
        salary:"Enter Salary",
        marital:false
        
    })

    function handleUserData(e){
        const name = e.target.name
        setState({...state,[name]:e.target.name==="marital"?e.target.checked:e.target.value,id:uuid()})
        // console.log(state);

    }

    async function handleUserSumbit(){
        const config = {
            method: 'post',
            url:`http://localhost:3000/userdetail`,
            data:state
        }
        await axios(config)
        handleRefresh()
        alert("Success")
    }

    return (
        <div className={style.inputFieldDiv}>
            
            <div >
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" id="name" placeholder="Enter Name" onChange={(e) => handleUserData(e)} />
            </div>
            <div>
                <label htmlFor="age">Age : </label>
                <input type="number" name="age" id="age" placeholder="Enter Age" onChange={(e) => handleUserData(e)} />
            </div>
            <div>
                <label htmlFor="address">Address : </label>
                <input type="text" name="address" id="address" placeholder="Enter Address" onChange={(e) => handleUserData(e)} />
            </div>
            <div>
                <label htmlFor="department">Choose department : </label>
                <select name="department" id="department" onClick={(e) => handleUserData(e)}>
                    <option value="Select Dept">Select Dept</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="ETC">ETC</option>
                </select>
            </div>
            <div>
                <label htmlFor="salary">Salary : </label>
                <input type="number" name="salary" id="salary" placeholder="Enter salary" onChange={(e) => handleUserData(e)} />
            </div>
            <div>
                <label htmlFor="marital">Are You Married : </label>
                <input type="checkbox" name="marital" id="marital" onClick={(e) => handleUserData(e)} />
            </div>
            <Button  title="Sumbit" color="Red" handleClick={handleUserSumbit} />
        </div>
    )
}

export default Form
