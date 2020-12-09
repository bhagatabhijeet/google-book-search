import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import {socket} from '../../App';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
 
  },
  snackbar:{
    color:'#fff',
    backgroundColor:'#263124',
    padding:15,
    margin:5,
    borderRadius:5,
    fontSize:15
  }
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [book,setBook] =React.useState({});

  useEffect(() => {
    socket.on('booksaved',(bookName,author)=>{
      setBook({bookName,author})   
      setOpen(true);  
      console.log(bookName);
    });
  });

  // const handleClick = () => {
  //   // setOpen(true);
  //   socket.emit('booksaved',"Abhi's book","Abhijeet");
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} TransitionComponent={TransitionLeft}
      anchorOrigin={{ vertical:'top', horizontal:'center' }}
      className={classes.snackbar}
      >
        
        <div>
          {`Book '${book.bookName}' by: ${book.author} was saved as favorite`}
          </div>
        
      </Snackbar>
      
    </div>
  );
}
