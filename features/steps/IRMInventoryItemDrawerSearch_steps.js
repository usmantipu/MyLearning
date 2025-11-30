const {Given, When, Then} = require("@cucumber/cucumber");
const irmInventoryProfileDrawerSearchActions = require('../support/IRMInventoryItemDrawerSearchActions');


When(/^I clicked on inventory profile (.*)$/, function(result) {
    console.log('I am opening profile')
    irmInventoryProfileDrawerSearchActions.clickOnInventoryProfile(result);
});
When(/^I close the drawer the cleared the search$/, function() {
    console.log('I am closing drawer and clearing the previous search')
    irmInventoryProfileDrawerSearchActions.closeDrawerAndClearSearch();
});
When(/^I sort the column current location$/, function() {
    console.log('I am sorting current location column')
    irmInventoryProfileDrawerSearchActions.sortColumn();
});
When(/^I set pagination to display records accordingly$/, function() {
    irmInventoryProfileDrawerSearchActions.setPagination();
});


Then(/^I can see search box in inventory profile drawer$/, function() {
    irmInventoryProfileDrawerSearchActions.verifySearchBox();
});
Then(/^I can see the highlighted result (.*)$/, function(result) {
    irmInventoryProfileDrawerSearchActions.verifyHighlightedResult(result);
});
Then(/^I can see the inventory item having serial (.*)$/, function(result) {
    irmInventoryProfileDrawerSearchActions.verifyExpectedResult(result);
});
Then(/^I can see (.*) location at top row$/, function(result) {
    irmInventoryProfileDrawerSearchActions.verifySortedData(result);
});
Then(/^I can see the correct data is displayed based on pagination$/, function() {
    irmInventoryProfileDrawerSearchActions.verifyCorrectDataDisplayed();
});