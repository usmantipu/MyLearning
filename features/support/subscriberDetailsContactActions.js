var LoginPage = require("../pageobjects/login.page");
var subscriberDetailsContactPage = require("../pageobjects/subscriberDetailsContact.page");
const subscriberlistActions = require("./subscriberlistActions");
var Utils = require("./utils");
var expect = require("chai").expect;
var should = require("chai").should();
const SubscriberDetailsBillingPage = require("../pageobjects/subscriberDetailsBilling.page");

class subscriberDetailsContactActions {
  constructor() {
        this.allContactFieldsList;//TA-65
        this.companyName;//TA-65
        this.addressNCity;//TA-65
        this.phoneNumber;//TA-65
        this.contactEmail;//TA-65
        this.internationalStatus;
        this.errorTextFirstname = 'First Name is required';//TA-65
        this.errorTextLastname = 'Last Name is required.';//TA-65
        this.errorTextAddress1 = 'Address Line 1 is required.';//TA-65
        this.errorTextCity = 'City is required';//TA-65
        this.saveSuccessMessage = 'Saved Successfully';//TA-65
        this.cityUpdated = 'New York';//TA-65
        this.BillingLastRequired='Last Name is required';
        this.BillingFirstRequired='First Name is required';
    this.serviceactivated = "Service is activated successfully.";
    this.billingContactStatus = false;
	this.oldValue_companyBillingContact; 
	this.oldValue_firstNameBillingContact;
  this.oldValue_miNameBillingContact;
	this.oldValue_lastNameBillingContact;
	this.oldValue_address2BillingContact;
  this.oldValue_address1BillingContact;
  this.oldValue_phoneBillingContact;
  this.oldValue_workPhoneBillingContact;
  this.oldValue_cityBillingContact;
  this.oldValue_cellPhoneBillingContact;
	this.oldValue_zipFieldBillingContact;
  this.oldValue_faxBillingContact;
	this.oldValue_emailAddressBillingContact;
    this.statusName;
    this.stateValue;
	this.randomValidEmail;
	this.randomString;
    this.digits;
    this.currentAddress;
    this.statesList = [
      "AL - Alabama",
      "CA - California",
      "FL - Florida",
      "IA - Iowa",
      "ME - Maine",
      "NV - Nevada",
      "OH - Ohio",
      "PW - Palau",
      "TX - Texas",
      "WY - Wyoming",
    ];
    this.newAddress = [
      "500 West Madison Street",
      "60661",
      "225 Liberty Street",
      "10281",
    ];
  }
  openVispApp() {
    SubAddPackagePage.open();
  }

  loginToVisp(login, password) {
    Utils.login(login, password);
  }

  //#region TA-65 whenaction
  clickEditIconSvg(){
    browser.pause(5000);
    subscriberDetailsContactPage.btnEditIcon.waitForClickable({ timeout: 9000 });
    subscriberDetailsContactPage.btnEditIcon.click();
    browser.pause(2000);
  }

  emptyContactFirstName(){
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
    subscriberDetailsContactPage.editFirstName.click();
    browser.pause(500);
    subscriberDetailsContactPage.editFirstName.keys(clearKeys);
    browser.pause(1000);
  }

  emptyContactLastName()
  {
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subscriberDetailsContactPage.editLastName.click();
		browser.pause(500);
		subscriberDetailsContactPage.editLastName.keys(clearKeys);
    browser.pause(1000);
  }
  removeContactAddress()
  {
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subscriberDetailsContactPage.editAddressValue.click();
		browser.pause(500);
		subscriberDetailsContactPage.editAddressValue.keys(clearKeys);
    browser.pause(1000);
  }
  verifyInternationalAddressIsDisabled(){
    subscriberDetailsContactPage.btnAppIcon.waitForDisplayed();
    subscriberDetailsContactPage.btnAppIcon.waitForClickable();
    subscriberDetailsContactPage.btnAppIcon.click();
    subscriberDetailsContactPage.btnSettingsCRM.waitForDisplayed();
    subscriberDetailsContactPage.btnSettingsCRM.waitForClickable();
    subscriberDetailsContactPage.btnSettingsCRM.click();
    subscriberDetailsContactPage.btnPortalsfromMenu.waitForDisplayed();
    subscriberDetailsContactPage.btnPortalsfromMenu.waitForClickable();
    subscriberDetailsContactPage.btnPortalsfromMenu.click();
    subscriberDetailsContactPage.btnOnlineSignupinPortals.click();
    subscriberDetailsContactPage.settingsPortalDrawer.scrollIntoView();
    browser.pause(2000);
    subscriberDetailsContactPage.checkboxInternationlAddressAllowed.scrollIntoView();
    var status = subscriberDetailsContactPage.checkboxInternationlAddressAllowed.getAttribute('value');
    if(status==='true'){
        subscriberDetailsContactPage.checkboxInternationlAddressAllowed.click();
        subscriberDetailsContactPage.btnSavePortalSettings.click();
        browser.pause(4000);
        status = subscriberDetailsContactPage.checkboxInternationlAddressAllowed.getAttribute('value');
        //console.log("value of checkbox= " +status);
    }
    this.internationalStatus = status;
    browser.pause(2000);
    subscriberDetailsContactPage.btnCloseTopMenu.click();    
    browser.pause(1000);
  }

