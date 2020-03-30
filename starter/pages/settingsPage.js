module.exports = function () {
    'use strict';
   
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var dropDownActions = new commons.dropDownActions();

    var providerDropdown=objLocator.findLocator(objRepo.searchPage.providerDropdown);
    var applyButton = objLocator.findLocator(objRepo.searchPage.applyButton);
   

    this.openHomePage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path);
        return this;
    };

    this.isPageLoaded = function () {
        waitActions.waitForElementIsDisplayed(applyButton);
        return this;
    };

    this.changeProvider = function(value) {
    //dropDownActions.select(providerDropdown,value); 
    /* dropdown is not working it has to be select but it was mat-select so using click instead */
        buttonActions.click(providerDropdown);
        return this;
    }

    this.apply = function () {
        buttonActions.click(applyButton);
        return this;
    };
};