
var infraLocationsRemoveContactPage = require('../pageobjects/infraLocationsRemoveContact.page');

var expect = require('chai').expect; 


class infraLocationsRemoveContactActions{
	
	constructor(){
		this.randomNumber;
		this.singleTaskText;
		this.firstTask;
		this.secondTask;this.siteName;
	}

	randomValues(format, length) {

		var string = "";

		if (format === 'str') {
			var chars = "abcdefghijklmnopqrstuvwxyz";

			for (var ii = 0; ii < length; ii++) {
				string += chars[Math.floor(Math.random() * chars.length)];
			}
		}

		if (format === 'num') {
			var chars = "1234567890";			
			for (var ii = 0; ii < length; ii++) {
				string += chars[Math.floor(Math.random() * chars.length)];
			}
		}
		
		if (format === 'email') {
			var chars = "abcdefghijklmnopqrstuvwxyz";
			for (var ii = 0; ii < 10; ii++) {
				string += chars[Math.floor(Math.random() * chars.length)];
			}
			this.randomValidEmail = string+'@automationtest.com';
			return this.randomValidEmail;
		}

		this.randomString = string;
	  	return this.randomString;		
}


	addInfrastructure () {
		var infraAddress = ['n','e','w'];
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.pause(1000);
		infraLocationsRemoveContactPage.infraName.waitForDisplayed();
		var infraName = "test_infra "+this.randomValues('str', 5);
		this.siteName = infraName;
		infraLocationsRemoveContactPage.infraName.click();
		infraLocationsRemoveContactPage.infraName.setValue(infraName);
		browser.pause(1000);

		infraLocationsRemoveContactPage.infraProfile.waitForClickable();
		infraLocationsRemoveContactPage.infraProfile.click();		
		browser.keys(downArrowKey);
		browser.pause(500);
		// browser.keys(downArrowKey);		
		// browser.pause(500);
		browser.keys(enterKey);		
		// console.log("infra profile selected");
		
		browser.pause(1000);
		infraLocationsRemoveContactPage.elevation.waitForClickable();
		infraLocationsRemoveContactPage.elevation.click();
		infraLocationsRemoveContactPage.elevation.setValue(this.randomValues('num',2));

		browser.pause(1000);
		infraLocationsRemoveContactPage.latitude.waitForClickable();
		infraLocationsRemoveContactPage.latitude.click();
		infraLocationsRemoveContactPage.latitude.setValue('56');
		browser.pause(1000);
		infraLocationsRemoveContactPage.longitude.waitForClickable();
		infraLocationsRemoveContactPage.longitude.click();
		infraLocationsRemoveContactPage.longitude.setValue('120');

		// console.log("elevation long/lat selected");

		// select address1 as 'New York'
		browser.pause(1000);
		var inputParent = infraLocationsRemoveContactPage.siteParentByLableName('Address 1 *');
		infraLocationsRemoveContactPage.inputByParent(inputParent).click();
		let address1 ='New York';
		var allcharacters = address1.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(7000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		// infraLocationsRemoveContactPage.address1.waitForDisplayed();		
		// infraLocationsRemoveContactPage.address1.click();
		// // infraLocationsRemoveContactPage.address1.setValue('new');

		// browser.keys(infraAddress);		
		 browser.pause(3000);
		// browser.keys(enterKey);
		// console.log("address1 added as New York");

		infraLocationsRemoveContactPage.address2.waitForClickable();
		infraLocationsRemoveContactPage.address2.click();
		infraLocationsRemoveContactPage.address2.setValue("test "+this.randomValues('num', 4));



		// set zip code
		browser.pause(3000);
		infraLocationsRemoveContactPage.infraZip.waitForClickable();
		infraLocationsRemoveContactPage.infraZip.click();
		infraLocationsRemoveContactPage.infraZip.setValue('10002');
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.pause(1000);
		browser.keys(enterKey);

		browser.pause(2000);
		infraLocationsRemoveContactPage.btnSaveOnAddInfra.waitForClickable();
		infraLocationsRemoveContactPage.btnSaveOnAddInfra.click();

		infraLocationsRemoveContactPage.confirmationMsg.waitForDisplayed();
		expect(infraLocationsRemoveContactPage.confirmationMsg.getText()).to.eql('Added Site Location successfully');

		browser.pause(1000);
		console.log("New Infra Location added");
	
	}


	addContact () {
		var conAddress = ['n','e','w'];
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.pause(5000);
		infraLocationsRemoveContactPage.contactEditIcon.waitForDisplayed();
		infraLocationsRemoveContactPage.contactEditIcon.click();
		// console.log("Contact Icon clicked");

		browser.pause(2000);
		infraLocationsRemoveContactPage.addContact.waitForDisplayed();
		infraLocationsRemoveContactPage.addContact.waitForClickable();
		infraLocationsRemoveContactPage.addContact.click();
		// console.log("Add Contact clicked");

		browser.pause(2000);
		infraLocationsRemoveContactPage.contactFirstName.waitForClickable();
		infraLocationsRemoveContactPage.contactFirstName.click();		
		infraLocationsRemoveContactPage.contactFirstName.setValue("test contact "+this.randomValues('num', 5));

		browser.pause(1000);
		infraLocationsRemoveContactPage.contactLastName.waitForClickable();
		infraLocationsRemoveContactPage.contactLastName.click();		
		infraLocationsRemoveContactPage.contactLastName.setValue(this.randomValues('str', 5));

		// set contact address as new york
		browser.pause(1000);
		infraLocationsRemoveContactPage.contactAddress.waitForDisplayed();		
		infraLocationsRemoveContactPage.contactAddress.click();
		// infraLocationsRemoveContactPage.address1.setValue('new');
		browser.keys(conAddress);		
		browser.pause(3000);
		browser.keys(enterKey);
		// console.log("contact Address added as New York");

		// set contact zip code
		browser.pause(2000);
		infraLocationsRemoveContactPage.contactZip.waitForClickable();
		infraLocationsRemoveContactPage.contactZip.click();
		infraLocationsRemoveContactPage.contactZip.setValue('1');
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.pause(1000);
		browser.keys(enterKey);

		// set contact email
		browser.pause(2000);
		infraLocationsRemoveContactPage.contactEmailAddress.waitForClickable();
		infraLocationsRemoveContactPage.contactEmailAddress.click();
		infraLocationsRemoveContactPage.contactEmailAddress.setValue(this.randomValues('email',10));
		infraLocationsRemoveContactPage.contactEmailType.waitForClickable();
		infraLocationsRemoveContactPage.contactEmailType.click();
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);

		browser.pause(2000);
		infraLocationsRemoveContactPage.contactPhoneNumber.waitForClickable();
		infraLocationsRemoveContactPage.contactPhoneNumber.click();
		infraLocationsRemoveContactPage.contactPhoneNumber.setValue("1111111111");
		infraLocationsRemoveContactPage.contactPhoneType.waitForClickable();
		infraLocationsRemoveContactPage.contactPhoneType.click();
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);


