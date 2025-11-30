const {Given, When, Then} = require("@cucumber/cucumber");
const serviceDeskActions = require('../support/serviceDeskActions');
const SDlinkTicketValidationActions = require('../support/SDLinkTicketValidationActions');
const Utils = require('../support/utils');


When(/^I link a ticket as child$/,function() {
    SDlinkTicketValidationActions.linkTicketAs('child');
    SDlinkTicketValidationActions.verifyOpenLinkedTicketDock();
});
Then(/^I try to close a ticket$/,function() {
    SDlinkTicketValidationActions.expandArrowButton();
    SDlinkTicketValidationActions.clickOnCloseTicket();
});
Then(/^I should see 'Cascade update to linked tickets' option for ticket (.*)$/,function(ticketStatus){
    SDlinkTicketValidationActions.verifyCascadeUpdate(ticketStatus);
});
Then(/^I try to resolve a ticket$/,function(){
    SDlinkTicketValidationActions.expandArrowButton();
    SDlinkTicketValidationActions.clickOnResolveTicket();
});
Then(/^I select cascade update to linked tickets option for (.*)$/,function(ticketStatus){
    SDlinkTicketValidationActions.clickOnCascasdeUpdateOption(ticketStatus);
});
Then(/^I should see options i.e. 'cascade the update to: all the tickets, specific ticket, and none of the linked tickets'$/,function(){
    SDlinkTicketValidationActions.verifyCascadeUpdateOptions();
});
Then(/^I am presented with an option to bypass the closing tickets requirements$/,function(){
    SDlinkTicketValidationActions.verifyToBypassCloseRequirements();
});
Then(/^I check the cascade update to linked tickets option to close Ticket$/,function(){
    SDlinkTicketValidationActions.checkTheOptionToCloseTicket();
});
Then(/^I check the cascade update to linked tickets options to Resolve Ticket$/,function(){
    SDlinkTicketValidationActions.checkTheOptionToResolveTicket();
});
Then(/^I should see linked ticket status gets resolved too$/,function(){
    SDlinkTicketValidationActions.verifyLinkedTicketGetResolved();
});