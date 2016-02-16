'use strict';


const express = require('express');
const router = express.Router();


const defaultRoute = require('./default');
const quotes = require('./quotes');

// load routes in order of need - .use is middleware function
router.use(defaultRoute);
router.use(quotes);



module.exports = router;
