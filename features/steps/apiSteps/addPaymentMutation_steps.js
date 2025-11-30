const { Given, When, Then } = require('@cucumber/cucumber');
const addPaymentMutationActions = require('../../support/apiSupport/addPaymentMutationActions');

When(/^I execute the addPaymentMutation mutation in GraphQL Playground$/, function () {
    addPaymentMutationActions.createPayload();
});

When(/^I provide the variables for addPaymentMutation mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.customerId = parseInt(variables.customerId, 10);
    variables.paymentAmount = parseInt(variables.paymentAmount, 10);
    variables.merchantOptionId = parseInt(variables.merchantOptionId, 10);
    addPaymentMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for addPaymentMutation mutation$/, async function () {
    await addPaymentMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the addPaymentMutation operatrion$/, function () {
    addPaymentMutationActions.verifyResponse();
});