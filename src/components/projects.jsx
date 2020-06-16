import React from 'react';
import './projects.scss';
import { bookFont } from '@bit/bit.base-ui.theme.fonts.book';
import Button from '@material-ui/core/Button';
import { blueGrey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Tilt from 'react-tilt'
import webPhoto from '../images/Screen Shot 2020-05-31 at 1.33.52 PM.png'
import taxiPhoto from '../images/taxiDistanceClustering2.png'



const Projects = () => {
  const imgScale = 1.03
  const tiltMax = 15 
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: 'white', //theme.palette.getContrastText(purple[500]),
      backgroundColor:  'rgb(83, 86, 89)', //blueGrey[700], // https://material-ui.com/customization/color/
      '&:hover': {
        backgroundColor: blueGrey[900],
      },
    },
  }))(Button)


  return (  
    <div className="columns is-centered" style={{margin: 'auto'}}>
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      
      <div className="column is-narrow">
        <div className={bookFont} style={{fontSize: 36, fontWeight: 'bold'}}>projects</div>
      </div>

      <div className="column">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child" style={{textAlign: 'center'}}>
              <Tilt className="Tilt" options={{ max : tiltMax, scale: imgScale }}>
                <img style={{maxHeight: 300}} src={webPhoto} alt=""/>
              </Tilt>
            </article>
            <article className="tile is-child">
              <div className={bookFont} style={{ fontWeight: 'bold', fontSize: 22 }}>spradling.dev</div>
              <div className={bookFont}> 
                This website! As my first attempt at front-end, I built this personal webiste using React.js and deployed it using Github pages. 
                This is an ongoing side project where I hope to add content as I learn more about front-end development.
              </div>

              <ColorButton variant="contained" color="primary" style={{marginTop: 10, color: 'white'}} href="https://github.com/espradli/EmersonSpradling">
                GitHub
              </ColorButton>
            </article>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child" style={{textAlign: 'center'}}>
                <Tilt className="Tilt" options={{ max : tiltMax, scale: imgScale }}>
                  <img className='photo' style={{maxHeight: 300}} src={taxiPhoto} alt=""/>
                </Tilt>
              </article>
              <article className="tile is-child">
                <div className={bookFont} style={{ fontWeight: 'bold', fontSize: 22 }}>Chicago Transportation</div>
                <div className={bookFont}> 
                  Chicago Transportation is an analisis over a Chicago Taxi dataset (72gb). 
                  I used Apache Spark in Scala to apply a few machine learning algorithms to the dataset on a 
                  local distributed system. I produced a writeup that is on the gitub page with my results. 
                  I hope to pick this project back up and connect the taxi dataset to other Chicago transportation 
                  datasets.
                </div>

                <ColorButton variant="contained" color="primary" style={{marginTop: 10, color: 'white'}} href="https://github.com/espradli/chicago-transportation">
                  GitHub
                </ColorButton>
              </article>
            </div>
        </div>
      </div>

      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      {/* <div className="column"></div> */}
    </div>
  );
}
 
export default Projects;