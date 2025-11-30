const { Given, When, Then } = require('@cucumber/cucumber');
const addCustomerMutationActions = require('../../support/apiSupport/addCustomerMutationActions');

When(/^I execute the addCustomer mutation in GraphQL Playground$/, function () {
    addCustomerMutationActions.createPayload();
});

When(/^I provide the variables for addCustomer mutation$/, function () {
    addCustomerMutationActions.provideVariables();
});

Then(/^I include the authorization token in the headers for addCustomer mutation$/, async function () {
    await addCustomerMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the addCustomer operatrion$/, function () {
    addCustomerMutationActions.verifyResponse();
});