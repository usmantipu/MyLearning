const {Given, When, Then} = require("@cucumber/cucumber");
const ticketActions = require('../support/crmServiceContactsAndScheduleActions');
const Utils = require('../support/utils');

Given(/^I am on the ticket details page$/, function() {
    ticketActions.goToTicketDetailPage();
});
Given(/^I enable CRM Microservice by click New Beta$/, function() {
    //ticketActions.OpenFirstTicket();
    ticketActions.clickAppPlusButton();
    ticketActions.clickOpenTicket();
    ticketActions.clickOnKebabMenu();
    ticketActions.clickOnNewBeta();
    //ticketActions.closeTicketDrawer();
});
When(/^the Linked Tickets subsection is collapsed$/, function() {
    ticketActions.linkedTicketCollapsed();
});

// Step to open New ticket
When(/^I open a New ticket with new beta options$/, () => {
    //ticketActions.clickAppPlusButton();
    //ticketActions.clickOpenTicket();
    ticketActions.clickOnAssignmentType();
    ticketActions.selectAssignmentType('Subscriber');
    ticketActions.inputSubscriberName('Jon');
    ticketActions.openTicketType();
    ticketActions.selectFirstOptionFromTheList();
    ticketActions.clickCreateButton();
});

// Step to expand the Overview section
When(/^I expand the Overview section$/, () => {
    ticketActions.expandOverviewSection();
});
// Step to expand the Schedule sub-section
When(/^I expand the Schedule sub-section$/, () => {
    ticketActions.expandScheduleSubSection();
});
// Step to select a date from the date picker for Due Date
When(/^I select a date from the date picker for Due Date$/, () => {
    ticketActions.clickDueDate();
    ticketActions.selectFromDatePicker();
    ticketActions.clickOkOfDatePicker();
});
// Step to click on Preferred Arrival
When(/^I click on Preferred Arrival$/, () => {
    ticketActions.clickPreferredArrival();
});
// Step to click on extact time input
When(/^I select the Exact Time option$/, () => {
    ticketActions.selectExactTime();
});
// click on linked ticket section
When(/^I click on the Linked Tickets subsection$/, () => {
    ticketActions.clickOnLinkedTicketSection();
});
When(/^the Linked Tickets subsection is expanded$/, function() {
    ticketActions.clickOnLinkedTicketSection();
});
When(/^I linked A new Ticket to it$/, function() {
    ticketActions.keepTheOldTicketnumber();
    ticketActions.clickAppPlusButton();
    ticketActions.clickOpenTicket();
    ticketActions.clickOnAssignmentType();
    ticketActions.selectAssignmentType('Subscriber');
    ticketActions.inputSubscriberName('Jon');
    ticketActions.openTicketType();
    ticketActions.selectFirstOptionFromTheList();
    ticketActions.clickCreateButton();
    ticketActions.clickOnLinkedTicketSection();
    ticketActions.clickChainIcon();
    ticketActions.searchTicketNumberToLink();
    ticketActions.clickLinkButton();
});
When(/^I click on the x icon next to a linked ticket$/, function() {
    ticketActions.verifyTicketLinkedSuccessfully();
    ticketActions.closeTicketDrawer();
    ticketActions.OpenFirstTicket();
    ticketActions.clickUnLinkButton();
    ticketActions.clickYesToUnlink();
});




// Step to verify that the due date for the ticket is updated
Then(/^the due date for the ticket should be updated$/, () => {
    ticketActions.verifyDueDateUpdated();
});

// Step to verify that a log entry is created
Then(/^a log entry should be created$/, () => {
    ticketActions.verifyLogEntryCreated();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});

// Step to verify that any ticket assignees/followers are notified
Then(/^any ticket assignees\/followers should be notified$/, () => {
    ticketActions.verifyAssigneesAndFollowersNotified();
});
Then(/^I should see radio buttons for Exact Time and Window Time$/, () => {
    ticketActions.verifyTimeRadioButtons();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^I should see a clock time picker to select a time with hours and minutes$/, () => {
    ticketActions.verifyClockTimePicker();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the list of linked tickets should be visible$/, () => {
    ticketActions.verifyLinkedTicketContent();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the number badge should show the number of linked tickets$/, () => {
    ticketActions.verifyTicketLinkedSuccessfully();
    ticketActions.closeTicketDrawer();
    ticketActions.OpenFirstTicket();
    ticketActions.verifyLinkedTicketsCount();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
Then(/^the ticket should be unlinked$/, () => {
    ticketActions.verifyTicketGetUpdated();
    ticketActions.closeTicketDrawer();
    ticketActions.OpenFirstTicket();
    ticketActions.verifyUnlinkedCount();
});
Then(/^a log entry for unlinked ticket should be created$/, () => {
    ticketActions.verifyTicketUnlickedLogEntryCreated();
    Utils.clearLocalStorage();  // Clean up any storage if necessary
});
