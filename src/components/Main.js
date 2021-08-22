import React from "react";

function Main() {
    return(
        <div className="main__layer-1">
        <div className="main">
            <p className="main__greeting">привет,</p>
            <h2 className="main__title">это 
                <span className="main__title_type_bold"> не </span> 
            коммерческое задание 
            <button className="main__button" /></h2>
        </div>
        </div>
    )
}

export default Main;