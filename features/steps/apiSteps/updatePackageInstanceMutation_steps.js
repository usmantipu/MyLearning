const { Given, When, Then } = require('@cucumber/cucumber');
const updatePackageInstanceMutationActions = require('../../support/apiSupport/updatePackageInstanceMutationActions');

When(/^I execute the updatePackageInstance mutation in GraphQL Playground$/, function () {
    updatePackageInstanceMutationActions.createPayload();
});

When(/^I provide the variables for updatePackageInstance mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.customerId = parseInt(variables.customerId, 10);
    variables.packageNumber = parseInt(variables.packageNumber, 10);
    variables.hibernationLimit = parseInt(variables.hibernationLimit, 10);
    updatePackageInstanceMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for updatePackageInstance mutation$/, async function () {
    await updatePackageInstanceMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the updatePackageInstance operatrion$/, function () {
    updatePackageInstanceMutationActions.verifyResponse();
});