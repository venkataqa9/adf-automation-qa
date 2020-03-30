module.exports = function () {
    'use strict';
    // Login page
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var loginInput = objLocator.findLocator(objRepo.loginPage.loginInput);
    var passwordInput = objLocator.findLocator(objRepo.loginPage.passwordInput);
    var signInButton = objLocator.findLocator(objRepo.loginPage.signInButton);
    



    this.enterUserNameAndPassword = function (userName,password) {
         inputBoxActions.type(loginInput, userName);
         inputBoxActions.type(passwordInput, password);
        return this;

    };
    this.signin = function () {
        buttonActions.click(signInButton);
        return this;
    };


};
