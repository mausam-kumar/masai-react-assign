import React from 'react';
import {PaymentCard} from './PaymentCard'

function Payment(){
    return(
        <div>
            <PaymentCard date="28/10/2020"
             heading="Amazon Gift" 
            subHeading="Pay"
            device="Desktop - Mobile"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            color="#FFA500"
            />
            <PaymentCard date="17 Sep 2020"
             heading="Apple Gift" 
            subHeading="Payment"
            device="mac-OS - Mobile"
            imageUrl="https://seeklogo.com/images/A/apple-logo-E3DBF3AE34-seeklogo.com.png"
            color="#F5F5F5"
            />
        </div>
    )
}

export {Payment}