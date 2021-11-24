import React,{useState,useEffect} from 'react'
import {Button} from './Button.jsx'
function Timer() {

    const [start,setStart] = useState(0)
    const [stop,setStop] = useState(0)
    const [display,setDisplay] = useState(start)

    function handleStart(){
        const id = setInterval(() => {
            setDisplay((prevState) => {
                if (prevState<stop) {
                    return prevState + 1
                }else{
                    clearInterval(id)
                    return prevState
                }
            })
            
        },1000)
    }

    // useEffect(() =>{
    //     const id = setInterval(() => {
    //         setDisplay((prevState) => {
    //             if (prevState<stop) {
    //                 return prevState + 1
    //             }else{
    //                 clearInterval(id)
    //                 return prevState
    //             }
    //         })
    //         console.log("useEffect Interval id",id);
    //     },1000)

    //     return () => {
    //         clearInterval(id)
    //     }
    // },[btnText])

    function handleTextArea(e){
        switch (e.target.name) {
            case "start value":
                setStart(parseInt(e.target.value))
                setDisplay(parseInt(e.target.value))
                
                break;
            case "end value":
                setStop(parseInt(e.target.value))
            break;
        
            default:
                break;
        }


    }
    return (
        <div>
            <input type="number" 
            name="start value"
            placeholder="Enter Start Time in seconds" 
            onChange={(e) => handleTextArea(e)}
            style={{margin:"20px",padding:"10px"}} 
            />

            <input type="number" 
            name="end value"
            placeholder="Enter End Time in seconds" 
            onChange={(e) => handleTextArea(e)}
            style={{margin:"20px",padding:"10px"}} 
            />
            <h1>Count : {display}</h1>
            <Button title="Start" color="red" handleClick={handleStart}/>
            
        </div>
    )
}

export {Timer}
