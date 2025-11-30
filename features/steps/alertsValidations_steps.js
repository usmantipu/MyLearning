const {Given, When, Then} = require("@cucumber/cucumber");
const alertValAction = require('../support/alertsValidationsActions');
const Utils = require('../support/utils');

	When(/^I open alerts interface from logs section$/, function(){
		alertValAction.openAlert();
	});
	When(/^I create an alert for subscriber$/, function(){
		alertValAction.createAlert('none');
		alertValAction.clickAddAlert();
	});
	When(/^I update the same alert and clear "User dismissible" flag$/, function(){
		alertValAction.clickLogsAlert();
		alertValAction.editSpecificAlert();
		alertValAction.uncheckcheckedDismissible();
		alertValAction.saveAlert();
	});
	When(/^I create an alert with (.*) icon for subscriber$/, function(icon){
		alertValAction.createAlert(icon);
		alertValAction.clickAddAlert();
	});
	When(/^I update the same alert and set it to (.*) icon$/, function(icon){
		alertValAction.clickLogsAlert();
		alertValAction.editSpecificAlert();
		alertValAction.updateAlertIcon(icon);
		alertValAction.saveAlert();
	});
	When(/^I create an alert for subscriber with (.*) icon and "alert cascade to links" option$/, function(icon){
		alertValAction.createAlert(icon);
		alertValAction.selectFlagsCascade();
		alertValAction.clickAddAlert();
	});
	When(/^I edit the same alert and update "User dismissible", "description", "Severity"$/, function(){
		alertValAction.clickLogsAlert();
		alertValAction.editSpecificAlert();
		alertValAction.updateSpecificFields();
		alertValAction.saveAlert();
	});

	////// TA-328
	When(/^I create an alert for service$/, function(){
		alertValAction.createServiceAlert();
		alertValAction.clickAddAlert();
	});
	When(/^I update the service alert option as "Alert Flags cascade to links"$/, function(){
		alertValAction.clickLogsAlert();
		alertValAction.editSpecificAlert();
		alertValAction.selectFlagsCascade();
		alertValAction.saveAlert();
	});
	When(/^I deactivate the service alert by clicking the cross "X"$/, function(){
		alertValAction.deactivateServiceAlert();
	});

	////// TA-328

	
	Then(/^I can see in the history section that persistance is change from 0 to 1$/, function(){
		console.log('verifying history');
		alertValAction.verifyAlertPersistanceHistory();
		alertValAction.closeEditAlert();
		Utils.clearLocalStorage()
	});
	Then(/^I can see in the subscriber details tab a banner without an "X"$/, function(){
		alertValAction.verifyBannerRemoved();
		Utils.clearLocalStorage()
	});
	Then(/^I deactivate all applied alerts$/, function(){
		alertValAction.closeAndReOpenSubscriber();
		alertValAction.inActiveAllAppliedAlerts();
		// alertValAction.editSpecificAlert();
		// alertValAction.inActiveAppliedAlert();
		// alertValAction.saveAlert();
		Utils.clearLocalStorage()
	});
	Then(/^I can see in history logs that severity is changed from (.*) to (.*)$/, function(oldVal,newVal){
		alertValAction.verifyAlertHistorySeverity(oldVal,newVal);
		alertValAction.closeEditAlert();
		Utils.clearLocalStorage()
	});
	Then(/^The subscriber record in subscriber listing gets highlighted with a (.*) icon$/, function(flag){
		alertValAction.verifySubscriberFlag(flag);
		Utils.clearLocalStorage()
	});
	Then(/^I can see all the alert related changes in the history logs$/, function(){
		alertValAction.verifyHistoryOfMultipleActions();
		alertValAction.closeEditAlert();
		Utils.clearLocalStorage()
	});
	Then(/^I can see who made alert related changes in the history logs$/, function(){
		alertValAction.verifyHistoryOfPersonMadeChanges();
		alertValAction.closeEditAlert();
		Utils.clearLocalStorage()
	});
	////// TA-328
	Then(/^I can see alert is successfully created for service$/, function(){
		alertValAction.verifyAlertCreated();
		Utils.clearLocalStorage()
	});
	Then(/^I can see alert displayed on service detail pane$/, function(){
		alertValAction.verifyServiceAlertCreated();
		Utils.clearLocalStorage()
	});
	Then(/^I deactivate all active alerts related to service$/, function(){
		alertValAction.goToPackageService();
		alertValAction.inActiveServiceAlerts();
		Utils.clearLocalStorage()
	});
	Then(/^The alert flag is shown in the package pane on the top right corner$/, function(){
		alertValAction.verifyServiceCascadeOption();
		Utils.clearLocalStorage()
	});
	Then(/^I can see service alert deactivated$/, function(){
		alertValAction.verifyAlertRemoved();
		Utils.clearLocalStorage()
	});
	////// TA-328
	