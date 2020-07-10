// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data.text; // 2
    })
    .catch((err) => err.error ? JSON.parse(err.error) : err);
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting('es').then((result) => console.log(result));
greeting('ru').then((result) => console.log(result));
greeting('blah').then((result) => console.log(result));
