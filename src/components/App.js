import React from 'react';
import Slider from './Slider';

function App() {

  const [popupOpened, setPopupOpened] = React.useState(false);

  function openPopup(){
    setPopupOpened(true)
  }

  function closeAllPopups(){
    setPopupOpened(false)
  }

  return (
    <div className="substrate">
        <Slider 
          popupOpened={popupOpened}
          closeAllPopups={closeAllPopups}
          openPopup={openPopup}/>
    </div>
  );
}

export default App;
