const {Given, When, Then} = require("@cucumber/cucumber");
const serviceDeskActions = require('../support/serviceDeskActions');
const subscriberlistActions = require('../support/subscriberlistActions');
const invoivepackageitems = require('../support/InvoicingPackageItemsActions');
const Utils = require('../support/utils');

  When(/^I assure Billing cycle is Monthly$/, function() {
	  invoivepackageitems.assureBillingCycle();
  });
  When(/^I open tax dropdown$/, function() {
	  invoivepackageitems.openTaxDropDown();
  });
  When(/^I save the invoice$/, function() {
	  invoivepackageitems.saveTheInvoice();
  });
  When(/^I click cancel button$/, function() {
	  invoivepackageitems.clickInvoiceCancel();
  });
    
  Then(/^I can see that all items are added to the invoice preview$/, function(packagename){
	  invoivepackageitems.verifyOtherItemsAddedInPreview(packagename);
	  Utils.clearLocalStorage();
  });

  Then(/^I should see that Add button only has the (.*) option enabled$/, function(buttonName){
	  invoivepackageitems.verifyAddToInvoiceButtonGetEnabled(buttonName);
	  Utils.clearLocalStorage();
  });

  Then(/^I should see accurate description column data for added item$/, function(){
	  invoivepackageitems.verifyItemsInDescription();
	  Utils.clearLocalStorage();
  });

  Then(/^I should see accurate quantity in qty column of invoice preview for added item$/, function(){
	  invoivepackageitems.verifyItemsQuantity();
	  Utils.clearLocalStorage();
  });
  Then(/^I should see accurate amount in rate column for added item$/, function(){
	  invoivepackageitems.verifyItemsRate();
	  Utils.clearLocalStorage();
  });
  Then(/^I tax calculation should be correct as per tax rate$/, function(){
	  invoivepackageitems.verifyTaxRate();
	  Utils.clearLocalStorage();
  });
  Then(/^I should see accurate amount in invoice preview for added item$/, function(){
	  invoivepackageitems.verifyAmount();
	  Utils.clearLocalStorage();
  });
  Then(/^I should see accurate recurring settings in invoice preview for added item$/, function(){
	  invoivepackageitems.verifyRecurringSettings();
	  Utils.clearLocalStorage();
  });
  Then(/^I should see (.*) button in add Invoice item preview$/, function(buttonName){
	  invoivepackageitems.verifySaveAndConfigureInvoiceButton(buttonName);
	  Utils.clearLocalStorage();
  });
  Then(/^I should see (.*) button in add Invoice Item Preview panel$/, function(buttonName){
	  invoivepackageitems.verifySaveInvoiceButton(buttonName);
	  Utils.clearLocalStorage();
  });
  Then(/^I can remove items by clicking Remove button from the menu in invoice preview$/, function(){
	  invoivepackageitems.removeItemFromPreview();
	  Utils.clearLocalStorage();
  });
  Then(/^I should see (.*) text on invoice item preview$/, function(text){
	  invoivepackageitems.verifyItemPackageRate(text);
	  Utils.clearLocalStorage();
  });
  Then(/^All items are saved and displayed correctly on invoice preview$/, function(packagename){
	  invoivepackageitems.verifyItemsSaved(packagename);
	  Utils.clearLocalStorage();
  });
  Then(/^All items are cleared from the invoice item preview$/, function(packagename){
	  invoivepackageitems.verifyAllItemsCleared(packagename);
	  Utils.clearLocalStorage();
  });
  

