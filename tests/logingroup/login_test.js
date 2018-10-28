const config = require('../config.json');

module.exports = {
    tags: ['login','sanity'],
    'Login as an admin' : function (client) {
        const loginPage = client.page.login_spona();
        loginPage.navigate();
        loginPage.loginToSystem(config.admin.email,config.admin.password);
        client.pause(2000);
        let homePage = client.page.home();
        homePage.expect.element('@homeHeader').to.be.present.after(2000);
        homePage.expect.element('@homeHeader').to.contain.text('Informačný systém pre ubytovanie');
        client.end();
    },

    'Login as a user' : function (client) {
        const loginPage = client.page.loginSpona();
        loginPage.navigate();
        loginPage.loginToSystem(config.user.email,config.user.password);
        client.pause(2000);
        let homePage = client.page.home();
        homePage.expect.element('@homeHeader').to.be.present.after(2000);
        homePage.expect.element('@homeHeader').to.contain.text('Informačný systém pre ubytovanie');


        client.end();
    }
};
