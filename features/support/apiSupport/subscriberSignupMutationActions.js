const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const voidPaymentMutationActions = require('./voidPaymentMutationActions');
const axios = require('axios');

class subscriberSignupMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.query;
        this.variables;
        this.response;
        this.randomUsername;
        this.main_email;
	}

    createPayload(){
        this.query = `
            mutation subscriberSignupMutation(
                $input_customer: CustomerInput!
                $input_customer_details: CustomerDetailsInput!
                $input_customer_billing_settings: CustomerBillingSettingsInput
                $input_package_id: Int!
                $input_attachments: [AttachmentInput]
                $input_transaction_result: TransactionResultInput
                $payment_type: String
                $deposit_amount: Float
                $mac_address: String
                $notes: String
                $client_ip: String
                $server_name: String
                $sca_payload: ScaSignupPayloadInput
                ) {
                subscriberSignup(
                    input_customer: $input_customer
                    input_customer_details: $input_customer_details
                    input_customer_billing_settings: $input_customer_billing_settings
                    input_package_id: $input_package_id
                    input_attachments: $input_attachments
                    input_transaction_result: $input_transaction_result
                    payment_type: $payment_type
                    deposit_amount: $deposit_amount
                    mac_address: $mac_address
                    notes: $notes
                    client_ip: $client_ip
                    server_name: $server_name
                    sca_payload: $sca_payload
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
                    bill_address1
                    main_city
                    bill_city
                    main_state
                    bill_state
                    main_zip
                    bill_zip
                    main_email
                    bill_email
                    }
                    customer_billing_settings {
                    invoice_day
                    due_day
                    }
                    created_at
                    updated_at
                    __typename
                }
            }
        `;
      
        console.log('I execute the subscriberSignup mutation in GraphQL Playground');
    }

    generateUsernameAndEmail(){
        const randomNum = Math.floor(Math.random() * 100000);
        this.randomUsername = ('apisignupuser' + randomNum).toLowerCase();
        this.main_email = this.randomUsername + '@automationtest.com';
    }

    provideVariables(variables){
        this.generateUsernameAndEmail();
        this.variables = {
            input_customer: {
                username: this.randomUsername,
                first_name: variables.firstName,
                last_name: variables.lastName,
                password: variables.password
            },
            input_customer_details: {
                main_address1: variables.main_address1,
                main_address2: "",
                bill_address1: variables.main_address1,
                bill_address2: "",
                main_city: variables.main_city,
                bill_city: variables.main_city,
                main_state: variables.main_state,
                bill_state: variables.main_state,
                main_zip: variables.main_zip,
                bill_zip: variables.main_zip,
                main_phone1: variables.main_phone1,
                bill_phone1: variables.main_phone1,
                main_email: variables.main_email,
                bill_email: variables.main_email
            },
            input_customer_billing_settings: {
                invoice_day: variables.invoice_day,
                term_start_day: variables.term_start_day,
                due_day: variables.due_day
            },
            input_package_id: variables.inputPackageId,
            input_attachments: [],
            input_transaction_result: null,
            payment_type: variables.paymentType,
            deposit_amount: variables.depositAmount,
            mac_address: variables.macAddress,
            notes: variables.notes,
            client_ip: variables.clientIP,
            server_name: variables.serverName,
            sca_payload: null
        };
        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(voidPaymentMutationActions.token, "subscriberSignupMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        const subscriberSignup= this.response.data.subscriberSignup.username;
        console.log(subscriberSignup);
        expect(subscriberSignup).to.be.a('string');
        expect(subscriberSignup).eql(this.randomUsername);
        console.log('The subscriber has been signed up with this username: ' + this.randomUsername);
    }
}
module.exports = new subscriberSignupMutationActions();