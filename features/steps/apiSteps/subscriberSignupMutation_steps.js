const { Given, When, Then } = require('@cucumber/cucumber');
const subscriberSignupMutationActions = require('../../support/apiSupport/subscriberSignupMutationActions');

When(/^I execute the subscriberSignup mutation in GraphQL Playground$/, function () {
    subscriberSignupMutationActions.createPayload();
});

When(/^I provide the variables for subscriberSignup mutation$/, function (variablesTable) {
    const variables = variablesTable.rowsHash();
    variables.invoice_day = parseInt(variables.invoice_day, 10);
    variables.term_start_day = parseInt(variables.term_start_day, 10);
    variables.due_day = parseInt(variables.due_day, 10);
    variables.depositAmount = parseInt(variables.depositAmount, 10);
    variables.inputPackageId = parseInt(variables.inputPackageId, 10);
    subscriberSignupMutationActions.provideVariables(variables);
});

Then(/^I include the authorization token in the headers for subscriberSignup mutation$/, async function () {
    await subscriberSignupMutationActions.executeGraphQlMutation();
});

Then(/^I should receive a successful response confirming the subscriberSignup operatrion$/, function () {
    subscriberSignupMutationActions.verifyResponse();
});