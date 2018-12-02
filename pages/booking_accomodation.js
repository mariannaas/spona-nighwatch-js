let bookingAccomodationCommands = {};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/webBooking';
  },
  commands: [bookingAccomodationCommands],
  elements: {
    elementToChange: {
      selector: "//a[contains(@href, 'http://tochange')]",
      locateStrategy: 'xpath'
    }
  }
};
