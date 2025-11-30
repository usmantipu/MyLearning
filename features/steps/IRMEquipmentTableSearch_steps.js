const {Given, When, Then} = require("@cucumber/cucumber");
const irmChecklistActions = require('../support/IRMChecklistActions');
const irmEquipmentTableSearchActions = require('../support/IRMEquipmentTableSearchActions');
const Utils = require('../support/utils');


When(/^I click on search icon in equipment profile table$/, function() {
    irmEquipmentTableSearchActions.clickOnEquipmentSearchIcon();
});
When(/^I click on lock icon in search bar$/, function() {
    irmEquipmentTableSearchActions.clickOnLockIconSearchBar();
});
When(/^I enter the search value (.*)$/, function(searchValue) {
    irmEquipmentTableSearchActions.enterSearchValue(searchValue);
});
When(/^I click on serial key$/, function() {
    irmEquipmentTableSearchActions.clickOnKey('serial');
});
When(/^I click on SKU key$/, function() {
    irmEquipmentTableSearchActions.clickOnKey('SKU');
});
When(/^I click on Manufacturer key$/, function() {
    irmEquipmentTableSearchActions.clickOnKey('Manufacturer');
});
When(/^I click on MAC key$/, function() {
    irmEquipmentTableSearchActions.clickOnKey('MAC');
});
When(/^I click on IP Address key$/, function() {
    irmEquipmentTableSearchActions.clickOnKey('IP Address');
});
When(/^I click on Location key$/, function() {
    irmEquipmentTableSearchActions.clickOnKey('Location');
});
When(/^I Click on X close button$/, function() {
    irmEquipmentTableSearchActions.clickOnCloseButton();
});
When(/^I enter the unrefined search value$/, function() {
    irmEquipmentTableSearchActions.enterCustomSearchValue('Unrefined');
});
When(/^I enter the refined search value$/, function() {
    irmEquipmentTableSearchActions.enterCustomSearchValue('Refined');
});
When(/^I click on locked icon in search bar$/, function() {
    irmEquipmentTableSearchActions.clickOnLockedIconSearchBar();
});
When(/^I enter the incorrect search value$/, function() {
    irmEquipmentTableSearchActions.enterCustomSearchValue('incorrect');
});
When(/^I click on equipment profile$/, function() {
    irmEquipmentTableSearchActions.clickOnEquipmentProfile();
});
When(/^I open an equipment$/, function() {
    irmEquipmentTableSearchActions.openEquipment();
});



Then(/^I can see search icon in equipment profile table$/, function() {
    irmEquipmentTableSearchActions.verifyEquipmentSearchIcon();
});
Then(/^I can see search text box in equipment profile table$/, function() {
    irmEquipmentTableSearchActions.verifyEquipmentSearchBox();
});
Then(/^I can see the following fields 'Serial No, MAC, SKU, IP Address, Location, Manufacturer'$/, function() {
    irmEquipmentTableSearchActions.verifyKeyFields();
});
Then(/^I can see the equipment Profile (.*)$/, function(result) {
    irmEquipmentTableSearchActions.verifySearchResults(result);
});
Then(/^I can see the search is cleared$/, function() {
    irmEquipmentTableSearchActions.verifySearchCleared();
});
Then(/^I can see the searched items counts$/, function() {
    irmEquipmentTableSearchActions.searchCounts();
});
Then(/^I can see the different searched counts$/, function() {
    irmEquipmentTableSearchActions.verifyRefinedSearchCounts();
});
Then(/^I can see that search key gets locked$/, function() {
    irmEquipmentTableSearchActions.verifySearchKeyLocked();
});
Then(/^I can see that search key gets unlocked$/, function() {
    irmEquipmentTableSearchActions.verifySearchKeyUnlocked();
});
Then(/^I can see the message No Equipment Profile available$/, function() {
    irmEquipmentTableSearchActions.verifyNoEquipmentFound();
});
Then(/^I can see the search text (.*) is pre- populated in the Equipment Profile drawer$/, function(searchText) {
    irmEquipmentTableSearchActions.verifyPrePopulatedText(searchText);
});
Then(/^I can see the key and search text (.*) is pre- populated in the Equipment Profile drawer$/, function(searchText) {
    irmEquipmentTableSearchActions.verifyPrePopulatedText(searchText);
});
Then(/^I cleared the search$/, function() {
    irmEquipmentTableSearchActions.clearSearch();
});
Then(/^I can see an actual equipment is opened by verifying serial (.*)$/, function(val) {
    irmEquipmentTableSearchActions.verifyActualEquipmentOpened(val);
});