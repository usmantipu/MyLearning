const { Given, When, Then } = require('@cucumber/cucumber');
const addLineItemMutationActions = require('../../support/apiSupport/addLineItemMutationActions');

When(/^I execute the addLineItem mutation in GraphQL Playground$/, function () {
    addLineItemMutationActions.createPayload();
});

When(/^I provide the variables for addLineItem mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.id = parseInt(variables.id, 10);
    variables.customerId = parseInt(variables.customerId, 10);
    variables.itemId = parseInt(variables.itemId, 10);
    variables.itemQuantity = parseInt(variables.itemQuantity, 10);
    variables.itemRate = parseInt(variables.itemRate, 10);
    variables.itemTotal = parseInt(variables.itemTotal, 10);
    variables.taxId = parseInt(variables.taxId, 10);
    addLineItemMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for addLineItem mutation$/, async function () {
    await addLineItemMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the addLineItem operatrion$/, function () {
    addLineItemMutationActions.verifyResponse();
});