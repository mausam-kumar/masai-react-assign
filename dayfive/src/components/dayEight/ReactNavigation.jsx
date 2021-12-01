import React from 'react'
import {Card} from '@mui/material'
// import styled from 'styled-components'

function ReactNavigation() {
    return (
        <Card style={{display: 'flex',justifyContent:"space-around",alignItems: 'center',fontWeight:"500"}}>
            <div>
                <TextLabel>
                    Site Name
                </TextLabel>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",alignItems: 'center'}}>
                <TextLabel>
                    About Us
                </TextLabel>
                <TextLabel>
                    Prices
                </TextLabel>
                <TextLabel>
                    Start Page
                </TextLabel>
                <TextLabel>
                    Offer
                </TextLabel>
                <TextLabel>
                    Contact
                </TextLabel>
            </div>
        </Card>
    )
}

export default ReactNavigation

function TextLabel({children}){

    return(
        <div>
            <Card style={{width:"200px",padding:"10px"}}>
                {children}
            </Card>
        </div>
    )
}


// const Header = styled.div`
//     display:flex;
//     justify-content:space-around;
// `