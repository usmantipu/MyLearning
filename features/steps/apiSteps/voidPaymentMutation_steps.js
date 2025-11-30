const { Given, When, Then } = require('@cucumber/cucumber');
const voidPaymentMutationActions = require('../../support/apiSupport/voidPaymentMutationActions');

Given(/^I have a valid authorization token$/, async function () {
    await voidPaymentMutationActions.getValidAuthenticationToken();
});

Given(/^I make a payment and get its payment ID$/, async function () {
    await voidPaymentMutationActions.makePayment();
});

When(/^I execute the voidPayment mutation in GraphQL Playground$/, function () {
    voidPaymentMutationActions.createPayload();
});

When(/^I provide the variables$/, function () {
    voidPaymentMutationActions.provideVariables();
});

Then(/^I include the authorization token in the headers$/, async function () {
    await voidPaymentMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the void operation$/, function () {
    voidPaymentMutationActions.verifyResponse();
});