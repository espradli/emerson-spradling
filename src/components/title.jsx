import React, { Component } from 'react';
import './title.css';

import ScrollTrigger from '@terwanerik/scrolltrigger'
//https://github.com/terwanerik/ScrollTrigger#migrating-from-0x-to-1x
//https://terwanerik.github.io/ScrollTrigger/

class Title extends Component {
  render() { 
    return ( 
      <center className="Title-text">Emerson <br /> Spradling</center>
     );
  }
}
 
export default Title;