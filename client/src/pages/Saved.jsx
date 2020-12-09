import React, { useEffect, useState } from "react";
import { Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTitle from "../components/animated/CustomTitle";
import API from "../utils/API";
import MuiSavedBookCard from "../components/MuiSavedBookCard";
import { socket } from "../App";

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
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    setItems([]);    
    const fetchData = async () => {
      const savedBooks = await API.getBooks();
      // console.log(savedBooks.data) //retained for debugging
      setItems(savedBooks.data);
    };

    fetchData();
  }, [removed]);

  const handleRemove = (title, authors, id) => {    
    API.deleteBook(id)
      .then((res) => {
        // console.log(res); //retained for debugging
        socket.emit("bookremoved", title, authors, id);

        setRemoved(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="main">
      <CustomTitle />
      <Paper className={classes.paper}>
        <p style={{ textAlign: "center" }}>Saved / Favorite books</p>
      </Paper>

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
          <MuiSavedBookCard key={index} removeHandler={handleRemove} data={b}>
            {b.title}
          </MuiSavedBookCard>
        ))}
      </Paper>
    </Container>
  );
}

export default Saved;