  removeContactCityToSave()
  {
    browser.pause(5000);
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subscriberDetailsContactPage.editAddressTwoValue.click();
    subscriberDetailsContactPage.editAddressTwoValue.keys(clearKeys);
		browser.pause(1000);
    this.cityUpdated = 'Auto' + (Math.floor(new Date() / 1000));
    subscriberDetailsContactPage.editAddressTwoValue.setValue(this.cityUpdated);
    browser.pause(1000);
    subscriberDetailsContactPage.editCityValue.click();
    browser.pause(1000);
		subscriberDetailsContactPage.editCityValue.keys(clearKeys);
    browser.pause(2000);
  }

  saveContactChanges()
  {
    subscriberDetailsContactPage.btnSaveEdits.waitForDisplayed();
    subscriberDetailsContactPage.btnSaveEdits.click();
  }
  verifyInternationalAddressIsEnabled()
  {
    subscriberDetailsContactPage.btnAppIcon.click();
        subscriberDetailsContactPage.btnPortalsfromMenu.click();
        subscriberDetailsContactPage.btnOnlineSignupinPortals.click();
        subscriberDetailsContactPage.settingsPortalDrawer.scrollIntoView();
        browser.pause(2000);
        var status = subscriberDetailsContactPage.checkboxInternationlAddressAllowed.getAttribute('value');
        if(status=='false'){
            subscriberDetailsContactPage.checkboxInternationlAddressAllowed.click();
            subscriberDetailsContactPage.btnSavePortalSettings.click();
            browser.pause(500);
            status = subscriberDetailsContactPage.checkboxInternationlAddressAllowed.getAttribute('value');
        }
        browser.pause(5000);
        this.internationalStatus = status;
        subscriberDetailsContactPage.btnCloseTopMenu.click();
        browser.pause(1000);
  }
  enterStateFieldValue()
  {
    browser.pause(4000);
    //subscriberDetailsContactPage.stateFieldBillingContact[1].waitForDisplayed();
    this.stateValue =subscriberDetailsContactPage.primaryContactState.getText();
    console.log('>>>>>>>>>>>>>>>>Previous state value is: ' + this.stateValue);
    subscriberDetailsContactPage.primaryContactStateList.click();
    browser.pause(1000);
    var stateField = subscriberDetailsContactPage.primaryContactStateList;
    var testValue_0123 = ["\uE01A", "\uE01B", "\uE01C", "\uE01D"];
    //stateField.waitForDisplayed();
    stateField.click();
    stateField.keys(testValue_0123);
    browser.pause(1000);
    subscriberDetailsContactPage.editFirstName.click();
    console.log('>>>>>>>>>>>>>>>>Clicked first name field');
    browser.pause(1000);
  }

  saveBillingContactWithBlankFirstName()
  {
    browser.pause(2000);
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subscriberDetailsContactPage.firstNameBillingContact.click();
		browser.pause(500);
		subscriberDetailsContactPage.firstNameBillingContact.keys(clearKeys);
    browser.pause(1000);
  }
  saveBillingContactWithBlankLastName()
  {
    browser.pause(2000);
    var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subscriberDetailsContactPage.lastNameBillingContact.click();
		browser.pause(500);
		subscriberDetailsContactPage.lastNameBillingContact.keys(clearKeys);
    browser.pause(1000);
  }
  //#endregion

  openBillingContactTabAndClickEditIcon() {
    browser.pause(2000);
    
    if (subscriberDetailsContactPage.billingContactTab.isDisplayed() === true) {
      subscriberDetailsContactPage.billingContactTab.click();
      console.log("inside if case, billing Contact Tab is displayed");
      browser.pause(2000);
      subscriberDetailsContactPage.clickEditContactIcon.waitForDisplayed();
      //expect(subscriberDetailsContactPage.clickEditContactIcon.isExisting()).to.be.true;
      subscriberDetailsContactPage.clickEditContactIcon.click();
    }
	else {
		  subscriberDetailsContactPage.clickEditContactIcon.waitForDisplayed();
		  subscriberDetailsContactPage.clickEditContactIcon.click();
		  subscriberDetailsContactPage.checkBoxSameAsBillingContact.waitForDisplayed();
		  subscriberDetailsContactPage.checkBoxSameAsBillingContact.click();
		  this.clearFieldValue(subscriberDetailsContactPage.address2BillingContact);
		  subscriberDetailsContactPage.address2BillingContact.setValue("test");
		  browser.pause(1000);
		  subscriberDetailsContactPage.saveButtonOnContactScreen.waitForDisplayed();
		  subscriberDetailsContactPage.saveButtonOnContactScreen.click();
		  browser.pause(1000);
	  }    
  }

