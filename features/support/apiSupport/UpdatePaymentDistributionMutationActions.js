const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class UpdatePaymentDistributionMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
	}

    createPayload(){
        this.query = `
            mutation UpdatePaymentDistribution(
                $payment_id: Float!
                $is_new_payment: Boolean
                $input_payment_distribution: [PaymentDistributionInput]
            ) {
                updatePaymentDistribution(
                    payment_id: $payment_id
                    is_new_payment: $is_new_payment
                    input_payment_distribution: $input_payment_distribution
                ) {
                    id
                    payment_id
                    type
                    distribution_id
                    amount
                    distribution_date
                    flag_deleted
                }
            }

        `;
        console.log('I execute the UpdatePaymentDistribution mutation in GraphQL Playground');
    }

    provideVariables(variables){
        this.variables = {
            "payment_id": variables.paymentId,
            "is_new_payment": false,
            "input_payment_distribution": [
                {
                "amount": variables.amount,
                "type": variables.type,
                "distribution_id": variables.distributionId
                }
            ]
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "UpdatePaymentDistribution", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const updatePaymentDistribution = this.response.data.updatePaymentDistribution;
        console.log(updatePaymentDistribution);
        expect(updatePaymentDistribution).to.not.be.null;
        console.log('The payment distribution has been updated successfully.');
    }
}
module.exports = new UpdatePaymentDistributionMutationActions();