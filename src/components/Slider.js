import React from "react";
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Text from './Text'
import BrendXY from './BrendXY'

function Slider(props) {
    return(
        <>
            <Header />
            <div className="slider">
                {/*<Main className="slider__item" />
                <Text className="slider__item"/>*/}
                <BrendXY className="slider__item"
                    popupOpened={props.popupOpened}
                    closeAllPopups={props.closeAllPopups}
                    openPopup={props.openPopup}/>
            </div>
            <Footer/>
        </>
    )
}

export default Slider;