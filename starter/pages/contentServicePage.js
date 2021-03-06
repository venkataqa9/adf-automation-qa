module.exports = function () {
    'use strict';
    
    var objRepo = require('../resources/objectRepository.json');

    var objLocator = new utils.objectLocator();
    var inputBoxActions = new commons.inputBoxActions();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();

    var newFolder = objLocator.findLocator(objRepo.contentPage.clickOnFolder);
    var modalDialog = objLocator.findLocator(objRepo.contentPage.modalDialog);
    var nameinPut = objLocator.findLocator(objRepo.contentPage.name);
    var create = objLocator.findLocator(objRepo.contentPage.createBtn);
    var errorTextMessage = objLocator.findLocator(objRepo.contentPage.errorTextMessage);
    var cancelBtn = objLocator.findLocator(objRepo.contentPage.cancelBtn);
    var totalRows = objLocator.findLocator(objRepo.contentPage.totalRows);
    var deleteBtn = objLocator.findLocator(objRepo.contentPage.deleteBtn);
    

    this.selectCreateNewFolder = function () {
        buttonActions.click(newFolder);
        return this;
    };

    this.dialogIsDisplayed = function () {
        waitActions.waitForElementIsDisplayed(modalDialog);
        return this;
    };

    this.enterName= function (name) {
        inputBoxActions.type(nameinPut, name);
        return this;

    };

    this.create = function () {
        buttonActions.click(create);
        return this;
    };

    this.dialogIsClosed = function () {
        waitActions.waitForElementIsNotDisplayed(modalDialog);
        return this;
    };

    this.errorMessageIsDisplayed = function (message) {
        inputBoxActions.verifyText(errorTextMessage,message);
        buttonActions.click(cancelBtn);
        return this;
    };

    this.selectCreatedFolderAndClickOn3Dots = function () {

        List<Webelement> rows= element.all(totalRows);
        for (var i=1;i<=rows.length;i++)
        {
            var folderName=element(by.css(".adf-datatable-body adf-datatable-row:nth-child("+ i +") >div:nth-child(2)"));
            var dots= element(by.css(".adf-datatable-body adf-datatable-row:nth-child("+ i +") >div:nth-child(8)"));
           if (folderName.getText().matches("Venkata")){
                folderName.click();
                dots.click();
                break;
            }
        }
        buttonActions.click(deleteBtn);
        /* I found a bug, when I click on delete selected folder is not deleted and it is giving 403 status code*/
        return this;
    };


};
