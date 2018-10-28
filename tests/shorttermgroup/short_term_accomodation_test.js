
module.exports = {
    tags: ['shortTerm','sanity'],
    'Short term accomodation simple test' : function (client) {
        const loginPage = client.page.login_spona();
        loginPage.navigate();
        loginPage.loginToSystem('marianna.ask@gmail.com','2468');
        client.pause(2000);
        let homePage = client.page.home();
        homePage.expect.element('@homeHeader').to.be.present.after(2000);
        homePage.expect.element('@homeHeader').to.contain.text('Informačný systém pre ubytovanie');
        homePage.clickElementOnThePage('shortTermAccomodation');
        client.pause(2000);
        client.end();
    }

};
