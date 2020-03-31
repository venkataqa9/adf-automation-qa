module.exports = function () {
    'use strict';
  
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var demoLogo = objLocator.findLocator(objRepo.demoPage.demoLogo);


    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(demoLogo);
        return this;
    };

   this.openSearchPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        browser.navigate().to();
        return this;
    };

    this.openSearchPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        browser.navigate().to(path);
        return this;
    };





};
