const {Given, When, Then} = require("@cucumber/cucumber");
const crmLinkedListActions = require('../support/CRMLinkedListActions');
const Utils = require('../support/utils');


When(/^I navigate to CRM after login$/, function() {
    crmLinkedListActions.nevigateToCRMArea();
});
When(/^I click to opens a ticket drawer$/, function() {
    crmLinkedListActions.openTicketDrawer();
});
When(/^I expands Linked Tickets sub section$/, function() {
    crmLinkedListActions.expandTicketSubSection();
});
When(/^I click on chain button for linking tickets$/, function() {
    crmLinkedListActions.clickChainBtnForLinkingTicket();
});
When(/^I create multiple tickets$/, function() {
    crmLinkedListActions.createMultipleTickets();
});
When(/^I selects multiple tickets from the search field$/, function() {
    crmLinkedListActions.selectMultipleTickets();
});
When(/^I select Ticket Type Relationship$/, function() {
    crmLinkedListActions.selectRelationship();
});
When(/^I clicks the Link Ticket$/, function() {
    crmLinkedListActions.linkTicket();
});



Then(/^I should be on the CRM Page$/, function() {
    crmLinkedListActions.verifyCRMArea();
});
Then(/^I can see the search field for searching tickets for linking$/, function() {
    crmLinkedListActions.verifySearchField();
});
Then(/^The sub-drawer should contain titled Linked Tickets$/, function() {
    crmLinkedListActions.verifyTitle();
});
Then(/^On the right of the card title bar, there should be a Search tool$/, function() {
    crmLinkedListActions.verifySearchTool();
});
Then(/^The selected tickets should be highlighted in the Search field$/, function() {
    crmLinkedListActions.verifyHighlightedTickets();
});
Then(/^The linked ticket IDs, descriptions, Priority, status should show in the list under the main drawer$/, function() {
    crmLinkedListActions.verifyLinkedTickets();
});