const { Given, When, Then } = require("@cucumber/cucumber");
// const equipmentActions = require('../support/IRMActions');
const equipmentActions = require('../support/equipmentAssembliesSearchActions');
const Utils = require('../support/utils');

When(/^I navigate to the IRM page$/, () => {
	equipmentActions.navigateToIRMPage();
});


When(/^I navigate to the Equipment Assembly Tab$/, function () {
	equipmentActions.clickEquipmentAssemblyTab();
});

When(/^I copy the first record in Tiles view$/, () => {
	// equipmentActions.changeEquipmentProfileView('Tiles');
	equipmentActions.selectCopyAssembly();
	equipmentActions.copyAssemblyUpdated();	
});


When(/^I perform the search for the existing records$/, () => {
	equipmentActions.performSearchInListView();
});

Then(/^I can see that search results are refined when entering or removing a character from search text$/, () => {
	equipmentActions.searchRefinement();
	Utils.clearLocalStorage();
});

Then(/^I can see that search key gets locked when selecting the key$/, () => {
	equipmentActions.verifyLockedIconInSearch();
	Utils.clearLocalStorage();
});

When(/^I make sure that search field is locked by select key as (.*)$/, function (option) {
	equipmentActions.changeEquipmentProfileView('List');
	equipmentActions.clickOnEquipmentAssemblySearch();
	equipmentActions.clickLockOpenIcon();
	equipmentActions.clickSearchOptionAs(option);
	equipmentActions.verifyLockedIconInSearch();
});


When(/^I unselect the key (.*)$/, function (option) {
	equipmentActions.clickUnlockOpenIcon();
	equipmentActions.clickSearchOptionAs(option);
});


Then(/^I can see that search key gets unlocked when unselecting the key$/, () => {
	equipmentActions.verifyUnlockedIconInSearch();
	Utils.clearLocalStorage();
});


When(/^I click on search icon in List view$/, () => {
	equipmentActions.changeEquipmentProfileView('List');
	equipmentActions.clickOnEquipmentAssemblySearch();
});


When(/^I click on lock icon$/, () => {
	equipmentActions.clickLockOpenIcon();
});

When(/^I select the option from the context menu as (.*)$/, function (option) {
	equipmentActions.clickSearchOptionAs(option);
});

Then(/^I can see the selected option in the search field as (.*)$/, function (option)  {
	equipmentActions.verifySerialSelectedInSearch (option);
});


When(/^I add an equipment assembly record$/,{timeout: 240000}, function()  {
	// equipmentActions.addNewInfrastructureProfileFromAppIcon()
	// equipmentActions.addNewInventoryProfileFromMenu();
	// equipmentActions.addInventoryProfile();
	// equipmentActions.addEquipmentProfile();
	//equipmentActions.inventoryProfileClose();
	//equipmentActions.addNewInfrastructureLocation("base");
	equipmentActions.addNewEquipment("test");
	equipmentActions.addNewChildEquipment("test");
	equipmentActions.closeInfraLocationPopup();

});


When(/^I enter the key to perform search as (.*)$/, function (option)  {

	equipmentActions.enterSearchValue(option);
});


When(/^I change the euipment assemblies view as List$/, function()  {
	equipmentActions.changeEquipmentProfileView('List');
});


Then(/^I can see at least one result when perfomed search for following keys$/,{timeout: 180000}, function(option)  {
	equipmentActions.enterSearchValueOneByOne(option);
});


Then(/^I can see search icon in Equipment Assemblies Table$/, () => {
	equipmentActions.verifySearchIconInAssemblyTable();
});


When(/^I click on search icon in Equipment Assemblies Table$/, () => {
	equipmentActions.clickOnEquipmentAssemblySearch();
});


Then(/^I can see search text box when click on search icon$/, () => {
	equipmentActions.verifySearchTextboxAppears();
	Utils.clearLocalStorage();
});


When(/^I add a new Infrastructure Profile record$/, () => {
	equipmentActions.addNewInfrastructureProfileFromAppIcon();
});


When(/^I add a new Inventory Profile record$/, () => {
	equipmentActions.addNewInventoryProfileFromMenu();
	equipmentActions.addInventoryProfile();

});


When(/^I add a new Equipment Profile record$/, () => {
	equipmentActions.addEquipmentProfile();
	// equipmentActions.addVendors();
	equipmentActions.inventoryProfileClose();
});


When(/^I add a new Infrastructure Location$/, () => {
	equipmentActions.addNewInfrastructureLocation("base");
});


When(/^I add a new Equipment record$/, () => {
	equipmentActions.addNewEquipment("base");
});


When(/^I add a new Child Equipment record$/, () => {
	equipmentActions.addNewChildEquipment("base");
	equipmentActions.closeInfraLocationPopup();
});


When(/^I type in Equipment Assemblies search textbox in List view$/, function () {
	equipmentActions.typeInEquipmentAssemblySearchInListView();
});

When(/^I type in Equipment Assemblies search textbox for unavailable record$/, () => {
	equipmentActions.searchOnEquipmentAssemblyForUnavailableData ();
});


Then(/^I can see appropriate message about no data avaialble$/, () => {
	equipmentActions.verifyNoDataAvailableSearchAssembly ();
	Utils.clearLocalStorage();
});


When(/^I perform Search on Equipment Assembly Tab$/, () => {
	equipmentActions.performSearchOnEquipmentAssembly();
});

When(/^I click on X icon to clear the search input$/, function () {
	equipmentActions.clickXIconOnSearchField();
});


Then(/^I can see that input is removed from the search field$/, () => {
	equipmentActions.searchFieldClearedWhenXClicked();
});

Then(/^I can see highlighted search result in Equipment Assemblies table$/, function () {
	equipmentActions.verifyHighlightedSearchResults();
	Utils.clearLocalStorage();
});
Then(/^I can see highlighted search result for Equipment Assemblies$/, function () {
	equipmentActions.verifyHighlightedSearchResultsForAssembly();
	Utils.clearLocalStorage();
});

Then(/^I can see at least one search result in Equipment Assemblies table$/, function () {
	equipmentActions.firstEquipmentAssemblyRowData();
	equipmentActions.closeSearchByUsingXIcon();
});
// 
// Then(/^I can see at least one search result in Equipment Assemblies table for (.*)$/, function (option) {
// 	equipmentActions.firstEquipmentAssemblyRowData(option);
// 	equipmentActions.closeSearchByUsingXIcon();
// });