  openBillingContactAndUpdateDetails() {
    browser.pause(2000);

    if (subscriberDetailsContactPage.billingContactTab.isDisplayed() === true) {
      subscriberDetailsContactPage.billingContactTab.click();
      browser.pause(2000);
      subscriberDetailsContactPage.clickEditContactIcon.waitForDisplayed();
      subscriberDetailsContactPage.clickEditContactIcon.click();
    }
	else {
		  subscriberDetailsContactPage.clickEditContactIcon.waitForDisplayed();
		  subscriberDetailsContactPage.clickEditContactIcon.click();
		  subscriberDetailsContactPage.checkBoxSameAsBillingContact.waitForDisplayed();
		  subscriberDetailsContactPage.checkBoxSameAsBillingContact.click();
	  }
    this.randomStringGenerator(5);
    this.clearFieldValue(subscriberDetailsContactPage.companyBillingContact);
    this.oldValue_companyBillingContact =  this.randomString;
    subscriberDetailsContactPage.companyBillingContact.setValue(this.oldValue_companyBillingContact);
    this.randomStringGenerator(5);
    this.clearFieldValue(subscriberDetailsContactPage.firstNameBillingContact);
    this.oldValue_firstNameBillingContact =  this.randomString;
    subscriberDetailsContactPage.firstNameBillingContact.setValue(this.oldValue_firstNameBillingContact);
    this.randomStringGenerator(1);
    this.clearFieldValue(subscriberDetailsContactPage.miBillingContact);
    this.oldValue_miNameBillingContact =  this.randomString;
    subscriberDetailsContactPage.miBillingContact.setValue(this.oldValue_miNameBillingContact);
    this.oldValue_miNameBillingContact = subscriberDetailsContactPage.miBillingContact.getAttribute('value');
    this.randomStringGenerator(5);
    this.clearFieldValue(subscriberDetailsContactPage.lastNameBillingContact);
    this.oldValue_lastNameBillingContact =  this.randomString;
    subscriberDetailsContactPage.lastNameBillingContact.setValue(this.oldValue_lastNameBillingContact);
    this.clearFieldValue(subscriberDetailsContactPage.address1BillingContact);
    this.oldValue_address1BillingContact =  '225 Liberty Street';
    subscriberDetailsContactPage.address1BillingContact.setValue(this.oldValue_address1BillingContact);
    browser.pause(1000);
    browser.keys("\uE015");
    browser.pause(500);
    browser.keys("\uE007");
    this.oldValue_address1BillingContact = subscriberDetailsContactPage.address1BillingContact.getAttribute('value');
    this.clearFieldValue(subscriberDetailsContactPage.address2BillingContact);
    this.oldValue_address2BillingContact = 'New York';
    subscriberDetailsContactPage.address2BillingContact.setValue(this.oldValue_address2BillingContact);
    //this.clearFieldValue(subscriberDetailsContactPage.cityBillingContact);
    this.oldValue_cityBillingContact = 'New York';
    if(subscriberDetailsContactPage.cityBillingContact.getAttribute('value')==='')
    {
      subscriberDetailsContactPage.cityBillingContact.click();
      subscriberDetailsContactPage.cityBillingContact.setValue(this.oldValue_cityBillingContact);
      browser.pause(1000);
      browser.keys("\uE015");
      browser.pause(500);
      browser.keys("\uE007"); 
      browser.pause(1000);
    }
    this.oldValue_cityBillingContact = subscriberDetailsContactPage.cityBillingContact.getAttribute('value');
    this.clearFieldValue(subscriberDetailsContactPage.zipFieldBillingContact);
    this.oldValue_zipFieldBillingContact = '10281'
    subscriberDetailsContactPage.zipFieldBillingContact.setValue(this.oldValue_zipFieldBillingContact);
    browser.pause(1000);
    browser.keys("\uE015");
    browser.pause(500);
    browser.keys("\uE007");
    this.oldValue_zipFieldBillingContact = subscriberDetailsContactPage.zipFieldBillingContact.getAttribute('value'); 
    this.clearFieldValue(subscriberDetailsContactPage.homePhoneBillingContact);
    this.oldValue_phoneBillingContact = this.generateNumberOflength();
    subscriberDetailsContactPage.homePhoneBillingContact.setValue(this.oldValue_phoneBillingContact);
    this.oldValue_phoneBillingContact = subscriberDetailsContactPage.homePhoneBillingContact.getAttribute('value'); 
    browser.pause(2000);
    this.clearFieldValue(subscriberDetailsContactPage.homeworkPhoneBillingContact);
    this.oldValue_workPhoneBillingContact = this.generateNumberOflength();
    subscriberDetailsContactPage.homeworkPhoneBillingContact.setValue(this.oldValue_workPhoneBillingContact);
    this.oldValue_workPhoneBillingContact = subscriberDetailsContactPage.homeworkPhoneBillingContact.getAttribute('value');
    browser.pause(2000);
    this.clearFieldValue(subscriberDetailsContactPage.homecellPhoneBillingContact);
    this.oldValue_cellPhoneBillingContact = this.generateNumberOflength();
    subscriberDetailsContactPage.homecellPhoneBillingContact.setValue(this.oldValue_cellPhoneBillingContact);
    this.oldValue_cellPhoneBillingContact = subscriberDetailsContactPage.homecellPhoneBillingContact.getAttribute('value');
    browser.pause(2000);
    this.clearFieldValue(subscriberDetailsContactPage.homefaxBillingContact);
    this.oldValue_faxBillingContact = this.generateNumberOflength();
    subscriberDetailsContactPage.homefaxBillingContact.setValue(this.oldValue_faxBillingContact);
    this.oldValue_faxBillingContact = subscriberDetailsContactPage.homefaxBillingContact.getAttribute('value');
    browser.pause(2000);
    this.randomStringGenerator(5);
		this.clearFieldValue(subscriberDetailsContactPage.emailAddressBillingContact);
    this.oldValue_emailAddressBillingContact = this.randomValidEmail;
    subscriberDetailsContactPage.emailAddressBillingContact.setValue(this.oldValue_emailAddressBillingContact);
    browser.pause(1000);
		subscriberDetailsContactPage.saveButtonOnContactScreen.waitForDisplayed();
		subscriberDetailsContactPage.saveButtonOnContactScreen.click();
		browser.pause(3000);    
  }
  generateNumberOflength()
  {
    var number = Math.floor(Math.random() * 9000000000).toString();
    for (let i = 0; i <5; i++) {
        if(number.length===10)
            return number
		  }
  }

