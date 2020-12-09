import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DancingBox from './animated/DancingBox';

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
    </>
  );
}

function NotificationBar1() {
  const classes = useStyles();

  return (      
        <Toolbar className={classes.customizeToolbar} variant='dense'>
      
          <Typography variant="h6" component="h6" className={classes.title}>
          <DancingBox type='user'/> 
          </Typography>
        </Toolbar>

  );
}

