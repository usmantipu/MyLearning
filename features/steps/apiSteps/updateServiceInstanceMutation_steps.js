const { Given, When, Then } = require('@cucumber/cucumber');
const updateServiceInstanceMutationActions = require('../../support/apiSupport/updateServiceInstanceMutationActions');

When(/^I execute the updateServiceInstanceMutation in GraphQL Playground$/, function () {
    updateServiceInstanceMutationActions.createPayload();
});

When(/^I provide the variables for updateServiceInstance mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.serviceNumber = parseInt(variables.serviceNumber, 10);
    variables.ispId = parseInt(variables.ispId, 10);
    updateServiceInstanceMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for updateServiceInstance mutation$/, async function () {
    await updateServiceInstanceMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the updateServiceInstanceMutation operatrion$/, function () {
    updateServiceInstanceMutationActions.verifyResponse();
});