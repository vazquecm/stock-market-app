'use strict';
/*eslint-disable no-unused-vars*/

// including express that has HTTP/HTTPS
const express = require('express');
// ./routes/ automatically looks for index if you don't specify a different one
const routes = require('./routes/');
const path = require('path');
const mongoose = require('mongoose');
const sassMiddleware = require('node-sass-middleware');
// app is using express
const app = express();
// set port to environment port or 3000
const PORT = process.env.PORT || 3000;
const MONGODB_URL = "mongodb://localhost:27017/testStocks";

// using the jade templates to compile
app.set('view engine', 'jade');

//SASS set up
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    //this is whitespace indent rather than curly braces
    indentedSyntax: true,
    debug: true,
    ouputStyle: 'compressed'
}));

// express.static = I'm getting html, css files already made/not changing
app.use(express.static(path.join(__dirname, 'public')));

/// loading the routes
app.use(routes);

//mongodb integration
let dbase = mongoose.connection;

mongoose.connect(MONGODB_URL);

//when mongo is connected
mongoose.connection.on("open", () => {
  //Start app on specified port
  app.listen(PORT, () =>
  {
    console.log(`port running on port ${PORT}`);
    console.log(`Connected to mongodb`);
  })
});




// setting up our server
app.listen(PORT, () => {
  console.log("are you listening?");
})
