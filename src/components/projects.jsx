import React from 'react';
import './projects.scss';
import { bookFont } from '@bit/bit.base-ui.theme.fonts.book';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import Tilt from 'react-tilt'
import webPhoto from '../images/Screen Shot 2020-05-31 at 1.33.52 PM.png'
import taxiPhoto from '../images/taxiDistanceClustering2.png'

const Projects = () => {
  const imgScale = 1.03
  const tiltMax = 15

  return (  
    <div className="columns is-centered" style={{margin: 'auto', height: '100vh'}}>
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      
      <div className="column is-narrow">
        <div className={bookFont} style={{fontSize: 36}}>projects</div>
      </div>

      <div className="column">
        <Tilt className="Tilt" options={{ max : tiltMax, scale: imgScale }}>
          <img src={webPhoto} alt=""/>
        </Tilt>
        <div className={bookFont} style={{ fontWeight: 'bold', fontSize: 22 }}>spradling.dev</div>
        <div className={bookFont} style={{fontSize: 14}}> 
          This website! As my first attempt at front-end, I built this personal webiste using React.js and deployed it using Github pages. 
          This is an ongoing sideproject where I hope to add content as I learn more about front-end development.
        </div>

        <Button variant="contained" color="primary" style={{marginTop: 10}}href="https://github.com/espradli/EmersonSpradling">
          Github
        </Button>
      </div>

      <div className="column">
        <Tilt className="Tilt" options={{ max : tiltMax, scale: imgScale }}>
          <img className='photo' src={taxiPhoto} alt=""/>
        </Tilt>
        <div className={bookFont} style={{ fontWeight: 'bold', fontSize: 22 }}>Chicago Transportation</div>
        <div className={bookFont} style={{fontSize: 14}}> 
          Chicago Transportation is an analisis over a Chicago Taxi dataset (72gb). 
          I used Apache Spark in Scala to apply a few machine learning algorithms to the dataset on a 
          local distributed system. I produced a writeup that is on the gitub page with my results. 
          I hope to pick this project back up and connect the taxi dataset to other Chicago transportation 
          datasets.
        </div>

        <Button variant="contained" color="primary" style={{marginTop: 10}}href="https://github.com/espradli/chicago-transportation">
            GitHub
        </Button>

      </div>

      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      {/* <div className="column"></div> */}
    </div>
  );
}
 
export default Projects;