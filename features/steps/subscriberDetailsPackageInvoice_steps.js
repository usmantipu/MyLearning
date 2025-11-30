const {Given, When, Then} = require("@cucumber/cucumber");
const subPckgInvActions = require('../support/subscriberDetailsPackageInvoiceActions');
const subscriberPaymentsActions = require('../support/subscriberDetailsPaymentsActions');
const subscriberAddPackageActions = require('../support/subscriberDetailsAddPackageActions');
const Utils = require('../support/utils');

When(/^I get the subscriber Username and Customer ID from subscriber list$/, function() {
    subscriberPaymentsActions.closeRightDrawer();
    subPckgInvActions.keepSubscriberDetails();
    subscriberPaymentsActions.openAnySubscriber();
});

When(/^I check invoicing suspension to inactive packages option$/, function() {
    subPckgInvActions.selectPackageInvoicing();
    subPckgInvActions.checkApplyInvoicingSuspension();
});

When(/^I take note of activated package in current invoice$/, function() {
    subPckgInvActions.clickClosePackageDrawer();
    subscriberAddPackageActions.clickOnPackagesAndInvoices();
    subPckgInvActions.takeNoteActivePackageInCurrentInvoice();
});

When(/^I deactivate the current package$/, function() {
    subPckgInvActions.selectCurrentActivePackage();
    subPckgInvActions.clickClosePackageDrawer();
});

When(/^I select Paid Invoice as option$/, function() {
    subPckgInvActions.selectInvoiceFromTableWithProvidedStatus('Paid');
});

When(/^I click on the Email option in the Invoice panel$/, function() {
    subPckgInvActions.clickEmailButton();
});

When(/^I select Upcoming Invoice as option$/, function() {
    subPckgInvActions.selectUpcomingInvoiceAlreadyNotSelected('Upcoming');
});

When(/^I expand dotted menu of Packages & Invoices$/, function() {
    subPckgInvActions.expandDottedMenu();
});

When(/^I select (.*) from dotted Menu of Packages & Invoices$/, function(invoicetype) {
    subPckgInvActions.expandDottedMenu();
    subPckgInvActions.selectOptionFromDottedMenu(invoicetype);
});

When(/^I close newly added package$/, function() {
    subPckgInvActions.clickClosePackageDrawer();
});

When(/^I click on More option from package and in panel$/, function() {
    subPckgInvActions.clickMoreButton();
});

When(/^I select already added Quote from invoice options$/, function(pacakge) {
    subPckgInvActions.expandDottedMenu();
    subPckgInvActions.selectOptionFromDottedMenu('New Quote');
    subscriberAddPackageActions.clickAddPackage();
    subscriberAddPackageActions.searchPackage(pacakge);
    subPckgInvActions.clickAddToQuote();
    subPckgInvActions.clickSaveAndConfigure();
    subPckgInvActions.clickClosePackageDrawer();
    //subPckgInvActions.selectUpcomingInvoiceAlreadyNotSelected('Quote');
});

When(/^I click on "Convert to Invoice" button$/, function() {
    subPckgInvActions.keepQuoteAmountBeforeInvoice();
    subPckgInvActions.clickConvertToInvoice();
});

When(/^I select Add to a new Invoice in option$/, function() {
    subPckgInvActions.clickAddToANewInvoice();
});

When(/^I select any Invoice other than upcoming and quote$/, function() {
    subPckgInvActions.selectInvoiceFromTableOtherThanUpcomingAndQuote();
});

When(/^I confirm Void this Invoice$/, function() {
    subPckgInvActions.clickYesInvoidInvoice();
});

When(/^I click on Open A New Invoice$/, function() {
    subPckgInvActions.clickOpenANewInvoice();
});

When(/^I select second subscriber from subscriber list$/, function() {
    subPckgInvActions.closeSubscriberRightDrawer();
    subPckgInvActions.openSecondSubscriber();
});

When(/^I take note of Total for this Invoice$/, function() {
    subPckgInvActions.clickClosePackageDrawer();
    //subPckgInvActions.clickClosePackageDrawer();
    subscriberAddPackageActions.clickOnPackagesAndInvoices();
    subPckgInvActions.takeNoteOfInvoiceTotal();
});

///////// TA-65 //////
When(/^I click on Transactions tab$/, function() {
	subPckgInvActions.openTransactionTab();
});

