const { When, Then } = require('@cucumber/cucumber');
const crmTasksCardPart3Actions = require('../support/crmTasksCardPart3Actions');

When(/^I click on kebab menu of the task$/, function () {
    crmTasksCardPart3Actions.clickOnTasksKebabMenu();
});

When(/^I click on Edit button from kebab menu to make task description will be editable$/, function () {
    crmTasksCardPart3Actions.clickEditBtn();
});

When(/I have a task in a ticket$/, function () {
    crmTasksCardPart3Actions.createATask();
});

When(/I convert the task to a ticket$/, function () {
    crmTasksCardPart3Actions.convertTaskInoTicket();
});

When(/I select the Convert to Ticket option from the task kebab menu$/, function () {
    crmTasksCardPart3Actions.selectConvertToTicket();
});

When(/I resolve the converted ticket$/, function () {
    crmTasksCardPart3Actions.resolveTicket();
});

Then(/^I can see Edit option to make task editbale$/, function () {
    crmTasksCardPart3Actions.verifyEditOptionAvailable();
});

Then(/^I should be restricted to save task description with empty description$/, function () {
    crmTasksCardPart3Actions.verifyRestrictedToSaveTask();
});

Then(/^Verify that Add Task field will not have the checkbox and kebab menu and will have the save and cancel$/, function () {
    crmTasksCardPart3Actions.verifySaveCancelBtnAndNoCheckboxAndKebabmenu();
});

Then(/^The task checkbox should be disabled$/, function () {
    crmTasksCardPart3Actions.verifyTaskCheckboxDisabled();
});

Then(/^The task cannot be marked as completed manually$/, function () {
    crmTasksCardPart3Actions.verifyTaskCannotMarkAsComplete();
});

Then(/^The kebab menu should be disabled for that task$/, function () {
    crmTasksCardPart3Actions.verifyKebabMenuDisabledForTask();
});

Then(/^The Add Ticket modal should appear$/, function () {
    crmTasksCardPart3Actions.verifyAddTicketModalAppears();
});

Then(/^Clicking the Create button after fill up the required fields$/, function () {
    crmTasksCardPart3Actions.fillRequiredFieldsAndCreateTicket();
});

Then(/^A new ticket should be created without retaining information from original ticket$/, function () {
    crmTasksCardPart3Actions.verifyTicketCreatedWithoutRetainingInfo();
});

Then(/^The default description in the modal should be the task name$/, function () {
    crmTasksCardPart3Actions.verifyDescriptionHasTaskName();
});

Then(/^The corresponding task in the original ticket should be automatically marked as complete$/, function () {
    crmTasksCardPart3Actions.verifyTaskMarkedAsCompleteAutomatically();
});

Then(/^The task should display an indicator showing that it has been converted$/, function () {
    crmTasksCardPart3Actions.verifyIndicator();
});

Then(/^The indicator should include the ticket number as a clickable link to the ticket details$/, function () {
    crmTasksCardPart3Actions.verifyIndicatorIsClickableLink();
});
