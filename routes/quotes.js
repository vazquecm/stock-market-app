'use strict';

// routes for buying some stock
const express = require('express');
const router = express.Router();
const getQuoteCtrl = require("../controllers/getQuoteCtrl");


router.get("/api/quotes/symbol", (req, res) => {
  res.render('symbol');
  // getQuoteCtrl.getQuoteBySymbol)
});

module.exports = router;
