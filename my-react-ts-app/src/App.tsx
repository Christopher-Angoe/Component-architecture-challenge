import { Component, useState } from 'react';
import Recomendations from './Components/Recomendations';
import Completion from './Components/Completion';
import AccountForm from './Components/AccountForm';
import UploadPhoto from './Components/UploadPhoto';
import InterestsForm from './Components/InterestsForm';
import { StyledContainer } from './Components/styles';
import { backImg, boyImg, manLaptopImg, womanImg, womanLatopImg } from './assets';

function App() {
  const [activeComponent, setActiveComponent] = useState(0);

  const components = [
    <AccountForm />,
    <UploadPhoto />,
    <InterestsForm />, 
    <Recomendations />,
    <Completion />,
  ];

  const images = [
    boyImg,
    boyImg,
    manLaptopImg,
    womanLatopImg,
    womanImg,
  ];

  const handleContinue = () => {
    setActiveComponent((prevIndex) => (prevIndex + 1) % components.length);
  };

  const hideNavbar = activeComponent === components.length - 1;

  return (
    <>
      <StyledContainer>
        <div className="container">
          <div className="left">
            <img src={images[activeComponent]} alt="" />
          </div>
          <div className="right">
            {!hideNavbar && (
              <div className="navbar">
                <button><img src={backImg} alt="" />Back</button>
                <p>
                  Step {activeComponent + 1} of {components.length - 1}
                </p>
                <button>Exit</button>
              </div>
            )}
            {components[activeComponent]}
            <button className="primary-btn" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </StyledContainer>
    </>
  );
}

export default App;
