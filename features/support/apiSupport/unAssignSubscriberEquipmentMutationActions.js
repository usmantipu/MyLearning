const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class unAssignSubscriberEquipmentMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.equipmentId
	}

    createPayload(){
        this.query = `
            mutation unassignSubscriberEquipment(
                $equipment_id: Int!
                $location_id: Int!
            ) {
                unassignSubscriberEquipment(
                    equipment_id: $equipment_id
                    location_id: $location_id
                ) {
                    id
                    name
                    description
                    type
                    location_id
                    inventory_id
                    mac_id
                }
            }

        `;
        console.log('I execute the unassignSubscriberEquipment mutation in GraphQL Playground');
    }

    provideVariables(variables){
        this.equipmentId = variables.equipmentId;
        this.variables = {
            equipment_id: variables.equipmentId,
            location_id: variables.locationId
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "unassignSubscriberEquipment", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const unassignSubscriberEquipment = this.response.data.unassignSubscriberEquipment.id;
        console.log(unassignSubscriberEquipment);
        expect(unassignSubscriberEquipment).eql(this.equipmentId);
        console.log('The equipment has been unassigned to subscriber');
    }
}
module.exports = new unAssignSubscriberEquipmentMutationActions();