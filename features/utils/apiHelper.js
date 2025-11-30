const axios = require('axios');
const baseURL = 'https://sandbox-gql-mirror.visp.net/graphql'; // Update the URL based on your environment

async function callGraphQLAPI(token, operationName, query, variables) {
    const headers = {
        'Authorization': `${token}`, //  Bearer is not used, so removed 'Bearer'
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
    const requestBody = {
        operationName: operationName,
        query,
        variables
    };

    try {
        const response = await axios.post(baseURL + '/graphql', requestBody, { headers });
        return response.data;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}

module.exports = { callGraphQLAPI };
