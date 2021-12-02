import React from 'react'

export const ThemeContext = React.createContext()

function ThemeContextProvider({children}) {

    const styles1 = {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '500px',
        margin: '10px auto',
    }
    
    const styles2 = {
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '500px',
        margin: '10px auto',
        backgroundColor: 'grey',
        
    }


    const [themeState,setThemeState] = React.useState("Dark")
    const [style,setStyle] = React.useState(styles1)

    function handleThemeState(){
        if (themeState==="Dark") {
            setThemeState("Light")
            setStyle(styles2)
        }else{
            setThemeState("Dark")
            setStyle(styles1)
        }
    }

    var variableArray = [themeState,handleThemeState,style]
    return (
        <ThemeContext.Provider value={variableArray}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
