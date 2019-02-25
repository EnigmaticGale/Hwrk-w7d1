const PubSub = require('../helpers/pub_sub.js');
const ResultView = function() {

ResultView.prototype.doThing = function () {
  PubSub.subscribe('PrimenumberDetector:result-calculated', (event) => {
    const numberOfWords = event.detail;
    this.displayResult(numberOfWords);
  });
};

};

ResultView.prototype.displayResult = function (result) {
  const resultElement= document.querySelector('#result');
  resultElement.textContent = result
};

module.exports = ResultView;