  saveBillingContactWithBlankAddress() {
    subscriberDetailsContactPage.address1BillingContact.waitForDisplayed();
    var address1 = subscriberDetailsContactPage.address1BillingContact;
    this.clearFieldValue(address1);
    browser.pause(1000);
  }

  clearFieldValue(element) {
    var address = element;
    var clearKeys = ["\uE011", "\uE008", "\uE010", "\uE017"];

    address.waitForDisplayed();
    address.click();
    address.keys(clearKeys);
    browser.pause(1000);
  }

  verifyInternationalAddressStatus(status) {
    browser.pause(1000);
    //var statusRaw = status.raw();
    //this.statusName = statusRaw[0][0];
    status = status.replace(/['"]+/g, '');
    this.statusName = status;
    subscriberDetailsContactPage.settingsIcon.waitForDisplayed();
    subscriberDetailsContactPage.settingsIcon.click();
    subscriberDetailsContactPage.btnSettingsCRM.waitForDisplayed();
    subscriberDetailsContactPage.btnSettingsCRM.waitForClickable();
    subscriberDetailsContactPage.btnSettingsCRM.click();
    subscriberDetailsContactPage.portalsIcon.waitForDisplayed();
    subscriberDetailsContactPage.portalsIcon.waitForClickable();
    subscriberDetailsContactPage.portalsIcon.click();

    subscriberDetailsContactPage.onlineSignUp.waitForDisplayed();
    subscriberDetailsContactPage.onlineSignUp.click();
    browser.pause(1000);

    subscriberDetailsContactPage.internationalAddress.scrollIntoView();
    var internationAddressCurrentState =subscriberDetailsContactPage.internationalAddress.getAttribute("value");
    switch (this.statusName) {
      case "enabled":
        if (internationAddressCurrentState === "false") {
          browser.pause(1000);
          subscriberDetailsContactPage.internationalAddress.click();
          browser.pause(1000);
          subscriberDetailsContactPage.saveButtonOnSettings.waitForDisplayed();
          subscriberDetailsContactPage.saveButtonOnSettings.click();
          browser.pause(3000);
        }
        break;

      case "disabled":
        if (internationAddressCurrentState === "true") {
          browser.pause(1000);
          subscriberDetailsContactPage.internationalAddress.click();
          browser.pause(1000);
          subscriberDetailsContactPage.saveButtonOnSettings.waitForDisplayed();
          subscriberDetailsContactPage.saveButtonOnSettings.click();
          browser.pause(3000);
        }
        break;
    }

    browser.pause(1000);
    this.internationalStatus = subscriberDetailsContactPage.internationalAddress.getAttribute("value");
    SubscriberDetailsBillingPage.btnCloseInvoiceSetting.waitForDisplayed();
    SubscriberDetailsBillingPage.btnCloseInvoiceSetting.click();
  }

  saveWithBlankCityField() {
    subscriberDetailsContactPage.cityField.waitForDisplayed();

    // if city field is already empty, it changes the value of Address2 field to make the save button enabled.
    if (subscriberDetailsContactPage.cityField.getAttribute("value") === "") {
      console.log("if case: city field was already clear");
      subscriberDetailsContactPage.address2BillingContact.waitForDisplayed();
      this.clearFieldValue(subscriberDetailsContactPage.address2BillingContact);
      var tempValue = Math.floor(Math.random() * 1000);
      subscriberDetailsContactPage.address2BillingContact.setValue(tempValue);
    } else {
      this.clearFieldValue(subscriberDetailsContactPage.cityField); // clear city field values
      console.log("else case: City Field cleared");
      browser.pause(1000);
    }
  }

  setInvalidValueInStateField() {
    subscriberDetailsContactPage.stateFieldBillingContact[1].waitForDisplayed();
    this.stateValue =
      subscriberDetailsContactPage.stateFieldBillingContact[1].getText();
    subscriberDetailsContactPage.stateFieldBillingContact[1].click();
    var stateField = subscriberDetailsContactPage.stateFieldBillingContact[1];
    var testValue_0123 = ["\uE01A", "\uE01B", "\uE01C", "\uE01D"];
    stateField.waitForDisplayed();
    stateField.click();
    stateField.keys(testValue_0123);
    subscriberDetailsContactPage.zipFieldBillingContact.click();// to click outside the State field
  }

  getValueOfExistingAddress() {
    subscriberDetailsContactPage.address1BillingContact.waitForDisplayed();
    this.currentAddress =
      subscriberDetailsContactPage.address1BillingContact.getAttribute("value"); // get the value of existingAddress.
  }

  setNewAddress() {
    subscriberDetailsContactPage.address1BillingContact.waitForDisplayed();
    var address1 = subscriberDetailsContactPage.address1BillingContact;

    if (this.currentAddress === this.newAddress[0]) {
      address1.click();
      browser.pause(500);
      this.clearFieldValue(address1);
      address1.keys("225");
      browser.pause(3000);
      address1.keys("\uE015"); // press down arrow key to select the first adress of the list.
      browser.pause(1500);
      address1.keys("\uE007"); // press enter key
      browser.pause(3000);
      subscriberDetailsContactPage.saveButtonOnContactScreen.click();
      browser.pause(1000);
    } 
	else {
      address1.click();
      browser.pause(500);
      this.clearFieldValue(address1);
      address1.keys("500");
      browser.pause(3000);
      address1.keys("\uE015"); // press down arrow key to select the first adress of the list.
      browser.pause(1500);
      address1.keys("\uE007"); // press enter key
      browser.pause(3000);
      subscriberDetailsContactPage.saveButtonOnContactScreen.click();
      browser.pause(1000);
    }
    // console.log("--the new address is: ", address1.getAttribute('value'));
    this.currentAddress = address1.getAttribute('value');
    // console.log("-- this.current address is: ", this.currentAddress)
  }

  checkZipFieldAsPerAddress() {
    subscriberDetailsContactPage.address1BillingContact.waitForDisplayed();
    // var address1 = subscriberDetailsContactPage.billingContactAddress1;
    var currentZip =
      subscriberDetailsContactPage.zipFieldBillingContact.getAttribute("value");
      console.log(currentZip);

    if (this.currentAddress === this.newAddress[0]) {
      expect(currentZip).to.eql(this.newAddress[1]);
      console.log("new address was 500,", this.newAddress[0], "----new zip should be: ", this.newAddress[1]);
    }

    if (this.currentAddress === this.newAddress[2]) {
      expect(currentZip).to.eql(this.newAddress[3]);
      console.log("new address was 225,", this.newAddress[2], "----new zip should be: ", this.newAddress[3]);
    }
  }
  
  enterValidPhoneNumber() {
    let length = 10;
    this.digits = Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1)).toString();
    //this.digits = Math.floor(Math.random() * 9000000000).toString();
    //console.log("**Random Phone Number: ",this.digits);

    subscriberDetailsContactPage.homePhoneBillingContact.waitForDisplayed();
    this.clearFieldValue(subscriberDetailsContactPage.homePhoneBillingContact);
    browser.pause(1000);
    subscriberDetailsContactPage.homePhoneBillingContact.setValue(this.digits);

  }

