import Container from "@material-ui/core/Container";
import React from "react";
import { Spring } from "react-spring/renderprops";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import FindInPageIcon from "@material-ui/icons/FindInPage";

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    backgroundColor: "#2ba2ff",
    height: 200,
    margin: 30,
    position: "relative",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 40,
    padding: 40,
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <Spring
          config={{ tension: 280, friction: 60, duration: 5000 }}
          from={{ color: "#fff" }}
          to={{ color: "black" }}
        >
          {(props) => (
            <Typography
              component="h1"
              variant="h5"
              style={{ textAlign: "center", ...props }}
            >
              Google Books Search!
            </Typography>
          )}
        </Spring>

        <Paper className={classes.paper}>
          <Grid item xs={4}>
            <Spring
              config={{ tension: 120, friction: 14 }}
              from={{
                opacity: 0,
                left: -500,
                top: -200,
                transform: "rotate(0deg)",
              }}
              to={{ opacity: 1, left: 0, top: 0, transform: "rotate(360deg)" }}
            >
              {(props) => (
                <Box className={classes.box} style={props}>
                  <Button
                    href="/search"
                    size="large"
                    startIcon={<SearchIcon />}
                    variant="contained"
                    color="primary dark"
                  >
                    Search
                  </Button>
                </Box>
              )}
            </Spring>
          </Grid>
          <Grid item xs={4}>
            <Spring
              from={{
                opacity: 0,
                right: -500,
                top: -200,
                transform: "rotate(0deg)",
              }}
              to={{
                opacity: 1,
                right: 0,
                top: 0,
                transform: "rotate(-360deg)",
              }}
            >
              {(props) => (
                <Box className={classes.box} style={props}>
                  <Button
                    href="/saved"
                    size="large"
                    endIcon={<FindInPageIcon />}
                    variant="contained"
                    color="secondary light"
                  >
                    Saved Search
                  </Button>
                </Box>
              )}
            </Spring>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default Home;
