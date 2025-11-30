const {Given, When, Then} = require("@cucumber/cucumber");
const irmPOActions = require('../support/IRMPurchaseOrderTableSearchActions');
const Utils = require('../support/utils');
const IRMActions = require("../support/IRMActions");
  
When(/^I click on the Purchase Order Table search bar$/, function () {
	irmPOActions.clickOnPOsearch();
});
When(/^I click on Lock Icon of the Purchase Order Table search bar$/, function () {
	irmPOActions.clickOnSearchLockIcon();
});
When(/^I select Purchase Order field (.*) from the field options$/, function (field) {
	irmPOActions.selectPoKey(field);
});
When(/^I input (.*) in the search box of the Purchase Order$/, function (valueTosearch) {
	irmPOActions.inputPoSearchData(valueTosearch);
});
When(/^I clear the search box of the Purchase Order$/, function () {
	irmPOActions.clearSearchBox();
});
When(/^I add one more character (.*) in the search box of the Purchase Order$/, function (newcharc) {
	irmPOActions.addMoreCharacter(newcharc);
});
When(/^I click on the closed Lock of the search bar of Purchase Order Table$/, function () {
	irmPOActions.clickLockClosedIcon();
});
When(/^I sort the Purchase Order column (.*)$/, function (field) {
	field = field.replace(/['"]+/g, '');
	if(field=='Total' || field=='Status')
	{
		irmPOActions.keepOnlyLastColumns();
	}
	irmPOActions.sortPoColumns(field);
});
When(/^I enable show archive option for the Purchase Order Table$/, function () {
	irmPOActions.enableShowArchiveOption();
});
  



  
Then(/^I can see search bar in Purchase Order Table$/, function () {
	irmPOActions.verifyPOsearchTable();
	//Utils.clearLocalStorage();
});
Then(/^I can see Purchase Order Table search box$/, function () {
	irmPOActions.verifyPOsearchBox();
	//Utils.clearLocalStorage();
});
Then(/^I can see the following fields of the Purchase Order Table$/, function (poFields) {
	irmPOActions.PoSearcFields(poFields);
	//Utils.clearLocalStorage();
});
Then(/^I can see the field (.*) get selected in Purchase Order search box$/, function (field) {
	irmPOActions.verifyPoSearchKey(field);
	//Utils.clearLocalStorage();
});
Then(/^I can see the Purchase Order column (.*) with value (.*) searched successfully$/, function (field,expectedValue) {
	//irmPOActions.RestoreColumns();
	field = field.replace(/['"]+/g, '');
	if(field=='Total' || field=='Status')
	{
		irmPOActions.keepOnlyLastColumns();
	}
  //irmPOActions.verifyPoInThePOTable(field,expectedValue);
	irmPOActions.verifyCoumnValue(field,expectedValue);
	Utils.clearLocalStorage();
});
Then(/^I can see the searched text (.*) is highlighted in Purchase Order Table$/, function (text) {
	irmPOActions.verifySearchedTextHighlight(text);
	Utils.clearLocalStorage();
});
Then(/^I can see the searched of the Purchase Order is empty$/, function () {
	irmPOActions.verifySearchBoxGetEmpty();
	Utils.clearLocalStorage();
});
Then(/^I can see multiple search results matching in the Purchase Order$/, function () {
	irmPOActions.verifyMultipleSearchResults();
	//Utils.clearLocalStorage();
});
Then(/^I can see single matching search result in the Purchase Order$/, function () {
	irmPOActions.verifySingleSearchResult();
	Utils.clearLocalStorage();
});
Then(/^I can see Locked Icon in the search bar of Purchase Order Table$/, function () {
	irmPOActions.verifySearchKeyLocked();
	//Utils.clearLocalStorage();
});
Then(/^I can see the message (.*) as search result in the Purchase Order Table$/, function (meesage) {
	irmPOActions.verifyNoDataMessage(meesage);
	Utils.clearLocalStorage();
});
Then(/^I can see that Purchase Order column (.*) get sorted$/, function (field) {
	irmPOActions.verifySortedInInventory(field);
	//Utils.clearLocalStorage();
});
