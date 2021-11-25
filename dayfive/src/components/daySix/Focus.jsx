import React,{useEffect,useRef} from 'react'

function Focus() {

    let focusInp = useRef(null)

    useEffect(() => {
        console.log(focusInp.current);
    },[])

    function handleFocus(){
        focusInp.current.focus();
    }
    return (
        <div>
            <input ref={focusInp} type="text" placeholder="Enter Something"/>
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}

export default Focus
