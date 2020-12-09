import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DancingBox from './animated/DancingBox';
import BookSaveNotification from './animated/BookSaveNotification';
import Divider from '@material-ui/core/Divider'
import {socket} from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,   
    margin:0,
    padding:0 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  customizeToolbar: {
    minHeight: 30,
    padding:1,
    margin:1
  }
}));

export default function NotificationBars(){
  return (
    <>
    <NotificationBar1/>
    <NotificationBar2/>
    </>
  );
}

function NotificationBar1() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      
        <Toolbar className={classes.customizeToolbar} variant='dense'>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="h6" className={classes.title}>
          <DancingBox type='user'/> 
          </Typography>
          {/* <Typography variant="h6" component="h6" className={classes.title}>
          <BookSaveNotification/> 
          </Typography> */}
          {/* <Divider orientation='vertical' style={{ backgroundColor: "#353535",}}/>
          <Typography variant="h6" component="h6" className={classes.title}>
          <DancingBox /> 
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      
    // </div>
  );
}

function NotificationBar2() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      
        <Toolbar className={classes.customizeToolbar} variant='dense'>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="h6" className={classes.title}>
          <DancingBox type='user'/> 
          </Typography> */}
          <Typography variant="h6" component="h6" className={classes.title}>
          <BookSaveNotification/> 
          </Typography>
          {/* <Divider orientation='vertical' style={{ backgroundColor: "#353535",}}/>
          <Typography variant="h6" component="h6" className={classes.title}>
          <DancingBox /> 
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      
    // </div>
  );
}
