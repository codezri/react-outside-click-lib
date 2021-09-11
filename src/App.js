import { useState } from 'react';
import { InfoBox as InfoBox1 } from './components/InfoBoxFunctional.js';
import { InfoBox as InfoBox2 } from './components/InfoBoxClassBased.js';
import OutsideClickHandler from 'react-outside-click-handler';

function App() {
  let [showInfo1, setShowInfo1] = useState(false);
  let [showInfo2, setShowInfo2] = useState(false);

  return (
    <div className="container">
      <div className="info-box-wrapper">
        <button onClick={() => {setShowInfo1(true)}} style={{marginRight: '4px'}}>Show InfoBox Functional</button>
        <OutsideClickHandler onOutsideClick={() => {setShowInfo1(false)}}>
          <InfoBox1 show={showInfo1} message="Click outside to close this"/>
        </OutsideClickHandler>
      </div>
      <div className="info-box-wrapper">
        <button onClick={() => {setShowInfo2(true)}}>Show InfoBox Class-based</button>
        <OutsideClickHandler onOutsideClick={() => {setShowInfo2(false)}}>
          <InfoBox2 show={showInfo2} message="Click outside to close this"/>
        </OutsideClickHandler>
      </div>
    </div>
  );
}

export default App;
