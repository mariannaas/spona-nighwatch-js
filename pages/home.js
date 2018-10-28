var util = require('util');

const elementFormat ='@%s';

let menuCommands = {
    clickElementOnThePage: function (name) {
        let element = util.format(elementFormat,name);
        this.click(element);
        return this;
    }
};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk',
    commands: [menuCommands],
    elements: {
        homeHeader: {
            selector: '//h3[@class="sectionHeaderText"]',
            locateStrategy: 'xpath'
        },
        shortTermAccomodation: {
            selector: '//a[contains(@href, "http://ubytovanie.sponadev.qity.sk/sresidence")]',
            locateStrategy: 'xpath'
        },
        booking: {
            selector: '//a[contains(@href, "http://ubytovanie.sponadev.qity.sk/webBooking")]',
            locateStrategy: 'xpath'
        },
        longTermAccomodation: {
            selector: '//a[contains(@href, "http://ubytovanie.sponadev.qity.sk/lresidence")]',
            locateStrategy: 'xpath'
        },
        statistics:
            {
                selector: "//a[contains(@href, 'http://ubytovanie.sponadev.qity.sk/statistic/sresidence')]",
                locateStrategy: 'xpath'
            },
        calendar:
            {
                selector: '//a[contains(@href, "http://ubytovanie.sponadev.qity.sk/calendar")]',
                locateStrategy: 'xpath'
            },

        createShortTermAccomodation: {
            selector: '//a[contains(@href, "http://ubytovanie.sponadev.qity.sk/sresidence/create")]',
            locateStrategy: 'xpath'

        },
        createLongTermAccomodation: {
            selector: '//div/p/a[contains(@href, "http://ubytovanie.sponadev.qity.sk/lresidence/create")]',
            locateStrategy: 'xpath'
        }
    }

};