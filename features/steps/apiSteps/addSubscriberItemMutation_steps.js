const { Given, When, Then } = require('@cucumber/cucumber');
const addSubscriberItemMutationActions = require('../../support/apiSupport/addSubscriberItemMutationActions');

When(/^I execute the addSubscriberItem mutation in GraphQL Playground$/, function () {
    addSubscriberItemMutationActions.createPayload();
});

When(/^I provide the variables for addSubscriberItem mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.customerId = parseInt(variables.customerId, 10);
    variables.itemId = parseInt(variables.itemId, 10);
    variables.entityId = parseInt(variables.entityId, 10);
    variables.quantity = parseInt(variables.quantity, 10);
    addSubscriberItemMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for addSubscriberItem mutation$/, async function () {
    await addSubscriberItemMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the addSubscriberItem operatrion$/, function () {
    addSubscriberItemMutationActions.verifyResponse();
});