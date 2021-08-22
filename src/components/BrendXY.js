import React from "react";
import effectLogo from '../image/logo-1.png';
import dataLogo from '../image/logo-2.png';
import Popup from './Popup'

function BrendXY() {
    return(
        <div className="brendXY">
            <Popup />
            <div className="brendXY__layer-1"/>
            <h2 className="brendXY__title">КЛЮЧЕВОЕ СООБЩЕНИЕ</h2>
            <h3 className="brendXY__product">BREND<span className="brendXY__product_type_bold">XY</span></h3>
            <div className="brendXY__wrapper">
                <div className="brendXY__effect">
                    <img className="brendXY__effect-logo" src={effectLogo} alt="Логотип блока"/>
                    <p className="brendXY__effect-text">Ehicula ipsum a arcu 
                        cursus vitae. Eu non 
                        diam phasellus 
                        vestibulum lorem sed 
                        risus ultricies
                    </p>
                </div>
                <div className="brendXY__data">
                    <img className="brendXY__data-logo" src={dataLogo} alt="Логотип блока"/>
                    <p className="brendXY__data-text">A arcu cursus vitae</p>
                    </div>
                <button className="brendXY__button"></button>
            </div>
        </div>
    )
}

export default BrendXY;