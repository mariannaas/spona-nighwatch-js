const pathToTestData = './test_data/shortterm/%s';
const fs = require('fs');
let util = require('util');
let date_generator = require('../utils/date_generator.js');
let fake_data = require('faker');

let shortTermAccomodationCreateCommands = {

  createShortTermReservation: function () {
    let genders = ['female', 'male'];
    let gender = fake_data.random.arrayElement(genders);

    this.clearValue('@firstNameTextInput');
    this.setValue('@firstNameTextInput', fake_data.name.firstName(gender));
    this.clearValue('@lastNameTextInput');
    this.setValue('@lastNameTextInput', fake_data.name.lastName(gender));
    this.clearValue('@fromDatePicker');
    this.setValue('@fromDatePicker', date_generator.getCurrentDate());
    this.clearValue('@toDatePicker');
    this.setValue('@toDatePicker', date_generator.getCurrentDateAndXDays(3));

    this.click('@submitReservationButton');
    return this;
  },
  confirmShortTermResidentIdentity: function (fileName) {
    let rawData = fs.readFileSync(util.format(pathToTestData, fileName));
    let person = JSON.parse(rawData);


    for (let field in person) {
      switch (field) {
        case 'idCard':
          this.clearValue('@identityCardTextInput');
          this.setValue('@identityCardTextInput', person[field]);

          break;
        case 'street':
          this.clearValue('@streetTextInput');
          this.setValue('@streetTextInput', person[field]);
          break;
        case 'zip': {
          this.clearValue('@zipTextInput');
          this.setValue('@zipTextInput', person[field]);
          break;
        }
        case 'city': {
          this.clearValue('@cityTextInput');
          this.setValue('@cityTextInput', person[field]);
          break;
        }
        case 'country':
          this.clearValue('@countryDropDown');
          this.setValue('@countryDropDown', person[field]);
          break;
        case 'birthCountry':
          this.clearValue('@birthCountryTextInput');
          this.setValue('@birthCountryTextInput', person[field]);
          break;
        case 'birthDate':
          this.clearValue('@birthDatePicker');
          this.setValue('@birthDatePicker', person[field]);
          break;
        case 'visitPurpose':
          this.clearValue('@visitPurposeTextInput');
          this.setValue('@visitPurposeTextInput', person[field]);
          break;
        default:
          break;
      }
    }
    this.click('@submitIdentityConfirmation');
    return this;
  },
  confirmPrice: function (price) {
    this.clearValue('@pricePerNightTextInput');
    this.setValue('@pricePerNightTextInput', price);

    this.click('@submitPrice');
    return this;
  }
};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/sresidence/create';
  },
  commands: [shortTermAccomodationCreateCommands],
  elements: {
    fromDatePicker: {
      selector: '#from_date'
    },
    toDatePicker: {
      selector: '#to_date'
    },
    firstNameTextInput: {
      selector: '#first_name'
    },
    lastNameTextInput: {
      selector: '#last_name'
    },
    roomIdSelector: {
      selector: '#room_id'
    },
    notesTextInput: {
      selector: '#notes'
    },
    submitReservationButton: {
      selector: '//input[@value="Pridať rezerváciu"]',
      locateStrategy: 'xpath'
    },
    identityCardTextInput: {
      selector: '#ident_card'
    },
    streetTextInput: {
      selector: '#street'
    },
    cityTextInput: {
      selector: '#city'
    },
    zipTextInput: {
      selector: '#zip'
    },
    countryDropDown: {
      selector: '#quest_type_id'
    },
    birthDatePicker: {
      selector: '#birth_date'
    },
    birthCountryTextInput: {
      selector: '#birth_country'
    },
    visitPurposeTextInput: {
      selector: '#visit_purpose'
    },
    visaTextInput: {
      selector: '#visa'
    },
    submitIdentityConfirmation: {
      selector: '//input[@value="Uložiť potvrdenie"]',
      locateStrategy: 'xpath'
    },
    pricePerNightTextInput: {
      selector: '#price_per_night'
    },
    submitPrice: {
      selector: '//input[@value="Uložiť predpis"]',
      locateStrategy: 'xpath'
    }
  }
};