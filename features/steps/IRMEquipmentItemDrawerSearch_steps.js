const {Given, When, Then} = require("@cucumber/cucumber");
const equipmentActions = require('../support/IRMEquipmentItemDrawerSearchActions');
const Utils = require('../support/utils');

	When(/^I open the searched Equipment$/, function () {
		equipmentActions.SelectAnyEquipmentProfile();
	});
	When(/^I click on the Lock icon to (.*) the Equiment search$/, function(lockUnclcok) {
		equipmentActions.openLockEquipmentSearch(lockUnclcok);
	});
	When(/^I Locked the equipment search with search key (.*)$/, function(searchkey) {
		equipmentActions.keyToSelectFromLock(searchkey);
	});
	When(/^I can search equipment with (.*) key value$/, function(keyName) {
		equipmentActions.searchKeys(keyName);
	});
	When(/^I Change the equipment table to (.*) View$/, function(equipView) {
		equipmentActions.changeEquipmentView(equipView);
	});
	When(/^I change the Page Size to (.*)$/, function(pageSize) {
		equipmentActions.changePageSize(pageSize);
	});
	When(/^I sort the first column of the equipment table$/, function() {
		equipmentActions.sortEquipmentColumn();
	});





	Then(/^I can see the expected search input (.*) carry over to the drawer$/, function (datatosearch) {
		equipmentActions.verifySearchedInputCarriedToDrawer(datatosearch);
		Utils.clearLocalStorage();
	});
	Then(/^I can see the Equiment (.*) searched successfully$/, function (equipment) {
		equipmentActions.verifyEquipmentSearched(equipment);
		Utils.clearLocalStorage();
	});
	Then(/^I can see that equipment first column get sorted$/, function () {
		equipmentActions.verifyColumnGetSorted();
		Utils.clearLocalStorage();
	});
	Then(/^I can see that equipment table page size get changed to (.*) successfully$/, function (pageSize) {
		equipmentActions.verifyPageSize(pageSize);
		Utils.clearLocalStorage();
	});
