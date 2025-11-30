const {Given, When, Then} = require("@cucumber/cucumber");
const irmEquipmentTableSearchActions = require('../support/IRMEquipmentTableSearchActions');
const irmInvenotryProfileTableSearchActions = require('../support/IRMInventoryProfileTableSearchActions');
const Utils = require('../support/utils');


When(/^I nevigate to the Inventory List Profiles$/, function() {
    irmInvenotryProfileTableSearchActions.nevigateToEquipmentListProfiles();
});
When(/^I click on search icon in inventory profile table$/, function() {
    irmEquipmentTableSearchActions.clickOnEquipmentSearchIcon();
});
When(/^I enter the unrefined search value to search inventory profile$/, function() {
    irmInvenotryProfileTableSearchActions.enterCustomSearchValue('Unrefined');
});
When(/^I enter the refined search value to search inventory profile$/, function() {
    irmInvenotryProfileTableSearchActions.enterCustomSearchValue('Refined');
});
When(/^I enter the incorrect search value to search inventory profile$/, function() {
    irmInvenotryProfileTableSearchActions.enterCustomSearchValue('incorrect');
});
When(/^I click on inventory profile (.*)$/, function(result) {
    irmInvenotryProfileTableSearchActions.clickOnInventoryProfile(result);
});
When(/^I try to sort the column description$/, function() {
    irmInvenotryProfileTableSearchActions.sortInventory();
});



Then(/^I should be able to view the Inventory List Profiles$/, function() {
    irmInvenotryProfileTableSearchActions.verifyInventoryProfiles();
});
Then(/^I can see search icon in Inventory Profile Table$/, function() {
    irmEquipmentTableSearchActions.verifyEquipmentSearchIcon();
});
Then(/^I can see search text box in inventory profile table$/, function() {
    irmEquipmentTableSearchActions.verifyEquipmentSearchBox();
});
Then(/^I can see the highlighted Inventory Profile (.*)$/, function(result) {
    irmInvenotryProfileTableSearchActions.verifyHighlightedSearchResults(result);
});
Then(/^I can see the Inventory Profile (.*)$/, function(result) {
    irmInvenotryProfileTableSearchActions.verifySearchResults(result);
});
Then(/^I can see the message No Data Available$/, function() {
    irmInvenotryProfileTableSearchActions.verifyNoInventoryProfileFound();
});
Then(/^I can see the search text (.*) is pre- populated in the inventory Profile drawer$/, function(searchText) {
    irmEquipmentTableSearchActions.verifyPrePopulatedText(searchText);
});
Then(/^I can see the key and search text (.*) is pre- populated in the inventory Profile drawer$/, function(searchText) {
    irmEquipmentTableSearchActions.verifyPrePopulatedText(searchText);
});
Then(/^I can see an actual inventory profile is opened by verifying serial (.*)$/, function(val) {
    irmInvenotryProfileTableSearchActions.verifyActualInventoryProfileOpened(val);
});
Then(/^I can see the table columns are sorted and the profile (.*) on top$/, function(val) {
    irmInvenotryProfileTableSearchActions.verifyInventoryProfilesSorted(val);
});
Then(/^I can see the record count is (.*)$/, function(result) {
    irmInvenotryProfileTableSearchActions.verifyCorrectCounts(result);
});