const { Given, When, Then } = require("@cucumber/cucumber");
const _CRMCalendarSearchActions = require("../support/_CRMCalendarSearchActions");
const serviceDeskActions = require("../support/serviceDeskActions");
const Utils = require("../support/utils");


When(/^I go to CRM ticket listing$/, () => {
	_CRMCalendarSearchActions.openServiceDeskScreen();
});


When(/^I create a new ticket from top menu$/, () => {  
  _CRMCalendarSearchActions.openTicketInterface('fromTopMenu');
  _CRMCalendarSearchActions.addNewTicket('Mon', 'add', 'testing', 'modem install');
  _CRMCalendarSearchActions.saveTicket('add');
  _CRMCalendarSearchActions.closeTicketDock();

});


When(/^I can apply filter on ticket listing per test condition$/, function (filterOption) {
	_CRMCalendarSearchActions.selectFilterOptionOnCalendar(filterOption);

});


When(/^I can apply filter from days up to today on ticket listing$/, function (filterOption) {
	_CRMCalendarSearchActions.selectCustomTimePeriodFilter(filterOption, "days up to today");

});


When(/^I can apply filter from days starting today on ticket listing$/, function (filterOption) {
	_CRMCalendarSearchActions.selectCustomTimePeriodFilter(filterOption, "days starting today");

});


When(/^I click on the ticket to view Ticket in dock$/, () => {
  //_CRMCalendarSearchActions.refreshPage();
	_CRMCalendarSearchActions.verifyNewlyAddedTicketAvailable();
  _CRMCalendarSearchActions.openRecentlyAddedTicket ();
});


Then(/^I should see the clicked ticket opened in dock$/, () => {
	_CRMCalendarSearchActions.verifyOpenedTicket ();
  Utils.clearLocalStorage();
});


Then(/^I should see records in listing as per test condition$/, () => {
  _CRMCalendarSearchActions.verifyAvailableTicketsMoreThanZero();    
  Utils.clearLocalStorage();
});


Then(/^I should see records from applied days up to today on ticket listing$/, () => {

  _CRMCalendarSearchActions.columnsTobeShownInList("Date Added", "Enable");
  _CRMCalendarSearchActions.columnsTobeShownInList("Priority", "Disable");
  _CRMCalendarSearchActions.columnsTobeShownInList("Summary", "Disable");  
  _CRMCalendarSearchActions.focusTheDateAddedColumn(); // to get Date Added column into focus
  _CRMCalendarSearchActions.checkSortingOnDateAddedColumn();
  Utils.clearLocalStorage();
});
