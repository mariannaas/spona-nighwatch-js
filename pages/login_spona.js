const elementFormat ='@%s';

var loginCommands = {
    loginToSystem: function (email, password) {
        this.setValue('@emailInput', email)
            .setValue('@passwordInput', password)
            .click('@submitButton');
        return this;
    }
};

module.exports = {
    url: 'http://ubytovanie.sponadev.qity.sk/login',
    commands: [loginCommands],
    elements: {
        emailInput: {selector: 'input[type=email]'},
        passwordInput: {selector: 'input[type=password]'},
        submitButton: {selector: 'button[type=submit]'}
    }
};
