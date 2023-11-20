import React, { useState, useEffect } from 'react';
import './home.css';
import OpenStreetMap from '../google/Maps';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHospitalMessage, setShowHospitalMessage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldShowMap = windowWidth >= 650;

  const showHospital = () => {
    setShowHospitalMessage(true);
    // Função para obter o hospital mais proximo.
  };

  return (
    <>
      {shouldShowMap && <OpenStreetMap />}
      <div style={{ marginTop: '20px' }}>
        <button className='near-hospital' onClick={showHospital}>
          Hospital mais próximo
        </button>
        {showHospitalMessage && (
          <p>O hospital mais próximo de você é: </p>
        )}
      </div>
    </>
  );
};

export default App;


