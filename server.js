'use strict';
/*eslint-disable no-unused-vars*/

// including express that has HTTP/HTTPS
const express = require('express');
// app is using express
const app = express();

// ./routes/ automatically looks for index if you don't specify a different one
const routes = require('./routes/');

// set port to environment port or 3000
const PORT = process.env.PORT || 3000;

// using the jade templates to compile
app.set('view engine', 'jade');

app.use(routes);



// setting up our server
app.listen(PORT, () => {
  console.log("are you listening?");
})
