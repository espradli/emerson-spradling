import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const IconTray = () => {
  const container = {
    textAlign: 'right',
    position: 'fixed',
    padding: 10,
    bottom: 0,
    left: 0
  }

  return ( 
      <div style= {container}>
        <a href="http://www.linkedin.com/in/emersonspradling">
          <LinkedInIcon style={{ color: '#FFFFFF' }}/>
        </a>
        <br />
        <a href="http://www.github.com/espradli"> 
          <GitHubIcon style={{ color: '#FFFFFF' }}/>
        </a>
        <br />
        <a href="https://www.instagram.com/emerson_spradling/">
          <InstagramIcon style={{ color: '#FFFFFF' }}/>
        </a>
        <br />
        <a href="https://twitter.com/emersonspradlin">
          <TwitterIcon style={{ color: '#FFFFFF' }}/>
        </a>
      </div>
   );
}
 
export default IconTray;