import React from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import {ThemeContext} from './ThemeContextProvider.jsx'

function SampleComp() {

    const [themeState,handleThemeState,style] = React.useContext(ThemeContext)
    return (
        <div>
        <Paper style={style}>
            <TextField
                id="outlined-disabled"
                label="Name"
                sx={{marginTop:"15px",color:"white"}}
            />
            <TextField
                id="outlined-disabled"
                label="Email"
                sx={{marginTop:"15px"}}
            />
            <TextField
                id="outlined-disabled"
                label="Password"
                sx={{marginTop:"15px"}}
            />
        </Paper>
        </div>
    )
}

export default SampleComp
