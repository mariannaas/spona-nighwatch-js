let util = require('util');

const elementFormat = '@%s';

let menuCommands = {
  clickElementOnThePage: function (name) {
    let element = util.format(elementFormat, name);
    this.click(element);
    return this;
  },
};

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  commands: [menuCommands],
  elements: {
    homeHeader: {
      selector: '//h3[@class="sectionHeaderText"]',
      locateStrategy: 'xpath'
    },
    shortTermAccommodation: {
      selector: '//li/a[contains(@href, "/sresidence")]',
      locateStrategy: 'xpath'
    },
    shortTermGateHouseAccommodation: {
      selector: '//li/a[contains(@href, "/gatehouse/sresidence")]',
      locateStrategy: 'xpath'
    },
    booking: {
      selector: '//li/a[contains(@href, "/webBooking")]',
      locateStrategy: 'xpath'
    },
    longTermAccommodation: {
      selector: '//li/a[contains(@href, "/lresidence")]',
      locateStrategy: 'xpath'
    },
    longTermGateHouseAccommodation: {
      selector: '//li/a[contains(@href, "/gatehouse/lresidence")]',
      locateStrategy: 'xpath'
    },
    longTermAccommodationPayments: {
      selector: '//li/a[contains(@href, "/lresidencepayments/imports")]',
      locateStrategy: 'xpath'
    },
    statistics: {
      selector: "//li/a[contains(@href, '/statistic/sresidence')]",
      locateStrategy: 'xpath'
    },
    calendar: {
      selector: '//li/a[contains(@href, "/calendar")]',
      locateStrategy: 'xpath'
    },
    calendarGateHouse: {
      selector: '//li/a[contains(@href, "/gatehouse/calendar")]',
      locateStrategy: 'xpath'
    },
    allDormitoriesList: {
      selector: '//li/a[contains(@href, "/servisZone")]',
      locateStrategy: 'xpath'
    }
  }
};