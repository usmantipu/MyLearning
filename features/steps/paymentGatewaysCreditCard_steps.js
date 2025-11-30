const {Given, When, Then} = require("@cucumber/cucumber");
const paymentCardAction = require('../support/paymentGatewaysCreditCardActions');
const subscriberPaymentsActions = require('../support/subscriberDetailsPaymentsActions');
const Utils = require('../support/utils');

	When(/^I ensure that payment gateway for credit card is configured$/, function(paymentGateways){
		paymentCardAction.openPaymentGateways();
		var allgateways = paymentGateways.raw();
		for(var i=0; i<allgateways.length; i++){
			paymentCardAction.isPaymentGatewayConfiguredAsDefault(allgateways[i][0]);			
		}
		paymentCardAction.closeTopMenu();
	});
	When(/^I make a subscriber payment via credit card that has Propay as default payment gateway$/, function(cardDetails){
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has Elavon as default payment gateway$/, function(cardDetails){
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has Oriental bank as default payment gateway$/, function(cardDetails){
		paymentCardAction.clearExistingCreditCard();
		console.log('removed existing card');
		subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
		console.log('options expanded');
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		console.log('card get selected');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
		console.log('ensured gateway');
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has Payment express as default payment gateway$/, function(cardDetails){
		paymentCardAction.clearExistingCreditCard();
		console.log('removed existing card');
		subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
		console.log('options expanded');
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		console.log('card get selected');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
		console.log('ensured gateway');
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has IPpay as default payment gateway$/, function(cardDetails){
		paymentCardAction.clearExistingCreditCard();
		console.log('removed existing card');
		subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
		console.log('options expanded');
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		console.log('card get selected');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
		console.log('ensured gateway');
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has Paydup as default payment gateway$/, function(cardDetails){
		paymentCardAction.clearExistingCreditCard();
		subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
    	paymentCardAction.addCreditCard(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has Autorize.net as default payment gateway$/, function(cardDetails){
		paymentCardAction.clearExistingCreditCard();
		console.log('removed existing card');
		subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
		console.log('options expanded');
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		console.log('card get selected');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
		console.log('ensured gateway');
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has PlugnPlay as default payment gateway$/, function(cardDetails){
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I make a subscriber payment via credit card that has Stripe as default payment gateway$/, function(cardDetails){
		paymentCardAction.clearExistingCreditCard();
		//subscriberPaymentsActions.savePaymentOptionDetails();
		console.log('removed existing card');
		subscriberPaymentsActions.expandPaymentMehodsFromPaymentOptions();
		console.log('options expanded');
		subscriberPaymentsActions.selectOptionFromPaymentOptionsTab('Credit Card');
		console.log('card get selected');
		paymentCardAction.ensureSelectedOptionAsPaymentGateway();
		console.log('ensured gateway');
    	subscriberPaymentsActions.creditCardDetailsFromPaymentGateway(cardDetails);
	});
	When(/^I go to post payment and enter amount$/, function(){
		subscriberPaymentsActions.goToPostPaymentCreditMemoTab();
		var random = Math.floor(Math.random() * 10) + 1;
		paymentCardAction.setMessagesAmount(random);
    	subscriberPaymentsActions.providePaymentAmount(random);
		subscriberPaymentsActions.processCreditCardPaymentNow();
	});


	Then(/^The payment options should be saved successfully$/, function(){
		paymentCardAction.verifypaymentOptionsSavedSuccessfully();
		Utils.clearLocalStorage()
	});
	Then(/^The payment should fail with AVS error$/, function(){
		paymentCardAction.verifypaymentSavedFailMessage();
		Utils.clearLocalStorage()
	});
	Then(/^The payment for payment express should fail with AVS error$/, function(){
		paymentCardAction.verifypaymentSavedFailMessageForExpress();
		Utils.clearLocalStorage()
	});
	Then(/^The payment transaction should fail with AVS error$/, function(){
		paymentCardAction.verifypaymentSavedFailMessageForTransaction();
		Utils.clearLocalStorage()
	});
	Then(/^The payment transaction for STRIPE should fail with AVS error$/, function(){
		paymentCardAction.verifypaymentFailTransactionForStripe();
		Utils.clearLocalStorage()
	});
	Then(/^The payment transaction should be successful$/, function(){
		paymentCardAction.verifypaymentAdded();
		Utils.clearLocalStorage()
	});
	Then(/^The IPPAY payment transaction should fail with AVS error$/, function(){
		paymentCardAction.verifypaymentFailMessageForIPPAYTransaction();
		Utils.clearLocalStorage()
	});
	Then(/^The payment from PlugnPay should fail$/, function(){
		paymentCardAction.verifyPaymentFailedFromPlugNPay();
		Utils.clearLocalStorage()
	});
	Then(/^The payment from Propay transaction should fail$/, function(){
		paymentCardAction.verifyPaymentFailedFromProPay();
		Utils.clearLocalStorage()
	});

	