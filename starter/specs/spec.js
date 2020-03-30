// spec.js

describe('ADF Demo App', function() {

  'use strict';
  
  var testData = require('../resources/testData.json');


var settingsPage = new pages.settingsPage();
var loginPage= new pages.loginPage();
var homepage= new pages.homepage();
var contentServicePage = new pages.contentServicePage();


  it('open alfresco qa exercise', function() {
        settingsPage.openHomePage(testData.search.baseUrl);
        settingsPage.isPageLoaded();
  });

  it('Change Provider to ECM',function(){
        searchPage.changeProvider(testData.providerValue.value);
  });

  it('Click Apply',function(){
        searchPage.apply();
  });

  it('Enter userName and password',function(){
        loginPage.enterUserNameAndPassword(testData.login.userName,testData.login.password);
  });

  it('Click on signin',function(){
        loginPage.signin();
        homepage.isPageLoaded();
  });

  it('Navigate to files', function () {
        homepage.navigateToFiles(testData.homePage.filesUrl);
        
  });

  it('Click on create folder', function () {
        contentServicePage.selectCreateNewFolder();
        
  });

  it('New folder dialog is displayed', function () {
        contentServicePage.dialogIsDisplayed();
        
  });

  it('Enter name',function(){
        contentServicePage.enterName(testData.modal.name);
  });

  it('Click on Create button',function(){
        contentServicePage.create();
  });

  it('Dialog is not displayed',function(){
        contentServicePage.dialogIsClosed();
  });

  it('Click on create folder', function () {
        contentServicePage.selectCreateNewFolder();
        
  });

  it('New folder dialog is displayed', function () {
        contentServicePage.dialogIsDisplayed();
        
  });

  it('Enter name',function(){
        contentServicePage.enterName(testData.modal.name);
  });

  it('Click on Create button',function(){
        contentServicePage.create();
  });

  it('Dialog is not closed', function () {
        contentServicePage.dialogIsDisplayed();
        
  });

  it('Error message is displayed', function () {
        contentServicePage.errorMessageIsDisplayed(testData.message.errorMessage);
        
  });

  it('Select created folder and click on 3 dots to delete file', function () {
        contentServicePage.selectCreatedFolderAndClickOn3Dots();
        
  });



});