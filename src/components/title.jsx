import React, { Component } from 'react';
import './title.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

//https://github.com/terwanerik/ScrollTrigger#migrating-from-0x-to-1x
//https://terwanerik.github.io/ScrollTrigger/

class Title extends Component {
  render() { 
    const arrow = {
      position:'absolute', 
      bottom: 0,
      fontSize: 50
    }

    return ( 
      <div>
        <center className="Title-text">Emerson <br /> Spradling</center> 
        <center><KeyboardArrowDownIcon style={arrow} /></center> 
      </div>
     );
  }
}
 
export default Title;