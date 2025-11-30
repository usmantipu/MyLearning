const {Given, When, Then} = require("@cucumber/cucumber");
const alertsPackageActions = require('../support/alertsPackageActions');
const Utils = require('../support/utils');
const subscriberlistActions = require('../support/subscriberlistActions');

When(/^I click any subscriber record to add alert$/, function() {
    subscriberlistActions.clickOnAnySubscriber();
});

When(/^I click the Add Alert button from popup menu in logs section$/,function(){
    alertsPackageActions.openAlertForm();
});
Then(/^I can see Add Alert form opens$/,function(){
    //alertsPackageActions.openAlertForm();
    alertsPackageActions.verifyAlertFormOpens();
});
Then(/^I can create alert by selecting "package" from category field$/,function(){
    alertsPackageActions.createAlert('No Cascade','low');
    alertsPackageActions.checkalertAdded('No Cascade');
    Utils.clearLocalStorage()
});
Then(/^I can create alert by selecting "package" from category field without "alerts cascade to links" option$/,function() {
    alertsPackageActions.createAlert('No Cascade','low');
});
Then(/^I can see there is no flag is shwoing in package pane$/,function(){
    alertsPackageActions.verifyFlgShows('No');
    alertsPackageActions.checkalertAdded('Cascade');
    Utils.clearLocalStorage()
});
Then(/^I can create alert by selecting "package" from category field with "alerts cascade to links" option$/,function(){
    alertsPackageActions.createAlert('Cascade','low');
});
Then(/^I can see that flag is shwoing in package pane$/,function() {
    alertsPackageActions.verifyFlgShows('Yes');
    alertsPackageActions.checkalertAdded('Cascade');
    Utils.clearLocalStorage()
});
Then(/^I can see that package alert is also visible on package detail window$/,function() {
    alertsPackageActions.checkalertAdded('No Cascade');
});
Then(/^I dismiss the using with "X" sign$/,function(){
    alertsPackageActions.checkalertAdded('');
    alertsPackageActions.dismissTheAlert();
    Utils.clearLocalStorage()
});
Then(/^I can create alert with high seveirty from alert form$/,function(){
    alertsPackageActions.createAlert('No Cascade','high');
});
Then(/^I create another alert with less seveirty$/,function(){
    alertsPackageActions.openAlertForm();
    alertsPackageActions.verifyAlertFormOpens();
    alertsPackageActions.createAlert('No Cascade','low');
});
Then(/^I can see the alert with high seveirty is shown in the package listing$/,function(){
    alertsPackageActions.verifyAlertsHaveHighSeveirtyOrder();
    Utils.clearLocalStorage()
});
Then(/^I deactivate all active alerts related to package$/,function(){
    //alertsPackageActions.checkalertAdded('');
    alertsPackageActions.dismissAllActiveAlert();
    Utils.clearLocalStorage()
});