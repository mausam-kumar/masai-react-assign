import React from 'react'
import SampleComp from './SampleComp.jsx'
import Button from '@mui/material/Button';
import {ThemeContext} from './ThemeContextProvider.jsx'

function Theme() {

    const [themeState,handleThemeState,style] = React.useContext(ThemeContext)

    function handleClick(){
        handleThemeState()
    }
    return (
        <div>
            <div>
                <Button onClick={handleClick} variant="contained">{themeState}</Button>
            </div>
            <SampleComp />
        </div>
    )
}

export default Theme
