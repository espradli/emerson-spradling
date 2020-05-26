import React from 'react';
import './App.css';

//Component Imports
// import Title from './components/title'
// import Navigation from './components/navigation'
import IconTray from './components/iconTray'
import AboutMe from './components/aboutMe';

function App() {

  return (
    <div className="App">
        <header /> 
        <div className="Background">
          {/* <Navigation /> */}
          {/* <Title /> */}
          <AboutMe />
          <IconTray />
        </div>
        <footer />
    </div>
  );
}

export default App;
