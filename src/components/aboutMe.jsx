import React from 'react';
import { bookFont } from '@bit/bit.base-ui.theme.fonts.book';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import imgPath from '../images/IMG_2499.jpeg'


const AboutMe = () => {
  const icon = { 
    fontSize: 20, 
    position: 'relative',
    top: 3
  }


  return ( 
    <div className="columns is-centered" style={{margin: 'auto'}}>
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      <div className="column is-narrow">  
        <div className={bookFont} style={{fontSize: 36, fontWeight: 'bold'}}>about me</div>
      </div>

      <div className="column is-narrow" style={{textAlign: 'center'}}>
        <img className='photo' style={{maxHeight: 500}} src={imgPath} alt=""/>
      </div>
      
      <div className="column">
        <div >
          <ul className={bookFont} style={{listStyle: 'none', paddingLeft: 0, alignContent: 'right'}}>
            <li> <HomeIcon style={icon}/> Austin resident</li>
            <li> <SchoolIcon style={icon}/> Trinity University Class of 2021</li>
            <li> <ComputerIcon style={icon}/> Computer science major and business minor</li>
            <li> <WorkIcon style={icon}/> Resident assistant</li>
            <li> <SportsBasketballIcon style={icon}/> Basketball and tennis player</li>
            <li> <FitnessCenterIcon style={icon}/> Fitness enthusiast</li>
            <li> <MusicNoteIcon style={icon}/> French horn fanatic</li> 
            <li> <WbSunnyIcon style={icon}/> Sunset chaser</li>
          </ul>
        </div>
        <br />
        <div>
          <p className={bookFont} style={{maxWidth: 500}}>
            My whole life I have been fascinated with how things work. When I was young, 
            I would sit in the car for hours trying to determine the function of each button and knob. 
            My curiosity has translated directly to my passion for computer science as I continue to 
            push myself to learn more about all aspects of full-stack development. Through this, 
            I have found an interest in machine learning and big data because of the intriguing use of 
            computers to find patterns in data that humans would not have seen otherwise. I hope to 
            continue to learn more about the everchanging field of computer science as I progress in my 
            career!
          </p>
        </div>
      </div>

      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
    </div>
   );
}
 
export default AboutMe;