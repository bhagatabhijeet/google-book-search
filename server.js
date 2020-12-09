require('dotenv').config();
const express = require("express");
const http=require("http");
const socketIo = require("socket.io");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

let socketsCount=0;
const app = express();
const httpServer = http.createServer(app);
var io = socketIo(httpServer);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Add routes, API and view
app.use(routes);

//Connect to the mongo db
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile("./client/public/index.html");
});

//socket
io.on('connection', function (socket) {
  socketsCount++;
  console.log("new client connected",socketsCount);
  io.emit('connections_established',socketsCount);
  // socket.on('connect',()=>{
  //   console.log("someone connected!");
  // });
  socket.on("disconnect", () => {
    socketsCount--
    console.log("Client disconnected",socketsCount);
    io.emit('connection_disconnected',socketsCount);
    // clearInterval(interval);
  });
  socket.on("booksaved", (bookName,author) => {
    console.log(bookName,author);
    io.emit('booksaved',bookName,author);
    // clearInterval(interval);
  });
  socket.on("bookremoved", (bookName,author,bookid) => {
    console.log(bookName,author);
    io.emit('bookremoved',bookName,author,bookid);
    // clearInterval(interval);
  });
  
});

httpServer.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
