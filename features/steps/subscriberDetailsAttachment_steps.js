const {Given, When, Then} = require("@cucumber/cucumber");
const subAttachAction = require('../support/subscriberDetailsAttachmentActions');
const Utils = require('../support/utils');

When(/^I upload and add an attachment$/,function() {
    subAttachAction.addAnAttachment();
    subAttachAction.clickAddAttachment();
});
When(/^I add an attachment as private$/,function() {
    subAttachAction.addAnAttachment();
    subAttachAction.markAttachmentAsPrivate();
    subAttachAction.clickAddAttachment();
});
When(/^I select the attachment filter in logs section$/,function() {
    subAttachAction.clickOnLogsButton();
    subAttachAction.clickOnFilter('Attachment');
});
When(/^I open an attachment from the logs$/,function() {
    subAttachAction.openFirstItem();
});
When(/^I download the attachment$/,function() {
    subAttachAction.downloadAnAttachment();
});
When(/^I delete the attachment$/,function() {
    subAttachAction.deleteFirstItemFromLogs();
});


Then(/^newly added attachment is visible in Logs$/,function() {
    subAttachAction.verifyAttachmentLogs();
    Utils.clearLocalStorage()
});
Then(/^I see an eye icon is present next to the attachment type in the logs$/,function() {
    subAttachAction.verifyPrivateAttachment();
    Utils.clearLocalStorage()
});
Then(/^The attachment ATTACHMENT-ADD type record are removed from the logs$/,function() {
    subAttachAction.verifyAttachmentDeleted();
    Utils.clearLocalStorage()
});
Then(/^The attachment ATTACHMENT-RERMOVE type record become visible in the logs$/,function() {
    subAttachAction.verifyDeletedAttachmentView();
    Utils.clearLocalStorage()
});
Then(/^The attachment is downloaded successfully$/,function() {
    subAttachAction.verifyAttachmentDownloaded();
    Utils.clearLocalStorage()
});
