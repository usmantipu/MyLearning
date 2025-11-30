const {Given, When, Then} = require("@cucumber/cucumber");
const SDaddTaskActions = require('../support/SDaddTaskActions');
const SDaddNoteActions = require('../support/SDaddNoteActions');
const Utils = require('../support/utils');
const serviceDeskActions = require('../support/serviceDeskActions');



When(/^I create a new ticket$/, () => {
	serviceDeskActions.openServiceDesk();
	serviceDeskActions.goToTickets();
	SDaddTaskActions.openTicketOptionFromPlusIcon();
	SDaddTaskActions.addNewTicket();
});


When(/^I add an internal note to the ticket$/, () => {
	SDaddNoteActions.addInternalNoteToTicket();
});


When(/^I add an external note to the ticket$/, () => {
	SDaddNoteActions.addExternalNoteToTicket();
});
When(/^I close the recenly created ticket$/, () => {
	SDaddNoteActions.closeCurrentTicketDock();
});



Then(/^The internal note should be saved in the ticket$/, () => {
	SDaddNoteActions.internalNoteAddedInTicket();
	
	Utils.clearLocalStorage();
});


Then(/^The external note should be saved in the ticket$/, () => {
	SDaddNoteActions.externalNoteAddedInTicket();
	
	Utils.clearLocalStorage();
});



Then(/^There is a timestamp attached to the internal note$/, () => {
	SDaddNoteActions.verifyInternalNoteTimestamp();
	Utils.clearLocalStorage();
});


Then(/^There is a timestamp attached to the external note$/, () => {
	SDaddNoteActions.verifyExternalNoteTimestamp();
	Utils.clearLocalStorage();
});
