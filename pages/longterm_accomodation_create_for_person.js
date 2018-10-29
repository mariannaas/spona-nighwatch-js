const pathToTestData = './test_data/longterm/%s';
const fs = require('fs');
let util = require('util');
let date_generator = require('../utils/date_generator.js')

let createLongTermAccommodationForPersonCommands = {
    submitLongTermReservation: function (fileName) {
        let rawData = fs.readFileSync(util.format(pathToTestData, fileName));
        let person = JSON.parse(rawData);


        for (let field in person) {
            switch (field) {
                case 'firstName':
                    this.clearValue('@firstNameTextInput');
                    this.setValue('@firstNameTextInput', person[field]);
                    break;
                case 'lastName':
                    this.clearValue('@lastNameTextInput');
                    this.setValue('@lastNameTextInput', person[field]);
                    break;
                case 'startDate': {
                    this.clearValue('@startDatePicker');
                    let dateToSet = person[field] === ('CURRENT_DATE') ?
                        date_generator.getCurrentDate() :
                        person[field];
                    this.setValue('@startDatePicker', dateToSet);
                    break;
                }
                case 'endDate': {
                    this.clearValue('@endDatePicker');
                    let dateToSet = person[field]=== ('CURRENT_DATE')  ?
                        date_generator.getCurrentDate(3) :
                        person[field];
                    this.setValue('@endDatePicker', dateToSet);
                    break;
                }
                case 'birthDate':
                    this.clearValue('@birthDatePicker');
                    this.setValue('@birthDatePicker', person[field]);
                    break;
                case 'idCard':
                    this.clearValue('@identCardTextInput');
                    this.setValue('@identCardTextInput', person[field]);
                    break;
                case 'street':
                    this.clearValue('@streetTextInput');
                    this.setValue('@streetTextInput', person[field]);
                    break;
                case 'city':
                    this.clearValue('@cityTextInput');
                    this.setValue('@cityTextInput', person[field]);
                    break;
                case 'country':
                    this.setValue('@countrySelect', person[field]);
                    break;
                case 'phone':
                    this.setValue('@phoneTextInput', person[field]);
                    break;
                case 'zip':
                    this.setValue('@zipTextInput', person[field]);
                    break;
                case 'email':
                    this.clearValue('@emailTextInput');
                    this.setValue('@emailTextInput', person[field]);
                    break;
                case 'accommodationCategory':
                    this.setValue('@accommodationCategory', person[field]);
                    break;
                case 'residenceAuthorization':
                    this.setValue('@residenceAuthorizationTextInput', person[field]);
                    break;
                case 'room':
                    this.setValue('@roomTextInput', person[field]);
                    break;
                default:
                    break;
            }
        }
        this.click('@submitReservationButton');
        return this;
    }

};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/lresidence/create',
    commands: [createLongTermAccommodationForPersonCommands],
    elements: {
        firstNameTextInput: {
            selector: '#first_name'
        },
        lastNameTextInput: {
            selector: '#last_name'
        },
        startDatePicker: {
            selector: '#start_date'
        },
        endDatePicker: {
            selector: '#end_date'
        },
        identCardTextInput: {
            selector: '#ident_card'
        },
        birthDatePicker: {
            selector: '#date_of_birth'
        },
        streetTextInput: {
            selector: '#street'
        },
        cityTextInput: {
            selector: '#city'
        },
        roomTextInput: {
            selector: '#room'
        },
        zipTextInput: {
            selector: '#zip'
        },
        countrySelect: {
            selector: '#quest_type_id'
        },
        phoneTextInput: {
            selector: '#phone'
        },
        roomIdTextInput: {
            selector: '#room_id'
        },
        notesTextInput: {
            selector: '#notes'
        },
        emailTextInput: {
            selector: '#email'
        },
        accommodationCategory: {
            selector: '#accomodation_type_id'
        },
        residenceAuthorizationTextInput: {
            selector: '#residence_authorization'
        },
        submitReservationButton: {
            selector: '//input[@value="Pridať dlhodobé ubytovanie"]',
            locateStrategy: 'xpath'
        },
        alertMessageText: {
            selector: '//*[@class="alert alert-danger"]/li',
            locateStrategy: 'xpath',
        }
    }
};
