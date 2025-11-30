const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class addCustomerMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.token = 'default_token';
        this.query;
        this.variables;
        this.response;
        this.randomUsername;
        this.firstName = 'Guilbert';
        this.lastName = 'Wildbore';
        this.main_address1 = '24496 Arizona Plaza';
        this.main_state = 'AR';
        this.main_city = 'North Littel Rock';
        this.main_zip = '72199';
        this.main_phone1 = '(501) 524-1203';
        this.main_email = 'gwildbore4@automationtest.com';
        this.invoice_day = 1;
        this.term_start_day = 1;
        this.due_day = 25;
	}

    createPayload(){
        this.query = `
            mutation addCustomerMutation(
            $input_customer: CustomerInput
            $input_customer_details: CustomerDetailsInput
            $input_customer_billing_settings: CustomerBillingSettingsInput
            $input_package_id: Int
            ) {
                addCustomer(
                    input_customer: $input_customer
                    input_customer_details: $input_customer_details
                    input_customer_billing_settings: $input_customer_billing_settings
                    input_package_id: $input_package_id
                ) {
                    customer_id
                    username
                    first_name
                    last_name
                    balance
                    paid_through
                    status
                    customer_details {
                    main_address1
                    main_address2
                    bill_address1
                    bill_address2
                    main_state
                    bill_state
                    setup_date
                    }
                    customer_billing_settings {
                    invoice_day
                    due_day
                    autopay_day
                    }
                    created_at
                    updated_at
                    __typename
                }
            }

        `;
        console.log('I execute the addCustomer mutation in GraphQL Playground');
    }

    generateUsername(){
        const randomNum = Math.floor(Math.random() * 10000);
        this.randomUsername = (this.firstName + randomNum).toLowerCase();
    }

    provideVariables(){
        this.generateUsername();
        this.variables = {
            input_customer: {
                username: this.randomUsername,
                first_name: this.firstName,
                last_name: this.lastName
            },
            input_customer_details: {
                main_address1: this.main_address1,
                main_address2: "",
                bill_address1: this.main_address1,
                bill_address2: "",
                main_state: this.main_state,
                bill_state: this.main_state,
                main_city: this.main_city,
                bill_city: this.main_city,
                main_zip: this.main_zip,
                bill_zip: this.main_zip,
                main_phone1: this.main_phone1,
                bill_phone1: this.main_phone1,
                main_email: this.main_email,
                bill_email: this.main_email
            },
            input_customer_billing_settings: {
                invoice_day: this.invoice_day,
                term_start_day: this.term_start_day,
                due_day: this.due_day
            },
            input_package_id: null
        };
        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "addCustomerMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        const addCustomer = this.response.data.addCustomer.username;
        console.log(addCustomer);
        expect(addCustomer).to.be.a('string');
        expect(addCustomer).eql(this.randomUsername);
        console.log('The customer has been added with this username: ' + this.randomUsername);
    }
}
module.exports = new addCustomerMutationActions();