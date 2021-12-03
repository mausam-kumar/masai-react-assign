import React from 'react'
import styled from 'styled-components'

function Icons({children}) {

    return (
        <div>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    )
}

export default Icons

const Wrapper = styled.div`
    width : 81px;
    height : 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #B8C5D3;
    transition: all .3s ease-in-out;
    :hover{
        background: linear-gradient(180deg, #679CF6 0%, #4072EE 100%);
        box-shadow: 0px 5px 15px #ACB2C1;
        border-radius: 5px;
        transform: translateX(10px);
        color: white;
        /* transform: matrix(-1, 0, 0, 1, 0, 0); */
    }

`