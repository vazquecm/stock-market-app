'use strict';

// routes for buying some stock
const express = require('express');
const router = express.Router();


router.get('/quotes', (req, res) => {
  res.send('lets get some stocks');
});



module.exports = router;
