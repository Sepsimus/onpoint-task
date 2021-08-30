import React from "react";
import page1 from '../image/page-1.png';
import page2 from '../image/page-2.png';
import animationFive from '../image/animationFive.png'
import animationSix from '../image/animationSix.png'
import animationSeven from '../image/animationSeven.png'
import animationEight from '../image/animationEight.png'
import animationNine from '../image/animationNine.png'
import animationTen from '../image/animationTen.png'
import animationEleven from '../image/animationEleven.png'
import animationTwelve from '../image/animationTwelve.png'

function Popup(props) {

    React.useEffect(() => {
        setPage(1)
    },[props.popupOpened])

    const [page, setPage] = React.useState(1);

    function nextPage(){
        setPage(2);
    }

    function previousPage(){
        setPage(1);
    }

    const popupClass = props.popupOpened ? 'popup_opened' : '';
    let popupFirstPage = page === 1 ? '' : 'popup__list-position_hidden'
    let popupSecondPage = page === 2 ? '' : 'popup__list-position_hidden'
    let pageImage = page === 1 ? page1 : page2;
    return(
        <div className={`popup ${popupClass}`}>
            <div className="popup__layer-1"/>
            <img className="popup__animation-one" src={animationFive} alt='пузырь' />
            <img className="popup__animation-two" src={animationSix} alt='пузырь' />
            <img className="popup__animation-three" src={animationSeven} alt='пузырь' />
            <img className="popup__animation-four" src={animationEight} alt='пузырь' />
            <img className="popup__animation-five" src={animationNine} alt='пузырь' />
            <img className="popup__animation-six" src={animationTen} alt='пузырь' />
            <img className="popup__animation-seven" src={animationEleven} alt='пузырь' />
            <img className="popup__animation-eight" src={animationTwelve} alt='пузырь' />          
            <div className="popup__wrapper">
                <h2 className="popup__title">ПРЕИМУЩЕСТВА</h2>
                <h3 className="popup__product">BREND<span className="popup__product_type_bold">XY</span></h3>
                <button className="popup__exit" type="button" onClick={props.closeAllPopups}/>
                <ul className="popup__list">
                    <li className={`popup__list-position ${popupFirstPage}`}>
                        <span className="popup__list-number">01</span>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit
                    </li>
                    <li className={`popup__list-position ${popupFirstPage}`}>
                        <span className="popup__list-number">02</span>
                        Faucibus pulvinar elementum integer enim
                    </li>
                    <li className={`popup__list-position ${popupFirstPage}`}>
                        <span className="popup__list-number">03</span>
                        Faucibus pulvinar elementum integer enim
                    </li>
                    <li className={`popup__list-position ${popupSecondPage}`}>
                        <span className="popup__list-number">04</span>
                        Mi bibendum neque egestas congue quisque 
                        egestas diam
                    </li>
                    <li className={`popup__list-position ${popupSecondPage}`}>
                        <span className="popup__list-number">05</span>
                        Venenatis lectus magna fringilla urna
                    </li>
                    <li className={`popup__list-position ${popupSecondPage}`}>    
                        <span className="popup__list-number">06</span>
                        Venenatis lectus magna fringilla urna
                    </li>
                </ul>
                <div className="popup__footer">
                    <button className="popup__arrow" type="button" onClick={previousPage}/>
                    <img src={pageImage} alt="Страница" className="popup__page-image"/>
                    <button className="popup__arrow" type="button" onClick={nextPage}/>
                </div>
            </div>
        </div>

    )
}

export default Popup;