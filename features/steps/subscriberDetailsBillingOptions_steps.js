const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberDetailsBillingAction = require('../support/subscriberDetailsBillingActions');
const Utils = require('../support/utils')

When(/^I click on Billing options tab$/,function(){
    subscriberDetailsBillingAction.clickOnBillingOptions();
});

When(/^I open invoicing settings from top right menu$/,function() {
    subscriberDetailsBillingAction.openInvoiceSettingFromTopRightMenu();
});
When(/^I open Auto Actions settings from top right menu$/,function() {
    subscriberDetailsBillingAction.openAutoActionSettingFromTopRightMenu();
});
When(/^I ensure Grace Period Allow Cutom option is enabled$/,function() {
    subscriberDetailsBillingAction.ensureGraceCutom();
});


When(/^I ensure that invoice defaults has flexible billing option enabled$/, function()  {
	subscriberDetailsBillingAction.flexibleBillingOptionisEnabled();
});
When(/^I ensure that advance by a Month is checked for term start day$/, function()  {
	subscriberDetailsBillingAction.checkAdvanceByAMonth();
});
When(/^I ensure that advance by a Month is Unchecked for term start day$/, function()  {
	subscriberDetailsBillingAction.UncheckAdvanceByAMonth();
});
When(/^I ensure that invoice settings get saved$/, function()  {
	subscriberDetailsBillingAction.SaveInvoiceSettingOptions();
});
When(/^I ensure that invoice defaults has flexible billing option disabled$/,function() {
    subscriberDetailsBillingAction.flexibleBillingOptionisDisabled();

});
When(/^I ensure that invoice flexible billing option disabled for new subscribers$/,function() {
    subscriberDetailsBillingAction.flexibleBillingForNewSubscribers();

});

When(/^I close invoicing setting to go back to billing options tab$/,function(){
    subscriberDetailsBillingAction.closeInvoiceSetting();
});

When(/^I take note of invoice day in invoice settings$/, function() {
	subscriberDetailsBillingAction.getInvoiceDayInInvoiceSetting();
});

When(/^I take note of term start day in invoice settings$/, function () {
   subscriberDetailsBillingAction.getTermStartInInvoiceSetting();

});

//When(/^I update Term Start Day on Billing options tab of subscriber$/,function() {
  //  subscriberDetailsBillingAction.updateTermStartDay();
//});

When(/^I update Term Start Day on Billing options tab of subscriber$/, function() {
    subscriberDetailsBillingAction.setTermStartOnBillingOption();

});

When(/^I save the information$/,function() {
    subscriberDetailsBillingAction.clickOnSaveBtn();
});

When(/^I update the tax$/,function() {
    subscriberDetailsBillingAction.updateTax();
});

When(/^I save the setting$/,function() {
    subscriberDetailsBillingAction.clickOnSaveBtn();
});

When(/^I choose the option from the prompt$/,function(data) {
    subscriberDetailsBillingAction.chooseFromTaxChangeOption(data);
});

When(/^I open another subscriber's details$/,function() {
    subscriberDetailsBillingAction.openAnotherSubscriber();
});

When(/^I open the given subscriber's details$/,function() {
    subscriberDetailsBillingAction.openGivenSubscriber();
});

When(/^I ensure that invoice defaults has flexible billing option enabled in Invoicing settings$/, function() {
    subscriberDetailsBillingAction.flexibleBillingOptionisEnabled();
    subscriberDetailsBillingAction.closeInvoiceSetting();
});

When(/^I select the option in the prompt$/, function(selectOption)  {
    subscriberDetailsBillingAction.selectradioOptionOnAlert(selectOption);

});

When(/^I take note of Tax amounts in an open invoice$/,function() {
    subscriberDetailsBillingAction.addTaxToInvoiceIfNotApplied();
});

When(/^I uncheck Tax Exempt option if its already checked$/,function() {
    subscriberDetailsBillingAction.UnCheckTaxExempt();
});

When(/^I update the Tax Exempt option$/,function() {
    subscriberDetailsBillingAction.clickOnTaxExampt();
});

When(/^I define tax item in invoice Tax settings$/,function(taxParam) {
    subscriberDetailsBillingAction.defineTaxtIfItsEmpty(taxParam);
});

When(/^I take note of active taxes in invoicing settings$/,function() {
    subscriberDetailsBillingAction.takeNoteActiveTaxInInvoiceSetting();
});

