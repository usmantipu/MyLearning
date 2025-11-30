const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class addSubscriberItemMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
	}

    createPayload(){
        this.query = `
            mutation addSubscriberItemMutation(
                $customer_id: Int!
                $item_id: Int!
                $entity_id: Int
                $quantity: Int
                $flag_separate_invoice_item_per_quantity: Boolean
                ) {
                addSubscriberItem(
                    customer_id: $customer_id
                    item_id: $item_id
                    entity_id: $entity_id
                    quantity: $quantity
                    flag_separate_invoice_item_per_quantity: $flag_separate_invoice_item_per_quantity
                ) {
                    id
                    type
                    name
                    status
                    original_name
                    isPackageItemsTotal
                    account_id
                    code
                    description
                }
            }

        `;
        console.log('I execute the addSubscriberItem mutation in GraphQL Playground');
    }

    provideVariables(variables){
        this.variables = {
            customer_id: variables.customerId,
            item_id: variables.itemId,
            entity_id: variables.entityId,
            quantity: variables.quantity,
            flag_separate_invoice_item_per_quantity: false
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "addSubscriberItemMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        const addSubscriberItem = this.response.data.addSubscriberItem;
        console.log(addSubscriberItem);
        expect(addSubscriberItem).to.not.be.null;
        console.log('The subscriber item has been added successfully.');
    }
}
module.exports = new addSubscriberItemMutationActions();