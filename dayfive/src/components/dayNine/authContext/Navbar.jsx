import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import {AuthContext} from './AuthContextProvider.jsx'

function Navbar() {
    const [isAuth,toggleAuth,setToken] = React.useContext(AuthContext)

    const [state,setState] = React.useState({
        username:"",
        password:""
    })

    function handleState(e){
        setState({...state,[e.target.name]:e.target.value})
    }


    async function handleLoginStatus(e){
        var config = {
            url:`https://reqres.in/api/login`,
            data:state,
            method: 'post'
        }
        const data = await axios(config)
        setToken(data.data.token)
        toggleAuth()
    }

    return (
        <nav>
            <Paper elevation={3} style={{display:"flex",alignItems: "center",justifyContent: "center",padding:"15px"}}>
                <div>
                    <TextField id="outlined-basic" 
                        name="username" label="Email" 
                        variant="outlined" 
                        onChange={(e) => handleState(e)}
                        style={{marginRight:"20px"}}
                    />
                    
                    <TextField id="outlined-basic" 
                        name="password" 
                        label="Password" 
                        variant="outlined" 
                        onChange={(e) => handleState(e)}
                        style={{marginRight:"20px"}}
                    />
                </div>
                <Button onClick={(e) => handleLoginStatus(e)} variant="contained">{isAuth==="false"?"Login":"Logout"}</Button>
            </Paper>
        </nav>
    )
}

export default Navbar
