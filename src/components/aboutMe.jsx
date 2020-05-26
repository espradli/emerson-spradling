import React from 'react';
import Paper from '@material-ui/core/Paper';
import imgPath from '../images/IMG_2499.jpeg'

const AboutMe = () => {
  const titleContainer = {
    position: 'absolute',
    display:'inline-block',
    top: '15vh', 
    left: 50,
  }
  const textContainer = {
    position: 'absolute',
    display:'inline-block',
    top: '15vh', 
    right: 50,
    width: '30vw'
  }

  const photo = {
    position: 'absolute',
    top: '15vh',
    left: '30vw', 
    width: '30vw',
    border: '1px solid #021a40'
  }
  
  return ( 
    <React.Fragment>
      <div style={titleContainer}>
        <h1>About Me</h1>
      </div>
      <Paper elevation={4}>
        <svg style={{width:100, height: 100}}>
        </svg>
      </Paper>
      <img style={photo} src={imgPath} alt=""/>
      <div style={textContainer}>
        <div >
          <ul style={{listStyle: 'none', paddingLeft: 0, alignContent: 'right'}}>
            <li> Austin Resident</li>
            <li>Trinity University Class of 2021</li>
            <li>Computer Science Major and Business Minor</li>
            <li>Resident Assistant</li>
            <li>Basketball and Tennis Player</li>
            <li>Fitness Enthusiast</li>
            <li>French Horn Finatic</li> 
            <li>Sunset Chaser</li>
          </ul>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam  
            ursus neque felis. Vivamus accumsan blandit nibh ut lacinia. 
            Aenean condimentum arcu eget neque pellentesque, id semper 
            eros ornare. Phasellus vitae sapien lacus. Vestibulum venenatis 
            purus eros, ac tincidunt neque viverra et. Quisque rutrum turpis 
            odio, id hendrerit tortor convallis non. Nam sed urna in libero 
            molestie accumsan. Maecenas molestie elit eros, quis tincidunt 
            ipsum finibus et. Cras vestibulum libero sit amet arcu aliquam, id 
            mollis li bero ultricies. Nunc scelerisque non augue non elementum. 
            Nam at nibh ultricies, dictum justo et, sodales mi.
          </p>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default AboutMe;