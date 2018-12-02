let util = require('util');

const elementFormat = '@%s';

let longTermAccomodationCommands = {
  createLongTermReservation: function (name) {
    let element = util.format(elementFormat, name);
    this.click(element);
    return this;
  }
};

module.exports = {
  url: 'http://ubytovanie.sponadev.qity.sk/lresidence',
  commands: [longTermAccomodationCommands],
  elements: {
    longTermAccomodationCreateButton: {
      selector: "//a[contains(@href, 'toChange')]",
      locateStrategy: 'xpath'
    },
    buttonCreateLongTermReservation: {
      selector: 'button[class=btn btn-success]'
    }
  }
};