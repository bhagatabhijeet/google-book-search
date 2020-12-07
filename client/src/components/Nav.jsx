import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import book from "../assets/book.png";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#2ba2ff",
    color: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link href="/">
              <img src={book} alt={book} height={30} />
            </Link>
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Google Books Search
          </Typography>
          <Button color="inherit" href="/search">
            Search
          </Button>
          <Button color="inherit" href="/saved">
            Saved
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
