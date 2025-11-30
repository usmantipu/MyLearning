const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class updatePackageInstanceMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.randomPackageName;
	}

    createPayload(){
        this.query = `
            mutation updatePackageInstanceMutation($input_package_instance: PackageInstancesInput!) {
                updatePackageInstance(input_package_instance: $input_package_instance) {
                    package_number
                    customer_id
                    package_name
                    flag_custom_hibernation_limit
                    hibernation_limit
                }
            }

        `;
        console.log('I execute the updatePackageInstance mutation in GraphQL Playground');
    }

    generaterandomPackageName(packageName){
        const randomNum = Math.floor(Math.random() * 10000);
        this.randomPackageName = packageName + ' ' + randomNum;
    }

    provideVariables(variables){
        this.generaterandomPackageName(variables.packageName);
        this.variables = {
            input_package_instance: {
                package_number: variables.packageNumber,
                customer_id: variables.customerId,
                package_name: this.randomPackageName,
                flag_custom_hibernation_limit: false,
                hibernation_limit: variables.hibernationLimit,
                billing_options: {
                bill_start_date: variables.date,
                invoice_date: variables.date,
                term_start_date: variables.date,
                bill_start_option: variables.billStartOption,
                contract_end_date: variables.contractEndDate
                }
            }
        };


        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "updatePackageInstanceMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        console.log(this.response);
        const updatePackageInstance = this.response.data.updatePackageInstance.package_name;
        console.log(updatePackageInstance);
        expect(updatePackageInstance).to.be.a('string');
        expect(updatePackageInstance).eql(this.randomPackageName);
        console.log('The package instance has been updated with this package name: ' + this.randomPackageName);
    }
}
module.exports = new updatePackageInstanceMutationActions();