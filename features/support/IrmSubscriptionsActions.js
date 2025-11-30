
var irmSubsPage = require('../pageobjects/IrmSubscriptions.page');

var expect = require('chai').expect; 


class IrmSubscriptionsActions{
	
	constructor(){
		this.Esckeys = ['\uE00C'];
		this.downArrowKey = ['\ue015'];// arrow down
		this.enterKey = ['\ue007'];// enter
		this.clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		this.numTwo = ['\ue01C'];
		this.siteProfileType;this.siteElevation;this.siteAddress1;this.siteAddress2;this.siteZip;this.siteCity;this.siteState;this.siteLat;this.siteLong;
		this.siteAddedConfMsg='Added Site Location successfully';
		this.subLocationAddConfMsg = 'Site Sub-location was added successfully.';
		this.subLocationUpdatedConfMsg = 'Site Sub-location was updated successfully.';
		this.deleteSiteConfMsg = 'Deleted Infrastructure Location successfully';
		this.inventoryItemCreatedConfMsg = 'Added Inventory Item successfully';
		this.inventoryItemUpdatedConfMsg ='Successfully updated inventory item';
		this.inventoryItemDeletedConfMsg ='The inventory item has been deleted successfully.';
		this.addedEquipmentConfMsg = 'Added Equipment successfully';
		this.updatedEquipmentConfMsg = 'Updated Equipment successfully';
		this.deletedEquipmentConfMsg = 'The equipment item has been deleted successfully.';
		this.updatedEquipmentAssemblyMsg = 'Updated Equipment successfully';
		this.createdEquipmentAssemblyCopy = 'Copied Equipment Assembly successfully';
		this.poCreatedConfMsg = 'Created Purchase Order successfully.';
		this.poItemUpdateConfMsg='Updated Purchase Order items successfully.';
		this.poUpdateConfMsg='Updated Purchase Order status successfully';
		this.poArchiveConfMsg='Purchase order archived successfully';
		this.inventoryProfileAdded='Added new Inventory Profile successfully';
		this.inventoryProfileUpdated='Updated Inventory Profile successfully';
		this.inventoryProfileDeleted='Deleted Inventory Profile successfully.';
		this.subSiteName;this.subSiteElevation;this.subSiteNameUpdated;this.subSiteElevationUpdated;
		this.Inventoryprofile;this.profileLocation;this.inventoryNumber;this.note;this.Invdescription;this.InvSKU;
		this.equipmentprofile;this.customEquipment=false;this.customEquipmentProfile;this.equipmentName;this.equipmentToSearch;this.equipmentDescription;this.customProfile=false;this.customLocation;
		this.equipmentLocation;this.equipmentMacAddress;this.ethernetMAC;this.equipmentIpAddress;this.ethernetMAC;
		this.updatedEquipmentAssmeblyName;this.isPoEditable=false;this.PurchaseStatus;this.PoNote;this.PoInvoiceID;
	}
 // Method to navigate to the Infrastructure Location Table
 navigateToInfrastructureLocationTable() {
	browser.keys(this.Esckeys);
	irmSubsPage.infraLocationsParent.waitForDisplayed();
	irmSubsPage.infraLocationsParent.scrollIntoView();
	irmSubsPage.infraLocationsParent.waitForClickable();
 }

 

 // Method to click the '+' button to add a new Infrastructure Location
 clickPlusIconToAddInfrastructureLocation() {
	console.log('going to click add infra location button');
	browser.pause(3000);
	irmSubsPage.btnAddSite.waitForDisplayed();
	irmSubsPage.btnAddSite.scrollIntoView();
	irmSubsPage.btnAddSite.waitForClickable();
	irmSubsPage.btnAddSite.click();
	console.log('Infralocation add button clicked');
	browser.keys(this.Esckeys);
 }

 

