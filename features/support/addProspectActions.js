var LoginPage = require('../pageobjects/login.page');
//var SubListPage = require('../pageobjects/subscriberlist.page');
//var subscriberDetailsContact_two = require("../pageobjects/subscriberDetailsContact_two.page");
//var subscriberDetailsContactAction = require("../support/subscriberDetailsContact_twoActions");
var SubscriberDetailsBillingPage = require('../pageobjects/subscriberDetailsBilling.page');
var addProspectPage = require('../pageobjects/addProspect.page');
//var Utils = require('./utils');
var subscriberDetailsBillingActions = require('./subscriberDetailsBillingActions');
const { openInvoiceSettingFromTopRightMenu } = require('./subscriberDetailsBillingActions');
//const { stat } = require('@babel/core/lib/gensync-utils/fs');
var expect = require('chai').expect; 
//var should = require('chai').should();

class addProspectActions{
	
	constructor(){
		this.randomNumber;
		this.firstName;
		this.lastName;
		this.currrentUsername;
		this.currentPassword;
		this.setUsername;
		this.setPassword;
		this.currentCity;
		this.currentState;
		this.currentAddress1;
		this.currentAddress2;
		this.currentZipCode;
		this.currentCellPhone;
		this.currentEmail;
		this.randomValidEmail;
		this.randomString;
		this.invoiceDay;
		this.invoiceDueDate;
		this.termStartDate;
		this.taxElements;
		this.companyName;
	}
	


	// clickGlobalCreateMenu() {

	// 	addProspectPage.globalCreateMenu.waitForDisplayed();
	// 	browser.pause(3000);
	// 	addProspectPage.globalCreateMenu.waitForClickable();
	// 	addProspectPage.globalCreateMenu.click();
	// 	browser.pause(3000);
	// }

	// clickAddProspectOption() {
	// 	addProspectPage.addProspectOrSubscriberOption.waitForDisplayed();
	// 	browser.pause(1000);
	// 	addProspectPage.addProspectOrSubscriberOption.waitForClickable();
	// 	addProspectPage.addProspectOrSubscriberOption.click();
	// 	browser.pause(1000);
	// }

	verifyAddProspectInterfaceOpened() {
		addProspectPage.addProspectTab.waitForDisplayed();
		browser.pause(1000);
		expect(addProspectPage.addProspectTab.getText()).to.eql("Add Prospect or Subscriber *");
		browser.pause(1000);
	}

	sectionsAreVisibleOnProspectPanel() {
		browser.pause(7000);
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
		addProspectPage.checkboxAlsoTheBillingContact.waitForDisplayed();
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
		//browser.pause(500);
		//addProspectPage.address1ProspectPage.click();
		//this.clearFieldValue(addProspectPage.address1ProspectPage);
		browser.pause(3000);		
		//addProspectPage.address1ProspectPage.keys("9450 SW");
		addProspectPage.inputAddress.waitForDisplayed();
		addProspectPage.inputAddress.setValue('9450 Southwest Gemini Drive');
		browser.pause(5000);
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(3000);
		// save the current address  
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
		this.currentAddress1 = addProspectPage.address1ProspectPage.getValue();
	}

	clickNextButton(){
		
		addProspectPage.nextButtonProspectPage.waitForDisplayed();
		addProspectPage.nextButtonProspectPage.waitForClickable();
		browser.pause(1000);
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
		console.log("Temp number = " + tempPhone + " and trimmed number = " + trimmedPhoneNumber);
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

		// Uncommented
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
		this.currrentUsername=addProspectPage.usernameValue.getAttribute('value').trim();
		//addProspectPage.passwordValue.waitForDisplayed();
		//this.currentPassword=addProspectPage.passwordValue.getAttribute('value');
		expect(this.currrentUsername).to.eql(this.setUsername.trim());
		//expect(this.currentPassword).to.eql(this.setPassword);
		
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
		addProspectPage.btnBillingOption.waitForClickable();
		addProspectPage.btnBillingOption.click();
		browser.pause(1000);
	}

	openTaxDropdown() {
		browser.pause(1000);
		SubscriberDetailsBillingPage.selectBillingOptionsTaxId.waitForDisplayed();
		SubscriberDetailsBillingPage.selectBillingOptionsTaxId.waitForClickable();
		SubscriberDetailsBillingPage.selectBillingOptionsTaxId.click();
		browser.pause(1000);
	}

