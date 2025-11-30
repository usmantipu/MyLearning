const { When, Then } = require('@cucumber/cucumber');
const eCheckEmailTriggerActions = require('../support/eCheckEmailTriggerActions');

When(/^I open message templete from settings$/, function () {
    eCheckEmailTriggerActions.openMessageTemplete();
});

When(/^I add an email template for (.*)$/, function (templateName) {
	eCheckEmailTriggerActions.addTemplete(templateName);
});

When(/^I set the value of the Current Filtered List field to (.*)$/, function (filter) {
	eCheckEmailTriggerActions.setCurrentFilter(filter);
});

When(/^I set sample content for the (.*) email to be sent$/, function (type) {
	eCheckEmailTriggerActions.setContent(type);
});

When(/^I click Save button$/, function () {
	eCheckEmailTriggerActions.clickSaveBtn();
});

When(/^I enter the GraphQL Test Environment on the browser$/, async function () {
	await eCheckEmailTriggerActions.setUpGraphQLEnvironment('eCheck');
});

When(/^I enter the GraphQL Test Environment on the browser for credit card payment$/, async function () {
	await eCheckEmailTriggerActions.setUpGraphQLEnvironment('credit card');
});

When(/^I call the deletePayment mutation$/, function () {
	eCheckEmailTriggerActions.callDeletePaymentMutation();
});

When(/^I enter the following variables for deletePayment$/, function () {
	eCheckEmailTriggerActions.enterVariables('delete');
});

When(/^I enter authorization token and execute deletePayment mutation$/, async function () {
	await eCheckEmailTriggerActions.executeDeletePaymentMutation();
});

When(/^I call the voidPayment mutation$/, function () {
	eCheckEmailTriggerActions.callVoidPaymentMutation();
});

When(/^I enter the following variables for voidPayment$/, function () {
	eCheckEmailTriggerActions.enterVariables('void');
});

When(/^I enter authorization token and execute voidPayment mutation$/, async function () {
	await eCheckEmailTriggerActions.executeVoidPaymentMutation();
});

Then(/^This trigger should be added to the Active Trigger list on the Scheduled Emails tab$/, function () {
	eCheckEmailTriggerActions.verifyTrigger();
});

Then(/^The delete mutation is executed successfully$/, function () {
	eCheckEmailTriggerActions.verifyDeleteResponse();
});

Then(/^The Logs should show a history log type of EMAIL - SEND$/, function () {
	eCheckEmailTriggerActions.verifyLogHistory();
});

Then(/^The void mutation is executed successfully$/, function () {
	eCheckEmailTriggerActions.verifyVoidResponse();
});