import React from 'react'
import {Card} from '@mui/material'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
function ReactSidebar() {
    return (
        <div>
            <Sidebar  title="Email" icons = "Email" >
                <MoveToInboxIcon />
                <h3>Email</h3>
            </Sidebar>
            <Sidebar  title="Email" icons = "Email" >
                <MailIcon />
                <h3>Starred</h3>
            </Sidebar>
            <Sidebar  title="Email" icons = "Email" >
                <MoveToInboxIcon />
                <h3>Send Email</h3>
            </Sidebar>
            <Sidebar  title="Email" icons = "Email" >
                <MoveToInboxIcon />
                <h3>Drafts</h3>
            </Sidebar>
            <Sidebar  title="Email" icons = "Email" >
                <MailIcon />
                <h3>All Mail</h3>
            </Sidebar>
            <Sidebar  title="Email" icons = "Email" >
                <MoveToInboxIcon />
                <h3>Trash</h3>
            </Sidebar>
        </div>
    )
}


function Sidebar({children}) {

    return(
        <div>
            <Card style={{width: '350px',color:"crimson",display:"flex",border: '1px solid black',justifyContent:"space-around",alignItems: 'center',margin:"20px auto"}}>
                {children}
            </Card>
        </div>
    )
}

export default ReactSidebar
