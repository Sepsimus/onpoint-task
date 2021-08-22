import React from "react";
import page1 from '../image/page-1.png'

function Popup() {
    let pageImage = page1;
    return(
        <div className="popup popup_opened">
            <div className="popup__layer-1"/>            
            <div className="popup__wrapper">
                <h2 className="popup__title">ПРЕИМУЩЕСТВА</h2>
                <h3 className="popup__product">BREND<span className="popup__product_type_bold">XY</span></h3>
                <button className="popup__exit"/>
                <ul className="popup__list">
                    <li className="popup__list-position">
                        <span className="popup__list-number">01</span>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit
                    </li>
                    <li className="popup__list-position">
                        <span className="popup__list-number">02</span>
                        Faucibus pulvinar elementum integer enim
                    </li>
                    <li className="popup__list-position">
                        <span className="popup__list-number">03</span>
                        Faucibus pulvinar elementum integer enim
                    </li>
                    <li className="popup__list-position"></li>
                    <li className="popup__list-position"></li>
                    <li className="popup__list-position"></li>
                </ul>
                <div className="popup__footer">
                    <button className="popup__arrow" />
                    <img src={pageImage} alt="Страница" className="popup__page-image"/>
                    <button className="popup__arrow"/>
                </div>
            </div>
        </div>

    )
}

export default Popup;