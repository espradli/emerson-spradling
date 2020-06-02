import React from 'react';
// import './App.css';
import './App.sass';

//Component Imports
import Title from './components/title'
// import Navigation from './components/navigation'
import IconTray from './components/iconTray'
import AboutMe from './components/aboutMe';
import Projects from './components/projects'
import Resume from './components/resume'

function App() {
  return (
    <div className="App">
        <div className="Background">
          {/* <Navigation /> */}
          <Title />
          {/* <AboutMe /> */}
          {/* <Projects /> */}
          <IconTray />
        </div>
        <div className="Background">
          <AboutMe />
        </div>
        <div className="Background">
          <Projects />
        </div>
        <div className="Background">
          <Resume />
        </div>
    </div>
  );
}


export default App;
