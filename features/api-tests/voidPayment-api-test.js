const axios = require('axios');
const { expect } = require('chai');
const { callGraphQLAPI } = require('../utils/apiHelper'); // Adjust the path based on your project structure
const sharedData = require('./sharedData');
/*
This is a Mocha demonstration. If you want to use API with Cucumber then only Axios will be needed and Mocha will be skipped altogether.
This is a standalone test file and doesn't have any link to any other class of file in the framework except wdio.conf.mocha.js
*/
const baseURL = sharedData.baseURL; 


describe('GraphQL API Test - voidPaymentMutation', function () {
    this.timeout(10000);  // Set timeout to 10 seconds (10,000 ms)

    it('should return voided status of the payment', async function () {
        // Define the GraphQL request payload
        const requestBody = {
            operationName: "voidPaymentMutation",
            variables: {
                "payment_id": sharedData.paymentId,  
                 "amount": sharedData.paymentAmt  
            },
            query: 'mutation voidPaymentMutation($payment_id: Float!, $amount: Float!) { voidPayment(payment_id: $payment_id, amount: $amount) }'
        };
        

        // Define headers with token for authentication
        const headers = {
            'Authorization': sharedData.authtoken,
            'Content-Type': 'application/json',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'origin': 'https://staging.visp.net',
            'referer': 'https://staging.visp.net/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'visp-agent': 'ubo-web',
        };
            // Send the request to the GraphQL endpoint
            const response = await axios.post(baseURL, requestBody, { headers });
            
            // Log the response data for debugging
            console.log('Response Data:', JSON.stringify(response.data, null, 2));

            // Verify that the response contains expected fields
            expect(response.data.data.voidPayment).to.include('Payment voided');
            console.log('Payment voided:', response.data.data.voidPayment);


    });
});