const { stat } = require('@babel/core/lib/gensync-utils/fs');
const axios = require('axios');
const { expect } = require('chai');
const sharedData = require('./sharedData');
/*
This is a Mocha demonstration. If you want to use API with Cucumber then only Axios will be needed and Mocha will be skipped altogether.
This is a standalone test file and doesn't have any link to any other class of file in the framework except wdio.conf.mocha.js
*/
const baseURL = sharedData.baseURL; 
let customerId = 2037263;
let paymentAmount = 20;
sharedData.paymentAmt = paymentAmount;
let paymentDate = new Date().toISOString().split('T')[0];


let origin = 'https://staging.visp.net'; 
let referer = 'https://staging.visp.net/'; 

/*
let origin = 'https://app.visp.net'; //for app.visp.net
let referer = 'https://app.visp.net/'; //for app.visp.net
*/
describe('GraphQL API Test - addPaymentMutation', function () {
    this.timeout(10000);  // Set timeout to 10 seconds (10,000 ms)
    
    it('should return confirmation status of the payment', async function () {
        // Define the GraphQL request payload
        const requestBody = {
            operationName: "addPaymentMutation",
            variables: {
                "input_payment": {
                        "account_number": 'xx2255',
                        "customer_id": customerId,  
                        "address": "123 Main Street",
                        "auto_unsuspend": false,
                        "city": "",
                        "echeck_type": "Checking",
                        "merchant_option_id": 10,
                        "payment_amount": paymentAmount,
                        "payment_date": `${paymentDate}`,
                        "payment_memo": "API test automation payment",
                        "payment_method": "Cash",
                        "process_payment": true,
                        "state": "",
                        "zip_code": ""
                },
                input_credit_memo_items: [] // Provide an empty array or required data
        },
            query: 'mutation addPaymentMutation($input_payment: PaymentsInput!, $input_credit_memo_items: [CreditMemoItemInput]) { addPayment(input_payment: $input_payment, input_credit_memo_items: $input_credit_memo_items) { customer_id payment_id payment_date payment_method customer { status balance paid_through __typename } __typename } }'
        };
        

        // Define headers with Bearer token for authentication
        const headers = {
            //'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRlOTA3ZTg5LTM5YmUtNDI2Mi05NjhmLWExZTU0NjcwODk0ZiIsImVudmlyb25tZW50IjoicHJvZCIsImFwcHVzZXJSb2xlIjoiTk9OU1lTVEVNIiwiaXNwSWQiOlsyMjg1XSwibG9nZ2VkSW5BcyI6ImpjYWJhbmdvbmF1dG9tYXRpb24iLCJhcHB1c2VySWQiOjE4OTQ0LCJ2ZXJpZmllZEVtYWlsIjpudWxsLCJtZmFFbmFibGVkIjpmYWxzZSwiaXNwSWRzIjpbMjI4NV0sInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpqYkdsbGJuUkpaQ0k2SW1SbE9UQTNaVGc1TFRNNVltVXROREkyTWkwNU5qaG1MV0V4WlRVME5qY3dPRGswWmlJc0ltVnVkbWx5YjI1dFpXNTBJam9pY0hKdlpDSXNJbUZ3Y0hWelpYSlNiMnhsSWpvaVRrOU9VMWxUVkVWTklpd2lhWE53U1dRaU9sc3lNamcxWFN3aWJHOW5aMlZrU1c1QmN5STZJbXBqWVdKaGJtZHZibUYxZEc5dFlYUnBiMjRpTENKaGNIQjFjMlZ5U1dRaU9qRTRPVFEwTENKMlpYSnBabWxsWkVWdFlXbHNJanB1ZFd4c0xDSnRabUZGYm1GaWJHVmtJanBtWVd4elpTd2lhWE53U1dSeklqcGJNakk0TlYwc0ltbGhkQ0k2TVRjME16RTFOemc1Tml3aVpYaHdJam94TnpRMU56UTVPRGsyTENKcWRHa2lPaUppWXpWak5tWTJaQzFrTWpjMUxUUmpOamd0WWpVd05DMWtPRFJtWVdWa1lUSTNZVEVpZlEuT01iU21pNzRneWxFNk8yQVY2Y25aNWZwa0NOdTFMbDYxVzVPVHdQSl9BTSIsImN1c3RvbUc2IjoiIiwiaWF0IjoxNzQzMTU3ODk2LCJleHAiOjE3NDU3NDk4OTYsImp0aSI6IjQ0ZDkxMDg2LTFlODAtNDAwNy1hMmZmLWUyOGM5ZDdiNTkwNiJ9.H5gm7Wifu-fvzyAdpoExpaqX3zSpUrU0uNrXN0TuvZg',//sharedData.authtoken, 
            'Authorization': sharedData.authtoken, 
            'Content-Type': 'application/json',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'origin': `${origin}`,
            'referer': `${referer}`,
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
            'visp-agent': 'ubo-web'
        };
            //console.log('Request Body:', JSON.stringify(requestBody, null, 2));
            // Log the headers for debugging
            //console.log('Headers:', JSON.stringify(headers, null, 2));
            // Send the request to the GraphQL endpoint
            const response = await axios.post(baseURL, requestBody, { headers });
            
            // Log the response data for debugging
            console.log('Response Data:', JSON.stringify(response.data, null, 2));

            // Verify that the response contains expected fields
            const paymentInfo = response.data.data.addPayment;
            console.log('Payment ID:', paymentInfo.payment_id);
            sharedData.paymentId = paymentInfo.payment_id;
            expect(paymentInfo.customer_id).to.equal(customerId);
            expect(paymentInfo.payment_id).to.exist;



    });
});