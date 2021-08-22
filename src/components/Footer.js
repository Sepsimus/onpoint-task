import React from "react";
import footer_img from '../image/footer.png'

function Footer() {
    return(
        <div className="footer">
            <img className="footer__img" src={footer_img} alt='Логотип'/> 
        </div>
    )
}

export default Footer;