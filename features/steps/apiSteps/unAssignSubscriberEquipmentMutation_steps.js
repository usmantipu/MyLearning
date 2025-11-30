const { Given, When, Then } = require('@cucumber/cucumber');
const unAssignSubscriberEquipmentMutationActions = require('../../support/apiSupport/unAssignSubscriberEquipmentMutationActions');

When(/^I execute the unassignSubscriberEquipment mutation in GraphQL Playground$/, function () {
    unAssignSubscriberEquipmentMutationActions.createPayload();
});

When(/^I provide the variables for unassignSubscriberEquipment mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.equipmentId = parseInt(variables.equipmentId, 10);
    variables.locationId = parseInt(variables.locationId, 10);
    unAssignSubscriberEquipmentMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for unassignSubscriberEquipment mutation$/, async function () {
    await unAssignSubscriberEquipmentMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the unassignSubscriberEquipment operatrion$/, function () {
    unAssignSubscriberEquipmentMutationActions.verifyResponse();
});