 // Method to fill the Add Infrastructure Location form
 fillInfrastructureLocationForm() {
		//var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		this.siteName = 'AutoSite' + (Math.floor(new Date() / 1000));
		irmSubsPage.siteName.waitForDisplayed();
		irmSubsPage.siteName.waitForClickable();
		irmSubsPage.siteName.setValue(this.siteName);
		irmSubsPage.siteProfileTypeDropDown.click();
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1500);
		this.siteProfileType = irmSubsPage.siteProfileTypeInput.getAttribute('value');
		this.siteElevation = '120';
		irmSubsPage.elevationSite.setValue(this.siteElevation);
		this.siteAddress1 = 'New York';
		this.selectAddressFromSuggestions(this.siteAddress1);
		browser.pause(3000);
		this.siteAddress2 = 'Manhattan';
		irmSubsPage.siteAddress2.setValue(this.siteAddress2);
		irmSubsPage.zip.waitForExist();
		irmSubsPage.zip.click();
		irmSubsPage.zip.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.generateCoordinatesUsigAddress.waitForDisplayed();
		irmSubsPage.generateCoordinatesUsigAddress.waitForClickable();
		irmSubsPage.generateCoordinatesUsigAddress.click();
		browser.pause(1000);
		this.siteZip = '10002';
		irmSubsPage.zip.setValue(this.siteZip);
		browser.pause(1000);
		irmSubsPage.zipdropdownValue.waitForDisplayed();
		irmSubsPage.zipdropdownValue.click();
		browser.pause(1000);
		if(irmSubsPage.zipErrorMessage.isExisting())
		{
			irmSubsPage.zip.setValue(this.siteZip);
			browser.pause(1000);
			irmSubsPage.zipdropdownValue.click();
		}
 }
 selectAddressFromSuggestions()
 {
		var inputParent = irmSubsPage.siteParentByLableName('Address 1 *');
		irmSubsPage.inputByParent(inputParent).click();
		var allcharacters = this.siteAddress1.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(7000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
 }

 

 // Method to click the Save button after filling the form
 clickSaveButton() {
	irmSubsPage.btnSave.waitForDisplayed();
	irmSubsPage.btnSave.waitForClickable();
	irmSubsPage.btnSave.scrollIntoView();
	irmSubsPage.btnSave.click();
	console.log('Save button is clicked!');
 }
 closeDockedSite()
	{
		irmSubsPage.confirmationMsg.waitForDisplayed();
		expect(irmSubsPage.confirmationMsg.isExisting()).to.be.true;
		browser.pause(2000);
		irmSubsPage.btnSiteClose.waitForDisplayed();
		irmSubsPage.btnSiteClose.click();
	}
 clickOnISsearchbar()
	{
		if(irmSubsPage.btnCloseSiteSearch.isExisting()){irmSubsPage.btnCloseSiteSearch.click();}
		irmSubsPage.btnSiteSearch.waitForDisplayed();
		irmSubsPage.btnSiteSearch.waitForExist();
		irmSubsPage.btnSiteSearch.click();
		browser.pause(2000);
	}
typeInISsearhbar(siteTosearch)
	{
		siteTosearch = siteTosearch.replace(/['"]+/g, '');
		irmSubsPage.inputSiteSearch.setValue(siteTosearch);
		console.log('site to search is '+siteTosearch);
		this.siteName = siteTosearch;
	}
	 // Method to click on an existing Infrastructure Location
clickOnExistingInfrastructureLocation() {
		browser.pause(2000);
		this.clickOnISsearchbar();
		this.typeInISsearhbar(this.siteName);
		browser.pause(3000);
        irmSubsPage.firstRowData[0].waitForDisplayed();
		irmSubsPage.firstRowData[0].waitForClickable();
		irmSubsPage.firstRowData[0].click();
		console.log('I select 1st ISP Site Location');
		browser.pause(3000);
    }
	 // Method to click on the edit button
clickEditButton() {
        irmSubsPage.editSiteBtn.waitForDisplayed();
		irmSubsPage.editSiteBtn.waitForClickable();
		irmSubsPage.editSiteBtn.click();
    }
	// Method to click on 'Add Sub-Location'
    clickAddSubLocation() {
        irmSubsPage.addSubLocationBtn.waitForExist();
		irmSubsPage.addSubLocationBtn.click();
    }
	// Method to fill in all the fields in the Add Sub-Location form
    fillSubLocationForm() {
        this.subSiteName = 'SubAutoSite' + (Math.floor(new Date() / 1000));
		irmSubsPage.subLocation_name.waitForDisplayed();
		irmSubsPage.subLocation_name.waitForExist();
		irmSubsPage.subLocation_name.setValue(this.subSiteName);
		this.subSiteElevation = '110';
		irmSubsPage.subLocation_elevation.setValue(this.subSiteElevation);
    }
	closeSubSite()
	{
		browser.pause(4000);
		irmSubsPage.btnCloseSubSite.waitForDisplayed();
		irmSubsPage.btnCloseSubSite.click();
	}
    closeDialog() {
        irmSubsPage.btnClose.waitForDisplayed();
		irmSubsPage.btnClose.click();
    }
	browserRefresh()
	{
		browser.refresh();
		browser.pause(4000);
	}
	updateSubLocationField() {
		irmSubsPage.confirmationMsg.waitForDisplayed();
		browser.pause(4000);
		//var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		this.subSiteNameUpdated = 'SubUpdateSite' + (Math.floor(new Date() / 1000));
		irmSubsPage.subLocation_name.waitForDisplayed();
		irmSubsPage.subLocation_name.click();
		irmSubsPage.subLocation_name.keys(this.clearKeys);
		irmSubsPage.subLocation_name.setValue(this.subSiteNameUpdated);
		this.subSiteElevationUpdated = '120';
		irmSubsPage.subLocation_elevation.click();
		irmSubsPage.subLocation_elevation.keys(this.clearKeys);
		irmSubsPage.subLocation_elevation.setValue(this.subSiteElevationUpdated);
    }
	hoverOverInfrastructureLocation() {
        browser.pause(2000);
		this.clickOnISsearchbar();
		this.typeInISsearhbar(this.siteName);
		irmSubsPage.infraLocationsParent.click();
		browser.pause(3000);
		irmSubsPage.InfrastructureRowData[2].waitForDisplayed();
		//irmSubsPage.InfrastructureRowData[2].click();
		browser.pause(2000);
		irmSubsPage.InfrastructureRowData[2].moveTo();
		console.log('hover over 1st row');
    }
	clickThreeDotsMenuForIR() {
        irmSubsPage.btnSiteRecordMenu.waitForDisplayed();
        irmSubsPage.btnSiteRecordMenu.click();
    }
	clickDeleteButton() {
        irmSubsPage.btnDeleteItem.waitForDisplayed();
		irmSubsPage.btnDeleteItem.waitForClickable();
		irmSubsPage.btnDeleteItem.click();
    }
	clickYesOnDeleteConfirmation() {
        irmSubsPage.btnConDialogYes.waitForDisplayed();
		irmSubsPage.btnConDialogYes.waitForClickable();
		irmSubsPage.btnConDialogYes.click();
    }
	clickEditContactButton() {
        browser.pause(3000);
		irmSubsPage.editSiteContactsBtn.waitForDisplayed();
		irmSubsPage.editSiteContactsBtn.waitForClickable();
		irmSubsPage.editSiteContactsBtn.click();
		browser.pause(3000);
    }
	clickAddContactButton() {
        browser.pause(5000);
		irmSubsPage.btnAddContact.waitForDisplayed();
		irmSubsPage.btnAddContact.waitForClickable();
		irmSubsPage.btnAddContact.click();
		console.log('I navigate to Add Site Contact page');
		browser.pause(1000);
    }
	fillAllRequiredFields(contactDetails) {
        //var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		browser.pause(7000);
		irmSubsPage.company.waitForDisplayed();
		irmSubsPage.company.waitForExist();
		var details = contactDetails.raw();
		irmSubsPage.company.setValue(details[0][0]);
		this.contactCompany = details[0][0];
		irmSubsPage.fName.setValue(details[0][1]);
		this.contactFname = details[0][1];
		irmSubsPage.mName.setValue(details[0][2]);
		this.contactMname = details[0][2];
		irmSubsPage.lName.setValue(details[0][3]);
		this.contactLname = details[0][3];
		browser.pause(2000);
		console.log('I am enterning contact address');
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		this.contactAddress1 = details[0][4];
		console.log('I entered contact address');
		browser.pause(3000);
		let zipValue ='32165';
		if(irmSubsPage.contactCity.getAttribute('value')==='')
		{
			irmSubsPage.contactCity.setValue(details[0][4]);
			irmSubsPage.contactStateInput.click();
			browser.pause(500);
			irmSubsPage.contactStateInput.keys(this.clearKeys);
			browser.pause(500);
			irmSubsPage.contactStateInput.setValue(details[0][5]);
			browser.pause(500);
			browser.keys(this.downArrowKey);
			browser.keys(this.enterKey);
			browser.pause(1000);
			irmSubsPage.contactZip.click();
			irmSubsPage.contactZip.addValue(zipValue);
			browser.pause(1000);
		}
		if(irmSubsPage.contactZip.getAttribute('value')==='')
		{
			irmSubsPage.contactZip.click();
			let zipValue ='32165';
			irmSubsPage.contactZip.addValue(zipValue);
			browser.pause(1000);
		}
		irmSubsPage.email.setValue('contact123@visp.net');
		irmSubsPage.emailType.click();
		browser.pause(1000);
		irmSubsPage.primaryEmailType.click();
		irmSubsPage.contactNumber.setValue('(123) 222-1232');
		irmSubsPage.contactNumberType.click();
		browser.pause(1000);
		irmSubsPage.workPhoneType.click();
		browser.pause(3000);
    }
	clickOnSaveContact()
	{
		browser.pause(5000);
		irmSubsPage.btnSaveContact.waitForDisplayed();
		irmSubsPage.btnSaveContact.waitForExist();
		irmSubsPage.btnSaveContact.click();
		console.log('Save contact button is clicked!');
	}
	closeEditContact()
	{
		browser.pause(2000);
		irmSubsPage.confirmationMsg.waitForDisplayed();
		irmSubsPage.closeEditContactDock.click();
		browser.pause(3000);
	}
	updateContactFields(contactDetails)
	{
		//var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		browser.pause(7000);
		var details = contactDetails.raw();
		irmSubsPage.company.waitForDisplayed();
		irmSubsPage.company.waitForExist();
		irmSubsPage.company.click();
		irmSubsPage.company.keys(this.clearKeys);
		irmSubsPage.company.keys('\uE008');
		irmSubsPage.company.setValue(details[0][0]);
		this.contactCompany = details[0][0];
		irmSubsPage.fName.click();
		irmSubsPage.fName.keys(this.clearKeys);
		irmSubsPage.fName.keys('\uE008');
		irmSubsPage.fName.setValue(details[0][1]);
		this.contactFname = details[0][1];
		irmSubsPage.mName.click();
		irmSubsPage.mName.keys(this.clearKeys);
		irmSubsPage.mName.keys('\uE008');
		irmSubsPage.mName.setValue(details[0][2]);
		this.contactMname = details[0][2];
		irmSubsPage.lName.click();
		irmSubsPage.lName.keys(this.clearKeys);
		irmSubsPage.lName.keys('\uE008');
		irmSubsPage.lName.setValue(details[0][3]);
		this.contactLname = details[0][3];
		browser.pause(2000);
		irmSubsPage.updateContactsAddressParent.click();
		browser.pause(1000);
		irmSubsPage.inputByParent(irmSubsPage.updateContactsAddressParent).keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.inputByParent(irmSubsPage.updateContactsAddressParent).setValue(details[0][4]);
		browser.pause(7000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		this.contactAddress1 = irmSubsPage.inputByParent(irmSubsPage.updateContactsAddressParent).getValue();
		// irmSubsPage.contactStateInput.click();
		// browser.pause(500);
		// irmSubsPage.contactStateInput.keys(this.clearKeys);
		// browser.pause(500);
		// irmSubsPage.contactStateInput.setValue(details[0][5]);
		// browser.pause(500);
		// browser.keys(this.downArrowKey);
		// browser.keys(this.downArrowKey);
		// browser.keys(this.enterKey);
		browser.pause(2000);
		irmSubsPage.contactZip.click();
		irmSubsPage.contactZip.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.contactZip.setValue(details[0][6]);
		browser.pause(2000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		//irmSubsPage.contactZipdropdownValue(details[0][6]).click();
		this.contactZip = details[0][6];
		browser.pause(2000);
	}
	clickUpdateButton()
	{
		irmSubsPage.btcSaveContactDeatils.waitForDisplayed();
		irmSubsPage.btcSaveContactDeatils.click();
		browser.pause(2000);
	}
	hoverOnContactDetails()
	{
		browser.pause(2000);
		var x = irmSubsPage.contactHeader.getLocation('x');
		var y = irmSubsPage.contactHeader.getLocation('y');
		irmSubsPage.contactHeader.moveTo({ x, y});
		browser.pause(2000);
	}
	clickOnDeleteContactButton()
	{
		browser.pause(1000);
		irmSubsPage.deleteIcon.waitForClickable();
		irmSubsPage.deleteIcon.click();
	}
	navigateToInventoryProfileTable()
	{
		irmSubsPage.inventorySection.scrollIntoView();
		irmSubsPage.inventorySection.waitForDisplayed();
		irmSubsPage.inventorySection.scrollIntoView();
		irmSubsPage.btnInventoryTab.click();
		console.log('inventory tab clicked');
	}
	clickAddInventoryButton()
	{
		browser.pause(2000);
		irmSubsPage.btnAddInventory.waitForClickable();
		irmSubsPage.btnAddInventory.click();
		browser.keys(this.Esckeys);
        browser.pause(2000);
	}
	fillRequiredInventoryFields()
	{
		this.searchAddInventoryLocationProfile();
		this.searchAddInventoryProfile();
		this.fillAddInventoryData();
	}
	searchAddInventoryLocationProfile()
	{
		irmSubsPage.locationField.waitForDisplayed();
		irmSubsPage.locationField.click();
		browser.pause(2000);
		this.profileLocation ='Default Location';
		var allcharacters = this.profileLocation.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(1000);
		browser.keys(this.enterKey);
		browser.pause(2000);
		console.log('pressed keys');
	}
	searchAddInventoryProfile()
	{
		this.Inventoryprofile='Baicells CPE';
		irmSubsPage.inventoryprofile.click();
		browser.pause(1000);
		irmSubsPage.inventoryprofile.setValue(this.Inventoryprofile);
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.pause(500);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
	}
	fillAddInventoryData()
	{
		irmSubsPage.inventoryPurchasePrice.click();
		irmSubsPage.inventoryPurchasePrice.keys(this.clearKeys);
		irmSubsPage.inventoryPurchasePrice.setValue(1);
		console.log('purchaseprice done');
		irmSubsPage.InventoryNote.click();
		irmSubsPage.InventoryNote.setValue('InvenNote' + (Math.floor(new Date() / 1000)));
		this.inventoryNumber = 'AutoSerial' + (Math.floor(new Date() / 1000));
		irmSubsPage.inventoryItemSerial.setValue(this.inventoryNumber);
	}
	updateInventoryProfileFields()
	{
		irmSubsPage.locationField.click();
		irmSubsPage.locationField.keys(this.clearKeys);
		if(irmSubsPage.txtPopUpContent.isExisting())
		{
			irmSubsPage.btnConDialogYes.click();
			browser.pause(1000);
		}
		var loaction ='Default Location';
		var allcharacters = loaction.split("");
		for(var i=0; i<allcharacters.length; i++){
			let key = allcharacters[i];
			browser.keys(key);
			browser.pause(500);
			}
		browser.pause(2000);
		browser.keys(this.Esckeys);
		this.profileLocation = loaction;
		irmSubsPage.inputEquipment.click();
		irmSubsPage.inputEquipment.keys(this.clearKeys);
		irmSubsPage.inputEquipment.setValue('WR1100');
		browser.keys(this.Esckeys);
		irmSubsPage.changeReceiveDate.click();
		browser.pause(500);
		browser.keys(this.enterKey);
		irmSubsPage.inventoryPurchasePrice.click();
		browser.pause(500);
		irmSubsPage.inventoryPurchasePrice.keys(this.clearKeys);
		browser.pause(500);
		irmSubsPage.inventoryPurchasePrice.setValue('2');
		this.note = 'InNote' + (Math.floor(new Date() / 1000));
		irmSubsPage.InventoryNote.click();
		irmSubsPage.InventoryNote.keys(this.clearKeys);
		irmSubsPage.InventoryNote.setValue(this.note);
	}
	clickSaveToUpdateInventoryItem()
	{
		irmSubsPage.btnSaveSubItem.waitForDisplayed();
		irmSubsPage.btnSaveSubItem.waitForClickable();
		irmSubsPage.btnSaveSubItem.click();
	}
	closeSubItem()
	{
		irmSubsPage.confirmationMsg.waitForDisplayed();
		expect(irmSubsPage.confirmationMsg.isExisting()).to.be.true;
		browser.pause(2000);
		irmSubsPage.btnCloseSubItem.waitForDisplayed();
		irmSubsPage.btnCloseSubItem.click();
	}
	searchInventoryItem()
	{
		irmSubsPage.searchInventoryItem.waitForDisplayed();
		irmSubsPage.searchInventoryItem.waitForClickable();
		irmSubsPage.searchInventoryItem.click();
		irmSubsPage.searchInventoryItem.setValue(this.inventoryNumber);
	}
	hoverOverInventoryItem()
	{
		browser.pause(5000);
		irmSubsPage.dockedInventoryItem[0].waitForDisplayed();
		irmSubsPage.dockedInventoryItem[0].moveTo();
	}
	clickInventoryThreeDotsMenu()
	{
		irmSubsPage.btnInvItemRecordMenu.waitForDisplayed();
		irmSubsPage.btnInvItemRecordMenu.click();
	}
	navigateToEquipmentProfileTable() {
        irmSubsPage.btnEquipmentProfile.waitForDisplayed();
		irmSubsPage.btnEquipmentProfile.waitForClickable();
		irmSubsPage.btnEquipmentProfile.scrollIntoView();
        irmSubsPage.btnEquipmentProfile.click();
		irmSubsPage.btnEquipmentHeaderMenu.waitForDisplayed();
		irmSubsPage.btnEquipmentHeaderMenu.click();
		if(irmSubsPage.isTileViewSelected.getAttribute('class').includes('invisible'))
		{
			irmSubsPage.selectEquipmentTilesItem.waitForDisplayed();
			irmSubsPage.selectEquipmentTilesItem.waitForClickable();
		 	irmSubsPage.selectEquipmentTilesItem.click();
		}
		else{browser.keys('\ue00c');}
		browser.pause(5000);
		irmSubsPage.firstEquipmentProfile.waitForDisplayed();
		irmSubsPage.firstEquipmentProfile.waitForClickable();
		this.equipmentprofile = irmSubsPage.firstEquipmentProfile.getText();
    }
	clickAddEquipmentButton() {
        irmSubsPage.btnAddEquipment.waitForDisplayed();
		irmSubsPage.btnAddEquipment.waitForClickable();
		irmSubsPage.btnAddEquipment.click();
		console.log('I click on ADD NEW Equipment button');
		browser.keys(this.Esckeys);
		browser.pause(2000);
    }
	selectEquipmentProfileType() {
        if(this.customEquipment===true){
			irmSubsPage.equipmentprofileInput.click();
			browser.pause(500);
			irmSubsPage.equipmentprofileInput.setValue(this.customEquipmentProfile);
			browser.pause(1000);
			browser.keys(this.downArrowKey);
			browser.keys(this.downArrowKey);
			browser.keys(this.enterKey);
			console.log('custom profile set');
		}
		else{
			irmSubsPage.equipmentprofile.click();
			browser.pause(1500);
			browser.keys(this.downArrowKey);
			browser.keys(this.enterKey);
			browser.pause(1000);
		}
		this.equipmentProfile = irmSubsPage.equipmentprofileInput.getValue();
    }
	fillRequiredFieldsForEquipment() {
        this.equipmentName = 'AutoEquipment' + (Math.floor(new Date() / 1000));
		this.equipmentToSearch = this.equipmentName;
		this.equipmentDescription = this.equipmentName;
		irmSubsPage.profileDescription.waitForDisplayed();
		irmSubsPage.profileDescription.setValue(this.equipmentDescription);
		irmSubsPage.profilelocation.waitForClickable();
		irmSubsPage.profilelocation.click();
		if(this.customProfile===true)
		{
			irmSubsPage.profilelocationInput.setValue(this.customLocation);
			console.log('custom location set');
		}
		browser.pause(1000);
		browser.keys(this.downArrowKey);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		if(irmSubsPage.profilelocationInput.getValue()==="")
			{
				irmSubsPage.profilelocation.click();
				browser.pause(1000);
				browser.keys(this.downArrowKey);
				browser.keys(this.downArrowKey);
				browser.keys(this.enterKey);
				browser.pause(1000);
			}
			this.equipmentProfile = irmSubsPage.equipmentprofileInput.getValue();
			console.log('equipment profile is '+this.equipmentProfile);
			this.equipmentMacAddress = this.genUniqueMAC();
			irmSubsPage.macAddressEquipment.setValue(this.equipmentMacAddress);
			this.ethernetMAC = this.genUniqueMAC();
			irmSubsPage.ethernetMacEquipment.setValue(this.ethernetMAC);
			irmSubsPage.ethernetMacEquipment.scrollIntoView();
			this.equipmentIpAddress = this.genUniqueIPAddress();
			irmSubsPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
			browser.pause(2000);
			if(irmSubsPage.isErrorMsgExist){
				console.log('error msgs exists');
				var allmsgs = irmSubsPage.allErrorMsgs;
				for(var i=0; i<allmsgs.length; i++){
				if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
					{
						this.equipmentIpAddress = this.genUniqueIPAddress();
						irmSubsPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
					}
				if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('MAC address is already assigned to'))
					{
						this.ethernetMAC = this.genUniqueMAC();
						irmSubsPage.ethernetMacEquipment.setValue(this.ethernetMAC);
					}	
				}
			}
			if(this.customProfile==false){
			this.equipmentLocation = irmSubsPage.profilelocationInput.getAttribute('value');
			irmSubsPage.inventoryFromEquipment.scrollIntoView();
			this.inventoryProfile =irmSubsPage.inventoryFromEquipment.getAttribute('value');}
			console.log('equipment profile is'+this.equipmentProfile);
			console.log('original radio mac adressess'+this.equipmentMacAddress);
			console.log('original ethernet mac adressess'+this.ethernetMAC);
			browser.pause(2000);
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
	clickOnEquipmentSearch()
	{
		browser.pause(2000);
		irmSubsPage.btnequipmentSearch.waitForDisplayed();
		irmSubsPage.btnequipmentSearch.scrollIntoView();
		irmSubsPage.btnequipmentSearch.click();
		irmSubsPage.equipmentSearch.click();
	}

	typeInEquipmentSearch(dataToSearch)
	{
		dataToSearch = dataToSearch.replace(/['"]+/g, '');
		this.equipmentProfile = dataToSearch;
		browser.pause(2000);
		irmSubsPage.equipmentSearch.setValue(dataToSearch);
		browser.pause(2000);
		console.log('searched equipment is '+dataToSearch);
	}
	updateEquipmentFields(equipprofile)
	{
		var details = equipprofile.raw();
		irmSubsPage.equipmentprofileInput.waitForClickable();
		irmSubsPage.equipmentprofileInput.click();
		browser.pause(1000);
		irmSubsPage.equipmentprofileInput.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.equipmentprofileInput.setValue(details[0][0]);
		browser.pause(2000);
		browser.keys(this.downArrowKey);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		browser.pause(1000);
		this.equipmentIpAddress = this.genUniqueIPAddress();
		browser.pause(2000);
		irmSubsPage.ipAddressEquipment.setValue(this.equipmentIpAddress);
		browser.pause(2000);
		this.ethernetMAC = this.genUniqueMAC();
		irmSubsPage.ethernetMacEquipment.click();
		irmSubsPage.ethernetMacEquipment.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.ethernetMacEquipment.setValue(this.ethernetMAC);
		browser.pause(2000);
		if(irmSubsPage.isErrorMsgExist){
			var allmsgs = irmSubsPage.allErrorMsgs;
			for(var i=0; i<allmsgs.length; i++){
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
				{
					this.equipmentIpAddress = this.genUniqueIPAddress();
					irmSubsPage.equipmentUpdateIpAddressZero.setValue(this.equipmentIpAddress);}}
		}
		
		this.equipmentProfile = details[0][0];
	}
	mouseOverOnEquipment()
	{
		irmSubsPage.btnCloseSubItem.waitForDisplayed();
		irmSubsPage.btnCloseSubItem.click();
		browser.pause(1000);
		irmSubsPage.dockedSearhField.waitForDisplayed();
		irmSubsPage.dockedSearhField.click();
		irmSubsPage.dockedSearhField.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.dockedSearhField.setValue(this.equipmentName);
		browser.pause(5000);
		console.log('going to delete');
		var allcelldata = irmSubsPage.dockedEquipmentItem;
		console.log('total length is :' + allcelldata.length);
		allcelldata[0].moveTo();
		browser.pause(1000);
		irmSubsPage.btnDotEquiment.moveTo();

	}
	clickThreeDotsOfEquipment()
	{
		browser.pause(2000);
		irmSubsPage.btnDotEquiment.click();
	}
	navigateToEquipmentAssembliesTable()
	{
		browser.pause(3000);
		irmSubsPage.btnEquipmentAssembly.waitForDisplayed();
		irmSubsPage.btnEquipmentAssembly.waitForExist();
		irmSubsPage.btnEquipmentAssembly.scrollIntoView();
		irmSubsPage.btnEquipmentAssembly.click();
		browser.pause(2000);
		//check if any equipment assmebly exist else create one
		if(irmSubsPage.equipmenAssemblyNoSearchResult.isExisting()==true)
		{
			this.clickAddEquipmentButton();
			this.selectEquipmentProfileType();
			this.fillRequiredFieldsForEquipment();
			this.clickSaveButton();
			browser.pause(2000);
			irmSubsPage.btnAddChild.waitForDisplayed();
			irmSubsPage.btnAddChild.click();
			irmSubsPage.btnFromUnassigned.waitForDisplayed();
			irmSubsPage.btnFromUnassigned.waitForExist();
			irmSubsPage.btnFromUnassigned.click();
			browser.pause(2000);
			irmSubsPage.equipmentprofile.waitForDisplayed();
			irmSubsPage.equipmentprofile.waitForExist();
			irmSubsPage.equipmentprofile.click();
			browser.pause(1000);
			let equipprofile = 'ACR (Router)';
			irmSubsPage.selectProvidedEquipmentProfile(equipprofile).click();
			irmSubsPage.expandEquipmentDropdown.click();
			browser.pause(2000);
			let equip = 'Default Location - Edge Routers';
			irmSubsPage.selectProvidedEquipment(equip).click();
			irmSubsPage.editEquipmentHeader.click();
			this.clickSaveButton();
			browser.pause(3000);
			irmSubsPage.btnCloseSubItem.click();
			//irmSubsPage.btnCloseOfDock('Edit Equipment').click();
		}
		browser.pause(3000);
	}
	changeEquipmentAssemblyView(equipmentView)
	{
		browser.pause(5000);
		irmSubsPage.btnEquipmentHeaderMenu.waitForDisplayed();
        irmSubsPage.btnEquipmentHeaderMenu.click();
		equipmentView = equipmentView.replace(/['"]+/g, '');
		switch(equipmentView){
			case "List":
				browser.pause(1000);
				irmSubsPage.selectEquipmentListItem.waitForDisplayed();
				irmSubsPage.selectEquipmentListItem.waitForClickable();
				irmSubsPage.selectEquipmentListItem.click();
				browser.pause(3000);
				break;
			case "Tiles":
				browser.pause(1000);
				irmSubsPage.selectEquipmentListItem.waitForDisplayed();
				irmSubsPage.selectEquipmentListItem.waitForClickable();
				irmSubsPage.selectEquipmentListItem.click();
				browser.pause(2000);
				irmSubsPage.btnEquipmentHeaderMenu.waitForDisplayed();
        		irmSubsPage.btnEquipmentHeaderMenu.click();
				browser.pause(2000);
				irmSubsPage.selectEquipmentTilesItem.waitForDisplayed();
				irmSubsPage.selectEquipmentTilesItem.waitForClickable();
				irmSubsPage.selectEquipmentTilesItem.click();
				browser.pause(3000);
				break;
		}
		console.log('I set equipment assembly view to '+ equipmentView);
	}
	clickEditAssemblyButton()
	{
		browser.pause(4000);
		irmSubsPage.btnEditAssembly.waitForDisplayed();
		irmSubsPage.btnEditAssembly.waitForClickable();	
		irmSubsPage.btnEditAssembly.click();
		browser.pause(4000);
	}
	updateRequiredFieldofEA()
	{
		if(irmSubsPage.isErrorMsgExist)
		{
			irmSubsPage.btnClose.waitForDisplayed();
			irmSubsPage.btnClose.click();
			this.clickEditAssemblyButton();
		}
		this.updatedEquipmentAssmeblyName =  'AutoEA' + (Math.floor(new Date() / 1000));
		irmSubsPage.profileDescription.waitForDisplayed();
		irmSubsPage.profileDescription.click();
		irmSubsPage.profileDescription.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.profileDescription.setValue(this.updatedEquipmentAssmeblyName);
		irmSubsPage.Assemblylocation.waitForDisplayed();
		irmSubsPage.Assemblylocation.click();
		browser.pause(3000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
	}
	saveDetailsOfAssembly()
	{
		irmSubsPage.btnSaveContact.scrollIntoView();
		irmSubsPage.btnSaveContact.waitForDisplayed();
		irmSubsPage.btnSaveContact.click();
	}
	clickCopyAssemblyButton()
	{
		irmSubsPage.btnCopyAssembly.waitForDisplayed();
		irmSubsPage.btnCopyAssembly.waitForClickable();	
		browser.pause(3000);
		irmSubsPage.btnCopyAssembly.click();
		browser.pause(3000);
	}
	updateFieldsOfCopyAssembly()
	{
		browser.pause(7000);
		this.equipmentProfile = 'CopyAssembly' + (Math.floor(new Date() / 1000));
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		irmSubsPage.profileDescription.click();
		irmSubsPage.profileDescription.keys(clearKeys);
		irmSubsPage.profileDescription.setValue(this.equipmentProfile);
		irmSubsPage.Assemblylocation.waitForDisplayed();
		irmSubsPage.Assemblylocation.click();
		browser.pause(3000);
		browser.keys(this.downArrowKey);
		browser.keys(this.enterKey);
		this.equipmentMacAddress = this.genUniqueMAC();
		irmSubsPage.updateMacAddressWhileCopy.scrollIntoView();
		irmSubsPage.updateMacAddressWhileCopy.click();
		irmSubsPage.updateMacAddressWhileCopy.keys(clearKeys);
		browser.pause(2000);
		irmSubsPage.updateMacAddressWhileCopy.setValue(this.equipmentMacAddress);
		this.ethernetMACaddress = this.genUniqueMAC();
		irmSubsPage.updateEthernetMACaddressWhileCopy.scrollIntoView();
		irmSubsPage.updateEthernetMACaddressWhileCopy.click();
		irmSubsPage.updateEthernetMACaddressWhileCopy.keys(clearKeys);
		browser.pause(2000);
		irmSubsPage.updateEthernetMACaddressWhileCopy.setValue(this.ethernetMACaddress);
		this.equipmentIpAddress = this.genUniqueIPAddress();
		irmSubsPage.updateIpAddressEquipment.click();
		irmSubsPage.updateIpAddressEquipment.scrollIntoView();
		irmSubsPage.updateIpAddressEquipment.keys(clearKeys);
		browser.pause(2000);
		irmSubsPage.updateIpAddressEquipment.setValue(this.equipmentIpAddress);
		

		if(irmSubsPage.isErrorMsgExist){
			var allmsgs = irmSubsPage.allErrorMsgs;
			for(var i=0; i<allmsgs.length; i++){
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('This IP address is already assigned to'))
				{
					this.equipmentIpAddress = this.genUniqueIPAddress();
					irmSubsPage.updateIpAddressEquipment.setValue(this.equipmentIpAddress);
				}
			if (allmsgs[i].getText() !='' && allmsgs[i].getText().includes('MAC address is already assigned to'))
				{
					this.ethernetMAC = this.genUniqueMAC();
					irmSubsPage.updateMacAddressWhileCopy.setValue(this.ethernetMAC);
					this.ethernetMAC = this.genUniqueMAC();
					irmSubsPage.updateEthernetMACaddressWhileCopy.setValue(this.ethernetMAC);
				}	
			}
		}
		browser.pause(3000);
		irmSubsPage.btnEquipmentAssembly.click();
		browser.pause(4000);
	}
	navigateToPurchaseOrderTable()
	{
		irmSubsPage.puchaseOrderSection.scrollIntoView();
		irmSubsPage.puchaseOrderSection.waitForDisplayed();
	}
	clickAddPurchaseOrderButton()
	{
		browser.keys(['\uE00C']);
		irmSubsPage.btnCreatePurchaseOrder.waitForDisplayed();
		irmSubsPage.btnCreatePurchaseOrder.click();
		browser.keys(this.Esckeys);
		browser.pause(7000);
	}
	selectProfileItemFromDropdown()
	{
		browser.pause(4000);
		irmSubsPage.dockedProfileItem.waitForDisplayed();
		irmSubsPage.dockedProfileItem.waitForClickable();
		irmSubsPage.dockedProfileItem.click();
		console.log('Purchase order profile get selected');
	}
	selectVendorForPurchaseOrder()
	{
		browser.pause(2000);
		console.log('going to open vendor list for purchase order');
		//irmSubsPage.dockedVendorInput.waitForClickable();
		irmSubsPage.dockedVendorInput.click();
	}
	fillQuantityForPurchaseOrder(valuToPass)
	{
		irmSubsPage.dockedquantity.click();
		irmSubsPage.dockedquantity.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.dockedquantity.setValue(valuToPass);
	}
	clickContinueButtonForPurchaseOrder()
	{
		irmSubsPage.btnContinue.waitForClickable();
		irmSubsPage.btnContinue.click();
	}
	clickCreatePurchaseOrderButton()
	{
		browser.pause(2000);
		irmSubsPage.btnCreatePO.waitForClickable();
		irmSubsPage.btnCreatePO.click();
	}
	openFirstPO()
	{
		browser.pause(6000);
		var firstRowDetail = irmSubsPage.purchaseOrderfirstRowData;
		firstRowDetail[0].click();
	}
	openNewlyCreatedPO()
	{
		irmSubsPage.btnOpenNewlyPO.waitForDisplayed();
		irmSubsPage.btnOpenNewlyPO.waitForClickable();
		irmSubsPage.btnOpenNewlyPO.click();
		browser.pause(2000);
	}
	inputItemUP(index)
	{
		browser.pause(4000);
		irmSubsPage.allHyperLinks[index].waitForDisplayed();
		irmSubsPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
		this.isPoEditable = true;
	}
	inputItemTR(index)
	{
		browser.pause(1000);
		irmSubsPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
		this.isPoEditable = true;
	}
	inputItemShipping(index)
	{
		browser.pause(1000);
		irmSubsPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
		this.isPoEditable = true;
	}
	inputItemOther(index)
	{
		browser.pause(1000);
		irmSubsPage.allHyperLinks[index].click();
		browser.keys(this.clearKeys);
		browser.keys(this.numTwo);
		irmSubsPage.allHyperLinks[0].click();
		this.isPoEditable = true;
	}
	clickOnBtnSaveChanges()
	{
		irmSubsPage.btnSaveChanges.waitForDisplayed();
		irmSubsPage.btnSaveChanges.waitForClickable();
		irmSubsPage.btnSaveChanges.click();
	}
	clickOnStatus()
	{
		browser.pause(3000);
		irmSubsPage.btnOrderStatus.waitForDisplayed();
		irmSubsPage.btnOrderStatus.click();
	}
	updatedPOStatus(poStatus)
	{
		browser.pause(2000);
		poStatus = poStatus.replace(/['"]+/g, '');
		this.PurchaseStatus =poStatus;
		console.log('param value is '+poStatus);
		switch(poStatus){
			case 'PENDING':
				irmSubsPage.changePoStatus('PENDING').click();
				break;
			case 'ORDERED':
				irmSubsPage.changePoStatus('ORDERED').click();
				break;
			case 'COMPLETE':
				irmSubsPage.changePoStatus('COMPLETE').click();
				break;
		}
	}
	hoverOverCompletedOrCanceledPO()
	{
		this.closeDialog();
		this.browserRefresh();
		browser.pause(5000);
		irmSubsPage.puchaseOrderSection.waitForDisplayed();
		irmSubsPage.puchaseOrderSection.scrollIntoView();
		browser.pause(2000);
		var firstRowDetail = irmSubsPage.purchaseOrderfirstRowData;
		firstRowDetail[1].moveTo();
		
	}
	clickThreeDotsMenu()
	{
		browser.pause(1500);
		irmSubsPage.dottedMenu.click();
	}
	clickArchivedOption()
	{
		irmSubsPage.changePoStatus('Archive').waitForClickable();
		irmSubsPage.changePoStatus('Archive').click();
		browser.pause(1500);
	}
	fillNotefieldOfPO()
	{
		this.PoNote = 'AutoNote' + (Math.floor(new Date() / 1000));
		irmSubsPage.inputNotice.waitForDisplayed();
		irmSubsPage.inputNotice.click();
		irmSubsPage.inputNotice.keys(this.clearKeys);
		irmSubsPage.inputNotice.setValue(this.PoNote);
	}
	fillInvoiceIDfieldOfPO()
	{
		this.PoInvoiceID = 'AutoID' + (Math.floor(100 + Math.random() * 900));
		irmSubsPage.inputID.waitForDisplayed();
		irmSubsPage.inputID.click();
		irmSubsPage.inputID.keys(this.clearKeys);
		irmSubsPage.inputID.setValue(this.PoInvoiceID);
	}
	openSettings() {
        irmSubsPage.btnAppIcon.waitForDisplayed();
        irmSubsPage.btnAppIcon.click();
        irmSubsPage.btnEquipmentFromSetting.waitForDisplayed();
        irmSubsPage.btnEquipmentFromSetting.click();
    }
	navigateToInventoryProfileSetting()
	{
		irmSubsPage.liInventoryProfiles.waitForDisplayed();
        irmSubsPage.liInventoryProfiles.click();
	}
	clickPlusInventoryProfileButton()
	{
		irmSubsPage.btnInventoryProfiles.waitForDisplayed();
        irmSubsPage.btnInventoryProfiles.click();
	}
	fillInInventoryFields()
	{
		browser.pause(5000);
		this.inventoryprofile = 'InvtPro' + (Math.floor(100 + Math.random() * 900));
		this.Invdescription = 'InvDes' + (Math.floor(100 + Math.random() * 900));
		this.InvSKU = 'InvSKU' + (Math.floor(100 + Math.random() * 900));
        irmSubsPage.inputModel.waitForDisplayed();
        irmSubsPage.inputModel.setValue(this.inventoryprofile);
        irmSubsPage.divManufacturer.click();
		browser.pause(3000);
		irmSubsPage.autoComplete.waitForDisplayed();
		browser.pause(1500);
        browser.keys(this.downArrowKey);
        browser.keys(this.downArrowKey);
        browser.keys(this.enterKey);
        irmSubsPage.inputSku.setValue(this.InvSKU);
        irmSubsPage.inputDescription.setValue(this.Invdescription);
	}
	clickAddInventoryProfileButton()
	{
		irmSubsPage.btnAdd.waitForDisplayed();
        irmSubsPage.btnAdd.click();
	}
	updateAnyFieldOfTheInventory()
	{
		this.Invdescription = 'InvDes' + (Math.floor(100 + Math.random() * 900));
		this.InvSKU = 'InvSKU' + (Math.floor(100 + Math.random() * 900));
		irmSubsPage.inputSku.click();
		irmSubsPage.inputSku.keys(this.clearKeys);
		browser.pause(1000);
		irmSubsPage.inputSku.setValue(this.InvSKU);
		irmSubsPage.inputDescription.click();
		irmSubsPage.inputDescription.keys(this.clearKeys);
		browser.pause(1000);
        irmSubsPage.inputDescription.setValue(this.Invdescription);
	}
	clickUpdateInventoryProfileButton()
	{
		irmSubsPage.btnUpdate.waitForDisplayed();
        irmSubsPage.btnUpdate.click();
	}
	clickDeleteInventoryProfileButton()
	{
		irmSubsPage.btnDeleteProfile.waitForDisplayed();
        irmSubsPage.btnDeleteProfile.click();
	}








 // Method to verify if Infrastructure Location Table is displayed
 verifyInfrastructureLocationTableIsDisplayed() {
	irmSubsPage.infraLocationsParent.waitForDisplayed();
	expect(irmSubsPage.infraLocationsParent.isExisting()).to.be.true;
	console.log('Infrastructure Location Table is displayed');
 }

 // Method to verify if the Add Infrastructure Location form is displayed
 verifyAddInfrastructureLocationFormIsDisplayed() {
	irmSubsPage.siteName.waitForDisplayed();
	expect(irmSubsPage.siteName.isExisting()).to.be.true;
 }

// Method to verify that all fields are filled in correctly
verifyAllFieldsAreFilled() {
	this.siteCity = irmSubsPage.city.getAttribute('value');
	this.siteState =irmSubsPage.addSiteStateElement.getAttribute('value');
	this.siteLat = irmSubsPage.lattidue.getAttribute('value');
	this.siteLong =irmSubsPage.longitude.getAttribute('value');
}

 // Method to verify the newly added location is displayed in real time
 verifyInfrastructureLocationIsAdded() {
	var msg;
		irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteAddedConfMsg);
		// browser.pause(3000);
		// irmSubsPage.siteHeader.waitForExist();
		// expect(irmSubsPage.siteHeader.getText()).to.eql(this.siteName);
		// irmSubsPage.btnClose.click();
		// browser.pause(2000);
		// this.clickOnISsearchbar();
		// this.typeInISsearhbar(this.siteName);
		// browser.pause(5000);
		// //irmSubsPage.firstRowData[0].waitForDisplayed();
		// var firstRowDetail = irmSubsPage.firstRowData;
		// expect(firstRowDetail[0].getText()).to.eql(this.siteName);
		// expect(firstRowDetail[1].getText()).to.eql(this.siteAddress1);
		// expect(firstRowDetail[2].getText()).to.eql(this.siteAddress2);
		// expect(firstRowDetail[3].getText()).to.eql(this.siteCity);
		// expect(this.siteState.includes(firstRowDetail[4].getText())).to.be.true;
		// expect(firstRowDetail[5].getText()).to.eql(this.siteZip);
		// expect(firstRowDetail[6].getText()).to.eql(this.siteProfileType);
		console.log('Added Site Location successfully');
 }
 // Method to verify that the Infrastructure Location details are displayed
 verifyInfrastructureLocationDetailsDisplayed() {
	irmSubsPage.editSiteBtn.waitForDisplayed();
	expect(irmSubsPage.editSiteBtn.isExisting()).to.be.true;
}
// Method to verify the Edit Infrastructure Location drawer is displayed
verifyEditInfrastructureLocationDrawerDisplayed() {
	irmSubsPage.siteName.waitForDisplayed();
	expect(irmSubsPage.siteName.isExisting()).to.be.true;
}
 // Method to verify the Add Sub-Location form is displayed
 verifyAddSubLocationFormDisplayed() {
	irmSubsPage.subLocation_name.waitForDisplayed();
	expect(irmSubsPage.subLocation_name.isExisting()).to.be.true;
}
 // Method to verify all required fields are filled
 verifySubLocationAllFieldsAreFilled() {
	this.subSiteName = irmSubsPage.subLocation_name.getValue();
	this.subSiteElevation = irmSubsPage.subLocation_elevation.getValue();
}
// Method to verify the Sub-Location is added and visible in real-time
verifySubLocationAddedRealTime() {
		var msg;
		irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.subLocationAddConfMsg);
		browser.pause(2000);
		irmSubsPage.btnCloseSubSite.click();
		console.log('sub-site name is :'+ this.subSiteName);
		browser.pause(2000);
		expect(irmSubsPage.subSiteHeader(this.subSiteName).isExisting()).to.be.true;
		console.log('Site Sub-Location Added successfully!');
}
verifySubLocationDetailsDisplayed() {
	irmSubsPage.subLocation_name.waitForDisplayed();
	expect(irmSubsPage.subLocation_name.isExisting()).to.be.true;
}
verifyFieldsUpdated() {
	browser.pause(2000);
	this.subSiteNameUpdated = irmSubsPage.subLocation_name.getValue();
	this.subSiteElevationUpdated = irmSubsPage.subLocation_elevation.getValue();
}
verifyChangesSavedAndDisplayedRealTime() {
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.subLocationUpdatedConfMsg);
	expect(this.subSiteName).to.not.eql(this.subSiteNameUpdated);
	expect(this.subSiteElevation).to.not.eql(this.subSiteElevationUpdated);
}
verifyThreeDotsMenuDisplayedForIR() {
	browser.pause(1000);
	console.log('going to verify dotted menu of IR');
	browser.pause(1000);
	expect(irmSubsPage.btnSiteRecordMenu.isExisting()).to.be.true;
	console.log('verified ');
}
verifyThreeDotsMenuDisplayedForInventory() {
	irmSubsPage.btn3DotMenu.waitForDisplayed();
	expect(irmSubsPage.btn3DotMenu.isExisting()).to.be.true;
}
verifyDeleteOptionDisplayed() {
	irmSubsPage.btnDeleteItem.waitForDisplayed();
	expect(irmSubsPage.btnDeleteItem.isExisting()).to.be.true;
}
verifyDeleteConfirmationPromptDisplayed() {
	irmSubsPage.btnConDialogYes.waitForDisplayed();
	expect(irmSubsPage.btnConDialogYes.isExisting()).to.be.true;
}
verifyInfrastructureLocationDeleted() {
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.deleteSiteConfMsg);
		browser.pause(2000);
		irmSubsPage.noDataAvailable.waitForDisplayed();
		expect(irmSubsPage.noDataAvailable.isExisting()).to.be.true;
}
verifyEditContactDrawerDisplayed()
{
	irmSubsPage.btnAddContact.waitForDisplayed();
	expect(irmSubsPage.btnAddContact.isExisting()).to.be.true;
}
verifyAddContactFormDisplayed() {
	irmSubsPage.fName.waitForDisplayed();
	expect(irmSubsPage.fName.isExisting()).to.be.true;
}
verifyFieldsFilled() {
	browser.pause(2000);
	this.contactCompany=irmSubsPage.company.getValue();
	this.contactFname=irmSubsPage.fName.getValue();
	this.contactLname=irmSubsPage.lName.getValue();
}
verifyContactAddedAndDisplayedInRealTime() {
		browser.pause(3000);
		irmSubsPage.closeEditContactDock.click();
		browser.pause(2000);
		irmSubsPage.btnClose.waitForDisplayed();
		irmSubsPage.btnClose.click();
		this.clickOnExistingInfrastructureLocation();
		let contactName = this.contactFname +' '+this.contactLname;
		var updatedContactDetails = irmSubsPage.siteDockItemByName(contactName);
		expect(updatedContactDetails.getText().includes(contactName)).to.be.true;
}
verifyUpdatedDetailsDisplayedInRealTime()
{
	browser.pause(5000);
		console.log('going to verify updated contact details');
		irmSubsPage.closeEditContactDock.click();
		browser.pause(2000);
		irmSubsPage.btnClose.waitForDisplayed();
		irmSubsPage.btnClose.click();
		this.clickOnExistingInfrastructureLocation();
		let contactName = this.contactFname +' '+this.contactLname;
		var updatedContactDetails = irmSubsPage.siteDockItemByName(contactName);
		console.log('fully extracted name'+updatedContactDetails.getText());
		console.log('actual name is'+contactName);
		expect(updatedContactDetails.getText().includes(contactName)).to.be.true;
		console.log('name verified');
		console.log('actual company is'+this.contactCompany);
		expect(updatedContactDetails.getText().includes(this.contactCompany)).to.be.true;
		console.log('company verified');
}
verifyDeleteContactButtonDisplayed()
{
	expect(irmSubsPage.deleteIcon.isExisting()).be.true;
}
verifyDeleteContacConfirmationDialog()
{
	irmSubsPage.btnConDialogYes.waitForDisplayed();
	expect(irmSubsPage.btnConDialogYes.isExisting()).to.be.true;
}
verifyCotactGetDeletedInRealTime()
{
	irmSubsPage.confirmationMsg.waitForDisplayed();
	expect(irmSubsPage.confirmationMsg.getText()).to.eql ("Deleted Successfully");
	browser.pause(1000);
	expect(irmSubsPage.NoContactText.isExisting()).be.true;
}
verifyUpdatedInventoryProfileList()
{
	if(irmSubsPage.inventoryMeatBall.isExisting()==false)
		{
			irmSubsPage.inventoryHeaderbuttons[2].waitForDisplayed();
			irmSubsPage.inventoryHeaderbuttons[2].scrollIntoView();
			irmSubsPage.inventoryHeaderbuttons[2].click();
        	browser.pause(1000);
			irmSubsPage.inventoryTableView.waitForDisplayed();
			irmSubsPage.inventoryTableView.waitForClickable();
			irmSubsPage.inventoryTableView.click();
			browser.pause(2000);
		}
}
verifyAddInventoryDrawerDisplayed()
{
	irmSubsPage.inventoryprofile.waitForDisplayed();
	expect(irmSubsPage.inventoryprofile.isExisting()).to.be.true;
	
}
verifyInventoryFieldsFilled()
{
	this.Inventoryprofile=irmSubsPage.inventoryprofile.getValue();
	this.profileLocation=irmSubsPage.locationField.getValue();
	this.inventoryNumber=irmSubsPage.inventoryItemSerial.getValue();
}
verifyInventoryItemAddedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.inventoryItemCreatedConfMsg);
	browser.pause(4000);
	expect(irmSubsPage.inventoryItemSerialAfterCreate.getValue()).to.eql(this.inventoryNumber.toUpperCase());
}
verifyEditInventoryItemDrawerDisplayed()
{
	expect(irmSubsPage.locationField.isExisting()).to.be.true;
}
verifyInventoryFieldsUpdated()
{
	this.note = irmSubsPage.InventoryNote.getValue();
}
verifyChangesSavedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.inventoryItemUpdatedConfMsg);
	browser.pause(3000);
	expect(irmSubsPage.InventoryNote.getValue()).to.be.eql(this.note);
	expect(irmSubsPage.InventoryNote.getValue()).to.be.eql(this.note);
}

verifyDeleteInventoryConfirmationDialog()
{
	irmSubsPage.btnConDialogYes.waitForDisplayed();
	expect(irmSubsPage.btnConDialogYes.isExisting()).to.be.true;
}
verifyInventoryItemDeletedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.inventoryItemDeletedConfMsg);
}
verifyUpdatedEquipmentListDisplayed() {
	expect(irmSubsPage.btnEquipmentProfile.isExisting()).to.be.true;
}
verifyAddEquipmentDrawerOpened() {
	expect(irmSubsPage.addEquipmentDialogHeader.isExisting()).to.be.true;
	expect(irmSubsPage.profileDescription.isExisting()).to.be.true;
}
verifyEquipmentProfileSelection() {
	//this.equipmentProfile = irmSubsPage.equipmentprofileInput.getValue();
	expect(this.equipmentProfile.length).to.be.not.eql(0);
}
verifyFieldsFilledForEquipment() {
	browser.pause(2000);
	expect(this.equipmentLocation.length).to.be.not.eql(0);
	console.log('equipmentLocation verified');
	expect(this.equipmentMacAddress).to.be.not.eql(null);
	console.log('equipmentMacAddress verified');
	expect(this.ethernetMAC).to.be.not.eql(null);
	console.log('ethernetMAC verified');
	expect(this.equipmentDescription.length).to.be.not.eql(0);
	console.log('equipmentDescription verified');
}
verifyEquipmentAddedInRealTime() {
	var msg;
		irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.addedEquipmentConfMsg);
		browser.pause(5000);
		irmSubsPage.btnClose.waitForClickable();
		irmSubsPage.btnClose.click();
		browser.pause(3000);
		irmSubsPage.btnEquipmentProfile.scrollIntoView();
		irmSubsPage.btnEquipmentProfile.moveTo();
		this.clickOnEquipmentSearch();
		this.typeInEquipmentSearch(this.equipmentprofile);
		browser.pause(2000);
		irmSubsPage.firstEquipmentCard(this.equipmentprofile).click();
		browser.pause(5000);
		irmSubsPage.dockedSearhField.waitForDisplayed();
		irmSubsPage.dockedSearhField.click();
		irmSubsPage.dockedSearhField.keys(this.clearKeys);
		browser.pause(500);
		irmSubsPage.dockedSearhField.setValue(this.equipmentToSearch);
		browser.pause(6000);
		var allcelldata = irmSubsPage.dockedEquipmentItem;
		allcelldata[2].waitForClickable();
		allcelldata[2].click();
		browser.pause(3000);
		expect(irmSubsPage.profileDescription.getAttribute('value')).to.eql(this.equipmentDescription);
		expect(irmSubsPage.profilelocationInput.getAttribute('value')).to.eql(this.equipmentLocation);
		expect(irmSubsPage.equipmentprofileInput.getAttribute('value').includes(this.equipmentprofile)).to.be.true;
		console.log('Equipment profile successfully');
		expect(irmSubsPage.macAddressEquipment.getAttribute('value')).to.eql(this.equipmentMacAddress);
		console.log('Equipment mac successfully');
		irmSubsPage.macAddressEquipment.scrollIntoView();
		expect(irmSubsPage.ipAddressEquipment.getAttribute('value')).to.eql(this.equipmentIpAddress);
		console.log('Equipment ip successfully');
}
verifyEditEquipmentDrawerOpened()
{
	expect(irmSubsPage.addEquipmentDialogHeader.isExisting()).to.be.true;
}
verifyFieldsUpdatedForEquipment()
{
	browser.pause(2000);
	expect(this.equipmentLocation.length).to.be.not.eql(0);
	console.log('equipmentLocation verified');
	expect(this.equipmentMacAddress).to.be.not.eql(null);
	console.log('equipmentMacAddress verified');
	expect(this.ethernetMAC).to.be.not.eql(null);
	console.log('ethernetMAC verified');
	expect(this.equipmentDescription.length).to.be.not.eql(0);
	console.log('equipmentDescription verified');
}
verifyEquipmentUpdatedInRealTime()
{
	var msg;
		irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.updatedEquipmentConfMsg);
}
verifyThreeDotsMenuOfEquipment()
{
	irmSubsPage.btnDotEquiment.waitForDisplayed();
	expect(irmSubsPage.btnDotEquiment.isExisting()).to.be.true;
}
verifyEquipmentGetDeleted()
{
	var msg;
		irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.deletedEquipmentConfMsg);
		browser.pause(2000);
		irmSubsPage.dockedSearhField.waitForDisplayed();
		irmSubsPage.dockedSearhField.click();
		irmSubsPage.dockedSearhField.keys(this.clearKeys);
		irmSubsPage.dockedSearhField.setValue(this.equipmentName);
		var allcelldata = irmSubsPage.dockedEquipmentItem;
		expect(allcelldata.length > 0).to.be.false;
		console.log('Equipment deleted successfully');
}
verifyUpdatedListOfEquipmentAssemblies()
{

}
verifyEditEquipmentAssembliesDrawerDisplayed()
{
	irmSubsPage.siteHeader.waitForExist();
	irmSubsPage.locationField.waitForDisplayed();
	expect(irmSubsPage.siteHeader.isExisting()).to.be.true;
	expect(irmSubsPage.locationField.isExisting()).to.be.true;
}
verifyAllFieldsUpdatedForEA()
{
	this.updatedEquipmentAssmeblyName = irmSubsPage.profileDescription.getValue();
}
verifyAssemblyUpdatedRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.updatedEquipmentAssemblyMsg);
	browser.pause(2000);
	expect(irmSubsPage.profileDescription.getValue()).to.be.eql(this.updatedEquipmentAssmeblyName);
}
verifyCopyAssemblyDrawerDisplayed()
{
	irmSubsPage.siteHeader.waitForExist();
	expect(irmSubsPage.siteHeader.getText().includes('Copy an Assembly')).to.be.true;
}
verifyFieldsUpdatedForCopyAssembly()
{
	this.updatedEquipmentAssmeblyName = irmSubsPage.profileDescription.getValue();
}
verifyCopyAssemblySuccessRealTime()
{
	var msg;
		irmSubsPage.confirmationMsg.waitForDisplayed();
		msg = irmSubsPage.confirmationMsg.getText();
		expect(msg).to.eql(this.createdEquipmentAssemblyCopy);
		console.log('Equipment Assembly copy created toast verified');
		browser.pause(3000);
		irmSubsPage.profileDescription.waitForDisplayed();
		expect(irmSubsPage.profileDescription.getValue().includes('Copy')).to.be.true;
		console.log('copied assembly name is '+irmSubsPage.profileDescription.getAttribute('value'));
		console.log('Equipment Assembly copy created successfully');
		this.equipmentProfile =irmSubsPage.profileDescription.getAttribute('value');
		browser.pause(5000);
		irmSubsPage.btnClose.click();
		browser.pause(3000);
		this.clickOnEquipmentSearch();
		this.typeInEquipmentSearch(this.equipmentProfile);
		console.log('item searched successfully');
		browser.pause(3000);
		console.log('item searched is' + this.equipmentProfile);
		irmSubsPage.firstEquipmentProfile.waitForDisplayed();
		console.log('item got is' + irmSubsPage.firstEquipmentProfile.getText());
		expect(irmSubsPage.firstEquipmentProfile.getText()).to.eql(this.equipmentProfile);
}
verifyPurchaseOrderListDisplayed()
{
	browser.keys(['\uE00C']);
		if(irmSubsPage.purchaseOrderMeatBall.isExisting()==false)
		{
			irmSubsPage.purchaseHeaderbuttons[2].waitForDisplayed();
			irmSubsPage.purchaseHeaderbuttons[2].scrollIntoView();
			irmSubsPage.purchaseHeaderbuttons[2].click();
        	browser.pause(1000);
			irmSubsPage.purchaseOrderTableView.waitForDisplayed();
			irmSubsPage.purchaseOrderTableView.waitForClickable();
			irmSubsPage.purchaseOrderTableView.click();
			browser.pause(2000);
		}
}
verifyCreatePODrawerOpened()
{
	irmSubsPage.siteHeader.waitForExist();
	expect(irmSubsPage.siteHeader.getText().includes('Create Purchase Order')).to.be.true;
}
verifyProfileItemListDisplayed()
{
	irmSubsPage.autoComplete.waitForDisplayed();
	expect(irmSubsPage.autoComplete.isExisting()).to.be.true;
	//browser.pause(1000);
	browser.keys(this.downArrowKey);
	browser.keys(this.enterKey);
}
verifyVendorListDisplayed()
{
	irmSubsPage.autoComplete.waitForDisplayed();
	expect(irmSubsPage.autoComplete.isExisting()).to.be.true;
	console.log('autocomplete expanded going to select vendor');
	//browser.pause(1000);
	browser.keys(this.downArrowKey);
	//browser.keys(this.downArrowKey);
	browser.keys(this.enterKey);
	browser.pause(2000);
	console.log('Purchase order vendor get selected');
}
verifyContinueButtonEnabled()
{
	irmSubsPage.btnContinue.waitForDisplayed();
	expect(irmSubsPage.btnContinue.isClickable()).to.be.true;
}
verifyPurchaseOrderSummaryDrawerOpened()
{
	expect(irmSubsPage.poSummaryHeader.isExisting()).to.be.true;
}
verifyPurchaseOrderCreatedSuccessfully()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.poCreatedConfMsg);
}
verifyPurchaseOrderDetailsDisplayed()
{
	irmSubsPage.siteHeader.waitForExist();
	expect(irmSubsPage.siteHeader.getText().includes('Purchase Order')).to.be.true;
}
verifyPurchaseOrderFieldsEditable()
{
	expect(this.isPoEditable).to.be.true;
}
verifyPurchaseOrderItemUpdatedSuccessfully()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.poItemUpdateConfMsg);
}
verifyPoStatusUpdated()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.poUpdateConfMsg);
}
verifyThreeDotsMenuDisplayedForPO()
{
	irmSubsPage.dottedMenu.waitForDisplayed();
	expect(irmSubsPage.dottedMenu.isExisting()).to.be.true;
}
verifyArchivedOptionDisplayed()
{
	irmSubsPage.changePoStatus('Archive').waitForDisplayed();
	expect(irmSubsPage.changePoStatus('Archive').isExisting()).to.be.true;
}
verifyPurchaseOrderStatusConfirmationDialog()
{
	irmSubsPage.btnConDialogYes.waitForDisplayed();
	expect(irmSubsPage.btnConDialogYes.isExisting()).to.be.true;
}
verifyStatusUpdatedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.poArchiveConfMsg);
}
verifyNoteFieldOfPOEditable()
{
	expect(irmSubsPage.inputNotice.isClickable()).to.be.true;	
}
verifyNoteFieldGetUpdatedSuccessfully()
{
	browser.pause(1500);
	expect(irmSubsPage.inputNotice.getValue()).to.eql(this.PoNote);
}
verifyInvoiceFieldOfPOEditable()
{
	expect(irmSubsPage.inputID.isClickable()).to.be.true;
}
verifyInvoiceIDFieldGetUpdatedSuccessfully()
{
	browser.pause(2000);
	expect(irmSubsPage.inputID.getValue()).to.eql(this.PoInvoiceID);
}
verifyPOStatusChangedSuccessfully()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.poUpdateConfMsg);
}
verifyNavigationToInventoryProfileSetting()
{
	irmSubsPage.btnInventoryProfiles.waitForDisplayed();
    expect(irmSubsPage.btnInventoryProfiles.isExisting()).to.be.true;
}
verifyNavigationToAddInventoryProfileDrawer()
{
	irmSubsPage.inputModel.waitForDisplayed();
    expect(irmSubsPage.inputModel.isExisting()).to.be.true;
}
verifyInventoryProfileFieldsFilled()
{
	expect(irmSubsPage.inputModel.getValue().length>0).to.be.true;
}
verifyInventoryProfileAddedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.inventoryProfileAdded);
}
verifycorrectdetailsOFInventoryProfile()
{
	expect(irmSubsPage.inputModel.getValue()).to.be.eql(this.inventoryprofile);
}
verifyDescriptionOfInventoryProfileGetUpdated()
{
	expect(irmSubsPage.inputDescription.getValue().length>0).to.be.true;
}
verifyInventoryProfileUpdatedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.inventoryProfileUpdated);
}
verifyInventoryProfileDeletedInRealTime()
{
	var msg;
	irmSubsPage.confirmationMsg.waitForDisplayed();
	msg = irmSubsPage.confirmationMsg.getText();
	expect(msg).to.eql(this.inventoryProfileDeleted);
}
}
module.exports = new IrmSubscriptionsActions();
