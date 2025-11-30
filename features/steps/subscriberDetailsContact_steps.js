const {Given, When, Then} = require("@cucumber/cucumber");
const { saveButtonDisabled } = require('../support/subscriberDetailsContactActions');
const subContactActions = require('../support/subscriberDetailsContactActions');
const Utils = require('../support/utils');

//#region TA-65 When
When(/^I open edit contact section$/, function()  {
	subContactActions.clickEditIconSvg();
});

When(/^I attempt to save contact details with blank First Name$/, function()  {
	subContactActions.emptyContactFirstName();
});
When(/^I attempt to save contact details with blank Last Name$/, function()  {
	subContactActions.emptyContactLastName();
});
When(/^I attempt to save contact details with blank Address1$/, function()  {
	subContactActions.removeContactAddress();
});
When(/^I ensure that international address is disabled$/, function()  {
	subContactActions.verifyInternationalAddressIsDisabled();
});

When(/^I attempt to save contact details with empty City$/, function()  {
	subContactActions.removeContactCityToSave();
});
When(/^I ensure that international address is enabled$/, function()  {
	subContactActions.verifyInternationalAddressIsEnabled();
});

When(/^I enter a value in state field of Primary contact that is not available in the dropdown$/, function()  {
	subContactActions.enterStateFieldValue();
});

When(/^I attempt to save billing contact details with blank First Name$/, function() {
	subContactActions.saveBillingContactWithBlankFirstName();
});

When(/^I attempt to save billing contact details with blank Last Name$/, function() {
	subContactActions.saveBillingContactWithBlankLastName();
});
//#endregion

When(/^I open Billing Contact tab and click edit icon$/, function()  {
	subContactActions.openBillingContactTabAndClickEditIcon();
});

When(/^I enable and Open Billing Contact tab$/, function()  {
	subContactActions.openBillingContactAndUpdateDetails();
});

When(/^I attempt to save billing contact details with blank Address 1$/, function() {
	subContactActions.saveBillingContactWithBlankAddress();
});

When(/^I ensure that international address is as (.*)$/, function(status) {
    subContactActions.verifyInternationalAddressStatus(status);
});

When(/^I attempt to save contact details with blank City$/, function() {
	subContactActions.saveWithBlankCityField();
});

When(/^I enter details for Billing contact info$/, () => {	
    subContactActions.getValueOfExistingAddress();
    subContactActions.setNewAddress();
});

When(/^I enter the valid value in phone field$/, function() {
	subContactActions.enterValidPhoneNumber();
});

When(/^I enter a value in state field that is not available in the dropdown$/, function() {
	subContactActions.setInvalidValueInStateField();
});

When(/^I enter the (.*) value in email field$/, function(status) {
    subContactActions.enterEmailAddress(status);
});

When(/^I change the email address type$/, function() {
	subContactActions.changeTypeCheckBoxStatus();
});

When(/^I edit contact details of a subscriber and cancel it$/, () => {
	subContactActions.editContactDetailsAndCancel();
});

//#region TA-65 Then
Then(/^I should see the contact section$/, function() {
	subContactActions.verifyFieldsValueContactSection();
    Utils.clearLocalStorage()
});

Then(/^I should see an appropriate error message for Firstname$/, function() {
    subContactActions.verifyFirstNameRequiredErrorMessage();
    Utils.clearLocalStorage()
});

Then(/^I should see an appropriate error message for Lastname$/, function() {
    subContactActions.verifyLastNameRequiredErrorMessage();
    Utils.clearLocalStorage()
});

Then(/^I should see an appropriate error message for Address1$/, function() {
    subContactActions.verifyAddress1RequiredErrorMessage();
    Utils.clearLocalStorage()
});

Then(/^I should see an appropriate error message for city$/, function() {
    subContactActions.verifyCityIsRequiredErrorMessage();
    Utils.clearLocalStorage()
});

Then(/^The contact details related to city should be saved$/, function() {
	subContactActions.saveContactChanges();
    subContactActions.verifyCityChangesSaved();
    Utils.clearLocalStorage()
});
Then(/^The primary contact state previous value is restored as I save the details$/, function() {
	subContactActions.verifyPrimaryConatctStateFieldOldValue();
    Utils.clearLocalStorage()
});

Then(/^I verify the primary contact state dropdown options are USA based$/, function() {
	subContactActions.verifyPrimaryContactState();
	Utils.clearLocalStorage()
});

Then(/^The label of state field should be 'state' instead of 'province'$/, function() {
	subContactActions.verifyStateFieldLable();
	Utils.clearLocalStorage()
});

Then(/^I see accurate data in billing contact section$/, function() {
	subContactActions.verifyDataInBillingContactSection();
	Utils.clearLocalStorage()
});

Then(/^I should see an appropriate error message for blank billing Firstname$/, function() {
    subContactActions.verifyBlankBillingFirstNameErrorMsg();
    Utils.clearLocalStorage()
});
Then(/^I should see an appropriate error message for blank billing Lastname$/, function() {
    subContactActions.verifyBlankBillingLastNameErrorMsg();
    Utils.clearLocalStorage()
});
//#endregion

Then(/^I should see that save button is disabled$/, function() {
	subContactActions.verifySaveButtonDisabled();
	Utils.clearLocalStorage()
});

Then(/^I should see an appropriate error message$/, function() {
	subContactActions.verifyErrorMessage();
	Utils.clearLocalStorage()
});

Then(/^I should see that previous values are preserved$/, () => {
	subContactActions.verifyPreviousValueAreRestored();
	Utils.clearLocalStorage()
});

Then(/^I can save the contact details$/, () => {
	subContactActions.saveAndConfirm();
	Utils.clearLocalStorage()
});

Then(/^I can see that email address type changed successfully$/, () => {
	subContactActions.verifyEmailAddressTypeChanged();
	Utils.clearLocalStorage()
});

Then(/^I can see the updated email addresses of the subscriber$/, function()  {
	subContactActions.saveWithUpdatedEmailAddress();
	Utils.clearLocalStorage()
});

Then(/^I see phone field is automatically formatted$/, function() {
	subContactActions.validatePhoneNumber();
	Utils.clearLocalStorage()
});


Then(/^The contact details should be saved$/, function() {
	subContactActions.saveAndConfirm();
	Utils.clearLocalStorage()
});

Then(/^The previous value is restored as I save the details$/, function()  {
	subContactActions.verifyStateFieldOldValue();
	Utils.clearLocalStorage()
});

Then(/^I verify the state dropdown options are USA based$/, function() {
	subContactActions.verifyStateFieldForValidValues();
	Utils.clearLocalStorage()
});

Then(/^I see zip field is automatically formatted$/, () => {
	subContactActions.checkZipFieldAsPerAddress();
	Utils.clearLocalStorage()
});
