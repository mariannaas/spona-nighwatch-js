const config = require('../config.json');

module.exports = {

  tags: ['login', 'sanity'],
  'Login as an admin': function (client) {
    let loginPage = client.page.login_spona();
    loginPage.navigate();
    loginPage.loginToSystem(config.admin.email, config.admin.password);
    let homePage = client.page.home();
    homePage.expect.element('@homeHeader').to.be.present.after(2000);
    homePage.expect.element('@longTermAccommodationPayments').to.be.present.after(2000);
    homePage.expect.element('@allDormitoriesList').to.be.present.after(2000);
    homePage.expect.element('@homeHeader').to.be.present.after(2000);
    homePage.expect.element('@shortTermAccommodation').to.be.present.after(2000);
    homePage.expect.element('@booking').to.be.present.after(2000);
    homePage.expect.element('@longTermAccommodation').to.be.present.after(2000);
    homePage.expect.element('@calendar').to.be.present.after(2000);
    homePage.expect.element('@statistics').to.be.present.after(2000);
    client.end();
  },

  'Login as a user': function (client) {
    let loginPage = client.page.login_spona();
    loginPage.navigate();
    loginPage.loginToSystem(config.user.email, config.user.password);
    let homePage = client.page.home();
    homePage.expect.element('@homeHeader').to.be.present.after(2000);
    homePage.expect.element('@shortTermAccommodation').to.be.present.after(2000);
    homePage.expect.element('@booking').to.be.present.after(2000);
    homePage.expect.element('@longTermAccommodation').to.be.present.after(2000);
    homePage.expect.element('@calendar').to.be.present.after(2000);
    homePage.expect.element('@statistics').to.be.present.after(2000);
    client.end();
  },

  'Login as a doorman': function (client) {
    let loginPage = client.page.login_spona();
    loginPage.navigate();
    loginPage.loginToSystem(config.doorman.email, config.doorman.password);
    let homePage = client.page.home();
    homePage.expect.element('@homeHeader').to.be.present.after(2000);
    homePage.expect.element('@shortTermGateHouseAccommodation').to.be.present.after(2000);
    homePage.expect.element('@longTermGateHouseAccommodation').to.be.present.after(2000);
    homePage.expect.element('@calendarGateHouse').to.be.present.after(2000);
    homePage.expect.element('@statistics').to.be.not.present.after(2000);
    client.end();
  },

  'Login as a CRZ': function (client) {
    let loginPage = client.page.login_spona();
    loginPage.navigate();
    loginPage.loginToSystem(config.crz_user.email, config.crz_user.password);
    let crz_home = client.page.crz_home();
    crz_home.expect.element('@elFinder').to.be.present.after(2000);
    client.end();
  }
};