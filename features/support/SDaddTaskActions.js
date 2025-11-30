var LoginPage = require('../pageobjects/login.page');
var SDaddTaskPage = require('../pageobjects/SDaddTask.page');
var ServiceDeskPage = require('../pageobjects/serviceDesk.page');
var Utils = require('./utils');
var subscriberDetailsBillingActions = require('./subscriberDetailsBillingActions');
const { openInvoiceSettingFromTopRightMenu } = require('./subscriberDetailsBillingActions');
const { saveTicketDetails } = require('./serviceDeskActions');
const SDaddNotePage = require('../pageobjects/SDaddNote.page');

var expect = require('chai').expect; 
//var should = require('chai').should();

class SDaddTaskActions{
	
	constructor(){
		this.randomNumber;
		this.singleTaskText;
		this.firstTask;
		this.secondTask;
	}


	clickaddTaskIcon () {
		browser.pause(4000);
		SDaddTaskPage.addTaskIcon.waitForDisplayed();
		SDaddTaskPage.addTaskIcon.click();
		browser.pause(1000);
	}
		
	saveSingleTaskForTicket() {
		this.clickaddTaskIcon();
		browser.pause(2000);
		this.singleTaskText = "test task for technician "+ this.randomStringGenerator();
		SDaddTaskPage.taskTextBox.waitForDisplayed();
		SDaddTaskPage.taskTextBox.setValue(this.singleTaskText);
		browser.pause(2000);
		SDaddTaskPage.tickIconForTask.waitForDisplayed();
		SDaddTaskPage.tickIconForTask.click();
		browser.pause(2000);
		// SDaddTaskPage.btnSaveOnTicketDocker.waitForDisplayed();
		// SDaddTaskPage.btnSaveOnTicketDocker.click();
		this.saveButtonOnTicketDocker();
		
	}

	saveMultipleTasksForTicket(number){

		if (number === "1") {
			this.firstTask = "technician task "+number+ this.randomStringGenerator();
			this.clickaddTaskIcon();
			browser.pause(2000);
			SDaddTaskPage.taskTextBox.waitForDisplayed();
			SDaddTaskPage.taskTextBox.setValue(this.firstTask);
		}

		if (number === "2") {
			this.secondTask  = "test task 2 for technician "+ this.randomStringGenerator();
			this.clickaddTaskIcon();
			browser.pause(2000);
			SDaddTaskPage.taskTextBox.waitForDisplayed();
			SDaddTaskPage.taskTextBox.setValue(this.secondTask);
		}
		// adding first task

		browser.pause(2000);
		SDaddTaskPage.tickIconForTask.waitForDisplayed();
		SDaddTaskPage.tickIconForTask.click();
		browser.pause(2000);
		
		// adding second task

		// this.clickaddTaskIcon();
		// browser.pause(2000);
		// SDaddTaskPage.taskTextBox.waitForDisplayed();
		// SDaddTaskPage.taskTextBox.setValue(this.secondTask);
		// browser.pause(4000);
		// console.log("waiting for Second icon");
		// SDaddTaskPage.tickIconForTask.waitForDisplayed();
		// console.log("Second icon displayed");
		// browser.pause(2000);
		// SDaddTaskPage.tickIconForTask.click();
		// browser.pause(2000);

		this.saveButtonOnTicketDocker ();
	}
	
		//save ticket
	saveButtonOnTicketDocker () {
		SDaddTaskPage.btnSaveOnTicketDocker.waitForDisplayed();
		SDaddTaskPage.btnSaveOnTicketDocker.click();
		// browser.pause(1000);
		SDaddTaskPage.confirmationMsg.waitForDisplayed();
		expect(SDaddTaskPage.confirmationMsg.getText()).to.eql("Saved Successfully");
		
	}

	verifySingleTaskForTicket() {
		browser.pause(2000);
		expect(SDaddTaskPage.addedTasks(this.singleTaskText)).to.eql(this.singleTaskText);
	}
	
	verifyAllAddedTasksForTicket() {
		browser.pause(2000);
		expect(SDaddTaskPage.addedTasks(this.firstTask)).to.eql(this.firstTask);
		browser.pause(1000);
		expect(SDaddTaskPage.addedTasks(this.secondTask)).to.eql(this.secondTask);
		browser.pause(1000);
	}
	

