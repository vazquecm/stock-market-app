"use strict";
 const mongoose = require("mongoose");

 //in here we are gonna create our models and schema, which we then import wherever the mess we want

 const stockItemSchema = mongoose.model("stockItem", mongoose.Schema({
   company: String,
   quantity: Number,
   purchasePrice: Number,
   dailyStockPrice: Number,
   originalStockPrice: Number,
   symbol: String,
   timestamp: { type: Number, default: Date.now }

 }))


 module.exports = stockItemSchema;
