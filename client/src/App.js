import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotificationsBar from "./components/NotificationsBars";
import BookSaveNotification from "./components/animated/BookSaveNotification";
import io from "socket.io-client";

// Socket conn
export const socket = io(); //'http://localhost:3001');

function App() {
  
  return (
    <Router>      
        <Nav />
        <NotificationsBar />
        <BookSaveNotification />        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/saved">
            <Saved />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />      
    </Router>
  );
}

export default App;