When(/^I click on the available Invoice in Transactions tab$/, function() {
	subPckgInvActions.clickAvailableInvoiceOnTransactionTab('invoice');
});

When(/^I click on the available Quote in Transactions tab$/, function() {
	subPckgInvActions.clickAvailableInvoiceOnTransactionTab('quote');
});

When(/^I take note of activated packages count in current invoice$/, function() {
    //subPckgInvActions.clickClosePackageDrawer();
    //subscriberAddPackageActions.clickOnPackagesAndInvoices();
    subPckgInvActions.takeNoteActivePackageInCurrentInvoice();
});

When(/^I ensures that the associated package is suspended$/, function() {
    //subPckgInvActions.takeNoteActivePackageInCurrentInvoice();
    subPckgInvActions.clickClosePackageDrawer();
    subPckgInvActions.selectFirstPackage();
    subscriberAddPackageActions.clickSuspendButton();
    subPckgInvActions.clickClosePackageDrawer();
});

When(/^I ensures that the ISP is set to stop billing for suspended packages$/, function() {
    subPckgInvActions.selectPackageInvoicing();
    subPckgInvActions.checkDefaultPackageSuspendedInactiveSelected();
});

When(/^I re-select Upcoming Invoice as option if its selected$/, function() {
    subPckgInvActions.selectInvoiceFromTableWithProvidedStatus('Upcoming');
});

When(/^I edit the username field of selected invoice$/, function() {
    subPckgInvActions.selectAndEditInvoiceUsername();
});

When(/^I save the invoice username related changes$/, function() {
    subPckgInvActions.saveUsernameChanges();
});

When(/^I enter the username which is already used by another subscriber in my selected ISP$/, function() {
    subPckgInvActions.selectAndEnterAlreadyTakenUsername();
});

/******  < - TA-148 - >  ******/
When(/^I make an Open invoice for the selected subscriber$/,function() {
    subscriberPaymentsActions.closeRightDrawer();
    subscriberPaymentsActions.selectSuspendedSubscriberList("Due");
    subscriberPaymentsActions.openSubscriberFromPaidUPListIfItsNotPresentInDue('0');
    subscriberPaymentsActions.openAnySubscriber();
});

When(/^I ensure Invoice-open is present for selected subscriber$/,function() {
    subPckgInvActions.selectInvoiceOpenFromTable();
});

When(/^I select Add to the current open invoice in option$/,function() {
    //subPckgInvActions.keepOpenInvoiceAmountBeforeInvoice();
    subPckgInvActions.keepQuoteAmountBeforeInvoice();
    subPckgInvActions.clickAddtothecurrentopeninvoice();
});

When(/^I click on Equipment button$/,function() {
    subPckgInvActions.clickOnAddEquipment();
});
When(/^I select the Equipment$/,function() {
    subPckgInvActions.chooseEquipment();
});
When(/^I click on save button to save Equipment$/,function() {
    subPckgInvActions.clickOnSaveBtn();
});

When(/^I click on other item button$/,function() {
    subPckgInvActions.clickOnOtherItem();
});

When(/^I click on Add New Item$/,function() {
    subPckgInvActions.clickOnAddNewItem();
});

When(/^I enter new item details$/,function() {
    subPckgInvActions.enterNewOtherItemValue();
});

When(/^I choose the item$/,function() {
    subPckgInvActions.chooseOtherItem();
});

When(/^I click add button to add item in selected invoice$/,function() {
    subPckgInvActions.clickOnAddOtherItemBtn();
});

When(/^I take note of billing cycle$/,function() {
    subPckgInvActions.keepValueOfBillingCycle();
});

//#region TA-149 When Part
When(/^I create a new invoice to enter an other type item$/,function() {
    subPckgInvActions.expandDottedMenu();
    subPckgInvActions.selectOptionFromDottedMenu('New Invoice');
    subPckgInvActions.clickOnOtherItem();
    subPckgInvActions.clickOnAddNewItem();
    subPckgInvActions.enterNewOtherItemValue();
    subPckgInvActions.enterOtherItemRate();
});

When(/^I click on Recurring checkbox of other type item$/,function() {
    subPckgInvActions.clickOtherRecurringCheck();
});

When(/^I select (.*) as recurring option$/,function(recurringOption) {
    subPckgInvActions.selectRecurringOption(recurringOption);
});

When(/^I re-open recurring options$/,function() {
    subPckgInvActions.reOpenRecurringOption();
});

