const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberlistActions = require('../support/subscriberlistActions');
const Utils = require('../support/utils');


Given(/^I open UBO webapp$/, {timeout : 30 * 60000}, function() {//enhanced timeout due to slow vpn and branch environments 
    subscriberlistActions.openVispApp();
});

Given(/^I login with username (.*) and password (.*)$/, function(login, password) {
    subscriberlistActions.loginToVisp(login, password);
    console.log('I provide credentials to login');
    
});

When(/^I navigate to subscriber list$/, function() {
    subscriberlistActions.openSubscriberList();
});

When(/^I click on subscriber (.*) button$/, function(btn_sortlist) {
    subscriberlistActions.clickAllSubscriberList();
    subscriberlistActions.clickSortingButton(btn_sortlist);
});

When(/^I change table view to (.*)$/, function(tableView) {
    subscriberlistActions.changeTableView(tableView);
});

When(/^I click on any subscriber record$/, function() {
    subscriberlistActions.clickOnAnySubscriber();
});

When(/^I click on Additional Info tab$/, function() {
    subscriberlistActions.clickOnAdditionalInfoTab();
});

When(/^I Uncheck "Display Marketing Source and Source Details" option$/, function() {
    subscriberlistActions.checkSourceAndSourceDetails();
    subscriberlistActions.gotoMarketingSettings();
    subscriberlistActions.UncheckSourceAndSourceDetails();
});

When(/^I enable Marketing options "Display Marketing Source and Source Details"$/, function() {
    subscriberlistActions.UncheckSourceAndSourceDetails();
    subscriberlistActions.gotoMarketingSettings();
    subscriberlistActions.checkSourceAndSourceDetails();
});

When(/^I go to Marketing settings from top right menu$/, function() {
    subscriberlistActions.gotoMarketingSettings();
});

When(/^I click on Additional Info tab Source field$/, function() {
    subscriberlistActions.gotoMarketingSettings();
    subscriberlistActions.checkSourceAndSourceDetails();
    subscriberlistActions.clickOnSourceField();
});

When(/^I select "new" option$/, function() {
    subscriberlistActions.selectNewOption();
});

When(/^I provide source details$/, function() {
    subscriberlistActions.inputSourceField('');
    subscriberlistActions.popSave();
});

When(/^I click on operating system field$/, function() {
    subscriberlistActions.clickOnOperatingSystem();
});

When(/^I select an OS$/, function() {
    subscriberlistActions.selectOS();
});

When(/^I select a source option$/, function() {
    subscriberlistActions.selectSource();
});

When(/^I select Source Details$/, function() {
    subscriberlistActions.clickOnSourceDetailsField();
    subscriberlistActions.provideSourceDetails();
});

When(/^I save the Additional Info details$/, function() {
    subscriberlistActions.clickSaveAdditionalInfo();
});

When(/^I select source options from Additional Info tab$/, function(sourceoption) {
    var table = sourceoption.raw();
    subscriberlistActions.addSourcesIfDoNotExist(sourceoption);
    subscriberlistActions.clickOnSourceField();
    subscriberlistActions.selectSource(table[0][0]);
});

When(/^I provide non-alphanumeric value in source details field$/, function() {
    subscriberlistActions.sourceDetailsNonAlpanumeric();
});

Then(/^I see buttons on subscriber list$/, function(buttons) {
    subscriberlistActions.verifyButtonavailibility(buttons);
    Utils.clearLocalStorage()
});

Then(/^I see records of (.*) status only$/, function(colStatus) {
    subscriberlistActions.verifyListSorting(colStatus);
    browser.pause(2000);
    Utils.clearLocalStorage()
});

Then(/^Table view gets updated to (.*)$/, function(tableView) {
    subscriberlistActions.verifyTableView(tableView);
    Utils.clearLocalStorage()
});

Then(/^Additional Info tab becomes visible$/, function() {
    subscriberlistActions.verifyAdditionalInfoTabVisible();
    Utils.clearLocalStorage()
});

Then(/^I can see Set up Date is disabled$/, function() {
    subscriberlistActions.verifySetUpDateDisabled();
    Utils.clearLocalStorage()
});

Then(/^I should see accurate list of Additional Info OS$/, function(OS) {
    subscriberlistActions.verifyListOfOS(OS);
    Utils.clearLocalStorage()
});

Then(/^Source and Source Details fields should not present under Additional Info tab$/, function() {
    subscriberlistActions.verifySourceAndSourceDetailsAreNotPresent();
    Utils.clearLocalStorage()
});

Then(/^Source and Source Details visibility should match "Display Marketing and Source Details" setting$/, function() {
    subscriberlistActions.verifySourceAndSourceDetailsStatus();
    Utils.clearLocalStorage()
});

Then(/^New source option should be added successfully$/, function() {
    subscriberlistActions.verifySourceFieldAdded();
    Utils.clearLocalStorage()
});

Then(/^The Save button should be disabled$/, function() {
    subscriberlistActions.verifyPopUpSaveButtonDisabled();
    
});

Then(/^I can see an error message$/, function(){
    subscriberlistActions.verifyEmptyFieldErrorMsg();
    Utils.clearLocalStorage()
});

Then(/^additional information should be saved$/, function() {
    subscriberlistActions.verifyAdditionalInfoSavedSuccessfully();
    Utils.clearLocalStorage()
});

Then(/^Accurate list of Additional Info Source populated$/, function(populated) {
    subscriberlistActions.addSourcesIfDoNotExist(populated);//pre-req data
    subscriberlistActions.verifyListOfSource(populated);
    Utils.clearLocalStorage()
});

Then(/^I can see Source details field validtion message displayed$/, function() {
    subscriberlistActions.verifySourceDetailsInputValidation();
    Utils.clearLocalStorage()
});