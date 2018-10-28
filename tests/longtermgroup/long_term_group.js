module.exports = {
    tags: ['longTerm', 'sanity'],
    'Submit long term': function (client) {
        const loginPage = client.page.login_spona();
        loginPage.navigate();
        loginPage.loginToSystem('marianna.ask@gmail.com', '2468');
        client.pause(2000);
        let homePage = client.page.home();
        homePage.expect.element('@homeHeader').to.be.present.after(2000);
        homePage.expect.element('@homeHeader').to.contain.text('Informačný systém pre ubytovanie');
        client.pause(2000);
        //homePage.clickElementOnThePage('createLongTermAccomodation');
        client.url("http://ubytovanie.sponadev.qity.sk/lresidence/create");
        client.pause(2000);
        let longTermCreatePage = client.page.longterm_accomodationCreateForPerson();
        longTermCreatePage.submitLongTermReservation();

        client.end();
    },


};
