import React from "react";

function Main() {
    return(
        <div className="main">
            <p className="main__greeting">привет,</p>
            <h2 className="main__title">это 
                <span className="main__title main__title_type_bold"> не </span> 
            коммерческое задание</h2>
            <button className="main__button"> &#8594; Что дальше?</button>
        </div>
    )
}

export default Main;