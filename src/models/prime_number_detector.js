const PubSub = require('../helpers/pub_sub.js')
const PrimeNumberDetector = function () {

};

PrimeNumberDetector.prototype.doThing = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.izItPrime(inputtedNumber);
    PubSub.publish('PrimenumberDetector:result-calculated', result);
  });
};

PrimeNumberDetector.prototype.izItPrime = function (number) {
  if (number <= 1) {
    return `${number} is not a prime number!`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return `${number} is not a prime number!`;
    }
  }
  return `${number} is prime!!!`;
};


module.exports = PrimeNumberDetector;
