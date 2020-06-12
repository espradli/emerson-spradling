import React from 'react';
import './App.sass';
//Component Imports
import Title from './components/title'
import IconTray from './components/iconTray'
import AboutMe from './components/aboutMe';
import Projects from './components/projects'
import Resume from './components/resume'
// import Navigation from './components/navigation'


function App() {

  return (    
    <div className='App'>
      <div className="Background">
          {/* <Navigation /> */}
          <Title />
          <IconTray />
        </div>
        <div className="Background">
          <AboutMe />
          <div style={{height: '10vh'}} />
          <Projects />
          <div style={{height: '10vh'}} />
          <Resume />
        </div>
    </div>
  );
}


export default App;
