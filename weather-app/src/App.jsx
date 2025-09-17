import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';

import WeatherApp from './WeatherApp';
import Footer from './Footer';
function App() {
  return(
    <div style={{textAlign:'center'}}>
    <WeatherApp/>
      <Footer/>
    </div>
  );
}

export default App
