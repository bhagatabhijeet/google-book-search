import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { socket } from "../../App";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  snackbar: {
    color: "#fff",
    backgroundColor: "#263124",
    padding: 15,
    margin: 5,
    borderRadius: 5,
    fontSize: 15,
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [book, setBook] = React.useState({});

  useEffect(() => {
    socket.on("booksaved", (bookName, author) => {
      setBook({ bookName, author });
      setOpen(true);      
    });

    socket.on("bookremoved", (bookName, author, id) => {
      setBook({ bookName, author, id });
      setOpen(true);      
    });
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        className={classes.snackbar}
      >
        <div>
          {book.id
            ? `Book(${book.id}) '${book.bookName}' by: ${book.author} was removed from saved books`
            : `Book '${book.bookName}' by: ${book.author} was saved as favorite`}
        </div>
      </Snackbar>
    </div>
  );
}
