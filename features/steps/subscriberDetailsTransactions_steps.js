const {Given, When, Then} = require("@cucumber/cucumber");
const SubTransactionsActions = require('../support/subscriberDetailsTransactionsActions');
const subscriberPaymentsActions = require('../support/subscriberDetailsPaymentsActions');
const Utils = require('../support/utils');

When(/^I go to transactions section$/, function() {
    SubTransactionsActions.clickOnTransactionsTab();
});

When(/^I note Date, Description, Memo, Status, Type, Amount and Balance columns$/, function() {
    SubTransactionsActions.keepSelectedSubTranData();
});

When(/^I post a payment$/, function() {
    SubTransactionsActions.postPayment();
});

When(/^I keep the posted pyament Amount value$/, function() {
    SubTransactionsActions.keepPostPaymentAmount();
});

When(/^I take note of data in transactions for newly added item$/, function() {
    SubTransactionsActions.keepDataOfNewlyAddedItem();
});

When(/^I click on Sync Term with this invoice$/, function() {
    SubTransactionsActions.syncTermWithinvoice();
});

When(/^I click on Add to quote$/, function() {
    SubTransactionsActions.ClickOnAddToQuote();
});

When(/^I open (.*) details from Transactions$/, function(param) {
    SubTransactionsActions.openFirstTransaction(param);
});

When(/^I open details of newly created Invoice$/, function() {
    SubTransactionsActions.openCreatedInvoice();
});

When(/^I try to view the statement PDF$/, function() {
    SubTransactionsActions.openViewStatement();
});

When(/^I click on Send email button$/, function() {
    SubTransactionsActions.clickOnSendEmail();
});



Then(/^I should see transactions panel$/, function() {
    SubTransactionsActions.verifyTransactionsTabDisplayed();
    Utils.clearLocalStorage()
});

Then(/^I can see Date, Description, Memo, Status, Type, Amount and Balance columns along with data$/, function(columnsToVerify) {
    SubTransactionsActions.verifyTransactionFieldsWithData(columnsToVerify,'OPEN','invoice');
    Utils.clearLocalStorage()
});

Then(/^I see that data is changed per subscriber in Date, Description, Memo, Status, Type, Amount and Balance columns$/, function() {
    SubTransactionsActions.verifyInvoiceNumberChanged('OPEN','invoice');
    Utils.clearLocalStorage()
});

Then(/^I should see accurate data for all columns in the Transaction table$/, function(action) {
    SubTransactionsActions.verifyRecentDataInTransactions(action);
    Utils.clearLocalStorage()
});

Then(/^I should a negative sign in Transaction table posted Payment and Credit Memo$/, function(action) {
    SubTransactionsActions.verifyPostedPaymentAndCredit(action);
    Utils.clearLocalStorage()
});

Then(/^the invoice should be shown in package and invoice section$/, function() {
    SubTransactionsActions.verifySelectedInvocieData();
    Utils.clearLocalStorage()
});

Then(/^I should see updated and accurate data for all columns in the Transaction table$/, function(type) {
    subscriberPaymentsActions.closeRightDrawer();
    subscriberPaymentsActions.openAnySubscriber();
    SubTransactionsActions.clickOnTransactionsTab();
    SubTransactionsActions.verifyAccurateAndUpdatedDataInTransactions(type);
    Utils.clearLocalStorage()
});

Then(/^the quote should be shown in package and invoice section$/, function() {
    SubTransactionsActions.verifySelectedQuoteData();
    Utils.clearLocalStorage()
});

Then(/^the payment details should be shown$/, function() {
    SubTransactionsActions.verifyPaymentDetails();
    Utils.clearLocalStorage()
});

Then(/^the credit memo details should be shown$/, function() {
    SubTransactionsActions.verifyCreditMemoDetails();
    Utils.clearLocalStorage()
});

Then(/^a preview window should open$/, function() {
    SubTransactionsActions.verifyPreviewDialogDisplayed();
    Utils.clearLocalStorage()
});

Then(/^Email dock should open$/, function() {
    SubTransactionsActions.verifyEmailOpenedInDock('jcabangon@visp.net');
    Utils.clearLocalStorage()
});