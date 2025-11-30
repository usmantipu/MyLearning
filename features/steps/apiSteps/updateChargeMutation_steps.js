const { Given, When, Then } = require('@cucumber/cucumber');
const updateChargeMutationActions = require('../../support/apiSupport/updateChargeMutationActions');

When(/^I execute the UpdateCharge mutation in GraphQL Playground$/, function () {
    updateChargeMutationActions.createPayload();
});

When(/^I provide the variables for UpdateCharge mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.id = parseInt(variables.id, 10);
    variables.itemId = parseInt(variables.itemId, 10);
    variables.itemQuantity = parseInt(variables.itemQuantity, 10);
    variables.itemRate = parseInt(variables.itemRate, 10);
    variables.itemTotal = parseInt(variables.itemTotal, 10);
    variables.taxId = parseInt(variables.taxId, 10);
    updateChargeMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for UpdateCharge mutation$/, async function () {
    await updateChargeMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the UpdateCharge operatrion$/, function () {
    updateChargeMutationActions.verifyResponse();
});