	randomStringGenerator() {

		var chars = "1234567890";
		var string = "";
		for (var ii = 0; ii < 5; ii++) {
		string += chars[Math.floor(Math.random() * chars.length)];
		}

		return string;
}

	addNewTicket () {
		var keyboardKeys = ['\uE015','\uE006'];
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.pause(3000);
		ServiceDeskPage.searchName.waitForDisplayed();
		//browser.pause(3000);
		ServiceDeskPage.searchName.setValue("Monika");
		browser.pause(5000);
		ServiceDeskPage.autocompleteDialouge.waitForDisplayed();
		browser.keys(downArrowKey);
		//ServiceDeskPage.searchName.keys(keyboardKeys[0]);
		browser.pause(500);
		browser.keys(enterKey);
		//ServiceDeskPage.searchName.keys(keyboardKeys[1]);
		console.log("@@@@ Ticket Subscriber added");
		browser.pause(2000);
		SDaddTaskPage.ticketTypeInput.waitForDisplayed();
		browser.pause(3000);
		SDaddTaskPage.ticketTypeInput.click();
		browser.pause(3000);
		browser.keys(downArrowKey);	
		//SDaddTaskPage.ticketTypeInput.keys(keyboardKeys[0]);
		browser.pause(500);
		browser.keys(enterKey);
		//SDaddTaskPage.ticketTypeInput.keys(keyboardKeys[1]);
		browser.pause(1000);
		console.log("@@@@ Ticket Type selected");
		SDaddTaskPage.ticketSummary.waitForDisplayed();
		SDaddTaskPage.ticketSummary.click();
		browser.pause(2000);
		SDaddTaskPage.ticketSummary.setValue("Test Summary "+this.randomStringGenerator());	
		console.log("@@@@ Ticket summary added");
		browser.pause(3000);		
		ServiceDeskPage.searchName.keys(keyboardKeys[1]);
		browser.pause(1000);

		SDaddTaskPage.saveButtonOnTicket.waitForDisplayed();
		SDaddTaskPage.saveButtonOnTicket.waitForClickable();
		SDaddTaskPage.saveButtonOnTicket.click();
		console.log("@@@@ Ticket Saved");

		//SDaddTaskPage.confirmationMsg.waitForDisplayed();

		//expect(SDaddTaskPage.confirmationMsg.getText()).to.eql("Saved Successfully");
		browser.pause(1000);

		
		console.log(SDaddNotePage.ticketID.getText());

		
	}

	openTicketOptionFromPlusIcon (){
		SDaddTaskPage.btnPlusInHeader.waitForDisplayed();
		SDaddTaskPage.btnPlusInHeader.waitForClickable();
		SDaddTaskPage.btnPlusInHeader.click();
		browser.pause(1000);
		SDaddTaskPage.topMenuItemTicket.waitForDisplayed();
		SDaddTaskPage.topMenuItemTicket.waitForClickable();
		SDaddTaskPage.topMenuItemTicket.click();		
		browser.pause(3000);
		console.log('create ticket wizard opened');
	}


	goToISPLogs (){
		SDaddTaskPage.btnAppIcon.waitForDisplayed();
		browser.pause(1000);
		SDaddTaskPage.btnAppIcon.click();
		
		SDaddTaskPage.ISPLogs.waitForDisplayed();
		browser.pause(1000);
		SDaddTaskPage.ISPLogs.click();
		browser.pause(1000);

		SDaddTaskPage.ISPTab.waitForDisplayed();
		browser.pause(1000);
		SDaddTaskPage.ISPTab.click();
		browser.pause(3000);
	}

	verifyTaskInISPLogs(){		
		SDaddTaskPage.taskInISPLogs.waitForDisplayed();
		browser.pause(2000);
		let taskTextInISPLogs = SDaddTaskPage.taskInISPLogs.getText();
		expect(taskTextInISPLogs).to.include(this.singleTaskText);
		browser.pause(1000);
	}

	openTicketActivity() {
		SDaddTaskPage.openTicketActivity.waitForDisplayed();
		browser.pause(2000);
		SDaddTaskPage.openTicketActivity.click();
		browser.pause(1000);
	}


