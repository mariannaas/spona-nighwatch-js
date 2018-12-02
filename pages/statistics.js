let statisticsCommands = {};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/statistic/sresidence';
  },
  commands: [statisticsCommands],
  elements: {
    elementToChange: {
      selector: "//a[contains(@href, 'http://tochange')]",
      locateStrategy: 'xpath'
    }
  }
};