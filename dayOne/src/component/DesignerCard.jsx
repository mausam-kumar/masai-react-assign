import React from 'react';
import Button from './Button'
import style from "./DesignerCard.module.css"
function DesignerCard({imgURL,title,description,price,updatedPrice}){

    return(
        <div className={style.designer}>
            <img src={imgURL} className={style.designerImage} alt={title} />
            <h2>{title}</h2>
            <h4>{description}</h4>
            <div className={style.btnContainer}>
                <h1>{price}</h1>
                <h1>{updatedPrice}</h1>
                <Button title="Order Now" color="red" />
            </div>
        </div>
    )
}

export default DesignerCard