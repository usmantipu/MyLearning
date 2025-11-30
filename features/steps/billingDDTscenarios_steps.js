const {Given, When, Then} = require("@cucumber/cucumber");
let database = require('../support/databaseAccess.js');
const Utils = require('../support/utils');

Given(/^I have test data available in the database$/, function(){
    console.log('The DDT tests have begin...');
});

When(/^I provide input parameters to test the invoice$/, function(){
    console.log('The DDT procedure has been called...');
});

Then(/^The invoice should be correctly calculated based on (.*), (.*), (.*), (.*), (.*), (.*)$/, function(ispID, customerID, packageID, itemCode, itemQty, isProrate){
    
    let param = [ispID, customerID, packageID, itemCode, itemQty, isProrate];

    database.verifySubscriberInvoicePerPackage(param);
});