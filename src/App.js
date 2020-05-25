import React from 'react';
import './App.css';

//Component Imports
import Title from './components/title'
import Navigation from './components/navigation'
import IconTray from './components/iconTray'

function App() {

  return (
    <div className="App">
        <header /> 
        <div className="Background">
          {/* <Navigation /> */}
          <Title />
          <IconTray />
        </div>
        <footer />

        <header />
        <div className="Background">
          <center>TEST <br /> TEST</center>
        </div>
        <footer />
    </div>
  );
}

export default App;
