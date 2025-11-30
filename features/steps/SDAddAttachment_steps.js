const { Given, When, Then } = require("@cucumber/cucumber");
const SDaddAttachmentActions = require('../support/SDAddAttachmentActions.js');
const Utils = require('../support/utils');

When(/^I add an attachment from ticket$/,function(){
   SDaddAttachmentActions.CRMaddAnAttachment();
   SDaddAttachmentActions.closeCurrentTicketDock();
})

When(/^I add attachments with different types$/,function(fileTypes){
    SDaddAttachmentActions.CRMAttachDiffFiles(fileTypes);
    SDaddAttachmentActions.closeCurrentTicketDock();
 })

When(/^I open ticket activity logs$/,function(){
    SDaddAttachmentActions.openActivityLogs();
})

When(/^I open ISP Logs from settings$/,function(){
    SDaddAttachmentActions.openISPLogsFromSettings();
})
When(/^I add an attachment in the merged ticket$/,function(){
   SDaddAttachmentActions.CRMaddAnAttachment();
})

Then(/^The attachment should be saved in the ticket$/,function(){
    SDaddAttachmentActions.verifySavedAttachment();
    Utils.clearLocalStorage()
})

Then(/^The attchment log should exist in activity logs$/,function(){
    SDaddAttachmentActions.verifyAttachmentActivitLogs();
    Utils.clearLocalStorage()
})

Then(/^I see attachment logs in ISP logs section$/,function(){
    SDaddAttachmentActions.verifyISPLogs();
    Utils.clearLocalStorage()
})

Then(/^The attachments should be saved in the ticket$/,function(){
    SDaddAttachmentActions.verifyDiffAttachments();
    Utils.clearLocalStorage()
})

