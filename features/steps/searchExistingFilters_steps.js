const {Given, When, Then} = require("@cucumber/cucumber");
const searchExistFilter = require('../support/searchExistingFiltersActions');
const Utils = require('../support/utils');

	When(/^I expand all filters from search Bar$/, function(){
		searchExistFilter.expandFilterOptions();
	});
	When(/^I open saved filters matching arrow$/, function(){
		searchExistFilter.expandSavedFilters();
	});
	When(/^I open a filter details by clicking on filter name (.*) in the serach bar$/, function(filterName){
		searchExistFilter.openAndSelectFilter(filterName);
	});
	When(/^I open a filter (.*) details by clicking on pencil icon$/, function(filterName){
		searchExistFilter.openFilterUsingHover(filterName);
	});
	When(/^I definied new filter using criteria as CustomerID$/, function(){
		searchExistFilter.defineNewFilterUsingCustomerID();
		searchExistFilter.closeAndRemoveSelected();
	});
	When(/^I remove filter using x option$/, function(){
		searchExistFilter.removeFilter();
	});

	
	Then(/^I can see 3 filters in the dropdown$/, function(){
		searchExistFilter.verifyExistingFilters();
		Utils.clearLocalStorage()
	});
	Then(/^I can view all saved filters$/, function(){
		searchExistFilter.verifySavedFilters();
		Utils.clearLocalStorage()
	});
	Then(/^I can see view filter name (.*) in the search bar along with its details$/, function(filterName){
		searchExistFilter.verifyFilterDetails(filterName);
		Utils.clearLocalStorage()
	});
	Then(/^The filter should be deleted$/, function(){
		searchExistFilter.verifyFilterDeleted();
		Utils.clearLocalStorage()
	});