	applyTaxProfileFromDropdown(){

		//click first value in dropdown (not empty).
		browser.pause(1000);
		SubscriberDetailsBillingPage.optionsTaxId[1].waitForDisplayed();
		SubscriberDetailsBillingPage.optionsTaxId[1].waitForClickable();
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
	addProspectPage.btnTopMenu.waitForDisplayed();
	addProspectPage.btnTopMenu.waitForClickable();
	addProspectPage.btnTopMenu.click();
	addProspectPage.btnSettingsBilling.waitForDisplayed();
	addProspectPage.btnSettingsBilling.waitForClickable();
	addProspectPage.btnSettingsBilling.click();
	addProspectPage.openInvoiceSetting.waitForDisplayed();
	addProspectPage.openInvoiceSetting.waitForClickable();
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
	addProspectPage.btnAdditionalInformation.waitForDisplayed();
	addProspectPage.btnAdditionalInformation.waitForClickable();
	addProspectPage.btnAdditionalInformation.click();
	addProspectPage.setUpDate.waitForDisplayed();
	var val = addProspectPage.setUpDate.getValue();
	var today = new Date();
	var currentdate = this.formatDate(today);
	if(val < currentdate)
	{
		expect(val).to.eql(this.formatDate(this.AddOrSubractDays(new Date(), 1, false)));//past
	}
	else if(val > currentdate)
	{
		expect(val).to.eql(this.formatDate(this.AddOrSubractDays(new Date(), 1, true)));//future
	}
	else{
		expect(val).to.eql(currentdate);
	}
}
verifyPaidThroughDate() {
	addProspectPage.btnPayments.click();
	var val = addProspectPage.paidThrough.getText();
	// const monthNames = ["January", "February", "March", "April", "May", "June",
	// 	"July", "August", "September", "October", "November", "December"
	// ];
	// var currentdate = new Date();
	// currentdate = monthNames[currentdate.getMonth()] + " " + currentdate.getDate() + " " + currentdate.getFullYear();
	var today = new Date();

	// var dd = String(today.getDate()).padStart(2, '0'); // before
	var dd = String(today.getDate()); // after
	var mm = today.toLocaleDateString(undefined, { month: 'long'});
	var yyyy = today.getFullYear();
	var currentDate = mm + ' ' + dd + ' ' + yyyy;
	if(val < currentDate)
	{
		var newDatecurrentDate = mm + ' ' + (today.getDate()-1) + ' ' + yyyy;
		console.log('new current date is'+newDatecurrentDate);
		expect(val).to.eql(newDatecurrentDate);
	}
	else if(val > currentDate)
	{
		var newDatecurrentDate = mm + ' ' + (today.getDate()+1) + ' ' + yyyy;
		console.log('new current date is'+newDatecurrentDate);
		expect(val).to.eql(newDatecurrentDate);
	}
	else{
		expect(val).to.eql(currentDate);
	}
}
formatDate(date)
{
	var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}
AddOrSubractDays(startingDate, number, add)
{
	if (add) {
		return new Date(new Date().setDate(startingDate.getDate() + number));
	  } else {
		return new Date(new Date().setDate(startingDate.getDate() - number));
	  }
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
	var zeroVal = '0';
	addProspectPage.inputCompanyName.click();
	expect(addProspectPage.latitude.getValue()).not.eql(zeroVal);
	expect(addProspectPage.longitude.getValue()).not.eql(zeroVal);
	expect(addProspectPage.address1ProspectPage.getValue()).to.eql(this.currentAddress1);
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
		addProspectPage.btnTopMenu.waitForDisplayed();
		addProspectPage.btnTopMenu.waitForClickable();
		addProspectPage.btnTopMenu.click();
		addProspectPage.btnSettingsBilling.waitForDisplayed();
		addProspectPage.btnSettingsBilling.waitForClickable();
		addProspectPage.btnSettingsBilling.click();
		addProspectPage.btnAutoActions.waitForDisplayed();
		addProspectPage.btnAutoActions.waitForClickable();
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
		addProspectPage.btnTopMenu.waitForDisplayed();
		addProspectPage.btnTopMenu.waitForClickable();
		addProspectPage.btnTopMenu.click();
		browser.pause(1000);
		addProspectPage.btnSettingsBilling.waitForDisplayed();
		addProspectPage.btnSettingsBilling.waitForClickable();
		addProspectPage.btnSettingsBilling.click();
		addProspectPage.btnAutoActions.waitForDisplayed();
		addProspectPage.btnAutoActions.waitForClickable();
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
module.exports = new addProspectActions();
