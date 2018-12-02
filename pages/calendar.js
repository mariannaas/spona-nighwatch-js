let calendarCommands = {};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/calendar';
  },
  commands: [calendarCommands],
  elements: {
    elementToChange: {
      selector: "//a[contains(@href, 'http://tochange')]",
      locateStrategy: 'xpath'
    }
  }
};
