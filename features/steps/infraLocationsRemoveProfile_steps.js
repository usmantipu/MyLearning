const {Given, When, Then} = require("@cucumber/cucumber");
const infraLRemProActions = require('../support/infraLocationsRemoveProfileActions');
const Utils = require('../support/utils');

When(/^I go to the Settings mega menu$/, () => {
	infraLRemProActions.gotoMegaMenu();
});
When(/^I am on the profile definition form$/, () => {
	infraLRemProActions.goToInfaProfiles();
});
When(/^I am on the Infrastructure Profile list$/, () => {
	infraLRemProActions.goToInfaProfiles();
});


When(/^I create Infrastructure profile if it does not exists$/, (parameter) => {
	infraLRemProActions.createInfraProfile(parameter);
});
When(/^I see an unassigned Infrastructure Profile$/, (parameter) => {
	infraLRemProActions.isDeletProfileEnabled(parameter);
});
When(/^I click the Delete Profile button for that profile$/, () => {
	infraLRemProActions.clickDeleteProfileButton();
});
When(/^I have clicked Yes from the confirmation prompt to Delete InfraLocationProfile$/, () => {
	infraLRemProActions.clickBtnYesOfPopUp();
});



Then(/^I should see Infrastructure Profile in mega Menu$/, () => {
	infraLRemProActions.verifyInfraLocations();
	
	Utils.clearLocalStorage();
});
Then(/^I can see a list of already created Infrastructure Profiles$/, () => {
	infraLRemProActions.verifyListOfInfraProfiles();
});
Then(/^I can select from any Infrastructure Profile$/, () => {
	infraLRemProActions.verifyInfraLocationGetSelected();
	Utils.clearLocalStorage();
});
Then(/^I should see a Delete profile button$/, () => {
	infraLRemProActions.verifyIsDeleteProfilePresent();
	Utils.clearLocalStorage();
});

Then(/^I should see a confirmation prompt with Yes and No buttons$/, () => {
	infraLRemProActions.verifyConfirmationPopUpYesNo();
	Utils.clearLocalStorage();
});
Then(/^the Infrastructure Location should be removed successfully$/, () => {
	infraLRemProActions.verifyIfraLocationGetRemoved();
	Utils.clearLocalStorage();
});
Then(/^the removed Infrastructure Location should not be visible$/, () => {
	infraLRemProActions.verifyRemovedProfileIsNotVisible();
	Utils.clearLocalStorage();
});
