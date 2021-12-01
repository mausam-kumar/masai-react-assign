import React from 'react'
import {FormControl,Input,InputLabel,Button} from '@mui/material'
import '@fontsource/roboto/500.css';
function CreditCard() {
    return (
        <div style={{width: '350px',margin: '0 auto',color:"red"}}>
            <h2 style={{color:"grey",fontWeight:"600"}}>Payment Details</h2>
            <InputSpace>
                <InputLabel htmlFor="component-simple">Cardholder Name</InputLabel>
                <Input id="component-simple" style={{width:"350px"}} />
            </InputSpace>
            <InputSpace>
                <InputLabel htmlFor="component-simple">CardNumber</InputLabel>
                <Input id="component-simple" style={{width:"350px"}} />
            </InputSpace>
            <div style={{display: 'flex',justifyContent:"space-between",alignItems: 'center'}}>
                <InputSpace>
                    <InputLabel htmlFor="component-simple">Expiry Month</InputLabel>
                    <Input id="component-simple" style={{width:"100px"}} />
                </InputSpace>
                <InputSpace>
                    <InputLabel htmlFor="component-simple">Expiry Year</InputLabel>
                    <Input id="component-simple" style={{width:"100px"}} />
                </InputSpace>
                <InputSpace>
                    <InputLabel htmlFor="component-simple">CVC</InputLabel>
                    <Input id="component-simple" style={{width:"100px"}} />
                </InputSpace>
            </div>
            <h2 style={{color:"grey",fontWeight:"600"}}>Payment Amount :</h2>
            <Button style={{backgroundColor:"crimson",width:"100px"}} variant="contained">Pay</Button>
        </div>
    )
}

export default CreditCard


function InputSpace({children,width}){

    return(
        <div>
            <FormControl variant="standard">
                
                {children}
                
            </FormControl>
        </div>
    )
}