var LoginPage = require('../pageobjects/login.page');
var EquipmentPage = require('../pageobjects/IRM.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
const { util } = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();

class equipmentActions {

	constructor() {
		this.comment;
		this.pageTitle = 'Infrastructure Resource Management';
		this.siteUpdateConfMsg = 'Updated Site Location successfully';
		this.deleteSiteConfMsg = 'Deleted Infrastructure Location successfully';
		this.siteAddedConfMsg = 'Added Site Location successfully';
		this.subLocationAddConfMsg = 'Site Sub-location was added successfully.';
		this.subLocationUpdateConfMsg = 'Site Sub-location was updated successfully.';
		this.siteContactModificationConfirmationMsg = 'Updated Site Contact successfully';
		this.addedEquipmentConfMsg = 'Added Equipment successfully';
		this.deletedEquipmentConfMsg = 'The equipment item has been deleted successfully.';
		this.updatedEquipmentConfMsg = 'Updated Equipment successfully';
		this.createdEquipmentAssemblyCopy = 'Copied Equipment Assembly successfully';
		this.updatedEquipmentAssemblyConfMsg = 'Updated Equipment Assembly successfully';
		this.rmaAddedConfMsg = 'Successfully created RMA for the inventory item';
		this.poCreatedConfMsg = 'Created Purchase Order successfully.';
		this.poUpdateConfMsg = 'Updated Purchase Order status successfully';
		this.poItemUpdateConfMsg='Updated Purchase Order items successfully.';
		this.poItemReceivedConfMsg='Received 1 inventory items successfully.';
		this.poCreatedStatus ='CREATED';
		this.poOrderedStatus ='ORDERED';
		this.inventoryProfileUpdatedConfMsg = 'Updated Inventory Profile successfully';
		this.inventoryItemCreatedConfMsg = 'Added Inventory Item successfully';
		this.equipmentUpdateLocationConfMsg = 'Updated Equipment Location successfully';
		this.siteName;this.siteAddress1;this.siteAddress2;this.siteProfileType;this.siteElevation;this.siteLat;this.siteLong;this.siteCity;this.siteState;this.siteZip;//site fields
		this.subSiteName;this.subSiteElevation;
		this.contactCompany;this.contactFname;this.contactMname;this.contactLname;this.contactAddress1,this.contactZip;
		this.equipmentName;this.equipmentDescription;this.equipmentLocation;this.equipmentProfile;this.upstreamDevice;this.inventoryProfile,this.equipmentMacAddress,this.equipmentIpAddress;this.updatedEquipmentAssmeblyName;
		this.rmaDate;this.rmaVendor;this.rmaNumber;this.rmaReturnDate;this.rmaTrackingNumber;this.rmaShippedDate;this.rmaShippedTracking;this.ramLocation;
		this.poProfileItem;this.poVendor;this.poQuantity;this.poShippto;
		this.poItemQuantity;this.poItemTaxRate;this.poItemUnitPrice;this.poItemShippingFee;this.poItemOtherFee;
		this.inventorySKU;this.inventoryItemName;this.inventoryItemSerial;this.inventoryItemProfileName;
		this.inlineEditingParent;this.customProfile = false;this.customLocation;this.customEquipment=false;this.customEquipmentProfile;this.equipmentToSearch;
		this.siteAProfileName;this.siteASublocationName;this.siteAPtpEquipmentName;this.siteAInterConnectName;
		this.siteBProfileName;this.siteBSublocationName;this.siteBPtpEquipmentName;this.columnIndex;
		this.tabDocsisText='tower_site';
		this.tabWarehouseText='Test Warehouse Profile';
		this.Esckeys = ['\uE00C'];
	}

	openubow() {
		EquipmentPage.open('login');
	}

	loginToUBOW(creds) {
		var credentials = creds.raw();//storing datatable as 2D array
		Utils.login(credentials[0][0], credentials[0][1]);
	/*	LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(credentials[0][0]);
		LoginPage.passwordf.setValue(credentials[0][1]);
		LoginPage.logbutton.click();
		console.log('I login using given credentials');
	//	Utils.closeRatingPopup();
	//	Utils.closeWalkMe();
		browser.maximizeWindow();*/
	}

	navigateToEquipment() {
		//browser.pause(4000);
		browser.waitUntil(function () {return EquipmentPage.equipmentMenu.waitForExist();},{ timeout: 4000 });
		EquipmentPage.equipmentMenu.waitForDisplayed();
		EquipmentPage.equipmentMenu.click();
		console.log('I navigate to IRM page');
		browser.pause(3000);
	}

	openAddSiteForm() {
		//browser.pause(2000);
		//browser.waitUntil(function () {return EquipmentPage.btnAddSite.waitForExist();},{ timeout: 4000 });
		EquipmentPage.btnAddSite.waitForDisplayed();
		EquipmentPage.btnAddSite.waitForClickable();
		EquipmentPage.btnAddSite.click();
		browser.keys(this.Esckeys);
		//browser.pause(5000);
	}

	closeDock()
	{
		browser.pause(6000);
		EquipmentPage.btnClose.waitForDisplayed();
		EquipmentPage.btnClose.waitForClickable();
		EquipmentPage.btnClose.click();
		browser.pause(2000);
		console.log('closed the opened dock');
	}

	clickOnDocsisbtn(){

		browser.pause(7000);
		EquipmentPage.btnDocsis.waitForDisplayed();
		EquipmentPage.btnDocsis.waitForExist();
		EquipmentPage.btnDocsis.click();
		console.log('Docsis button is clicked!');
	}


	clickOnWarehouseBtn()
	{
		browser.pause(5000);
		EquipmentPage.btnWarehouse.waitForDisplayed();
		EquipmentPage.btnWarehouse.waitForExist();
		EquipmentPage.btnWarehouse.click();
		console.log('warehouse button is clicked!');
	}

	selectAddressFromSuggestions(address1){
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		var inputParent = EquipmentPage.siteParentByLableName('Address 1 *');
		EquipmentPage.inputByParent(inputParent).click();
		var allcharacters = address1.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		//EquipmentPage.inputByParent(inputParent).setValue(address1);
		browser.pause(3000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		//EquipmentPage.selectAddress1Suggestion.click();
	}
	updatedSiteAddress(address1){
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		var inputParent = EquipmentPage.siteParentToUpdate;
		EquipmentPage.inputByParent(inputParent).setValue(address1);
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		//EquipmentPage.selectAddress1Suggestion.click();
	}

	selectSiteContactAddressFromSuggestions(address){
		//browser.pause(1000);
		//var inputParent = EquipmentPage.EditContactOfAnInputByLable;
		//EquipmentPage.inputByParent(inputParent).setValue(address);
		browser.pause(7000);
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		//browser.pause(5000);
		//EquipmentPage.selectAddress1Suggestion.click();
	}

	enterSiteDetails() {
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		//browser.waitUntil(function () {return EquipmentPage.siteName.waitForExist();},{ timeout: 4000 });
		this.siteName = 'AutoSite' + (Math.floor(new Date() / 1000));
		this.subSiteName='';
		EquipmentPage.siteName.waitForDisplayed();
		EquipmentPage.siteName.waitForClickable();
		EquipmentPage.siteName.setValue(this.siteName);
		EquipmentPage.siteProfileTypeDropDown.click();
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.keys(downArrowKey);
		//browser.keys(downArrowKey);
		browser.keys(enterKey);
		//EquipmentPage.selectSiteProfileTypeOption.click();
		browser.pause(1500);
		this.siteProfileType = EquipmentPage.siteProfileTypeInput.getAttribute('value');
		this.siteElevation = '120';
		EquipmentPage.elevationSite.setValue(this.siteElevation);
		this.siteAddress1 = 'New York';
		this.selectAddressFromSuggestions(this.siteAddress1);
		this.siteAddress2 = 'Manhattan';
		EquipmentPage.siteAddress2.setValue(this.siteAddress2);
		browser.pause(3000);
		EquipmentPage.zip.waitForExist();
		EquipmentPage.zip.click();
		EquipmentPage.zip.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.generateCoordinatesUsigAddress.waitForDisplayed();
		EquipmentPage.generateCoordinatesUsigAddress.waitForClickable();
		EquipmentPage.generateCoordinatesUsigAddress.click();
		browser.pause(1000);
		this.siteZip = '10002';
		EquipmentPage.zip.setValue(this.siteZip);
		browser.pause(1000);
		EquipmentPage.zipdropdownValue.waitForDisplayed();
		EquipmentPage.zipdropdownValue.click();
		browser.pause(1000);
		if(EquipmentPage.zipErrorMessage.isExisting())
		{
			EquipmentPage.zip.setValue(this.siteZip);
			browser.pause(1000);
			EquipmentPage.zipdropdownValue.click();
		}
		this.siteCity = EquipmentPage.city.getAttribute('value');
		this.siteState =EquipmentPage.addSiteStateElement.getAttribute('value');
		this.siteLat = EquipmentPage.lattidue.getAttribute('value');
		this.siteLong =EquipmentPage.longitude.getAttribute('value');
		this.subSiteName = this.siteName+(' Sub');
	}

	saveSiteDetails() {
		//browser.pause(4000);
		EquipmentPage.btnSave.waitForDisplayed();
		EquipmentPage.btnSave.waitForClickable();
		EquipmentPage.btnSave.scrollIntoView();
		EquipmentPage.btnSave.click();
		console.log('Save button is clicked!');
	}

	saveEquipmentDetails()
	{
		browser.pause(9000);
		var allsavebuttons = EquipmentPage.getAllsaveButtons;
		allsavebuttons[0].click();
	}

	explicitWait(wait) {
		browser.pause(wait);
	}

	getInfrastructureTableCount()
	{
		//browser.pause(3000);
		//browser.waitUntil(function () {return EquipmentPage.infrastructureTotalRecords.waitForExist();},{ timeout: 7000 });
		EquipmentPage.infrastructureTotalRecords.waitForDisplayed();
		console.log('total records are: '+EquipmentPage.infrastructureTotalRecords.getText());
		let total = EquipmentPage.infrastructureTotalRecords.getText();
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		console.log('total extracted are : '+myArray[position]);
		return myArray[position];
	}

	addInfrastructureLocationIfNotExist()
	{
		if(Number(this.getInfrastructureTableCount<2))
		{
			console.log('going to add site');
			this.openAddSiteForm();
			this.enterSiteDetails();
			this.saveSiteDetails();
			//browser.pause(2000);
			EquipmentPage.btnClose.waitForClickable();
			EquipmentPage.btnClose.click();
		}
	}

	selectFirstRecord() {
		browser.pause(7000);
		this.addInfrastructureLocationIfNotExist();
		console.log('going to select 1st row');
		//browser.pause(9000);
		//browser.waitUntil(function () {return EquipmentPage.firstRowData[0].waitForExist();},{ timeout: 9000 });
		//EquipmentPage.firstRowData[0].waitForClickable({ timeout: 9000 });
		EquipmentPage.firstRowData[0].waitForDisplayed();
		EquipmentPage.firstRowData[0].waitForClickable();
		EquipmentPage.firstRowData[0].click();
		//EquipmentPage.selectFirstSite.waitForDisplayed();
		//EquipmentPage.selectFirstSite.click();
		console.log('I select 1st ISP Site Location');
		browser.pause(5000);
		
	}

	closeDockedSite()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteAddedConfMsg);
		browser.pause(5000);
		EquipmentPage.btnSiteClose.waitForDisplayed();
		EquipmentPage.btnSiteClose.click();
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

	clickEditSiteBtn(){
		//browser.pause(3000);
		EquipmentPage.editSiteBtn.waitForDisplayed();
		EquipmentPage.editSiteBtn.waitForClickable();
		EquipmentPage.editSiteBtn.click();
	}

	clickEditSiteContactBtn(){
		browser.pause(3000);
		EquipmentPage.editSiteContactsBtn.waitForDisplayed();
		EquipmentPage.editSiteContactsBtn.waitForClickable();
		EquipmentPage.editSiteContactsBtn.click();
		browser.pause(3000);
		}

	fillSubLocationDetails(){
		//browser.pause(3000);
		this.subSiteName = 'SubAutoSite' + (Math.floor(new Date() / 1000));
		EquipmentPage.subLocation_name.waitForDisplayed();
		EquipmentPage.subLocation_name.waitForExist();
		EquipmentPage.subLocation_name.setValue(this.subSiteName);
		this.subSiteElevation = '110';
		EquipmentPage.subLocation_elevation.setValue(this.subSiteElevation);
	}

	addSubLocation() {
		//browser.pause(3000);
		EquipmentPage.addSubLocationBtn.waitForExist();
		EquipmentPage.addSubLocationBtn.click();
	}

	updateSiteDetails(_location, elevation, address1, city) {

		var keys = ['\uE004', '\uE004', '\uE015', '\uE015', '\uE006']; // keyboard keys Tab, Tab, Down, Down, Enter
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del

		browser.pause(2000);
		this.siteName = _location + (Math.floor(new Date() / 1000));
		EquipmentPage.siteName.click();
		EquipmentPage.siteName.keys(clearKeys);
		//EquipmentPage.siteName.keys('\uE008');
		EquipmentPage.siteName.setValue(this.siteName);
		browser.pause(2000);
		this.siteElevation = elevation;
		EquipmentPage.elevationSite.waitForDisplayed();
		EquipmentPage.elevationSite.click();
		EquipmentPage.elevationSite.keys(clearKeys);
		//EquipmentPage.elevationSite.keys('\uE008');
		EquipmentPage.elevationSite.setValue(elevation);
		this.siteAddress1 = address1;
		//EquipmentPage.siteAddress1Parent.click();
		//EquipmentPage.siteAddress1Parent.keys(clearKeys);
		//browser.pause(1000);
		//EquipmentPage.siteAddress1Parent.click();
		//EquipmentPage.siteAddress1.keys('\uE008');
		//this.updatedSiteAddress(address1);
		EquipmentPage.siteAddress1.click();
		EquipmentPage.siteAddress1.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.siteAddress1.setValue(address1);
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.pause(7000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		//EquipmentPage.selectAddress1Suggestion.click();

		this.siteCity = city;
		EquipmentPage.city.click();
		browser.pause(1000);
		EquipmentPage.city.keys(clearKeys);
		//EquipmentPage.city.keys('\uE008');
		EquipmentPage.city.click();
		browser.pause(1000);
		EquipmentPage.city.setValue(this.siteCity);

		browser.pause(2000);
		EquipmentPage.city.keys(keys);
		/*EquipmentPage.state.click();
		browser.getSource();
		browser.pause(2000);
		EquipmentPage.state.setValue(state);*/
		browser.pause(2000);
		 EquipmentPage.subSiteZip.click();
		 EquipmentPage.subSiteZip.keys(clearKeys);
		EquipmentPage.zip.keys('\uE008');
		 EquipmentPage.subSiteZip.setValue('85254');
		 browser.pause(2000);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(2000);

	}

	openSiteContactTab() {
		browser.pause(5000);
		EquipmentPage.btnAddContact.waitForDisplayed();
		EquipmentPage.btnAddContact.waitForClickable();
		EquipmentPage.btnAddContact.click();
		console.log('I navigate to Add Site Contact page');
		browser.pause(1000);
	}

	clickAddNew() {
		browser.pause(2000);
		EquipmentPage.btnAddNew.click();
		console.log('I click on ADD NEW button');
		browser.pause(2000);
	}

	addContactDetails(contactDetails) {
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		browser.pause(7000);
		EquipmentPage.company.waitForDisplayed();
		EquipmentPage.company.waitForExist();
		var details = contactDetails.raw();
		EquipmentPage.company.setValue(details[0][0]);
		this.contactCompany = details[0][0];
		EquipmentPage.fName.setValue(details[0][1]);
		this.contactFname = details[0][1];
		EquipmentPage.mName.setValue(details[0][2]);
		this.contactMname = details[0][2];
		EquipmentPage.lName.setValue(details[0][3]);
		this.contactLname = details[0][3];
		browser.pause(2000);
		console.log('I am enterning contact address');
		this.selectSiteContactAddressFromSuggestions(details[0][4]);
		this.contactAddress1 = details[0][4];
		console.log('I entered contact address');
		browser.pause(3000);
		let zipValue ='32165';
		if(EquipmentPage.contactCity.getAttribute('value')==='')
		{
			EquipmentPage.contactCity.setValue(details[0][4]);
			EquipmentPage.contactStateInput.click();
			browser.pause(500);
			EquipmentPage.contactStateInput.keys(clearKeys);
			browser.pause(500);
			EquipmentPage.contactStateInput.setValue(details[0][5]);
			browser.pause(500);
			var enterKey = ['\ue007'];// enter
			var downArrowKey = ['\ue015'];// arrow down
			browser.keys(downArrowKey);
			browser.keys(enterKey);
			browser.pause(1000);
			EquipmentPage.contactZip.click();
			EquipmentPage.contactZip.addValue(zipValue);
			browser.pause(1000);
			//EquipmentPage.contactZipdropdownValue(zipValue).waitForDisplayed();
			//EquipmentPage.contactZipdropdownValue(zipValue).waitForClickable();
			//EquipmentPage.contactZipdropdownValue(zipValue).click();
		}
		if(EquipmentPage.contactZip.getAttribute('value')==='')
		{
			EquipmentPage.contactZip.click();
			let zipValue ='32165';
			EquipmentPage.contactZip.addValue(zipValue);
			browser.pause(1000);
			//EquipmentPage.contactZipdropdownValue(zipValue).waitForDisplayed();
			//EquipmentPage.contactZipdropdownValue(zipValue).waitForClickable();
			//EquipmentPage.contactZipdropdownValue(zipValue).click();
		}
		EquipmentPage.email.setValue('contact123@visp.net');
		EquipmentPage.emailType.click();
		browser.pause(1000);
		EquipmentPage.primaryEmailType.click();
		EquipmentPage.contactNumber.setValue('(123) 222-1232');
		EquipmentPage.contactNumberType.click();
		browser.pause(1000);
		EquipmentPage.workPhoneType.click();
		browser.pause(5000);
	}

	clickSaveContact()
	{
		browser.pause(5000);
		EquipmentPage.btnSaveContact.waitForDisplayed();
		EquipmentPage.btnSaveContact.waitForExist();
		EquipmentPage.btnSaveContact.click();
		console.log('Save contact button is clicked!');
	}

	UpdateContactDetails(contactDetails) {
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		browser.pause(7000);
		var details = contactDetails.raw();
		EquipmentPage.company.waitForDisplayed();
		EquipmentPage.company.waitForExist();
		EquipmentPage.company.click();
		EquipmentPage.company.keys(clearKeys);
		EquipmentPage.company.keys('\uE008');
		EquipmentPage.company.setValue(details[0][0]);
		this.contactCompany = details[0][0];
		EquipmentPage.fName.click();
		EquipmentPage.fName.keys(clearKeys);
		EquipmentPage.fName.keys('\uE008');
		EquipmentPage.fName.setValue(details[0][1]);
		this.contactFname = details[0][1];
		EquipmentPage.mName.click();
		EquipmentPage.mName.keys(clearKeys);
		EquipmentPage.mName.keys('\uE008');
		EquipmentPage.mName.setValue(details[0][2]);
		this.contactMname = details[0][2];
		EquipmentPage.lName.click();
		EquipmentPage.lName.keys(clearKeys);
		EquipmentPage.lName.keys('\uE008');
		EquipmentPage.lName.setValue(details[0][3]);
		this.contactLname = details[0][3];
		browser.pause(2000);
		EquipmentPage.updateContactsAddressParent.click();
		browser.pause(1000);
		EquipmentPage.inputByParent(EquipmentPage.updateContactsAddressParent).keys(clearKeys);
		browser.pause(1000);
		//EquipmentPage.EditContactOfAnInputByLable.keys('\uE008');
		EquipmentPage.inputByParent(EquipmentPage.updateContactsAddressParent).setValue(details[0][4]);
		this.selectSiteContactAddressFromSuggestions(details[0][4]);
		browser.pause(1000);
		this.contactAddress1 = EquipmentPage.inputByParent(EquipmentPage.updateContactsAddressParent).getValue();
		// EquipmentPage.contactStateInput.click();
		// browser.pause(500);
		// EquipmentPage.contactStateInput.keys(clearKeys);
		// browser.pause(500);
		// EquipmentPage.contactStateInput.setValue(details[0][5]);
		// browser.pause(500);
		var enterKey = ['\ue007'];// enter
		var downArrowKey = ['\ue015'];// arrow down
		//browser.keys(downArrowKey);
		//browser.keys(downArrowKey);
		//browser.keys(enterKey);
		//console.log('state value get set');
		browser.pause(2000);
		EquipmentPage.contactZip.click();
		EquipmentPage.contactZip.keys(clearKeys);
		browser.pause(500);
		EquipmentPage.contactZip.setValue(details[0][6]);
		browser.pause(1500);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		console.log('entered zip value');
		//EquipmentPage.contactZipdropdownValue(details[0][6]).click();
		this.contactZip = details[0][6];
		browser.pause(2000);
	}


	saveContactDetails() {
		EquipmentPage.btcSaveContactDeatils.waitForDisplayed();
		EquipmentPage.btcSaveContactDeatils.click();
		browser.pause(2000);
	}

	openFirstContact() {
		EquipmentPage.siteContactSection.waitForDisplayed();
		EquipmentPage.siteContactSection.click();
		EquipmentPage.btnHoverEdit.waitForDisplayed();
		EquipmentPage.btnHoverEdit.click();
		console.log('I click on first record to edit it');
	}

	clickAddNewEquipment() {
		//browser.pause(2000);
		EquipmentPage.btnEquipmentProfile.waitForClickable();
		EquipmentPage.btnEquipmentProfile.click();

		EquipmentPage.btnAddEquipment.waitForDisplayed();
		EquipmentPage.btnAddEquipment.waitForClickable();
		EquipmentPage.btnAddEquipment.click();
		console.log('I click on ADD NEW Equipment button');
		browser.keys(this.Esckeys);
		browser.pause(2000);
	}

	addEquipment() {
		browser.pause(5000);
		//browser.waitUntil(function () {return EquipmentPage.profileName.waitForExist();},{ timeout: 4000 });
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		this.equipmentName = 'AutoEquipment' + (Math.floor(new Date() / 1000));
		this.equipmentToSearch = this.equipmentName;
		//EquipmentPage.profileName.waitForDisplayed();
		//EquipmentPage.profileName.waitForClickable();
		//EquipmentPage.profileName.setValue(this.equipmentName);
		this.equipmentDescription = this.equipmentName;
		EquipmentPage.profileDescription.waitForDisplayed();
		EquipmentPage.profileDescription.setValue(this.equipmentDescription);
		EquipmentPage.profilelocation.waitForClickable();
		EquipmentPage.profilelocation.click();
		if(this.customProfile===true)
		{
			EquipmentPage.profilelocationInput.setValue(this.customLocation);
			browser.pause(2000);
			EquipmentPage.autoComplete.waitForDisplayed();
			console.log('custom location set');
			//browser.keys(downArrowKey);
		}
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		if(this.customEquipment===true){
			EquipmentPage.equipmentprofileInput.click();
			browser.pause(500);
			EquipmentPage.equipmentprofileInput.setValue(this.customEquipmentProfile);
			browser.pause(1000);
			browser.keys(downArrowKey);
			browser.keys(downArrowKey);
			browser.keys(enterKey);
			console.log('custom profile set');
			//EquipmentPage.selectCustomEquipmentProfile(this.customEquipmentProfile).click();
		}
		else{
			//EquipmentPage.selectFirstProfile.click();browser.pause(1500);
			EquipmentPage.equipmentprofile.click();
			browser.pause(1500);
			browser.keys(downArrowKey);
			//browser.keys(downArrowKey);
			browser.keys(enterKey);
			browser.pause(1000);
		}
		if(EquipmentPage.profilelocationInput.getValue()==="")
		{
			EquipmentPage.profilelocation.click();
			browser.pause(1000);
			browser.keys(downArrowKey);
			browser.keys(downArrowKey);
			browser.keys(enterKey);
			browser.pause(1000);
		}
		this.equipmentProfile = EquipmentPage.equipmentprofileInput.getValue();
		console.log('equipment profile is '+this.equipmentProfile);
		this.equipmentMacAddress = this.genUniqueMAC();
		EquipmentPage.macAddressEquipment.setValue(this.equipmentMacAddress);
		this.ethernetMAC = this.genUniqueMAC();
		EquipmentPage.ethernetMacEquipment.setValue(this.ethernetMAC);
		EquipmentPage.ethernetMacEquipment.scrollIntoView();
		this.equipmentIpAddress = this.genUniqueIPAddress();
		EquipmentPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
		browser.pause(2000);
		if(EquipmentPage.isErrorMsgExist){
			console.log('error msgs exists');
			var allmsgs = EquipmentPage.allErrorMsgs;
			for(var i=0; i<allmsgs.length; i++){
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
				{
					this.equipmentIpAddress = this.genUniqueIPAddress();
					EquipmentPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
				}
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('MAC address is already assigned to'))
				{
					this.ethernetMAC = this.genUniqueMAC();
					EquipmentPage.ethernetMacEquipment.setValue(this.ethernetMAC);
				}	
			}
		}
		if(this.customProfile==false){
		this.equipmentLocation = EquipmentPage.profilelocationInput.getAttribute('value');
		//this.equipmentProfile =EquipmentPage.equipmentprofileInput.getAttribute('value');
		EquipmentPage.inventoryFromEquipment.scrollIntoView();
		this.inventoryProfile =EquipmentPage.inventoryFromEquipment.getAttribute('value');}
		console.log('equipment profile is'+this.equipmentProfile);
		console.log('original radio mac adressess'+this.equipmentMacAddress);
		console.log('original ethernet mac adressess'+this.ethernetMAC);
		browser.pause(2000);
	}

	addEquipmentWithDuplicateIP() {
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		browser.waitUntil(function () {return EquipmentPage.profileDescription.waitForExist();},{ timeout: 4000 });
		var newequipment  = 'AutoEquipment' + (Math.floor(new Date() / 1000));
		//EquipmentPage.profileName.waitForDisplayed();
		//EquipmentPage.profileName.setValue(newequipment);
		this.equipmentDescription = newequipment;
		EquipmentPage.profileDescription.waitForDisplayed();
		EquipmentPage.profileDescription.setValue(this.equipmentDescription);
		// EquipmentPage.profilelocation.click();
		// browser.pause(2000);
		// EquipmentPage.selectFirstLocation.click();
		// browser.pause(2000);
		// EquipmentPage.equipmentprofile.click();
		// browser.pause(2000);
		// let equipprofile = '5G CPE Equipent 088 (CPE)';
		// EquipmentPage.selectProvidedEquipmentProfile(equipprofile).click();
		// browser.pause(2000);
		EquipmentPage.profilelocation.waitForClickable();
		EquipmentPage.profilelocation.click();
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		EquipmentPage.equipmentprofile.click();
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		EquipmentPage.profilelocation.click();
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		this.equipmentMacAddress = this.genUniqueMAC();
		EquipmentPage.macAddressEquipment.setValue(this.equipmentMacAddress);
		EquipmentPage.macAddressEquipment.scrollIntoView();
		EquipmentPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
		browser.pause(2000);
	}

	refreshPage()
	{
		browser.pause(2000);
		browser.refresh();
		browser.pause(7000);
	}

	addEquipmentWithDuplicateMac()
	{
		browser.waitUntil(function () {return EquipmentPage.profileDescription.waitForExist();},{ timeout: 4000 });
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		var newequipment  = 'AutoEquipment' + (Math.floor(new Date() / 1000));
		//EquipmentPage.profileName.waitForDisplayed();
		//EquipmentPage.profileName.setValue(newequipment);
		this.equipmentDescription = newequipment;
		EquipmentPage.profileDescription.waitForDisplayed();
		EquipmentPage.profileDescription.setValue(this.equipmentDescription);
		EquipmentPage.profilelocation.waitForClickable();
		EquipmentPage.profilelocation.click();
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		EquipmentPage.equipmentprofile.click();
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		EquipmentPage.profilelocation.click();
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		console.log('duplicated radio mac adressess'+this.equipmentMacAddress);
		EquipmentPage.macAddressEquipment.click();
		browser.pause(1000);
		EquipmentPage.macAddressEquipment.setValue(this.equipmentMacAddress);
		console.log('duplicated ethernet mac adressess'+this.ethernetMAC);
		EquipmentPage.ethernetMacEquipment.click();
		browser.pause(1000);
		EquipmentPage.ethernetMacEquipment.setValue(this.ethernetMAC);
		this.equipmentIpAddress = this.genUniqueIPAddress();
		browser.pause(2000);
		EquipmentPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
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
	closeEditEquipment()
	{
		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect(EquipmentPage.confirmationMsg.getText()).to.eql(this.addedEquipmentConfMsg);
		browser.pause(4000);
		//EquipmentPage.btnCloseOfDock('Edit Equipment').click();
		EquipmentPage.btnCloseOfDock.waitForDisplayed();
		EquipmentPage.btnCloseOfDock.waitForClickable();
		//let lengthofclose = EquipmentPage.btnCloseOfDock.length;
		//console.log('total length of close area is '+lengthofclose);
		EquipmentPage.btnCloseOfDock.click();
		browser.pause(2000);
		//EquipmentPage.btnEquipmentProfile.scrollIntoView();
		//EquipmentPage.btnEquipmentProfile.moveTo();
		//browser.pause(1000);
		console.log('closed dialog');
	}

	SelectAnyEquipmentProfile()
	{
		//browser.pause(1000);
		// if(this.equipmentProfile!="")
		// {
		// 	this.clickOnEquipmentSearch();
		// 	this.typeInEquipmentSearch(this.equipmentProfile);
		// 	browser.pause(3000);
		// }
		EquipmentPage.firstEquipmentProfile.waitForDisplayed();
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		EquipmentPage.firstEquipmentProfile.click();
		browser.pause(3000);
	}

	clickDotMenuOfEquipmentItem()
	{
		EquipmentPage.dockedSearhField.waitForDisplayed();
		EquipmentPage.dockedSearhField.click();
		EquipmentPage.dockedSearhField.setValue(this.equipmentName);
		browser.pause(5000);
		console.log('going to delete');
		var allcelldata = EquipmentPage.dockedEquipmentItem;
		console.log('total length is :' + allcelldata.length);
		allcelldata[0].moveTo();
		browser.pause(1000);
		EquipmentPage.btnDotEquiment.moveTo();
		browser.pause(2000);
		EquipmentPage.btnDotEquiment.click();
		//EquipmentPage.btnDotEquiment.click();
		//browser.pause(3000);
	}

	clickDeleteButton()
	{
		//EquipmentPage.btnDeleteEquipment.waitForDisplayed();
		EquipmentPage.btnDeleteEquipment.waitForClickable();
		EquipmentPage.btnDeleteEquipment.click();
	}

	clickYesOfConfirmationButton()
	{
		EquipmentPage.btnYes.waitForDisplayed();
		EquipmentPage.btnYes.click();
	}
	
	clickAddEquipmentFromSite()
	{
		EquipmentPage.btnAddEquipmentFromSiteMenu.waitForDisplayed();
		EquipmentPage.btnAddEquipmentFromSiteMenu.waitForClickable();
		//EquipmentPage.btnAddEquipmentFromSiteMenu.moveTo();
		EquipmentPage.btnAddEquipmentFromSiteMenu.click();
		//var enterkeys = ['\uE007'];// enter
		//browser.keys(enterkeys);
		browser.pause(500);
		EquipmentPage.btnAddEquipmentFromSite.waitForDisplayed();
		EquipmentPage.btnAddEquipmentFromSite.waitForClickable();
		EquipmentPage.btnAddEquipmentFromSite.click();
	}

	closeInventoryDialog()
	{
		browser.pause(4000);
		console.log('going to close dialog');
		EquipmentPage.closeAddInventory.waitForClickable();
		EquipmentPage.closeAddInventory.click();
		console.log('dialog closed');
		browser.pause(2000);
	}
	closePODialog()
	{
		EquipmentPage.poCreatedHeader.waitForDisplayed();
		browser.pause(2000);
		console.log('going to close dialog');
		EquipmentPage.closeAddPO.waitForClickable();
		EquipmentPage.closeAddPO.click();
		console.log('dialog closed');
		browser.pause(2000);
	}

	selectFirstInventoryProfile()
	{
		browser.pause(5000);
		this.ramLocation = EquipmentPage.firstRowData[0].getText();
		browser.pause(2000);
		EquipmentPage.inventoryHeaderbuttons[1].waitForDisplayed();
		EquipmentPage.inventoryHeaderbuttons[1].click();
		EquipmentPage.inventorySearch.click();
		EquipmentPage.inventorySearch.setValue('Generic LG Phone');
		browser.pause(2000);
		EquipmentPage.firstInventoryRowData[1].waitForDisplayed();
		EquipmentPage.firstInventoryRowData[1].waitForExist();
		EquipmentPage.firstInventoryRowData[1].click();
	}

	clickOnInventorySearchbar()
	{
		browser.pause(3000);
		EquipmentPage.inventoryHeaderbuttons[0].waitForDisplayed();
		EquipmentPage.inventoryHeaderbuttons[0].click();
		EquipmentPage.inventorySearch.click();
	}

	enterInventoryToSearch(itemToSearch)
	{
		itemToSearch = itemToSearch.replace(/['"]+/g, '');
		EquipmentPage.inventorySearch.waitForDisplayed();
		EquipmentPage.inventorySearch.waitForClickable();
		EquipmentPage.inventorySearch.scrollIntoView();
		EquipmentPage.inventorySearch.setValue(itemToSearch);
		browser.pause(2000);
		EquipmentPage.inventoryHeaderbuttons[3].click();
		browser.pause(1000);
		if(EquipmentPage.isListViewSelected.getAttribute('class').includes('invisible'))
		{
		 	EquipmentPage.inventoryProfileTableView.waitForDisplayed();
			EquipmentPage.inventoryProfileTableView.waitForClickable();
		 	EquipmentPage.inventoryProfileTableView.click();
		 	browser.pause(2000);
		}
		else{browser.keys('\ue00c');}
		EquipmentPage.firstInventoryRowData[1].waitForDisplayed();
		EquipmentPage.firstInventoryRowData[1].waitForExist();
		this.inventoryProfile = EquipmentPage.firstInventoryRowData[1].getText();
		console.log('extracted inventory value is'+this.inventoryProfile);
	}

	changeInventoryTableView(tableView){
		browser.pause(5000);
		EquipmentPage.inventoryMeatBall.scrollIntoView();
        EquipmentPage.inventoryMeatBall.click();
        browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		switch(tableView){
			case "Comfortable":
				EquipmentPage.inventoryTableViewComfortable.waitForDisplayed();
				EquipmentPage.inventoryTableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				EquipmentPage.inventoryTableViewCompact.waitForDisplayed();
				EquipmentPage.inventoryTableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				EquipmentPage.inventoryTableViewCozy.waitForDisplayed();
				EquipmentPage.inventoryTableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
	}

	enableInventoryInlineEditing(){
		browser.pause(5000);
		if(EquipmentPage.inventoryCardViewVerification.isExisting())
		{
			this.changeInventoryView('List');
			browser.pause(3000);
		}
		EquipmentPage.inventoryMeatBall.waitForDisplayed();
		EquipmentPage.inventoryMeatBall.scrollIntoView();
        EquipmentPage.inventoryMeatBall.click();
        browser.pause(1000);
		if(EquipmentPage.inventoryTableView(EquipmentPage.inventoryTableInlineEditing).getAttribute('class').includes('text-success'))
		{}
		else{
				EquipmentPage.inventoryTableInlineEditing.waitForDisplayed();
				EquipmentPage.inventoryTableInlineEditing.click();
				browser.pause(1000);
		}
	}

	editInventoryInlineProfileSKu(profile,sku){
		browser.pause(2000);
		//EquipmentPage.inventoryMeatBall.waitForDisplayed();
        //EquipmentPage.inventoryMeatBall.click();
		//EquipmentPage.btnChooseColumn.waitForDisplayed();
		//EquipmentPage.btnChooseColumn.click();
		//browser.pause(1000);
		//EquipmentPage.btnSelectUnselectColumn('Manufacturer').waitForDisplayed();
		//EquipmentPage.btnSelectUnselectColumn('Manufacturer').click();
		//EquipmentPage.btnCloseDialog.click();
		//browser.pause(2000);
		EquipmentPage.inventoryHeaderbuttons[0].waitForDisplayed();
		EquipmentPage.inventoryHeaderbuttons[0].click();
		EquipmentPage.inventorySearch.click();
		profile = profile.replace(/['"]+/g, '');
		sku = sku.replace(/['"]+/g, '');
		EquipmentPage.inventorySearch.setValue(profile);
		browser.pause(4000);
		this.inventorySKU = sku + '+Auto' + (Math.floor(new Date() / 1000));
		var skucolumn = EquipmentPage.firstInventoryRowData[4];
		this.inlineEditingParent = skucolumn;
		skucolumn.waitForDisplayed();
		skucolumn.waitForExist();
		skucolumn.scrollIntoView();
		skucolumn.moveTo();
		skucolumn.click();
		browser.pause(2000);
		EquipmentPage.inputInlineEditing(skucolumn).setValue('');
		EquipmentPage.inputInlineEditing(skucolumn).setValue(this.inventorySKU);
		browser.pause(1000);
	}

	clickSaveInlineEditing()
	{
		EquipmentPage.saveInlineEditing(this.inlineEditingParent).waitForDisplayed();
		EquipmentPage.saveInlineEditing(this.inlineEditingParent).click();
		EquipmentPage.confirmationMsg.waitForDisplayed();
		EquipmentPage.confirmationMsg.isExisting();
	}

	changeInventoryView(inventoryView){
		browser.pause(2000);
		EquipmentPage.tabInventory.click();
		browser.pause(2000);
		EquipmentPage.inventoryHeaderbuttons[2].waitForDisplayed();
		EquipmentPage.inventoryHeaderbuttons[2].scrollIntoView();
		EquipmentPage.inventoryHeaderbuttons[2].click();
        browser.pause(2000);
		inventoryView = inventoryView.replace(/['"]+/g, '');
		switch(inventoryView){
			case "List":
				EquipmentPage.inventoryCardView.waitForDisplayed();
				EquipmentPage.inventoryCardView.waitForClickable();
				EquipmentPage.inventoryCardView.click();
				browser.pause(4000);
				EquipmentPage.inventoryHeaderbuttons[2].click();
        		browser.pause(2000);
				EquipmentPage.inventoryProfileTableView.waitForDisplayed();
				EquipmentPage.inventoryProfileTableView.waitForClickable();
				EquipmentPage.inventoryProfileTableView.click();
				browser.pause(4000);
				break;
			case "Tiles":
				EquipmentPage.inventoryCardView.waitForDisplayed();
				EquipmentPage.inventoryCardView.waitForClickable();
				EquipmentPage.inventoryCardView.click();
				browser.pause(2000)
				break;
		}
		console.log('I set inventory view to '+ inventoryView);
	}

	selectInventoryTableView()
	{
		EquipmentPage.tabInventory.waitForDisplayed();
		EquipmentPage.tabInventory.waitForClickable();
		EquipmentPage.tabInventory.click();
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
		EquipmentPage.btnEquipmentHeaderMenu.waitForClickable();
		EquipmentPage.btnEquipmentHeaderMenu.click();
		if(EquipmentPage.isTileViewSelected.getAttribute('class').includes('invisible'))
		{
		 	EquipmentPage.selectEquipmentTilesItem.waitForDisplayed();
			EquipmentPage.selectEquipmentTilesItem.waitForClickable();
		 	EquipmentPage.selectEquipmentTilesItem.click();
		}
		else{browser.keys('\ue00c');}
		browser.pause(2000);
	}

	clickAddInventoryItem()
	{
		browser.pause(5000);
		EquipmentPage.tabInventory.waitForDisplayed();
		EquipmentPage.tabInventory.click();
		browser.pause(2000);
		EquipmentPage.btnAddInventory.waitForClickable();
		EquipmentPage.btnAddInventory.click();
		browser.keys(this.Esckeys);
        browser.pause(2000);
	}

	fillInventoryItemDetails(inventProfile)
	{
		var downArrowKey = ['\ue015'];// arrow down
		var enterkeys = ['\uE007'];// enter
		inventProfile = inventProfile.replace(/['"]+/g, '');
		browser.pause(2000);
		this.inventoryItemName = 'AutoInvItem' + (Math.floor(new Date() / 1000));
		//EquipmentPage.inventoryItemName.waitForDisplayed();
		//EquipmentPage.inventoryItemName.setValue(this.inventoryItemName);
		EquipmentPage.rmaLocation.click();
		browser.pause(2000);
		//console.log('location value is :' + this.ramLocation);
		this.ramLocation ='Default Location';
		var allcharacters = this.ramLocation.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.pause(500);
		browser.keys(downArrowKey);
		browser.keys(enterkeys);
		browser.pause(2000);
		console.log('pressed keys');
		this.inventoryItemSerial = 'AutoSerial' + (Math.floor(new Date() / 1000));
		EquipmentPage.inventoryItemSerial.setValue(this.inventoryItemSerial);
		EquipmentPage.inventoryprofile.click();
		browser.pause(1000);
		EquipmentPage.inventoryprofile.setValue(inventProfile);
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.pause(500);
		browser.keys(downArrowKey);
		browser.keys(enterkeys);
		browser.pause(1000);
		//EquipmentPage.selectCiscoInventoryProfile.click();
		EquipmentPage.note.click();
		browser.pause(2000);
	}

	selectFirstInventoryItem()
	{
		browser.pause(5000);
		EquipmentPage.dockedInventoryItem[2].waitForDisplayed();
		EquipmentPage.dockedInventoryItem[2].waitForExist();
		EquipmentPage.dockedInventoryItem[2].click();
	}

	clickOnDottedInventoryMenu()
	{
		browser.pause(7000);
		EquipmentPage.inventoryDottedMenu.waitForDisplayed();
		EquipmentPage.inventoryDottedMenu.waitForExist();
		EquipmentPage.inventoryDottedMenu.click();
	}

	clickOnCreateRMA()
	{
		EquipmentPage.btnCreateRMA.waitForDisplayed();
		EquipmentPage.btnCreateRMA.waitForExist();
		EquipmentPage.btnCreateRMA.click();
	}

	addRMADetails()
	{
		var downArrowKey = ['\ue015'];// arrow down
		var enterkeys = ['\uE007'];// enter
		//this.rmaDate = this.getCurrentDate(2);
		EquipmentPage.rmaDate.waitForDisplayed();
		EquipmentPage.rmaDate.waitForExist();
		//EquipmentPage.rmaDate.setValue(this.rmaDate);
		EquipmentPage.rmaVendor.click();
		browser.pause(1000);
		//EquipmentPage.selectrmaVendorDropDown.click();
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterkeys);
		browser.pause(2000);
		var randomNumbers = (Math.floor(new Date() / 1000));
		this.rmaNumber ='RM-'+ randomNumbers;
		EquipmentPage.rmaNumber.setValue(this.rmaNumber);
		browser.pause(1500);
		//this.rmaReturnDate =this.getCurrentDate('');
		//EquipmentPage.rmaReturnDate.setValue(this.rmaReturnDate);
		this.rmaTrackingNumber ='RT-'+ randomNumbers;
		EquipmentPage.rmaTrackingNumber.setValue(this.rmaTrackingNumber);
		browser.pause(1500);
		//this.rmaShippedDate = this.rmaReturnDate;
		//EquipmentPage.rmaShippedDate.setValue(this.rmaShippedDate);
		this.rmaShippedTracking = 'SH-'+ randomNumbers;
		EquipmentPage.rmaShippedNumber.setValue(this.rmaShippedTracking);
		this.rmaVendor = EquipmentPage.rmaVendor.getAttribute('value');
		// EquipmentPage.rmaLocation.click();
		// console.log('location value is :' + this.ramLocation);
		// var allcharacters = this.ramLocation.split("");
		// for(var i=0; i<allcharacters.length; i++){
		// 	let key = allcharacters[i];
		// 	browser.keys(['Meta',key]);
		// 	browser.pause(500);
		// 	}
		// browser.pause(5000);
		// var enterkeys = ['\uE007'];// enter
		// browser.keys(enterkeys);
		browser.pause(2000);
	}

	saveRMADetails()
	{
		EquipmentPage.btnSaveRMA.waitForClickable();
		EquipmentPage.btnSaveRMA.click();
	}

	getCurrentDate(defineDay)
	{
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		if(defineDay!=''){dd = dd - defineDay;}
		today = dd + '/' + mm + '/' + yyyy;
		return today;
	}

	clickOnAddPurchaseOrder()
	{
		browser.pause(3000);
		EquipmentPage.btnCreatePurchaseOrder.waitForExist();
		EquipmentPage.btnCreatePurchaseOrder.waitForDisplayed();
		EquipmentPage.btnCreatePurchaseOrder.scrollIntoView();
		EquipmentPage.btnCreatePurchaseOrder.click();
		browser.keys(this.Esckeys);
		browser.pause(7000);
	}
	gotoPOSection()
	{
		EquipmentPage.puchaseOrderSection.scrollIntoView();
		EquipmentPage.puchaseOrderSection.waitForDisplayed();
	}

	enterPurchaseOrderDetails(profileitem,vendor)
	{
		var downArrowKey = ['\ue015'];// arrow down
		var enterkeys = ['\uE007'];// enter
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		browser.pause(5000);
		EquipmentPage.dockedProfileItem.waitForClickable();
		EquipmentPage.dockedProfileItem.click();
		browser.pause(1000);
		EquipmentPage.dockedProfileItem.setValue(profileitem);
		browser.pause(1000);
		browser.keys(downArrowKey);
		browser.pause(100);
		browser.keys(downArrowKey);
		browser.keys(enterkeys);
		//EquipmentPage.selectProfileItem(profileitem).click();
		EquipmentPage.dockedVendor.waitForClickable();
		EquipmentPage.dockedVendor.click();
		browser.pause(1000);
		EquipmentPage.dockedVendor.keys(clearKeys);
		//EquipmentPage.selectVendorItem(vendor).click();'
		EquipmentPage.dockedVendor.setValue(vendor);
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.pause(100);
		browser.keys(downArrowKey);
		browser.keys(enterkeys);
		browser.pause(2000);
		this.poProfileItem = EquipmentPage.dockedProfileItem.getAttribute('value');
		this.poVendor = EquipmentPage.dockedVendor.getAttribute('value');
		this.poQuantity = EquipmentPage.dockedquantity.getAttribute('value');
	}

	clickOnContinue()
	{
		browser.pause(2000);
		EquipmentPage.btnContinue.waitForDisplayed();
		EquipmentPage.btnContinue.click();
	}

	clickOnCreateOrder()
	{
		browser.pause(2000);
		EquipmentPage.btnCreatePO.waitForDisplayed();
		EquipmentPage.btnCreatePO.click();
	}
	openNewlyCreatedPO()
	{
		EquipmentPage.btnOpenNewlyPO.waitForDisplayed();
		EquipmentPage.btnOpenNewlyPO.waitForClickable();
		EquipmentPage.btnOpenNewlyPO.click();
		browser.pause(2000);
	}
	selectAnyPurchaseOrder()
	{
		browser.pause(5000);
		console.log('on Po screen');
		EquipmentPage.btnCreatePurchaseOrder.waitForDisplayed();
		EquipmentPage.btnCreatePurchaseOrder.scrollIntoView();
		if(EquipmentPage.purchaseOrderMeatBall.isExisting()){}
		else{
			console.log('going to open PO');
			EquipmentPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			EquipmentPage.purchaseOrderTableView.waitForDisplayed();
			EquipmentPage.purchaseOrderTableView.waitForClickable();
			EquipmentPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		console.log('going to open PO');
		var firstRowDetail = EquipmentPage.purchaseOrderfirstRowData;
		firstRowDetail[1].click();
	}

	clickOnStatus()
	{
		browser.pause(3000);
		EquipmentPage.btnOrderStatus.waitForDisplayed();
		EquipmentPage.btnOrderStatus.click();
	}

	clickOrderStatus()
	{
		browser.pause(2000);
		this.poOrderedStatus ='ORDERED';
		EquipmentPage.changePoStatus('ORDERED').click();
	}

	clickYesOfPopUp()
	{
		browser.pause(2000);
		EquipmentPage.btnPopYes.waitForDisplayed();
		EquipmentPage.btnPopYes.click();
	}

	clickOnISsearchbar()
	{
		if(EquipmentPage.btnCloseSiteSearch.isExisting()){EquipmentPage.btnCloseSiteSearch.click();}
		EquipmentPage.btnSiteSearch.waitForDisplayed();
		EquipmentPage.btnSiteSearch.waitForExist();
		EquipmentPage.btnSiteSearch.click();
		browser.pause(2000);
	}

	typeInISsearhbar(siteTosearch)
	{
		siteTosearch = siteTosearch.replace(/['"]+/g, '');
		//browser.pause(2000);
		EquipmentPage.inputSiteSearch.setValue(siteTosearch);
		//browser.pause(2000);
		console.log('site to search is '+siteTosearch);
		this.siteName = siteTosearch;
	}

	changeISRowDensity(tableView)
	{
		browser.pause(5000);
		EquipmentPage.infrastructureLocationCardHeading.click();
		EquipmentPage.infrastructureMeatBall.waitForDisplayed();
        EquipmentPage.infrastructureMeatBall.click();
        browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		switch(tableView){
			case "Comfortable":
				EquipmentPage.infrastructureTableViewComfortable.waitForDisplayed();
				EquipmentPage.infrastructureTableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				EquipmentPage.infrastructureTableViewCompact.waitForDisplayed();
				EquipmentPage.infrastructureTableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				EquipmentPage.infrastructureTableViewCozy.waitForDisplayed();
				EquipmentPage.infrastructureTableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
	}

	enableInfrastructureInlineEditing()
	{
		//this.closeDock();
		browser.pause(3000);
		//EquipmentPage.infrastructureLocationCardHeading.click();
		EquipmentPage.infrastructureMeatBall.waitForDisplayed();
        EquipmentPage.infrastructureMeatBall.click();
		if(EquipmentPage.inlineEditingStatus().isExisting()){browser.keys(this.Esckeys);}
		else{EquipmentPage.infrastructureTableInlineEditing.click();browser.pause(1000);}
		
	}
	DisableInfrastructureInlineEditing()
	{
		//this.closeDock();
		browser.pause(3000);
		//EquipmentPage.infrastructureLocationCardHeading.click();
		EquipmentPage.infrastructureMeatBall.waitForDisplayed();
        EquipmentPage.infrastructureMeatBall.click();
		if(EquipmentPage.inlineEditingStatus().isExisting()){
		EquipmentPage.infrastructureTableInlineEditing.click();browser.pause(1000);}
		else{browser.keys(this.Esckeys);}
		
	}

	enterInfrastructureInlineData(addressonepara,addresstwopara,citypara,zippara)
	{
		browser.pause(4000);
		//name = name.replace(/['"]+/g, '');
		addressonepara = addressonepara.replace(/['"]+/g, '');
		addresstwopara = addresstwopara.replace(/['"]+/g, '');
		citypara = citypara.replace(/['"]+/g, '');
		zippara = zippara.replace(/['"]+/g, '');
		//var infSName = EquipmentPage.InfrastructureRowData[2];
		//this.editInlineAndSave(infSName,name);
		//this.siteName =  name;
		var addressOne = EquipmentPage.InfrastructureRowData[3];
		this.editInlineAndSave(addressOne,addressonepara);
		console.log('address one is saved'+addressonepara);
		this.siteAddress1 =  addressonepara;
		var addressTwo = EquipmentPage.InfrastructureRowData[4];
		this.editInlineAndSave(addressTwo,addresstwopara);
		console.log('address two is saved'+addresstwopara);
		this.siteAddress2 =  addresstwopara;
		var cityfrom = EquipmentPage.InfrastructureRowData[5];
		this.editInlineAndSave(cityfrom,citypara);
		console.log('city is saved'+citypara);
		this.siteCity =  citypara;
		let lastUpdateColumnHeader = $$('[aria-label="Zip"]')[0];
		lastUpdateColumnHeader.scrollIntoView();
		lastUpdateColumnHeader.waitForExist();
		let ariaHidden = lastUpdateColumnHeader.getAttribute('aria-hidden');
		console.log(ariaHidden); // Output: "false"
		var lastUpdateCellValue = $$('[data-field="zip"]')[1];
		lastUpdateCellValue.scrollIntoView();
		lastUpdateCellValue.waitForExist();
		//var zipfrom = EquipmentPage.InfrastructureRowData[7];
		this.editInlineAndSave(lastUpdateCellValue,zippara);
		console.log('zip is saved'+zippara);
		this.siteZip =  zippara;
	}

	editInlineAndSave(itemName,valueToSet)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		browser.pause(3000);
		this.inlineEditingParent = itemName;
		//itemName.waitForDisplayed();
		//itemName.waitForExist();
		//itemName.scrollIntoView();
		itemName.moveTo();
		browser.pause(2000);
		itemName.click();
		browser.pause(1000);
		var inlineInput = EquipmentPage.inputInlineEditing(itemName);
		inlineInput.click();
		inlineInput.keys(clearKeys);
		browser.pause(1000);
		inlineInput.setValue(valueToSet);
		browser.pause(2000);
		this.clickSaveInlineEditing();
		browser.pause(3000);
	}

	changeInfrastructureTableView(tableView)
	{
		browser.pause(5000);
		EquipmentPage.btnSiteMenu.waitForDisplayed();
        EquipmentPage.btnSiteMenu.click();
        browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		switch(tableView){
			case "Single table":
				EquipmentPage.infrastructureSingleTable.waitForDisplayed();
				EquipmentPage.infrastructureSingleTable.waitForClickable();
				EquipmentPage.infrastructureSingleTable.click();
				browser.pause(2000);
				break;
			case "Tabs":
				// EquipmentPage.infrastructureSingleTable.waitForDisplayed();
				// EquipmentPage.infrastructureSingleTable.click();
				// browser.pause(2000);
				// EquipmentPage.btnSiteMenu.waitForDisplayed();
        		// EquipmentPage.btnSiteMenu.click();
        		// browser.pause(2000);
				EquipmentPage.infrastructureTabs.waitForDisplayed();
				EquipmentPage.infrastructureTabs.waitForClickable();
				EquipmentPage.infrastructureTabs.click();
				browser.pause(2000)
				break;
		}
		console.log('I set Infrastructure Locations view to '+ tableView);
	}

	expandInfrastructureTree()
	{
		//browser.pause(5000);
		EquipmentPage.btnArrowback.waitForDisplayed();
		EquipmentPage.btnArrowback.waitForExist();
		EquipmentPage.btnArrowback.waitForClickable();
		EquipmentPage.btnArrowback.click();
		browser.pause(1000);
		EquipmentPage.btnArrowForward.waitForDisplayed();
		EquipmentPage.btnArrowForward.waitForExist();
		EquipmentPage.btnArrowForward.waitForClickable();
		EquipmentPage.btnArrowForward.click();
	}

	defineEquipmentProfilePtpType()
	{
		browser.pause(3000);
		EquipmentPage.btnAppIcon.waitForDisplayed();
		EquipmentPage.btnAppIcon.click();
		browser.pause(2000);
		EquipmentPage.btnSettingsEquipment.waitForDisplayed();
		EquipmentPage.btnSettingsEquipment.waitForClickable();
		EquipmentPage.btnSettingsEquipment.click();
		EquipmentPage.btnInventoryProfileFromMenu.waitForDisplayed();
		EquipmentPage.btnInventoryProfileFromMenu.waitForClickable();
		EquipmentPage.btnInventoryProfileFromMenu.click();
		EquipmentPage.btnEquipmentProfileOnInventoryProfile.waitForDisplayed();
		EquipmentPage.btnEquipmentProfileOnInventoryProfile.click();
		browser.pause(4000);
		let isProfileDefinied =false;
		var allDeiniedEqupProfiles = EquipmentPage.equipmentProfileList;

		for(var i=0; i<allDeiniedEqupProfiles.length; i++){
				if(allDeiniedEqupProfiles[i].getText().includes('PtP')){
					isProfileDefinied=true;
					break;
				}
			}
		if(isProfileDefinied===false){
			browser.pause(2000);
			EquipmentPage.btnAddEquipmentProfile.waitForDisplayed();
			EquipmentPage.btnAddEquipmentProfile.click();
			browser.pause(2000);
			EquipmentPage.equipmentProfileType.click();
			browser.pause(1000);
			EquipmentPage.selectEquipmentProfilePtpType.click();
			browser.pause(2000);
			this.equipmentProfile = 'AutoPtp' + (Math.floor(new Date() / 1000));
			browser.pause(1000);
			EquipmentPage.equipmentProfileDescription.setValue(this.equipmentProfile);
			browser.pause(2000);
			EquipmentPage.equipmentDeviceType.click();
			browser.pause(1000);
			EquipmentPage.selectEquipmentProfileInventoryType.click();
			EquipmentPage.btnAdd.waitForClickable();
			EquipmentPage.btnAdd.click();
		}
		browser.pause(3000);
		EquipmentPage.btnCloseEditEquipmentProfile.waitForDisplayed();
		EquipmentPage.btnCloseEditEquipmentProfile.click();
		browser.pause(3000);
	}

	addPtpSiteAEquipment()
	{
		browser.pause(2000);
		this.clickAddEquipmentFromSite();
		this.customProfile = true ;
		this.customLocation='';
		this.customLocation = this.subSiteName;//'SubAutoSite1644898077';
		console.log('subsite name  is ' + this.subSiteName);
		this.customEquipment= true;
		console.log('custom equipment profile is ' + this.equipmentProfile);
		this.customEquipmentProfile = this.equipmentProfile;
		this.addEquipment();
		EquipmentPage.btnInterconnection.click();
		browser.pause(1000);
		var allsavebuttons = EquipmentPage.getAllsaveButtons;
		//console.log('total save buttons' + allsavebuttons.length);
		allsavebuttons[0].click();
		browser.pause(1000);
	}

	keepSiteADetails()
	{
		this.siteAProfileName = this.siteName;
		this.siteASublocationName = this.subSiteName;
		this.siteAPtpEquipmentName = this.equipmentName ;
		this.siteAInterConnectName = this.siteASublocationName+' - '+this.siteAPtpEquipmentName;
	}

	keepSiteBDetails()
	{
		this.siteBProfileName = this.siteName;
		this.siteBSublocationName = this.subSiteName;
		this.siteBPtpEquipmentName = this.equipmentName ;
	}

	clickSiteInterConnections()
	{
		browser.pause(2000);
		EquipmentPage.btnInterconnection.click();
		browser.pause(1000);
		EquipmentPage.selectInterConnectionEquipment(this.siteBPtpEquipmentName).click();
		browser.pause(2000);
		EquipmentPage.editPtpAddedEquipment[0].click();
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		console.log('site A and Its Equipment name is '+this.siteAInterConnectName);
		EquipmentPage.remoteSiteInput.click();
		EquipmentPage.remoteSiteInput.keys(clearKeys);
		browser.pause(1000);
		console.log('going to add remote link of site A Equipment '+this.siteAPtpEquipmentName);
		EquipmentPage.remoteSiteInput.click();
		var allcharacters = this.siteAPtpEquipmentName.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(200);
			}

		//EquipmentPage.remoteSiteInput.setValue(this.siteAInterConnectName);
		browser.pause(3000);
		var downArrowKey = ['\ue015'];// arrow down
		browser.keys(downArrowKey);
		//browser.keys(downArrowKey);
		var enterkeys = ['\uE007'];// enter
		browser.keys(enterkeys);
		//EquipmentPage.selectSublocationsForRemoteLink(this.siteAInterConnectName).click();
		browser.pause(2000);
		var allsavebuttons = EquipmentPage.getAllsaveButtons;
		allsavebuttons[0].click();
		//browser.pause(4000);
	}
	closeSubDockOpened()
	{
		browser.pause(4000);
		EquipmentPage.closeSubDock.click();
	}
	editSiteAEquipment()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		//EquipmentPage.btnInterconnection.click();
		//browser.pause(2000);
		//EquipmentPage.selectInterConnectionEquipment(this.siteBPtpEquipmentName).click();
		//EquipmentPage.btnArrowback.click();
		//browser.pause(4000);
		EquipmentPage.editPtpAddedEquipment[1].click();
		browser.pause(3000);
		console.log('going to edit site A Equipment');
		this.equipmentName = 'AutoEquipment' + (Math.floor(new Date() / 1000));
		EquipmentPage.profileDescription.waitForDisplayed();
		EquipmentPage.profileDescription.click();
		EquipmentPage.profileDescription.keys(clearKeys);
		EquipmentPage.profileDescription.setValue(this.equipmentName);
		browser.pause(3000);
		var allsavebuttons = EquipmentPage.getAllsaveButtons;
		allsavebuttons[0].click();
		EquipmentPage.confirmationMsg.waitForDisplayed();
		browser.pause(3000);
		EquipmentPage.closeEditEquipment.click();
		console.log('updated site A Equipment is'+this.equipmentName);
	//	EquipmentPage.btnSubSiteEquiEdit.waitForDisplayed();
	//	EquipmentPage.btnSubSiteEquiEdit.click();
		this.siteAPtpEquipmentName = this.equipmentName ;
		//EquipmentPage.btnArrowForward.waitForDisplayed();
		//EquipmentPage.btnArrowForward.waitForClickable();
		//EquipmentPage.btnArrowForward.click();
		//EquipmentPage.btnInterconnection.waitForDisplayed();
		//EquipmentPage.btnInterconnection.waitForClickable();
		//EquipmentPage.btnInterconnection.click();
		//EquipmentPage.selectInterConnectionEquipment(this.siteAPtpEquipmentName).click();
		browser.pause(2000);
	}

	editSiteBEquipment()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		//EquipmentPage.btnInterconnection.click();
		//browser.pause(1000);
		//EquipmentPage.selectInterConnectionEquipment('AutoEquipment1644908531 to AutoEquipment16449052887').click();
		//EquipmentPage.btnArrowback.click();
		//browser.pause(3000);
		EquipmentPage.editPtpAddedEquipment[3].click();
		browser.pause(3000);
		console.log('going to edit site B Equipment');
		//this.equipmentName = 'AutoBEquipment' + (Math.floor(new Date() / 1000));
		EquipmentPage.profileDescription.waitForDisplayed();
		EquipmentPage.profileDescription.waitForClickable();
		EquipmentPage.profileDescription.click();
		browser.pause(1500);
		browser.keys(clearKeys);
		browser.pause(1500);
		EquipmentPage.profileDescription.setValue('AutoBEquipment' + (Math.floor(new Date() / 1000)));
		browser.pause(1000);
		let updatedvalue = EquipmentPage.profileDescription.getValue();	
		console.log('updated description is'+updatedvalue);
		var allsavebuttons = EquipmentPage.getAllsaveButtons;
		allsavebuttons[0].click();
		EquipmentPage.confirmationMsg.waitForDisplayed();
		browser.pause(3000);
		EquipmentPage.closeBequipMent.click();
		this.siteBPtpEquipmentName = updatedvalue ;
		console.log('updated site B Equipment is'+updatedvalue);
		//EquipmentPage.btnArrowForward.waitForDisplayed();
		//EquipmentPage.btnArrowForward.waitForClickable();
		//EquipmentPage.btnArrowForward.click();
		//EquipmentPage.btnInterconnection.waitForDisplayed();
		//EquipmentPage.btnInterconnection.waitForClickable();
		//EquipmentPage.btnInterconnection.click();
		//EquipmentPage.selectInterConnectionEquipment(this.siteAPtpEquipmentName).click();
		browser.pause(2000);
	}
	
	selectAnyEquipmentItem()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		EquipmentPage.dockedSearhField.waitForDisplayed();
		EquipmentPage.dockedSearhField.click();
		EquipmentPage.dockedSearhField.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.dockedSearhField.setValue(this.equipmentToSearch);
		browser.pause(5000);
		var allcelldata = EquipmentPage.dockedEquipmentItem;
		allcelldata[2].click();
	}

	changeEquipmentDetails(equipprofile)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var downArrowKey = ['\ue015'];// arrow down
		var enterkeys = ['\uE007'];// enter
		equipprofile = equipprofile.replace(/['"]+/g, '');
		//EquipmentPage.equipmentprofile.waitForDisplayed();
		//EquipmentPage.equipmentprofile.waitForExist();
		browser.pause(2000);
		//EquipmentPage.equipmentprofile.click();
		//browser.pause(2000);
		//EquipmentPage.selectProvidedEquipmentProfile(equipprofile).click();
		EquipmentPage.equipmentprofileInput.waitForClickable();
		EquipmentPage.equipmentprofileInput.click();
		browser.pause(1000);
		EquipmentPage.equipmentprofileInput.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.equipmentprofileInput.setValue(equipprofile);
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterkeys);
		browser.pause(1000);
		this.equipmentIpAddress = this.genUniqueIPAddress();
		browser.pause(2000);
		EquipmentPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
		browser.pause(2000);
		this.ethernetMAC = this.genUniqueMAC();
		EquipmentPage.ethernetMacEquipment.click();
		EquipmentPage.ethernetMacEquipment.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.ethernetMacEquipment.setValue(this.ethernetMAC);
		browser.pause(2000);
		if(EquipmentPage.isErrorMsgExist){
			var allmsgs = EquipmentPage.allErrorMsgs;
			for(var i=0; i<allmsgs.length; i++){
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
				{
					this.equipmentIpAddress = this.genUniqueIPAddress();
					EquipmentPage.equipmentUpdateIpAddressZero.setValue(this.equipmentIpAddress);}}
		}
		
		this.equipmentProfile = equipprofile;
	}

	clickEquipmentAssembly()
	{
		browser.pause(3000);
		EquipmentPage.btnEquipmentAssembly.waitForDisplayed();
		EquipmentPage.btnEquipmentAssembly.waitForExist();
		EquipmentPage.btnEquipmentAssembly.scrollIntoView();
		EquipmentPage.btnEquipmentAssembly.click();
		console.log("Equipment Assembly was clicked");
		browser.pause(2000);
		//check if any equipment assmebly exist else create one
		if(EquipmentPage.equipmenAssemblyNoSearchResult.isExisting()==true)
		{
			console.log("in If");
			this.clickAddNewEquipment();
			this.addEquipment();
			this.saveSiteDetails();
			browser.pause(2000);
			EquipmentPage.btnAddChild.waitForDisplayed();
			EquipmentPage.btnAddChild.click();
			EquipmentPage.btnFromUnassigned.waitForDisplayed();
			EquipmentPage.btnFromUnassigned.waitForExist();
			EquipmentPage.btnFromUnassigned.click();
			browser.pause(2000);
			EquipmentPage.equipmentprofile.waitForDisplayed();
			EquipmentPage.equipmentprofile.waitForExist();
			EquipmentPage.equipmentprofile.click();
			browser.pause(1000);
			let equipprofile = 'ACR (Router)';
			EquipmentPage.selectProvidedEquipmentProfile(equipprofile).click();
			EquipmentPage.expandEquipmentDropdown.click();
			browser.pause(2000);
			let equip = 'Default Location - Edge Routers';
			EquipmentPage.selectProvidedEquipment(equip).click();
			EquipmentPage.editEquipmentHeader.click();
			this.saveSiteDetails();
			browser.pause(3000);
			EquipmentPage.btnCloseOfDock[1].click();
			//EquipmentPage.btnCloseOfDock('Edit Equipment').click();
		}
		this.clickOnEquipmentSearch();	
		browser.pause(3000);
		expect (EquipmentPage.searchTextBox.isExisting()).to.be.true;
		browser.pause(3000);
	}

	selectCopyAssembly()
	{   this.changeEquipmentProfileView('Tiles');
		EquipmentPage.btnCopyAssembly.waitForDisplayed();
		EquipmentPage.btnCopyAssembly.waitForClickable();	
		//EquipmentPage.btnCopyAssembly.waitForDisplayed();
		//EquipmentPage.btnCopyAssembly.waitForExist();
		browser.pause(3000);
		EquipmentPage.btnCopyAssembly.click();
		browser.pause(3000);
	}

	changeEquipmentAssemblyCopyField()
	{
		browser.pause(7000);
		this.equipmentProfile = 'CopyAssembly' + (Math.floor(new Date() / 1000));
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		EquipmentPage.profileDescription.click();
		EquipmentPage.profileDescription.keys(clearKeys);
		EquipmentPage.profileDescription.setValue(this.equipmentProfile);
		this.equipmentMacAddress = this.genUniqueMAC();
		EquipmentPage.updateMacAddressWhileCopy.scrollIntoView();
		EquipmentPage.updateMacAddressWhileCopy.click();
		EquipmentPage.updateMacAddressWhileCopy.keys(clearKeys);
		browser.pause(2000);
		EquipmentPage.updateMacAddressWhileCopy.setValue(this.equipmentMacAddress);
		this.ethernetMACaddress = this.genUniqueMAC();
		EquipmentPage.updateEthernetMACaddressWhileCopy.scrollIntoView();
		EquipmentPage.updateEthernetMACaddressWhileCopy.click();
		EquipmentPage.updateEthernetMACaddressWhileCopy.keys(clearKeys);
		browser.pause(2000);
		EquipmentPage.updateEthernetMACaddressWhileCopy.setValue(this.ethernetMACaddress);
		this.equipmentIpAddress = this.genUniqueIPAddress();
		EquipmentPage.updateIpAddressEquipment.click();
		EquipmentPage.updateIpAddressEquipment.scrollIntoView();
		EquipmentPage.updateIpAddressEquipment.keys(clearKeys);
		browser.pause(2000);
		EquipmentPage.updateIpAddressEquipment.setValue(this.equipmentIpAddress);
		

		if(EquipmentPage.isErrorMsgExist){
			var allmsgs = EquipmentPage.allErrorMsgs;
			for(var i=0; i<allmsgs.length; i++){
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
				{
					this.equipmentIpAddress = this.genUniqueIPAddress();
					EquipmentPage.updateIpAddressEquipment.setValue(this.equipmentIpAddress);
				}
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('MAC address is already assigned to'))
				{
					this.ethernetMAC = this.genUniqueMAC();
					EquipmentPage.updateMacAddressWhileCopy.setValue(this.ethernetMAC);
					this.ethernetMAC = this.genUniqueMAC();
					EquipmentPage.updateEthernetMACaddressWhileCopy.setValue(this.ethernetMAC);
				}	
			}
		}
		browser.pause(3000);
		EquipmentPage.btnEquipmentAssembly.click();
		browser.pause(4000);
	}
	
	clickOnEquipmentSearch()
	{
		browser.pause(2000);
		EquipmentPage.btnequipmentSearch.waitForDisplayed();
		EquipmentPage.btnequipmentSearch.scrollIntoView();
		EquipmentPage.btnequipmentSearch.click();
		EquipmentPage.equipmentSearch.click();
		console.log("search icon was clicked");
	}

	typeInEquipmentSearch(dataToSearch)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		dataToSearch = dataToSearch.replace(/['"]+/g, '');
		this.equipmentProfile = dataToSearch;
		EquipmentPage.equipmentSearch.click();
		browser.pause(1000);
		EquipmentPage.equipmentSearch.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.equipmentSearch.setValue(dataToSearch);
		browser.pause(2000);
	}

	typeInEquipmentAssemblySearch()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.changeEquipmentProfileView('Tiles');
		EquipmentPage.firstEquipmentProfile.waitForDisplayed();
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		browser.pause(3000);
		this.equipmentProfile = EquipmentPage.firstEquipmentProfile.getText();
		browser.pause(1000);
		EquipmentPage.equipmentSearch.setValue('a13qw');
		browser.pause(2000);
		this.equipmentName = EquipmentPage.equipmenAssemblyNoSearchResult.getText();
		browser.pause(1000);
		EquipmentPage.equipmentClearSearch.click();
		this.clickOnEquipmentSearch();
		browser.pause(1000);
		EquipmentPage.equipmentSearch.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.equipmentSearch.setValue(this.equipmentProfile);
	}

	selectEquipmentTab()
	{
		EquipmentPage.btnEquipmentProfile.waitForDisplayed();
		EquipmentPage.btnEquipmentProfile.waitForClickable();
		EquipmentPage.btnEquipmentProfile.scrollIntoView();
        EquipmentPage.btnEquipmentProfile.click();
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
		EquipmentPage.btnEquipmentHeaderMenu.click();
		if(EquipmentPage.isTileViewSelected.getAttribute('class').includes('invisible'))
		{
		 	EquipmentPage.selectEquipmentTilesItem.waitForDisplayed();
			EquipmentPage.selectEquipmentTilesItem.waitForClickable();
		 	EquipmentPage.selectEquipmentTilesItem.click();
		}
		else{browser.keys('\ue00c');}
		browser.pause(5000);
		EquipmentPage.firstEquipmentProfile.waitForDisplayed();
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		this.equipmentprofile = EquipmentPage.firstEquipmentProfile.getText();
	}

	enableEquipmentTableView()
	{
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
		EquipmentPage.btnEquipmentHeaderMenu.scrollIntoView();
        EquipmentPage.btnEquipmentHeaderMenu.click();
		browser.pause(1000);
		EquipmentPage.selectEquipmentListItem.waitForDisplayed();
		EquipmentPage.selectEquipmentListItem.waitForClickable();
		EquipmentPage.selectEquipmentListItem.click();
		browser.pause(3000);
	}

	changeEquipmentAssemblyTableView(tableView)
	{
		browser.pause(5000);
		this.enableEquipmentTableView();
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
        EquipmentPage.quipmentMeatBall.click();
        browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		switch(tableView){
			case "Comfortable":
				EquipmentPage.quipmentTableViewComfortable.waitForDisplayed();
				EquipmentPage.quipmentTableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				EquipmentPage.quipmentTableViewCompact.waitForDisplayed();
				EquipmentPage.quipmentTableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				EquipmentPage.quipmentTableViewCozy.waitForDisplayed();
				EquipmentPage.quipmentTableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
	}

	changeEquipmentAssemblyView(equipmentView)
	{
		browser.pause(5000);
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
        EquipmentPage.btnEquipmentHeaderMenu.click();
		equipmentView = equipmentView.replace(/['"]+/g, '');
		switch(equipmentView){
			case "List":
				browser.pause(1000);
				EquipmentPage.selectEquipmentListItem.waitForDisplayed();
				EquipmentPage.selectEquipmentListItem.waitForClickable();
				EquipmentPage.selectEquipmentListItem.click();
				browser.pause(3000);
				break;
			case "Tiles":
				browser.pause(1000);
				EquipmentPage.selectEquipmentListItem.waitForDisplayed();
				EquipmentPage.selectEquipmentListItem.waitForClickable();
				EquipmentPage.selectEquipmentListItem.click();
				browser.pause(2000);
				EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
        		EquipmentPage.btnEquipmentHeaderMenu.click();
				browser.pause(2000);
				EquipmentPage.selectEquipmentTilesItem.waitForDisplayed();
				EquipmentPage.selectEquipmentTilesItem.waitForClickable();
				EquipmentPage.selectEquipmentTilesItem.click();
				browser.pause(3000);
				break;
		}
		console.log('I set equipment assembly view to '+ equipmentView);
	}

	enableEquipmentAssemblyInlineEditing()
	{
		browser.pause(5000);
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
        EquipmentPage.btnEquipmentHeaderMenu.click();
		browser.pause(1000);
		EquipmentPage.selectEquipmentListItem.waitForDisplayed();
		EquipmentPage.selectEquipmentListItem.waitForClickable();
		EquipmentPage.selectEquipmentListItem.click();
		browser.pause(3000);
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
        EquipmentPage.quipmentMeatBall.click();
        browser.pause(1000);
		if(EquipmentPage.inventoryTableView(EquipmentPage.quipmentTableInlineEditing).getAttribute('class').includes('text-success'))
		{browser.keys(this.Esckeys);browser.pause(2000);}
		else{
				EquipmentPage.quipmentTableInlineEditing.waitForDisplayed();
				EquipmentPage.quipmentTableInlineEditing.click();
				browser.pause(2000);
		}
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
        EquipmentPage.quipmentMeatBall.click();
        browser.pause(1000);
		EquipmentPage.getChooseColumnFromList.waitForDisplayed();
		EquipmentPage.getChooseColumnFromList.click();
		if (EquipmentPage.chooseColumnProfileDescriptionEnabled.isExisting() === true){
			EquipmentPage.chooseColumnProfileDescription.waitForDisplayed();
			EquipmentPage.chooseColumnProfileDescription.click();
		}
		if (EquipmentPage.chooseColumnTypeEnabled.isExisting() === true){
			EquipmentPage.chooseColumnType.waitForDisplayed();
			EquipmentPage.chooseColumnType.click();
		}
		if (EquipmentPage.chooseColumnDescriptionEnabled.isExisting() === false){
			EquipmentPage.chooseColumnDescription.waitForDisplayed();
			EquipmentPage.chooseColumnDescription.click();
		}
		EquipmentPage.btnCloseColumnChooser.click();
	}

	inlineEditEquipmentAssemblyDescription()
	{
		browser.pause(2000);
		this.updatedEquipmentAssmeblyName =  'AutoEA' + (Math.floor(new Date() / 1000));
		var allEAColumns = EquipmentPage.purchaseOrderAllColumns;
		this.columnIndex = this.GetCellIndexByColumnName(allEAColumns,'Description');
		console.log('index of description is '+this.columnIndex+2);
		var namecolumn = EquipmentPage.firstEquipmentRowData[this.columnIndex+2];
		this.inlineEditingParent = namecolumn;
		namecolumn.waitForDisplayed();
		namecolumn.waitForExist();
		namecolumn.scrollIntoView();
		namecolumn.moveTo();
		namecolumn.click();
		browser.pause(500);
		EquipmentPage.inputInlineEditing(namecolumn).setValue('');
		EquipmentPage.inputInlineEditing(namecolumn).setValue(this.updatedEquipmentAssmeblyName);
		browser.pause(500);
		namecolumn.moveTo();
	}

	verifyPageHeading() {
		browser.pause(5000);
		var pageText;
		pageText = EquipmentPage.pageHeading.getText();
		expect(pageText).to.eql(this.pageTitle);
		console.log('I can view Equipment page successfully!');
	}

	changePurchaseOrderTableView(tableView){
		browser.pause(5000);
		EquipmentPage.btnCreatePurchaseOrder.scrollIntoView();
		if(EquipmentPage.purchaseOrderMeatBall.isExisting()){}
		else{
			EquipmentPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			EquipmentPage.purchaseOrderTableView.waitForDisplayed();
			EquipmentPage.purchaseOrderTableView.waitForClickable();
			EquipmentPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		EquipmentPage.purchaseOrderMeatBall.waitForDisplayed();
		EquipmentPage.purchaseOrderMeatBall.scrollIntoView();
        EquipmentPage.purchaseOrderMeatBall.click();
        browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		switch(tableView){
			case "Comfortable":
				EquipmentPage.purchaseTableViewComfortable.waitForDisplayed();
				EquipmentPage.purchaseTableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				EquipmentPage.purchaseTableViewCompact.waitForDisplayed();
				EquipmentPage.purchaseTableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				EquipmentPage.purchaseTableViewCozy.waitForDisplayed();
				EquipmentPage.purchaseTableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
	}

	changePurchaseView(purchaseView){
		browser.pause(2000);
		EquipmentPage.purchaseHeaderbuttons[2].waitForDisplayed();
		EquipmentPage.purchaseHeaderbuttons[2].scrollIntoView();
		EquipmentPage.purchaseHeaderbuttons[2].click();
        browser.pause(2000);
		purchaseView = purchaseView.replace(/['"]+/g, '');
		switch(purchaseView){
			case "List":
				EquipmentPage.purchaseOrderCardView.waitForDisplayed();
				EquipmentPage.purchaseOrderCardView.waitForClickable();
				EquipmentPage.purchaseOrderCardView.click();
				browser.pause(3000);
				browser.keys('\ue00c');
				EquipmentPage.purchaseHeaderbuttons[2].click();
        		browser.pause(2000);
				EquipmentPage.purchaseOrderTableView.waitForDisplayed();
				EquipmentPage.purchaseOrderTableView.waitForClickable();
				EquipmentPage.purchaseOrderTableView.click();
				browser.pause(4000);
				break;
			case "Tiles":
				EquipmentPage.purchaseOrderCardView.waitForDisplayed();
				EquipmentPage.purchaseOrderCardView.waitForClickable();
				EquipmentPage.purchaseOrderCardView.click();
				browser.pause(2000);
				break;
		}
		console.log('I set purchase view to '+ purchaseView);
	}

	updatePurchaseOrder(quantity,unitPrice,taxrate,shipping,otherfee)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		quantity = quantity.replace(/['"]+/g, '');
		taxrate = taxrate.replace(/['"]+/g, '');
		unitPrice = unitPrice.replace(/['"]+/g, '');
		shipping = shipping.replace(/['"]+/g, '');
		otherfee = otherfee.replace(/['"]+/g, '');
		browser.pause(5000);
		var allColumns = EquipmentPage.poDockedValues;
		browser.pause(2000);
		EquipmentPage.btnpoItem(allColumns[2]).moveTo();
		EquipmentPage.btnpoItem(allColumns[2]).click();
		browser.pause(1000);
		var quanvar = EquipmentPage.enterDockedPOItemQuantity(allColumns[2]);
		quanvar.click();
		quanvar.keys(clearKeys);
		quanvar.keys('\uE008');
		quanvar.setValue(quantity);
		browser.pause(2000);
		allColumns[1].click();//quantityset
		EquipmentPage.btnpoItem(allColumns[4]).moveTo();
		EquipmentPage.btnpoItem(allColumns[4]).click();
		browser.pause(2000);
		var taxvar = EquipmentPage.enterDockedPOItemQuantity(allColumns[4]);
		taxvar.click();
		taxvar.keys(clearKeys);
		taxvar.keys('\uE008');
		taxvar.setValue(taxrate);
		browser.pause(10000);
		allColumns[1].click();//taxSet
		EquipmentPage.btnpoItem(allColumns[3]).moveTo();
		EquipmentPage.btnpoItem(allColumns[3]).click();
		browser.pause(2000);
		var unit = EquipmentPage.enterDockedPOItemQuantity(allColumns[3]);
		unit.click();
		unit.keys(clearKeys);
		unit.keys('\uE008');
		unit.setValue(unitPrice);
		browser.pause(2000);
		allColumns[1].click();//unipriceset
		var shippingElement = EquipmentPage.shippingRate;
		EquipmentPage.btnpoItem(shippingElement).moveTo();
		EquipmentPage.btnpoItem(shippingElement).click();
		browser.pause(2000);
		var ship = EquipmentPage.enterDockedPOItemQuantity(shippingElement);//shipping
		ship.click();
		ship.keys(clearKeys);
		ship.keys('\uE008');
		ship.setValue(shipping);
		browser.pause(2000);
		allColumns[1].click();//shipping
		var otherElement = EquipmentPage.otherRate;
		EquipmentPage.btnpoItem(otherElement).moveTo();
		EquipmentPage.btnpoItem(otherElement).click();
		browser.pause(2000);
		var other = EquipmentPage.enterDockedPOItemQuantity(otherElement);//other
		other.click();
		other.keys(clearKeys);
		other.keys('\uE008');
		other.setValue(otherfee);
		browser.pause(2000);
		allColumns[1].click();//other
		this.poItemQuantity = quantity;
		this.poItemTaxRate = taxrate;
		this.poItemUnitPrice=unitPrice;
		this.poItemShippingFee=shipping;
		this.poItemOtherFee=otherfee;
	}

	clickSaveChangesOfDocked()
	{
		EquipmentPage.btnSaveChanges.waitForDisplayed();
		EquipmentPage.btnSaveChanges.click();
	}

	clickOnPurchaseOrderSearchbar()
	{
		browser.refresh();
		browser.pause(9000);
		EquipmentPage.purchaseHeaderbuttons[0].waitForDisplayed();
		EquipmentPage.purchaseHeaderbuttons[0].scrollIntoView();
		EquipmentPage.purchaseHeaderbuttons[0].click();
		EquipmentPage.purchaseSearch.click();
	}

	enterPurchaseToSearch(itemToSearch)
	{
		itemToSearch = itemToSearch.replace(/['"]+/g, '');
		browser.pause(2000);
		EquipmentPage.purchaseSearch.scrollIntoView();
		EquipmentPage.purchaseSearch.setValue(itemToSearch);
		browser.pause(2000);
		this.poVendor = itemToSearch;
	}

	changeAndConfirmPoStatus(poStatus)
	{
		browser.pause(2000);
		this.clickOnStatus();
		//browser.pause(2000);
		switch(poStatus){
			case 'Pending':
				EquipmentPage.changePoStatus('PENDING').click();
				browser.pause(2000);
				this.clickYesOfPopUp();
				browser.pause(3000);
				this.poOrderedStatus = EquipmentPage.poStatusValue.getText();//getting pending updated value
				break;
			case 'Ordered':
				EquipmentPage.changePoStatus('ORDERED').click();
				browser.pause(1000);
				this.clickYesOfPopUp();
				EquipmentPage.confirmationMsg.waitForDisplayed();
				browser.pause(2000);
				this.poOrderedStatus = this.poOrderedStatus +','+ EquipmentPage.poStatusValue.getText();//get and append upadate value for verification
				break;
			case 'Partial':
				EquipmentPage.changePoStatus('PARTIAL').click();
				browser.pause(1000);
				this.clickYesOfPopUp();
				EquipmentPage.confirmationMsg.waitForDisplayed();
				browser.pause(2000);
				this.poOrderedStatus = this.poOrderedStatus +','+ EquipmentPage.poStatusValue.getText();//get and append upadate value for verification
				break;
			case 'Complete':
				EquipmentPage.changePoStatus('COMPLETE').click();
				browser.pause(1000);
				this.clickYesOfPopUp();
				EquipmentPage.confirmationMsg.waitForDisplayed();
				browser.pause(2000);
				this.poOrderedStatus = this.poOrderedStatus +','+ EquipmentPage.poStatusValue.getText();//get and append upadate value for verification
				break;
			case 'Canceled':
				EquipmentPage.changePoStatus('CANCELED').click();
				browser.pause(1000);
				this.clickYesOfPopUp();
				EquipmentPage.confirmationMsg.waitForDisplayed();
				browser.pause(2000);
				this.poOrderedStatus = this.poOrderedStatus +','+ EquipmentPage.poStatusValue.getText();//get and append upadate value for verification
				break;
			case 'Rejected':
				EquipmentPage.changePoStatus('REJECTED').click();
				browser.pause(2000);
				this.clickYesOfPopUp();
				EquipmentPage.confirmationMsg.waitForDisplayed();
				browser.pause(2000);
				this.poOrderedStatus = this.poOrderedStatus +','+ EquipmentPage.poStatusValue.getText();//get and append upadate value for verification
				break;
		}
	}

	expandPurchaseItem()
	{
		browser.pause(3000);
		EquipmentPage.expandPOitem.waitForDisplayed();
		EquipmentPage.expandPOitem.waitForClickable();
		EquipmentPage.expandPOitem.click();
		//var allcolumns = EquipmentPage.poDockedValues;
		//EquipmentPage.btnpoItem(allcolumns[0]).click();
		browser.pause(2000);
	}

	filPurchaseItem()
	{
		EquipmentPage.purchaseItemLocation.waitForDisplayed();
		EquipmentPage.purchaseItemLocation.click();
		browser.pause(2000);
		//console.log('location value is :' + this.ramLocation);
		this.ramLocation ='New york Warehouse';
		var allcharacters = this.ramLocation.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(7000);
		browser.keys('\uE015');
		browser.pause(100);
		browser.keys('\uE015');
		browser.pause(100);
		var enterkeys = ['\uE007'];// enter
		browser.keys(enterkeys);
		browser.pause(2000);
		this.inventoryItemSerial = 'AutoSerial' + (Math.floor(new Date() / 1000));
		EquipmentPage.purchaseItemSerial.setValue(this.inventoryItemSerial);
	}

	clickBtnPurchaseItemReceive()
	{
		EquipmentPage.btnPurchaseReceive.waitForDisplayed();
		EquipmentPage.btnPurchaseReceive.click();
	}

	changeEquipmentTableView(tableView)
	{
		browser.pause(5000);
		this.enableEquipmentTableView();
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
        EquipmentPage.quipmentMeatBall.click();
        browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		switch(tableView){
			case "Comfortable":
				EquipmentPage.quipmentTableViewComfortable.waitForDisplayed();
				EquipmentPage.quipmentTableViewComfortable.click();
				browser.pause(2000);
				break;
			case "Compact":
				EquipmentPage.quipmentTableViewCompact.waitForDisplayed();
				EquipmentPage.quipmentTableViewCompact.click();
				browser.pause(2000)
				break;
			case "Cozy":
				EquipmentPage.quipmentTableViewCozy.waitForDisplayed();
				EquipmentPage.quipmentTableViewCozy.click();
				browser.pause(2000)
				break;
		}
		console.log('I set row density to '+ tableView);
	}

	changeEquipmentProfileView(equipmentView)
	{
		browser.pause(5000);
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
		EquipmentPage.btnEquipmentHeaderMenu.scrollIntoView();
        EquipmentPage.btnEquipmentHeaderMenu.click();
		equipmentView = equipmentView.replace(/['"]+/g, '');
		switch(equipmentView){
			case "List":
				browser.pause(1000);
				EquipmentPage.selectEquipmentListItem.waitForDisplayed();
				EquipmentPage.selectEquipmentListItem.waitForClickable();
				EquipmentPage.selectEquipmentListItem.click();
				browser.pause(3000);
				break;
			case "Tiles":
				browser.pause(1000);
				EquipmentPage.selectEquipmentListItem.waitForDisplayed();
				EquipmentPage.selectEquipmentListItem.waitForClickable();
				EquipmentPage.selectEquipmentListItem.click();
				browser.pause(2000);
				EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
        		EquipmentPage.btnEquipmentHeaderMenu.click();
				browser.pause(2000);
				EquipmentPage.selectEquipmentTilesItem.waitForDisplayed();
				EquipmentPage.selectEquipmentTilesItem.waitForClickable();
				EquipmentPage.selectEquipmentTilesItem.click();
				browser.pause(3000);
				break;
		}
		console.log('I set equipment profile view to '+ equipmentView);
	}

	enableEquipmentProfileInlineEditing()
	{
		browser.pause(5000);
		EquipmentPage.btnEquipmentHeaderMenu.waitForDisplayed();
		EquipmentPage.btnEquipmentHeaderMenu.scrollIntoView();
        EquipmentPage.btnEquipmentHeaderMenu.click();
		browser.pause(1000);
		EquipmentPage.selectEquipmentListItem.waitForDisplayed();
		EquipmentPage.selectEquipmentListItem.waitForClickable();
		EquipmentPage.selectEquipmentListItem.click();
		browser.pause(3000);
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
        EquipmentPage.quipmentMeatBall.click();
        browser.pause(1000);
		if(EquipmentPage.inventoryTableView(EquipmentPage.quipmentTableInlineEditing).getAttribute('class').includes('text-success'))
		{browser.keys(this.Esckeys);browser.pause(500);}
		else{
				EquipmentPage.quipmentTableInlineEditing.waitForDisplayed();
				EquipmentPage.quipmentTableInlineEditing.click();
				browser.pause(1000);
		}
	}

	inlineEditEquipmentProfileFields(defaultsummary)
	{
		browser.pause(3000);
		this.equipmentProfile =  defaultsummary +' +AutoSum' + (Math.floor(new Date() / 1000));
		this.equipmentDescription =  'AutoDesc' + (Math.floor(new Date() / 1000));
		var summarycolumn = EquipmentPage.firstEquipmentRowData[1];
		var descriptioncolumn = EquipmentPage.firstEquipmentRowData[2];
		this.editInlineAndSave(summarycolumn,this.equipmentProfile);
		this.editInlineAndSave(descriptioncolumn,this.equipmentDescription);
		browser.pause(2000);
	}

	verifyWidgets(widgets){
		browser.pause(3000);
		var allWidgets = widgets.raw();
		EquipmentPage.infrastructureLocationCardHeading.waitForDisplayed();
		EquipmentPage.infrastructureLocationCardHeading.waitForExist();
		expect(EquipmentPage.infrastructureLocationCardHeading.getText()).to.eql(allWidgets[0][0]);
		expect(EquipmentPage.equipmentProfilesCardHeading.getText()).to.eql(allWidgets[1][0]);  
		expect(EquipmentPage.equipmentAssembliesCardHeading.getText()).to.eql(allWidgets[2][0]);
		expect(EquipmentPage.inventoryCardHeading.getText()).to.eql(allWidgets[3][0]);
		expect(EquipmentPage.purchaseOrdersCardHeading.getText()).to.eql(allWidgets[4][0]);		
	}

	verifyDocsisTab()
	{
		browser.pause(3000);
		expect(EquipmentPage.infraProfileTextDocsis.getText()).to.eql(this.tabDocsisText)
	}

	verifyWarehouseTab()
	{
		browser.pause(3000);
		expect(EquipmentPage.infraProfileTextWarehouse.getText()).to.eql(this.tabWarehouseText)
	}

	verifySiteLocationAdded() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteAddedConfMsg);
		browser.pause(4000);
		EquipmentPage.siteHeader.waitForExist();
		expect(EquipmentPage.siteHeader.getText()).to.eql(this.siteName);
		EquipmentPage.btnClose.click();
		browser.pause(2000);
		this.clickOnISsearchbar();
		this.typeInISsearhbar(this.siteName);
		browser.pause(5000);
		//EquipmentPage.firstRowData[0].waitForDisplayed();
		var firstRowDetail = EquipmentPage.firstRowData;
		expect(firstRowDetail[0].getText()).to.eql(this.siteName);
		expect(firstRowDetail[1].getText()).to.eql(this.siteAddress1);
		expect(firstRowDetail[2].getText()).to.eql(this.siteAddress2);
		expect(firstRowDetail[3].getText()).to.eql(this.siteCity);
		expect(this.siteState.includes(firstRowDetail[4].getText())).to.be.true;
		expect(firstRowDetail[5].getText()).to.eql(this.siteZip);
		expect(firstRowDetail[6].getText()).to.eql(this.siteProfileType);
		console.log('Added Site Location successfully');
	}

	verifySiteLocationSaved() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteUpdateConfMsg);
		browser.pause(9000);
		//console.log('total length of '+EquipmentPage.closeSubDock);
		EquipmentPage.closeSubDock.click();
		console.log('closed first one');
		browser.pause(3000);
		if(EquipmentPage.btnYes.isExisting())
		{
			EquipmentPage.btnYes.click();
			browser.pause(1000);
		}
		EquipmentPage.btnClose.waitForDisplayed();
		EquipmentPage.btnClose.click();
		console.log('closed second one')
		browser.pause(3000);
		this.clickOnISsearchbar();
		this.typeInISsearhbar(this.siteName);
		browser.pause(5000);
		var firstRowDetail = EquipmentPage.firstRowData;
		expect(firstRowDetail[0].getText()).to.eql(this.siteName);
		console.log('address from app is '+firstRowDetail[1].getText());
		expect(firstRowDetail[1].getText().includes(this.siteAddress1)).to.be.true;
		console.log('address verified');
		console.log('city from app is '+firstRowDetail[3].getText());
		expect(firstRowDetail[3].getText()).to.eql(this.siteCity);
		console.log('Updated Site Location successfully');
	}
	
	verifyContactAddition() {
		browser.pause(5000);
		EquipmentPage.closeEditContactDock.click();
		browser.pause(2000);
		EquipmentPage.btnClose.waitForDisplayed();
		EquipmentPage.btnClose.click();
		browser.pause(5000);
		this.selectFirstRecord();
		let contactName = this.contactFname +' '+this.contactLname;
		var updatedContactDetails = EquipmentPage.siteDockItemByName(contactName);
		expect(updatedContactDetails.getText().includes(contactName)).to.be.true;
	}
	
	verifyContactModification() {
		browser.pause(5000);
		EquipmentPage.closeEditContactDock.click();
		browser.pause(2000);
		EquipmentPage.btnClose.waitForDisplayed();
		EquipmentPage.btnClose.click();
		browser.pause(5000);
		this.selectFirstRecord();
		browser.pause(2000);
		let contactName = this.contactFname +' '+this.contactLname;
		var updatedContactDetails = EquipmentPage.siteDockItemByName(contactName);
		console.log('fully extracted name'+updatedContactDetails.getText());
		console.log('actual name is'+contactName);
		expect(updatedContactDetails.getText().includes(contactName)).to.be.true;
		console.log('name verified');
		console.log('actual company is'+this.contactCompany);
		expect(updatedContactDetails.getText().includes(this.contactCompany)).to.be.true;
		console.log('company verified');
	}

	verifySiteSubLocationAdded() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		console.log('sub-site message from toast :'+ msg);
		console.log('sub-site message from param :'+ this.subLocationAddConfMsg);
		expect(msg).to.eql(this.subLocationAddConfMsg);
		//expect(msg).to.eql(this.siteAddedConfMsg);
		browser.pause(2000);
		EquipmentPage.btnCloseSubSite.click();
		console.log('sub-site name is :'+ this.subSiteName);
		browser.pause(2000);
		//var getAllItems = EquipmentPage.subSiteHeader(this.subSiteName);
		expect(EquipmentPage.subSiteHeader(this.subSiteName).isExisting()).to.be.true;
		console.log('Site Sub-Location Added successfully!');
	}

		verifyEquipmentAdded() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.addedEquipmentConfMsg);
		browser.pause(5000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		//EquipmentPage.btnCloseOfDock('Edit Equipment').click();
		EquipmentPage.btnCloseOfDock.waitForClickable();
		EquipmentPage.btnCloseOfDock.click();
		browser.pause(3000);
		EquipmentPage.btnEquipmentProfile.scrollIntoView();
		EquipmentPage.btnEquipmentProfile.moveTo();
		this.clickOnEquipmentSearch();
		this.typeInEquipmentSearch(this.equipmentprofile);
		browser.pause(2000);
		EquipmentPage.firstEquipmentCard(this.equipmentprofile).click();
		browser.pause(5000);
		EquipmentPage.dockedSearhField.waitForDisplayed();
		EquipmentPage.dockedSearhField.click();
		EquipmentPage.dockedSearhField.keys(clearKeys);
		browser.pause(2000);
		EquipmentPage.dockedSearhField.setValue(this.equipmentToSearch);
		browser.pause(3000);
		var allcelldata = EquipmentPage.dockedEquipmentItem;
		allcelldata[2].waitForClickable();
		allcelldata[2].click();
		browser.pause(5000);
		//EquipmentPage.profileName.waitForDisplayed();
		//expect(EquipmentPage.profileName.getAttribute('value')).to.eql(this.equipmentToSearch);
		expect(EquipmentPage.profileDescription.getAttribute('value')).to.eql(this.equipmentDescription);
		expect(EquipmentPage.profilelocationInput.getAttribute('value')).to.eql(this.equipmentLocation);
		expect(EquipmentPage.equipmentprofileInput.getAttribute('value').includes(this.equipmentprofile)).to.be.true;
		console.log('Equipment profile successfully');
		expect(EquipmentPage.macAddressEquipment.getAttribute('value')).to.eql(this.equipmentMacAddress);
		console.log('Equipment mac successfully');
		EquipmentPage.macAddressEquipment.scrollIntoView();
		expect(EquipmentPage.ipAddressEquipment.getAttribute('value')).to.eql(this.equipmentIpAddress);
		console.log('Equipment ip successfully');
	}
	
	duplicateIPAddressError() {
		browser.pause(3000);
		var allmsgs = EquipmentPage.allErrorMsgs;
		expect(allmsgs[2].getText()).to.eql('This IP address is already assigned to '+ this.equipmentName);
	}

	duplicateMacAddressError()
	{
		browser.pause(3000);
		console.log('going to verify validation error and equipment name is' + this.equipmentName);
		var allmsgs = EquipmentPage.allErrorMsgs;
		// for (let i = 0; i < allmsgs.length; i++) {
		// 	console.log('index is' +i +' and value is'+allmsgs[i].getText());
		// }
		expect(allmsgs[2].getText()).to.eql('This MAC address is already assigned to '+ this.equipmentName);//radio mac
		expect(allmsgs[5].getText()).to.eql('This MAC address is already assigned to '+ this.equipmentName);//ethernet mac
	}
	//TA-762
	clickDotMenuNextToILT()
	{
		browser.pause(4000);
		EquipmentPage.InfrastructureRowData[0].waitForDisplayed();
		EquipmentPage.InfrastructureRowData[0].moveTo();
		EquipmentPage.btnSiteRecordMenu.waitForDisplayed();
        EquipmentPage.btnSiteRecordMenu.click();
	}
	getSiteEquipmentDetail()
	{
		EquipmentPage.noEquipment.waitForDisplayed();
		this.equipmentName = EquipmentPage.noEquipment.getText();
	}
	clickBtnDeleteSite()
	{
		EquipmentPage.btnDeleteSite.waitForDisplayed();
		EquipmentPage.btnDeleteSite.waitForClickable();
		EquipmentPage.btnDeleteSite.click();
	}
	hoverDeleteButton()
	{
		browser.pause(3000);
		EquipmentPage.btnDeleteSite.waitForDisplayed();
		EquipmentPage.btnDeleteSite.moveTo();
	}
	clickBtnYes()
	{
		EquipmentPage.btnConDialogYes.waitForDisplayed();
		EquipmentPage.btnConDialogYes.waitForClickable();
		EquipmentPage.btnConDialogYes.click();
	}
	clickBtnNo()
	{
		EquipmentPage.btnConDialogYes.waitForDisplayed();
		EquipmentPage.btnConDialogNo.waitForClickable();
		EquipmentPage.btnConDialogNo.click();
	}

	verifyEquipmentDeleted() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.deletedEquipmentConfMsg);
		browser.pause(2000);
		EquipmentPage.dockedSearhField.waitForDisplayed();
		EquipmentPage.dockedSearhField.click();
		EquipmentPage.dockedSearhField.setValue(this.equipmentName);
		var allcelldata = EquipmentPage.dockedEquipmentItem;
		expect(allcelldata.length > 0).to.be.false;
		console.log('Equipment deleted successfully');
	}

	verifyEquipmentListedInSiteDrawer() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.addedEquipmentConfMsg);
		browser.pause(5000);
		EquipmentPage.btnSiteEquipment.click();
		browser.pause(2000);
		if(EquipmentPage.btnShowMore.isExisting())
		{EquipmentPage.btnShowMore.click();browser.pause(3000);}
		expect(EquipmentPage.btnEquipmentFromCollapsable(this.equipmentName).isExisting()).to.be.true;
		console.log('equipmentName button');
		EquipmentPage.btnEquipmentFromCollapsable(this.equipmentName).click();
		browser.pause(3000);
		expect(EquipmentPage.isFieldExist(this.equipmentName)).to.be.true;
		console.log('equipmentName verified');
		expect(EquipmentPage.isFieldExist(this.equipmentMacAddress)).to.be.true;
		console.log('mac address verified');
		expect(EquipmentPage.isFieldExist(this.equipmentIpAddress)).to.be.true;
		console.log('ip address verified');
		console.log('Equipment successfully added from Infrastructure drawer');
	}

	verifyInventorySearched(profileName) {
		browser.pause(2000);
		profileName = profileName.replace(/['"]+/g, '');
		console.log('Inventory to be searched: '+this.inventoryProfile);
		expect(this.inventoryProfile.includes(profileName)).to.be.true;
		console.log('Inventory successfully searched');
	}

	verifySubItemsOfAnInventory(dataToVerify) {
		var alldata = dataToVerify.raw();
		browser.pause(2000);
		EquipmentPage.firstInventoryRowData[0].waitForDisplayed();
		EquipmentPage.firstInventoryRowData[0].waitForExist();
		EquipmentPage.firstInventoryRowData[0].scrollIntoView();
		EquipmentPage.firstInventoryRowData[0].click();//expand search items
		browser.pause(3000);
		var allRelatedData = EquipmentPage.inventoryExpandedData;
		expect(allRelatedData[0].getText().toLowerCase().includes(alldata[0][0].toLowerCase())).to.be.true;
		expect(allRelatedData[1].getText().toLowerCase().includes(alldata[0][1].toLowerCase())).to.be.true;
		expect(allRelatedData[2].getText().toLowerCase().trim().includes(alldata[0][2].toLowerCase())).to.be.true;
		expect(allRelatedData[3].getText().toLowerCase().trim().includes(alldata[0][3].toLowerCase())).to.be.true;
		//expect(allRelatedData[3].getText().toLowerCase().trim().includes(alldata[0][3].toLowerCase())).to.be.true;
		//expect(allRelatedData[4].getText().toLowerCase()).to.eql(alldata[1][0].toLowerCase());
		//expect(allRelatedData[5].getText().toLowerCase().includes(alldata[1][1].toLowerCase())).to.be.true;
		//expect(allRelatedData[6].getText().toLowerCase().includes(alldata[1][2].toLowerCase())).to.be.true;
		//expect(allRelatedData[7].getText().toLowerCase().trim().includes(alldata[1][3].toLowerCase())).to.be.true;
	}

	verifyInventoryTableView(tableView) {
		browser.pause(3000);
		EquipmentPage.inventoryMeatBall.waitForDisplayed();
		EquipmentPage.inventoryMeatBall.click();
		browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = EquipmentPage.inventoryTableView(EquipmentPage.inventoryTableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else if(tableView === "Compact")
		 {
			state = EquipmentPage.inventoryTableView(EquipmentPage.inventoryTableViewCompact).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = EquipmentPage.inventoryTableView(EquipmentPage.inventoryTableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
	}

	verifyInventoryProfileView(tableView) {
		browser.pause(3000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "Table"){
			expect(EquipmentPage.inventoryMeatBall.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(EquipmentPage.inventoryCardViewVerification.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);	
		 }
	}

	verifyInventoryInlineEditSaved() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.inventoryProfileUpdatedConfMsg);
		browser.pause(4000);
		var updatedSKUValue = EquipmentPage.firstInventoryRowData[4];
		expect(updatedSKUValue.getText()).to.eql(this.inventorySKU);
	}

	verifyInventoryItemCreated() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.inventoryItemCreatedConfMsg);
		browser.pause(4000);
		expect(EquipmentPage.inventoryItemSerialAfterCreate.getAttribute('value')).to.eql(this.inventoryItemSerial.toUpperCase());
		//expect(EquipmentPage.inventoryItemName.getAttribute('value')).to.eql(this.inventoryItemName);
		
	}

	verifyRMACreated() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.rmaAddedConfMsg);
		browser.pause(3000);
		expect(EquipmentPage.rmaNumber.getAttribute('value')).to.eql(this.rmaNumber);
		expect(EquipmentPage.rmaTrackingNumber.getAttribute('value')).to.eql(this.rmaTrackingNumber);
		expect(EquipmentPage.rmaShippedNumber.getAttribute('value')).to.eql(this.rmaShippedTracking);
		console.log('RMA created successfully');
	}

	verifyPurchaseOrderCreated() {
		// var msg;
		// EquipmentPage.confirmationMsg.waitForDisplayed();
		// msg = EquipmentPage.confirmationMsg.getText();
		// expect(msg).to.eql(this.poCreatedConfMsg);
		//browser.pause(3000);
		//EquipmentPage.btnClose.click();
		browser.pause(3000);
		if(EquipmentPage.purchaseOrderMeatBall.isExisting()){}
		else{
			EquipmentPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			EquipmentPage.purchaseOrderTableView.waitForDisplayed();
			EquipmentPage.purchaseOrderTableView.waitForClickable();
			EquipmentPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		EquipmentPage.menuOfPurchaseOrder.scrollIntoView();
		console.log('scrolled');
		EquipmentPage.menuOfPurchaseOrder.click();
		EquipmentPage.btnChooseColumn.waitForDisplayed();
		EquipmentPage.btnChooseColumn.click();
		browser.pause(1000);
		EquipmentPage.btnDateOrderedColumn.waitForDisplayed();
		if(EquipmentPage.btnDateOrderedColumnSwitch.getAttribute("value")=="true"){
		EquipmentPage.btnDateOrderedColumn.click();}
		if(EquipmentPage.btnLastDateColumnSwitch.getAttribute("value")=="true"){
		EquipmentPage.btnLastDateColumn.click();}
		EquipmentPage.btnCloseDialog.click();
		browser.pause(3000);
		var allPOColumns = EquipmentPage.purchaseOrderAllColumns;
		var firstRowDetail = EquipmentPage.purchaseOrderfirstRowData;
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Item Name(s)').includes(this.poProfileItem)).to.be.true;
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Vendor').includes(this.poVendor)).to.be.true;
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Status').includes(this.poCreatedStatus)).to.be.true;
		// var firstRowDetail = EquipmentPage.purchaseOrderfirstRowData;
		// console.log('first row first column'+firstRowDetail[0].getText());
		// console.log('first row 2nd column'+firstRowDetail[1].getText());
		// console.log('first row third column'+firstRowDetail[2].getText());
		// expect(firstRowDetail[0].getText().includes(this.poProfileItem)).to.be.true;
		// expect(firstRowDetail[1].getText()).to.eql(this.poVendor);
		// expect(firstRowDetail[2].getText()).to.eql(this.poCreatedStatus);
		console.log('Purchase order created successfully');
	}

	verifyPurchaseOrderUpdated() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.poUpdateConfMsg);
		browser.pause(3000);
		EquipmentPage.btnClose.click();
		if(EquipmentPage.purchaseOrderMeatBall.isExisting()){}
		else{
			EquipmentPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			EquipmentPage.purchaseOrderTableView.waitForDisplayed();
			EquipmentPage.purchaseOrderTableView.waitForClickable();
			EquipmentPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		browser.pause(4000);
		EquipmentPage.menuOfPurchaseOrder.scrollIntoView();
		EquipmentPage.menuOfPurchaseOrder.click();
		EquipmentPage.btnChooseColumn.waitForDisplayed();
		EquipmentPage.btnChooseColumn.click();
		browser.pause(1000);
		EquipmentPage.btnDateOrderedColumn.waitForDisplayed();
		EquipmentPage.btnDateOrderedColumn.click();
		EquipmentPage.btnLastDateColumn.click();
		EquipmentPage.btnCloseDialog.click();
		browser.pause(5000);
		var allPOColumns = EquipmentPage.purchaseOrderAllColumns;
		var firstRowDetail = EquipmentPage.purchaseOrderfirstRowData;
		//console.log('extracted value of status of'+this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Status'));
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Status')).to.eql(this.poOrderedStatus);
		console.log('Updated Purchase Order status successfully');
	}
	GetCellValueByColumnName(arrayOfColumns,arrayOfDataCells,columnName)
    {
        let cellValue="";
		var updatedColumnsWithText = [];
		for (let i = 0; i < arrayOfColumns.length; i++) {
			//console.log(' index is '+i+' and value is '+arrayOfColumns[i].getText());
			updatedColumnsWithText.push(arrayOfColumns[i].getText());
		}
        if (updatedColumnsWithText.includes(columnName)) {
            let indexofColumn = updatedColumnsWithText.indexOf(columnName);
            //console.log(columnName+ ' index is '+indexofColumn);
            //console.log(' found value is '+arrayOfDataCells[indexofColumn].getText());
            return arrayOfDataCells[indexofColumn].getText();  // Return the value from the data object
        }
        return cellValue;
    }
	verifyISsearchedSuccessfully()
	{
		browser.pause(9000);
		expect(EquipmentPage.firstRowData[0].getText()).to.eql(this.siteName);
		console.log('Infrastructure location successfully searched');
	}

	verifyISRowDensityChanged(tableView)
	{
		EquipmentPage.infrastructureMeatBall.waitForDisplayed();
		EquipmentPage.infrastructureMeatBall.click();
		browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = EquipmentPage.infrastructureTableView(EquipmentPage.infrastructureTableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else if(tableView === "Compact")
		 {
			state = EquipmentPage.infrastructureTableView(EquipmentPage.infrastructureTableViewCompact).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = EquipmentPage.infrastructureTableView(EquipmentPage.infrastructureTableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
	}
		
	verifyEquipmentUpdated() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.updatedEquipmentConfMsg);
		browser.pause(2000);
		EquipmentPage.btnCloseEditEquipment.waitForClickable();
		EquipmentPage.btnCloseEditEquipment.click();
		//EquipmentPage.btnCloseOfDock('Edit Equipment').click();
		console.log('closed');
		browser.pause(2000);
		EquipmentPage.btnEquipmentProfile.scrollIntoView();
		EquipmentPage.btnEquipmentProfile.moveTo();
		browser.pause(1000);
		this.clickOnEquipmentSearch();
		this.typeInEquipmentSearch(this.equipmentProfile);
		EquipmentPage.firstEquipmentCard(this.equipmentProfile).click();
		browser.pause(3000);
		console.log('re-opened');
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		EquipmentPage.dockedSearhField.waitForDisplayed();
		EquipmentPage.dockedSearhField.click();
		EquipmentPage.dockedSearhField.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.dockedSearhField.setValue(this.equipmentName);
		browser.pause(2000);
		var allcelldata = EquipmentPage.dockedEquipmentItem;
		allcelldata[2].click();
		console.log('searched');
		console.log('edit equipmentpage');
		EquipmentPage.profileDescription.waitForExist();
		EquipmentPage.profileDescription.waitForDisplayed();
		expect(EquipmentPage.equipmentprofileInput.getAttribute('value').includes(this.equipmentProfile)).to.be.true;
		console.log('equipment profile verified');
		EquipmentPage.ethernetMacEquipment.scrollIntoView();
		expect(EquipmentPage.ipAddressEquipment.getAttribute('value')).to.eql(this.equipmentIpAddress);
		console.log('Equipment updated successfully');
	}
		
	verifyPurchaseOrderTableView(tableView) {
		browser.pause(3000);
		EquipmentPage.purchaseOrderMeatBall.waitForDisplayed();
		EquipmentPage.purchaseOrderMeatBall.click();
		browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = EquipmentPage.purchaseTableView(EquipmentPage.purchaseTableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else if(tableView === "Compact")
		 {
			state = EquipmentPage.purchaseTableView(EquipmentPage.purchaseTableViewCompact).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = EquipmentPage.purchaseTableView(EquipmentPage.purchaseTableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
	}

	verifyINFSinlineEditing()
	{
		browser.pause(3000);
		//var updatedSiteName = EquipmentPage.InfrastructureRowData[2];
		//expect(updatedSiteName.getText()).to.eql(this.siteName);
		var updatedAddressOne = EquipmentPage.InfrastructureRowData[3];
		expect(updatedAddressOne.getText()).to.eql(this.siteAddress1);
		var updatedAddressTwo = EquipmentPage.InfrastructureRowData[4];
		expect(updatedAddressTwo.getText()).to.eql(this.siteAddress2);
		var updatedCity = EquipmentPage.InfrastructureRowData[5];
		expect(updatedCity.getText()).to.eql(this.siteCity);
		var updatedZip = EquipmentPage.InfrastructureRowData[7];
		expect(updatedZip.getText()).to.eql(this.siteZip+'-');
	}

	verifyINFSTableChanged(tableView)
	{
		browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "Tabs"){
			expect(EquipmentPage.siteTabs.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(EquipmentPage.siteTabs.isExisting()).to.be.false;
			console.log('View updated to: ' + tableView);
		 }
	}

	verifyInterConnectionAndSiteEquipment()
	{
		browser.pause(2000);
		expect(EquipmentPage.btnInterconnection.isExisting()).to.be.true;
		expect(EquipmentPage.btnSiteEquipment.isExisting()).to.be.true;
	}

	verifySideASideBInterconnections()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.equipmentUpdateLocationConfMsg);
		browser.pause(3000);
		EquipmentPage.btnArrowback.click();
		browser.pause(4000);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteBPtpEquipmentName+' to '+this.siteAPtpEquipmentName).isExisting()).to.be.true;
		console.log('siteB to SiteA link verified '+this.siteBPtpEquipmentName+' to '+this.siteAPtpEquipmentName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteAPtpEquipmentName+' to '+this.siteBPtpEquipmentName).isExisting()).to.be.true;
		console.log('siteA to SiteB link verified '+this.siteAPtpEquipmentName+' to '+this.siteBPtpEquipmentName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteBSublocationName).isExisting()).to.be.true;
		console.log('subsite B verified '+this.siteBSublocationName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteASublocationName).isExisting()).to.be.true;
		console.log('subsite A verified '+this.siteASublocationName);
	}

	verifyUpdatedDetailsOfSiteAAndSiteB()
	{
		browser.pause(3000);
		//EquipmentPage.btnArrowback.click();
		console.log('>>>>>>>>>>>>>>>>>siteBPtpEquipmentName is: ' + this.siteBPtpEquipmentName+' to '+this.siteAPtpEquipmentName);
		console.log('>>>>>>>>>>>>>>>>>siteAPtpEquipmentName is: ' + this.siteAPtpEquipmentName+' to '+this.siteBPtpEquipmentName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteBPtpEquipmentName+' to '+this.siteAPtpEquipmentName).isExisting()).to.be.true;
		console.log('siteB to SiteA link verified '+this.siteBPtpEquipmentName+' to '+this.siteAPtpEquipmentName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteAPtpEquipmentName+' to '+this.siteBPtpEquipmentName).isExisting()).to.be.true;
		console.log('siteA to SiteB link verified '+this.siteAPtpEquipmentName+' to '+this.siteBPtpEquipmentName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteBSublocationName).isExisting()).to.be.true;
		console.log('subsite B verified '+this.siteBSublocationName);
		expect(EquipmentPage.selectInterConnectionEquipment(this.siteASublocationName).isExisting()).to.be.true;
		console.log('subsite A verified '+this.siteASublocationName);
	}

	verifyPurchaseOrderView(tableView) {
		browser.pause(3000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "List"){
			expect(EquipmentPage.purchaseOrderMeatBall.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(EquipmentPage.purchaseOrderCardViewVerification.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);	
		 }
	}

	verifyPurchaseOrderItemUpdated() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.poItemUpdateConfMsg);
		browser.pause(3000);
		expect(EquipmentPage.poDockedValues[2].getText()).to.eql(this.poItemQuantity);
		expect(EquipmentPage.poDockedValues[4].getText()).to.eql('$'+this.poItemTaxRate+'.00');
		expect(EquipmentPage.poDockedValues[3].getText()).to.eql('$'+this.poItemUnitPrice+'.00');
		expect(EquipmentPage.shippingRate.getText()).to.eql('$'+this.poItemShippingFee.replace(',','')+'.00');
		expect(EquipmentPage.otherRate.getText()).to.eql('$'+this.poItemOtherFee.replace(',','')+'.00');
	}

	RestoreColumns()
	{
		if(EquipmentPage.purchaseOrderMeatBall.isExisting()){}
		else{
			EquipmentPage.purchaseHeaderbuttons[2].click();
        	browser.pause(2000);
			EquipmentPage.purchaseOrderTableView.waitForDisplayed();
			EquipmentPage.purchaseOrderTableView.waitForClickable();
			EquipmentPage.purchaseOrderTableView.click();
			browser.pause(3000);
		}
		browser.pause(4000);
		EquipmentPage.menuOfPurchaseOrder.scrollIntoView();
		EquipmentPage.menuOfPurchaseOrder.click();
		EquipmentPage.btnChooseColumn.waitForDisplayed();
		EquipmentPage.btnChooseColumn.click();
		browser.pause(1000);
		EquipmentPage.btnRestoreolumns.waitForDisplayed();
		EquipmentPage.btnRestoreolumns.click();
		EquipmentPage.btnCloseDialog.click();
		browser.pause(3000);
	}
	GetCellIndexByColumnName(arrayOfColumns,columnName)
    {
        let cellValue=0;
		var updatedColumnsWithText = [];
		for (let i = 0; i < arrayOfColumns.length; i++) {
			updatedColumnsWithText.push(arrayOfColumns[i].getText());
		}
        if (updatedColumnsWithText.includes(columnName)) {
            let indexofColumn = updatedColumnsWithText.indexOf(columnName);
            return indexofColumn;
        }
        return cellValue;
    }
	verifyPOSearched() {
		browser.pause(2000);
		var allPOColumns = EquipmentPage.purchaseOrderAllColumns;
		var firstRowDetail = EquipmentPage.purchaseOrderfirstRowData;
		expect(this.GetCellValueByColumnName(allPOColumns,firstRowDetail,'Vendor').includes(this.poVendor)).to.be.true;
		//expect(firstRowDetail[1].getText().includes(this.poVendor)).to.be.true;
		console.log('purchase order successfully searched');
	}

	verifyPOUpdatedStatus() {
		browser.pause(3000);
		if(this.poOrderedStatus.includes('CREATED'))
		{expect(this.poOrderedStatus.includes('CREATED,ORDERED,PARTIAL,COMPLETE,CANCELED,REJECTED')).to.be.true;}
		else{
		expect(this.poOrderedStatus.includes('PENDING,ORDERED,PARTIAL,COMPLETE,CANCELED,REJECTED')).to.be.true;}
		console.log('purchase order successfully searched');
	}

	verifyPOItemReceived() {
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.poItemReceivedConfMsg);
		browser.pause(3000);
		console.log('going to verify itemserial'+this.inventoryItemSerial);
		expect(EquipmentPage.purchaseItemSerialPara(this.inventoryItemSerial.toUpperCase()).isExisting()).to.be.true;
	}
	
	verifyEquipmentAssemblyCopyCreated()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.createdEquipmentAssemblyCopy);
		console.log('Equipment Assembly copy created toast verified');
		browser.pause(3000);
		EquipmentPage.profileDescription.waitForDisplayed();
		expect(EquipmentPage.profileDescription.getValue.includes('Copy')).to.be.true;
		console.log('copied assembly name is '+EquipmentPage.profileDescription.getAttribute('value'));
		console.log('Equipment Assembly copy created successfully');
		this.equipmentProfile =EquipmentPage.profileDescription.getAttribute('value');
		browser.pause(5000);
		EquipmentPage.btnCloseOfDock.click();
		//EquipmentPage.btnCloseOfDock('Edit Equipment Assembly').click();
		browser.pause(3000);
		this.clickOnEquipmentSearch();
		this.typeInEquipmentSearch(this.equipmentProfile);
		console.log('item searched successfully');
		browser.pause(3000);
		console.log('item searched is' + this.equipmentProfile);
		EquipmentPage.firstEquipmentProfile.waitForDisplayed();
		console.log('item got is' + EquipmentPage.firstEquipmentProfile.getText());
		expect(EquipmentPage.firstEquipmentProfile.getText()).to.eql(this.equipmentProfile);
	}

	verifyEquipmentSearched()
	{
		//browser.pause(15000);
		//console.log('equipment profile is' + this.equipmentProfile);
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		expect(EquipmentPage.firstEquipmentProfile.getText()).to.eql(this.equipmentProfile);
		console.log('equipment profile successfully searched');
	}

	verifyEquipmentAssemblySearched()
	{
		browser.pause(1000);
		EquipmentPage.firstEquipmentProfile.waitForDisplayed();
		EquipmentPage.firstEquipmentProfile.waitForClickable();
		expect(EquipmentPage.firstEquipmentProfile.getText()).to.eql(this.equipmentProfile);
		expect(this.equipmentName).to.eql('No Equipment Assembly available.');
		console.log('equipment assembly successfully searched');
	}

	verifyEquipmentAssemblyTableView(tableView)
	{
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
		EquipmentPage.quipmentMeatBall.click();
		browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = EquipmentPage.quipmentTableView(EquipmentPage.quipmentTableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else if(tableView === "Compact")
		 {
			state = EquipmentPage.quipmentTableView(EquipmentPage.quipmentTableViewCompact).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = EquipmentPage.quipmentTableView(EquipmentPage.quipmentTableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
	}

	verifyEquipmentAssemblyView(tableView) {
		browser.pause(3000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "List"){
			expect(EquipmentPage.quipmentMeatBall.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(EquipmentPage.equipmentCardViewVerification.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);	
		 }
	}

	verifyInlineAssemblyEditedSuccessfully()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.updatedEquipmentAssemblyConfMsg);
		browser.pause(3000);
		this.clickOnEquipmentSearch();
		this.typeInEquipmentSearch(this.updatedEquipmentAssmeblyName);
		browser.pause(2000);
		var updatedEquipmentAssemblyName = EquipmentPage.firstEquipmentRowData[this.columnIndex+2];
		expect(updatedEquipmentAssemblyName.getText()).to.eql(this.updatedEquipmentAssmeblyName);
	}

	verifyEquipmentProfileTableView(tableView)
	{
		EquipmentPage.quipmentMeatBall.waitForDisplayed();
		EquipmentPage.quipmentMeatBall.click();
		browser.pause(2000);
		tableView = tableView.replace(/['"]+/g, '');
		var state;
		
		 if (tableView === "Comfortable"){
			state = EquipmentPage.quipmentTableView(EquipmentPage.quipmentTableViewComfortable).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else if(tableView === "Compact")
		 {
			state = EquipmentPage.quipmentTableView(EquipmentPage.quipmentTableViewCompact).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
		 else {
			state = EquipmentPage.quipmentTableView(EquipmentPage.quipmentTableViewCozy).getAttribute('class');
			console.log('View updated to: ' + tableView);
			expect(state.includes('text-success')).to.be.true;
		 }
	}

	verifyEquipmentProfilesView(tableView) {
		browser.pause(3000);
		tableView = tableView.replace(/['"]+/g, '');
		 if (tableView === "List"){
			expect(EquipmentPage.quipmentMeatBall.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);
		 }
		 else {
			expect(EquipmentPage.equipmentCardViewVerification.isExisting()).to.be.true;
			console.log('View updated to: ' + tableView);	
		 }
	}

	verifyEquipmentProfileinlineEditing()
	{
		browser.pause(3000);
		var updatedSummary = EquipmentPage.firstEquipmentRowData[1];
		expect(updatedSummary.getText()).to.eql(this.equipmentProfile);
		var updatedDescription = EquipmentPage.firstEquipmentRowData[2];
		expect(updatedDescription.getText()).to.eql(this.equipmentDescription);
	}
	//TA-762
	verifyDeleteOptionsIsPresent()
	{
		expect(EquipmentPage.btnDeleteSite.isExisting()).to.be.true;
	}
	verifyDeleteOptionsIsDisabled()
	{
		expect(EquipmentPage.btnDeleteSite.isClickable()).to.be.false;
	}
	verifyDeleteOptionsIsEnabled()
	{
		expect(this.equipmentName).to.eql('No Equipment available.');
		expect(EquipmentPage.btnDeleteSite.isClickable()).to.be.true;
	}
	verifyDeleteConfirmationContent()
	{
		EquipmentPage.btnConDialogYes.waitForDisplayed();
		expect(EquipmentPage.deleteSiteContent.getText()).to.eql('Are you sure you want to delete this infrastructure location?');
		//expect(EquipmentPage.btnConDialogYes.isExisting()).to.be.true;
		//expect(EquipmentPage.btnConDialogNo.isExisting()).to.be.true;
	}
	verifyDeleteConfirmationButton()
	{
		EquipmentPage.btnConDialogYes.waitForDisplayed();
		expect(EquipmentPage.btnConDialogYes.isExisting()).to.be.true;
		expect(EquipmentPage.btnConDialogNo.isExisting()).to.be.true;
	}
	verifyDeleteSiteSuccessMessage()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.deleteSiteConfMsg);
	}
	verifyDeltedSiteIsNotPresent()
	{
		//this.searchNewlyAddedSite();
		EquipmentPage.noDataAvailable.waitForDisplayed();
		expect(EquipmentPage.noDataAvailable.isExisting()).to.be.true;
	}
	verifyNoDeleteSiteMessage()
	{
		expect(EquipmentPage.confirmationMsg.isExisting()).to.be.false;
	}
	verifySiteIsPresent()
	{
		expect(EquipmentPage.noDataAvailable.isExisting()).to.be.false;
	}
	deleteTooltipMsg(msg)
	{
		msg = msg.replace(/['"]+/g, '');
		EquipmentPage.siteDoNotDeleteTooltip.waitForDisplayed();
		console.log('msg from the tooltip is '+EquipmentPage.siteDoNotDeleteTooltip.getText());
		expect(msg).to.eql(EquipmentPage.siteDoNotDeleteTooltip.getText());

	}

}
module.exports = new equipmentActions();
