'use strict';
 //route for saving/buying stocks
const express = require('express');
const router = express.Router();
const getStockCtrl = require("../controllers/getStockCtrl")

//save data via mongodb
// router.post("/getStock", getStockCtrl.getStock);


module.exports = router;
