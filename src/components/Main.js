import React from "react";

function Main() {
    return(
            <div className="main">
            <div className="main__layer-1" />
                <p className="main__greeting">ПРИВЕТ,</p>
                <h2 className="main__title">ЭТО 
                    <span className="main__title_type_bold"> НЕ </span> 
                    КОММЕРЧЕСКОЕ ЗАДАНИЕ 
                    <button className="main__button" />
                </h2>
        </div>
    )
}

export default Main;