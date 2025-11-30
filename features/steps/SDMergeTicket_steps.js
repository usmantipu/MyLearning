const {Given, When, Then} = require("@cucumber/cucumber");
const serviceDeskActions = require('../support/serviceDeskActions');

const SDmergeTicketActions = require('../support/SDMergeTicketActions');
const Utils = require('../support/utils');

  When(/^I keep another ticket ID to use in upcoming actions$/, function() {
	  SDmergeTicketActions.keepSecondTicketID();
  });

  When(/^I close the right drawer to merge tickets/,function() {
    SDmergeTicketActions.ClickcloseRightDrawer();
});

  When(/^I can link the ticket to another ticket using (.*) type$/, function(data) {
    //SDmergeTicketActions.updateOpenedTicket();
    //SDmergeTicketActions.keepDataBeforeLinkage();
	  SDmergeTicketActions.linkOpenedTicketToOther(data);
    SDmergeTicketActions.clickLinkedTicket();
  });

  When(/^I try to close the ticket$/, function() {
	  SDmergeTicketActions.closeCurrentTicket();
  });
  When(/^I open first ticket from Ticket List$/, function() {
	  SDmergeTicketActions.openFirstTicket();
  });
  When(/^I go to Ticket details page$/, function() {
	  SDmergeTicketActions.goToTicketDetailsByClickingHeader();
  });

  ////////////////////////////////////// TA-260 ///////////////////////////////////////
  When(/^I keep service contacts of current ticket$/, function() {
    SDmergeTicketActions.keepServiceContact();
  });
  When(/^I keep followers of current ticket$/, function() {
    SDmergeTicketActions.keepDataBeforeLinkage();
  });
  When(/^I select second ticket from the table$/, function() {
	  SDmergeTicketActions.openSecondTicket();
  });
  When(/^I add a Note to the current ticket$/, function() {
	  SDmergeTicketActions.addANoteToTicket();
  });
  When(/^I add new task to the current ticket$/, function() {
	  SDmergeTicketActions.addATaskToTicket();
  });
  When(/^I keep custom field value of current ticket$/, function() {
	  SDmergeTicketActions.keepCustomFieldValue();
  });
  When(/^I add new attachment to the current ticket$/, function() {
	  SDmergeTicketActions.addAttachment();
    SDmergeTicketActions.keepAttachedFileName();
  });
  ////////////////////////////////////// TA-260 ///////////////////////////////////////

  Then(/^I can see (.*) relationship type on linked ticket section$/, function(data){
	  SDmergeTicketActions.verifyMergeToInLinkedTickets(data);
	  Utils.clearLocalStorage();
  });

  Then(/^I can see ticket (.*) to other ticket$/, function(data){
	  SDmergeTicketActions.verifyTicketMergedToOther(data);
	  Utils.clearLocalStorage();
  });

  Then(/^The ticket cannot be closed as the child ticket is still open$/, function(){
	  SDmergeTicketActions.verifyCurrentTicketStatus();
	  Utils.clearLocalStorage();
  });

  Then(/^I can see that current ticket is closed$/, function(){
	  SDmergeTicketActions.verifyCurrentTicketClosedStatus();
	  Utils.clearLocalStorage();
  });

  Then(/^I can see its contents are copied to the other ticket in which it is merged$/, function(){
	  SDmergeTicketActions.verifyContentsCopied();
	  Utils.clearLocalStorage();
  });


  Then(/^I should see the link event in the activity log$/, function(){
	  SDmergeTicketActions.verifyLinkedActivityLog();
	  Utils.clearLocalStorage();
  });
  Then(/^I should see the link event in the ISP log$/, function(){
	  SDmergeTicketActions.verifyLinkedISPLog();
	  Utils.clearLocalStorage();
  });

  ////////////////////////////////////// TA-260 ///////////////////////////////////////
  Then(/^I can see that followers of current tickets get copied to selected ticket$/, function(){
	  SDmergeTicketActions.verifyFollwersCopied();
	  Utils.clearLocalStorage();
  });
  Then(/^I can see that the notes of current tickets get copied to selected ticket$/, function(){
	  SDmergeTicketActions.verifyNoteCopiedToMerged();
	  Utils.clearLocalStorage();
  });
  Then(/^I can see that the tasks of current tickets get copied to selected ticket$/, function(){
	  SDmergeTicketActions.verifyTaskCopiedToMerged();
	  Utils.clearLocalStorage();
  });
  Then(/^I can see that the attachment of current tickets get copied to selected ticket$/, function(){
	  SDmergeTicketActions.verifyAttachmentCopiedToMerged();
	  Utils.clearLocalStorage();
  });
  Then(/^I can see that contacts of current tickets get copied to selected ticket$/, function(){
	  SDmergeTicketActions.verifyContactsCopied();
	  Utils.clearLocalStorage();
  });
  Then(/^I can see that the custom fields of current tickets get copied to selected ticket$/, function(){
	  SDmergeTicketActions.verifyCustomFieldsCopied();
	  Utils.clearLocalStorage();
  });