import React from "react";

function CategoryItem({label, src}){
    return(
        <React.Fragment>
            <img src={src} alt={label} />
        </React.Fragment>
    )
}

export default CategoryItem;