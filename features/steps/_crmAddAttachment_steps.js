const { Given, When, Then } = require("@cucumber/cucumber");
const crmaddAttachmentActions = require('../support/_crmAddAttachmentActions.js');
const Utils = require('../support/utils');

When(/^I add an attachment for crm ticket$/,function(){
    crmaddAttachmentActions.CRMaddAnAttachment();
    crmaddAttachmentActions.closeCurrentTicketDock();
 })

 When(/^I add attachments of different types$/,function(fileTypes){
    crmaddAttachmentActions.CRMAttachDiffFiles(fileTypes);
    crmaddAttachmentActions.closeCurrentTicketDock();
 })

 When(/^I open crm ticket activity logs$/,function(){
    crmaddAttachmentActions.openActivityLogs();
})

When(/^I open ISP Logs from settings to verify crm$/,function(){
    crmaddAttachmentActions.openISPLogsFromSettings();
})

Then(/^I can see the newly added attachment$/,function(){
    crmaddAttachmentActions.verifySavedAttachment();
    Utils.clearLocalStorage()
})
Then(/^The multiple attachments should be saved in the ticket$/,function(){
    crmaddAttachmentActions.verifyDiffAttachments();
    Utils.clearLocalStorage()
})
Then(/^The attachment should be saved with the ticket$/,function(){
    crmaddAttachmentActions.verifySavedAttachment();
    Utils.clearLocalStorage()
})
Then(/^The crm task log should exist in activity logs$/,function(){
    crmaddAttachmentActions.verifyAttachmentActivitLogs();
    Utils.clearLocalStorage()
})
Then(/^I see crm attachment logs in ISP logs section$/,function(){
    crmaddAttachmentActions.verifyISPLogs();
    Utils.clearLocalStorage()
})

