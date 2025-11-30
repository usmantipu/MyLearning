const {Given, When, Then} = require("@cucumber/cucumber");
const ticketActions = require('../support/crmStatusTypePriorityActions');
const Utils = require('../support/utils');

// Step to open New ticket
When(/^I create New ticket for type status priority$/, () => {
    ticketActions.clickOnAssignmentType();
    ticketActions.selectAssignmentType('Subscriber');
    ticketActions.inputSubscriberName('Jon');
    ticketActions.openTicketType();
    ticketActions.selectFirstOptionFromTheList();
    ticketActions.clickCreateButton();
});
When(/^I click on the priority dropdown from ticket drawer$/, () => {
    ticketActions.clickOnTicketPriority();
});
When(/^I select the ticket priority from the dropdown$/, () => {
    ticketActions.selectTicketPriority();
});
When(/^I click on Ticket type dropdown from ticket drawer$/, () => {
    ticketActions.clickOnTicketTypeFromDrawer();
});
When(/^I select the ticketype from the dropdown of ticket drawer$/, () => {
    ticketActions.selectTicketTypeFromDrawer('Billing Concerns (Via Messenger)');
});
When(/^I can select the Continue Anyway option to make change$/, () => {
    ticketActions.clickOnContinue();
});
When(/^I click on Ticket status dropdown from ticket drawer$/, () => {
    ticketActions.clickOnTicketStatus();
});
When(/^I Select the ticket status from the dropdown of ticket drawer$/, () => {
    ticketActions.selectTicketStatusFromDrawer('Pending');
});






Then(/^I should see ticket priority in Ticket drawer$/, () => {
    ticketActions.verifyTicketPriority();
});
Then(/^Selected priority should set for the ticket$/, () => {
    ticketActions.verifyTicketPriorityGetUpdated();
});
Then(/^Changing a ticket priority should create a log entry$/, () => {
    ticketActions.verifyTicketTypeChangeLog();
});
Then(/^I can see a popup for confirming the change made$/, () => {
    ticketActions.verifyTypeChangeConfirmation();
});
Then(/^the Selected ticket type should be set for the ticket$/, () => {
    ticketActions.verifyTicketTypeGetUpdated();
});
Then(/^Changing a ticket Type should create log entry$/, () => {
    ticketActions.verifyticketTypeLogCreated();
});
Then(/^the selected ticket status should be set for the Ticket$/, () => {
    ticketActions.verifyTicketStatusGetUpdated();
});
Then(/^changing a Ticket status should create a log entry$/, () => {
    ticketActions.verifyTicketStatusLogEntry();
});