	verifyTaskInTicketActivity() {
		SDaddTaskPage.ticketActivityCaption.waitForDisplayed();
		browser.pause(2000);
		let taskInActivity = SDaddTaskPage.taskInTicketActivity.getText();
		expect(taskInActivity).to.include(this.singleTaskText);
		browser.pause(1000);
	}




	clickGlobalCreateMenu() {

		addProspectPage.globalCreateMenu.waitForDisplayed();
		browser.pause(1000);
		addProspectPage.globalCreateMenu.click();
		browser.pause(1000);
	}

	clickAddProspectOption() {
		addProspectPage.addProspectOrSubscriberOption.waitForDisplayed();
		browser.pause(1000);
		addProspectPage.addProspectOrSubscriberOption.click();
		browser.pause(1000);
	}

	

	verifyAddProspectInterfaceOpened() {
		addProspectPage.addProspectTab.waitForDisplayed();
		browser.pause(1000);
		expect(addProspectPage.addProspectTab.getText()).to.eql("Add Prospect or Subscriber *");
		browser.pause(1000);
	}

	sectionsAreVisibleOnProspectPanel() {

		if (this.verifyCheckboxAlsoTheBillingContact()) {
			addProspectPage.checkboxToClick.click();
			browser.pause(1000);
			addProspectPage.billingContactTab.waitForDisplayed();
		}
		expect(addProspectPage.addProspectTab.getText()).to.eql("Add Prospect or Subscriber *");
		expect(addProspectPage.billingContactTab.getText()).to.eql("Billing Contact *");
		expect(addProspectPage.accountTab.getText()).to.eql("Account");
		browser.pause(1000);
	}

	verifyCheckboxAlsoTheBillingContact () {

		if (addProspectPage.checkboxAlsoTheBillingContact.getAttribute('data-testid') === "CheckBoxIcon") {
			return true;
		}
		if (addProspectPage.checkboxAlsoTheBillingContact.getAttribute('data-testid') === "CheckBoxOutlineBlankIcon") {
			return false;
		}
	}

	fillRequiredDetailsSubscriber () {

		addProspectPage.inputCompanyName.waitForDisplayed();
		this.companyName = "Test Company "+this.randomStringGenerator('string').substring(0, 5);
		addProspectPage.inputCompanyName.setValue (this.companyName);
		this.firstName = this.randomStringGenerator('string');
		this.firstName = ("FN "+this.firstName);
		addProspectPage.firstNameProspectPage.setValue(this.firstName);
		browser.pause(500);
		addProspectPage.lastNameProspectPage.click();
		this.lastName = this.randomStringGenerator('string');
		this.lastName = ("LN "+this.lastName);
		addProspectPage.lastNameProspectPage.setValue(this.lastName);
		// new address selected from auto-list
		browser.pause(500);
		addProspectPage.address1ProspectPage.click();
		this.clearFieldValue(addProspectPage.address1ProspectPage);
		browser.pause(500);		
		addProspectPage.address1ProspectPage.keys("9450 SW");
		browser.pause(5000);
		addProspectPage.address1ProspectPage.keys("\uE007"); // press enter key
		browser.pause(5000);
		// save the current address  
		this.currentAddress1 = addProspectPage.address1ValueProspectPage.getAttribute('value');
		// saving cell phone number
		browser.pause(500);
		addProspectPage.cellPhoneProspectPage.click();
		this.currentCellPhone = this.randomPhoneNumberGenerator();
		addProspectPage.cellPhoneProspectPage.setValue(this.currentCellPhone);
		// saving email address
		browser.pause(500);
		addProspectPage.emailProspectPage.click();
		this.currentEmail = this.randomStringGenerator('email');
		addProspectPage.emailProspectPage.setValue(this.currentEmail);
	}

	clickNextButton(){
		
		addProspectPage.nextButtonProspectPage.waitForDisplayed();
		expect(addProspectPage.nextButtonProspectPage.getAttribute('tabindex')).to.eql('0');		
		addProspectPage.nextButtonProspectPage.click();		
	}

	randomNumberGenerator() {
		var chars = "123456789";
		var num = "";
		for (var ii = 0; ii < 3; ii++) {
			num += chars[Math.floor(Math.random() * chars.length)];
		}		
		this.randomNumber = num;
	  return this.randomNumber;
	  }

