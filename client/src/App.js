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
// import MuiAlert from '@material-ui/lab/Alert';
// import io from 'socket.io-client';

//console.log(process.env.REACT_APP_API_Key);
export const socket = io();//'http://localhost:3001');
//     socket.on('connections_established',cons=>{
//       setConnections(cons);
//     });
// function setConnections(num){
//   return num;
// }
// let totalcons=1
// const socket = io();//'http://localhost:3001'

function App() {
  // const[conCount,setConCount]=useState(1);
  // useEffect(() => {
  //   socket.on('connections_established',cons=>{
  //     setConCount(cons);
  //     console.log(cons);

  //   })
  // console.log("I am firing in useeffect!!" );
  // socket.on("connect", ({user, message}) => {
  //   // setChat([...chat, {user, message}]);
  //   console.log('inside of useEffect');
  // });
  // setConnections(totalcons);

  // });
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  return (
    <Router>
      {/* <div> */}
        <Nav />
        <NotificationsBar />
        <BookSaveNotification />        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
