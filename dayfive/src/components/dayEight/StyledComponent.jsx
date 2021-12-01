import React from 'react'
import styled from 'styled-components'


function StyledComponent() {
    return (
        <Wrapper>
            <ContainerLeft>
                <p>LOGO</p>
            </ContainerLeft>
            <ContainerRight>
                <p>TRY VEDAS</p>
                <p>Learn</p>
                <p>Resources</p>
                <p>About</p>
            </ContainerRight>
        </Wrapper>
    )
}

export default StyledComponent


const Wrapper = styled.div`

    background-color: black;
    color: white;

    display:flex;
    justify-content: space-around;
    `
const ContainerLeft = styled.div`

    font-weight: 600;
    font-size: 25px;
    text-align:left;
    p{
        color:crimson;
    }
    width:40%;

`
const ContainerRight = styled.div`

    display:flex;
    justify-content: space-around;
    font-weight:500;
    align-items: center;
    width:70%;

`