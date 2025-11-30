const { stat } = require('@babel/core/lib/gensync-utils/fs');
const axios = require('axios');
const { expect } = require('chai');
const sharedData = require('./sharedData');
/*
This is a Mocha demonstration. If you want to use API with Cucumber then only Axios will be needed and Mocha will be skipped altogether.
This is a standalone test file and doesn't have any link to any other class of file in the framework except wdio.conf.mocha.js
*/
const baseURL = sharedData.authURL;
 

let origin = 'https://staging.visp.net'; //for app.visp.net, use https://app.visp.net/
let referer = 'https://staging.visp.net/'; //for app.visp.net, use https://app.visp.net/

/*
let origin = 'https://app.visp.net/'; //for app.visp.net, use https://app.visp.net/
let referer = 'https://app.visp.net/'; //for app.visp.net, use https://app.visp.net/
*/


describe('GraphQL API Test - authentication', function () {
    this.timeout(10000);  // Set timeout to 10 seconds (10,000 ms)

    it('should return authorization token', async function () {
        
        // Define the GraphQL request payload
        const requestBody = {
            "g6_link": "prelive",
            "password": "Test@1234",
            "username": "jcabangonautomation"};
        

        // Define headers with Bearer token for authentication
        const headers = {
         
            'method': 'POST',
            'path': '/authenticate',
            'scheme': 'https',
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'Content-Type': 'application/json',
            'accept-language': 'en-US,en;q=0.9',
            'origin': `${origin}`,
            'priority': 'u=1, i',
            'referer': `${referer}`,
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'sec-ch-ua': '"Google Chrome";v="134", "Not=A?Brand";v="24", "Chromium";v="134"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
            'visp-agent': 'ubo-web',
        };
        
            // Send the request to the GraphQL endpoint
            const response = await axios.post(baseURL, requestBody, { headers });
            
            // Log the response data for debugging
            //console.log('Response Data:', JSON.stringify(response.data, null, 2));

            // Verify that the response contains expected fields
            const authorization = response.data;
            expect(authorization.token).to.exist;
            //console.log('Authorization token:', authorization.token);
            sharedData.authtoken = authorization.token;

    });
});