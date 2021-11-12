import React from 'react';
import "./Button.module.css"

function Button({title,color}){
    const cssStyle = {
        backgroundColor: `${color}`,
        height: "50px",
        width: "200px",
        borderRadius:"50px",
        border: "none",
        outline: "none",
        cursor: "pointer",
        color: "white",
        fontWeight: "600",
        fontSize: "22px",
        marginTop:"20px"
    }
    return (
        <React.Fragment>
            <button className="btn" style={cssStyle}>{title}</button>
        </React.Fragment>
    )
}

export default Button