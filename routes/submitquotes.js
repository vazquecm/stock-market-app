'use strict';


const express = require('express');
const router = express.Router();
const submitQuoteCtrl = require('../controllers/submitQuoteCtrl');

router.get('/quotes/symbol', (req, res) => {

  // let quotes = submitQuoteCtrl.getQuoteBySymbol(req, res);
  res.render('symbol');
  // console.log('getting in submitquotes');
});

module.exports = router;
