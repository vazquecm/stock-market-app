'use strict';

app.factory('stockFactory', ['$http', ($http) => {

  const factoryExports = {};

  // submitting the stock info to the database for storing
  factoryExports.getStock = (company, quantity, purchasePrice, symbol) => {

    // getting the quote from the API
    $http.post(`/api/getStock/${company}/${quantity}/${purchasePrice}/${symbol}`).then((data) => {

   })

  }
      return factoryExports;

}])
