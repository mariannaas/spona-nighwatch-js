let bookingAccomodationCommands = {
};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/webBooking',
    commands: [bookingAccomodationCommands],
    elements: {
        elementToChange: {
            selector: "//a[contains(@href, 'http://tochange')]",
            locateStrategy: 'xpath'
        }
    }
}
