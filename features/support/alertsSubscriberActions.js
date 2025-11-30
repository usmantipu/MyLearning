var LoginPage = require('../pageobjects/login.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var alertsSubscriberPage = require('../pageobjects/alertsSubscriber.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class alertsSubscriberActions{
	
	constructor(){
		this.alertMessage;
		this.source;
		this.sourceConfMsg = 'Successfully saved the new Source';
		this.activecheckboxForm;
		this.logHistory;
	}
	
    openVispApp(){
		SubListPage.open();
	}
	
	loginToVisp(login, password) {

		Utils.login(login, password);
	/*	browser.pause(5000);
		if(LoginPage.vispLogo.isExisting()===true){	
			browser.maximizeWindow();
		}else{
			LoginPage.username.waitForDisplayed();
			LoginPage.username.setValue(login);
			LoginPage.passwordf.setValue(password);
			LoginPage.logbutton.click();
			browser.maximizeWindow();
			//utils.closeRatingPopup();
			//utils.closeWalkMe();

		}*/
    }
	
	openSubscriberList(){
		
		SubListPage.subscribersmenu.waitForDisplayed();
		SubListPage.subscribersmenu.waitForClickable();
		SubListPage.subscribersmenu.click();
		browser.pause(2000);		
		console.log('I open subscriber list');
		SubListPage.subscribersCaption.click(); // to click on white space to remove the tooltip over subscriber icon
	}

	clickOnNewlyAddedSubscriber(){
		browser.pause(2000);
		alertsSubscriberPage.customerIDFirstSubscriber.waitForDisplayed();
		var x = alertsSubscriberPage.customerIDFirstSubscriber.getLocation('x');
		var y = alertsSubscriberPage.customerIDFirstSubscriber.getLocation('y');
		alertsSubscriberPage.customerIDFirstSubscriber.moveTo({ x, y});
		browser.pause(2000);
		alertsSubscriberPage.customerIDFirstSubscriber.waitForClickable();
		alertsSubscriberPage.customerIDFirstSubscriber.click();
		console.log('I opened newly added first subscriber');
		browser.pause(2000);
		
	}

	openLogsTab() {
		alertsSubscriberPage.alertTabInLogs.scrollIntoView();
		alertsSubscriberPage.logsTab.waitForClickable();
		alertsSubscriberPage.logsTab.click();
		browser.pause(2000);		
	}

	verifyAlertTab() {
		alertsSubscriberPage.alertTabInLogs.waitForDisplayed();
		let AlertTabTitle = alertsSubscriberPage.alertTabInLogs.getText();
		expect(AlertTabTitle).to.eql('ALERT');
		
	}

	openAlertTab() {
		browser.pause(1000);
		alertsSubscriberPage.allTabInLogs.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.allTabInLogs.click();
		browser.pause(1000);
		alertsSubscriberPage.alertTabInLogs.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.alertTabInLogs.click();
		browser.pause(1000);
	}

	openNewlyAddedAlert () {
		this.openAlertTab();
		browser.pause(2000);
		alertsSubscriberPage.firstAlertRecord.waitForDisplayed();
		alertsSubscriberPage.firstAlertRecord.waitForClickable();
		browser.pause(2000);
		alertsSubscriberPage.firstAlertRecord.click();
		console.log("first alert opened successfully");
		browser.pause(1000);
	}

	openAddAlertPopup() {
		alertsSubscriberPage.threeDotMenuOnLogsTab.waitForClickable();
		alertsSubscriberPage.threeDotMenuOnLogsTab.click();
		browser.pause(1000);
		alertsSubscriberPage.addAlertOpenOnMenu.waitForClickable();
		alertsSubscriberPage.addAlertOpenOnMenu.click();
		browser.pause(1000);
		alertsSubscriberPage.addAlertCaption.waitForDisplayed();
	}
	

	setAlertMessage() {

		browser.pause(1000);
		alertsSubscriberPage.alertMessageBox.waitForClickable();
		alertsSubscriberPage.alertMessageBox.click();
		this.alertMessage = "Testing Alert "+this.randomStringGenerator();
		alertsSubscriberPage.alertMessageBox.setValue(this.alertMessage);
		browser.pause(1000);			

	}

	selectCategoryAsCustomer() {
		alertsSubscriberPage.alertCategoryDropdown.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.alertCategoryDropdown.click();
		browser.pause(1000);
		alertsSubscriberPage.alertCategoryCustomerValue.waitForDisplayed();
		browser.pause(1000);
		alertsSubscriberPage.alertCategoryCustomerValue.click();
	}

	selectOption(alertOption) {
		
		browser.pause(1000);
		// let option = alertOption.raw();
		alertOption = alertOption.replace(/['"]+/g, '');
		
		if (alertOption === "Alert Flags cascade to links")
		{
			this.selectAlertFlagCascadeToLinkOption();			
			console.log("Selected....Alert Flags cascade to links");
		}

		else if (alertOption === "User dismissible")
		{
			alertsSubscriberPage.userDismissibleCheckBox.waitForClickable();
			browser.pause(1000);
			alertsSubscriberPage.userDismissibleCheckBox.click(); // checked
			console.log("Selected....User dismissible");
		}
		browser.pause(1000);
		
	}

	addAlertOperation () {
		browser.pause(1000);
		alertsSubscriberPage.addButtonOnAlertPopup.waitForClickable();
		alertsSubscriberPage.addButtonOnAlertPopup.click();
		browser.pause(1000);
		alertsSubscriberPage.alertConfirmationMsg.waitForDisplayed();
		//console.log("confirmation appeared");
		let alertAddedMsgText = alertsSubscriberPage.alertAddedMsg.getText();
		//console.log(alertAddedMsgText);
		expect(alertAddedMsgText).to.eql('Alert successfully added.');
		browser.pause(3000);
	}

	updateAlertDescription () {

		browser.pause(1000);

		alertsSubscriberPage.alertMessageBox.waitForClickable();
		alertsSubscriberPage.alertMessageBox.waitForDisplayed();
		browser.pause(1000);
		alertsSubscriberPage.alertMessageBox.click();
		browser.pause(1000);
		alertsSubscriberPage.alertMessageBox.setValue(this.alertMessage + " updated");
		browser.pause(1000);
	}

	clickSaveButton () {
		browser.pause(3000);
		alertsSubscriberPage.saveButtonOnAlert.waitForDisplayed();
		alertsSubscriberPage.saveButtonOnAlert.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.saveButtonOnAlert.click();

		alertsSubscriberPage.alertConfirmationMsg.waitForDisplayed();
		console.log("updated confirmation appeared");
		let alertAddedMsgText = alertsSubscriberPage.alertAddedMsg.getText();
		console.log(alertAddedMsgText);
		expect(alertAddedMsgText).to.eql('Alert successfully saved.');
		browser.pause(3000);
	}

	checkActiveCheckbox() {
		browser.pause(1000);
		alertsSubscriberPage.activeCheckBox.waitForClickable();
		alertsSubscriberPage.activeCheckBox.click();
		browser.pause(1000);
	}
	
		checkActiveStatus() {
		
		browser.pause(1000);
		alertsSubscriberPage.activeCheckBox.waitForDisplayed();
		// console.log(".... active checkbox status currently isSelected?:", alertsSubscriberPage.activeStatus.getAttribute('value'));
		return alertsSubscriberPage.activeStatus.getAttribute('value');
	}

	verifyCheckboxIsSelected() {

		browser.pause(1000);
		alertsSubscriberPage.activeCheckBox.waitForDisplayed();
		// console.log(".... active checkbox status currently isSelected?:", alertsSubscriberPage.activeCheckBox.isSelected());
		expect(alertsSubscriberPage.activeCheckBox.isSelected()).to.eql(true);
		
	}

	changeActiveCheckboxStatus()
	{
		if (this.checkActiveStatus())
		{
			alertsSubscriberPage.activeCheckBox.click();
			// console.log("check box was clicked to un-select");
			this.activecheckboxForm = 'unselected';
		}
		else {
			alertsSubscriberPage.activeCheckBox.click();
			// console.log("check box was clicked to select");
			this.activecheckboxForm = 'selected';

		}

		alertsSubscriberPage.saveButtonOnAlert.waitForClickable();
		alertsSubscriberPage.saveButtonOnAlert.click();
		browser.pause(1000);
	}



	// verifyActiveUnchecked () {
	// 	this.openNewlyAddedAlert ();
	// 	console.log("going to verify alert for unchecked");

	// 	// expect(alertsSubscriberPage.activeStatus.getAttribute('value')).to.eql('false');		
	// 	// expect(alertsSubscriberPage.activeStatus.getAttribute('value')).to.eql(alertsSubscriberPage.activeCheckBox.isSelected());
	// 	console.log("..... > ",alertsSubscriberPage.activeCheckBox.isSelected());
	// 	expect(alertsSubscriberPage.activeCheckBox.isSelected()).to.eql(false);
	// 	console.log("verified unChecked");
	// }

	// verifyActiveChecked () {
	// 	this.openNewlyAddedAlert ();
	// 	console.log("going to verify alert for checked");

	// 	// expect(alertsSubscriberPage.activeStatus.getAttribute('value')).to.eql('false');		
	// 	// expect(alertsSubscriberPage.activeStatus.getAttribute('value')).to.eql(alertsSubscriberPage.activeCheckBox.isSelected());
	// 	console.log("..... > ",alertsSubscriberPage.activeCheckBox.isSelected());
	// 	expect(alertsSubscriberPage.activeCheckBox.isSelected()).to.eql(true);
	// 	console.log("verified Checked");
	// }

	
	verifyActiveChecked () {
		this.openNewlyAddedAlert ();
		// console.log("going to verify alert for checked");
		// console.log(alertsSubscriberPage.activeStatus.getAttribute('value'));
		// alertsSubscriberPage.activeStatus.waitForDisplayed();
		alertsSubscriberPage.alertActive.waitForDisplayed();
		browser.pause(1000);
		expect(alertsSubscriberPage.activeStatus.getAttribute('value')).to.eql('true');
		browser.pause(1000);
		// console.log("verified alert is checked");
	}
	
	verifyActiveUnchecked () {
		this.openNewlyAddedAlert ();
		// console.log("going to verify alert for un-checked");
		// console.log(alertsSubscriberPage.activeStatus.getAttribute('value'));
		expect(alertsSubscriberPage.activeStatus.getAttribute('value')).to.eql('false');
		browser.pause(1000);
	}

	verifyUserDismissableOption () {
		browser.pause(1000);
		alertsSubscriberPage.userDismissibleCheckBox.waitForClickable();
		alertsSubscriberPage.userDismissibleCheckBox.click(); // unchecked.
		browser.pause(1000);
		alertsSubscriberPage.saveButtonOnAlert.waitForClickable();
		alertsSubscriberPage.saveButtonOnAlert.click();
		browser.pause(1000);
		this.verifyAlertOnDock();
	}

	closeSubscriberDock () {
		browser.pause(1000);
		alertsSubscriberPage.closebuttonOnSubscriber.waitForClickable();
		alertsSubscriberPage.closebuttonOnSubscriber.click();
		browser.pause(1000);
	}
	verifyAlertOnDock ()
	{
		browser.pause(1000);
		expect(alertsSubscriberPage.alertCloseIconFunction(this.alertMessage).isExisting()).be.true;
		console.log("close button was found on the alert");
		browser.pause(1000);

	}

	clickCrossButtonOnAlert() {
		browser.pause(1000);
		// let crossButton = alertsSubscriberPage.lastAlertCrossButton(this.alertMessage);

		let alertCloseIcon = alertsSubscriberPage.alertCloseIconFunction(this.alertMessage);
		
		alertCloseIcon.waitForClickable();
		alertCloseIcon.click();
		console.log("alert close button was clicked");
		browser.pause(1000);		


		expect(alertsSubscriberPage.alertCloseIconFunction(this.alertMessage)).to.be.false;

		// alertsSubscriberPage.lastAlertCrossButton(this.alertMessage).waitForDisplayed();
		// alertsSubscriberPage.lastAlertCrossButton(this.alertMessage).waitForClickable();
		// alertsSubscriberPage.lastAlertCrossButton(this.alertMessage).click();
		// console.log("alert removed");
		// let lastAlertMessageText = alertsSubscriberPage.alertCloseIconFunction(this.alertMessage);
		// console.log(lastAlertMessageText);
		// // expect(lastAlertMessageText).to.be.false;
	}

	updateSeverityToRed () {
		browser.pause(1000);
		alertsSubscriberPage.redErrorOutLineIcon.waitForClickable();
		alertsSubscriberPage.redErrorOutLineIcon.click();
		console.log("red icon selected");
		browser.pause(1000);
	}
	
	updateSeverityToGreen () {
		browser.pause(1000);
		alertsSubscriberPage.greenCheckCircleIcon.waitForClickable();		
		alertsSubscriberPage.greenCheckCircleIcon.click();
		console.log("green icon selected");
		browser.pause(1000);
	}

	selectAlertFlagCascadeToLinkOption() {
		browser.pause(1000);
		alertsSubscriberPage.alertFlagsCascadeToLinks.waitForClickable();
		alertsSubscriberPage.alertFlagsCascadeToLinks.click();
		browser.pause(1000);
	}

	verifyCascaseToLinkOption() {
		browser.pause(1000);
		expect(alertsSubscriberPage.checkboxFlagsCascadeToLinks.getValue("value")).to.eql("true");
		browser.pause(1000);
	}

	changeAlertDetails() {
		
		alertsSubscriberPage.userDismissibleCheckBox.waitForDisplayed();
		browser.pause(1000);
		alertsSubscriberPage.userDismissibleCheckBox.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.userDismissibleCheckBox.click(); // checked
		console.log("dismissible check box seleccted");
		browser.pause(1000);

		alertsSubscriberPage.redErrorOutLineIcon.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.redErrorOutLineIcon.click();
		console.log("red icon selected");
		browser.pause(1000);

		// this.alertMessage = alertsSubscriberPage.alertMessageBox.getText+" updated";
		// alertsSubscriberPage.alertMessageBox.setValue(this.alertMessage+" updated");
		this.updateAlertDescription();
		console.log("Message updated");
		browser.pause(1000);
		
		alertsSubscriberPage.activeCheckBox.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.activeCheckBox.click();
		console.log("Active checkbox unselected");
		browser.pause(1000);

		alertsSubscriberPage.alertFlagsCascadeToLinks.waitForClickable();
		browser.pause(1000);
		alertsSubscriberPage.alertFlagsCascadeToLinks.click();		
		console.log("cascade link selected");
		browser.pause(1000);

	}


	verifyUpdatesInAlert(){
		browser.pause(1000);
		console.log("dismissile checkbox is: ", alertsSubscriberPage.checkboxDismissible.getValue("value"));
		expect (alertsSubscriberPage.checkboxDismissible.getValue("value")).to.eql("true");
		// alertsSubscriberPage.userDismissibleCheckBox.waitForClickable();
		// alertsSubscriberPage.userDismissibleCheckBox.click(); // checked
		console.log("verified - dismissible check box seleccted");
		browser.pause(1000);

		expect (alertsSubscriberPage.redErrorOutLineIcon.isExisting()).to.be.true;
		// alertsSubscriberPage.redErrorOutLineIcon.waitForClickable();
		// alertsSubscriberPage.redErrorOutLineIcon.click();
		console.log("verified - red icon selected");
		browser.pause(1000);
		// console.log("alertMessage contents are: ", this.alertMessage);
		let messageInBox = alertsSubscriberPage.alertMessageBox.getText();
		messageInBox = messageInBox.trim();

		let temp = this.alertMessage+ " updated";
		expect (alertsSubscriberPage.alertMessageBox.getText()).to.equal (temp);
		// this.alertMessage = alertsSubscriberPage.alertMessageBox.getText()+" updated";
		// alertsSubscriberPage.alertMessageBox.setValue(this.alertMessage);
		console.log("verified - Message updated");
		browser.pause(1000);
		
		expect (alertsSubscriberPage.checkboxFlagsCascadeToLinks.getValue("value")).to.eql ("true");
		// alertsSubscriberPage.alertFlagsCascadeToLinks.waitForClickable();
		// alertsSubscriberPage.alertFlagsCascadeToLinks.click();		
		console.log("verified - cascade link selected");
		browser.pause(1000);
	}

	

	randomStringGenerator() {	
		var chars = "abcdefghijklmnopqrstuvwxyz";
		var string = "";
		for (var ii = 0; ii < 10; ii++) {
		  string += chars[Math.floor(Math.random() * chars.length)];
		}

		return string;
	}


	verifyAlertCreatedBy(createdBy) {
		let created = createdBy.replace(/['"]+/g, '');
		
		this.logHistory = alertsSubscriberPage.alertHistoryContents.getText();
		console.log(this.logHistory);		
		expect(this.logHistory).to.include(created);
		console.log(created, " found in the history log");
		
	}

	 //,messageChangedFrom,persistenceChangedFrom,cascadeChangedFrom,activeChangedFrom) 

	verifyHistoryLogs (alertUpdatedBy,messageChangedFrom,persistenceChangedFrom,cascadeChangedFrom,activeChangedFrom)	{
		this.logHistory = alertsSubscriberPage.alertHistoryContents.getText();
		// var information;
		let information = alertUpdatedBy.replace(/['"]+/g, '');		
		console.log(information);
		expect(this.logHistory).to.include(information);
		console.log(information, " found in the history log");
		

		information = messageChangedFrom.replace(/['"]+/g, '');
		console.log(information);
		expect(this.logHistory).to.include(information);
		console.log(information, " found in the history log");

		information = persistenceChangedFrom.replace(/['"]+/g, '');
		console.log(information);
		expect(this.logHistory).to.include(information);
		console.log(information, " found in the history log");

		information = cascadeChangedFrom.replace(/['"]+/g, '');
		console.log(information);
		expect(this.logHistory).to.include(information);
		console.log(information, " found in the history log");

		information = activeChangedFrom.replace(/['"]+/g, '');
		console.log(information);
		expect(this.logHistory).to.include(information);
		console.log(information, " found in the history log");

		// expect(this.logHistory).to.include(messageChangedFrom);
		// expect(this.logHistory).to.include(persistenceChangedFrom);
		// expect(this.logHistory).to.include(cascadeChangedFrom);
		// expect(this.logHistory).to.include(activeChangedFrom);		
	}

	verifyAlertCategory() {
		alertsSubscriberPage.editAlertCaption.waitForDisplayed();
		alertsSubscriberPage.alertCategory.waitForDisplayed();
		let categoryText = alertsSubscriberPage.alertCategory.getText();
		console.log("categoryText is: ", categoryText);
		expect(categoryText).to.eql('Customer');

	}	
}
module.exports = new alertsSubscriberActions();
