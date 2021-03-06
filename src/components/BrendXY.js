import React from "react";
import effectLogo from '../image/logo-1.png';
import dataLogo from '../image/logo-2.png';
import Popup from './Popup'
import animationFive from '../image/animationFive.png'
import animationSix from '../image/animationSix.png'
import animationSeven from '../image/animationSeven.png'
import animationEight from '../image/animationEight.png'
import animationNine from '../image/animationNine.png'
import animationTen from '../image/animationTen.png'
import animationEleven from '../image/animationEleven.png'
import animationTwelve from '../image/animationTwelve.png'

function BrendXY(props) {
    return(
        <div className="brendXY">
            <Popup
                popupOpened={props.popupOpened}
                closeAllPopups={props.closeAllPopups}
            />
            <div className="brendXY__layer-1"/>
            <img className="brendXY__animation-one" src={animationFive} alt='пузырь' />
            <img className="brendXY__animation-two" src={animationSix} alt='пузырь' />
            <img className="brendXY__animation-three" src={animationSeven} alt='пузырь' />
            <img className="brendXY__animation-four" src={animationEight} alt='пузырь' />
            <img className="brendXY__animation-five" src={animationNine} alt='пузырь' />
            <img className="brendXY__animation-six" src={animationTen} alt='пузырь' />
            <img className="brendXY__animation-seven" src={animationEleven} alt='пузырь' />
            <img className="brendXY__animation-eight" src={animationTwelve} alt='пузырь' />
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
                <button className="brendXY__button" type="button" onClick={props.openPopup}></button>
            </div>
        </div>
    )
}

export default BrendXY;