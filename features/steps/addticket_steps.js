const {Given, When, Then} = require("@cucumber/cucumber");
const serviceDeskActions = require('../support/serviceDeskActions');
const subscriberlistActions = require('../support/subscriberlistActions');
const Utils = require('../support/utils');

  Given(/^I open web application$/, function() {

      serviceDeskActions.openVispApp();
  }); 
  
  Given(/^I login with my credentials$/, function(creds) {
	  serviceDeskActions.loginToVisp(creds);
		
  });
  
  When(/^I move to subscriber list$/, function() {
	  subscriberlistActions.openSubscriberList();
	  console.log('I move to subscriber list');
  });
  
  When(/^I move to ticket list$/, function(){
	  serviceDeskActions.openServiceDesk();
	  console.log('I move to ticket list');
  });
  
  When(/^I navigate to Add Ticket page for any Subscriber$/, function(){

	  serviceDeskActions.openTicketInterface('fromSubscriberList');
	  
  });
  
  When(/^I navigate to Add Ticket page from top menu$/, function(){
	  serviceDeskActions.openTicketInterface('fromTopMenu');
	  
  });
  
  When(/^I enter ticket details like Summary,Type,Priority,Assignee and Ticket Followers$/, function(){
	  serviceDeskActions.editTicket('add','Text for Summary');
    serviceDeskActions.saveTicketDetails();
  });
  
  When(/^I enter ticket details like (.*), (.*), (.*)", (.*), (.*), (.*)$/, function(customerName, summary, ticketType, ticketPriority, assignee, ticketFollower){
	  serviceDeskActions.addTicket(customerName, 'add', summary, ticketType, ticketPriority, assignee, ticketFollower);
  });

  When(/^I add ticket details with custom field (.*), (.*)$/, function(customerName,customfieldValue){
	  serviceDeskActions.addTicketWithCustomFiled(customerName, 'add',customfieldValue);
  });

  When(/^I save new ticket$/, function(){
	  serviceDeskActions.saveCurrentTicket('add');
  });

  When(/^I go to ticket type settings to define a new ticket type$/, function(){
    serviceDeskActions.defineNewTicket();
    
  });

  When(/^I change the ticket type in the ticket dock$/, function(){
    serviceDeskActions.changeTicketType();
    
  });

  When(/^I hit cancel in the warning prompt$/, function(){
    serviceDeskActions.cancelChangeTicketType();
  });

  When(/^I update the ticket details$/, function(){
    serviceDeskActions.updateTicketDetails();
  });

  When(/^I restore the updates$/, function(){
    serviceDeskActions.restoreTicketDetails();
  });

  When(/^I update the contact phone$/, function(){
    serviceDeskActions.updateContactPhone();
  });

  When(/^I edit the ticket and attempt to close the dock$/, function(){
    serviceDeskActions.updateTicketDetails();
    serviceDeskActions.closeTicketDock();
  });

  When(/^I add ticket details such that the summary is missing$/, function(){
    serviceDeskActions.addTicketDetailsWithNoSummary();
  });

  When(/^I close new Ticket Dock$/, function(){
    serviceDeskActions.closeNewTicketDock();
  });
  
  Then(/^Ticket page should open for any Subscriber in Subscriber list$/, function(){
	  serviceDeskActions.verifyServiceDeskForm();
	  console.log('Ticket form launched successfully!');
	  Utils.clearLocalStorage();
  });
  
  Then(/^Ticket should be saved$/, function(){
	  serviceDeskActions.verifyConfirmation();
	  console.log('Ticket saved successfully!');
	  Utils.clearLocalStorage();
  });

  Then(/^I verify that newly created ticket type is available in ticket type dropdown$/, function(){
	  serviceDeskActions.verifyNewticketType();
	  Utils.clearLocalStorage();
  });

  Then(/^I should see a prompt with warning message$/, function(warnMsg){
	  serviceDeskActions.verifyTicketTypePrompt(warnMsg);
	  Utils.clearLocalStorage();
  });

  Then(/^The old ticket type value should be restored$/, function(){
	  serviceDeskActions.verifyTicketTypeRestored();
	  Utils.clearLocalStorage();
  });

  Then(/^The old values should be restored$/, function(){
	  serviceDeskActions.verifyValuesRestored();
	  Utils.clearLocalStorage();
  });

  Then(/^The contact phone should be updated$/, function(){
	  serviceDeskActions.verifyContactUpdated();
	  Utils.clearLocalStorage();
  });

  Then(/^I should see the ticket ID in the title bar of the ticket dock$/, function(){
	  serviceDeskActions.verifyTicketIDInDock();
	  Utils.clearLocalStorage();
  });

  Then(/^I should see Schedule label for a ticket without an active Calendar event connected to it$/, function(){
	  serviceDeskActions.verifySchedule();
	  Utils.clearLocalStorage();
  });

  Then(/^I should be prompted with the warning of losing the changes$/, function(){
	  serviceDeskActions.verifyWarningMsgDisplayed();
	  Utils.clearLocalStorage();
  });

  Then(/^I cannot save the ticket$/, function(){
	  serviceDeskActions.verifySaveAddTicketDisabled();
	  Utils.clearLocalStorage();
  });
