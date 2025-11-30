const {Given, When, Then} = require("@cucumber/cucumber");
const searchFilterActions = require('../support/searchFiltersActions');
const subscriberlistActions = require('../support/subscriberlistActions');
const Utils = require('../support/utils');

/*When(/^I go to subscribers$/,function(){
    subscriberlistActions.openSubscriberList();
});*/
When(/^I click New filter in search Bar$/,function() {
    searchFilterActions.clickOnNewFilterBtn();
});
When(/^I open all filters from search Bar$/,function(){
    searchFilterActions.expandFilters();
});
When(/^I move to filter$/,function(){
    searchFilterActions.hoverOverFilter();
});

Then(/^I can enter filter details$/,function() {
    searchFilterActions.enterFilterDetails();
    searchFilterActions.pressSaveFilterBtn();
});
Then(/^I can save the filter with a name$/,function() {
    searchFilterActions.saveFilterName();
    Utils.clearLocalStorage()
});
Then(/^I can see a suggestion list in column field$/,function(){
    searchFilterActions.verifySuggestionListOfColumnField();
    Utils.clearLocalStorage()
});
Then(/^I can see a suggestion list in operator field$/,function(){
    searchFilterActions.verifySuggestionListInOperatorField();
    Utils.clearLocalStorage()
});
Then(/^I am not required to fill value field when operator field is set to "is empty"$/,function(){
    searchFilterActions.verifyNotRequiredFillValueField('is empty');
    Utils.clearLocalStorage()
});
Then(/^I am not required to fill value field when operator field is set to "is not empty"$/,function(){
    searchFilterActions.verifyNotRequiredFillValueField('is not empty');
    Utils.clearLocalStorage()
});
Then(/^I always view "is empty", "is not empty", "equals", "does not equal" as Operator field options for all fields$/,function(data){
    searchFilterActions.verifyOptionsForFields(data);
    Utils.clearLocalStorage()
});
Then(/^I Add multiple rows of criteria$/,function() {
    searchFilterActions.addMultipleRowsCriteria('multiple');
    Utils.clearLocalStorage()
});
Then(/^I Add few rows of criteria$/,function() {
    searchFilterActions.addMultipleRowsCriteria('two');
    Utils.clearLocalStorage()
});
Then(/^I can remove a criteria by clicking the X button$/,function(){
    searchFilterActions.removeCriteria();
    Utils.clearLocalStorage()
});
Then(/^I Add multiple rows of criteria with same values$/,function(){
    searchFilterActions.addMultipleRowsCriteriaWithSameValues('two');
    Utils.clearLocalStorage()
});
Then(/^I cannot save the filter$/,function(){
    searchFilterActions.verifyCannotSaveFilter("not empty");
    Utils.clearLocalStorage()
});
Then(/^I cannot save a filter if all required fields are not filled in$/,function(){
    browser.pause(2000);
    searchFilterActions.verifyCannotSaveFilterWhileRequiredEmpty("empty");
    Utils.clearLocalStorage()
});
Then(/^I open a filter to edit it$/,function(){
    searchFilterActions.openAFilterToEdit();
    Utils.clearLocalStorage()
});
Then(/^I open first filter to edit$/,function(){
    searchFilterActions.editFirstFilter();
    Utils.clearLocalStorage()
});
Then(/^I can rename it$/,function(){
    searchFilterActions.renameAFilter();
    searchFilterActions.pressBtnUpdateFilter();
    Utils.clearLocalStorage()
});
Then(/^I can save it as a new filter by using Save as feature$/,function(){
    searchFilterActions.pressSaveAsNewFilterBtn();
    Utils.clearLocalStorage()
});
Then(/^I see a warning prompt when I try to close the filter form$/,function(){
    searchFilterActions.verifyWarningPrompt();
    Utils.clearLocalStorage()
});
Then(/^I see email dock opens when I click the Email button$/,function(){
    searchFilterActions.verifyEmailDock();
    Utils.clearLocalStorage()
});
Then(/^I see that filter is selected in the To field of email form$/,function(){
    searchFilterActions.verifyEmailFilterChecked();
    Utils.clearLocalStorage()
});