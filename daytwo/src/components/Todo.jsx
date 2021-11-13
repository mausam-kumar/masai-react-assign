import React,{useState} from 'react';
import style from "./Todo.module.css";
import TodoItem from "./TodoItem";

function Todo(){

    const [array,setArray] = useState([{id:0,value:"",status:false}])
    const [target,setTarget] = useState("")

    function handleChange(e){
        setTarget(e.target.value)
        // console.log(e.target.value);
    }
    function handleClick(array){
        const element = {
            id:array.length,
            value:target,
            status:"false"
        }
        // console.log(element);
        setArray([...array,element])
    }
    return(
        <React.Fragment>
            <div className={style.mainDiv}>
                <input type="text" placeholder="Write Something" className={style.inpVal} onChange={handleChange} />
                <button onClick={() => handleClick(array)} className={style.addBtn}>ADD</button>
            </div>
            <div>
                {
                    array.map(function(element, index) {
                        if (element.value.length>0) {
                            
                            return(
                                <TodoItem element={element} />
                            )
                        }
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Todo;