import React from 'react';
import { bookFont } from '@bit/bit.base-ui.theme.fonts.book';
import Button from '@material-ui/core/Button';
import imgPath from "../images/EmersonSpradling_Resume.pdf"


const Resume = () => {
  return ( 
    <div className="columns is-centered" style={{margin: 'auto', height: '100vh'}}>
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      <div className="column is-narrow">  
        <div className={bookFont} style={{fontSize: 36}}>resume</div>
      </div>

      <div className="column">
        <iframe title="Resume" src={imgPath} width="90%" height='90%'/>
        <Button variant="contained" color="primary" style={{marginTop: 10} } href={imgPath} download="EmersonSpradling_Resume">
          Download
        </Button>
      </div>
      
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
    </div>
   );
}
 
export default Resume;