'use strict';

// routes for buying some stock
const express = require('express');
const router = express.Router();

console.log('in quotes.js');

router.get('/quotes', (req, res) => {
  res.render('quotes');
});



module.exports = router;
