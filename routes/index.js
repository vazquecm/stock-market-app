'use strict';


const express = require('express');
const router = express.Router();


const defaultRoute = require('./default');
const quotes = require('./quotes');
const getStock = require("./getStock")
// const wrongWay = require('./wrongWay');

// load routes in order of need - .use is middleware function
router.use(defaultRoute)
router.use(quotes)
router.use(getStock)
// router.use(wrongWay)



module.exports = router
