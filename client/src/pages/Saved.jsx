import React, { useEffect, useState } from "react";
import { Paper, Container, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CustomTitle from "../components/animated/CustomTitle";
import MUIBookCard from "../components/MuiBookCard";
import API from '../utils/API';
import MuiSavedBookCard from "../components/MuiSavedBookCard";
import {socket} from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  paper: {
    backgroundColor: "#2ba2ff",
    color: "#fff",
    fontSize: 20,
    margin: 30,
    boxSizing: "border-box",
    padding: 30,
  },
  paper1: {
    color: "blue",
    fontSize: 20,
    margin: 5,
    boxSizing: "border-box",
    padding: 5,
  },
  button: {
    backgroundColor: "#2ba2ff",
    margin: 10,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#228adc",
    },
  },
}));

function Saved() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [url, setUrl] = useState(``);
  const [removed,setRemoved] =useState(false);

  // function handleChange(event) {
  //   event.preventDefault();
  // }

  // function handleSearch(event) {
  //   event.preventDefault();
  //   console.log("Submitted: " + searchTerm);
  //   setUrl(
  //     `https://books.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCT4ndO_FO6f72PXHqey5q-SOSGNb7aS0U`
  //   );
  // }

  useEffect(() => {
    setItems([]);
    console.log("I am in useeffect");
    const fetchData = async () => {
      // const result = await axios(url);

      const savedBooks = await API.getBooks();
      // const savedBookIds =savedBooks.data.map(s=>s.bookid);
      // result.data.items.map(element => {
      //   if(savedBookIds.includes(element.id)){
      //     element.alreadySaved=true;
      //   return {...element};
      // }else{
      //   element.alreadySaved=false;
      //   return {...element};
      // }
      // });
      console.log(savedBooks.data) //retained for debugging
      setItems(savedBooks.data);
    };

    fetchData();

    // setSearchTerm("");

    // *** useEffect clean up method
    // return () => {
    //   setUrl("");
    // };
  }, [removed]);

  const handleRemove=(title,authors,id)=>{
    // event.preventDefault();
    console.log('REMOVING',id);
    API.deleteBook(id)
    .then(res => {
      console.log(res); 
      socket.emit('bookremoved',title,authors,id);
      // alert(`New book ${newSavedBookArray[0].volumeInfo.title} has been saved!`)
      setRemoved(true);
  })
  .catch(err => console.log(err));
  }


  return (
    <Container className="main">
      <CustomTitle />
      <Paper className={classes.paper}>
        <p style={{ textAlign: "center" }}>
          Saved / Favorite books
        </p>
      </Paper>

      {/* <Paper className={classes.paper1}>
        <form noValidate autoComplete="off" onSubmit={handleSearch}>
          <TextField
            id="searchterm"
            label="Book Title"
            fullWidth
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter Book Title Here"
            value={searchTerm}
          />
          <Button type="button" className="btn" onClick={handleSearch}>
            Search
          </Button>
          <Button type="button" className="btn">
            Clear
          </Button>
        </form>
      </Paper> */}

      <Paper className={classes.paper1}>
        <p
          style={{
            color: "white",
            backgroundColor: "#2ba2ff",
            textAlign: "center",
          }}
        >
          Saved Books
        </p>

        {items.map((b, index) => (
          
          <MuiSavedBookCard
            key={index}
            // description={b.volumeInfo.description}
            // bookName={b.volumeInfo.title}
            // pageCount={b.volumeInfo.pageCount}
            // image={
            //   typeof b.volumeInfo.imageLinks === "undefined"
            //     ? ""
            //     : b.volumeInfo.imageLinks.smallThumbnail
            // }
            removeHandler={handleRemove}
            data={b}
          >{b.title}</MuiSavedBookCard>
        ))}
      </Paper>
    </Container>
  );
}

export default Saved;
