const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class addPaymentMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.customerId
	}

    createPayload(){
        this.query = `
            mutation addPaymentMutation(
                $input_payment: PaymentsInput!
                $input_credit_memo_items: [CreditMemoItemInput]
            ) {
                addPayment(
                    input_payment: $input_payment
                    input_credit_memo_items: $input_credit_memo_items
                ) {
                    customer_id
                    payment_id
                    payment_date
                    payment_method
                    customer {
                    status
                    balance
                    paid_through
                    __typename
                    }
                    __typename
                }
            }

        `;
        console.log('I execute the addPaymentMutation mutation in GraphQL Playground');
    }

    provideVariables(variables){
        this.customerId = variables.customerId;
        this.variables = {
            input_payment: {
                customer_id: variables.customerId,
                payment_memo: variables.paymentMemo,
                process_payment: false,
                auto_unsuspend: true,
                routing_number: variables.routingNumber,
                account_number: variables.accountNumber,
                echeck_type: variables.echeckType,
                payment_method: variables.paymentMethod,
                payment_amount: variables.paymentAmount,
                payment_date: variables.paymentDate,
                merchant_option_id: variables.merchantOptionId,
                nacha_details: {
                    type: variables.type,
                    source: variables.source
                },
                payment_reference: variables.paymentReference,
                address: variables.address,
                city: variables.city,
                state: variables.state,
                zip_code: variables.zipCode
            }
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "addPaymentMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const addPayment = this.response.data.addPayment.customer_id;
        console.log(addPayment);
        expect(addPayment).eql(this.customerId);
        console.log('The payment has been added successfully');
    }
}
module.exports = new addPaymentMutationActions();