When(/^I verify available taxes in Tax dropdown$/,function() {
    subscriberDetailsBillingAction.availableTaxesInBillingOption();
});

When(/^I change the billing Cycle$/,function() {
    subscriberDetailsBillingAction.clickOnBillingCycle();
});

When(/^I ensure that invioce defaults has flexible billing option enabled$/,function() {
    subscriberDetailsBillingAction.flexibleBillingOptionisEnabled();
});

When(/^I take note of transactions count$/,function() {
    subscriberDetailsBillingAction.takeNoteOfTransactionCount();
});

When(/^I update Billing cycle$/,function() {
    subscriberDetailsBillingAction.updateBillingCycle();
    // subscriberDetailsBillingAction.clickOnBillingCycle();
});

When(/^I click on paper invoice link$/,function() {
    subscriberDetailsBillingAction.clickOnPaperInvoiceLink();
});

When(/^I update the paper invoice$/,function() {
    subscriberDetailsBillingAction.updatePaperInvoice();
});

When(/^I update the Late fee option$/,function() {
    subscriberDetailsBillingAction.updateLateFee();
});

When(/^I update the Grace period option$/,function() {
    subscriberDetailsBillingAction.updateGracePeriod();
});

Then(/^I can see Billing options$/,function() {
    subscriberDetailsBillingAction.verifyBillingOptionsAvailable();
});


Then(/^I should NOT be able to update the billing days$/,function(){
    subscriberDetailsBillingAction.billingDaysCalendarNotAvailable();
});


Then(/^I should be able to update the billing days$/, function() {
    subscriberDetailsBillingAction.billingDaysCalendarAvailable();
});


Then(/^I should see Invoice day is same as set in invoicing settings$/, function() {
    subscriberDetailsBillingAction.verifyInvoiceDayInInvoiceSettingWithBillingDay();
});

Then(/^I should see Term Start Day is same as set in invoicing settings$/, function()  {
    subscriberDetailsBillingAction.matchTermStartDayInInvoiceSettingWithBillingTermStartDay();
});

Then(/^I should see a prompt with options$/,function(data) {
    subscriberDetailsBillingAction.verifyPromptOptions(data);
});

Then(/^The tax field should be updated$/,function() {
    subscriberDetailsBillingAction.verifyTaxField();
});

Then(/^The Term Start Day will remain the same$/, function() {
    subscriberDetailsBillingAction.isTermStartDaySame();
});

Then(/^There will be an indicator showing that the change will apply in next invoice$/, function() {
    subscriberDetailsBillingAction.verifyNextInvoiceIndicator();
});

Then(/^The Term Start Day will update$/, function() {
	subscriberDetailsBillingAction.isTermStartDayUpdated();
});

Then(/^A reversal credit memo should add to reverse the charges$/, function() {
	subscriberDetailsBillingAction.verifyReversalCreditMemo();
});

Then(/^Tax setting should be applied to all applicable items in the open invoice$/,function() {
    subscriberDetailsBillingAction.verifyTaxSave();
});

Then(/^The tax will be exempted will be saved$/,function() {
    subscriberDetailsBillingAction.verifyExemptedTaxSave();
});

Then(/^All active taxes should be available$/,function() {
    subscriberDetailsBillingAction.verifyAvailableTaxes();
});

Then(/^The billing cycle will remain the same$/,function() {
    subscriberDetailsBillingAction.verifyBillingCycleRemainsSame();
});

Then(/^There will be an indicator on billing cycle showing that the change will apply in next invoice$/,function() {
    subscriberDetailsBillingAction.verifyBillingCycleIndicator();
});

Then(/^No credit memo will be generated$/,function() {
    subscriberDetailsBillingAction.verifyNoCreditMemoGenerated();
});

Then(/^The billing cycle will be updated$/,function() {
    subscriberDetailsBillingAction.verifyBillingCycleUpdated();
});

Then(/^Paper invoie pop up should open$/,function() {
    subscriberDetailsBillingAction.verifyPopupInvoicePaper();
});

Then(/^Paper invoice should be updated$/,function() {
    subscriberDetailsBillingAction.verifyInvoicePaperUpdated();
});

Then(/^Late fee option should be updated$/,function() {
    subscriberDetailsBillingAction.verifyLateFeeUpdated();
});

Then(/^Grace period option should be updated$/,function() {
    subscriberDetailsBillingAction.verifyGracePeriodUpdated();
});
