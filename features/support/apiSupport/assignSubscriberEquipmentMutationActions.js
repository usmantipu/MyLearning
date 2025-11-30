const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class assignSubscriberEquipmentMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.equipmentId
	}

    createPayload(){
        this.query = `
            mutation assignSubscriberEquipment(
                $isp_id: Int!
                $equipment_id: Int!
                $subscriber_id: Int
            ) {
                assignSubscriberEquipment(
                    isp_id: $isp_id
                    equipment_id: $equipment_id
                    subscriber_id: $subscriber_id
                ) {
                    id
                    name
                    description
                    type
                    mac_id
                    location_id
                    profile_id
                    has_instance
                }
            }

        `;
        console.log('I execute the assignSubscriberEquipment mutation in GraphQL Playground');
    }

    provideVariables(variables){
        this.equipmentId = variables.equipmentId;
        this.variables = {
            isp_id: variables.ispId,
            equipment_id: variables.equipmentId,
            subscriber_id: variables.subscriberId
        };

        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "assignSubscriberEquipment", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const assignSubscriberEquipment = this.response.data.assignSubscriberEquipment.id;
        console.log(assignSubscriberEquipment);
        expect(assignSubscriberEquipment).eql(this.equipmentId);
        console.log('The equipment has been assigned to subscriber');
    }
}
module.exports = new assignSubscriberEquipmentMutationActions();