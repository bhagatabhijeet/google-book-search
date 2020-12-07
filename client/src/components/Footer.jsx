import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import socketIcon from "../assets/Socket-IO-Logo.png";
import MUIIcon from "../assets/mui-icon.png";
import ReactIcon from "../assets/React-Logo.png";
import MongoIcon from "../assets/mongo-logo.png";
import GithubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/bhagatabhijeet/google-book-search"
        target="_blank"
      >
        Google Book Search
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "45vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: "auto",
    backgroundColor: "#2ba2ff",
    color: "#ffffff",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    bottom: 0,
    margin: "0 auto",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    height: "180px",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#c9c1c1",
    margin: 15,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Grid Container className={classes.footer}>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <h6>Powered By</h6>
          </Grid>
          <Grid item>
            <Link color="inherit" href="https://socket.io/" target="_blank">
              <Tooltip title="Socket.io">
                <img
                  src={socketIcon}
                  alt="socket icon"
                  width="70px"
                  height="70px"
                />
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              href="https://material-ui.com/"
              target="_blank"
            >
              <Tooltip title="Material-UI">
                <img src={MUIIcon} alt="MUI icon" width="60px" height="60px" />
              </Tooltip>
            </Link>
            <Link color="inherit" href="https://reactjs.org//" target="_blank">
              <Tooltip title="React JS">
                <img
                  src={ReactIcon}
                  alt="React icon"
                  width="60px"
                  height="60px"
                />
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              href="https://www.mongodb.com/"
              target="_blank"
            >
              <Tooltip title="MongoDB">
                <img
                  src={MongoIcon}
                  alt="React icon"
                  width="60px"
                  height="60px"
                />
              </Tooltip>
            </Link>
          </Grid>
          <Divider variant="inset" classes={{ root: classes.divider }} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <h6>Developed By</h6>
            <Link
              color="inherit"
              href="https://github.com/bhagatabhijeet"
              target="_blank"
            >
              <Tooltip title="Abhijeet Bhagat">
                <img
                  src="https://avatars2.githubusercontent.com/u/7333004?s=400&u=9cf90dd7ea3c9c588de9eb333f3e38f42cd3dd1e&v=4"
                  width="50px"
                  style={{ borderRadius: "50%" }}
                  alt="Abhijeet Bhagat Avatar"
                />
              </Tooltip>
            </Link>
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              href="https://github.com/bhagatabhijeet"
              target="_blank"
            >
              <h6>Abhijeet Bhagat</h6>
            </Link>
          </Grid>
          <Divider variant="inset" classes={{ root: classes.divider }} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <h6>GitHub</h6>
            <Copyright />
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              href="https://github.com/bhagatabhijeet/google-book-search"
              target="_blank"
            >
              <GithubIcon />
            </Link>
            <Divider variant="inset" classes={{ root: classes.divider }} />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
