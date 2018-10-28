let statisticsCommands = {

};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/statistic/sresidence',
    commands: [statisticsCommands],
    elements: {
        elementToChange: {
            selector: "//a[contains(@href, 'http://tochange')]",
            locateStrategy: 'xpath'
        }
    }
}
