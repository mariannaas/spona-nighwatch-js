let shortTermAccomodationCommands = {
    createShortTermAccomodation: function (name) {
        let element = util.format(elementFormat,name);
        this.click(element);
        return this;
    }

};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/sresidence',
    commands: [shortTermAccomodationCommands],
    elements: {
        shortTermAccomodationCreateButton: {
            selector: "//a[contains(@href, 'http://ubytovanie.sponadev.qity.sk/sresidence/create')]",
            locateStrategy: 'xpath'
        },
        reserveFromDatePicker: {
            selector: '#from_date'
        },
        reserveToDatePicker: {
            selector: '#to_date'
        },
        firstNameTextInput:{
            selector: '#first_name'
        },
        lastNameTextInput:{
            selector: '#last_name'
        },
        roomIdSelector:{
            selector: '#room_id'
        },
        notesTextInput:{
            selector: '#notes'
        },
        submitReservationButton:{
            selector: '//input[@value="Pridať rezerváciu"]',
            locateStrategy: 'xpath'
        }

    }
}
