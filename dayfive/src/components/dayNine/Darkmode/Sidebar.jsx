import React from 'react'
import Icons from './Icons'
import styled from 'styled-components'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import {ThemeContext} from './DarkModeContext.jsx'

function Sidebar() {

   const [toggle,handleToggle,theme] = React.useContext(ThemeContext)
    return (
        <Wrapper background={theme.sidebarColor}>
            <Figure>
                
            </Figure>
            <IconContainer>
                <Icons>
                    <BarChartOutlinedIcon />
                </Icons>
                <Icons>
                    <KeyboardDoubleArrowRightOutlinedIcon />
                </Icons>
                <Icons>
                    <ShoppingBasketOutlinedIcon />
                </Icons>
                <Icons>
                    <MessageOutlinedIcon />
                </Icons>
                <Icons>
                    <ContentPasteOutlinedIcon />
                </Icons>
                <Icons>
                    <SettingsOutlinedIcon />
                </Icons>
            </IconContainer>
            <Plus>
                <AddOutlinedIcon />
            </Plus>

        </Wrapper>
    )
}

export default Sidebar


const Wrapper = styled.div`
    width: 81px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0px;
    /* border: 1px solid red; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    height: 735px;
    background: ${prop => prop.background};

`
const Figure = styled.div`
    height: 40px;
    width:40px;
    /* border: 1px solid red; */
    border-radius: 50%;
    background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQFEL7C3Gbd4mg/profile-displayphoto-shrink_400_400/0/1637929434004?e=1643846400&v=beta&t=Ws5l5bPavLVKhRo46zPF9JhoQ-C7LyGdwz6uk-ATnaY");
    background-repeat:no-repeat;
    background-size: contain;
    background-position:center;
    background-color: orange ;
`
const IconContainer = styled.div`

`
const Plus = styled.div`
    height: 40px;
    width:40px;
    background: #29CB97;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`