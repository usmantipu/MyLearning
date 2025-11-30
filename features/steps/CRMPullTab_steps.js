const {Given, When, Then} = require("@cucumber/cucumber");
const crmLinkedListActions = require('../support/CRMLinkedListActions');
const crmPullTabActions = require('../support/CRMPullTabActions');
const Utils = require('../support/utils');


When(/^I have opened the panel using the Pull tab$/, function() {
    crmPullTabActions.openPullTab();
});
When(/^I click on the text Assignees$/, function() {
    crmPullTabActions.openAssignessFollowersList(0);
});
When(/^I select assignees from the list$/, function() {
    crmPullTabActions.selectAssigneeFollower();
});
When(/^I click on save button to save assignees$/, function() {
    crmPullTabActions.clickSaveBtn();
});
When(/^I click on the text Followers$/, function() {
    crmPullTabActions.openAssignessFollowersList(1);
});
When(/^I select followers from the list$/, function() {
    crmPullTabActions.selectAssigneeFollower();
});
When(/^I click on save button to save followers$/, function() {
    crmPullTabActions.clickSaveBtn();
});
When(/^I view the ticket overview card$/, function() {
    crmPullTabActions.viewTicketOverview();
});
When(/^I click on the placeholder text Click to add description$/, function() {
    crmPullTabActions.clickPlaceholderToAddDescription();
});
When(/^I enter a description for the ticket$/, function() {
    crmPullTabActions.enterDescription();
});
When(/^I click on the pull tab$/, function() {
    crmPullTabActions.verifyPullTab();
});
When(/^I have opened the panel using the Pull tab to remove assignee$/, function() {
    crmPullTabActions.openPullTabToRemoveAssigneeFollower(0);
});
When(/^I click over an assignee name$/, function() {
    crmPullTabActions.clickOnAssigneeFollower();
});
When(/^I remove assignee$/, function() {
    crmPullTabActions.removeAssigneeFollower();
});
When(/^I have opened the panel using the Pull tab to remove follower$/, function() {
    crmPullTabActions.openPullTabToRemoveAssigneeFollower(1);
});
When(/^I click over an follower name$/, function() {
    crmPullTabActions.clickOnAssigneeFollower();
});
When(/^I remove follower$/, function() {
    crmPullTabActions.removeAssigneeFollower();
});
When(/^I open the ticket drawer with no signature$/, function() {
    crmPullTabActions.openPullTab();
});



Then(/^I can see assignees saved successfully and displayed in pull tab$/, function() {
    crmPullTabActions.verifyAssigneeFollowerDisplayed();
});
Then(/^I can see Followers saved successfully and displayed in pull tab$/, function() {
    crmPullTabActions.verifyAssigneeFollowerDisplayed();
});
Then(/^I should see the placeholder text Click to add description under the title bar$/, function() {
    crmPullTabActions.verifyPlaceholder();
});
Then(/^The description should be displayed under the title bar replacing the placeholder text$/, function() {
    crmPullTabActions.verifyDescription();
});
Then(/^I should see a pull tab to open details panel$/, function() {
    crmPullTabActions.verifyPullTab();
});
Then(/^The details panel should open displaying Assignees, Followers, Created By, and Last Updated By$/, function() {
    crmPullTabActions.verifyDetailsPanel();
});
Then(/^The assignee should be removed from the Assignees section$/, function() {
    crmPullTabActions.verifyAssigneeFollowerRemoved();
});
Then(/^A log entry should be created for remove assignee$/, function() {
    crmPullTabActions.verifyLogEntry('Assignees removed:');
});
Then(/^The follower should be removed from the Assignees section$/, function() {
    crmPullTabActions.verifyAssigneeFollowerRemoved();
});
Then(/^A log entry should be created for remove follower$/, function() {
    crmPullTabActions.verifyLogEntry('Followers changed');
});
Then(/^I should see the Add Signature text in the slide-out tab$/, function() {
    crmPullTabActions.verifyAddSignatureText();
});