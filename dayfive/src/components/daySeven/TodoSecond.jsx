import React,{useState,useEffect} from 'react'
import Card from './Cards.jsx'
import PostTodo from './PostTodo.jsx'
import {Button} from '../Button.jsx'
import style from './TodoFirst.module.css'
import axios from 'axios'

function TodoSecond() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [toggleLoad,setToggleLoad] = useState(false)

    useEffect(async () => {
        const urlLink = `http://localhost:3000/posts?_limit=3&_page=${page}`
        const config = {
            url : urlLink,
            method:"get"

        }
        try {
            const value = await axios(config) 

            setData([...value.data])
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    },[page,toggleLoad])

    

    async function handleToggle(id,status){
        const value = status==="false"?"true":"false"
        var payload = {
            status:value
        }

        const config = {
            url:`http://localhost:3000/posts/${id}`,
            method: "patch",
            data: payload,
        }

        await axios(config)

        setToggleLoad(toggleLoad===true?false:true)
    }

    async function handleDeleteStatus(id,title){
        const config = {
            url:`http://localhost:3000/posts/${id}`,
            method: 'put',
            data:{
                title:title
            }
        }
        try {
            await axios(config)
            setToggleLoad(toggleLoad===true?false:true)
            
        } catch (error) {
            console.log(error);
        }
    }
    
    
    async function handleDelete(id){
        const config = {
            url : `http://localhost:3000/posts/${id}`,
            method: 'DELETE'
        }
        await axios(config)
        setToggleLoad(toggleLoad===true?false:true)
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
            <PostTodo handleRefresh={() => setToggleLoad(toggleLoad===true?false:true) } />

            {loading===true?<>Loading...</>:data.map((ele) => <Card key={ele.id}  id ={ele.id} title={ele.title} status={ele.status} handleToggle = {handleToggle} handleDelete = {handleDelete} handleDeleteStatus = {handleDeleteStatus} />)}


            {data.length>0 && <h3>Page Count : {page}</h3>}
            
            {data.length>0 && <div className={style.btnContainer}>
                <Button name="PREV" title="PREV" color="blue" handleClick={(e) => handlePage(e)} />
                <Button name="NEXT" title="NEXT" color="blue" handleClick={(e) => handlePage(e)} />
            </div>}
        </div>
    )
}

export {TodoSecond}
