const {Given, When, Then} = require("@cucumber/cucumber");
const SDlinkTicketAction = require('../support/SDLinkTicketAction');
const Utils = require('../support/utils');

When(/^I close the right drawer$/,function() {
    SDlinkTicketAction.ClickcloseRightDrawer();
});
When(/^I go to CRM for link ticket$/,function() {
    SDlinkTicketAction.openServiceDesk();
});
When(/^I open a ticket in ticket dock$/,function(){
    SDlinkTicketAction.clickOnTicket1();
});
When(/^I open linked parent ticket$/,function(){
    SDlinkTicketAction.linkTicketAs('parent');
    SDlinkTicketAction.verifyOpenLinkedTicketDock();
});
When(/^I open linked child ticket$/,function(){
    SDlinkTicketAction.linkTicketAs('child');
    SDlinkTicketAction.verifyOpenLinkedTicketDock();
});
When(/^I keep another ticket Data to search$/,function(){
    SDlinkTicketAction.keepData();
});
Then(/^I see a separate section for linked tickets$/,function(){
    SDlinkTicketAction.verifySeparateSectionForLinkedTickets();
    Utils.clearLocalStorage()
});
Then(/^I can search the ticket with ID or summary$/,function(){
    SDlinkTicketAction.verifySearchTicketId();
    Utils.clearLocalStorage()
});
Then(/^I can verify ticket is linked as (.*)$/,function(data){
    SDlinkTicketAction.linkTicketAs(data);
});
Then(/^I can open the linked ticket's dock$/,function(){
    SDlinkTicketAction.verifyOpenLinkedTicketDock();
    Utils.clearLocalStorage()
});
Then(/^I can remove the linked ticket$/,function(){
    SDlinkTicketAction.verifyRemoveLinkedTicket();
    Utils.clearLocalStorage()
});
Then(/^I can link a ticket as a parent$/,function(){
    SDlinkTicketAction.linkTicketAs('parent');
});