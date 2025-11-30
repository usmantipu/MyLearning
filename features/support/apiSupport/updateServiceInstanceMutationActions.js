const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class updateServiceInstanceMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.randomIpAddress;
        this.serviceNumber;
	}

    createPayload(){
        this.query = `
            mutation updateServiceInstanceMutation(
                $input_service_instance: ServiceInstancesUpdateInput!
                $flag_b: Boolean
                $cnMaestroX_updates: CnMaestroXUpdatesInput
            ) {
                updateServiceInstance(
                    input_service_instance: $input_service_instance
                    flag_b: $flag_b
                    cnMaestroX_updates: $cnMaestroX_updates
                ) {
                    service_number
                    package_number
                    service_id
                    service_name
                    status
                    service_label
                    techcode
                }
            }

        `;
        console.log('I execute the updateServiceInstance mutation in GraphQL Playground');
    }

    generateRandomIpAddress(){
        this.randomIpAddress = Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 100) + '.' + Math.floor(Math.random() * 100);
    }

    provideVariables(variables){
        this.generateRandomIpAddress();
        this.serviceNumber = variables.serviceNumber;
        this.variables = {
            input_service_instance: {
                service_number: variables.serviceNumber,
                status: variables.status,
                service_details: {
                ip_address: this.randomIpAddress
                }
            },
            flag_b: false,
            cnMaestroX_updates: {
                action: variables.action,
                isp_id: variables.ispId
            }
        };



        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "updateServiceInstanceMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const updateServiceInstance = this.response.data.updateServiceInstance.service_number;
        console.log(updateServiceInstance);
        expect(updateServiceInstance).eql(this.serviceNumber);
        console.log('The service instance has been updated');
    }
}
module.exports = new updateServiceInstanceMutationActions();