const { Given, When, Then } = require('@cucumber/cucumber');
const UpdatePaymentDistributionMutationActions = require('../../support/apiSupport/UpdatePaymentDistributionMutationActions');

When(/^I execute the UpdatePaymentDistribution mutation in GraphQL Playground$/, function () {
    UpdatePaymentDistributionMutationActions.createPayload();
});

When(/^I provide the variables for UpdatePaymentDistribution mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.paymentId = parseInt(variables.paymentId, 10);
    variables.amount = parseInt(variables.amount, 10);
    variables.distributionId = parseInt(variables.distributionId, 10);
    UpdatePaymentDistributionMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for UpdatePaymentDistribution mutation$/, async function () {
    await UpdatePaymentDistributionMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the UpdatePaymentDistribution operatrion$/, function () {
    UpdatePaymentDistributionMutationActions.verifyResponse();
});