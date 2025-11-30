const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberAddPackageActions = require('../support/subscriberDetailsAddPackageActions');
const Utils = require('../support/utils');

When(/^I click on Packages and Invoices tab$/, function() {
    subscriberAddPackageActions.clickOnPackagesAndInvoices();
});

When(/^I click on add package button$/, function() {
    subscriberAddPackageActions.clickAddPackage();
});

When(/^I click on subscriber name$/, function() {
    subscriberAddPackageActions.clickOnSubscriberName();
});

When(/^I open any subscriber for package details$/, function() {
    subscriberAddPackageActions.openSubscriberFromPaidUp();
});
When(/^I open prospect for package details$/, function() {
    subscriberAddPackageActions.openSubscriberFromProspect();
});

When(/^I search the required package in the package selection pop up$/,function(packagename) {
    subscriberAddPackageActions.searchPackage(packagename);

});

When(/^I add the package to invoice$/,function() {
    subscriberAddPackageActions.addPackageToInvoice();
});

When(/^I click add and configure$/,function() {
    subscriberAddPackageActions.clickOnDropDownMenuBtn();
});

When(/^I click on any avalable package$/,function() {
    subscriberAddPackageActions.openFirstPackage();
});

When(/^I activate the package$/,function() {
    subscriberAddPackageActions.activatePackage();
    //subscriberAddPackageActions.clickOnSaveAndConfigureBtn();
});

When(/^I click invoice now button$/,function() {
    subscriberAddPackageActions.clickInvoiceNow();
});

When(/^I click save and configure$/,function() {
    subscriberAddPackageActions.clickOnSaveAndConfigureBtn();
});

When(/^I verify Package billing status from package details$/,function(packagename) {
    subscriberAddPackageActions.searchAndOpenSpecificPackage(packagename);
    subscriberAddPackageActions.compareBillingDate();
});

When(/^I click on Add to invoice$/,function() {
    subscriberAddPackageActions.clickOnAddToInvoice();
});

When(/^I click on change package button$/,function() {
    subscriberAddPackageActions.clickChangePackage();
});

When(/^I click choose a new package$/,function() {
    subscriberAddPackageActions.clickChooseAPackage();
});

When(/^I click choose package on popover$/,function() {
    subscriberAddPackageActions.clickChoosePackageonPopover();
});

When(/^I click save button to save configurations$/,function() {
    subscriberAddPackageActions.clickBtnSavePackgConfigs();
});

When(/^I search the required package from the dialog$/,function(pacakgename) {
    subscriberAddPackageActions.searchAndClickPackageinDialogBox(pacakgename);
});

When(/^I select activated pacakge$/,function() {
    subscriberAddPackageActions.selectActivatedPackage();
});

When(/^I click suspend button$/,function() {
    subscriberAddPackageActions.clickSuspendButton();
});

When(/^I select suspended pacakge$/,function() {
    subscriberAddPackageActions.selectSuspendedPackage();
});

When(/^I click unsuspend button$/,function() {
    subscriberAddPackageActions.clickUnsuspendButton();
});

When(/^I compare auto-actions options with package in settings$/,function(packagename) {
    subscriberAddPackageActions.searchAndOpenSpecificPackage(packagename);
    subscriberAddPackageActions.getSubscriberPackageAutoOptionsStatus();
    var dataToPass = packagename.raw();
    subscriberAddPackageActions.gotoItemsInAppsSettings(dataToPass[0][0]);
    subscriberAddPackageActions.getPackageItemAutoOptionsFromSettings();
    subscriberAddPackageActions.changePackageSettingsAutoActionsAndGetStatus();
    subscriberAddPackageActions.getPackageUpdatedAutoActionStatus();
});

When(/^I compare hibernation option with package in settings$/,function(packagename) {
    subscriberAddPackageActions.searchAndOpenSpecificPackage(packagename);
    subscriberAddPackageActions.getSubscriberPackageAutoOptionsStatus();
    var dataToPass = packagename.raw();
    subscriberAddPackageActions.gotoItemsInAppsSettings(dataToPass[0][0]);
    subscriberAddPackageActions.disableHibernateOptionsIfEnabled();
});

Then(/^I should See package area open$/, function() {
    subscriberAddPackageActions.verifypackageservicearea();
    Utils.clearLocalStorage()
});

