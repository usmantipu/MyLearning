const {Given, When, Then} = require("@cucumber/cucumber");
const customFieldActions = require('../support/subscriberDetailsCustomFieldActions');
const Utils = require('../support/utils');

When(/^I click on custom field from settings$/, function() {
    customFieldActions.gotoCustomFieldsInAppsSettings();
});

When(/^I get list of enabled custom fields$/, function() {
    customFieldActions.getListofEnabledCustomFields();
    browser.pause(3000);
});

When(/^I click on the close icon$/, function() {
    customFieldActions.clickCloseIcon();
    browser.pause(2000);
});

When(/^I go to custom fields and enter data$/, function(fieldData) {
    customFieldActions.getCustomFieldsInSubscribers();
    customFieldActions.enterDataInCustomFields(fieldData,customFieldActions.genUniqueIPAddress(),customFieldActions.genUniqueMAC());
    browser.pause(2000);
});

When(/^I click on cancel button$/, function() {
    customFieldActions.clickCancelBtn();
    browser.pause(2000);
});

When(/^I click on save button$/, function() {
    customFieldActions.clickSaveBtn();
});

When(/^I set type of second custom field to email$/, function() {
    customFieldActions.setSecondCustomFieldAsEmail('Email');
});

When(/^I set type of third custom field to ip address$/, function() {
    customFieldActions.setThirdCustomFieldAsEmail('IP Address');
});

When(/^I go to custom fields and enter invalid ip address$/, function(fieldData) {
    customFieldActions.enterDataInCustomFields(fieldData,'172.168.9',customFieldActions.genUniqueMAC());
});

When(/^I set type of fourth custom field to MAC address$/, function() {
    customFieldActions.setFourthCustomFieldAsEmail('Mac Address');
});

When(/^I go to custom fields and enter invalid MAC address$/, function(fieldData) {
    customFieldActions.enterDataInCustomFields(fieldData,customFieldActions.genUniqueIPAddress(),'AD:B6:67:76:BA:B');
});

Then(/^I go to Subscriber custom fields and verify$/, function() {
    customFieldActions.CompareCustomFieldsfromTabAndVerify();
    Utils.clearLocalStorage()
});


Then(/^I should see custom fields reverted to previous values$/, function() {
    customFieldActions.verifyEmptyCustomFieldsInSubscribers();
    Utils.clearLocalStorage()
});

Then(/^I should see Saved successfully toast$/, function() {
    customFieldActions.verifyChangesSaved();
    Utils.clearLocalStorage()
});

Then(/^I should see values in custom fields$/, function() {
    customFieldActions.verifyFieldsValuePersists();
    Utils.clearLocalStorage()
});

Then(/^I recieve error message for invalid email$/, function() {
    customFieldActions.verifyEmailValidationErrorMsg();
    Utils.clearLocalStorage()
});

Then(/^save button should remain disabled$/, function() {
    customFieldActions.verifySaveButtonIsNotClickable();
    Utils.clearLocalStorage()
});

Then(/^I recieve error message for invalid ip address$/, function() {
    customFieldActions.verifyIpAddressValidationErrorMsg();
    Utils.clearLocalStorage()
});

Then(/^I recieve error message for invalid MAC address$/, function() {
    customFieldActions.verifymacAddressValidationErrorMsg();
    Utils.clearLocalStorage()
});