	randomPhoneNumberGenerator() {
		var chars = "1234567890";
		var num = "";
		for (var ii = 0; ii < 10; ii++) {
			num += chars[Math.floor(Math.random() * chars.length)];
		}		
		this.randomNumber = num;
	  return this.randomNumber;
	  }

	
	randomStringGenerator(format) {
		
		var chars = "abcdefghijklmnopqrstuvwxyz";
		var string = "";
		for (var ii = 0; ii < 10; ii++) {
		  string += chars[Math.floor(Math.random() * chars.length)];
		}
		
		if (format === 'email') {
			this.randomValidEmail = string+'@automationtest.com';
			return this.randomValidEmail;
		}

		this.randomString = string;
	  	return this.randomString;
	}

	saveNewSubscriber () {
		addProspectPage.addButtonProspectPage.waitForDisplayed();
		browser.pause(1000);
		addProspectPage.addButtonProspectPage.click();
	}

	verificationMsgForNewSubscriberAdded (){
				
		addProspectPage.confirmationMsg.waitForDisplayed();		
		var msg = addProspectPage.confirmationMsg.getText();
    	expect(msg).to.eql("Added new prospect successfully");
	}

	verifyProspectAdded() {
		
		browser.pause(2000);
		addProspectPage.susbcriberTableIndex(7).waitForDisplayed();
		var firstNameOfNewProspect = addProspectPage.susbcriberTableIndex(7).getText();
		expect(firstNameOfNewProspect).to.eql(this.firstName);
		browser.pause(2000);
	}

	verifyNewlyAddedSubscriberOpens() {

		browser.pause(1000);
		addProspectPage.firstTabOfSubscriber.waitForDisplayed()
				
		var nameOnTab = addProspectPage.firstTabOfSubscriber.getText();
		nameOnTab = nameOnTab.trim();
	
		var savedName = this.firstName+" "+this.lastName;

		// matching name on the tab
		expect(nameOnTab.toUpperCase()).to.eql(savedName.toUpperCase());
		// matching address1
		addProspectPage.addressAfterSavingProspect.waitForDisplayed();
		var tempaddress = addProspectPage.addressAfterSavingProspect.getText();
		tempaddress = tempaddress.split(",")[0];
		expect(this.currentAddress1).to.eql(tempaddress);

		var tempPhone = this.formatPhoneNumber(this.currentCellPhone);
		var trimmedPhoneNumber = addProspectPage.phoneNumberAfterSavingProspect.getText();
		trimmedPhoneNumber = trimmedPhoneNumber.slice(0, 14);
		expect(tempPhone).to.eql(trimmedPhoneNumber);
		expect(this.currentEmail).to.eql(addProspectPage.emailAfterSavingProspect.getText());
	}

	closeNewlyAddedProspect()
	{
		browser.pause(2000);
		addProspectPage.prospectTabCloseButton.waitForDisplayed();
		addProspectPage.prospectTabCloseButton.click();
	}

	formatPhoneNumber(phoneNumber) {
		var digit1 = phoneNumber.slice(0, 3);
		var digit2 = phoneNumber.slice(3, 6);
		var digit3 = phoneNumber.slice(6, 10);
		var formattedPhone = "(".concat(digit1, ") ", digit2, "-", digit3);
		return formattedPhone;
		
	  }


