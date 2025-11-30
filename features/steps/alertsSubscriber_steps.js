const {Given, When, Then} = require("@cucumber/cucumber");
const subscriberlistActions = require('../support/subscriberlistActions');
const addProspectActions = require('../support/addProspectActions');
const alertsSubscriberActions = require('../support/alertsSubscriberActions');

const Utils = require('../support/utils');

When(/^I add a new Subscriber$/, () => {
	addProspectActions.clickGlobalCreateMenu();
	addProspectActions.clickAddProspectOption();
	addProspectActions.verifyAddProspectInterfaceOpened();
	addProspectActions.fillRequiredDetailsSubscriber ();   
	addProspectActions.clickNextButton();   
	addProspectActions.saveNewSubscriber();
   	addProspectActions.verificationMsgForNewSubscriberAdded ();
	addProspectActions.closeNewlyAddedProspect();
	alertsSubscriberActions.openSubscriberList();
	addProspectActions.verifyProspectAdded();

});


When(/^I go to logs section$/, () => {
    alertsSubscriberActions.clickOnNewlyAddedSubscriber();
    alertsSubscriberActions.openLogsTab();    
});


When(/^I create an alert for the subscriber$/, () => {
	alertsSubscriberActions.openAddAlertPopup();
	alertsSubscriberActions.setAlertMessage();
	alertsSubscriberActions.addAlertOperation();
});


When(/^I open alerts interface$/, () => {
	alertsSubscriberActions.openAlertTab();
});


When(/^I open the newly added alert$/, () => {
	alertsSubscriberActions.openNewlyAddedAlert ();
});



When(/^I create an alert for subscriber by selecting value from category field$/, () => {
    alertsSubscriberActions.openAddAlertPopup();
	alertsSubscriberActions.setAlertMessage();
	alertsSubscriberActions.selectCategoryAsCustomer();
	alertsSubscriberActions.addAlertOperation();   
});

   
When(/^I create an alert for the subscriber with option (.*)$/, (alertOption) => {
    alertsSubscriberActions.openAddAlertPopup();
    alertsSubscriberActions.setAlertMessage();
    alertsSubscriberActions.selectOption(alertOption);
    alertsSubscriberActions.addAlertOperation();   
        
});


When(/^I can see the alert as a banner on subscribers dock$/, () => {
    alertsSubscriberActions.closeSubscriberDock ();
    alertsSubscriberActions.clickOnNewlyAddedSubscriber ();
    alertsSubscriberActions.verifyAlertOnDock ();
});


Then(/^I can dismiss the alert using cross button on the banner$/, () => {
	alertsSubscriberActions.clickCrossButtonOnAlert();
    Utils.clearLocalStorage();
});





Then(/^I can see that alert category as Customer$/, () => {
    alertsSubscriberActions.verifyAlertCategory();
    Utils.clearLocalStorage();
});




Then(/^I can see in history logs for (.*)$/, (createdBy) => {
	alertsSubscriberActions.verifyAlertCreatedBy(createdBy);	
    Utils.clearLocalStorage();
});


// "alert updated by", "Message changed from", "Persistence changed from", "Cascade changed from", and "Active changed from"
Then(/^I can see in history logs (.*), (.*),(.*), (.*), and (.*)$/, (alertUpdatedBy,messageChangedFrom,persistenceChangedFrom,cascadeChangedFrom,activeChangedFrom) => {
	alertsSubscriberActions.verifyHistoryLogs (alertUpdatedBy,messageChangedFrom,persistenceChangedFrom,cascadeChangedFrom,activeChangedFrom);	
    Utils.clearLocalStorage();
});

Then(/^I can change alert details like description, active, alert cascade to links, user dismissable, and priority$/, () => {
    alertsSubscriberActions.changeAlertDetails();
    alertsSubscriberActions.clickSaveButton ();
    alertsSubscriberActions.openNewlyAddedAlert ();
	alertsSubscriberActions.verifyUpdatesInAlert();

    Utils.clearLocalStorage();
});


Then(/^I can create an alert with option Alert Flags cascade to links$/, () => {
	alertsSubscriberActions.openAddAlertPopup();
	alertsSubscriberActions.setAlertMessage();
	alertsSubscriberActions.selectAlertFlagCascadeToLinkOption();
	alertsSubscriberActions.addAlertOperation();
    alertsSubscriberActions.openNewlyAddedAlert ();
	alertsSubscriberActions.verifyCascaseToLinkOption();
    Utils.clearLocalStorage();
});



Then(/^I can update the severity of alert from Green to Red$/, () => {
    alertsSubscriberActions.updateSeverityToRed ();
    alertsSubscriberActions.clickSaveButton ();
    alertsSubscriberActions.openNewlyAddedAlert ();
    alertsSubscriberActions.updateSeverityToGreen (); // to set back to green for further use
    alertsSubscriberActions.clickSaveButton ();
    Utils.clearLocalStorage();
});



Then(/^I can update the alert and check and uncheck the active checkbox$/, () => {
    // Uncheck
    alertsSubscriberActions.verifyActiveChecked();
    // alertsSubscriberActions.checkActiveStatus();
    alertsSubscriberActions.changeActiveCheckboxStatus();
    alertsSubscriberActions.verifyActiveUnchecked();

    // alertsSubscriberActions.checkActiveCheckbox();
    // alertsSubscriberActions.clickSaveButton ();
    // alertsSubscriberActions.verifyActiveUnchecked ();

    // check
    // alertsSubscriberActions.checkActiveCheckbox(); // to set it back to previous state
    // alertsSubscriberActions.clickSaveButton ();
    // alertsSubscriberActions.verifyActiveChecked ();
    Utils.clearLocalStorage();
});


Then(/^I can create an alert with persistence option of User dismissible$/, () => {
    alertsSubscriberActions.verifyUserDismissableOption ();
    Utils.clearLocalStorage();
});



Then(/^I can add description of the alert$/, () => {
    alertsSubscriberActions.updateAlertDescription();
    alertsSubscriberActions.clickSaveButton();
    Utils.clearLocalStorage();
});


Then(/^I can see a separate tab for Alerts$/, () => {
	alertsSubscriberActions.verifyAlertTab();
    Utils.clearLocalStorage()
});
