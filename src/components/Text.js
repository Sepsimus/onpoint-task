import React from "react";
import scroller from '../image/scroll.png'

function Text(props) {
    const [scrollTopPosition, setScrollTopPosition] = React.useState(-10);
    const [textTopPosition, setTextTopPosition] = React.useState(0);
    const [positionY, setPositionY] = React.useState(0);
    const [lastPositionY, setLastPositionY] = React.useState(0);
  
    React.useEffect(() => {
        setScrollTopPosition(-10);
        setTextTopPosition(0);
    }, [props.substrateClass])

    const scrollPosition = {
        top: `${scrollTopPosition}px`
    }

    const textPosition = {
        top: `${textTopPosition}px`
    }

    function firstScrollPosition(event){
        setPositionY(event.touches[0].screenY);
      }
    
      function lastScrollPosition(event){
        setLastPositionY(event.touches[0].screenY);
        let scroll = lastPositionY - positionY;
        if (scroll > 340) scroll = 340;
        if (scroll < 0) scroll = 0;
        setScrollTopPosition(-10 + scroll);
        setTextTopPosition(-(Math.trunc(scroll * 0.79)))
      }

    return(
        <div className="text">
        <div className="text__layer-1" />
            <h2 className="text__title">ТЕКСТ СООБЩЕНИЯ</h2>
            <div className="text__wrapper">
                <div className="text__scroller"><img style={scrollPosition} className="text__scroller-img" src={scroller} alt='Ползунок'
                    onTouchMove={lastScrollPosition} 
                    onTouchStart={firstScrollPosition}/></div>
                <div className="text__message-wrapper">
                    <p className="text__message" style={textPosition}>
                        <span className="text__message_type_bold">Lorem ipsum dolor sit amet, </span>consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi 
                            tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget 
                            felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam 
                            dignissim diam quis enim lobortis. Est sit amet facilisis magna. 
                            Neque laoreet suspendisse interdum consectetur libero id. 
                            Nec ullamcorper sit amet risus nullam eget felis eget. 
                            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. 
                            Euismod quis viverra nibh cras pulvinar mattis nunc. 
                            Massa massa ultricies mi quis. Sit amet massa vitae tortor 
                            condimentum lacinia. Et malesuada fames ac turpis egestas 
                            integer eget. Elementum pulvinar etiam non quam lacus suspendisse 
                            faucibus interdum posuere.

                            Amet justo donec enim diam vulputate ut pharetra sit. 
                            Risus ultricies tristique nulla aliquet enim tortor at auctor. 
                            Velit sed ullamcorper morbi tincidunt ornare massa. 
                            Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim 
                            diam quis enim. Gravida neque convallis a cras. Ut enim blandit 
                            volutpat maecenas volutpat. Mauris sit amet massa vitae tortor 
                            condimentum lacinia quis vel.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text;