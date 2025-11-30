var LoginPage = require('../pageobjects/login.page');
// var EquipmentPage = require('../pageobjects/IRM.page');
var EquipmentPage = require('../pageobjects/equipmentAssembliesSearch.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
const { util } = require('chai');
var expect = require('chai').expect;
var should = require('chai').should();

class equipmequipmentAssembliesSearchAction {
	
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
		this.firstProfileDescription;
		this.infrastructureProfileName;
		this.infrastructureProfileSummary;
		this.infrastructureProfileType;
		this.infrastructureProfileDescription;
		this.inventoryModel;
		this.inventoryManufacturer;
		this.SKUForInventory;
		this.inventoryDescription;
		this.descriptionOfEquipmentProfile;
		this.inventoryItemSerialNumber;
		this.childInventoryItemSerialNumber;
		this.childEquipDescription;
		this.splittedAssemblyDescription;
		this.updatedAssemblyDescription;
		this.randNumNewAssembly;
		this.ethernetMAC;
	}

	openubow() {
		EquipmentPage.open('login');
	}

	loginToUBOW(creds) {
		var credentials = creds.raw();//storing datatable as 2D array
		Utils.login(credentials[0][0], credentials[0][1]);
	
	}

	navigateToIRMPage() {
		browser.pause(1000);
		browser.waitUntil(function () {return EquipmentPage.equipmentMenu.waitForExist();},{ timeout: 4000 });		
		browser.pause(3000);
		EquipmentPage.equipmentMenu.click();
		console.log('I navigate to IRM page');
		browser.pause(3000);
		
		// browser.pause(90000);
	}

	
	openAddSiteForm() {
		browser.pause(1000);
		
		EquipmentPage.btnAddSite.scrollIntoView();
		browser.pause(1000);
		EquipmentPage.btnAddSite.waitForClickable();
		browser.pause(1000);
		EquipmentPage.btnAddSite.click();
		console.log("add site form is opened");

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
		
		browser.pause(3000);
		browser.keys(downArrowKey);
		browser.pause(500);
		browser.keys(enterKey);
		browser.pause(500);
		
	}

	
	
	fillingSiteDetails(option) {
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		option = option.replace(/['"]+/g, '');

		this.siteName = 'AutoSite' + (Math.floor(new Date() / 1000));
		console.log("Entering the site details...");

		// browser.pause(3000);

		EquipmentPage.siteName.waitForClickable();
		EquipmentPage.siteName.click();
		EquipmentPage.siteName.setValue(this.siteName);

		EquipmentPage.siteProfileTypeDropDown.click();

		browser.pause(1000);

		if (option === "base") {
			let infraProfName = this.infrastructureProfileName.substring(this.infrastructureProfileName.length - 5);
			browser.keys(infraProfName[0]);
			browser.pause(500);
			browser.keys(infraProfName[1]);
			browser.pause(500);
			browser.keys(infraProfName[2]);
			browser.pause(500);
			browser.keys(infraProfName[3]);
			browser.pause(500);
			browser.keys(infraProfName[4]);
			
		}
		browser.pause(1000);

		browser.keys(downArrowKey);
		browser.pause(1000);
		
		browser.keys(enterKey);
		
		browser.pause(1000);

		this.siteProfileType = EquipmentPage.siteProfileTypeInput.getAttribute('value');
		this.siteElevation = '120';
		EquipmentPage.elevationSite.setValue(this.siteElevation);
		this.siteAddress1 = 'New York';
		this.selectAddressFromSuggestions(this.siteAddress1);
		this.siteAddress2 = 'Manhattan';
		EquipmentPage.siteAddress2.setValue(this.siteAddress2);
		browser.pause(1000);
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
		console.log("site data entered");
	}

	
	
	saveSiteDetails() {
		//browser.pause(4000);
		EquipmentPage.btnSave.waitForDisplayed();
		EquipmentPage.btnSave.waitForClickable();
		EquipmentPage.btnSave.scrollIntoView();
		EquipmentPage.btnSave.click();
		console.log('Save button is clicked!');
		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect(EquipmentPage.confirmationMsg.getText()).to.equal ("Added Site Location successfully");

	}
	
	

addNewInfrastructureLocation(option)
	{		
		{
			console.log('going to add new infrastructure location');
			this.openAddSiteForm();
			this.fillingSiteDetails(option);
			this.saveSiteDetails();

		}
	}

	
	
	addingEquipment(option) {
		browser.pause(1000);
		
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		option = option.replace(/['"]+/g, '');
		let equipProfName;
			
			EquipmentPage.equipmentprofile.waitForExist();
			// browser.pause(1000);
			EquipmentPage.equipmentprofile.click();
			// browser.pause(1000);

			if (option === "base") {
				equipProfName = this.descriptionOfEquipmentProfile.substring(this.descriptionOfEquipmentProfile.length - 5);
				browser.keys(equipProfName[0]);
				browser.pause(500);
				browser.keys(equipProfName[1]);
				browser.pause(500);
				browser.keys(equipProfName[2]);
				browser.pause(500);
				browser.keys(equipProfName[3]);
				browser.pause(500);
				browser.keys(equipProfName[4]);
			}						

			browser.pause(1000);

			browser.keys(downArrowKey);
			browser.pause(1000);			
			browser.keys(enterKey);
			browser.pause(1000);
		
		this.equipmentProfile = EquipmentPage.equipmentprofileInput.getValue();
		console.log('equipment profile is '+this.equipmentProfile);

		EquipmentPage.inventoryFromEquipment.waitForClickable();
		EquipmentPage.inventoryFromEquipment.click();
		// browser.pause(1000);
		EquipmentPage.addNewInventoryItem.waitForClickable();
		EquipmentPage.addNewInventoryItem.click();
		console.log("add new inventory item clicked");
		
		browser.pause(1000);
		EquipmentPage.inventoryItemSerialNumber.waitForDisplayed();
		EquipmentPage.inventoryItemSerialNumber.click();
		this.inventoryItemSerialNumber = this.generateData ("SrNo ","Invnt ");
		EquipmentPage.inventoryItemSerialNumber.setValue(this.inventoryItemSerialNumber);
		console.log("Serial Number: ", this.inventoryItemSerialNumber);
		browser.pause(500);
		EquipmentPage.inventoryLocation.scrollIntoView();
		browser.pause(500);
		EquipmentPage.inventoryLocation.click();
		browser.pause(1000);		
		browser.keys(downArrowKey);
		browser.pause(1000);
		browser.keys(enterKey);
		console.log("Inventory location added");
		EquipmentPage.inventorySaveBtn.waitForClickable();
		EquipmentPage.inventorySaveBtn.click();
		expect(EquipmentPage.confirmationMsg.getText()).to.eql("Added Inventory Item successfully");
		browser.pause(1000);

		// select profile again
		EquipmentPage.equipmentprofile.click();
		// browser.pause(1000);
		
		if (option === "base") {
		browser.keys(equipProfName[0]);
		browser.pause(500);
		browser.keys(equipProfName[1]);
		browser.pause(500);
		browser.keys(equipProfName[2]);
		browser.pause(500);
		browser.keys(equipProfName[3]);
		browser.pause(500);
		browser.keys(equipProfName[4]);
		browser.pause(500);
		}
		// browser.keys("E");
		browser.pause(1000);
		// browser.keys("q");
		// browser.pause(1000);
		browser.keys(downArrowKey);
		browser.pause(1000);			
		browser.keys(enterKey);
		browser.pause(1000);

		this.equipmentName = 'Tst Equip ' + (Math.floor(new Date() / 1000));
		this.equipmentToSearch = this.equipmentName;

		this.equipmentDescription = this.equipmentName;
		EquipmentPage.profileDescription.waitForDisplayed();
		EquipmentPage.profileDescription.setValue(this.equipmentDescription);
		EquipmentPage.profilelocation.waitForClickable();
		EquipmentPage.profilelocation.click();
		if(this.customProfile===true)
		{

			EquipmentPage.profilelocationInput.setValue(this.customLocation);
			console.log('custom location set');
			//browser.keys(downArrowKey);
		}
		browser.pause(500);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(500);
		this.siteName = EquipmentPage.profilelocationInput.getValue('value');
		console.log('Equipment location is: '+this.siteName);
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
					this.ethernetMAC = this.genUniqueMAC();
					EquipmentPage.macAddressEquipment.setValue(this.ethernetMAC);
				}	
			}
		}
		if(this.customProfile==false){
		this.equipmentLocation = EquipmentPage.profilelocationInput.getAttribute('value');
			//	//this.equipmentProfile =EquipmentPage.equipmentprofileInput.getAttribute('value');
		EquipmentPage.inventoryFromEquipment.scrollIntoView();
		this.inventoryProfile =EquipmentPage.inventoryFromEquipment.getAttribute('value');}

		console.log('equipment profile is: '+this.equipmentProfile);
		console.log('original radio mac adressess'+this.equipmentMacAddress);
		console.log('original ethernet mac adressess'+this.ethernetMAC);
		browser.pause(2000);

		EquipmentPage.saveBtnAddEquipment.waitForClickable();
		EquipmentPage.saveBtnAddEquipment.click();

		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect(EquipmentPage.confirmationMsg.getText()).to.eql("Added Equipment successfully");		

		console.log("Equipment added successfully!");
		browser.pause(2000);


		// this.SKUForInventory = EquipmentPage.SKUSelectedValue.getValue();
		// this.inventoryManufacturer = EquipmentPage.manufacturerValue.getText();
		// console.log("saved manufacturer after adding equip : ", this.inventoryManufacturer );
		// console.log("saved SKU after adding equip : ", this.SKUForInventory );

		// this.addNewChildEquipment();
		// close the popup				
	}

	

closeInfraLocationPopup (){

		expect(EquipmentPage.confirmationMsg.getText()).to.eql("Added Equipment successfully");		
		console.log("Child Equipment added successfully!");
		browser.pause(2000);		
		EquipmentPage.closeBtnInfraLocationPopup.waitForClickable();
		EquipmentPage.closeBtnInfraLocationPopup.click();
		console.log("Infra Location Closed successfully");
	}

	

addNewChildEquipment(option) {
		// browser.pause(2000);
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter
		option = option.replace(/['"]+/g, '');
		let equipProfileTemp;
		//EquipmentPage.editEquipment.waitForClickable ();
		//EquipmentPage.editEquipment.click();
		
		// browser.pause(2000);
		EquipmentPage.addChildEquip.waitForDisplayed();
		EquipmentPage.addChildEquip.waitForClickable();
		EquipmentPage.addChildEquip.click();

		// browser.pause(2000);
		EquipmentPage.newChildEquip.waitForClickable();
		EquipmentPage.newChildEquip.click();

		console.log("new child equipment option clicked");

		 browser.pause(2000);
		//var totalcountofequipmentproifleoptions = EquipmentPage.equipmentprofileChild;
		//console.log("total count of equipment profile options: "+totalcountofequipmentproifleoptions.length);
		EquipmentPage.equipmentprofileChild.waitForDisplayed();
		// browser.pause(2000);

		EquipmentPage.equipmentprofileChild.click();
		browser.pause(1000);
		if (option === "base") {
			equipProfileTemp = this.descriptionOfEquipmentProfile.substring(this.descriptionOfEquipmentProfile.length - 5);
			browser.keys(equipProfileTemp[0]);
			browser.pause(500);
			browser.keys(equipProfileTemp[1]);
			browser.pause(500);
			browser.keys(equipProfileTemp[2]);
			browser.pause(500);
			browser.keys(equipProfileTemp[3]);
			browser.pause(500);
			browser.keys(equipProfileTemp[4]);
		}

		browser.pause(500);

		browser.keys(downArrowKey);
		browser.pause(500);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(2000);
		console.log('1st time equipment child profile is selected');

		this.equipmentProfile = EquipmentPage.equipmentprofileInput.getValue();
		if(this.equipmentProfile==""){
			EquipmentPage.equipmentprofileChild.click();
			browser.pause(500);
			browser.keys(downArrowKey);
			browser.pause(500);
			browser.keys(downArrowKey);
			browser.keys(enterKey);
			browser.pause(2000);
			console.log('1st time again equipment child profile is selected');
			this.equipmentProfile = EquipmentPage.equipmentprofileInput.getValue();
		}
		console.log('equipment child profile is: '+this.equipmentProfile);

		EquipmentPage.inventoryFromEquipment.waitForClickable();
		EquipmentPage.inventoryFromEquipment.click();
		browser.pause(1000);
		EquipmentPage.addNewInventoryItem.waitForDisplayed();
		EquipmentPage.addNewInventoryItem.click();
		console.log("add new inventory item clicked for child");
		
		browser.pause(1000);
		EquipmentPage.inventoryItemSerialNumber.waitForDisplayed();
		EquipmentPage.inventoryItemSerialNumber.click();
		this.childInventoryItemSerialNumber = this.generateData ("SrNo ","Chld_Invnt ");
		EquipmentPage.inventoryItemSerialNumber.setValue(this.childInventoryItemSerialNumber);
		console.log("Child Serial Number: ", this.childInventoryItemSerialNumber);		
		// browser.pause(1000);

		EquipmentPage.childEquipmentInventorySaveBtn.waitForClickable();
		EquipmentPage.childEquipmentInventorySaveBtn.click();
		expect(EquipmentPage.confirmationMsg.getText()).to.eql("Added Inventory Item successfully");
		browser.pause(1000);
		console.log("Child inventory was added");

		// equipment profile again
		EquipmentPage.equipmentprofileChild.click();
		// browser.pause(1000);
		if (option === "base") {
		browser.keys(equipProfileTemp[0]);
		browser.pause(500);
		browser.keys(equipProfileTemp[1]);
		browser.pause(500);
		browser.keys(equipProfileTemp[2]);
		browser.pause(500);
		browser.keys(equipProfileTemp[3]);
		browser.pause(500);
		browser.keys(equipProfileTemp[4]);
		}
		browser.pause(500);

		browser.keys(downArrowKey);
		browser.pause(1000);
		//browser.keys(downArrowKey);
		browser.keys(enterKey);
		browser.pause(1000);
		console.log('2nd time equipment child profile is selected');
		this.childEquipDescription = this.equipmentName+" Chld";
		EquipmentPage.equipmentDescription.setValue (this.childEquipDescription);

		browser.pause(1000);

		////this.equipmentMacAddress = this.genUniqueMAC();
		////EquipmentPage.macAddressEquipment.setValue(this.equipmentMacAddress);
		// browser.pause(2000);

		////this.equipmentIpAddress = this.genUniqueIPAddress();
		////EquipmentPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
		// browser.pause(2000);

		////console.log('equipment child profile is: '+this.equipmentProfile);
		////console.log('child radio mac adressess: '+this.equipmentMacAddress);
		////console.log('child ethernet IP adressess: '+this.equipmentIpAddress);
		// browser.pause(3000);

		EquipmentPage.childEquipmentSaveBtn.waitForClickable();
		EquipmentPage.childEquipmentSaveBtn.click();
		console.log('equipment child added successfully');
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


	clickEquipmentAssemblyTab()
	{
		browser.pause(3000);
		EquipmentPage.btnEquipmentAssembly.scrollIntoView();
		browser.pause(1000);
		
		EquipmentPage.btnEquipmentAssembly.click();
		console.log("Equipment Assembly Tab was clicked");
				
		browser.pause(2000);
	}

	

verifySearchIconInAssemblyTable ()
	{
		browser.pause(2000);
		EquipmentPage.btnequipmentSearch.waitForDisplayed();
		if (expect(EquipmentPage.btnequipmentSearch.isExisting()).to.be.true)
		{
			console.log("Search Icon In Equipment Assembly Table found");
		}
		else{
			console.log("Search button not found");
		}
	}

	

verifySearchTextboxAppears () {
		browser.pause(2000);		
		if (expect (EquipmentPage.searchTextBox.isExisting()).to.be.true)
		{
			console.log("Search texbox appears");
		}
		else{
			console.log("Search textbox not shown");
		}

	}


	selectCopyAssembly()
	{   
		this.clickEquipmentAssemblyTab();
		this.changeEquipmentProfileView('Tiles');
		EquipmentPage.btnCopyAssembly.waitForDisplayed();
		EquipmentPage.btnCopyAssembly.waitForClickable();	
		browser.pause(3000);
		EquipmentPage.btnCopyAssembly.click();
		browser.pause(3000);
	}

	

copyAssemblyUpdated() {
		browser.pause(3000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter

		this.splittedAssemblyDescription = EquipmentPage.assemblyDescription.getAttribute('value');
		this.splittedAssemblyDescription = this.splittedAssemblyDescription.split(' ')[0];
		this.splittedAssemblyDescription = this.splittedAssemblyDescription.split('_')[0];
		console.log("After first space removing, the name of assembly is: ", this.splittedAssemblyDescription);
		browser.pause(2000);

		this.randNumNewAssembly = this.generateRandomNumber();
		this.updatedAssemblyDescription = this.splittedAssemblyDescription+" "+this.randNumNewAssembly;
		
		browser.pause(2000);


		EquipmentPage.assemblyDescription.click();
		EquipmentPage.assemblyDescription.keys(clearKeys);
		EquipmentPage.assemblyDescription.setValue(this.updatedAssemblyDescription);
		console.log("The updated assembly description is: ", this.updatedAssemblyDescription);

		// browser.pause(2000);
		// EquipmentPage.profilelocation.click();
		// browser.pause(2000);		
		// EquipmentPage.profilelocation.keys(downArrowKey);
		// browser.pause(500);
		// EquipmentPage.profilelocation.keys(downArrowKey);
		// browser.pause(500);
		// EquipmentPage.profilelocation.keys(enterKey);

		// browser.pause(2000);

		// EquipmentPage.copyEquipRadioMACAdress.waitForClickable();
		// EquipmentPage.copyEquipRadioMACAdress.click();

		// browser.pause(2000);
		// EquipmentPage.copyEquipEthernetAdress.waitForClickable();
		// EquipmentPage.copyEquipEthernetAdress.click();

		// // this.equipmentIpAddress = this.genUniqueIPAddress();
		// EquipmentPage.copyEquipIPAdress.waitForClickable();
		// EquipmentPage.copyEquipIPAdress.click();
		// EquipmentPage.copyEquipIPAdress.keys(clearKeys);		
		// EquipmentPage.copyEquipIPAdress.setValue(this.genUniqueIPAddress());		

		// browser.pause(2000);


		// if(EquipmentPage.isErrorMsgExist){
		// 	console.log('error msgs exists');
		// 	var allmsgs = EquipmentPage.allErrorMsgs;
		// 	for(var i=0; i<allmsgs.length; i++){
		// 	if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
		// 		{
		// 			EquipmentPage.copyEquipIPAdress.waitForClickable();
		// 			EquipmentPage.copyEquipIPAdress.click();
		// 			EquipmentPage.copyEquipIPAdress.keys(clearKeys);		
		// 			EquipmentPage.copyEquipIPAdress.setValue(this.genUniqueIPAddress());

		// 		}

		// 	}
		// }

		EquipmentPage.copyAssemblySaveBtn.waitForClickable();
		EquipmentPage.copyAssemblySaveBtn.click();

		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect (EquipmentPage.confirmationMsg.getText()).to.equal("Copied Equipment Assembly successfully");

		browser.pause(2000);
		EquipmentPage.closeBtnCopyAssemblyPopup.waitForClickable();
		EquipmentPage.closeBtnCopyAssemblyPopup.click();
		console.log("Copy Assembly popup closed");
		browser.pause(2000);
		
	}



	

performSearchInListView(){

		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.changeEquipmentProfileView('List');

		EquipmentPage.equipmentAssemblyInListView.waitForDisplayed();

		browser.pause(1000);

		this.clickOnEquipmentAssemblySearch();

		browser.pause(1000);
	}

	

verifyLockedIconInSearch() {
		browser.pause(2000);
		EquipmentPage.lockedIconInSearch.waitForDisplayed();		
		expect(EquipmentPage.lockedIconInSearch.isExisting()).to.be.true;
		console.log("lock icon was shown when key is selected for search");
	}


	

verifyUnlockedIconInSearch(){
		browser.pause(2000);
		EquipmentPage.lockOpenIcon.waitForDisplayed();		
		expect(EquipmentPage.lockOpenIcon.isExisting()).to.be.true;
		console.log("unlocked icon was shown when key is unselected for search");
	}

	

searchRefinement () {
		
		var bkspace = ['\uE003'];// backspace
		browser.pause(1000);
		EquipmentPage.searchTextBox.waitForClickable();
		EquipmentPage.searchTextBox.click();
		browser.pause(1000);
		

		for (var i = 0; i < this.splittedAssemblyDescription.length; i++) {
			EquipmentPage.searchTextBox.keys(this.splittedAssemblyDescription[i]);
			browser.pause(1000);			
		}

		this.verifyMultipleHighlightedSearchResults(); // verify that at least more than 1 highlighted records in search results.

		EquipmentPage.searchTextBox.click();
		EquipmentPage.searchTextBox.keys(" ");
		this.randNumNewAssembly = this.randNumNewAssembly.toString();
		console.log("random Num length was: ", this.randNumNewAssembly.length);
	
		for (var i = 0; i < this.randNumNewAssembly.length; i++) {
			EquipmentPage.searchTextBox.keys(this.randNumNewAssembly[i]);
			browser.pause(1000);			
		}

		this.verifySingleHighlightedSearchResult (); // verify that only 1 highlighted record in search results.
		browser.pause(4000);

		for (var i = 0; i < this.randNumNewAssembly.length+1; i++) {
			EquipmentPage.searchTextBox.keys(bkspace);
			browser.pause(1000);			
		}

		this.verifyMultipleHighlightedSearchResults(); // verify that at least more than 1 highlighted records in search results.

	}

	verifyMultipleHighlightedSearchResults() {
		browser.pause(3000);
		expect(EquipmentPage.highlightedSearchTexts()).to.be.gt(1);
		console.log("more than 1 results found: ", EquipmentPage.highlightedSearchTexts());
	}

	verifySingleHighlightedSearchResult () {
		browser.pause(3000);		
		expect(EquipmentPage.highlightedSearchTexts()).to.equal(1);
		console.log("1 result found: ", EquipmentPage.highlightedSearchTexts());
		
	}

	
	generateRandomNumber() {	
		
		return (Math.floor(new Date() / 1000));
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
		browser.pause(1000);
		EquipmentPage.updateMacAddressWhileCopy.setValue(this.equipmentMacAddress);
		this.ethernetMACaddress = this.genUniqueMAC();
		EquipmentPage.updateEthernetMACaddressWhileCopy.scrollIntoView();
		EquipmentPage.updateEthernetMACaddressWhileCopy.click();
		EquipmentPage.updateEthernetMACaddressWhileCopy.keys(clearKeys);
		browser.pause(1000);
		EquipmentPage.updateEthernetMACaddressWhileCopy.setValue(this.ethernetMACaddress);
		this.equipmentIpAddress = this.genUniqueIPAddress();
		EquipmentPage.updateIpAddressEquipment.click();
		EquipmentPage.updateIpAddressEquipment.scrollIntoView();
		EquipmentPage.updateIpAddressEquipment.keys(clearKeys);
		browser.pause(1000);
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
		browser.pause(1000);
		EquipmentPage.btnEquipmentAssembly.click();
		browser.pause(1000);
	}
	
	

clickOnEquipmentAssemblySearch()
	{
		browser.pause(2000);
		EquipmentPage.btnequipmentSearch.waitForDisplayed();
		EquipmentPage.btnequipmentSearch.scrollIntoView();
		EquipmentPage.btnequipmentSearch.click();
		EquipmentPage.equipmentSearch.click();
		console.log("search icon was clicked");
		browser.pause(2000);
	}


	

typeInEquipmentAssemblySearchInListView()
	{
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.changeEquipmentProfileView('List');

		EquipmentPage.equipmentAssemblyInListView.waitForDisplayed();

		browser.pause(1000);
		this.firstProfileDescription = EquipmentPage.equipmentAssemblyInListView.getText();
		console.log("the profile descripition found as: ",this.firstProfileDescription);

		this.clickOnEquipmentAssemblySearch();

		EquipmentPage.equipmentSearch.setValue('a13qw');
		browser.pause(2000);

		EquipmentPage.equipmentSearch.keys(clearKeys);
		browser.pause(1000);

		EquipmentPage.equipmentSearch.setValue(this.firstProfileDescription);
		browser.pause(1000);		

	}

	

performSearchOnEquipmentAssembly()
	{
		browser.pause(2000);

		this.changeEquipmentProfileView('List');

		EquipmentPage.equipmentAssemblyInListView.waitForDisplayed();

		browser.pause(1000);
		this.firstProfileDescription = EquipmentPage.equipmentAssemblyInListView.getText();
		console.log("the profile descripition found as: ",this.firstProfileDescription);
				
		this.clickOnEquipmentAssemblySearch();
		EquipmentPage.equipmentSearch.waitForDisplayed();
		EquipmentPage.equipmentSearch.setValue('a13qw');
		browser.pause(2000);
		expect (EquipmentPage.noDataAvailable.isExisting()).to.be.true;
		browser.pause(2000);
	}

	

	searchOnEquipmentAssemblyForUnavailableData()
	{
		browser.pause(2000);
		
		this.changeEquipmentProfileView('List');
		
		EquipmentPage.equipmentAssemblyInListView.waitForDisplayed();
		browser.pause(1000);

		this.clickOnEquipmentAssemblySearch();
		EquipmentPage.equipmentSearch.waitForDisplayed();
		EquipmentPage.equipmentSearch.setValue('a13qweDq');
		browser.pause(2000);		
	}

	

verifyNoDataAvailableSearchAssembly () {
		browser.pause(2000);
		expect (EquipmentPage.noDataAvailable.isExisting()).to.be.true;
		console.log("no data available for equipment assembly");
		browser.pause(2000);
	}

	

clickXIconOnSearchField() {
	
		browser.pause(2000);		
		EquipmentPage.equipmentSearchCloseIcon.waitForClickable();
		EquipmentPage.equipmentSearchCloseIcon.click();
		
		browser.pause(2000);
		expect (EquipmentPage.equipmentSearch.isDisplayed()).to.be.false;
		console.log("search field is closed");
		browser.pause(2000);
	}
	
	

searchFieldClearedWhenXClicked() {
		browser.pause(2000);
		this.clickOnEquipmentAssemblySearch();

		browser.pause(2000);
		expect (EquipmentPage.equipmentSearch.isDisplayed()).to.be.true;
		console.log("Search field is shown again with clear input");
		expect (EquipmentPage.equipmentSearch.getAttribute('value')).to.equal('');
		browser.pause(1000);		

	}

	

verifyHighlightedSearchResults () {
		browser.pause(2000);		
		expect(EquipmentPage.highlightedSearchText.isExisting()).to.be.true;
		console.log("highlighted search results exist");		
	}

verifyHighlightedSearchResultsForAssembly () {
		browser.pause(2000);		
		expect(EquipmentPage.highlightedSearchText.isExisting()).to.be.true;
		console.log("highlighted search results exist");		
	}

	

clickLockOpenIcon() {
		browser.pause(2000);
		EquipmentPage.lockOpenIcon.waitForClickable();
		EquipmentPage.lockOpenIcon.click();
		browser.pause(2000);
		expect(EquipmentPage.serialOPtionContextMenu.isExisting()).to.be.true;
		console.log("Search context menu appeared");		
	}


	

clickUnlockOpenIcon() {
		browser.pause(2000);
		EquipmentPage.lockedIconInSearch.waitForClickable();
		EquipmentPage.lockedIconInSearch.click();
		browser.pause(2000);
		expect(EquipmentPage.serialOPtionContextMenu.isExisting()).to.be.true;
		console.log("Search context menu appeared");		
	}

	

clickSearchOptionAs(option) {
		browser.pause(1000);
		option = option.replace(/['"]+/g, '');	

		switch(option){
			case "Serial":	
				EquipmentPage.serialOPtionContextMenu.waitForClickable();			
				EquipmentPage.serialOPtionContextMenu.click();
				console.log("Serial option was clicked");				
				browser.pause(2000);
				break;

			case "SKU":
				EquipmentPage.SKUOPtionContextMenu.waitForDisplayed();
				EquipmentPage.SKUOPtionContextMenu.click();
				browser.pause(2000);
				break;

			case "Manufacturer":
				EquipmentPage.manufacturerOPtionContextMenu.waitForDisplayed();
				EquipmentPage.manufacturerOPtionContextMenu.click();
				browser.pause(2000);
				break;

			case "Mac":
				EquipmentPage.MACOPtionContextMenu.waitForDisplayed();
				EquipmentPage.MACOPtionContextMenu.click();
				browser.pause(2000);
				break;

			case "IP Address":
				EquipmentPage.IPAddressOPtionContextMenu.waitForDisplayed();
				EquipmentPage.IPAddressOPtionContextMenu.click();
				browser.pause(2000);
				break;

			case "Location":
				EquipmentPage.locationOPtionContextMenu.waitForDisplayed();
				EquipmentPage.locationOPtionContextMenu.click();
				browser.pause(2000);
				break;

		}
		
	}

	

verifySerialSelectedInSearch (option) {

		browser.pause(1000);
		option = option.replace(/['"]+/g, '');	

		switch(option){

			case "Serial":	
				expect(EquipmentPage.serialSelectedInSearch.isExisting()).to.be.true;
				console.log("Serial was selected in search field");
				browser.pause(2000);
				break;

			case "SKU":
				expect(EquipmentPage.SKUSelectedInSearch.isExisting()).to.be.true;
				console.log("SKU found as selected in search field");
				browser.pause(2000);
				break;

			case "Manufacturer":
				expect(EquipmentPage.manufacturerSelectedInSearch.isExisting()).to.be.true;
				console.log("manufacturer found as selected in search field");
				browser.pause(2000);
				break;

			case "Mac":
				expect(EquipmentPage.MACSelectedInSearch.isExisting()).to.be.true;
				console.log("MAC found as selected in search field");
				browser.pause(2000);
				break;

			case "IP Address":
				expect(EquipmentPage.IPAdressSelectedInSearch.isExisting()).to.be.true;
				console.log("IP Address found as selected in search field");
				browser.pause(2000);
				break;

			case "Location":
				expect(EquipmentPage.locationSelectedInSearch.isExisting()).to.be.true;
				console.log("Location found as selected in search field");
				browser.pause(2000);
				break;
		}


	}

prepareNewEquipmentAssembly() {
	this.addNewInfrastructureLocation("new");
	this.addNewEquipment("new");
	this.addNewChildEquipment("new");
	this.closeInfraLocationPopup();
}
	
	
enterSearchValue(option) {
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		// this.clickOnEquipmentAssemblySearch();
		browser.pause(1000);
		EquipmentPage.equipmentSearch.scrollIntoView();
		EquipmentPage.equipmentSearch.waitForClickable();
		EquipmentPage.equipmentSearch.click();
		EquipmentPage.equipmentSearch.keys(clearKeys);
				
		option = option.replace(/['"]+/g, '');

		switch(option){
			case "Serial":
				 {
					EquipmentPage.equipmentSearch.setValue(this.inventoryItemSerialNumber);
					console.log("saved Serial num is searched: ",this.inventoryItemSerialNumber);
				}
				browser.pause(2000);
				break;

			case "SKU":				
					{
					EquipmentPage.searchTextBox.setValue(this.SKUForInventory);
					console.log("SKU was entered for search as: ",this.SKUForInventory);}
					
				browser.pause(2000);
				break;		

			case "Manufacturer":				

					{
					EquipmentPage.searchTextBox.setValue(this.inventoryManufacturer);
					console.log("Manufacturer was entered for search as: ",this.inventoryManufacturer);}
					
				browser.pause(2000);
				break;
				

			case "Mac":				

					{
					EquipmentPage.searchTextBox.setValue(this.equipmentMacAddress);
					console.log("MAC was entered for search as: ",this.equipmentMacAddress);}
					
				browser.pause(2000);
				break;

			case "IP Address":				

					{
					EquipmentPage.searchTextBox.setValue(this.equipmentIpAddress);
					console.log("IP Address was entered for search as: ",this.equipmentIpAddress);}
					
				browser.pause(2000);
				break;

			case "Location":				

					{
					EquipmentPage.searchTextBox.setValue(this.siteName);
					console.log("Location was entered for search as: ",this.siteName);}
					
				browser.pause(2000);
				break;
		}
		// this.closeSearchByUsingXIcon ();
	}
	
enterSearchValueOneByOne (option) {
		browser.pause(2000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
			
		// option = option.replace(/['"]+/g, '');
		let values = option.raw();
		// this.changeEquipmentProfileView('List');

		for (var i=0; i<values.length; i++)
		{

			this.clickOnEquipmentAssemblySearch();
			browser.pause(1000);
			// EquipmentPage.equipmentSearch.scrollIntoView();
			EquipmentPage.equipmentSearch.waitForClickable();
			EquipmentPage.equipmentSearch.click();
			EquipmentPage.equipmentSearch.keys(clearKeys);


		switch(values[i][0]){
			case "Serial":				
				 {					
					EquipmentPage.equipmentSearch.setValue(this.inventoryItemSerialNumber);					
					console.log("saved Serial num is searched: ",this.inventoryItemSerialNumber);


				}
				browser.pause(2000);
				break;

			case "SKU":
					{
					EquipmentPage.searchTextBox.setValue(this.SKUForInventory);					
					console.log("SKU was entered for search as: ",this.SKUForInventory);}
					
				browser.pause(2000);
				break;		

			case "Manufacturer":
					{
					EquipmentPage.searchTextBox.setValue(this.inventoryManufacturer);					
					console.log("Manufacturer was entered for search as: ",this.inventoryManufacturer);}
					
				browser.pause(2000);
				break;
				

			case "Mac":
					{
					EquipmentPage.searchTextBox.setValue(this.equipmentMacAddress);
					console.log("MAC was entered for search as: ",this.equipmentMacAddress);}
					
				browser.pause(2000);
				break;

			case "IP Address":				
					{
					EquipmentPage.searchTextBox.setValue(this.equipmentIpAddress);
					console.log("IP Address was entered for search as: ",this.equipmentIpAddress);}
					
				browser.pause(2000);
				break;

			case "Location":				
					{						
					EquipmentPage.searchTextBox.setValue(this.siteName);
					console.log("Location was entered for search as: ",this.siteName);}
					
				browser.pause(2000);
				break;
		} // switch

		this.firstEquipmentAssemblyRowData();
		this.closeSearchByUsingXIcon();

		}// for loop	
		// this.closeSearchByUsingXIcon ();
	}

	

closeSearchByUsingXIcon () {
		EquipmentPage.equipmentClearSearch.click();
		browser.pause(2000);

	}

	

firstEquipmentAssemblyRowData (){
		browser.pause(2000);		
		EquipmentPage.firstEquipmentAssemblyRowData.scrollIntoView();
		browser.pause(1000);
		expect(EquipmentPage.firstEquipmentAssemblyRowData.isExisting()).to.be.true;
		console.log("Search results found");
		browser.pause(2000);
	}


addNewInfrastructureProfileFromAppIcon () {
		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter

		browser.pause(1000);
		EquipmentPage.btnAppIcon.waitForDisplayed();
		EquipmentPage.btnAppIcon.click();
		browser.pause(1000);
		EquipmentPage.btnSettingsEquipment.waitForDisplayed();
		EquipmentPage.btnSettingsEquipment.click();
		browser.pause(1000);
		EquipmentPage.btnInfrastructureProfileFromMenu.waitForDisplayed();
		EquipmentPage.btnInfrastructureProfileFromMenu.click();
		browser.pause(1000);
		EquipmentPage.btnAddNewProfileCircleIcon.waitForDisplayed();
		EquipmentPage.btnAddNewProfileCircleIcon.click();
		
		this.fillingInfrastructrureProfileDetails();
		browser.pause(2000);		

	}
			
	
	fillingInfrastructrureProfileDetails () {

		var downArrowKey = ['\ue015'];// arrow down
		var upArrowKey = ['\uE013'];// arrow up
		var enterKey = ['\ue007'];// enter

		browser.pause(1000);
		EquipmentPage.nameOfInfrastructureProfile.waitForDisplayed();
		EquipmentPage.nameOfInfrastructureProfile.click();

		browser.pause(1000);
		this.infrastructureProfileName = this.generateInfraProfileData("Name");
		EquipmentPage.nameOfInfrastructureProfile.waitForClickable();
		EquipmentPage.nameOfInfrastructureProfile.click();
		EquipmentPage.nameOfInfrastructureProfile.setValue(this.infrastructureProfileName);

		browser.pause(2000);
		this.infrastructureProfileSummary = this.generateInfraProfileData("Sumry");
		EquipmentPage.summaryOfInfrastructureProfile.waitForClickable();
		EquipmentPage.summaryOfInfrastructureProfile.click();
		EquipmentPage.summaryOfInfrastructureProfile.setValue(this.infrastructureProfileSummary);
		
		browser.pause(2000);
		EquipmentPage.typeOfInfrastructureProfile.waitForClickable();
		EquipmentPage.typeOfInfrastructureProfile.click();
		browser.pause(2000);
		browser.keys(downArrowKey);
		browser.pause(1000);
		browser.keys(enterKey);

		browser.pause(2000);
		this.infrastructureProfileDescription = this.generateInfraProfileData("Desc");;
		EquipmentPage.descriptionOfInfrastructureProfile.waitForClickable();
		EquipmentPage.descriptionOfInfrastructureProfile.click();
		EquipmentPage.descriptionOfInfrastructureProfile.setValue(this.infrastructureProfileDescription);

		browser.pause(2000);
		EquipmentPage.newInfrastructureProfileAddBtn.waitForClickable();
		EquipmentPage.newInfrastructureProfileAddBtn.click();

		browser.pause(1000);
		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect(EquipmentPage.confirmationMsg.getText()).to.equal("Added new Infrastructure Profile successfully");
		
		console.log("Infrastructure profile added successfully");
		
		browser.pause(2000);

		EquipmentPage.infrastructureProfileCloseIcon.waitForClickable ();
		EquipmentPage.infrastructureProfileCloseIcon.click();
		console.log("infrastructureProfileCloseIcon was clicked....");
		
	}

	

addNewInventoryProfileFromMenu () {

		browser.pause(1000);
		EquipmentPage.btnAppIcon.waitForDisplayed();
		EquipmentPage.btnAppIcon.click();
		browser.pause(1000);
		EquipmentPage.btnSettingsEquipment.waitForDisplayed();
		EquipmentPage.btnSettingsEquipment.click();
		browser.pause(1000);
		EquipmentPage.btnInventoryProfileFromMenu.waitForDisplayed();
		EquipmentPage.btnInventoryProfileFromMenu.click();
		browser.pause(1000);
	}	

	// close the Inventory popup
	

inventoryProfileClose () {
		browser.pause (1000);
		EquipmentPage.inventoryProfileCloseBtn.waitForClickable();
		EquipmentPage.inventoryProfileCloseBtn.click();
		browser.pause (1000);
	}



addInventoryProfile() {
		browser.pause (1000);
		EquipmentPage.btnAddNewInventoryProfile.waitForDisplayed();
		EquipmentPage.btnAddNewInventoryProfile.click();		
		
		browser.pause(1000);
		this.inventoryModel = this.generateData("Model", "Inv");
		EquipmentPage.modelNameInventoryProfile.waitForClickable();
		EquipmentPage.modelNameInventoryProfile.click();
		EquipmentPage.modelNameInventoryProfile.setValue(this.inventoryModel);

		browser.pause(1000);
		EquipmentPage.manufacturerInventoryProfile.waitForClickable();
		EquipmentPage.manufacturerInventoryProfile.click();
		browser.pause(1000);
		EquipmentPage.manufacturerAddNew.waitForClickable();
		EquipmentPage.manufacturerAddNew.click();
		browser.pause(1000);
		this.inventoryManufacturer = this.generateData("Manu", "Inv");
		EquipmentPage.manufacturerReadyAddNew.waitForClickable();
		EquipmentPage.manufacturerReadyAddNew.click();
		EquipmentPage.manufacturerReadyAddNew.setValue(this.inventoryManufacturer);
		
		browser.pause(2000);
		
		this.SKUForInventory = this.generateData("SKU", "Inv");
		EquipmentPage.inventorySKU.waitForClickable();
		EquipmentPage.inventorySKU.click();
		EquipmentPage.inventorySKU.setValue(this.SKUForInventory);

		
		browser.pause(1000);
		this.inventoryDescription = this.generateData("Description", "Inv");;
		EquipmentPage.descriptionOfInventory.waitForClickable();
		EquipmentPage.descriptionOfInventory.click();
		EquipmentPage.descriptionOfInventory.setValue(this.inventoryDescription);

		browser.pause(1000);
		EquipmentPage.newInventoryProfileAddBtn.waitForClickable();
		EquipmentPage.newInventoryProfileAddBtn.click();

		// browser.pause(1000);
		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect(EquipmentPage.confirmationMsg.getText()).to.equal("Added new Inventory Profile successfully");
		console.log("Inventory profile added successfully");	

	}

	

addEquipmentProfile() {
		browser.pause(1000);
		EquipmentPage.equipmentProfilesTab.waitForClickable();
		EquipmentPage.equipmentProfilesTab.click();

		browser.pause(1000);
		EquipmentPage.createEquipmentProfile.waitForClickable();
		EquipmentPage.createEquipmentProfile.click();

		browser.pause(2000);
		EquipmentPage.typeOfNewEquipmentProfile.waitForClickable();
		browser.pause(1000);
		EquipmentPage.typeOfNewEquipmentProfile.click();
		browser.pause(1000);
		EquipmentPage.selectTypeAsAP.click();

		browser.pause(1000);

		this.descriptionOfEquipmentProfile = this.generateData("Desc", "EqpPrfl"); 		
		EquipmentPage.descriptionOfEquipmentProfile.waitForClickable();
		EquipmentPage.descriptionOfEquipmentProfile.click();
		EquipmentPage.descriptionOfEquipmentProfile.setValue(this.descriptionOfEquipmentProfile);

		browser.pause(2000);
		EquipmentPage.btnAdd.waitForClickable();
		EquipmentPage.btnAdd.click();

		EquipmentPage.confirmationMsg.waitForDisplayed();
		expect(EquipmentPage.confirmationMsg.getText()).to.equal("Added new Equipment Profile successfully");
		browser.pause (1000);
		EquipmentPage.equipmentProfileClose.waitForClickable();
		EquipmentPage.equipmentProfileClose.click();
	}

	

addVendors() {
		browser.pause(1000);
		EquipmentPage.vendorsTab.waitForClickable();
		EquipmentPage.vendorsTab.click();

		browser.pause(1000);
		EquipmentPage.createVendorBtn.waitForClickable();
		EquipmentPage.createVendorBtn.click();

		browser.pause(1000);

		var downArrowKey = ['\ue015'];// arrow down
		var enterKey = ['\ue007'];// enter

		EquipmentPage.vendorName.waitForClickable();
		EquipmentPage.vendorName.click();
		EquipmentPage.vendorName.setValue(this.generateData("name", "vendor"));
		browser.pause(1000);

		EquipmentPage.vendorFN.waitForClickable();
		EquipmentPage.vendorFN.click();
		EquipmentPage.vendorFN.setValue(this.generateData("FN", "vndr"));
		browser.pause(1000);

		EquipmentPage.vendorLN.waitForClickable();
		EquipmentPage.vendorLN.click();
		EquipmentPage.vendorLN.setValue(this.generateData("LN", "vndr"));
		browser.pause(1000);

		EquipmentPage.vendorAddressCountry.waitForClickable();
		EquipmentPage.vendorAddressCountry.click();
		browser.pause(500);
		
		browser.keys("U");
		browser.pause(500);
		
		browser.keys("S");
		browser.pause(500);
		
		browser.keys("A");
		browser.pause(1000);
		browser.keys(enterKey);
		
		browser.pause(1000);
		EquipmentPage.vendorCity.waitForClickable();
		EquipmentPage.vendorCity.click();
		EquipmentPage.vendorCity.setValue("test City");

		browser.pause(1000);
		EquipmentPage.vendorStateInput.waitForClickable();
		EquipmentPage.vendorStateInput.click();
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(downArrowKey);
		browser.keys(enterKey);
		
		browser.pause(1000);
		EquipmentPage.vendorZip.waitForClickable();
		EquipmentPage.vendorZip.click();
		EquipmentPage.vendorZip.setValue("12345-6789");		

		browser.pause(1000);
		EquipmentPage.btnAdd.waitForClickable();
		EquipmentPage.btnAdd.click();

		expect(EquipmentPage.confirmationMsg.getText()).to.equal("Added new Vendor and Contact successfully");		
		browser.pause (3000);

		console.log("Vendor added....");

	}
	
		
	generateInfraProfileData(value) {
		return 'Tst InfPrlf '+ value + (Math.floor(new Date() / 1000));
	}
		
		
	generateData(value, topic) {	
		
		return topic+' Tst '+ value + (Math.floor(new Date() / 1000));
	}
	

	

addNewEquipment(option) {
		this.clickAddEquipment();
		browser.pause(1000);
		this.addingEquipment(option);
		
	}

	clickAddEquipment() {
		browser.pause(4000);
		EquipmentPage.btnEquipment.waitForDisplayed();
		//EquipmentPage.btnEquipment.scrollIntoView();
		//EquipmentPage.btnEquipment.waitForClickable();
		EquipmentPage.btnEquipment.click();
		
		browser.pause(2000);
		EquipmentPage.btnAddEquipment.waitForClickable();
		EquipmentPage.btnAddEquipment.click();
		console.log('I click on ADD NEW Equipment button');
	
	}
	
	clickAddNewEquipmentFromLocation() {
		browser.pause(1000);
		EquipmentPage.btnAddEquipmentFromSiteMenu.waitForClickable();
		EquipmentPage.btnAddEquipmentFromSiteMenu.click();
		
		browser.pause(1000);
		EquipmentPage.btnAddEquipmentFromSite.waitForClickable();
		EquipmentPage.btnAddEquipmentFromSite.click();
	
	}



changeEquipmentProfileView(equipmentView)
	{
		browser.pause(3000);
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

				browser.pause(2000);
				EquipmentPage.selectEquipmentTilesItem.waitForDisplayed();
				EquipmentPage.selectEquipmentTilesItem.waitForClickable();
				EquipmentPage.selectEquipmentTilesItem.click();
				browser.pause(3000);
				break;
		}
		console.log('I set equipment profile view to '+ equipmentView);
	}



	GetCellValueByColumnName(arrayOfColumns,arrayOfDataCells,columnName)
    {
        let cellValue="";
		var updatedColumnsWithText = [];
		for (let i = 0; i < arrayOfColumns.length; i++) {		
			updatedColumnsWithText.push(arrayOfColumns[i].getText());
		}
        if (updatedColumnsWithText.includes(columnName)) {
            let indexofColumn = updatedColumnsWithText.indexOf(columnName);            
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
}
module.exports = new equipmequipmentAssembliesSearchAction();
