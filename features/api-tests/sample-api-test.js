const axios = require('axios');
const { expect } = require('chai');
/*
This is a Mocha demonstration. If you want to use API with Cucumber then only Axios will be needed and Mocha will be skipped altogether.
This is a standalone test file and doesn't have any link to any other class of file in the framework except wdio.conf.mocha.js
*/
const baseURL = 'https://sandbox-gql-mirror.visp.net/graphql'; 
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRlOTA3ZTg5LTM5YmUtNDI2Mi05NjhmLWExZTU0NjcwODk0ZiIsImVudmlyb25tZW50IjoicHJvZCIsImFwcHVzZXJSb2xlIjoiTk9OU1lTVEVNIiwiaXNwSWQiOlsyMjg1XSwibG9nZ2VkSW5BcyI6ImpjYWJhbmdvbmF1dG9tYXRpb24iLCJhcHB1c2VySWQiOjE4OTQ0LCJ2ZXJpZmllZEVtYWlsIjpudWxsLCJtZmFFbmFibGVkIjpmYWxzZSwiaXNwSWRzIjpbMjI4NV0sInJlZnJlc2hUb2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpqYkdsbGJuUkpaQ0k2SW1SbE9UQTNaVGc1TFRNNVltVXROREkyTWkwNU5qaG1MV0V4WlRVME5qY3dPRGswWmlJc0ltVnVkbWx5YjI1dFpXNTBJam9pY0hKdlpDSXNJbUZ3Y0hWelpYSlNiMnhsSWpvaVRrOU9VMWxUVkVWTklpd2lhWE53U1dRaU9sc3lNamcxWFN3aWJHOW5aMlZrU1c1QmN5STZJbXBqWVdKaGJtZHZibUYxZEc5dFlYUnBiMjRpTENKaGNIQjFjMlZ5U1dRaU9qRTRPVFEwTENKMlpYSnBabWxsWkVWdFlXbHNJanB1ZFd4c0xDSnRabUZGYm1GaWJHVmtJanBtWVd4elpTd2lhWE53U1dSeklqcGJNakk0TlYwc0ltbGhkQ0k2TVRjek9UTTJNVEExTlN3aVpYaHdJam94TnpReE9UVXpNRFUxTENKcWRHa2lPaUk1TXpJeFlqQTJNUzB6WlRka0xUUmtObVF0WVRVM01TMWlNRGhqWVRobU1ESXpaREFpZlEuTkNmejFLdXVfWGtTVGh5b05mWW1tNkhWYm9MbkxiRl9fcS1wMW14Mk93QSIsImN1c3RvbUc2IjoicHJlbGl2ZSIsImlhdCI6MTczOTM2MTA1NSwiZXhwIjoxNzQxOTUzMDU1LCJqdGkiOiI0MTQ0NDkxNy0xMTFkLTQwYWEtYTZhZi1jZDg4NmIxMjM4YWYifQ.SrNUzkP0UzexGLrsgf8AsnDXA64a-1FPf1gxqVT8zKk';

