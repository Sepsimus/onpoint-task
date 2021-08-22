import React from "react";
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Text from './Text'
import BrandXY from './BrandXY'

function Slider() {
    return(
        <>
            <Header />
            <div className="slider">
                <Main className="slider__item" />
                {/*<Text className="slider__item"/>
                <BrandXY className="slider__item"/>*/}
            </div>
            <Footer/>
        </>
    )
}

export default Slider;