Then(/^A new invoice is open in package and invoice section$/,function() {
    subscriberAddPackageActions.openNewInvoice();
    Utils.clearLocalStorage()
    browser.pause(2000);
});

Then(/^Total amount in invoice is euqal to package amount$/,function() {
    subscriberAddPackageActions.VerifyTotalAmountWithPackageAmount();
    Utils.clearLocalStorage()
});

Then(/^Total amount of package in new Invoice$/,function() {
    subscriberAddPackageActions.verifyTotalAmountForNewInvoice();
    Utils.clearLocalStorage()
});

Then(/^Save & Configure button become visible$/,function() {
    subscriberAddPackageActions.verifyPackageSaveButtonEnabled();
    Utils.clearLocalStorage()
});

Then(/^Package configuration form should open$/,function() {
    //subscriberAddPackageActions.verifyConfigureFormOpens();
    subscriberAddPackageActions.verifyPackageConfigurationPanelOpened();
    Utils.clearLocalStorage()
});

Then(/^I can see sections such as Package details, Additional information$/,function() {
    subscriberAddPackageActions.verifyPackageConfigurationPanelOpened();
    Utils.clearLocalStorage()
});

Then(/^The package is activated with a green check circle icon$/,function() {
    subscriberAddPackageActions.verifyPackageActivated();
    Utils.clearLocalStorage()
});

Then(/^Package addition information becomes available in the logs section$/,function() {
    subscriberAddPackageActions.verifyActivatedPackageLogs();
    Utils.clearLocalStorage()
});

Then(/^I can see Billing start date as disabled$/,function() {
    subscriberAddPackageActions.verifyPackageBillingDetails();
    Utils.clearLocalStorage()
});

Then(/^Invoice now button is not available$/,function() {
    subscriberAddPackageActions.verifyInvoiceNowButtonNotPresent();
    Utils.clearLocalStorage()
});

Then(/^I can see Billing start date as a date picker$/,function() {
    subscriberAddPackageActions.verifyBillingDatePicker();
    Utils.clearLocalStorage()
});

Then(/^Invoice now button is present and enabled$/,function() {
    subscriberAddPackageActions.verifyInvoiceNowButtonPresentAndEnabled();
    Utils.clearLocalStorage()
});

Then(/^Invoice Date and Term Start Date are not available$/,function() {
    subscriberAddPackageActions.verifyInvoiceAndTermDates();
    Utils.clearLocalStorage()
});

Then(/^I should see a prompting asking to apply changes to current invoice or next invoice$/,function() {
    subscriberAddPackageActions.verifyAddToInvoicePrompt();
    Utils.clearLocalStorage()
});

Then(/^I reach apply changes to current invoice or next invioce prompt$/,function() {

    subscriberAddPackageActions.verifyPrompttoApplyChangesonCurrentorNextInvoice();
    Utils.clearLocalStorage()
});

Then(/^I see a prompt displaying saved successfully$/,function() {
    browser.pause(2000);
    subscriberAddPackageActions.verifyPackageSaved();
    Utils.clearLocalStorage()
});

Then(/^I see change information is entered in the logs$/,function() {
    browser.pause(2000);
    subscriberAddPackageActions.verifyChangedPackageLogs();
    Utils.clearLocalStorage()
});

Then(/^a red dot should appear next to package to show it as suspended$/,function() {
    subscriberAddPackageActions.verifySuspendedPackageHaveRedDot();
    Utils.clearLocalStorage()
});

Then(/^I can see correct auto-action options for that package$/,function() {
    subscriberAddPackageActions.verifyAutoActionOptions();
    Utils.clearLocalStorage()
});

Then(/^Auto-Hibernate should not be available for such package$/,function() {
    subscriberAddPackageActions.verifyAutoHibernateOptionNotPresent();
    Utils.clearLocalStorage()
});

Then(/^the subscriber status should become suspended$/,function() {
    subscriberAddPackageActions.verifySuspendedSubscriberStatus();
    Utils.clearLocalStorage()
});

Then(/^The package is activated with a green icon$/,function() {
    subscriberAddPackageActions.verifyPackageGreenStatus();
    Utils.clearLocalStorage()
});

Then(/^the status of subscriber should become green$/,function() {
    subscriberAddPackageActions.verifySubscriberGreenStatus();
    Utils.clearLocalStorage()
});
