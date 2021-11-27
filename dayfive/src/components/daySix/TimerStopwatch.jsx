import React,{useState,useRef} from 'react'
import {Button} from '../Button.jsx'
function TimerStopwatch() {

    const [shift,setShift] = useState(false)
    const [name,setName] = useState("Stopwatch")

    const stopwatchId = useRef(null)
    const [stopwatchTime,setStopwatchTime] = useState(0)
    const [checkSStatus,setCheckSStatus] = useState(false)

    const [timerState,setTimerState] = useState({
        hour:"hour",
        minute:"minute",
        second:"second"
    })

    let [totalTime,setTotalTime] = useState(0)
    let timerId = useRef(null)

    const [checkTStatus,setCheckTStatus] = useState(false)


    function handleSopwatchStart(){
        if (checkSStatus===true) {
            return
        }
        setCheckSStatus(true)
        stopwatchId.current = setInterval(() =>{
            setStopwatchTime(prevState => prevState+1)
        },10)
    }

    function handleShift(){
        if (shift===false) {
            setName("Timer")
            setShift(true)
        }else{
            setName("Stopwatch")
            setShift(false)
        }
    }

    function handleSopwatchReset(){
        setStopwatchTime(0)

        clearInterval(stopwatchId.current)
        setCheckSStatus(false)
    }
    
    function handleSopwatchPause(){
        setCheckSStatus(false)
        clearInterval(stopwatchId.current)
    }

    function handleTimerState(e){
        const val = e.target.name
        setTimerState({...timerState,[val]:e.target.value})
        // console.log(timerState);
    }

    async function handleTimerStart(){

        if (checkTStatus===true) {
            return
        }
        
        let value = Number(isNaN(Number(timerState.hour))===true?0:Number(timerState.hour)*3600) + Number(isNaN(Number(timerState.minute))===true?0:Number(timerState.minute)*60) + Number(isNaN(Number(timerState.second))===true?0:Number(timerState.second))
        

        setCheckTStatus(true)
         
        setTotalTime(value)

        timerId.current = setInterval(() => {

            setTotalTime((prevState) => {
                if (prevState===0) {
                    clearInterval(timerId.current)
                    setCheckTStatus(false)
                    return 0
                }else{
                    return prevState-1
                }
            })
        },1000)

    }

    function handleTimerPause(){
        setCheckTStatus(false)
        clearInterval(timerId.current)
    }

    function handleTimerReset(){
        setCheckTStatus(false)
        clearInterval(timerId.current)
        setTotalTime(0)
    }

    return (
        <div>
            <Button title= {`Switch to ${name}`} color="orange" handleClick={handleShift} />
            {
                shift===true?
                <div>
                    <h1>Stopwatch</h1>
                    <div style={{ display: 'flex',justifyContent: 'center',color:"crimson",fontSize:"30px"}}>

                        <h2 style={{ marginRight: "10px",width:"100px"}}>{(Math.floor((stopwatchTime/6000)))%60}m</h2>
                        <h2 style={{ marginRight: "10px",width:"100px"}}>{(Math.floor(stopwatchTime/100))%60}<small>s</small> </h2>
                        <h2 style={{ marginLeft: "10px",width:"100px"}}>{stopwatchTime%100}</h2>
                    </div>
                    <div>
                        <Button title="Start" color="green  " handleClick={handleSopwatchStart}/>
                        <Button title="Pause" color="orange  " handleClick={handleSopwatchPause}/>
                        <Button title="Reset" color="red  " handleClick={handleSopwatchReset}/>
                    </div>
                </div>
                :
                 <div style={{marginTop:"20px"}}>
                     <h1>Timer</h1>
                     <div>
                        <input value={timerState.hour} onChange={(e) => handleTimerState(e)} type="number" name="hour" id="" placeholder="Hour" style={{padding:"1%",borderRadius:"10px",border:"2px solid crimson",width:"80px",margin:"10px"}} />

                        <input value={timerState.minute} onChange={(e) => handleTimerState(e)} type="number" name="minute" id="" placeholder="Minute" style={{padding:"1%",borderRadius:"10px",border:"2px solid crimson",width:"80px",margin:"10px"}} />

                        <input value={timerState.second} onChange={(e) => handleTimerState(e)} type="number" name="second" id="" placeholder="Second" style={{padding:"1%",borderRadius:"10px",border:"2px solid crimson",width:"80px",margin:"10px"}} />
                     </div>

                    <div style={{ display: 'flex',justifyContent: 'center',color:"crimson",fontSize:"30px"}}>
                        <h2 style={{ marginRight: "10px",width:"100px"}}>{(Math.floor(totalTime/3600))}H</h2>
                        <h2 style={{ marginRight: "10px",width:"100px"}}>{(Math.floor(totalTime/60))%60}m </h2>
                        <h2 style={{ marginLeft: "10px",width:"100px"}}>{totalTime%60}s</h2>
                    </div>
                     <div>
                        <Button title="Start" color="green  " handleClick={handleTimerStart}/>
                        <Button title="Pause" color="orange  " handleClick={handleTimerPause}/>
                        <Button title="Reset" color="red  " handleClick={handleTimerReset}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default TimerStopwatch
