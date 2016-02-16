'use strict';
/*eslint-disable no-unused-vars*/

const request = require('request');
const exportObj = {}

exportObj.getNeflix = (req, res) => {

  let URL = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=NFLX";

    request.get(URL, (err, req, body) => {
      if (err) throw err;
        console.log('body');
        let parsed = JSON.parse(body);
        console.log(parsed);
        return parsed
    })
}


module.exports = exportObj;
