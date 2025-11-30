const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberDetailsAddInvoiceItemsActions = require('../support/subscriberDetailsAddInvoiceItemsActions');
const Utils = require('../support/utils');

When(/^I click on new invoice$/, function(){
    subscriberDetailsAddInvoiceItemsActions.clickOnNewInvoice();
});
When(/^I edit the Qty field to a value greater than 1$/, function(){
    subscriberDetailsAddInvoiceItemsActions.editQtyField('3');
});
When(/^I empty the Qty field$/, function(){
    subscriberDetailsAddInvoiceItemsActions.editQtyField('');
});
When(/^I edit the Qty field value with 0$/, function(){
    subscriberDetailsAddInvoiceItemsActions.editQtyField('0');
});
When(/^I edit the Qty field value with letters$/, function(){
    subscriberDetailsAddInvoiceItemsActions.editQtyField('abc');
});
When(/^I edit the Qty field value with special character$/, function(){
    subscriberDetailsAddInvoiceItemsActions.editQtyField('!@#$%^&*');
});
When(/^I edit the Qty field to 3 and check the multiple-package-setting checkbox and Add to Invoice$/, function(){
    subscriberDetailsAddInvoiceItemsActions.editQtyFieldAndCheckMultiplePackageSetting(true);
});

Then(/^I can see The Qty field on the details section is enabled, can be edited, and with a default value of 1$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyQuantityField();
});
Then(/^The multiple-package-setting checkbox is disabled$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyMultiplePackageSetting('disabled');
});
Then(/^The multiple-package-setting checkbox becomes enabled$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyMultiplePackageSetting('enabled');
});
Then(/^Add to invoice or Add and Configure button is disabled$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyAddToInvoiceBtnDisabled();
});
Then(/^Qty is required error message is displayed below the field$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyErrorMsg('Qty is required');
});
Then(/^Invalid quantity error message is displayed below the field$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyErrorMsg('Invalid quantity');
});
Then(/^The letter inputs are not entered into the Qty field$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyEmptyField();
});
Then(/^The special character inputs are not entered into the Qty field$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyEmptyField();
});
Then(/^I can see the multiple-package-setting checkbox is checked$/, function() {
    subscriberDetailsAddInvoiceItemsActions.verifyMultiplePackageSettingChecked(true);
});