const {Given, When, Then} = require("@cucumber/cucumber");
const _CRMaddTaskActions = require('../support/_CRMaddTaskActions');
const Utils = require('../support/utils');
const serviceDeskActions = require('../support/serviceDeskActions');


When(/^I open an existing ticket in CRM$/, () => {
	serviceDeskActions.openServiceDesk();
	serviceDeskActions.goToTickets();	
	// serviceDeskActions.selectFirstRecord();
	_CRMaddTaskActions.selectFirstRecord();

});


When(/^I add a task for technician in the ticket$/, () => {
	// SDaddTaskActions.clickaddTaskIcon();
	console.log(">> in _CRM");
	_CRMaddTaskActions.saveSingleTaskForTicket("1");
});


When(/^I add more than one tasks for technician$/, () => {
	// SDaddTaskActions.clickaddTaskIcon();
	console.log(">> in _CRM");
	_CRMaddTaskActions.saveMultipleTasksForTicket("1");
	_CRMaddTaskActions.saveMultipleTasksForTicket("2");
	// SDaddTaskActions.clickaddTaskIcon();
	// SDaddTaskActions.saveTheTaskForTicket();
});


When(/^I create ticket from top menu$/, () => {	
	serviceDeskActions.openServiceDesk();
	serviceDeskActions.goToTickets();
	_CRMaddTaskActions.openTicketOptionFromPlusIcon();	
	_CRMaddTaskActions.addNewTicket();
	
});


When(/^I go to Settings in order to verify the ISP logs$/, () => {	
	_CRMaddTaskActions.goToISPLogs ();
});


Then(/^I can see the task-related logs in the activity section$/, () => {
	_CRMaddTaskActions.openTicketActivity();
	_CRMaddTaskActions.verifyTaskInTicketActivity();
	Utils.clearLocalStorage();
});


Then(/^The task should be logged in ISP logs$/, () => {
	_CRMaddTaskActions.verifyTaskInISPLogs();
	Utils.clearLocalStorage();
});



Then(/^The task should be saved inside ticket$/, () => {
	_CRMaddTaskActions.verifySingleTaskForTicket();
	Utils.clearLocalStorage();
});


Then(/^I make sure that all the tasks should be saved in the ticket$/, () => {
	_CRMaddTaskActions.verifyAllAddedTasksForTicket();
	Utils.clearLocalStorage();
});




