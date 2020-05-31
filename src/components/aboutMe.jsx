import React from 'react';
import { bookFont } from '@bit/bit.base-ui.theme.fonts.book';
import imgPath from '../images/IMG_2499.jpeg'


const AboutMe = () => {
  return ( 
    <div className="columns is-vcentered is-centered" style={{margin: 'auto', height: '100vh'}}>
      <div className="column">  
        <div className={bookFont} style={{fontSize: 36}}>about me</div>
      </div>
      <div className="column">
        <img className='photo' src={imgPath} alt=""/>
      </div>
      <div className="column">
        <div >
          <ul className={bookFont} style={{listStyle: 'none', paddingLeft: 0, alignContent: 'right'}}>
            <li>Austin Resident</li>
            <li>Trinity University Class of 2021</li>
            <li>Computer Science Major and Business Minor</li>
            <li>Resident Assistant</li>
            <li>Basketball and Tennis Player</li>
            <li>Fitness Enthusiast</li>
            <li>French Horn Finatic</li> 
            <li>Sunset Chaser</li>
          </ul>
        </div>
        <br />
        <div>
          <p className={bookFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam  
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
    </div>
   );
}
 
export default AboutMe;