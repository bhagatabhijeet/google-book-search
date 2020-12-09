import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Spring } from "react-spring/renderprops";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import bookshelf from "../assets/bookshelf.jpg";
import CustomTitle from "../components/animated/CustomTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
    backgroundColor: "#2ba2ff",
    height: 200,
    padding: 20,
    margin: 20,
    position: "relative",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  container: {
    marginTop: 60,
    content: '""',
    backgroundImage: `url(${bookshelf})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    opacity: 0.8,
  },
}));

function Home(props) {
  const classes = useStyles();
  console.log(props.connecteUsers);
  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Grid container={true} spacing={8} alignItems="center" justify="center">
        <Grid item xs={10} sm={10}>
          <CustomTitle />          
        </Grid>
        {/* <Grid item xs={10} sm={5}>
          <DancingBox type='user'/>  
          </Grid> 
          <Grid item xs={10} sm={5}>     
          <DancingBox />       
          </Grid>
        </Grid> */}
        <Grid item xs={10} sm={5}>
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
                Search Google Books
                <Button
                  href="/search"
                  size="large"
                  startIcon={<SearchIcon />}
                  variant="outlined"
                  color="inherit"
                  className="btn"
                >
                  Search
                </Button>
              </Box>
            )}
          </Spring>
        </Grid>
        <Grid item xs={10} sm={5}>
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
                Save Your Searches For Future Reference
                <Button
                  href="/saved"
                  size="large"
                  endIcon={<FindInPageIcon />}
                  variant="outlined"
                  color="inherit"
                  className="btn"
                >
                  Saved Search
                </Button>
              </Box>
            )}
          </Spring>
        </Grid>       
      </Grid>
    </Container>
  );
}

export default Home;
