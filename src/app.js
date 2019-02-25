const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const PrimeNumberDetector = require('./models/prime_number_detector.js');


document.addEventListener('DOMContentLoaded', () => {

  const formView = new FormView();
  formView.doThing();

  const primeNumberDetector = new PrimeNumberDetector();
  primeNumberDetector.doThing();

  const resultView = new ResultView();
  resultView.doThing();


});
