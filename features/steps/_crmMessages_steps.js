const { Given, When, Then } = require("@cucumber/cucumber");
const crmMsgActions = require('../support/_crmMessagesActions.js');
const Utils = require('../support/utils');

When(/^I create a new crm ticket in New beta template$/,function(){
    //crmMsgActions.crmAddNewTicket();
    crmMsgActions.gotoServiceDeskAndOpenNewTicket();
    crmMsgActions.verifyIsBeteFeatureEnabled();
    crmMsgActions.clickCloseTicketDrawer();
    //crmMsgActions.openFirstTicket();
    crmMsgActions.crmAddNewTicket();
 })
 When(/^I expand the Messages section in the ticket$/,function(){
    crmMsgActions.expandMessages();
 })
When(/^I send an email to the crm ticket email address$/,function(){
    crmMsgActions.addMessage();
    crmMsgActions.selectEmailOption();
    crmMsgActions.inputEmailToAddress('hconnar6@automationtest.com');
    crmMsgActions.inputMessageBody('This is a test email sent to the crm ticket.');
    crmMsgActions.btnSendEmail();
 })
When(/^I hover over the email icon in the table$/,function(){
    crmMsgActions.hoverOverEmailIcon();
 })
When(/^I click the Delete icon on a message row$/,function(){
    crmMsgActions.clickDeleteIcon();
 })
 When(/^I do not confirm the deletion of the email from the ticket$/,function(){
    crmMsgActions.DoNotconfirmEmailDelete();
 })
 When(/^I confirm the deletion of the message from the ticket$/,function(){
    crmMsgActions.confirmEmailDelete();
 })
 When(/^I send an SMS to the crm ticket phone number$/,function(){
    crmMsgActions.addMessage();
    crmMsgActions.selectSMSOption();
    crmMsgActions.inputSMSToNumber('5419556900');
    crmMsgActions.inputSMSBody('This is a test SMS sent to the crm ticket.');
    crmMsgActions.ClickBtnSendSMS();
 })
When(/^I click on the Add Message button in the Messages section$/,function(){
    crmMsgActions.addMessage();
 })
When(/^I click Email option to open the email composer$/,function(){
    crmMsgActions.selectEmailOption();
 })
 When(/^I cancel the email composer in the ticket$/,function(){
    crmMsgActions.btnCancelMessage();
 })
When(/^I click SMS option to open the SMS composer$/,function(){
    crmMsgActions.selectSMSOption();
 })
When(/^I cancel the SMS composer in the ticket$/,function(){
    crmMsgActions.btnCancelMessage();
 })
 When(/^I leave the TO field blank and enter a message body$/,function(){
    crmMsgActions.ClearSMSToNumber();
    crmMsgActions.inputSMSBody('This is a test SMS sent to the crm ticket.');
 })
 When(/^I enter the valid phone number in the TO field$/,function(){
    crmMsgActions.inputSMSToNumber('5419556900');
 })
 When(/^I click the Add Note icon in the Messages section of the ticket$/,function(){
    crmMsgActions.clickBtnAddNote();
 })
When(/^I enter a note content in the note input area$/,function(){
    crmMsgActions.inputMessageBody('This is a test Note sent to the crm ticket.');
 })
When(/^I click the Save Note button in the Messages section of the ticket$/,function(){
    crmMsgActions.clickBtnSaveNote();
 })
When(/^I attach a JPEG file to the note in the ticket messages section$/,function(){
    crmMsgActions.attachJPGFile();
 })
 When(/^I remove the attached JPEG file from the note in the ticket messages section$/,function(){
    crmMsgActions.removedTheAttachedFile();
 })
When(/^I attach an unsupported file type to the note in the ticket messages section$/,function(){
    crmMsgActions.attachUnsupportedFile();
 })






 /// verification steps
Then(/^I can identify an email by its icon and recipient$/,function(){
    crmMsgActions.vrifyEmailIcon();
    crmMsgActions.verifyEmailRecipient('hconnar6@automationtest.com');
    Utils.clearLocalStorage()
})
Then(/^I should see a tooltip showing a full list of the sender and all the recipients$/,function(){
    crmMsgActions.verifyToAndContent('hconnar6@automationtest.com');
    Utils.clearLocalStorage()
})
Then(/^I should see a datetime stamp, a New Note icon, and a Delete icon on the far left$/,function(){
    crmMsgActions.verifyDateTimeStampe();
    crmMsgActions.verifyNewNoteIcon();
    crmMsgActions.verifyDeleteIcon();
    Utils.clearLocalStorage()
})
Then(/^I should see a confirmation dialog asking if I want to delete the email$/,function(){
    crmMsgActions.verifyConfirmationDialog();
    Utils.clearLocalStorage()
})
Then(/^the email should still be present in the ticket messages list$/,function(){
    crmMsgActions.vrifyEmailIcon();
    Utils.clearLocalStorage()
})
Then(/^the email should be removed from the ticket messages list$/,function(){
    crmMsgActions.verifyMessageRemoved();
    Utils.clearLocalStorage()
})
Then(/^I can view the content of an SMS message$/,function(){
    crmMsgActions.verifySmsIcon();
    crmMsgActions.verifyPhoneNumbers();
    Utils.clearLocalStorage()
})
Then(/^the SMS message should be removed from the ticket messages list$/,function(){
    crmMsgActions.verifyMessageRemoved();
    Utils.clearLocalStorage()
})
Then(/^I should see Email and SMS options in the Messages dropdown list$/,function(){
    crmMsgActions.verifyEmailSMSOptions();
    Utils.clearLocalStorage()
})
Then(/^the email composer should close without sending the email$/,function(){
    crmMsgActions.verifyEmailComposerClosed();
    Utils.clearLocalStorage()
})
Then(/^the SMS composer should close without sending the SMS$/,function(){
    crmMsgActions.verifySMSComposerClosed();
    Utils.clearLocalStorage()
})
Then(/^I should see a send button do not get enabled$/,function(){
    crmMsgActions.verifySendButtonDisabled();
    Utils.clearLocalStorage()
})
Then(/^I should see the Save Note button is disabled$/,function(){
    crmMsgActions.verifySaveNoteButtonDisabled();
    Utils.clearLocalStorage()
})
Then(/^I can view the added note in the Messages section of the ticket$/,function(){
    crmMsgActions.verifyNoteAdded();
    Utils.clearLocalStorage()
})
Then(/^I should see an error message indicating unsupported file type$/,function(){
    crmMsgActions.verifyUnsupportedFileTypeError();
    Utils.clearLocalStorage()
})
Then(/^the JPEG attachment should be associated with the note$/,function(){
    crmMsgActions.verifyJPGAttachment();
    Utils.clearLocalStorage()
})
Then(/^the JPEG attachment should be removed from the note$/,function(){
    crmMsgActions.verifyJPGAttachmentRemoved();
    Utils.clearLocalStorage()
})
