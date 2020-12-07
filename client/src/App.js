import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';


//console.log(process.env.REACT_APP_API_Key);

function App () {
    return (
      <Router>
        <div>
        <Nav />
        <Switch>
        <Route exact path = {['/']}>
            <Home />
          </Route>
          <Route exact path = {['/saved']}>
            <Saved />
          </Route>
          <Route exact path = {['/search']}>
            <Search />
          </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
    );
}

export default App;
