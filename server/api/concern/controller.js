const config = require('@config');

class Controller {
  static async getFunc(parameter1 = 'parameter1', parameter2 = 'parameter2') {
    return `${parameter1} & ${parameter2} are the parameters of this function`;
  }
}

module.exports = Controller;
