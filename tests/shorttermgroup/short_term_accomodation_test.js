const config = require('../config.json');
let createShortTermAccommodationPage;

module.exports = {

    before(client) {
        client.maximizeWindow();
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
    'Short term accomodation for Slovak students': function (client) {
        createShortTermAccommodationPage.createShortTermReservation();
        let shortTermAccommodationPage = client.page.shortterm_accomodation();
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Rezervované');
        shortTermAccommodationPage.clickEditButtonInFirstTableRow();
        client.pause(2000);
        createShortTermAccommodationPage.confirmShortTermResidentIdentity('slovak_id.json');
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Potvrdené');
        client.pause(2000);
        shortTermAccommodationPage.clickEditButtonInFirstTableRow();
        client.pause(2000);
        createShortTermAccommodationPage.confirmPrice('15');
        shortTermAccommodationPage.expect.element('@formulaPdf').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Predpis');

    },
    'Short term accomodation for foreign students': function (client) {
        createShortTermAccommodationPage.createShortTermReservation();
        let shortTermAccommodationPage = client.page.shortterm_accomodation();
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Rezervované');
        shortTermAccommodationPage.clickEditButtonInFirstTableRow();
        client.pause(2000);
        createShortTermAccommodationPage.confirmShortTermResidentIdentity('foreign_id.json');
        shortTermAccommodationPage.expect.element('@header').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Potvrdené');
        client.pause(2000);
        shortTermAccommodationPage.clickEditButtonInFirstTableRow();
        client.pause(2000);
        createShortTermAccommodationPage.confirmPrice('15');
        shortTermAccommodationPage.expect.element('@formulaPdf').to.be.present.after(2000);
        shortTermAccommodationPage.expect.element('@noticeOfStay').to.be.present.after(2000);
        shortTermAccommodationPage.checkShortTermTableFirstRowForReservationStatus('Predpis');

    }

};
