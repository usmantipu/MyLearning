const {Given, When, Then} = require("@cucumber/cucumber");
const subMissingAction = require('../support/subscriberMissingChargesActions');
const subPckgInvActions = require('../support/subscriberDetailsPackageInvoiceActions');
const subscriberAddPackageActions = require('../support/subscriberDetailsAddPackageActions');
const Utils = require('../support/utils');
var prorateSettingsArray = [];

Given(/^I have predefined data for Proate setting N$/, function (dataTable) {
	prorateSettingsArray = dataTable.raw();
    //console.log('Loaded Prorate Settings:', prorateSettingsArray);
});

When(/^I go to prorate options of the invoice settings$/, () => {
	subMissingAction.clickBtnProrateOption();
});
When(/^I search a subscriber from search bar having customer ID (.*)$/, (cusID) => {
	subMissingAction.searchSubscriberByID(cusID);
});
When(/^I select protate (.*) option from the available options$/, (termOption) => {
	subMissingAction.clickProrateToFullLink(termOption);
    subMissingAction.selectProrateOption(termOption);
});
When(/^I ensure Invoice day and Term start day are same$/, () => {
	subMissingAction.invoiceDayTermStartDay();
    subMissingAction.saveBillingOptions();
});
When(/^I ensure Invoice day is less than the  Term start day$/, () => {
	subMissingAction.invoiceDayLessThanTerm();
    subMissingAction.saveBillingOptions();
});
When(/^I ensure Invoice day is greater than the Term start day$/, () => {
	subMissingAction.invoiceDayGreaterThanTerm();
    subMissingAction.saveBillingOptions();
});
When(/^I ensure Invoice day and Term start day are Post but same$/, () => {
	subMissingAction.invoiceDayTermStartDayPost();
    subMissingAction.saveBillingOptions();
});
When(/^I ensure Invoice day and Term start day are Post but InvDay less than TSday$/, () => {
	subMissingAction.PostinvoiceDayLessThanTerm();
    subMissingAction.saveBillingOptions();
});
When(/^I ensure Invoice day and Term start day are Post but InvDay greater than TSday$/, () => {
	subMissingAction.PostinvoiceDayGreaterThanTerm();
    subMissingAction.saveBillingOptions();
});
When(/^I ensure (.*) is selected as it required$/, (BillingCycle) => {
	subMissingAction.billingCycle(BillingCycle);
    subMissingAction.saveBillingOptions();
});
When(/^I set values for the MissingCahrges of same date (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingCharges(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I cancel the current opened invoice$/, () => {
	subMissingAction.cancelCurrentInvoice();
});
When(/^I set values for the MissingCahrges of different date (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForDifferentDates(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges before the term start date (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForBeforeTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges after the Invoice Day and before the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForAfterInvDayAndBeforeTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges after the Invoice Day and on the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForAfterInvDayAndOnTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges after the Invoice Day and after the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForAfterInvDayAndAfterTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges on the Invoice Day and after the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForOnInvDayAndAfterTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges on the Invoice Day and on the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForOnInvDayAndOnTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges before the Invoice Day and before the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForBeforeInvAndTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges before the Invoice Day and falls on the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForBeforeInvAndFallOnTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I set values for the MissingCahrges before the Invoice Day and after the Term Start Day (.*), (.*), (.*), (.*), (.*), (.*)$/, function(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount) {
    subMissingAction.calculateMissingChargesForBeforeInvAndAftertheTSdate(IvsDayVsTSDay,BSDateVsInvDay,BSDateVsTSDay,BillingCycle,MonthsInterval,FullTermCount);
});
When(/^I click on the term end date$/, () => {
	subMissingAction.clickTermEndDate();
    Utils.clearLocalStorage()
});
When(/^I check the Day of the Invoice either its endOFMonth$/, () => {
	subMissingAction.verifyEndOfMonth();
});

Then(/^I verify the (.*) as FULLTERM COUNT$/, function(FullTermCount) {
    subMissingAction.verifyFullTermCount(FullTermCount);
    Utils.clearLocalStorage()
});
