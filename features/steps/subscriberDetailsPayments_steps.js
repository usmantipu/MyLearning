const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberPaymentsActions = require('../support/subscriberDetailsPaymentsActions');
const Utils = require('../support/utils');

When(/^I go to Payments tab$/, function() {
    subscriberPaymentsActions.clickOnPaymentsTab();
});

When(/^I check "Display Marketing Source and Source Details" option$/, function() {
    subscriberPaymentsActions.checkSourceAndSourceDetails();
});

When(/^I go to Payments settings$/, function() {
    subscriberPaymentsActions.gotoPaymentsSettings();
    subscriberPaymentsActions.clickPaymentOptionsSettings();
});

When(/^I ensure that payment option (.*) is enabled in payment setting$/, function(option) {
    subscriberPaymentsActions.enableAcceptPaymentOption(option);
    subscriberPaymentsActions.clickSaveAndClosePaymentSettings();
});

When(/^I Check all payment options are definied$/, function() {
    subscriberPaymentsActions.gotoPaymentsSettings();
    subscriberPaymentsActions.clickPaymentOptionsSettings();
    var paymentOptions = ["Visa", "MasterCard", "AmEx","MasterCard","Discover","Token","PayPal","eCheck"];
    for (var i = 0; i < paymentOptions.length; i++) {
        subscriberPaymentsActions.enableAcceptPaymentOption(paymentOptions[i]);
    }
    subscriberPaymentsActions.clickSaveAndClosePaymentSettings();
});

When(/^I open payment options tab under Payments$/, function() {
    subscriberPaymentsActions.clickonPaymentOptions();
});

When(/^I expand payment methods from payment options$/, function() {
    subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
});

When(/^I expand payment methods from Postpayment and CreditMemo$/, function() {
    subscriberPaymentsActions.expandPaymentMehodsFromPostPayments();
});

When(/^I fill out the payment details with payment amount as zero$/, function() {
    subscriberPaymentsActions.providePaymentAmount('0');
});

When(/^I open specific subscriber details$/, function() {
   // subscriberPaymentsActions.closeRightDrawer();
    //subscriberPaymentsActions.selectSuspendedSubscriberList("Paid up");
    // subscriberPaymentsActions.openPaidUpList();
    subscriberPaymentsActions.openAllSubscribersList();
    subscriberPaymentsActions.openAnySubscriber();
});

When(/^I fill out the payment details using eCheck as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('eCheck');
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.provideEcheckDetails();
});

When(/^I fill out the payment details using Money Order as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Money Order');
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.providePaymentreference();
});

When(/^I fill out the payment details using Other as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Other');
    subscriberPaymentsActions.providePaymentAmount('5');
});

When(/^I fill out the payment details using PayPal as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('PayPal');
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.providePaypalTransactionID();
});

When(/^I fill out the payment details using Check as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Check');
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.provideCheckNo();
});

When(/^I fill out the payment details using Cash as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Cash');
    subscriberPaymentsActions.providePaymentAmount('5');
});
When(/^I fill out the payment details using cash for suspended subscriber$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Cash');
    subscriberPaymentsActions.providePaymentAmount('5');
});

When(/^I fill out the payment details using Credit Card as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('Credit Card');
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.provideCreditCardDetails();
});

When(/^I post the payment$/, function() {
    subscriberPaymentsActions.postPayment();
});

When(/^I open subscriber details from suspended list$/, function() {
    subscriberPaymentsActions.closeRightDrawer();
    subscriberPaymentsActions.openSuspendedList();
    subscriberPaymentsActions.suspendASubscriberIfAlreadyNot();
    subscriberPaymentsActions.selectSuspendedSubscriberList("Suspended");
});

When(/^I open subscriber details from Due list$/, function() {
    subscriberPaymentsActions.closeRightDrawer();
    subscriberPaymentsActions.selectSuspendedSubscriberList("Due");
    subscriberPaymentsActions.openSubscriberFromPaidUPListIfItsNotPresentInDue('0');
    subscriberPaymentsActions.openAnySubscriber();
    subscriberPaymentsActions.clickOnPaymentsTab();
    subscriberPaymentsActions.addDataToDistributionTableIfNotPresent();
});

When(/^I observe the amount in total payment column of distribution table$/, function() {
    subscriberPaymentsActions.getAmountFromDTForLessAmount();
    //console.log('I observe the amount in total payment column of distribution table');
});

When(/^I update the total payment amount to a lesser amount$/, function() {
    subscriberPaymentsActions.addPaymentLessThanTotalPayment();
});

