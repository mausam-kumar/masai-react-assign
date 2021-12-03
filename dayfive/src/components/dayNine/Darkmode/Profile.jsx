import React from 'react'
import ProfileCard from './ProfileCard.jsx'
import Paper from '@mui/material/Paper';
import styled from 'styled-components'

import {ThemeContext} from './DarkModeContext.jsx'

function Profile() {
    const [toggle,handleToggle,theme] = React.useContext(ThemeContext)
    return (
        <Wrapper>
            <Paper style={{width:"452px",padding:"2%",backgroundColor:`${theme.cardBackground}`}}>
                <Heading color={theme.textColor}
                 background={theme.cardBackground}>
                    <strong>Active user</strong>
                    <small>for August 2020</small>
                </Heading>
            </Paper>
                <ProfileCard 
                    
                    username="Nrupul Dev"
                    city="Banglore"
                    country="India"
                    level="15"
                    points="4723"
                    color="#29CB97"
                />
                <ProfileCard 
                    
                    username="Snadhya"
                    city="Banglore"
                    country="India"
                    level="11"
                    points="2339"
                    color="#4072EE"
                />
                <ProfileCard 
                    
                    username="Elon Musk"
                    city="California"
                    country="USA"
                    level="6"
                    points="1884"
                    color="#B558F6"
                />
            
        </Wrapper>
    )
}

export default Profile

const Wrapper = styled.div`
    font-family:"Roboto";
    margin-top: 10px;
    color: ${(prop) => prop.color}
`
const Heading = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${prop => prop.color};
    /* background: ${prop => prop.background}; */
`