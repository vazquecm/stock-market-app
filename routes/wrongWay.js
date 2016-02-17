'use strict';


const express = require('express');
const router = express.Router();

router.get('/*', (req, res) => {

  res.send('<h2>Sorry, this is the wrong way, page not found!</h2>')
})


module.exports = router
