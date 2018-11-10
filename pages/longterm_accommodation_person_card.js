let util = require('util');

const elementFormat ='@%s';

let personCardCommands = {
    clickElementOnThePage: function (name) {
        let element = util.format(elementFormat,name);
        this.click(element);
        return this;
    }
};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/lresidence/show/',
    commands: [personCardCommands],
    elements: {
        personCardHeader: {
            selector: '//h3[@class="sectionHeaderText"]',
            locateStrategy: 'xpath'
        },
        pdfResidenceAgrement:{
            selector: '//*[text()[contains(.,"Zmluva o ubytovaní")]]',
            locateStrategy: 'xpath'
        },
        pdfAdditionalAgreement: {
            selector: '//*[text()[contains(.,"Dodatková zmluva")]]',
            locateStrategy: 'xpath'
        },
        editPersonDetailsButton:{
            selector:'//a[@class="btn btn-sm btn-success"]',
            locateStrategy: 'xpath'
        }
      }


};
