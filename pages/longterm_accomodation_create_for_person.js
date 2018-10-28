var person = require('../test_data/longterm/positiveTestCase.json');


let createLongTermAccomodationForPersonCommands = {
    submitLongTermReservation: function () {
        let field;
        for (field in person) {
            switch (field) {
                case 'firstName':
                    this.setValue('@firstNameTextInput', person[field]);
                    break;
                case 'lastName':
                    this.setValue('@lastNameTextInput', person[field]);
                    break;
                case 'startDate':
                    this.setValue('@startDatePicker', person[field]);
                    break;
                case 'endDate':
                    this.setValue('@endDatePicker', person[field]);
                    break;
                case 'idCard':
                    this.setValue('@identCardTextInput', person[field]);
                    break;
                case 'birthDate':
                    this.setValue('@birthDatePicker', person[field]);
                    break;
                case 'street':
                    this.setValue('@streetTextInput', person[field]);
                    break;
                case 'city':
                    this.setValue('@cityTextInput', person[field]);
                    break;
                case 'country':
                    this.setValue('@countrySelect', person[field]);
                    break;
                case 'phone':
                    this.setValue('@phoneTextInput', person[field]);
                    break;
                // case 'roomId':
                //     this.setValue('@roomIdTextInput', person[field]);
                //     break;
                case 'email':
                    this.setValue('@emailTextInput', person[field]);
                    break;
                case 'accomodationCategory':
                    this.setValue('@accomodationPriceCategorySelect', person[field]);
                    break;
                case 'residenceAuthorization':
                    this.setValue('@residenceAuthorizationTextInput', person[field]);
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
    commands: [createLongTermAccomodationForPersonCommands],
    elements: {
        shortTermAccomodationCreateButton: {
            selector: "//a[contains(@href, 'http://ubytovanie.sponadev.qity.sk/sresidence/create')]",
            locateStrategy: 'xpath'
        },
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
        accomodationPriceCategorySelect: {
            selector: '#accomodation_type_id'
        },
        residenceAuthorizationTextInput: {
            selector: '#residence_authorization'
        },
        // givenItemsButton: {
        //     //TODO
        // },
        submitReservationButton: {
            selector: '//input[@value="Pridať dlhodobé ubytovanie"]',
            locateStrategy: 'xpath'
        }

    }
};
