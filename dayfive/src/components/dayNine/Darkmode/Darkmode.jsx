import React from 'react'
import Sidebar from './Sidebar.jsx'
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import Profile from './Profile.jsx'
import Switch from '@mui/material/Switch';

import {ThemeContext} from './DarkModeContext.jsx'

function Darkmode() {

    const [toggle,handleToggle,theme] = React.useContext(ThemeContext)



    function handleSwitch(e){
        console.log(e.target.value);
        handleToggle()
    }
    return (
        <Wrapper background={theme.mainBackgroundColor}>
            <Sidebar/>
            <Main>
                <Paper style={{width:"96%",padding:"2%",backgroundColor:`${theme.cardBackground}`}}>
                    <Container color={theme.textColor}> 
                        <span>My dashboard</span>
                        <div>
                            <span>Light</span>
                            <Switch label="Dark"  
                            defaultChecked 
                            value = {toggle} 
                            onClick={(e) => handleSwitch(e)}
                            />
                            <span>Dark</span>
                        </div>
                    </Container>
                </Paper>
                <Profile />
            </Main>
        </Wrapper>
    )
}

export default Darkmode

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid black; */
    background: ${props => props.background};
    `
const Main = styled.div`
    margin-left:42px;
    margin-top: 50px;
    width: 470px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: 1px solid blue; */
`
const Container = styled.div`
    color: ${props => props.color};
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 2%; */
    &>span{
        font-size: 36px;
    }

`