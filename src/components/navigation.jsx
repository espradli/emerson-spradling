import React from 'react';
import './navigation.css';

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//https://blog.hubspot.com/marketing/jump-link-same-page
//https://material-ui.com/components/transitions/#transitions

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: '100%',
    height: '100%',
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));


const Navigation = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div>
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <text> hello</text>
            </svg>
          </Paper>
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}
 
export default Navigation;

// class Navigation extends Component {

  //https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

  // constructor(props) {
  //   super(props);
  //   this.wrapperRef = React.createRef();
  // }

  // handleClick() {
  //   const wrapper = this.wrapperRef.current;
  //   wrapper.classList.toggle('is-nav-open')
  // }

  // render() {
  //   return(
  //     <div ref={this.wrapperRef} className="wrapper">
  //       <div className="nav">
  //         <button 
  //           className="nav__button"
  //           onClick={() => this.handleClick()}
  //         />

  //         <div className="nav__bar">
  //           {/* Insert Links for  */}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
// }
 
// export default Navigation;