'use strict';


const express = require('express');
const router = express.Router();

const test = require('../controllers/test.js')



router.get('/default', (req, res) => {
  res.send('index')
})

router.get('/example', (req, res) => {

  let response = test.getNetflix(req, res)
    res.send(response)
})


module.exports = router;
