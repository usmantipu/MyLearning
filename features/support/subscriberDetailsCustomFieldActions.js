const customFieldsPage = require('../pageobjects/subscriberDetailsCustomeFields.page');
var Utils = require('./utils');
var expect = require('chai').expect;
var should = require('chai').should();

class subscriberDetailsCustomFieldActions{
	
	constructor(){
		this.message;
        this.allcustomFieldsList;
		this.allcustomFieldsListfromSubs;
		this.saveSuccessMessage = 'Saved Successfully';
		this.customFieldOne;
		this.customFieldTwo;
		this.customFieldThree;
		this.customFieldFourth;
		this.allExistingCustomFieldsValues;
	}
	
	loginToVisp(creds){
		var credentials = creds.raw();		
		Utils.login(credentials[0][0], credentials[0][1]);
		/*
		LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(credentials[0][0]);
		LoginPage.passwordf.setValue(credentials[0][1]);
		LoginPage.logbutton.click();
		
		//Utils.closeRatingPopup();
		//Utils.closeWalkMe();
		console.log('I login using given credentials');
		browser.maximizeWindow();*/
	}

    gotoCustomFieldsInAppsSettings()
	{
		customFieldsPage.btnAppIcon.click();
		browser.pause(3000);
		customFieldsPage.btnCustomfieldsFromMenu.click();
		browser.pause(2000);
		
	}

    getListofEnabledCustomFields()
    {
        var allCustomFields = customFieldsPage.getallEnabledCustomfields;
        var allcustomFieldsArray = new Array()
		for(var i=0; i<allCustomFields.length; i++)
		{
			allCustomFields[i].getText();
			browser.pause(1000);
            allcustomFieldsArray[i] = allCustomFields[i].getText();
		}
        this.allcustomFieldsList = allcustomFieldsArray;
        console.log('list = '+ this.allcustomFieldsList);
	}

    clickCloseIcon()
    {
        customFieldsPage.btnCloseTopMenu.click();
	}

	clickCustomFieldsTab()
    {
        customFieldsPage.btnCustomFieldsTab.click();
	}

	clickAdditionalInfoTab()
    {
        customFieldsPage.btnAdditionalInfoTab.click();
	}

	clickCancelBtn()
    {
        customFieldsPage.cancelBtnCustomFields.click();
	}

	clickSaveBtn()
    {
        customFieldsPage.saveBtnCustomFields.click();
	}

