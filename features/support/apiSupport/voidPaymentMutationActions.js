const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper');
const sharedData = require('../../api-tests/sharedData');
const axios = require('axios');

class voidPaymentMutationActions{
	constructor(){
        this.authUrl = sharedData.authURL;
        this.token = 'default_token';
        this.query;
		this.customerID = 2037267;
        this.paymentAmmount = 50.0;
        this.variables;
        this.response;
        this.paymentID;
	}

    async getValidAuthenticationToken(){
        const requestBody = {
            "g6_link": "prelive",
            "password": "Test@1234",
            "username": "jcabangonautomation"
        };
        const headers = {
            'authority': 'api.ms-visp.net',
            'method': 'POST',
            'path': '/authenticate',
            'scheme': 'https',
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'Content-Type': 'application/json',
            'accept-language': 'en-US,en;q=0.9',
            'origin': 'https://staging.visp.net',
            'referer': 'https://staging.visp.net/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'visp-agent': 'ubo-web',
        };
        const response = await axios.post(this.authUrl, requestBody, { headers });
        const authorization = response.data;
        expect(authorization.token).to.exist;
        this.token = authorization.token;
    }

    async makePayment(){
        var paymentDate = new Date().toISOString().split('T')[0];
        const query = `
            mutation addPaymentMutation($input_payment: PaymentsInput!) {
                addPayment(input_payment: $input_payment) {
                    customer_id
                    payment_id
                    payment_date
                    payment_method
                    customer {
                    status
                    balance
                    paid_through
                    }
                }
            }
        `;
        let variables = {
            "input_payment": {
                "customer_id": this.customerID,
                "address": "123 Main Street",
                "auto_unsuspend": false,
                "city": "",
                "echeck_type": "Checking",
                "merchant_option_id": 10,
                "payment_amount": this.paymentAmmount,
                "payment_date": paymentDate,
                "payment_memo": "API test automation payment",
                "payment_method": "Cash",
                "process_payment": true,
                "state": "",
                "zip_code": ""
            }
        }
        this.response = await callGraphQLAPI(this.token, "addPaymentMutation", query, variables);
        this.paymentID = this.response.data.addPayment.payment_id;
        console.log("Payment ID: " + this.paymentID);
    }

    createPayload(){
        this.query = `
            mutation voidPaymentMutation($payment_id: Float!, $amount: Float!) {  
                voidPayment(payment_id: $payment_id, amount: $amount)  
            }
        `;
        console.log('I execute the voidPayment mutation in GraphQL Playground');
        console.log("Payment ID: " + this.paymentID);
    }

    provideVariables(){
        this.variables = {
            "payment_id": this.paymentID,
            "amount": this.paymentAmmount
        };
        console.log('I provide the variables');
        console.log("Variables: " + JSON.stringify(this.variables));
    }

    async executeGraphQlMutation(){
        this.response = await callGraphQLAPI(this.token, "voidPaymentMutation", this.query, this.variables);
        console.log('I include the authorization token in the headers');
    }

    verifyResponse(){
        const voidPayment = this.response.data.voidPayment;
        console.log(voidPayment);
        expect(voidPayment).to.be.a('string');
        expect(voidPayment.includes("Payment voided successfully")).to.be.true;
        console.log('I should receive a successful response confirming the void operation');
    }
}
module.exports = new voidPaymentMutationActions();