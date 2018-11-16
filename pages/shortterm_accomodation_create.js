let shortTermAccomodationCreateCommands = {
    createShortTermAccommodation: function (name) {
        let element = util.format(elementFormat, name);
        this.click(element);
        return this;
    }

};
module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/sresidence/create',
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
        }

    }
};
