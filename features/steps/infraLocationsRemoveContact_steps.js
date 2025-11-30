const {Given, When, Then} = require("@cucumber/cucumber");
const infraLocationsRemoveContactActions = require('../support/infraLocationsRemoveContactActions');
const Utils = require('../support/utils');

When(/^I open a newly added site$/, () => {
	infraLocationsRemoveContactActions.clickPlusIconToAddInfraLoc();
	infraLocationsRemoveContactActions.addInfrastructure();
	infraLocationsRemoveContactActions.addContact();
	infraLocationsRemoveContactActions.closeContactAndSitePopups();
});


When(/^I hover over an Infrastructure Location contact card$/, () => {
	infraLocationsRemoveContactActions.searchNewlyAddedSite();
	infraLocationsRemoveContactActions.openNewlyAddedSite();
	infraLocationsRemoveContactActions.moveMouseToContactCard();
});


Then(/^I should see a 'Delete' button appear on the contact card$/, () => {
	infraLocationsRemoveContactActions.deleteIconShown();
	Utils.clearLocalStorage();
});


When(/^I click the 'Delete' button that appears on the contact card$/, () => {
	infraLocationsRemoveContactActions.deleteIconShown();
	infraLocationsRemoveContactActions.clickDeleteIcon();
});


Then(/^I should see the confirmation prompt asking to confirm the deletion$/, () => {
	infraLocationsRemoveContactActions.confirmationAboutDeletion();
	Utils.clearLocalStorage();
});


Then(/^I should see a confirmation prompt with 'Yes' and 'No' buttons$/, () => {
	infraLocationsRemoveContactActions.yesNoButtonsOnDeleteAlert();
	Utils.clearLocalStorage();
});


When(/^I click 'Yes' in the confirmation prompt$/, () => {
	infraLocationsRemoveContactActions.clickYesButtonOnDeleteAlert ();
});


Then(/^the site contact should be removed successfully$/, () => {
	infraLocationsRemoveContactActions.verifyContactRemoval();
	Utils.clearLocalStorage();
});


When(/^I click 'No' in the confirmation prompt$/, () => {
	infraLocationsRemoveContactActions.clickNoButtonOnDeleteAlert();
});


Then(/^I should see the site contact in the Site Contacts list$/, () => {
	infraLocationsRemoveContactActions.verifyContactNotRemoved();
	Utils.clearLocalStorage();
});
