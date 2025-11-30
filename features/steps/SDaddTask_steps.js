const {Given, When, Then} = require("@cucumber/cucumber");
const SDaddTaskActions = require('../support/SDaddTaskActions');
const Utils = require('../support/utils');
const serviceDeskActions = require('../support/serviceDeskActions');


When(/^I open an existing ticket$/, () => {
	serviceDeskActions.openServiceDesk();
	serviceDeskActions.goToTickets();	
	serviceDeskActions.selectFirstRecord();

});


When(/^I add a task for technician$/, () => {
	// SDaddTaskActions.clickaddTaskIcon();
	SDaddTaskActions.saveSingleTaskForTicket("1");
});


When(/^I add multiple tasks for technician$/, () => {
	// SDaddTaskActions.clickaddTaskIcon();
	SDaddTaskActions.saveMultipleTasksForTicket("1");
	SDaddTaskActions.saveMultipleTasksForTicket("2");
	// SDaddTaskActions.clickaddTaskIcon();
	// SDaddTaskActions.saveTheTaskForTicket();
});


When(/^I create a ticket from top menu$/, () => {
	serviceDeskActions.openServiceDesk();
	serviceDeskActions.goToTickets();
	SDaddTaskActions.openTicketOptionFromPlusIcon();
	SDaddTaskActions.addNewTicket();
	
});


When(/^I go to Settings to verify ISP logs$/, () => {
	SDaddTaskActions.goToISPLogs ();
});


Then(/^I can see the logs of task in the activity section$/, () => {
	SDaddTaskActions.openTicketActivity();
	SDaddTaskActions.verifyTaskInTicketActivity();
});


Then(/^The task log should exist in ISP logs$/, () => {
	SDaddTaskActions.verifyTaskInISPLogs();
});



Then(/^The task should be saved in the ticket$/, () => {
	SDaddTaskActions.verifySingleTaskForTicket();
	Utils.clearLocalStorage();
});


Then(/^all the tasks should be saved in the ticket$/, () => {
	SDaddTaskActions.verifyAllAddedTasksForTicket();
	Utils.clearLocalStorage();
});




