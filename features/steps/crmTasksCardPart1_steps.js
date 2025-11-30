const { When, Then } = require('@cucumber/cucumber');
const crmTasksCardPart1 = require('../support/crmTasksCardPart1Actions');

When(/^I have an open ticket drawer in edit mode$/, function () {
    crmTasksCardPart1.openTicketInEditMode();
});

When(/^I click Convert to Ticket on a task within the drawer$/, function () {
    crmTasksCardPart1.convertTaskIntoTicket();
});

When(/^I close the Create Ticket modal without submitting$/, function () {
    crmTasksCardPart1.closeCreateTicketModal();
});

When(/^I fill in required fields and submit the Create Ticket modal$/, function () {
    crmTasksCardPart1.fillDataToConvertIntoTicket();
});

When(/^I have a ticket with one or more tasks listed$/, function () {
    crmTasksCardPart1.createMoreTask();
});

Then(/^The Create Ticket modal should appear layered on top of the current ticket drawer$/, function () {
    crmTasksCardPart1.verifyTicketModalAppears();
});

Then(/^The background drawer should remain visible but inactive$/, function () {
    crmTasksCardPart1.verifyTocketDrawerInactive();
});

Then(/^The parent ticket drawer should still be open$/, function () {
    crmTasksCardPart1.verifyTocketDrawerStillOpen();
});

Then(/^The parent ticket drawer should be docked automatically$/, function () {
    crmTasksCardPart1.verifyParentTicketDrawerDocked();
});

Then(/^The newly created ticket drawer should open in full view$/, function () {
    crmTasksCardPart1.verifyNewCreatedTicketOpens();
});

Then(/^Upon creating a new ticket, it should automatically be linked as a child to the originating ticket$/, function () {
    crmTasksCardPart1.verifyLinkedAsChild();
});
