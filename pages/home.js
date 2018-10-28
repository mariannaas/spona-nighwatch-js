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
    url: 'http://ubytovanie.sponadev.qity.sk',
    commands: [menuCommands],
    elements: {
        homeHeader: {
            selector: '//h3[@class="sectionHeaderText"]',
            locateStrategy: 'xpath'
        },
        shortTermAccommodation: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/sresidence")]',
            locateStrategy: 'xpath'
        },
        shortTermGateHouseAccommodation: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/gatehouse/sresidence")]',
            locateStrategy: 'xpath'
        },
        booking: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/webBooking")]',
            locateStrategy: 'xpath'
        },
        longTermAccommodation: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/lresidence")]',
            locateStrategy: 'xpath'
        },
        longTermGateHouseAccommodation: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/gatehouse/lresidence")]',
            locateStrategy: 'xpath'
        },
        longTermAccommodationPayments: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/lresidencepayments/imports")]',
            locateStrategy: 'xpath'
        },
        statistics: {
            selector: "//li/a[contains(@href, 'http://ubytovanie.sponadev.qity.sk/statistic/sresidence')]",
            locateStrategy: 'xpath'
        },
        calendar: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/calendar")]',
            locateStrategy: 'xpath'
        },
        calendarGateHouse: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/gatehouse/calendar")]',
            locateStrategy: 'xpath'
        },
        allDormitoriesList: {
            selector: '//li/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/servisZone")]',
            locateStrategy: 'xpath'
        }
    }

};
