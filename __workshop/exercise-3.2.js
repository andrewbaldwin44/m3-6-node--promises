// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    q: address,
    key: process.env.OPENCAGE_API_KEY,
  }

  return opencage
    .geocode(requestObj)
    .then(response => response.results[0].geometry)
    .catch(error => {
      console.log('error', error.message);
    });
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