	accountAutoGenerationEnabled(status) {
		status = status.replace(/['"]+/g, '')

		addProspectPage.accountAutoGenerationSlider.waitForDisplayed();

		if (status === "enabled"){
			
			if (addProspectPage.autogenerationStatus.getAttribute('value') === "false")
			{
				addProspectPage.accountAutoGenerationSlider.click();
				
			}
		}

		if (status === "disabled"){
			
			if (addProspectPage.autogenerationStatus.getAttribute('value') === "true") 
			{				
				addProspectPage.accountAutoGenerationSlider.click();							
				
			}
		}	

		browser.pause(1000);		
	}


	validateRandomUsernameAndPassword(){
		addProspectPage.username.waitForDisplayed();
		addProspectPage.username.click();
		addProspectPage.usernameValue.waitForDisplayed();
		this.currrentUsername=addProspectPage.usernameValue.getAttribute('value');
		addProspectPage.passwordValue.waitForDisplayed();
		this.currentPassword=addProspectPage.passwordValue.getAttribute('value');
		expect(this.currrentUsername).to.not.be.null;
		expect(this.currentPassword).to.not.be.null;

	}
	
	alphaNumericValidation(inputtxt) {
		var format = /^[A-Za-z0-9]+$/;
		
		if (inputtxt.match(format)) {
		
		  return true;
		} else {
		
		  return false;
		}
	  }

	passwordValidation (inputtxt) {
		var regularExpression = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{8,30}$/;
		if (inputtxt.match(regularExpression)) {
			console.log("password validated");

			return true;
		  } else {
			return false;
		  }
	}

	usernameGenerator() {
		var chars = "0123456789";
		var string = "";
		for (var ii = 0; ii < 7; ii++) {
		  string += chars[Math.floor(Math.random() * chars.length)];
		}
		this.setUsername = 'tst'+string;
		
	 	return this.setUsername;
	  }

	passwordGenerator() {
		var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-+={}\[\]|\\:;'<>,.?/";
		var string = "";
		for (var ii = 0; ii < 20; ii++) {
		  string += chars[Math.floor(Math.random() * chars.length)];
		}
		this.setPassword = string;
		
		
	 	return this.setPassword;
	  }
	  
	enterUsernameAndPassword() {
		addProspectPage.usernameOnAccountTab.waitForDisplayed();
		addProspectPage.usernameOnAccountTab.click();
		var tempUsername = this.usernameGenerator();
		addProspectPage.usernameOnAccountTab.setValue(tempUsername);
		browser.pause(1000);
		addProspectPage.passwordOnAccountTab.waitForDisplayed();
		addProspectPage.passwordOnAccountTab.click();
		var tempPassword = this.passwordGenerator();
		addProspectPage.passwordOnAccountTab.setValue(tempPassword);

		browser.pause(1000);
		addProspectPage.confirmPasswordOnAccountTab.waitForDisplayed();
		addProspectPage.confirmPasswordOnAccountTab.click();
		addProspectPage.confirmPasswordOnAccountTab.setValue(tempPassword);

		browser.pause(500);

	}

	validateSetUsernameAndPassword(){
		addProspectPage.username.waitForDisplayed();
		addProspectPage.username.click();
		addProspectPage.usernameValue.waitForDisplayed();
		this.currrentUsername=addProspectPage.usernameValue.getAttribute('value');
		addProspectPage.passwordValue.waitForDisplayed();
		this.currentPassword=addProspectPage.passwordValue.getAttribute('value');
		expect(this.currrentUsername).to.eql(this.setUsername);
		expect(this.currentPassword).to.eql(this.setPassword);
		
	}

	clearFieldValue(element) {
		var address = element;
		var clearKeys = ["\uE011", "\uE008", "\uE010", "\uE017"];
	
		address.waitForDisplayed();
		address.click();
		address.keys(clearKeys);
		browser.pause(500);
	  }

	checkInvoiceSettingforBilling() {

		browser.pause(1000);
		subscriberDetailsBillingActions.openInvoiceSettingFromTopRightMenu();
		addProspectPage.invoiceDayOnInvoiceMenu.waitForDisplayed();
		browser.pause(10000);
		
		this.invoiceDay = addProspectPage.invoiceDayOnInvoiceMenu.getText();
		this.invoiceDueDate = addProspectPage.invoiceDueDateOnInvoiceMenu.getText();		
		this.termStartDate = addProspectPage.termStartDateOnInvoiceMenu.getText();		
		SubscriberDetailsBillingPage.btnCloseInvoiceSetting.click();

	}

	openBillingOptionTab() {
		browser.pause(1000);
		addProspectPage.btnBillingOption.waitForDisplayed();
		addProspectPage.btnBillingOption.click();
		browser.pause(1000);
	}

	openTaxDropdown() {
		browser.pause(1000);
		SubscriberDetailsBillingPage.selectBillingOptionsTaxId.waitForDisplayed();
		SubscriberDetailsBillingPage.selectBillingOptionsTaxId.click();
		browser.pause(1000);
	}

	applyTaxProfileFromDropdown(){

		//click first value in dropdown (not empty).
		browser.pause(1000);
		SubscriberDetailsBillingPage.optionsTaxId[1].waitForDisplayed();
		SubscriberDetailsBillingPage.optionsTaxId[1].click();

		//check the popup of "tax change option"
		addProspectPage.taxChangeOptionPopupTitle.waitForDisplayed();
		expect(addProspectPage.taxChangeOptionPopupTitle.getText()).to.eql("Tax Change Option");
		
		//click cancel button on popup.
		addProspectPage.cancelButtonOnTaxChangeOptionPopup.waitForDisplayed();
		addProspectPage.cancelButtonOnTaxChangeOptionPopup.click();
		browser.pause(1000);
	}

	verifyBillingSettingsForSubscriber() {
		
		SubscriberDetailsBillingPage.inputInvoiceDay.waitForDisplayed();

		var invoiceDayValue = SubscriberDetailsBillingPage.inputInvoiceDay.getAttribute('value');
		expect(this.invoiceDay).to.eql(invoiceDayValue);

		var invoiceDueDayValue = SubscriberDetailsBillingPage.inputInvoiceDueDay.getAttribute('value');
		expect(this.invoiceDueDate).to.eql(invoiceDueDayValue);

		var termStartDateValue = SubscriberDetailsBillingPage.inputInvoiceTermStartDay.getAttribute('value');
		expect(this.termStartDate).to.eql(termStartDateValue);

	}
	verifyDefaultTaxCycleAsMonthly(){

		addProspectPage.taxCycleOnBillingOption.waitForDisplayed();
		expect(addProspectPage.taxCycleOnBillingOption.getText()).to.eql("Monthly");
		browser.pause(1000);
	}

verifyProspectusAdd() {
	browser.pause(7000);
	addProspectPage.subscriberName.waitForDisplayed();
	expect(addProspectPage.subscriberName.getText()).to.eql(' '+this.firstName+' '+this.lastName);
}
verifyPaperInvoiceUnchecked() {
	addProspectPage.btnBillingOption.click();
	browser.pause(4000);
	expect(addProspectPage.checkBoxPaperInvoice.getAttribute('class').includes('Mui-checked')).to.be.false;
}
verifyLateFeesSettingsApplied() {
	addProspectPage.btnTopMenu.click();
	addProspectPage.openInvoiceSetting.click();
	addProspectPage.btnLateFeesInInvoiceSettings.click();
	var valLateFeesFromSettings = addProspectPage.valueDefaultLateFeesInInvoiceSettings.getValue();
	addProspectPage.closeInvoiceSettings.click();
	addProspectPage.btnBillingOption.click();
	browser.pause(3000);
	addProspectPage.lateFees.click();
	addProspectPage.optionsInLateFees.click();
	addProspectPage.listItems[0].click();
	expect(addProspectPage.valueLateFeesBillingOption.getValue()).to.eql('$' + valLateFeesFromSettings);
}
verifyCustomerIdFilledOut() {
	addProspectPage.customerID.waitForDisplayed();
	expect(addProspectPage.customerID.getText().includes('-')).to.be.false;
}
verifyStartUpDate() {
	addProspectPage.btnAdditionalInformation.click();
	addProspectPage.setUpDate.waitForDisplayed();
	var val = addProspectPage.setUpDate.getValue();
	var today = new Date();
	if(today.getMonth()+1 < 9) 
		var date = today.getFullYear()+'-0'+(today.getMonth()+1)+'-'+today.getDate();
	else 
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	expect(val).to.eql(date);
}
verifyPaidThroughDate() {
	addProspectPage.btnPayments.click();
	var val = addProspectPage.paidThrough.getText();
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	var today = new Date();
	expect(val).to.eql(monthNames[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear());
}
verifyLogHistory() {
	addProspectPage.btnLogs.click();
	browser.pause(5000);
	addProspectPage.openLogDetails.click();
	browser.pause(5000);
	 expect((addProspectPage.prospectCreationLog.getText()).includes('successfully created.')).to.be.true;
	 expect((addProspectPage.prospectCreationLog.getText()).includes('Company: '+this.companyName)).to.be.true;
	 expect((addProspectPage.prospectCreationLog.getText()).includes('First Name: '+this.firstName)).to.be.true;
	 expect((addProspectPage.prospectCreationLog.getText()).includes('Last Name: '+this.lastName)).to.be.true;
	 expect((addProspectPage.prospectCreationLog.getText()).includes('Address 1: '+this.currentAddress1)).to.be.true;
}
verifyLatLan() {
	var zeroVal = 'lat: 0, lng: 0';
	addProspectPage.inputCompanyName.click();
	expect(addProspectPage.latitudeLangitude.getText()).not.eql(zeroVal);
	expect(addProspectPage.inputAddress.getValue()).to.eql(this.currentAddress1);
}
verifyGracePeriodApply() {
	browser.pause(3000);
	addProspectPage.btnBillingOption.click();
	if(addProspectPage.billingGraceCheckboxCheckStatus.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
	{
		addProspectPage.billingGraceCheckBox.click();
		addProspectPage.btnCloseGracePopUp.click();
	}
	expect((addProspectPage.pGracePeriodInBillingOption.getText()).includes(this.gracePeriodAppliedSetting + ' days,')).to.be.true;
}

verifyAutoActionSettingsApplied() {
	browser.pause(2000);
	addProspectPage.btnBillingOption.click();
	browser.pause(2000);
	expect((addProspectPage.discriptionAutoActionInBillingOptions.getText()).includes(this.AutoActiongAppliedSetting)).to.be.true;
}


fillProspectForm(args) {
	this.companyName = 'Rynex';
	this.firstName = 'Testing';
	this.lastName = 'Paul';
	this.currentAddress1 = 'Madrid';
	if(args == 'fullActionPerform') {
		
		addProspectPage.inputCompanyName.setValue(this.companyName);
		addProspectPage.inputFirstName.setValue(this.firstName);
		addProspectPage.inputLastName.setValue(this.lastName);
		addProspectPage.inputAddress.setValue(this.currentAddress1);
		addProspectPage.btnNext.click();
		browser.pause(1000);
		addProspectPage.switchToogle.waitForDisplayed();
		if(addProspectPage.switchToogle.getAttribute('class').includes('Mui-checked') === 'false')
			addProspectPage.switchToogle.click();
		addProspectPage.btnAdd.click();
	}
	else if(args === 'onlyRequiredDetails') {
		addProspectPage.inputCompanyName.setValue(this.companyName);
		addProspectPage.inputFirstName.setValue(this.firstName);
		addProspectPage.inputLastName.setValue(this.lastName);
		addProspectPage.inputAddress.setValue(this.currentAddress1);
	}
	else {}
}

ensureGracePeriodSettingsApplied()
	{
		addProspectPage.btnTopMenu.click();
		addProspectPage.btnAutoActions.click();
		var val;
		if(addProspectPage.checkBoxGracePeriods.getAttribute('checked'))
			val = addProspectPage.graceDaysInAutoAction.getText();
		else {
			addProspectPage.checkBoxGracePeriods.click();
			addProspectPage.graceDaysInAutoAction.click();
			addProspectPage.listItems[1].click();
			val = addProspectPage.graceDaysInAutoAction.getText();
			browser.pause(2000);
			addProspectPage.btnSaveTopMenu.click();
		}
		browser.pause(2000);
		addProspectPage.btnCloseAutoAction.click();
		if(addProspectPage.btnYesConfirmation.isExisting())
		{
			addProspectPage.btnYesConfirmation.click();
		}
		this.gracePeriodAppliedSetting = val;
		browser.pause(2000);
	}
	ensureAutoActionSettingsApplied()
	{
		addProspectPage.btnTopMenu.click();
		browser.pause(1000);
		addProspectPage.btnAutoActions.click();
		var val;
		if(addProspectPage.checkBoxAutoAction.getAttribute('checked'))
			val = addProspectPage.discriptionAutoAction[2].getText();
		else {
		addProspectPage.checkBoxAutoAction.click();
		val = addProspectPage.discriptionAutoAction[2].getText();
		browser.pause(2000);
		addProspectPage.btnSaveTopMenu.click();
		}
		browser.pause(2000);
		addProspectPage.btnCloseAutoAction.click();
		if(addProspectPage.btnYesConfirmation.isExisting())
		{
			addProspectPage.btnYesConfirmation.click();
		}
		this.AutoActiongAppliedSetting = val;
	}



}
module.exports = new SDaddTaskActions();