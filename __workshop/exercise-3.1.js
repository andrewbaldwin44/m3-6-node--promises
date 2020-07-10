// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
    .then(response => JSON.parse(response))
    .then(parsedResponse => {
      const position = parsedResponse.iss_position
      parsedResponse.iss_position = {
        lat: position.latitude,
        lng: position.longitude
      }
      return parsedResponse;
    })
    .catch((err) => console.log('Error: ', err));
};

getIssPosition().then((result) => console.log(result));