When(/^I define another subscriber with Due status if its not present$/, function() {
    subscriberPaymentsActions.closeRightDrawer();
    subscriberPaymentsActions.selectSuspendedSubscriberList("Due");
    subscriberPaymentsActions.openSubscriberFromPaidUPListIfItsNotPresentInDue('1');
    subscriberPaymentsActions.openDueSecondSubscriber();
    subscriberPaymentsActions.clickOnPaymentsTab();
    subscriberPaymentsActions.addDataToDistributionTableIfNotPresent();
    subscriberPaymentsActions.getTotalPaymentAmount();//get payment info
    subscriberPaymentsActions.keepOpenedSubscriberDetails();
    //subscriberPaymentsActions.closeRightDrawer();
});

When(/^I fill out eCheck details$/, function(echeckdata) {
    subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('eCheck');
    subscriberPaymentsActions.eCheckDetailsFromPaymentOptions(echeckdata);
});

When(/^I save the Payment Option Details$/, function() {
    subscriberPaymentsActions.savePaymentOptionDetails();
});

When(/^I fill out the Credit Card details$/, function(creditcardinfo) {
    subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
    subscriberPaymentsActions.creditCardDetailsFromPaymentOptions(creditcardinfo);
});

When(/^I fill out the payment details using EFT as payment option$/, function() {
    subscriberPaymentsActions.selectOptionFromPostPaymentTab('EFT');
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.provideEFTPaymentDetails();
});

When(/^I select Credit memo$/, function() {
    subscriberPaymentsActions.selectCreditMemo();
});

When(/^I fill out the Credit memo details$/, function() {
    subscriberPaymentsActions.providePaymentAmount('5');
    subscriberPaymentsActions.providedMemoDescription();
});

When(/^I credit the payment$/, function() {
    subscriberPaymentsActions.clickCreditPayment();
});

Then(/^I should see the Payment section$/, function() {
    subscriberPaymentsActions.verifyPayementSectionDisplayed();
    Utils.clearLocalStorage()
});

Then(/^I should see Recieve payment and credit memo options$/, function() {
    subscriberPaymentsActions.verifyPostPaymentAndCreditMemoDisplayed();
    Utils.clearLocalStorage()
});

Then(/^I should see Check, Cash, Money Order, Credit Card, eCheck, Other and PayPal options$/, function() {
    subscriberPaymentsActions.verifyPaymentOptions();
    Utils.clearLocalStorage()
});

Then(/^I can view EFT as payment option$/, function() {
    subscriberPaymentsActions.verifyEFTPaymentOptions();
    Utils.clearLocalStorage()
});

Then(/^I am restricted from posting the payment$/, function() {
    subscriberPaymentsActions.verifyPostPaymentDisabled();
    Utils.clearLocalStorage()
});

Then(/^The payment should be posted successfully$/, function() {
    subscriberPaymentsActions.verifyPaymentPostedSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^Payment should be credited for Other payment method$/, function() {
    subscriberPaymentsActions.verifyOtherPaymentSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^The credit card payment should be posted successfully$/, function() {
    subscriberPaymentsActions.verifyCreditCardPaymentPostedSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^The payment should be posted using payment option as Money Order$/, function() {
    subscriberPaymentsActions.verifyPaymentPostedByMoneyOrder();
    Utils.clearLocalStorage()
});

Then(/^I should see "Automatically unsuspend" checkbox$/, function() {
    subscriberPaymentsActions.verifyAutoSuspendedOptionPresent();
    Utils.clearLocalStorage()
});

Then(/^The subscriber should be unsuspended$/, function() {
    subscriberPaymentsActions.verifySubscribergetUnsuspended();
    Utils.clearLocalStorage()
});

Then(/^"Amount Paid for selected invoices" amount should correctly updated$/, function() {
    subscriberPaymentsActions.verifyAmountPaidForSelectedInvoices();
    Utils.clearLocalStorage()
});

Then(/^"Unapplied payment amount" amount should also correctly update$/, function() {
    subscriberPaymentsActions.verifyUnAppliedPaymentAmount();
    Utils.clearLocalStorage()
});

Then(/^I can see the subscriber details for Receive payment and distribution data automatically updated$/, function() {
    subscriberPaymentsActions.verifySubscribersDetailsSwitched();
    Utils.clearLocalStorage()
});

Then(/^eCheck information should be saved$/, function() {
    subscriberPaymentsActions.verifyEcheckPaymentOptionSavedSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^Credit Card information should be saved$/, function() {
    subscriberPaymentsActions.verifycreditCardPaymentOptionSavedSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^Payment should be credited$/, function() {
    subscriberPaymentsActions.verifyPaymentCreditSuccessfully();
    Utils.clearLocalStorage()
});
