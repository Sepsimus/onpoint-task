import React from 'react';
import Slider from './Slider';

function App() {

  const [position, setPosition] = React.useState(0);
  const [popupOpened, setPopupOpened] = React.useState(false);
  const [positionX, setPositionX] = React.useState(0);
  const [lastPositionX, setLastPositionX] = React.useState(0);

  if(position > 0){
    setPosition(0);
  }

  if(position < -2048){
    setPosition(-2048);
  }

  React.useEffect(() => {
    setPosition(0)
  }, [])

  function returnMainPage(){
    setPosition(0);
  }

  function nextPage(){
    setPosition(-1024);
  }

  function firstSwipePosition(event){
    setPositionX(event.touches[0].screenX);
  }

  function lastSwipePosition(event){
    setLastPositionX(event.touches[0].screenX);
  }

  function swipeSide(){
    if(lastPositionX === 0) return
    if(lastPositionX - positionX < -20){
      setPosition(position - 1024);
      setPositionX(0);
      setLastPositionX(0);
      return
    }
    if(lastPositionX - positionX > 20){
      setPosition(position + 1024);
      setPositionX(0);
      setLastPositionX(0);
      return
    }
  }

  function openPopup(){
    setPopupOpened(true)
  }

  function closeAllPopups(){
    setPopupOpened(false)
  }

  let substrateClass;
  switch(position){
      case(0) : 
        substrateClass = 'substrate__first-page';
          break;
      case(-1024) : 
        substrateClass = 'substrate__second-page';
          break;
      case(-2048) :
        substrateClass = 'substrate__third-page';
          break; 
      default: 
          console.log("ERROR");
  }

  return (
    <div className={`substrate ${substrateClass}`} >
        <Slider 
          substrateClass={substrateClass}
          swipeSide={swipeSide} 
          lastSwipePosition={lastSwipePosition} 
          firstSwipePosition={firstSwipePosition}
          position={position}
          returnMainPage={returnMainPage}
          nextPage={nextPage}
          popupOpened={popupOpened}
          closeAllPopups={closeAllPopups}
          openPopup={openPopup}/>
    </div>
  );
}

export default App;
