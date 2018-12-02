let crzCommands = {};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/elfinder#elf_fls2_Lw';
  },
  commands: [crzCommands],
  elements: {
    elFinder: {
      selector: '//div[@id="elfinder"]',
      locateStrategy: 'xpath'
    }
  }
};
