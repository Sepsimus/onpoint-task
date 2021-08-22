import React from "react";

function Text() {
    return(
        <div className="text__layer-1">
        <div className="text">
            <h2 className="main__greeting">привет,</h2>
            <h2 className="main__title">это 
                <span className="main__title_type_bold"> не </span> 
            коммерческое задание 
            <button className="main__button" /></h2>
        </div>
    </div>
    )
}

export default Text;