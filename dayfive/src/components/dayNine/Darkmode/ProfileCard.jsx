import React from 'react'
import Paper from '@mui/material/Paper';
import styled from 'styled-components'
import {ThemeContext} from './DarkModeContext.jsx'


function ProfileCard({username,city,country,level,points,color}) {
    const design = {
        width:"452px",
        padding:"2%",
        fontFamily:"Roboto",
        marginTop:"2px",
        cursor:"pointer",
    }

    const [toggle,handleToggle,theme] = React.useContext(ThemeContext)
    return (
        // 
        <Paper style={{...design,
        color:`${theme.textColor}`,
        backgroundColor: `${theme.cardBackground}`
        }}>
            <Header color={theme.textColor}>
                <Figure>
                    
                </Figure>
                <SubContainer>
                    <strong>{username}</strong>
                    <p>{city}, {country}</p>
                </SubContainer>
                <Dot>
                    <strong>...</strong>
                </Dot>
            </Header>
            <Footer>
                <Progress color={color}>
                    <meter value={level/20}></meter>
                </Progress>
                <Description>
                    <p>Professional Level {level}</p>
                    <strong>{points} Points</strong>
                </Description>
            </Footer>
        </Paper>

    )
}

export default ProfileCard


const Header = styled.div`
    display:flex;
    justify-content:flex-start;
    `
const Figure = styled.div`
    height: 40px;
    width:40px;
    border-radius: 50%;
    background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQFEL7C3Gbd4mg/profile-displayphoto-shrink_400_400/0/1637929434004?e=1643846400&v=beta&t=Ws5l5bPavLVKhRo46zPF9JhoQ-C7LyGdwz6uk-ATnaY");
    background-repeat:no-repeat;
    background-size: contain;
    background-position:center;
    `
const Footer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    `
const SubContainer = styled.div`
    margin-left: 20px;
    color: ${props => props.color};
    font-weight:400;
    size:14px;
    text-align: left;

`
const Progress = styled.div`
    width: 100%;
    &>meter {
        width:100%;
        height: 15px;
        margin: 0px;
    }

    &>meter::-webkit-meter-bar{
        border-radius: 8px;
        background: #E5E9F2;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

    meter::-webkit-meter-optimum-value {
        height: 100%;
        background-blend-mode:passthrough;
        border-radius:5px;
        background-image: linear-gradient(
            ${(props) => props.color} 0%, 
            ${(props) => props.color} 100%
        );
        background-size: 100% 100%;
        box-shadow: 0px 5px 10px 0px #0000001A;

    }
`
const Description = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const Dot = styled.div`

    margin-left: 60%;
`
