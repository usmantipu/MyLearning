const {Given, When, Then} = require("@cucumber/cucumber");
const subLogsAction = require('../support/subscriberDetailsLogsActions');
const Utils = require('../support/utils');

 When(/^I navigates to subscribers list$/,function() {
     subLogsAction.openSubscriberList();
 });

 When(/^I navigates to subscribers list All$/,function() {
    subLogsAction.openSubscriberListAll();
});


 When(/^I open first record$/,function() {
    subLogsAction.openFirstRecord();
});

When(/^I add a new equipment activity log$/,function() {
    subLogsAction.addAnEquipmentActivityLog();
});

When(/I go to Logs section using Transaction button$/,function(){
    subLogsAction.seeLogsUsingTransaction();
})

When(/^I select equipment filter in the activity logs$/,function() {
    subLogsAction.clickOnEquipmentFilter();
});

When(/^I send Email$/,function() {
    subLogsAction.sendEmail();
});
When(/^I send note$/,function() {
    subLogsAction.sendNote();
});
When(/^I go to Logs section$/,function() {
    subLogsAction.clickOnLogsButton();
});
When(/^I select All filter from the activity logs$/,function() {
    subLogsAction.clickOnFilter('All');
});
When(/^I select email filter from the activity logs$/,function() {
    subLogsAction.clickOnFilter('Email');
});
When(/^I select ticket filter from the activity logs$/,function() {
    subLogsAction.clickOnFilter('Ticket');
});
When(/^I select note filter from the activity logs$/,function() {
    subLogsAction.clickOnFilter('Note');
});
When(/^I select logs filter from the activity logs$/,function() {
    subLogsAction.clickOnFilter('Logs');
});
When(/^I select Attachment filter from the activity logs$/,function() {
    subLogsAction.clickOnFilter('Attachment');
});
When(/^I add an attachment$/,function() {
    subLogsAction.addAnAttachment();
});
When(/^I select multiple filter$/,function(filters) {
    subLogsAction.selectMultipleFilters(filters);
});
When(/^I open first item from the logs$/,function() {
    subLogsAction.openFirstItem();
});
When(/^I add a ticket from Logs section$/,function() {
    subLogsAction.addTicketFromLogs();
});
When(/^I add a ticket to merge from subscriber Logs section$/,function() {
    subLogsAction.addTicketToMergeFromLogs();
});
When(/^I delete the added ticket$/,function() {
    subLogsAction.deleteFirstItemFromLogs();
});
When(/^I perform search on logs$/,function() {
    subLogsAction.searchOnLogs();
});

Then(/^I should see the logs section$/,function() {
    subLogsAction.verifyLogsSectionExists();
    Utils.clearLocalStorage()
});

Then(/^I should see equipment types of activity logs$/,function() {
    subLogsAction.VerifyEquipmentActivityLog();
    Utils.clearLocalStorage()
});


Then(/^I should see activity logs in descending order$/,function() {
    subLogsAction.verifyLogsDecending();
    Utils.clearLocalStorage()
});
Then(/^I should see all types of activity logs$/,function() {
    subLogsAction.verifyAllTypesOfLogs();
    Utils.clearLocalStorage()
});
Then(/^I should see email types of activity logs$/,function() {
    subLogsAction.verifyEmailTypesOfLogs();
    Utils.clearLocalStorage()
});
Then(/^I should see ticket types of activity logs$/,function() {
    subLogsAction.verifyTicketTypesOfLogs();
    Utils.clearLocalStorage()
});
Then(/^I should see note types of activity logs$/,function() {
    subLogsAction.verifyNoteTypesOfLogs();
    Utils.clearLocalStorage()
});
Then(/^I should see attachment types of activity logs$/,function(type) {
    subLogsAction.verifyAttachmentLogs(type);
    Utils.clearLocalStorage()
});
Then(/^I should see list of activity logs not related to email, tickets, notes, attachment, and equipment$/,function(logstype) {
    subLogsAction.verifyLogsFilter(logstype);
    Utils.clearLocalStorage()
});
Then(/^I should see selected types of activity logs$/,function(multiple) {
    subLogsAction.verifySelectedTypesOfActivity(multiple);
    Utils.clearLocalStorage()
});
Then(/^I should see Note details$/,function() {
    subLogsAction.verifyDetailsOfNote();
    Utils.clearLocalStorage()
});
Then(/^newly added ticket displayed under Ticket filter$/,function() {
    subLogsAction.verifyNewTicketAdded();
    Utils.clearLocalStorage()
});
Then(/^The ticket record is removed from the logs$/,function() {
    subLogsAction.verifyTicketRemoved();
    Utils.clearLocalStorage()
});
Then(/^I should see the expected result in search$/,function() {
    subLogsAction.verifyItemSearchedSuccessfully();
    Utils.clearLocalStorage()
});