	clearFieldsBeforeInput()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var allCustomFieldsTextboxes = customFieldsPage.customTextFields;
		for(var i=0; i<allCustomFieldsTextboxes.length; i++)
		{
			allCustomFieldsTextboxes[i].click();
			browser.pause(500);
			allCustomFieldsTextboxes[i].keys(clearKeys);
		}

	}

	genUniqueMAC(){
		var hexDigits = "0123456789ABCDEF";
		var macAddress = "";
		for (var i = 0; i < 6; i++) {
			macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
			macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
			if (i != 5) macAddress += ":";
		}
		return macAddress;
	}
	genUniqueIPAddress(){
		return (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
	}

	enterDataInCustomFields(values,ipaddress,macAddress)
	{
		this.clickCustomFieldsTab();	
		var allCustomFieldsTextboxes = customFieldsPage.customTextFields;
		var dataToPass = values.raw();
		this.clearFieldsBeforeInput();
		this.customFieldOne = dataToPass[0][0];
		this.customFieldTwo = dataToPass[0][1];
		this.customFieldThree = ipaddress;
		this.customFieldFourth = macAddress;
		allCustomFieldsTextboxes[0].setValue(this.customFieldOne);
		allCustomFieldsTextboxes[1].setValue(this.customFieldTwo);
		allCustomFieldsTextboxes[2].setValue(this.customFieldThree);
		allCustomFieldsTextboxes[3].setValue(this.customFieldFourth);       
	}

	CompareCustomFieldsfromTabAndVerify()
    {
		this.clickCustomFieldsTab();
		var allCustomFieldsfromSubs = customFieldsPage.getAllCustomFieldsLabelsFromSubscribers;
        var allCustomFieldsArray = new Array()      
		for(var i=0; i<allCustomFieldsfromSubs.length; i++)
		{
            allCustomFieldsArray[i] = allCustomFieldsfromSubs[i].getText();
		}
		browser.pause(2000);
        this.allcustomFieldsListfromSubs = allCustomFieldsArray;
		expect(allCustomFieldsArray).to.eql(this.allcustomFieldsList);
	}

	getCustomFieldsInSubscribers()
    {
		this.clickAdditionalInfoTab();
		this.clickCustomFieldsTab();
		this.allExistingCustomFieldsValues = customFieldsPage.getAllCustomFieldsFromSubscribers;
        var customFieldsValue;
		for(var i=0; i<this.allExistingCustomFieldsValues.length; i++)
		{
            customFieldsValue = this.allExistingCustomFieldsValues[i].getAttribute('value');
			console.log('Existing Value = '+ customFieldsValue);
			browser.pause(1000);
		}
	}

	verifyEmptyCustomFieldsInSubscribers()
    {
		this.clickAdditionalInfoTab();
		this.clickCustomFieldsTab();
		var allCustomFieldsfromSubs = customFieldsPage.getAllCustomFieldsFromSubscribers;
        var customFieldsValue;
		for(var i=0; i<allCustomFieldsfromSubs.length; i++)
		{
            customFieldsValue = allCustomFieldsfromSubs[i].getAttribute('value');
			console.log('Value after reset = '+ customFieldsValue);
			expect(customFieldsValue).to.eql(this.allExistingCustomFieldsValues[i].getAttribute('value'));
			browser.pause(1000);
		}
	}

	saveCustomFieldSettings()
	{
		customFieldsPage.btnSaveSettings.click();
		browser.pause(2000);
	}

	setSecondCustomFieldAsEmail(fieldType)
	{
		browser.pause(3000);
		if(customFieldsPage.getInputValue(customFieldsPage.secondCustomFiledFromSettings).getAttribute('value')==='('+fieldType+')'){}
		else{
			customFieldsPage.secondCustomFiledFromSettings.click();
			browser.pause(3000);
			customFieldsPage.selectCustomFiledType(fieldType).click();
			customFieldsPage.btnConfirmationYes.click();
			this.saveCustomFieldSettings();
		}
	}

	setThirdCustomFieldAsEmail(fieldType)
	{
		browser.pause(3000);
		if(customFieldsPage.getInputValue(customFieldsPage.thirdCustomFieldFromSettings).getAttribute('value')==='('+fieldType+')'){}
		else{
			customFieldsPage.thirdCustomFieldFromSettings.click();
			browser.pause(3000);
			customFieldsPage.selectCustomFiledType(fieldType).click();
			customFieldsPage.btnConfirmationYes.click();
			this.saveCustomFieldSettings();
		}
	}

	setFourthCustomFieldAsEmail(fieldType)
	{
		browser.pause(3000);
		if(customFieldsPage.getInputValue(customFieldsPage.fourthCustomFieldFromSettings).getAttribute('value')==='('+fieldType+')'){}
		else{
			customFieldsPage.fourthCustomFieldFromSettings.click();
			browser.pause(3000);
			customFieldsPage.selectCustomFiledType(fieldType).click();
			customFieldsPage.btnConfirmationYes.click();
			this.saveCustomFieldSettings();
		}
	}

	verifyChangesSaved()
	{
		customFieldsPage.isMsgExist(this.saveSuccessMessage).waitForDisplayed();
		expect(customFieldsPage.isMsgExist(this.saveSuccessMessage).isExisting()).to.be.true;
	}

	verifyFieldsValuePersists()
	{
		browser.pause(4000);
		var allCustomFieldsTextboxes = customFieldsPage.customTextFields;
		expect(allCustomFieldsTextboxes[0].getAttribute('value')).to.eql(this.customFieldOne);
		expect(allCustomFieldsTextboxes[1].getAttribute('value')).to.eql(this.customFieldTwo);
		expect(allCustomFieldsTextboxes[2].getAttribute('value')).to.eql(this.customFieldThree);
		expect(allCustomFieldsTextboxes[3].getAttribute('value')).to.eql(this.customFieldFourth);
	}

	verifyEmailValidationErrorMsg()
	{
		browser.pause(2000);
		expect(customFieldsPage.emailValidationErrorMsg.isExisting()).to.be.true;
	}

	verifySaveButtonIsNotClickable()
	{
		browser.pause(2000);
		expect(customFieldsPage.saveBtnCustomFields.isClickable()).to.be.false;
	}

	verifyIpAddressValidationErrorMsg()
	{
		browser.pause(2000);
		expect(customFieldsPage.ipAddressErrorMsg.isExisting()).to.be.true;
	}

	verifymacAddressValidationErrorMsg()
	{
		browser.pause(2000);
		expect(customFieldsPage.macAddressErrorMsg.isExisting()).to.be.true;
	}
}


module.exports = new subscriberDetailsCustomFieldActions();