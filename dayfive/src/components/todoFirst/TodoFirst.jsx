import React,{useState,useEffect} from 'react'
import Card from './Cards.jsx'
import PostTodo from './PostTodo.jsx'
import {Button} from '../Button.jsx'
import style from './TodoFirst.module.css'

function TodoFirst() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page,setPage] = useState(1)
    useEffect(() => {
        
        fetch(`http://localhost:3000/posts?_limit=3&_page=${page}`)
        .then((value) => value.json())
        .then((value) => {
            setData([...value])
            setLoading(false)

        })
        .catch((err) => console.log(err))
           

        
    },[page])

    async function handleToggle(id,status){
        const value = status==="false"?"true":"false"
        var payload = {
            status:value
        }

        const config = {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        await fetch(`http://localhost:3000/posts/${id}`,config)
        setPage((prevState) => prevState)
    }
    
    
    async function handleDelete(id){
        const config = {
            method: 'DELETE'
        }
        await fetch(`http://localhost:3000/posts/${id}`,config)
        setPage((prevState) => prevState)
    }

    function handlePage(e){
        switch (e.target.name) {
            case "PREV":
                if (page===1) {
                    setPage(1)
                }else{
                    setPage((prevState) => prevState-1)
                }
                break;
        
            case "NEXT":
                data.length<3?setPage((prevState) => prevState):setPage((prevState) => prevState+1)
                break;
        
            default:
                break;
        }
    }
    return (
        <div>
            <PostTodo />

            {loading===true?<>Loading...</>:data.map((ele) => <Card key={ele.id}  id ={ele.id} title={ele.title} status={ele.status} handleToggle = {handleToggle} handleDelete = {handleDelete} />)}


            {data.length>0 && <h3>Page Count : {page}</h3>}
            
            {data.length>0 && <div className={style.btnContainer}>
                <Button name="PREV" title="PREV" color="blue" handleClick={(e) => handlePage(e)} />
                <Button name="NEXT" title="NEXT" color="blue" handleClick={(e) => handlePage(e)} />
            </div>}
        </div>
    )
}

export {TodoFirst}
