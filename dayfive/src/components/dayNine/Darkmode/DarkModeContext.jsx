import React from 'react'

export const ThemeContext = React.createContext()


function DarkModeContext({children}) {

    const darkTheme = {
        sidebarColor:"#16191C",
        textColor:"#FFFFFF",
        mainBackgroundColor:"#1F2327",
        cardBackground:"#292E33"
    }
    const lightTheme = {
        sidebarColor:"#FFFFFF",
        textColor:"#31394D",
        mainBackgroundColor:"#F5F6FA",
        cardBackground:"#FFFFFF"
    }

    const [toggle,setToggle] = React.useState(false)

    const [theme,setTheme] = React.useState(darkTheme)


    function handleToggle(){
        setToggle((prev) => !prev)
        setTheme(toggle===false?lightTheme:darkTheme)
    }


    const valObj = [toggle,handleToggle,theme]
    return (
        <ThemeContext.Provider value={valObj} >
            {children}
        </ThemeContext.Provider>
    )
}

export default DarkModeContext
