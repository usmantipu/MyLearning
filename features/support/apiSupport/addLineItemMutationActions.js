const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class addLineItemMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.type
	}

    createPayload(){
        this.query = `
            mutation addLineItem(
                $id: Int!
                $type: StatementTypeEnum!
                $input_line_items: [CustomItemInput]
                $customer_id: Int
            ) {
                addLineItem(
                    id: $id
                    type: $type
                    input_line_items: $input_line_items
                    customer_id: $customer_id
                ) {
                    equipment_ids
                    service_instance_ids
                    package_numbers
                    statements {
                    id
                    type
                    }
                }
            }

        `;
        console.log('I execute the addLineItem mutation in GraphQL Playground');
    }

    provideVariables(variables){
        this.type = variables.type;
        this.variables = {
            id: variables.id,
            type: variables.type,
            customer_id: variables.customerId,
            bill_start_date: variables.date,
            term_start_date: variables.date,
            term_end_date: variables.endDate,
            input_line_items: [
                {
                item_id: variables.itemId,
                item_name: variables.itemName,
                item_desc: variables.itemDesc,
                item_quantity: variables.itemQuantity,
                item_rate: variables.itemRate,
                item_total: variables.itemTotal,
                tax_id: variables.taxId,
                tax_type: variables.taxType,
                flag_recurring: false
                }
            ]
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "addLineItem", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const addLineItem = this.response.data.addLineItem.statements[0].type;
        console.log(addLineItem);
        expect(addLineItem).eql(this.type);
        console.log('The the line item / package has been added to subscriber');
    }
}
module.exports = new addLineItemMutationActions();