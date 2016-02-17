'use strict';

const express = require('express');
const exportsObject = {};
const request = require('request');

exportsObject.getQuoteBySymbol = (req, res) =>
{
   let url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${req.params.symbol}`;
   request.get(url, (err, response, body )=>
    {
         let parsed = JSON.parse(body);
           res.json(parsed)
    });
 }


 module.exports = exportsObject;