When(/^I go to settings to ensure invocing for suspended and inactive packages will continue$/,function() {
    subPckgInvActions.enbleDisableSuspendedAndInactiveOption(true);
});

When(/^I go to settings to ensure invocing for suspended and inactive packages will discontinue$/,function() {
    subPckgInvActions.enbleDisableSuspendedAndInactiveOption(false);
});
When(/^I edit the Description after saving the invoice$/,function() {
    subPckgInvActions.editDescriptionsAfterInvoice();
});
When(/^I configure Tax for newly added other type item$/,function() {
    subPckgInvActions.saveOtherItem();
    subPckgInvActions.configureTaxForOtherItem();
});
When(/^I edit the quantity after saving the invoice$/,function() {
    subPckgInvActions.keepOtherItemDataBeforeQtUpdate();
    subPckgInvActions.editQuantityAndSaveIt();
});
When(/^I click delete invoice button$/,function() {
    subPckgInvActions.expandInvoiceDottedMenu();
});
When(/^I select "Delete only the invoice item" option from the prompt$/,function() {
    subPckgInvActions.selectDeleteOnlyInvoiceItem();
    subPckgInvActions.clickOkOfDeleteInvoiceItem();
});
When(/^I click delete invoice button and select "Delete the invoice item and the package and services" option from the prompt$/,function() {
    subPckgInvActions.expandInvoiceDottedMenu();
    subPckgInvActions.selectDeleteInvoiceAndPackage();
    subPckgInvActions.clickOkOfDeleteInvoiceItem();
});
//#endregion

When(/^I click on Add to the invoice$/,function() {
    subPckgInvActions.clickOnAddToTheInvoice();
});

///////// TA-147 Then //////

Then(/^I should see the accurate Username, Customer ID, Invoice Date, Invoice number, and Due Date field data for selected invoice$/, function() {
    subPckgInvActions.verifyInvoiceDetails();
    Utils.clearLocalStorage()
});

Then(/^I should see selected invoice already attached to selected subscriber in the email draft$/, function() {
    subPckgInvActions.verifySelectedInvoiceAttachedToEmail();
    Utils.clearLocalStorage()
});

Then(/^I should see Delete Invoice option is not present$/, function() {
    subPckgInvActions.verifyDeletInvoiceButtonNotPresent();
    Utils.clearLocalStorage()
});

Then(/^I should see New Invoice panel displayed with empty invoice$/, function() {
    subPckgInvActions.verifyNewInvoiceEmptyPanel();
    Utils.clearLocalStorage()
});

Then(/^I should see New Quote panel displayed with empty quote$/, function() {
    subPckgInvActions.verifyNewQuoteEmptyPanel();
    Utils.clearLocalStorage()
});

Then(/^I should see "Void this Recurring Invoice" option is disabled$/, function() {
    subPckgInvActions.verifyVoidThisInvoiceDisabled();
    Utils.clearLocalStorage()
});

Then(/^I should see Active packages on other invoices option with package and Invoice info$/, function() {
    subPckgInvActions.verifyActivePackagesInMore();
    Utils.clearLocalStorage()
});

Then(/^I should see "Convert to Invoice", "View PDF", and "Email" buttons in the Quote$/, function() {
    subPckgInvActions.verifyQuoteAvailableButtons();
    Utils.clearLocalStorage()
});

