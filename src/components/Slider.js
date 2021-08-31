import React from "react";
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Text from './Text'
import BrendXY from './BrendXY'

function Slider(props) {
    let sliderClass;
    switch(props.position){
        case(0) : 
            sliderClass = 'slider__first-page';
            break;
        case(-1024) : 
            sliderClass = 'slider__second-page';
            break;
        case(-2048) :
            sliderClass = 'slider__third-page';
            break; 
        default: 
            console.log("ERROR");
    }
    return(
        <>
            <Header 
                returnMainPage={props.returnMainPage}
            />
            <div className={`slider ${sliderClass}`}
                onTouchEnd={props.swipeSide} 
                onTouchMove={props.lastSwipePosition} 
                onTouchStart={props.firstSwipePosition}>
                <Main className="slider__item"
                    nextPage={props.nextPage}
                />
                <Text className="slider__item"
                    substrateClass={props.substrateClass}/>
                <BrendXY className="slider__item"
                    position={props.position}
                    popupOpened={props.popupOpened}
                    closeAllPopups={props.closeAllPopups}
                    openPopup={props.openPopup}/>
            </div>
            <Footer/>
        </>
    )
}

export default Slider;