import React from 'react'
import Paper from '@mui/material/Paper';

import {AuthContext} from './AuthContextProvider.jsx'

function ShowStatus() {
    const [isAuth,toggleAuth,setToken,token] = React.useContext(AuthContext) 
    return (
        <div style={{marginTop:"25px"}}>
            <Paper elevation={1} style={{padding:"25px"}}>
                {isAuth==="false" ?<div>Please Login</div>:<strong>{`Token is ${token}`} </strong>}
            </Paper>
        </div>
    )
}

export default ShowStatus
