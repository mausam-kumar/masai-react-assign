import React,{useState,useEffect,useRef} from 'react'
import Form from './Form.jsx'
import UserCard from './UserCard.jsx'
import axios from 'axios'
import style from './UserDetail.module.css'
import {Button} from '../../Button.jsx'

function UserDetail() {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [refresh,setRefresh] = useState(false)
    const filterData = useRef(null)
    const [pageNo,setPageNo] = useState(1)

    function handleSort(){
        setData([...data.sort((a,b) => a.salary-b.salary)])
    }

    async function handleFilter(){
        const config = {
            method: 'GET',
            url:`http://localhost:3000/userdetail?_page=${pageNo}&_limit=4`
        }
        const returnValue = await axios(config)
        console.log(returnValue.data);
        
        setData([...returnValue.data.filter((ele) => ele.department == filterData.current.value)])
        
    }

    useEffect(() => {
        (
            async () => {

                setLoading(true)
                const config = {
                    method: 'GET',
                    url:`http://localhost:3000/userdetail?_page=${pageNo}&_limit=4`
                }
                const returnValue = await axios(config)
                setData([...returnValue.data])
                setLoading(false)
            }
        )()
    },[refresh,pageNo])
    return (
        <div className={style.mainContainer}>
            <Form handleRefresh={() => setRefresh(refresh===true?false:true)} className={style.mainForm} />
            {
                loading===true?<h1>Loading...</h1>:
                <div>
                    <div style={{display: 'flex',justifyContent:"space-around"}}>
                        <Button title="Sort" color="orange" handleClick={handleSort} />
                        <div>
                            <select ref={filterData} name="department" id="department">
                                <option value="Select Dept">Select Dept</option>
                                <option value="CSE">CSE</option>
                                <option value="IT">IT</option>
                                <option value="ECE">ECE</option>
                                <option value="ETC">ETC</option>
                            </select>
                            <Button title="Filter" color="blue" handleClick={handleFilter} />
                        </div>
                    </div>
                    {
                        data.map((ele) => {
                            return(
                                <UserCard handleRefresh={() => setRefresh(refresh===true?false:true)} key={ele.id} ele={ele} />
                            )
                        })
                    }
                </div>
            }
            <div style={{display:"flex",flexDirection: "column",justifyContent: "space-around",width:"250px"}}>
                <h2>Page Count ={pageNo}</h2>
                <Button title="Prev Page" color="blue" handleClick={() =>setPageNo((prev) => prev===1?1:prev-1)}/> 
                <Button title="Next Page" color="blue" handleClick={() =>setPageNo((prev) => data.length<4?prev:prev+1)}/> 
            </div>
        </div>
    )
}

export default UserDetail
