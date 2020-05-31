import React from 'react';
import { bookFont } from '@bit/bit.base-ui.theme.fonts.book';
import Tilt from 'react-tilt'
import { GithubLink } from '@bit/bit.evangelist.marketing.community-links.github-link'; //<GithubLink href="https://github.com/teambit/bit" starCount={500000} />
import webPhoto from '../images/Screen Shot 2020-05-31 at 1.33.52 PM.png'
import taxiPhoto from '../images/taxiDistanceClustering2.png'

const Projects = () => {
  const imgScale = 1.07
  const tiltMax = 15
  
  return (  
    <div className="columns is-vcentered is-centered" style={{margin: 'auto', height: '100vh'}}>
      <div className="column is-narrow">
        <div className={bookFont} style={{fontSize: 36}}>projects</div>
      </div>
      <div className="column">
        <Tilt className="Tilt" options={{ max : tiltMax, scale: imgScale }}>
          <img className='photo' src={webPhoto} alt=""/>
        </Tilt>
      </div>
      <div className="column">
        <Tilt className="Tilt" options={{ max : tiltMax, scale: imgScale }}>
          <img className='photo' src={taxiPhoto} alt=""/>
        </Tilt>
      </div>
      <div className="column"></div>
      {/* <div className="column"></div> */}
    </div>
  );
}
 
export default Projects;