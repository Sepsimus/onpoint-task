import React from "react";
import animationOne from '../image/animationOne.png'
import animationTwo from '../image/animationTwo.png'
import animationThree from '../image/animationThree.png'
import animationFour from '../image/animationFour.png'

function Main(props) {
    return(
            <div className="main">
            <div className="main__layer-1" />
            <img className="main__animation-one" src={animationOne} alt='сфера' />
            <img className="main__animation-two" src={animationTwo} alt='сфера' />
            <img className="main__animation-three" src={animationThree} alt='сфера' />
            <img className="main__animation-four" src={animationFour} alt='сфера' />
                <p className="main__greeting">ПРИВЕТ,</p>
                <h2 className="main__title">ЭТО 
                    <span className="main__title_type_bold"> НЕ </span> 
                    КОММЕРЧЕСКОЕ ЗАДАНИЕ 
                    <button className="main__button" type="button" onClick={props.nextPage}/>
                </h2>
        </div>
    )
}

export default Main;