Then(/^I should see invoice void successfully$/, function() {
    subPckgInvActions.verifyInvoiceVoidSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^I should invoice voiding in logs$/, function() {
    subPckgInvActions.verifyVoidInvoidInLogs();
    Utils.clearLocalStorage()
});

Then(/^I should see the voided invoice is excluded from the total amount due the Transactions table$/, function() {
    subPckgInvActions.verifyVoidInvoiceBalanceInTransactions();
    Utils.clearLocalStorage()
});

Then(/^I should see amount for quotes are excluded in the Transactions table$/, function() {
    subPckgInvActions.verifyQuoteAmountExcludedInTransaction();
    Utils.clearLocalStorage()
});

Then(/^I should see More button is not present$/, function() {
    subPckgInvActions.verifyMoreButtonIsNotPresent();
    Utils.clearLocalStorage()
});

Then(/^I should Total for this invoice should be updated in invoice Summary$/, function() {
    subPckgInvActions.verifyInvoiceTotalAmountUpdated();
    Utils.clearLocalStorage()
});

Then(/^I should see inactive package should not be list in invoice items except if the package has yet to start billing$/, function() {
    subPckgInvActions.verifyInactivePackageShouldNotList();
    Utils.clearLocalStorage()
});

Then(/^I should see quote items are trasnsitted to new Invoice$/, function() {
    subPckgInvActions.verifyQuoteToInvoice();
    Utils.clearLocalStorage()
});

///////////////// TA-65 assertions ///////////////////////////////////////////////

Then(/^I can see that an upcoming invoice is selected by default in the Statement dropdown$/, function()  {
	subPckgInvActions.verifyUpcomingInvoiceDefaultSelected();
    Utils.clearLocalStorage()
});

Then(/^I can navigate to Packages and Invoices tab of the Subscriber dock$/, function() {
	subPckgInvActions.verifyPackageAndInvoicePageOpened();
    Utils.clearLocalStorage()
});

Then(/^I can see that the correct invoice is displayed in the Invoice panel$/, function() {
	subPckgInvActions.verifyInvoiceDetails();
    Utils.clearLocalStorage()
});

Then(/^I can see that the correct invoice is displayed in the Invoice panel when loaded from Transactions$/, function() {
	subPckgInvActions.verifyInvoiceLoadedFromTransactions();
    Utils.clearLocalStorage()
});

Then(/^I can see that the correct quote is displayed in the quote panel when loaded from Transactions$/, function() {
	subPckgInvActions.verifyQuoteLoadedFromTransactions();
    Utils.clearLocalStorage()
});

Then(/^I can view the accurate Username, Customer ID, Invoice Date, and Due Date field data for the selected subscriber$/, function() {
    subPckgInvActions.verifyUpcomingInvoiceData();
    Utils.clearLocalStorage()
});

Then(/^I can view the Upcoming Invoice as the value for the Invoice number field of the selected upcoming invoice$/, function() {
    subPckgInvActions.verifyUpcomingInvoiceNumber('Upcoming Invoice');
    Utils.clearLocalStorage()
});

Then(/^I can view the accurate Total for this invoice value in the Account Summary section of the selected upcoming invoice$/, function() {
    subPckgInvActions.verifyAccurateTotalForUpcomingInvoice();
    Utils.clearLocalStorage()
});

Then(/^I should not see the PDF and Email buttons$/, function() {
    subPckgInvActions.verifyEmailAndPdfButtons();
    Utils.clearLocalStorage()
});

Then(/^I should not see the recurring package-type invoice items$/, function() {
    subPckgInvActions.verifyInactivePackageShouldNotList();
    Utils.clearLocalStorage()
});

Then(/^I can see that the correct upcoming invoice is displayed in the upcoming Invoice panel$/, function() {
    subPckgInvActions.verifyCorrectUpcomingInvoiceDataDisplayed();
    Utils.clearLocalStorage()
});

Then(/^I can view the Packages & Invoices options$/, function(packageinvoiceoptions) {
    subPckgInvActions.verifyPackageInvoiceOptions(packageinvoiceoptions);
    Utils.clearLocalStorage()
});

Then(/^I see username should be updated$/, function() {
    subPckgInvActions.verifyUpdatedUserName();
    Utils.clearLocalStorage()
});

Then(/^I should not be allowed to save the selected username$/, function() {
    subPckgInvActions.verifyUserNameAlreadyExists();
    Utils.clearLocalStorage()
});

Then(/^I can see that the correct quote is displayed in the quote panel$/, function() {
    subPckgInvActions.verifyCorrectQuoteIsSelected();
    Utils.clearLocalStorage()
});

/*    < --    TA-148    -- >    */
Then(/^I should see quote items are trasnsitted to current Invoice$/,function() {
    subPckgInvActions.verifyQuoteToInvoiceTransition();
    Utils.clearLocalStorage()
});
Then(/^The term start date for package-type item is automatically set to the closest date on the Term start day$/,function() {
    subPckgInvActions.verifyStartDayClosestToTermStartDay();
    Utils.clearLocalStorage()
});
Then(/^I am unable to change the Term start date$/,function() {
    subPckgInvActions.verifyIAmUnableToChangeStartDate();
    Utils.clearLocalStorage()
});
Then(/^I can view that the default term end date is correctly set based on billing cycle settings$/,function() {
    subPckgInvActions.verifyEndDateWithBillingCycle();
    Utils.clearLocalStorage()
});

Then(/^I verify the equipment is added$/,function() {
    subPckgInvActions.verifyEquipmentAdded();
    Utils.clearLocalStorage()
});

Then(/^I verify from invoice item preview panel that the right equipment is added$/,function() {
    subPckgInvActions.verifyAccurateEquipmentAdded();
    Utils.clearLocalStorage()
});

Then(/^Other Item successfully added$/,function() {
    subPckgInvActions.verifyOtherItemAdded();
    Utils.clearLocalStorage()
});

//#region TA-149 Then Part
Then(/^I should see billing cycle and rate for other type item$/,function() {
    subPckgInvActions.verifyBillingCycleAndRateForOther();
    Utils.clearLocalStorage()
});

Then(/^I should see that Recurring checkbox is editable$/,function() {
    subPckgInvActions.verifyRecurringCheckboxEditable();
    Utils.clearLocalStorage()
});

Then(/^I should be able to set the next (.*) as start date of the recurring item$/,function(period) {
    subPckgInvActions.verifyStartDateCanBeSet(period);
    Utils.clearLocalStorage()
});

Then(/^I should recurring invoice item is yet to start$/,function() {
    subPckgInvActions.verifyRecurringYetToStart();
    Utils.clearLocalStorage()
});

Then(/^I should see the updated start date of the other item$/,function() {
    subPckgInvActions.verifyUpdatedStartDatePersist();
    Utils.clearLocalStorage()
});

Then(/^I should see the full term in the invoice$/,function() {
    subPckgInvActions.verifyFullTermInTheInvoice();
    Utils.clearLocalStorage()
});

Then(/^I should see the prorated term is added with start date$/,function() {
    subPckgInvActions.verifyProraredTermWithStartDate();
    Utils.clearLocalStorage()
});

Then(/^I should be able to see two records in the invoice i.e. both for prorate and full$/,function() {
    subPckgInvActions.verifyProrateAndFullRecords();
    Utils.clearLocalStorage()
});

Then(/^I can view that none of the Auto-Suspend options is selected by default in the Recurring Invoice Item Settings panel$/,function() {
    subPckgInvActions.verifyDefualtAutoSelected();
    Utils.clearLocalStorage()
});
Then(/^I can view that the default Auto-Suspend option set in the Recurring Invoice Item Settings panel is "when subscriber is suspended or inactive"$/,function() {
    subPckgInvActions.verifyNoneDefualtAutoSelected();
    Utils.clearLocalStorage()
});
Then(/^I should see a prompt with options "Apply to this invoice only", "Apply to future invoices only", and "Apply to this invoice and future invoices"$/,function() {
    subPckgInvActions.verifyDescriptionChangePromptOpt();
    Utils.clearLocalStorage()
});
Then(/^The Tax amount should be updated$/,function(taxAmount) {
    subPckgInvActions.verifyTaxAmountUpdated(taxAmount);
    //Utils.clearLocalStorage()
});
Then(/^I should see a prompt with options "Delete only the invoice item" and "Delete the invoice item and the package and services"$/,function() {
    subPckgInvActions.verifyInvoiceDottedMenuItems();
    Utils.clearLocalStorage()
});
Then(/^The selected package-type item is deleted$/,function() {
    subPckgInvActions.verifyOnlyInvoiceItemDeleted();
    //Utils.clearLocalStorage()
});
Then(/^The associated subscriber package is retained in the selected subscriber's account$/,function(packageName) {
    subscriberAddPackageActions.openFirstPackage();
    subPckgInvActions.expandInActivePackage();
    subPckgInvActions.verifyPackageRetainedInSubscriberAccount(packageName);
    Utils.clearLocalStorage()
});
Then(/^The selected package-type item is removed from the selected invoice and the associated subscriber package is removed from the selected subscriber's account$/,function(packageName) {
    subscriberAddPackageActions.openFirstPackage();
    subPckgInvActions.expandInActivePackage();
    subPckgInvActions.verifyPackageDeletedInSubscriberAccount(packageName);
    Utils.clearLocalStorage()
});
//#endregion
Then(/^A invoice is added to the subscriber with selected package$/,function(pacakgeName) {
    subPckgInvActions.verifyPackageAddedInSelectedInvoice(pacakgeName);
    Utils.clearLocalStorage()
});
