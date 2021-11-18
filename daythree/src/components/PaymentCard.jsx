import React from 'react';
import style from './Payment.module.css'
import {Button} from './Button'

function PaymentCard({date,heading,subHeading,imageUrl,device,color}){
    return(
        <div className={style.mainCard} style={{backgroundColor:color}}>
            <div className={style.mainCardLeft}>
                <date>{date}</date>
                <Button style={{}} title="Case Study" color="black" />
                <p>{heading}</p>
                <p>{subHeading}</p>
                <p>{device}</p>
            </div>
            <div className={style.mainCardRight}>
                <img src={imageUrl} alt={heading} />
                <p>→</p>
            </div>
        </div>
    )
}

export {PaymentCard}