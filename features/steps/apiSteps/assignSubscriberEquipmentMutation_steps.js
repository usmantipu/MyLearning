const { Given, When, Then } = require('@cucumber/cucumber');
const assignSubscriberEquipmentMutationActions = require('../../support/apiSupport/assignSubscriberEquipmentMutationActions');

When(/^I execute the assignSubscriberEquipment mutation in GraphQL Playground$/, function () {
    assignSubscriberEquipmentMutationActions.createPayload();
});

When(/^I provide the variables for assignSubscriberEquipment mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.ispId = parseInt(variables.ispId, 10);
    variables.equipmentId = parseInt(variables.equipmentId, 10);
    variables.subscriberId = parseInt(variables.subscriberId, 10);
    assignSubscriberEquipmentMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for assignSubscriberEquipment mutation$/, async function () {
    await assignSubscriberEquipmentMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the assignSubscriberEquipment operatrion$/, function () {
    assignSubscriberEquipmentMutationActions.verifyResponse();
});