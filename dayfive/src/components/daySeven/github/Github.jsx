import axios from 'axios'
import React,{useEffect,useState} from 'react'

import {Button} from '../../Button.jsx'
import GithubCard from './GithubCard.jsx'

function Github() {

    const [state,setState] = useState("")
    const [data,setData] = useState([])
    const [ready,SetReady] = useState()


    function handleState(e){
        
        setState(e.target.value)
    }

    async function fetchData(){
        SetReady(false)
        try {
            const config = {
                url : `https://api.github.com/search/users?q=${state}&per_page=10`,
                method:'get',
    
            }
            
            const data = await axios(config);
            setData(data.data.items)
            
            SetReady(true)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div>
                <input type="text" value={state} name="inputField" id="inputField" placeholder="Enter Name" onChange={(e) => handleState(e)} />
                <Button title="Search" color="red" handleClick={fetchData} />
            </div>
            <div>
                {
                    ready===false?<h2>Loading...</h2>:
                    <div>
                        {data.map((ele) => {
                            return(
                                <GithubCard key={ele.id} username={ele.login} imageUrl={ele.avatar_url} profileUrl={ele.html_url} />
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default Github
