import React,{useState,useEffect,useRef} from 'react'
import {Button} from '../Button.jsx'
function TimerStopwatch() {

    const [shift,setShift] = useState(false)
    const [name,setName] = useState("Stopwatch")

    function handleShift(){
        if (shift===false) {
            setName("Timer")
            setShift(true)
        }else{
            setName("Stopwatch")
            setShift(false)
        }
    }

    return (
        <div>
            <Button title= {`Switch to ${name}`} color="orange" handleClick={handleShift} />
            {
                shift===true?
                <div>
                    Stopwatch
                </div>
                :
                 <div>
                     Timer
                </div>
            }
        </div>
    )
}

export default TimerStopwatch
