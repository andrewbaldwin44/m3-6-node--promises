// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (array.every(element => typeof element == 'string')) {
      const capitalized = array.map(word => word.charAt(0).toUpperCase() + word.substr(1));
      resolve(capitalized);
    } else {
      reject('Array must only be comprised of strings');
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    const sorted = array.sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
    resolve(sorted);
  });
  return myPromise
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
