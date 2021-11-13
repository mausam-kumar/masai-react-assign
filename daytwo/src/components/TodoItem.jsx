import React ,{useState} from 'react';
import style from "./TodoItem.module.css";

function TodoItem({element}){

    var [elemStatus,setElemStatus] = useState(element.status)

    function handleToggle(elemStatus){
        if (elemStatus==="false") {
            setElemStatus("true")
        }else{
            setElemStatus("false")
        }
    }
    return(
        <React.Fragment>
            <div className={style.mainDiv}>
                <p className={style.para}>{element.id}</p>
                <p className={style.para}>{element.value}</p>
                <p className={style.para}>{elemStatus}</p>
                <button onClick={() => handleToggle(elemStatus)} className={style.btnToggle}>Toggle</button>
            </div>
        </React.Fragment>
    )
}

export default TodoItem