const { When, Then } = require('@cucumber/cucumber');
const crmTasksCardPart2Actions = require('../support/crmTasksCardPart2Actions');

When(/^I open the ticket drawer$/, function () {
    crmTasksCardPart2Actions.openTicketDrawer();
});

When(/^I click the Add icon in the Tasks card header$/, function () {
    crmTasksCardPart2Actions.clickAddTaskIcon();
});

When(/^I view the Tasks card on a ticket$/, function () {
    crmTasksCardPart2Actions.viewTasksCard();
});

When(/^I check the checkbox next to a task in the Tasks card$/, function () {
    crmTasksCardPart2Actions.completeTask();
});

When(/^I uncheck the checkbox next to a completed task in the Tasks card$/, function () {
    crmTasksCardPart2Actions.unCheckTask();
});

When(/^I add more than one task$/, function () {
    crmTasksCardPart2Actions.addMoreThanOneTaskForReorder();
});

When(/^I drag and drop a task row in the Tasks card$/, function () {
    crmTasksCardPart2Actions.dragAndDropTasks();
});

When(/^I click the 3-dot menu next to a task and select Convert to a Ticket$/, function () {
    crmTasksCardPart2Actions.convertTaskIntoTicket();
});

When(/^I click the 3-dot menu next to a task and select Delete$/, function () {
    crmTasksCardPart2Actions.deleteTask();
});

When(/^I click the 3-dot menu next to a task and select Edit$/, function () {
    crmTasksCardPart2Actions.editTask();
});

When(/^I click the feedback icon in the Tasks card header$/, function () {
    crmTasksCardPart2Actions.clickFeedbackIcon();
});

When(/^I click the Add icon in the Tasks card header and do not enter a description$/, function () {
    crmTasksCardPart2Actions.addTaskWithNoDescription();
});

When(/^The ticket type is updated on the ticket$/, function () {
    crmTasksCardPart2Actions.updateTicketType();
});

Then(/^I should see the Tasks card with a header and an expand - contract icon$/, function () {
    crmTasksCardPart2Actions.verifyTaskCardHeaderAndExpandIcon();
});

Then(/^I should see an Add icon, a task completion counter, and a feedback icon in the header$/, function () {
    crmTasksCardPart2Actions.verifyAddIconCounterFeedback();
});

Then(/^A new task entry field should appear in the main body of the card$/, function () {
    crmTasksCardPart2Actions.verifyTaskEntryFieldAppears();
});

Then(/^I can input a task description and save it$/, function () {
    crmTasksCardPart2Actions.inputTaskAndSave();
});

Then(/^The task should be added to the list of tasks in the main body$/, function () {
    crmTasksCardPart2Actions.verifyTaskAdded();
});

Then(/^A history log should be saved for adding the task$/, function () {
    crmTasksCardPart2Actions.verifyTaskLogHistory();
});

Then(/^I should see a list of tasks with a checkbox to the left of each task description indicating completion status$/, function () {
    crmTasksCardPart2Actions.verifyCheckboxWithTask();
});

Then(/^The task should be marked as completed in the database$/, function () {
    crmTasksCardPart2Actions.verifyTaskUpdated();
});

Then(/^The task completion counter in the header should increment appropriately$/, function () {
    crmTasksCardPart2Actions.verifyTaskCompletionCounterIncrement();
});

Then(/^A history log should be saved for completing the task$/, function () {
    crmTasksCardPart2Actions.verifyTaskCompleteIncompleteLogHistory('complete');
});

Then(/^The task should be marked as incomplete in the database$/, function () {
    crmTasksCardPart2Actions.verifyTaskUpdated();
});

Then(/^The task completion counter in the header should decrement appropriately$/, function () {
    crmTasksCardPart2Actions.verifyTaskCompletionCounterDecrement();
});

Then(/^A history log should be saved for marking the task as incomplete$/, function () {
    crmTasksCardPart2Actions.verifyTaskCompleteIncompleteLogHistory('incomplete');
});

Then(/^The tasks should reorder based on my action$/, function () {
    crmTasksCardPart2Actions.verifyTaskUpdated();
});

Then(/^The task should be converted to a new ticket with the task name as the ticket description$/, function () {
    crmTasksCardPart2Actions.verifyTaskNameAsDescription();
});

Then(/^The following data should be retained in the new ticket priority, ticket type, status open, assignees, followers$/, function () {
    crmTasksCardPart2Actions.verifyPriorityTypeStatusAssigneeFollower();
});

Then(/^A history log should be saved for the task conversion$/, function () {
    crmTasksCardPart2Actions.verifyHistoryForTaskConversion();
});

Then(/^The task should be deleted from the database$/, function () {
    crmTasksCardPart2Actions.verifyTaskUpdated();
});

Then(/^The task completion counter in the header should update appropriately$/, function () {
    crmTasksCardPart2Actions.verifyTaskCounterAfterDeletion();
});

Then(/^A history log should be saved for the task deletion$/, function () {
    crmTasksCardPart2Actions.verifyTaskDeletionLogHistory();
});

Then(/^The task should be updated in the database$/, function () {
    crmTasksCardPart2Actions.verifyTaskUpdated();
});

Then(/^A history log should be saved for editing the task$/, function () {
    crmTasksCardPart2Actions.verifyTaskEditLogHistory();
});

Then(/^I should be able to provide feedback for the feature$/, function () {
    crmTasksCardPart2Actions.provideFeedback();
});

Then(/^The task should not be added to the list of tasks$/, function () {
    crmTasksCardPart2Actions.verifyNoAlertAppears();
});

Then(/^All tasks in the Tasks card should be deleted$/, function () {
    crmTasksCardPart2Actions.verifyTasksDeleted();
});