		browser.pause(2000);
		infraLocationsRemoveContactPage.btnSaveOnAddInfra.waitForClickable();
		infraLocationsRemoveContactPage.btnSaveOnAddInfra.click();

		infraLocationsRemoveContactPage.confirmationMsg.waitForDisplayed();
		expect(infraLocationsRemoveContactPage.confirmationMsg.getText()).to.eql('Updated Site Contact successfully');

		browser.pause(1000);
		console.log("contact added successfully");
	
	}


	closeContactAndSitePopups ()	{
		browser.pause(1000);
		infraLocationsRemoveContactPage.contactCloseButton.waitForClickable();
		infraLocationsRemoveContactPage.contactCloseButton.click();
		// console.log("Contact popup closed");
		browser.pause(1000);
		infraLocationsRemoveContactPage.infraCloseButton.waitForClickable();
		infraLocationsRemoveContactPage.infraCloseButton.click();
		browser.pause(1000);
		// console.log("Infrastructure popup closed");
	}

	searchNewlyAddedSite()
	{
		browser.pause(3000);
		console.log('going to search '+this.siteName);
		this.clickOnISsearchbar();
		this.typeInISsearhbar(this.siteName);
		console.log('newly added site name is '+this.siteName);
		browser.pause(2000);
	}
	clickOnISsearchbar()
	{
		infraLocationsRemoveContactPage.btnSiteSearch.waitForDisplayed();
		infraLocationsRemoveContactPage.btnSiteSearch.waitForExist();
		infraLocationsRemoveContactPage.btnSiteSearch.click();
		browser.pause(2000);
	}
	typeInISsearhbar(siteTosearch)
	{
		siteTosearch = siteTosearch.replace(/['"]+/g, '');
		//browser.pause(2000);
		infraLocationsRemoveContactPage.inputSiteSearch.setValue(siteTosearch);
		//browser.pause(2000);
		console.log('site to search is '+siteTosearch);
		this.siteName = siteTosearch;
	}
	openNewlyAddedSite() {
		browser.pause(3000);
		infraLocationsRemoveContactPage.firstSiteRecord.waitForClickable();
		infraLocationsRemoveContactPage.firstSiteRecord.click();
		// console.log("first site record opened");
		browser.pause(3000);
	}
	

	clickPlusIconToAddInfraLoc (){
		browser.pause(1000);
		infraLocationsRemoveContactPage.btnPlusInHeader.waitForDisplayed();
		infraLocationsRemoveContactPage.btnPlusInHeader.click();
		browser.pause(1000);
		// infraLocationsRemoveContactPage.topMenuItemTicket.waitForDisplayed();
		// infraLocationsRemoveContactPage.topMenuItemTicket.click();		
		// browser.pause(3000);
	}


	moveMouseToContactCard(){
		browser.pause(2000);
		var x = infraLocationsRemoveContactPage.contactHeader.getLocation('x');
		var y = infraLocationsRemoveContactPage.contactHeader.getLocation('y');
		infraLocationsRemoveContactPage.contactHeader.moveTo({ x, y});
		browser.pause(2000);
		// console.log("mouse is moved to contact header section");
	}


	deleteIconShown () {
		expect(infraLocationsRemoveContactPage.deleteIcon.isExisting()).be.true;
	}


	clickDeleteIcon () {
		browser.pause(1000);
		infraLocationsRemoveContactPage.deleteIcon.click();
		// console.log("del icon was clicked");
	}


	confirmationAboutDeletion () {
		browser.pause(2000);
		expect(infraLocationsRemoveContactPage.deleteConfirmationAlert.isExisting()).be.true;			
	}


	yesNoButtonsOnDeleteAlert () {
		browser.pause(1000);
		expect(infraLocationsRemoveContactPage.deleteConfirmationAlert.isExisting()).be.true;
		expect(infraLocationsRemoveContactPage.yesButtonOnDeleteAlert.isExisting()).be.true;
		expect(infraLocationsRemoveContactPage.noButtonOnDeleteAlert.isExisting()).be.true;
	}


	clickYesButtonOnDeleteAlert () {
		browser.pause(1000);		
		expect(infraLocationsRemoveContactPage.yesButtonOnDeleteAlert.isExisting()).be.true;
		infraLocationsRemoveContactPage.yesButtonOnDeleteAlert.click();
		// console.log("Clicked Yes button on delete alert");

	}


	clickNoButtonOnDeleteAlert() {
		browser.pause(1000);		
		expect(infraLocationsRemoveContactPage.noButtonOnDeleteAlert.isExisting()).be.true;
		infraLocationsRemoveContactPage.noButtonOnDeleteAlert.click();
		// console.log("Clicked No button on delete alert");
	}

	verifyContactRemoval() {
		infraLocationsRemoveContactPage.confirmationMsg.waitForDisplayed();
		expect(infraLocationsRemoveContactPage.confirmationMsg.getText()).to.eql ("Deleted Successfully");
		browser.pause(1000);
		expect(infraLocationsRemoveContactPage.NoContactText.isExisting()).be.true;
	}


	verifyContactNotRemoved() {

		browser.pause(1000);
		expect(infraLocationsRemoveContactPage.contactHeader.isExisting()).be.true;
		browser.pause(1000);		
	}


}
module.exports = new infraLocationsRemoveContactActions();
