'use strict';

// dependencies used
const request = require('require');
const stockItem = require('../models/stockItem');

//module exports object
]const exportObject = {}'

exportsObject.getStock = (req, res) => {

  const company = req.params.company;
  const quantity = req.params.quantity;
  const purchaseStockPrice = req.params.purchaseStockPrice;
  const symbol = req.params.symbol;

  // new instance of stock object
  const stockToBuy = new stockItem(
  {
    'company': company,
    'quantity': quantity,
    'originalStockPrice': purchaseStockPrice,
    'symbol': symbol,
    'dailyStockPrice': purchaseStockPrice
  })

  // saving stock to the database and sending result
  stockToBuy.save(function (err, objectGiven) {
      if (err) return console.error(err);
      res.send({'status': 'Purchased Stock Successfully'})
  });

}

module.exports = exportsObject;
