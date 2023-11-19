import React from 'react';
import './home.css'
import OpenStreetMap from '../google/Maps';

const App = () => {
  return(
  <div>  
    <OpenStreetMap/>
    <button>Hospital mais proximo</button>
  </div>
  )
}

export default App