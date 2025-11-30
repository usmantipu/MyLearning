var Utils = require('./utils');
const searchFilterPage= require('../pageobjects/searchExistingFilters.page.js');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class searchExistingFiltersActions{

    constructor(){
		this.countForMatched;
		this.customerID;
		this.newFilterName;
		this.confMsgRemoveFilter ='Filter removed successfully';
		this.totalListCount;
    }

	expandFilterOptions()
	{
		searchFilterPage.topSearchInput.waitForDisplayed({ timeout: 25000 });
		searchFilterPage.topSearchInput.waitForClickable({ timeout: 25000 });
		searchFilterPage.topSearchInput.click();
	}

	expandSavedFilters()
	{
		searchFilterPage.expandMatchedFilters.waitForClickable({ timeout: 15000 });
		this.countForMatched = searchFilterPage.countForSaved[1].getText();
		searchFilterPage.expandMatchedFilters.click();
	}
	openAndSelectFilter(filtername)
	{
		browser.pause(3000);
		var paramfilterdata = filtername.replace(/['"]+/g, '');
		searchFilterPage.selectSpecificFilter(paramfilterdata).click();
	}
	openFilterUsingHover(filtername)
	{
		browser.pause(3000);
		var paramfilterdata = filtername.replace(/['"]+/g, '');
		searchFilterPage.selectSpecificFilter(paramfilterdata).moveTo();
		browser.pause(2000);
		//searchFilterPage.editFilter.waitForClickable({ timeout: 5000 });
		//searchFilterPage.editFilter.moveTo();
		searchFilterPage.editFilter(searchFilterPage.selectSpecificFilter(paramfilterdata)).click();
	}
	defineNewFilterUsingCustomerID()
	{
		browser.pause(5000);
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		var backspaceKey = ['\uE003'];// backspace
		searchFilterPage.subscriberid.waitForDisplayed({ timeout: 25000 });
		searchFilterPage.subscriberid.waitForClickable({ timeout: 25000 });
		this.customerID = searchFilterPage.subscriberid.getText();
		searchFilterPage.newFilter.waitForDisplayed({ timeout: 7000 });
		searchFilterPage.newFilter.waitForClickable({ timeout: 7000 });
		searchFilterPage.newFilter.click();
		browser.pause(3000);
		//var allFilters = searchFilterPage.allFormsInputData;
		searchFilterPage.filterAttribute.click();
		browser.pause(500);
		searchFilterPage.filterAttribute.setValue('Customer ID');
		browser.pause(500);
		//browser.keys(dropdownValueSelection);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		searchFilterPage.filterOpt.click();
		browser.keys(backspaceKey);
		searchFilterPage.filterOpt.setValue('equals');
		browser.pause(500);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		//browser.keys(dropdownValueSelection);
		browser.pause(1000);
		searchFilterPage.criteriaValue.click();
		searchFilterPage.criteriaValue.setValue(this.customerID);
		browser.pause(500);
		//browser.keys(dropdownValueSelection);
		browser.keys(enterKey);
		browser.pause(2500);
		searchFilterPage.saveFilter.waitForClickable({ timeout: 3000 });
		searchFilterPage.saveFilter.click();
		browser.pause(1000);
		searchFilterPage.inputFilterName.waitForDisplayed({ timeout: 3000 });
		searchFilterPage.inputFilterName.waitForClickable({ timeout: 3000 });
		this.newFilterName = 'cusID' + (Math.floor(new Date() / 1000));
		searchFilterPage.inputFilterName.click();
		searchFilterPage.inputFilterName.setValue(this.newFilterName);
		searchFilterPage.saveFilterName.waitForClickable({ timeout: 3000 });
		searchFilterPage.saveFilterName.click();
	}
	closeAndRemoveSelected()
	{
		browser.pause(5000);
		searchFilterPage.closeFilterDialog.waitForClickable({ timeout: 7000 });
		searchFilterPage.closeFilterDialog.click();
		browser.pause(3000);
		searchFilterPage.removeSelectedFilter.waitForClickable({ timeout: 7000 });
		searchFilterPage.removeSelectedFilter.click();
		browser.pause(3000);
	}
	removeFilter()
	{
		browser.pause(3000);
		var getnewAddedFilter = searchFilterPage.selectSpecificFilter(this.newFilterName);
		getnewAddedFilter.moveTo();
		browser.pause(1000);
		searchFilterPage.clearFilter(getnewAddedFilter).click();
		browser.pause(2000);
		searchFilterPage.confirmDeleteFilter.waitForClickable({ timeout: 3000 });
		searchFilterPage.confirmDeleteFilter.click();
	}
	getSpecificSubscriberListCount()
	{
		browser.pause(5000);
		searchFilterPage.totalPageRecords.waitForDisplayed({ timeout: 12000});
		let total = searchFilterPage.totalPageRecords.getText();
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		this.totalListCount = myArray[position];
	}


	verifyExistingFilters(){
		browser.pause(3000);
		var allFilters = searchFilterPage.existingilters;
		expect(allFilters.length).to.eql(3);
	}
	verifySavedFilters(){
		browser.pause(3000);
		var allFilters = searchFilterPage.existingilters;
		expect(this.countForMatched.includes(allFilters.length)).to.be.true;//count matched
	}
	verifyFilterDetails(filterdata)
	{
		browser.pause(3000);
		var paramfilterdata = filterdata.replace(/['"]+/g, '');
		searchFilterPage.openSelectedFilter.waitForClickable({ timeout: 7000 });
		searchFilterPage.openSelectedFilter.click();
		browser.pause(2000);
		expect(searchFilterPage.expandedFilterName.getAttribute('value').toLowerCase()).to.eql(paramfilterdata.toLowerCase());
		var allFilters = searchFilterPage.allFormsData;
		expect(searchFilterPage.filterStatus.getAttribute('value')).to.eql('Status');
		expect(searchFilterPage.filterOperator.getAttribute('value')).to.eql('equals');
		expect(searchFilterPage.filterValue.getText().toLowerCase()).to.eql(paramfilterdata.toLowerCase());
	}
	verifyFilterDeleted()
	{
		var msg;
		searchFilterPage.confirmationMsg.waitForDisplayed({ timeout: 3000 });
		msg = searchFilterPage.confirmationMsg.getText();
		expect(msg).to.eql(this.confMsgRemoveFilter);
		browser.pause(3000);
		expect(searchFilterPage.selectSpecificFilter(this.newFilterName).isExisting()).to.be.false;//count matched
	}



}
module.exports = new searchExistingFiltersActions();