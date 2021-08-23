import React from "react";

function Header(props){
    return(
        <header className="header">
            <button className="header__main-link" type="button" onClick={props.returnMainPage}/>
        </header>
    )
}

export default Header;