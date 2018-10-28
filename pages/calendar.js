let calendarCommands = {

};


module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/calendar',
    commands: [calendarCommands],
    elements: {
        elementToChange: {
            selector: "//a[contains(@href, 'http://tochange')]",
            locateStrategy: 'xpath'
        }
    }
}
