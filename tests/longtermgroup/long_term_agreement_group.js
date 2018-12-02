const config = require('../config.json');
let createLongTermAccommodationPage;

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
        createLongTermAccommodationPage = client.page.longterm_accomodation_create_for_person();
        createLongTermAccommodationPage.navigate();
    },
    after(client) {
        client.end();
    },

    tags: ['longTermAgreement', 'sanity'],
    'Submit long term - check if additional agreement is generated': function (client) {
        createLongTermAccommodationPage.submitLongTermReservation('correct_data_test_current_month_date.json');
        let personCardPage = client.page.longterm_accommodation_person_card();
        personCardPage.expect.element('@personCardHeader').to.be.present.after(2000);
        personCardPage.expect.element('@personCardHeader').to.contain.text('Ubytovacia Karta');
        personCardPage.expect.element('@pdfResidenceAgrement').to.be.present.after(2000);
        personCardPage.clickElementOnThePage('editPersonDetailsButton');
        client.pause(2000);
        createLongTermAccommodationPage.updateEndDateOfAgreement(3);
        personCardPage.expect.element('@pdfAdditionalAgreement').to.be.present.after(3000);
    },
};
