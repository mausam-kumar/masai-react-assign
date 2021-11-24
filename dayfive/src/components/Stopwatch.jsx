import React,{useState,useEffect} from 'react';
import {Button} from './Button.jsx'


function Stopwatch(){

    const [state,setState] = useState(0)
    const [hideState,setHideState] = useState("Hide")

    const [startState,setStartState] = useState({title:"Pause",color:"orange"})

    function handleHide(){
        if (hideState==="Hide") {
            setHideState("Show")
        }else{
            setHideState("Hide")
        }
    }

    useEffect(() => {
        // console.log("Running UseEffect...");
        const id = setInterval(() => {
            setState((prevState) => prevState+1)
            // console.log("Timer running...");
            console.log("interval id",id);
        },1000)

        if (startState.title==="Start") {
            
            clearId(id)
        }
        return () => {
            clearInterval(id)
            // console.log("Cleanup id",id);
            // console.log("Running cleanup..");
        }
    },[startState,hideState])

    function handleStartChange(){
        if (startState.title==="Pause") {
            const config = {
                title: "Start",
                color: "green"
            }
            setStartState(config)
        }else{
            
            const config = {
                title: "Pause",
                color: "orange"
            }
            setStartState(config)
        }
    }

    function handleReset(){
        const config = {
            title: "Start",
            color: "green"
        }
        setStartState(config)
        setState(0)
    }

    function clearId(id){
        clearInterval(id)
    }

    return(
        <>
            {hideState==="Hide"?<h1 style={{color:"navyblue",fontSize:"42px"}}>Count : {state}</h1>:<></>}
            <Button title={startState.title} color={startState.color} handleClick={handleStartChange} />
            <Button title="Reset" color="red" handleClick={handleReset} />
            <Button title={hideState} color="black" handleClick={handleHide} />
        </>
    )
}

export {Stopwatch}

console.log();
console.log();
console.log();