  validatePhoneNumber() {
    var digit1 = this.digits.slice(0, 3);
    var digit2 = this.digits.slice(3, 6);
    var digit3 = this.digits.slice(6, 10);
    var savedDigit = "(".concat(digit1, ") ", digit2, "-", digit3);
    //console.log("** The phone number should be: ",savedDigit);
    this.phoneNumberValidation(savedDigit);
    expect(savedDigit).to.eql(
      subscriberDetailsContactPage.homePhoneBillingContact.getAttribute("value")
    );
  }

  phoneNumberValidation(inputtxt) {
    var phoneno = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if (inputtxt.match(phoneno)) {
      console.log("phone number validated");
    } else {
      console.log("phone number not validated");
    }
  }

  enterEmailAddress(status) {
	browser.pause(1000);
    //var statusRaw = status.raw();
    //var statusName = statusRaw[0][0];tagCategory = tagCategory.replace(/['"]+/g, '');
    status = status.replace(/['"]+/g, '');
    var statusName = status;
	subscriberDetailsContactPage.emailAddressBillingContact.waitForDisplayed();
	subscriberDetailsContactPage.emailAddressBillingContact.click();
	this.clearFieldValue(subscriberDetailsContactPage.emailAddressBillingContact) // clear existing value of email addrss.
	this.randomStringGenerator();
	browser.pause(1000);
	if (statusName === 'valid') {
		subscriberDetailsContactPage.emailAddressBillingContact.setValue(this.randomValidEmail);
	}
	if (statusName === 'invalid') {
		subscriberDetailsContactPage.emailAddressBillingContact.setValue(this.randomString);
	}

  }

  randomStringGenerator(param=15) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    for (var ii = 0; ii <param; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
	this.randomValidEmail = string+'@automationtest.com';
	this.randomString = string;
  }

  changeTypeCheckBoxStatus() {
    browser.pause(5000);
  if(subscriberDetailsContactPage.svgStatus(subscriberDetailsContactPage.checkBoxesEmailTypeBillingContact).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon")
   {
      subscriberDetailsContactPage.checkBoxesEmailTypeBillingContact.click();
      this.billingContactStatus = true;
    }
    else
    {
      subscriberDetailsContactPage.checkBoxesEmailTypeBillingContact.click();
      this.billingContactStatus = false;
    }
  }
  
  editContactDetailsAndCancel() {

	subscriberDetailsContactPage.companyBillingContact.waitForDisplayed();
	
	this.oldValue_companyBillingContact = subscriberDetailsContactPage.companyBillingContact.getAttribute('value');
	this.oldValue_firstNameBillingContact = subscriberDetailsContactPage.firstNameBillingContact.getAttribute('value');
	this.oldValue_lastNameBillingContact = subscriberDetailsContactPage.lastNameBillingContact.getAttribute('value');
	this.oldValue_address2BillingContact = subscriberDetailsContactPage.address2BillingContact.getAttribute('value');
	this.oldValue_zipFieldBillingContact = subscriberDetailsContactPage.zipFieldBillingContact.getAttribute('value');
	this.oldValue_emailAddressBillingContact = subscriberDetailsContactPage.emailAddressBillingContact.getAttribute('value');

	browser.pause(1000);

	// change the values of the contact details
	this.clearFieldValue(subscriberDetailsContactPage.companyBillingContact);
	this.randomStringGenerator();
	subscriberDetailsContactPage.companyBillingContact.setValue(this.randomString);

	this.clearFieldValue(subscriberDetailsContactPage.firstNameBillingContact);
	this.randomStringGenerator();
	subscriberDetailsContactPage.firstNameBillingContact.setValue(this.randomString);

	this.clearFieldValue(subscriberDetailsContactPage.lastNameBillingContact);
	this.randomStringGenerator();
	subscriberDetailsContactPage.lastNameBillingContact.setValue(this.randomString);
	
	this.clearFieldValue(subscriberDetailsContactPage.address2BillingContact);
	this.randomStringGenerator();
	subscriberDetailsContactPage.address2BillingContact.setValue(this.randomString);
	
	this.clearFieldValue(subscriberDetailsContactPage.zipFieldBillingContact);
	this.randomStringGenerator();
	subscriberDetailsContactPage.zipFieldBillingContact.setValue(this.randomString);
	
	this.clearFieldValue(subscriberDetailsContactPage.emailAddressBillingContact);
	this.randomStringGenerator();
	subscriberDetailsContactPage.emailAddressBillingContact.setValue(this.randomValidEmail);
	
	// press Cancel button
	subscriberDetailsContactPage.cancelButtonOnContactScreen.waitForDisplayed();
	subscriberDetailsContactPage.cancelButtonOnContactScreen.click();

  }

  verifySaveButtonDisabled() {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.saveButtonOnContactScreen.getAttribute("tabindex")).equals("-1");
  }

  verifyErrorMessage()
  {
    browser.pause(1000);
    browser.keys('\uE00C');
    browser.pause(1000);
    subscriberDetailsContactPage.homefaxBillingContact.click();
    expect(subscriberDetailsContactPage.isErrorMsgPresent(this.errorTextCity).isExisting()).to.be.true;
    console.log('error verified');
    expect(subscriberDetailsContactPage.saveButtonOnContactScreen.isClickable()).to.be.false;
    console.log('save verified');
  }

  verifyPreviousValueAreRestored() {

    subscriberDetailsContactPage.companyBillingContact.waitForDisplayed();
  
    expect(this.oldValue_companyBillingContact).to.eql(subscriberDetailsContactPage.companyBillingContact.getAttribute('value'));
    expect(this.oldValue_firstNameBillingContact).to.eql(subscriberDetailsContactPage.firstNameBillingContact.getAttribute('value'));
    expect(this.oldValue_lastNameBillingContact).to.eql(subscriberDetailsContactPage.lastNameBillingContact.getAttribute('value'));
    expect(this.oldValue_address2BillingContact).to.eql(subscriberDetailsContactPage.address2BillingContact.getAttribute('value'));
    expect(this.oldValue_zipFieldBillingContact).to.eql(subscriberDetailsContactPage.zipFieldBillingContact.getAttribute('value'));
    expect(this.oldValue_emailAddressBillingContact).to.eql(subscriberDetailsContactPage.emailAddressBillingContact.getAttribute('value'));
  
    }

  saveAndConfirm() {    
        browser.pause(1000);
        browser.keys('\uE00C');
        browser.pause(1000);
        subscriberDetailsContactPage.homefaxBillingContact.click();
        this.clearFieldValue(subscriberDetailsContactPage.homefaxBillingContact);
        subscriberDetailsContactPage.homefaxBillingContact.setValue((Math.floor(new Date() / 1000)));
        subscriberDetailsContactPage.saveButtonOnContactScreen.waitForDisplayed();
        subscriberDetailsContactPage.saveButtonOnContactScreen.click();
        browser.pause(3000);
        subscriberDetailsContactPage.isMsgExist(this.saveSuccessMessage).waitForDisplayed();
        expect(subscriberDetailsContactPage.isMsgExist(this.saveSuccessMessage).isExisting()).to.be.true;
      }
    
  verifyEmailAddressTypeChanged()
      {
        browser.pause(3000);
        if(subscriberDetailsContactPage.svgStatus(subscriberDetailsContactPage.checkBoxesEmailTypeBillingContact).getAttribute('data-testid')=='CheckBoxIcon')
        {
          expect(this.billingContactStatus).to.be.true;
          console.log('1st verified');
        }
        else
        {
          expect(this.billingContactStatus).to.be.false;
          console.log('2nd verified');
        }
        
      }

  saveWithUpdatedEmailAddress(){	
        this.saveAndConfirm();
        var currentEmailAddress = subscriberDetailsContactPage.emailAddressBillingContact.getAttribute('value');
        expect (currentEmailAddress).to.eql(this.randomValidEmail);
      }

  verifyStateFieldOldValue() {
    browser.pause(2000);
    expect(subscriberDetailsContactPage.stateFieldBillingContact[1].getText()).to.eql(this.stateValue);
  }

  verifyStateFieldForValidValues() {
    subscriberDetailsContactPage.stateFieldBillingContact[1].waitForDisplayed();
    var stateField;
    var stateTempValue;
    stateField = subscriberDetailsContactPage.stateFieldBillingContact[1];
    for (var i = 0; i < this.statesList.length; i++) {
      stateField.waitForDisplayed();
      stateField.click();
      stateField.keys(this.statesList[i]);
      stateField.keys("\uE007"); // press enter key
      browser.pause(500);
      stateTempValue = stateField.getText();
      expect(stateTempValue).to.eql(this.statesList[i]);
    }
  }

  //#region TA-65 assertions
  getValuesofEditPrimaryContactSection(){
    browser.pause(3000);
    this.companyName = subscriberDetailsContactPage.editContactCompanyName.getAttribute('value');
    this.addressNCity = subscriberDetailsContactPage.editAddressValue.getAttribute('value')+", "+ subscriberDetailsContactPage.editCityValue.getAttribute('value');
    this.phoneNumber = subscriberDetailsContactPage.editHomephoneValue.getAttribute('value')+ " - Home";
    if(subscriberDetailsContactPage.editWorkphoneValue.getAttribute('value').length!==0)
    {
      this.phoneNumber = this.phoneNumber +" "+subscriberDetailsContactPage.editWorkphoneValue.getAttribute('value')+ " - Work";
    }
    this.contactEmail = subscriberDetailsContactPage.editEmailValue.getAttribute('value');
  }

  getValuesofEditBillingContactSection(){
    subscriberDetailsContactPage.billingContactTab.waitForDisplayed();
    subscriberDetailsContactPage.billingContactTab.waitForClickable();
    subscriberDetailsContactPage.billingContactTab.click();
    browser.pause(5000);
    this.companyName = subscriberDetailsContactPage.companyBillingContact.getAttribute('value');
    this.addressNCity = subscriberDetailsContactPage.address1BillingContact.getAttribute('value');
    if(subscriberDetailsContactPage.address2BillingContact.getAttribute('value')!=="")
    {this.addressNCity = this.addressNCity +", "+subscriberDetailsContactPage.address2BillingContact.getAttribute('value');}
    this.addressNCity = this.addressNCity+", "+ subscriberDetailsContactPage.cityBillingContact.getAttribute('value');
    this.phoneNumber = subscriberDetailsContactPage.homePhoneBillingContact.getAttribute('value')+ " - Home";
    if(subscriberDetailsContactPage.workPhoneBillingContact.getAttribute('value').length!==0)
    {
      this.phoneNumber = this.phoneNumber +" "+subscriberDetailsContactPage.workPhoneBillingContact.getAttribute('value')+ " - Work";
    }
    this.contactEmail = subscriberDetailsContactPage.emailAddressBillingContact.getAttribute('value');
  }
  
  verifyFieldsValueContactSection(){
    this.getValuesofEditPrimaryContactSection();
    var allContactFields = subscriberDetailsContactPage.primaryContactFields;
    expect(allContactFields[0].getText()).to.eql(this.companyName);
    expect(allContactFields[1].getText()).contains(this.addressNCity);
    expect(allContactFields[2].getText()).to.eql(this.phoneNumber);
    expect(allContactFields[3].getText().includes(this.contactEmail)).to.be.true;
  }

  verifyFirstNameRequiredErrorMessage()
  {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.btnSaveEdits.isEnabled()).to.be.false;
		expect(subscriberDetailsContactPage.getFirstNameErrorMessage.getText()).to.eql(this.errorTextFirstname);
  }
  verifyLastNameRequiredErrorMessage()
  {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.btnSaveEdits.isEnabled()).to.be.false;
		expect(subscriberDetailsContactPage.getLastNameErrorMessage.getText()).to.eql(this.errorTextLastname);
  }
  verifyAddress1RequiredErrorMessage()
  {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.btnSaveEdits.isEnabled()).to.be.false;
		expect(subscriberDetailsContactPage.isMsgPresent(this.errorTextAddress1).isExisting()).to.be.true;
  }
  verifyCityIsRequiredErrorMessage()
  {
    browser.pause(1000);
    expect(this.internationalStatus).to.eql('false');
    browser.keys('\uE00C');
    browser.pause(1000);
    subscriberDetailsContactPage.homefaxPrimaryContact.click();
    expect(subscriberDetailsContactPage.isErrorMsgPresent(this.errorTextCity).isExisting()).to.be.true;
    expect(subscriberDetailsContactPage.saveButtonOnContactScreen.isClickable()).to.be.false;
  }
  verifyCityChangesSaved()
	{
    subscriberDetailsContactPage.isMsgExist(this.saveSuccessMessage).waitForDisplayed();
    expect(subscriberDetailsContactPage.isMsgExist(this.saveSuccessMessage).isExisting()).to.be.true;
    browser.pause(1000);
    expect(this.internationalStatus).to.eql('true');//international option enabled in settings
	}

  verifyPrimaryConatctStateFieldOldValue() {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.primaryContactState.getText()).to.eql(this.stateValue);
  }

  verifyPrimaryContactState() {
    var stateKeys = ['\uE05B', '\uE007'];
    browser.pause(2000);
    var stateField;
    var stateTempValue;
    stateField = subscriberDetailsContactPage.primaryContactStateList;
    for (var i = 0; i < this.statesList.length; i++) {
      stateField.waitForDisplayed();
      browser.pause(2000);
      stateField.click();
      stateField.keys(this.statesList[i]);
      stateField.keys(stateKeys); // down + enter key
      browser.pause(500);
      stateTempValue = stateField.getText();
      console.log('state field contains: ' + stateTempValue);
      console.log('state field expected value: ' + this.statesList[i]);
      expect(stateTempValue.includes(this.statesList[i])).to.be.true;
    }
  }

  verifyStateFieldLable()
  {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.stateFieldLable.getText().includes('State')).to.be.true;
  }

  verifyDataInBillingContactSection()
  {
    subscriberDetailsContactPage.closeContactDetails.click();
    browser.pause(2000);
    this.getValuesofEditBillingContactSection();
    browser.pause(3000);
    var allContactFields = subscriberDetailsContactPage.billingContactFields;
    expect(allContactFields[0].getText()).to.eql(this.companyName);
    expect(allContactFields[1].getText().includes(this.addressNCity)).to.be.true;
    expect(allContactFields[2].getText().includes(this.phoneNumber)).to.be.true;
    if(allContactFields.length>2)
    {
      expect(allContactFields[3].getText().includes(this.contactEmail)).to.be.true;
    }
    subscriberDetailsContactPage.clickEditContactIcon.click();
    browser.pause(3000);
    expect(subscriberDetailsContactPage.companyBillingContact.getAttribute('value')).to.eql(this.oldValue_companyBillingContact);
    expect(subscriberDetailsContactPage.firstNameBillingContact.getAttribute('value')).to.eql(this.oldValue_firstNameBillingContact);
    expect(subscriberDetailsContactPage.miBillingContact.getAttribute('value')).to.eql(this.oldValue_miNameBillingContact);
    expect(subscriberDetailsContactPage.lastNameBillingContact.getAttribute('value')).to.eql(this.oldValue_lastNameBillingContact);
    expect(subscriberDetailsContactPage.address1BillingContact.getAttribute('value')).to.eql(this.oldValue_address1BillingContact);
    expect(subscriberDetailsContactPage.address2BillingContact.getAttribute('value')).to.eql(this.oldValue_address2BillingContact);
    expect(subscriberDetailsContactPage.cityBillingContact.getAttribute('value')).to.eql(this.oldValue_cityBillingContact);
    expect(subscriberDetailsContactPage.zipFieldBillingContact.getAttribute('value')).to.eql(this.oldValue_zipFieldBillingContact);
    expect(subscriberDetailsContactPage.homePhoneBillingContact.getAttribute('value')).to.eql(this.oldValue_phoneBillingContact);
    expect(subscriberDetailsContactPage.homeworkPhoneBillingContact.getAttribute('value')).to.eql(this.oldValue_workPhoneBillingContact);
    expect(subscriberDetailsContactPage.homecellPhoneBillingContact.getAttribute('value')).to.eql(this.oldValue_cellPhoneBillingContact);
    expect(subscriberDetailsContactPage.homefaxBillingContact.getAttribute('value')).to.eql(this.oldValue_faxBillingContact);
    expect(subscriberDetailsContactPage.emailAddressBillingContact.getAttribute('value')).to.eql(this.oldValue_emailAddressBillingContact);
  }

  verifyBlankBillingFirstNameErrorMsg()
  {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.btnSaveEdits.isEnabled()).to.be.false;
		expect(subscriberDetailsContactPage.billingFirstNameErrorMessage.getText()).to.eql(this.BillingFirstRequired);
  }
  verifyBlankBillingLastNameErrorMsg()
  {
    browser.pause(1000);
    expect(subscriberDetailsContactPage.btnSaveEdits.isEnabled()).to.be.false;
		expect(subscriberDetailsContactPage.billingLastNameErrorMessage.getText()).to.eql(this.BillingLastRequired);
  }
  //#endregion
  
}
module.exports = new subscriberDetailsContactActions();
