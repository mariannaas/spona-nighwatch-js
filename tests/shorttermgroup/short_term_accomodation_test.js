const config = require('../config.json');
let createShortTermAccommodationPage;

module.exports = {

    before(client) {
        const loginPage = client.page.login_spona();
        loginPage.navigate();
        loginPage.loginToSystem(config.admin.email, config.admin.password);
        client.pause(2000);
        let homePage = client.page.home();
        homePage.expect.element('@homeHeader').to.be.present.after(2000);
        homePage.expect.element('@homeHeader').to.contain.text('Informačný systém pre ubytovanie');
    },

    beforeEach(client) {
        createShortTermAccommodationPage = client.page.shortterm_accomodation_create();
        createShortTermAccommodationPage.navigate();
    },

    after(client) {
        client.end();
    },

    tags: ['shortTerm', 'sanity'],
    'Short term accomodation simple test': function (client) {
        createShortTermAccommodationPage.createShortTermReservation('correct_data_test_current_month_date.json');
        let shortTermAccommodationPage = client.page.shortterm_accomodation();
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Rezervované');
        shortTermAccommodationPage.clickEditButtonInFirstTableRow();
        client.pause(2000);
        createShortTermAccommodationPage.confirmShortTermResidentIdentiy('correct_data_test_current_month_date.json');
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Potvrdené');
        shortTermAccommodationPage.clickEditButtonInFirstTableRow();
        client.pause(2000);
        createShortTermAccommodationPage.confirmPrice(15);
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Predpis');
    }

};
