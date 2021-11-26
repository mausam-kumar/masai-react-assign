import React,{useState,useEffect,useRef} from 'react'
import {Button} from '../Button.jsx'

function Application() {

    const [time,setTime] = useState(0)
    const manageStart = useRef(false)
    let timeId = useRef(null)
    let scroolTop = useRef(null)
    let imageVal = useRef(null)
    const [showImg,setShowImg] = useState(false)
    let picVal = useRef(null)

    function handleStart(){
        if (manageStart.current===true) {
            return
        }
        timeId.current = setInterval(() =>{
            setTime((prevState) => prevState+1)
            manageStart.current = true
        },1000)
    }

    function handlePause(){
        clearInterval(timeId.current)
        manageStart.current = false
    }

    function handleReset(){
        setTime(0)
        manageStart.current = false
        clearInterval(timeId.current)
    }

    function handleScroolTop(){
        // console.log(scroolTop.current);
        scroolTop.current.scrollTop = 0

    }

    function handleFile(){
        // console.log("selected");
        console.log(imageVal.current);
        console.log(imageVal.current.files[0]);

        const objectURL = URL.createObjectURL(imageVal.current.files[0])
        console.log(objectURL);
        
        setShowImg(true)
        // console.log(picVal.current.src);
        const idx = setTimeout(() =>picVal.current.src = objectURL,100)
    }

    

    return (
        <div style={{display:"flex",alignItems: "center",justifyContent: "center"}}>


            <div style={{color:"crimson"}}>
                <h2>Timer</h2>
                <h2>{time}</h2>
                <Button title="Start" color="green" handleClick={handleStart} />
                <Button title="Pause" color="orange" handleClick={handlePause} />
                <Button title="Reset" color="red" handleClick={handleReset} />
            </div>

            {/* First Bonus */}

            <div ref={scroolTop} style={{height:"400px",border:"1px solid red",overflow:"scroll",width:"300px",margin:"50px auto",padding:"20px"}}>    
                <div 
                style={
                    {height:"900px",
                    border:"1px solid black",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    
                    }}>
                    <div style={
                        {
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"space-between",
                        }
                    }>
                        <h1>Top</h1>
                    </div>
                    <Button title="Move to top" color="black" handleClick={handleScroolTop}/>
                </div>
            </div>


            {/* Second Bonus */}
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                <input ref={imageVal} type="file" name="imageUpd" id="imageUpd" />
                <Button title="Show Image" color="blue" handleClick={handleFile} />
                {showImg && <img height="100px" ref={picVal} src="" alt="image" />}
                
            </div>
        </div>
    )
}

export default Application
