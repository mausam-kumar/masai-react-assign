import React,{useState,createContext} from 'react';

export const AuthContext = createContext()

function AuthContextProvider({children}){

    const [isAuth,setIsAuth] = useState("false")
    const [token,setToken] = useState("")
    
    function toggleAuth(){
        setIsAuth(isAuth==="false"?"true":"false")

    }

    var varialbleObj = [isAuth,toggleAuth,setToken,token]
    return(
        <AuthContext.Provider value={varialbleObj}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
