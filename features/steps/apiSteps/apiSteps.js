const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { callGraphQLAPI } = require('../../utils/apiHelper'); // Adjust the path based on your project structure

let response;
let token = 'your_token'; // You can pass this dynamically if needed

Given('the user has valid authorization token', function () {
    // You can set up token dynamically if required
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRlOTA3ZTg5LTM5YmUtNDI2Mi05NjhmLWExZTU0NjcwODk0ZiIsImVudmlyb25tZW50IjoicHJvZCIsImFwcHVzZXJSb2xlIjoiTk9OU1lTVEVNIiwiaXNwSWQiOls4NzddLCJsb2dnZWRJbkFzIjoic2hhbWkiLCJhcHB1c2VySWQiOjE2MTAwLCJ2ZXJpZmllZEVtYWlsIjpudWxsLCJtZmFFbmFibGVkIjpmYWxzZSwiaXNwSWRzIjpbODc3LDIwMTJdLCJyZWZyZXNoVG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKamJHbGxiblJKWkNJNkltUmxPVEEzWlRnNUxUTTVZbVV0TkRJMk1pMDVOamhtTFdFeFpUVTBOamN3T0RrMFppSXNJbVZ1ZG1seWIyNXRaVzUwSWpvaWNISnZaQ0lzSW1Gd2NIVnpaWEpTYjJ4bElqb2lUazlPVTFsVFZFVk5JaXdpYVhOd1NXUWlPbHM0TnpkZExDSnNiMmRuWldSSmJrRnpJam9pYzJoaGJXa2lMQ0poY0hCMWMyVnlTV1FpT2pFMk1UQXdMQ0oyWlhKcFptbGxaRVZ0WVdsc0lqcHVkV3hzTENKdFptRkZibUZpYkdWa0lqcG1ZV3h6WlN3aWFYTndTV1J6SWpwYk9EYzNMREl3TVRKZExDSnBZWFFpT2pFM01qa3lOVEF4TXpjc0ltVjRjQ0k2TVRjek1UZzBNakV6Tnl3aWFuUnBJam9pWkdJME1EVXlNall0TmpNd01TMDBaV1JqTFdFME1URXRZak0yTWpVek5qQTROelJpSW4wLmo2cEd5NXE3VmJWbW5feDZERTJJNzRjU3NqT25ZS0Q4Z1B2eWw2N2xPNEEiLCJjdXN0b21HNiI6InByZWxpdmUiLCJpYXQiOjE3MjkyNTAxMzcsImV4cCI6MTczMTg0MjEzNywianRpIjoiNDQwZDkwN2YtMjZlZC00ZThjLTgyODktODdjZjhkYzkxZWYzIn0.PIBy-zZJgOJGZZBZI4q-m-K2x0EObaWcK6FWGHtIY2o';
});

When('the user requests the preview line item', async function () {
    const query = 'query previewLineItem($item_id: Int!, $customer_id: Int!, $bill_start_date: Date, $terms: Int, $term_end_date: Date, $id: Int, $type: StatementTypeEnum, $package_instance_number: Int, $service_configuration_instance_id: Int, $flag_credit_memo: Boolean) {\n  previewLineItem(item_id: $item_id, customer_id: $customer_id, bill_start_date: $bill_start_date, terms: $terms, term_end_date: $term_end_date, id: $id, type: $type, package_instance_number: $package_instance_number, service_configuration_instance_id: $service_configuration_instance_id, flag_credit_memo: $flag_credit_memo) {\n    item_name\n    description\n    item_desc\n    start_term(format: "YYYY-MM-DD")\n    end_term(format: "YYYY-MM-DD")\n    flag_recurring\n    type\n    item_quantity\n    item_rate\n    flag_price_customizable\n    flag_bill_separately\n    tax_id\n    tax_type\n    tax_rate\n    taxable_amount\n    nontaxable\n    tax_charge\n    is_tax_exempt\n    item_total\n    item_id\n    package_id\n    item_type\n    flag_auto_suspend\n    auto_suspend_id\n    flag_reverse_if_package_suspended\n    flag_package_item\n    flag_separate\n    flag_preview\n    parent_id\n    parent_number\n    price_option\n    package_instance_number\n    entity_id\n    isProrate\n    percent_based_items {\n      base_id\n      item_id\n      code\n      type\n      rate\n      __typename\n    }\n    percent_rate\n    temp_id\n    item {\n      id\n      flag_allow_multiple_instance\n      item_type {\n        type_name\n        __typename\n      }\n      item_prices {\n        item_price_bases {\n          id\n          item_id\n          rate\n          code\n          cycle\n          type_name\n          flag_lock_base_item\n          __typename\n        }\n        __typename\n      }\n      automation {\n        id\n        __typename\n      }\n      __typename\n    }\n    avalara_tax {\n      avalara_transaction_type_id\n      avalara_service_type_id\n      avalara_discount\n      avalara_tax_inclusion\n      __typename\n    }\n    paid_by_another {\n      flag_enabled\n      customer_id\n      customer_detail {\n        customer_id\n        username\n        first_name\n        last_name\n        customer_details {\n          main_company\n          flag_email_parent_skip_child_on_invoice_generation\n          flag_add_item_to_new_invoice\n          __typename\n        }\n        __typename\n      }\n      is_full_amount\n      is_flat_rate\n      item_description\n      item_rate\n      flag_auto_suspend\n      is_parent\n      is_new_invoice\n      flag_enabled_charge\n      flag_email_parent_skip_child_on_invoice_generation\n      __typename\n    }\n    __typename\n  }\n}\n';

    const variables = {
        terms: 1,
        bill_start_date: "2024-09-28",
        term_end_date: "2024-10-31",
        isModified: false,
        initial_term_end_date: "2024-10-31",
        customer_id: 2489680,
        item_id: 66773,
        id: 0,
        type: "INVOICE"
    };

    // Make the API call
    response = await callGraphQLAPI(token, "previewLineItem", query, variables);
});

Then('the preview line item response should have correct item details', function () {
    // Assertions based on the API response
    try {
        // Log the response data for debugging
        console.log('Response Data:', JSON.stringify(response.data, null, 2));
        const previewLineItem = response.data.previewLineItem[0];
        
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
        console.error('Error while validating the item details:', error.message);
        throw error; // Re-throw the error if you want to fail the test
    }
});
