const config = require('@config');
const { serviceFunction1 } = require('./services/service1/service1');
const { serviceFunction2 } = require('./services/service2/service2');

class Controller {
  static getFunc(parameter1 = 'parameter1', parameter2 = 'parameter2') {
    return `${serviceFunction1(parameter1, parameter2)} ${serviceFunction2(
      parameter1,
      parameter2
    )}`;
  }
}

module.exports = Controller;
