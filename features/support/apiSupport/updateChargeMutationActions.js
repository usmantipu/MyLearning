const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class updateChargeMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.randomDescription;
	}

    createPayload(){
        this.query = `
            mutation UpdateCharge(
                $type: StatementTypeEnum!
                $input_charge: CustomItemInput!
                $recurring_option: Int
            ) {
                updateCharge(
                    type: $type
                    input_charge: $input_charge
                    recurring_option: $recurring_option
                ) {
                    id
                    item_name
                    item_desc
                    item_quantity
                    item_rate
                    item_total
                    tax_id
                    tax_type
                    customer_id
                    status
                }
            }

        `;
        console.log('I execute the UpdateCharge mutation in GraphQL Playground');
    }

    generateRandomIpAddress(desc){
        this.randomDescription = desc + ' ' + Math.floor(Math.random() * 10000);
    }

    provideVariables(variables){
        this.generateRandomIpAddress(variables.itemDesc);
        this.variables = {
            type: variables.type,
            input_charge: {
                id: variables.id,
                item_id: variables.itemId,
                item_name: variables.itemName,
                item_desc: this.randomDescription,
                item_quantity: variables.itemQuantity,
                item_rate: variables.itemRate,
                item_total: variables.itemTotal,
                tax_id: variables.taxId,
                tax_type: variables.taxType
            },
            recurring_option: null
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "UpdateCharge", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const updateCharge = this.response.data.updateCharge.item_desc;
        console.log(updateCharge);
        expect(updateCharge).eql(this.randomDescription);
        console.log('The Charge has been updated having description: ' + this.randomDescription);
    }
}
module.exports = new updateChargeMutationActions();