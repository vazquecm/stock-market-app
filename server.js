'use strict';
/*eslint-disable no-unused-vars*/

// including express that has HTTP/HTTPS
const express = require('express');
// app is using express
const app = express();

// ./routes/ automatically looks for index if you don't specify a different one
const routes = require('./routes/');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

// set port to environment port or 3000
const PORT = process.env.PORT || 3000;

// using the jade templates to compile
app.set('view engine', 'jade');

//SASS set up
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));

app.use(routes);

// express.static = I'm getting html, css files already made/not changing
app.use(express.static(path.join(__dirname, 'public')));



// setting up our server
app.listen(PORT, () => {
  console.log("are you listening?");
})
