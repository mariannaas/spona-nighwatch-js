let util = require('util');
let tableXPath = '//table/tbody/tr[1]';

let shortTermAccommodationCommands = {

    checkShortTermTableFirstRowForReservationStatus: function (status) {
        this.assert.containsText('@shortTermAccommodationTableFirstRowStatus', status, 'The expected status was found ' + status);
        return this;
    },
    clickEditButtonInFirstTableRow: function () {
        return this.click('@shortTermAccommodationTableFirstRowEditButton');
    }

};


module.exports = {

    url: 'http://ubytovanie.sponadev.qity.sk/sresidence',

    commands: [shortTermAccommodationCommands],

    elements: {

        header: {
            selector: '.sectionHeaderText'
        },
        shortTermAccommodationTableFirstRowStatus: {
            selector: tableXPath + '/td/button',
            locateStrategy: 'xpath'
        },
        shortTermAccommodationTableFirstRowEditButton: {
            selector: tableXPath + '/td[@class="tools"]/a',
            locateStrategy: 'xpath'
        },
        formulaPdf: {
            selector: tableXPath + '/td/a[@title="Predpis"]',
            locateStrategy: 'xpath'
        },
        noticeOfStay: {
            selector: tableXPath + '/td/a[@title="Hlásenie pobytu"]',
            locateStrategy: 'xpath'
        }
    }
    
};
