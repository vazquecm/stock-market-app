'use strict';

// routes for getting all of the stocks for portfolio
const express = require('express');
const router = express.Router();
const portfolioCtrl = require('..controllers/portfolioCtrl');

// this queries the database and send back the data as a JSON to /api/portfoliio route
router.get('/api/portfolio', portfolioCtrl.getAllStock);

// updates the database with new quatities after stocks are sold
router.put('/api/portfolio/:qty/:stockId/:operation', portfolioCtrl.updateQuantity);

// refreshes the database with the updated prices
router.put('/api/portfolio/:qty/:stockId/:operation', portfolioCtrl.updateStockPrice);

module.exports = router;
