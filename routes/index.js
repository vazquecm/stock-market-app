'use strict';


const express = require('express');
const router = express.Router();


const defaultRoute = require('./default');

// load routes in order of need - .use is middleware function
router.use(defaultRoute);








module.exports = router;
