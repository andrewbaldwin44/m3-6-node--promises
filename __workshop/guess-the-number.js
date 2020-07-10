const inquirer = require('inquirer');
const hiddenNumber = Math.floor(Math.random() * 100 + 1);
let guesses = 5;
let won = false;

function validate(number) {
  return new Promise((resolve, reject) => {
      if (number > 0 && number <= 100) {
        if (number < hiddenNumber) resolve('Too low')
        else if (number > hiddenNumber) resolve('Too high')
        else {
          won = true;
          resolve('You win')
        }
      }
      else {
        reject('Please enter a number between 1 and 100');
      }
  });
}

function promptUser() {
  return inquirer
    .prompt([
      { type: 'number', message: 'Guess a number between 1 and 100',
      name: 'Guess the number' }
    ])
    .then(answer => validate(answer['Guess the number']))
    .then(response => console.log(response))
    .then(() => guesses--)
    .then(() => {
      if (won) return;
      else if (guesses > 0) promptUser();
      else console.log('You lose!');
    })
    .catch(error => console.log(error));
}

promptUser()
