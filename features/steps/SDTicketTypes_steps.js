const {Given, When, Then} = require("@cucumber/cucumber");
const SDTicketTypesActions = require('../support/SDTicketTypesActions');
const SDlinkTicketAction = require('../support/SDLinkTicketAction');
const subLogsAction = require('../support/subscriberDetailsLogsActions');
const alertsSubscriberActions = require('../support/alertsSubscriberActions');
const SDmergeTicketActions = require('../support/SDMergeTicketActions');
const Utils = require('../support/utils');

When(/^I close all background processes$/,function() {
    SDTicketTypesActions.closeAllBackgroundProcesses();
});
When(/^I go the ticket type settings$/,function() {
    SDTicketTypesActions.openTicketTypeSeetings();
});
When(/^I define a ticket type with all tasks mandatory on resolving the ticket$/,function(){
    SDTicketTypesActions.defineTicketTypeWithRequireAllTask('resolving');
});
When(/^I go to CRM list for ticket types$/,function(){
    SDlinkTicketAction.openServiceDesk();
    SDlinkTicketAction.clickOnTicket1();
});
When(/^I define a ticket type with all tasks mandatory on closing the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireAllTask('closing');
});
When(/^I define a ticket type with all custom fields mandatory on adding the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireCustomFields('adding');
});
When(/^I define a ticket type with all custom fields mandatory on editing the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireCustomFields('editing');
});
When(/^I define a ticket type with all custom fields mandatory on resolving the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireCustomFields('resolving');
});
When(/^I define a ticket type with all custom fields mandatory on closing the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireCustomFields('closing');
});
When(/^I define a ticket type with all attachment mandatory on resolving the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithAttachmentRequired('resolving');
});
When(/^I define a ticket type with all attachment mandatory on closing the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithAttachmentRequired('closing');
});
When(/^I define a ticket type with a follower as mandatory requirement on adding the ticket$/,function(){
    SDTicketTypesActions.defineTicketTypeWithRequireFollower('adding');
});
When(/^I define a ticket type with a follower as mandatory requirement on editing the ticket$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireFollower('editing');
});
When(/^I define a ticket type with required schedule$/,function() {
    SDTicketTypesActions.defineTicketTypeWithRequireToBeScheduled();
});
When(/^I define a ticket type with queue unscheduled tickets option$/,function() {
    SDTicketTypesActions.defineTicketTypeWithQueueUnScheduled();
});
When(/^I define a ticket type to send updates to subscribers and exteranal followers$/,function() {
    SDTicketTypesActions.defineTicketTypeWithUpdates();
});
When(/^I change the ticket Type to Phone Call$/,function(){
    SDTicketTypesActions.changeTicketTypeToPhoneCall();
});
Then(/^I try to resolve a ticket with specific type without marking all tasks as complete$/,function() {
    SDTicketTypesActions.tryToResolveOrCloseTicket('resolve','without all tasks');
});
Then(/^I should see the validation related to required tasks for resolving ticket$/,function(){
    SDTicketTypesActions.verifyValidationToRequireTask('resolve');
    Utils.clearLocalStorage()
});
Then(/^I try to resolve a ticket with specific type after marking all tasks as complete$/,function() {
    SDTicketTypesActions.tryToResolveOrCloseTicket('resolve','with all tasks');
});
Then(/^I should that the ticket get resolved$/,function(){
    SDTicketTypesActions.verifyTicketGetResolvedOrClosed('Resolved');
    Utils.clearLocalStorage()
});
Then(/^I try to close a ticket with specific type without marking all tasks as complete$/,function() {
    SDTicketTypesActions.tryToResolveOrCloseTicket('close','without all tasks');
});
Then(/^I should see the validation related to required tasks for closing ticket$/,function(){
    SDTicketTypesActions.verifyValidationToRequireTask('close');
    Utils.clearLocalStorage()
});
Then(/^I try to close a ticket with specific type after marking all tasks as complete$/,function() {
    SDTicketTypesActions.tryToResolveOrCloseTicket('close','with all tasks');
});
Then(/^I should that the ticket get closed$/,function() {
    SDTicketTypesActions.verifyTicketGetResolvedOrClosed('Closed');
    Utils.clearLocalStorage()
});
Then(/^I try to add a ticket with specific type after leaving custom fields blank$/,function(){
    subLogsAction.openSubscriberList();
    alertsSubscriberActions.clickOnNewlyAddedSubscriber();
    alertsSubscriberActions.openLogsTab();
    SDTicketTypesActions.addTicketFromLogs();
});
Then(/^I should see required custom field specific validation message on creation$/,function(){
    SDTicketTypesActions.OpenAndSetTicketMarkAsResolved();
    SDTicketTypesActions.verifyRequiredCustomFieldVelidation();
});
Then(/^I try to add a ticket with specific type after filling out custom fields$/,function() {
    SDTicketTypesActions.setCustomFieldText();
});
Then(/^The ticket should be successfully added$/,function() {
    // SDmergeTicketActions.ClickcloseRightDrawer();
    SDTicketTypesActions.verifyTicketAdded();
});
Then(/^I try to edit a ticket with specific type after leaving custom fields blank$/,function() {
    SDTicketTypesActions.tryToEditOrResolveOrCloseTicketCustomField('resolve','without');
});
Then(/^I should see required custom field specific validation message on editing$/,function() {
    SDTicketTypesActions.verifyRequiredCustomFieldVelidation();
});
Then(/^I try to edit a ticket with specific type after filling out the custom fields$/,function(){
    SDTicketTypesActions.tryToEditOrResolveOrCloseTicketCustomField('edit','with');
});
Then(/^The ticket should be successfully edited$/,function(){
    SDTicketTypesActions.verifyTicketSuccessfullyAdded();
    Utils.clearLocalStorage()
});
Then(/^I try to resolve a ticket with specific type after leaving custom fields blank$/,function() {
    SDTicketTypesActions.tryToEditOrResolveOrCloseTicketCustomField('resolve','without');
});
Then(/^I should see required custom field specific validation message on resolving$/,function() {
    SDTicketTypesActions.verifyValidationToRequireCustomField('resolve');
});
Then(/^I try to resolve a ticket with specific type after filling out the custom fields$/,function() {
    SDTicketTypesActions.tryToEditOrResolveOrCloseTicketCustomField('resolve','with');
});
Then(/^The ticket should get resolved$/,function() {
    SDTicketTypesActions.verifyTicketGetResolvedOrClosed('Resolved');
    Utils.clearLocalStorage()
});
Then(/^I try to close a ticket with specific type after leaving custom fields blank$/,function() {
    SDTicketTypesActions.tryToEditOrResolveOrCloseTicketCustomField('close','without');
});
Then(/^I try to resolve a ticket of specific type without attachment$/,function() {
    SDTicketTypesActions.OpenAndSetTicketMarkAsResolved();
});
Then(/^I try to close a ticket of specific type without attachment$/,function() {
    SDTicketTypesActions.OpenAndSetTicketTryToMarkClose();
});
Then(/^I should see a validation message related to missing attachments on resolving$/,function() {
    SDTicketTypesActions.verifyAttachmentValidation();
});
Then(/^I should see a validation message related to missing attachments on closing$/,function() {
    SDTicketTypesActions.verifyAttachmentValidation();
});
Then(/^I should see required custom field specific validation message on closing$/,function() {
    SDTicketTypesActions.verifyValidationToRequireCustomField('close');
});
Then(/^I try to close a ticket with specific type after filling out the custom fields$/,function() {
    SDTicketTypesActions.tryToEditOrResolveOrCloseTicketCustomField('close','with');
});
Then(/^The ticket shoould get closed$/,function() {
    SDTicketTypesActions.verifyTicketGetResolvedOrClosed('Closed');
    Utils.clearLocalStorage()
});
Then(/^I try to add a ticket of specific type without any followers$/,function(){
    subLogsAction.openSubscriberList();
    alertsSubscriberActions.clickOnNewlyAddedSubscriber();
    alertsSubscriberActions.openLogsTab();
    SDTicketTypesActions.addTicketFromLogs();
});
Then(/^I should see a validation message related to missing follower on creating the ticket$/,function(){
    SDTicketTypesActions.removeFollowerFromTicket();
    SDTicketTypesActions.verifyRequiredFollowerVelidation();
});
Then(/^I try to edit a ticket of specific type without any followers$/,function() {
    SDTicketTypesActions.removeFollowerFromTicket();
    SDTicketTypesActions.updateTicketSummary();
    //SDTicketTypesActions.editTicketWithoutFollower();
});
Then(/^I should see a validation message related to missing follower on editing the ticket$/,function() {
    SDTicketTypesActions.verifyRequiredFollowerVelidation();
});
Then(/^I try to edit a ticket of specific type without a schedule$/,function() {
    SDTicketTypesActions.editTicketWihoutScheduler();
});
Then(/^I should see the validation message related to missing schedule$/,function() {
    SDTicketTypesActions.verifyRequiredSchedulerValidation();
});
Then(/^I should be able to save the ticket type with queue unschduled tickets details$/,function() {
    SDTicketTypesActions.verifyUpdatedTicketTypeSaved();
});
Then(/^I should be able to save the ticket type$/,function() {
    SDTicketTypesActions.verifyUpdatedTicketTypeSaved();
});