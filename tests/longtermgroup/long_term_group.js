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

    tags: ['longTerm', 'sanity'],
    'Submit long term - positive case': function (client) {
        createLongTermAccommodationPage.submitLongTermReservation('correct_data_test.json');
        let personCardPage = client.page.longterm_accommodation_person_card();
        personCardPage.expect.element('@personCardHeader').to.be.present.after(2000);
        personCardPage.expect.element('@personCardHeader').to.contain.text('Ubytovacia Karta');
    },
    'Try to submit long term with invalid end date': function () {
        createLongTermAccommodationPage.submitLongTermReservation('invalid_end_reservation_date_test.json');
        createLongTermAccommodationPage.expect.element('@alertMessageText').to.be.present.after(3000);
        createLongTermAccommodationPage.expect.element('@alertMessageText').to.contain.text('Termin zacatia ubytovania je nespravny.');
    },
    'Try to submit long term with invalid birth date': function () {
        createLongTermAccommodationPage.submitLongTermReservation('invalid_birth_date_test.json');
        createLongTermAccommodationPage.expect.element('@alertMessageText').to.be.present.after(3000);
    },
    'Submit long term - current date': function (client) {
        createLongTermAccommodationPage.submitLongTermReservation('correct_data_test_current_month_date.json');
        let personCardPage = client.page.longterm_accommodation_person_card();
        personCardPage.expect.element('@personCardHeader').to.be.present.after(2000);
        personCardPage.expect.element('@personCardHeader').to.contain.text('Ubytovacia Karta').after(2000);
        client.pause(5000);
    }

};