describe('GraphQL API Test - previewLineItem', function () {
    this.timeout(10000);  // Set timeout to 10 seconds (10,000 ms)

    it('should return correct item details for a given customer and item', async function () {
        // Define the GraphQL request payload
        const requestBody = {
            operationName: "previewLineItem",
            variables: {
                terms: 1,
                bill_start_date: "2024-09-28",
                term_end_date: "2024-10-31",
                isModified: false,
                initial_term_end_date: "2024-10-31",
                customer_id: 2489680,
                item_id: 66773,
                id: 0,
                type: "INVOICE"
            },
            query: 'query previewLineItem($item_id: Int!, $customer_id: Int!, $bill_start_date: Date, $terms: Int, $term_end_date: Date, $id: Int, $type: StatementTypeEnum, $package_instance_number: Int, $service_configuration_instance_id: Int, $flag_credit_memo: Boolean) {\n  previewLineItem(item_id: $item_id, customer_id: $customer_id, bill_start_date: $bill_start_date, terms: $terms, term_end_date: $term_end_date, id: $id, type: $type, package_instance_number: $package_instance_number, service_configuration_instance_id: $service_configuration_instance_id, flag_credit_memo: $flag_credit_memo) {\n    item_name\n    description\n    item_desc\n    start_term(format: "YYYY-MM-DD")\n    end_term(format: "YYYY-MM-DD")\n    flag_recurring\n    type\n    item_quantity\n    item_rate\n    flag_price_customizable\n    flag_bill_separately\n    tax_id\n    tax_type\n    tax_rate\n    taxable_amount\n    nontaxable\n    tax_charge\n    is_tax_exempt\n    item_total\n    item_id\n    package_id\n    item_type\n    flag_auto_suspend\n    auto_suspend_id\n    flag_reverse_if_package_suspended\n    flag_package_item\n    flag_separate\n    flag_preview\n    parent_id\n    parent_number\n    price_option\n    package_instance_number\n    entity_id\n    isProrate\n    percent_based_items {\n      base_id\n      item_id\n      code\n      type\n      rate\n      __typename\n    }\n    percent_rate\n    temp_id\n    item {\n      id\n      flag_allow_multiple_instance\n      item_type {\n        type_name\n        __typename\n      }\n      item_prices {\n        item_price_bases {\n          id\n          item_id\n          rate\n          code\n          cycle\n          type_name\n          flag_lock_base_item\n          __typename\n        }\n        __typename\n      }\n      automation {\n        id\n        __typename\n      }\n      __typename\n    }\n    avalara_tax {\n      avalara_transaction_type_id\n      avalara_service_type_id\n      avalara_discount\n      avalara_tax_inclusion\n      __typename\n    }\n    paid_by_another {\n      flag_enabled\n      customer_id\n      customer_detail {\n        customer_id\n        username\n        first_name\n        last_name\n        customer_details {\n          main_company\n          flag_email_parent_skip_child_on_invoice_generation\n          flag_add_item_to_new_invoice\n          __typename\n        }\n        __typename\n      }\n      is_full_amount\n      is_flat_rate\n      item_description\n      item_rate\n      flag_auto_suspend\n      is_parent\n      is_new_invoice\n      flag_enabled_charge\n      flag_email_parent_skip_child_on_invoice_generation\n      __typename\n    }\n    __typename\n  }\n}\n'
        };
        

        // Define headers with Bearer token for authentication
        const headers = {
            'Authorization': `${token}`,
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
        try {
            // Send the request to the GraphQL endpoint
            const response = await axios.post(baseURL, requestBody, { headers });
            
            // Log the response data for debugging
            console.log('Response Data:', JSON.stringify(response.data, null, 2));

            // Verify that the response contains expected fields
            const previewLineItem = response.data.data.previewLineItem;
            expect(previewLineItem[0].item_name).to.be.a('string');
            expect(previewLineItem[0].item_name).to.equal('23 Setup Fee');

            expect(previewLineItem[0].start_term).to.be.a('string');
            expect(previewLineItem[0].start_term).to.equal('2024-09-28');

            expect(previewLineItem[0].end_term).to.be.a('string');
            expect(previewLineItem[0].end_term).to.equal('2024-11-12');

            expect(previewLineItem[0].flag_recurring).to.be.a('boolean');
            expect(previewLineItem[0].flag_recurring).to.equal(false);

            expect(previewLineItem[0].type).to.be.a('string');
            expect(previewLineItem[0].type).to.equal('FEE');

            expect(previewLineItem[0].item_rate).to.be.a('number');
            expect(previewLineItem[0].item_rate).to.equal(250);

            expect(previewLineItem[0].item_quantity).to.be.a('number');
            expect(previewLineItem[0].item_quantity).to.equal(1);

            expect(previewLineItem[0].tax_type).to.be.a('string');
            expect(previewLineItem[0].tax_type).to.equal('PERCENT');

            expect(previewLineItem[0].taxable_amount).to.be.a('number');
            expect(previewLineItem[0].taxable_amount).to.equal(250);

            expect(previewLineItem[0].item_total).to.be.a('number');
            expect(previewLineItem[0].item_total).to.equal(250);

            expect(previewLineItem[0].avalara_tax).to.be.null;

            expect(previewLineItem[0].paid_by_another).to.be.null;




        } catch (error) {
            if (error.response) {
                console.error('Error Response:', JSON.stringify(error.response.data, null, 2));
            } else {
                console.error('Error:', error.message);
            }
        }

    });
});