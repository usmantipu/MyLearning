var LoginPage = require('../pageobjects/login.page');
var EquipmentPage = require('../pageobjects/equipment.page');
var SubListPage = require('../pageobjects/subscriberlist.page');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class equipmentActions{
	
	constructor(){
		this.comment;
		this.pageTitle = 'Equipment';
		this.ispSiteConfMsg = 'Your changes are saved successfully';
		this.locationExpense = 'Site expenses successfully updated.';
		this.contactAdditionConfirmationMsg = 'Your changes are saved successfully';
		this.contactDeletionConfirmationMsg = 'Site Location Deleted Successfully';
		this.contactModificationConfirmationMsg = 'Your changes are saved successfully';
		this.inventoryAddConfMsg = 'Inventory received successfully';
		this.inventoryUpdateConfMsg = 'Inventory updated successfully.';
		this.assignedCPEUpdateConfMsg = 'Assigned CPE updated successfully.';
		this.assignedCPEDeleteConfirmationMsg = 'Assigned CPE deleted successfully.';
		this.assignedCPEUnassignConfirmationMsg = 'Equipment unassigned successfully.';
		this.siteEquipmentAddConfMsg = 'Equipment profile added successfully';
		this.siteEquipmentUpdateConfMsg = 'Site Equipment updated successfully.';
		this.siteEquipmentSaveMappingConfMsg = 'Saved Successfully';
	}
	
    openubow(){
		EquipmentPage.open('login');
	}
	
	loginToUBOW(creds){
		var credentials = creds.raw();//storing datatable as 2D array
		LoginPage.username.waitForDisplayed();
		LoginPage.username.setValue(credentials[0][0]);
		LoginPage.passwordf.setValue(credentials[0][1]);
		LoginPage.logbutton.click();
		console.log('I login using given credentials');
		Utils.closeRatingPopup();
		Utils.closeWalkMe();
	}
	
	navigateToEquipment(){
		browser.pause(5000);
		EquipmentPage.equipmentMenu.waitForDisplayed();
		EquipmentPage.equipmentMenu.click();
		console.log('I navigate to Equipment!');
		browser.pause(5000);
	
	}
	
	openSiteForm(){
		browser.pause(2000);
		EquipmentPage.siteLocationHemburgerMenu.waitForDisplayed();
		EquipmentPage.siteLocationHemburgerMenu.click();
		EquipmentPage.btnAddSite.waitForDisplayed();
		EquipmentPage.btnAddSite.click();
		browser.pause(5000);
	}
	
	enterSiteDetails(_location, height, lattidue, longitude, city, state, zip, notes){
		
		var keys = ['\uE004','\uE004', '\uE015', '\uE015', '\uE006' ]; // keyboard keys Tab, Tab, Down, Down, Enter
		
		browser.pause(2000);
		EquipmentPage._location.waitForDisplayed();
		EquipmentPage._location.setValue(_location);
		EquipmentPage.height.setValue(height);
		EquipmentPage.lattidue.setValue(lattidue);
		EquipmentPage.longitude.setValue(longitude);
		EquipmentPage.city.setValue(city);
		browser.pause(2000);
		EquipmentPage.city.keys(keys);
		/*EquipmentPage.state.click();
		browser.getSource();
		browser.pause(2000);
		EquipmentPage.state.setValue(state);*/
		EquipmentPage.zip.setValue(zip);
		browser.pause(2000);
		EquipmentPage.notes.setValue(notes);
	}
	
	saveSiteDetails(){
		browser.pause(2000);
		EquipmentPage.btnSave.waitForDisplayed();
		EquipmentPage.btnSave.click();
		console.log('Site location is updated!');
		//browser.pause(2000);
	}
	
	selectFirstRecord(){
		browser.pause(5000);
		EquipmentPage.colLocation.waitForDisplayed();
		EquipmentPage.colLocation.click();
		//console.log('I select 1st ISP Site Location  --  Site location is opened in Dock');
		browser.pause(15000);
	}

	selectFirstAssignedCPE(){		
		browser.pause(10000);
		EquipmentPage.colAssignedCPE.waitForDisplayed();
		EquipmentPage.colAssignedCPE.click();
		//console.log('I select 1st ISP Site Location  --  Site location is opened in Dock');
		browser.pause(15000);
	}
	
	updateSiteDetails(_location, address1, city, state, zip, notes){
		
		var keys = ['\uE004','\uE004', '\uE015', '\uE015', '\uE006' ]; // keyboard keys Tab, Tab, Down, Down, Enter
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		
		browser.pause(2000);
		
		EquipmentPage.penIcon.waitForDisplayed();
		EquipmentPage.penIcon.click();
		EquipmentPage._location.waitForDisplayed();
		EquipmentPage._location.click();
		EquipmentPage._location.keys(clearKeys);
		EquipmentPage._location.keys('\uE008');
		EquipmentPage._location.setValue(_location);
		
		EquipmentPage.city.click();
		EquipmentPage.city.keys(clearKeys);
		EquipmentPage.city.keys('\uE008');
		EquipmentPage.city.setValue(city);
		
		browser.pause(2000);
		EquipmentPage.city.keys(keys);
		/*EquipmentPage.state.click();
		browser.getSource();
		browser.pause(2000);
		EquipmentPage.state.setValue(state);*/
		EquipmentPage.zip.click();
		EquipmentPage.zip.keys(clearKeys);
		EquipmentPage.zip.keys('\uE008');
		EquipmentPage.zip.setValue(zip);
		
		browser.pause(2000);
		EquipmentPage.notes.click();
		EquipmentPage.notes.keys(clearKeys);
		EquipmentPage.notes.keys('\uE008');
		var currentDate = new Date();
		var ticks = currentDate.getTime();
		EquipmentPage.notes.setValue(notes+ticks);
	}
	
	navigateToSignMargin(){
		browser.pause(5000);
		EquipmentPage.siteMarginTab.waitForDisplayed();
		EquipmentPage.siteMarginTab.click();
		browser.pause(1000);
	//	EquipmentPage.dotMenu.click();
	//	browser.pause(1000);
	//	EquipmentPage.btnEditExpense.click();
		console.log('I navigate to ISP Site Margin  --  Site margin section visible');
	}
	
	enterSiteMargin(margin){
		var marginDetails = margin.raw();
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];// home + shift + end + del
		
		EquipmentPage.dotMenu.click();
		browser.pause(1000);
		EquipmentPage.btnEditExpense.click();
		console.log('I navigate to ISP Site Margin  --  Site margin tab is opened');
		EquipmentPage.locationExpenseFirstRow.waitForDisplayed();
		EquipmentPage.locationExpenseFirstRow.click();
		EquipmentPage.locationExpenseFirstRow.keys(clearKeys);
		EquipmentPage.locationExpenseFirstRow.setValue(marginDetails[0][0]);
		browser.pause(2000);
		EquipmentPage.locationCostFirstRow.click();
		browser.pause(1000);
		EquipmentPage.locationCostFirstRow.keys(clearKeys);
		EquipmentPage.locationExpenseFirstRow.keys('\uE008');//releasing shift key
		EquipmentPage.locationCostFirstRow.setValue(marginDetails[0][1]);
		EquipmentPage.locationCostFirstRow.keys('\uE008');//releasing shift key
		browser.pause(2000);
		console.log('I enter margin details successfully!');
	}
	
	saveSiteMargin(){
		var object;
		browser.pause(2000);
		EquipmentPage.btnSaveSiteMargin.waitForDisplayed();
		
		EquipmentPage.btnSaveSiteMargin.click();
				
		console.log('I save site margin details!');
	}
	
	deleteSiteMargin(){
		EquipmentPage.dotMenu.click();
		browser.pause(1000);
		EquipmentPage.btnEditExpense.click();
		console.log('I navigate to ISP Site Margin  --  Site margin tab is opened');
		browser.pause(1000);
		EquipmentPage.locationExpenseFirstRow.waitForDisplayed();
		this.locationExpense = EquipmentPage.locationExpenseFirstRow.getAttribute('value');
		console.log('Location expense is ' + this.locationExpense);
		EquipmentPage.btnDelete.waitForDisplayed();
		EquipmentPage.btnDelete.click();
	}
	
	clickLoadReport(){
		
		var keys = ['\uE004', '\uE007']; //tab + enter

		browser.pause(5000);
		//EquipmentPage.MarginTitle.waitForDisplayed();
		//EquipmentPage.MarginTitle.click();
		//EquipmentPage.MarginTitle.keys(keys);
		console.log('Used keyboard shortcut');
		EquipmentPage.dotMenu.waitForDisplayed();
		EquipmentPage.dotMenu.click();
		EquipmentPage.btnLoadReport.waitForDisplayed();
		EquipmentPage.btnLoadReport.click();
		console.log('I click on Load Report button');
		browser.pause(5000);
	}
	
	openSiteContactTab(){
		browser.pause(5000);
		EquipmentPage.siteContactsTab.waitForDisplayed();
		EquipmentPage.siteContactsTab.click();
		console.log('I navigate to Add Site Contact page');
		browser.pause(1000);
	}
	
	clickAddNew(){
		browser.pause(2000);
		EquipmentPage.btnAddNew.waitForDisplayed();
		EquipmentPage.btnAddNew.click();
		console.log('I click on ADD NEW button');
		browser.pause(2000);
	}
	
	addContactDetails(contactDetails){
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		
		browser.pause(2000);
		var details = contactDetails.raw();
		EquipmentPage.description.waitForDisplayed();
		EquipmentPage.description.setValue(details[0][0]);
		EquipmentPage.company.setValue(details[0][1]);
		EquipmentPage.fName.setValue(details[0][2]);
		EquipmentPage.mName.setValue(details[0][3]);
		EquipmentPage.lName.setValue(details[0][4]);
		EquipmentPage.address1.setValue(details[0][5]);
		EquipmentPage.address2.setValue(details[0][6]);
		EquipmentPage.contactCity.setValue(details[0][7]);
		EquipmentPage.contactState.click();
		browser.pause(2000);
		EquipmentPage.contactState.keys(stateselection);
		EquipmentPage.contactZip.setValue(details[0][9]);
		EquipmentPage.homePhone.setValue(details[0][10]);
		EquipmentPage.workPhone.setValue(details[0][11]);
		EquipmentPage.cellPhone.setValue(details[0][12]);
		EquipmentPage.fax.setValue(details[0][13]);
		
		browser.pause(5000);
	}
	
	saveContactDetails(){
		EquipmentPage.btcSaveContactDeatils.waitForDisplayed();
		EquipmentPage.btcSaveContactDeatils.click();
		browser.pause(2000);
	}
	
	openFirstContact(){
		EquipmentPage.siteContactSection.waitForDisplayed();
		EquipmentPage.siteContactSection.click();
		EquipmentPage.btnHoverEdit.waitForDisplayed();
		EquipmentPage.btnHoverEdit.click();
		console.log('I click on first record to edit it');
	}
	
	deleteSiteLocation(){
		var keys = ['\uE004', '\uE00D'];// Tab + Space
		browser.pause(2000);
		//console.log('>>>>>>>>Hovering');
		//EquipmentPage.hoverFirstRecord();
		//console.log('>>>>>>>>Hovered');
		EquipmentPage.smDotMenu.waitForDisplayed();
		EquipmentPage.smDotMenu.click();
		console.log('>>>>>>>>Clicked dot menu');
		EquipmentPage.smDotMenu.keys(keys);
		console.log('>>>>>>>>sent keys');
		EquipmentPage.miDelete.waitForDisplayed();
		EquipmentPage.miDelete.click();
		console.log('I click on Delete menu item');
		browser.pause(5000);
	}
	
	deleteAssignedCPE(){
		browser.pause(20000);
		EquipmentPage.hoverFirstRecord();
		EquipmentPage.dotMenu.waitForDisplayed();
		EquipmentPage.dotMenu.click();
		EquipmentPage.miDelete.waitForDisplayed();
		EquipmentPage.miDelete.click();
		console.log('I click on Delete menu item');
		browser.pause(3000);
	}
	unAssignAssignedCPE(){
		browser.pause(20000);
		EquipmentPage.hoverFirstRecord();
		EquipmentPage.dotMenu.waitForDisplayed();
		EquipmentPage.dotMenu.click();
		EquipmentPage.miUnAssigned.waitForDisplayed();
		EquipmentPage.miUnAssigned.click();
		console.log('I click on Unassign menu item');
		browser.pause(3000);
	}
	
	deletionConfirmation(){
		EquipmentPage.btnYesDeleteSite.waitForDisplayed();
		EquipmentPage.btnYesDeleteSite.click();
		console.log('I select YES on confirmation box');
	}
	receiverInventory(){
		browser.pause(2000);
		EquipmentPage.hamburgerMenu.waitForDisplayed();
		EquipmentPage.hamburgerMenu.click();
		EquipmentPage.receiveInventory.waitForDisplayed();
		EquipmentPage.receiveInventory.click();
		console.log('I click on Receive INVENTORY');
	}
	
	enterReceiveInventory(model, make, description, owner, serialno, provisioned, mac, type, ip, manage)
	{
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		EquipmentPage.equipmentProfile.waitForDisplayed();
		EquipmentPage.equipmentProfile.click();
		EquipmentPage.equipmentProfile.keys(stateselection);
		browser.pause(5000);
		
		//EquipmentPage.description.setValue(description);
		//EquipmentPage.provisioned_Date.setValue(provisioned);
		//EquipmentPage.owner_Select.click();
		//browser.debug();
		//EquipmentPage.dropdownMenuOption1().waitForDisplayed();
		//EquipmentPage.dropdownMenuOption1().click();
		//EquipmentPage.dropDownOption(owner).click();
		//browser.debug();
		// EquipmentPage.type_Select.click();
		// EquipmentPage.dropDownOption(type).waitForDisplayed();
		// EquipmentPage.dropDownOption(type).click();
		var currentDate = new Date();
		var ticks = currentDate.getTime();
		//EquipmentPage.serial_Number.setValue(ticks);
		var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
		return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
		});
		//EquipmentPage.mac_Address.setValue(macAddress);
		//EquipmentPage.manager_Select.click();
		//browser.pause(2000);
		//EquipmentPage.manager_Select.keys(stateselection);
		var randomIp = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
		//EquipmentPage.ip_Address.setValue(randomIp);
	}
	
	addInventory()
	{
		EquipmentPage.Inventoryadd.click();
		console.log('I Add INVENTORY');
	}
	
	selectFirstInventory()
	{
		EquipmentPage.firstInventory.waitForDisplayed();
		EquipmentPage.firstInventory.click();
	}
	
	updateReceiveInventory(model, make, description, owner, serialno, provisioned, mac, type, ip, manage)
	{
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		EquipmentPage.editModel.waitForDisplayed();
		EquipmentPage.editModel.setValue(model);
		EquipmentPage.editMake.setValue(make);
		//EquipmentPage.description.setValue(description);
		var currentDate = new Date();
		var ticks = currentDate.getTime();
		EquipmentPage.editSerial_Number.setValue(ticks);
		var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
		return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
		});
		EquipmentPage.editMac_Address.setValue(macAddress);
		EquipmentPage.editManager_Select.click();
		browser.pause(2000);
		EquipmentPage.editManager_Select.keys(stateselection);
		var randomIp = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
		EquipmentPage.editIp_Address.setValue(randomIp);
	}
	 
	updateInventory()
	{
		EquipmentPage.inventoryUpdate.waitForDisplayed();
		EquipmentPage.inventoryUpdate.click();
	}
	
	updateAssignedCPEDetails(model, make, description, owner, serialno, provisioned, mac, type, ip, manage)
	{
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		console.log('>>>>>>>>>>>>>>>Going to click menu');
		EquipmentPage.aCpDotMenu.waitForDisplayed();
		EquipmentPage.aCpDotMenu.click();
		console.log('>>>>>>>>>>>>>>>Menu clicked');
		EquipmentPage.aCpEditMenu.click();
		EquipmentPage.editModel.waitForDisplayed();
		//EquipmentPage.editModel.setValue(model);
		//EquipmentPage.editMake.setValue(make);
		EquipmentPage.description.setValue(description);
		
		var currentDate = new Date();
		var ticks = currentDate.getTime();
		EquipmentPage.imsi.setValue(ticks);
		//EquipmentPage.editSerial_Number.setValue(ticks);
		/*var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
		return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
		});*/
		//EquipmentPage.editMac_Address.setValue(macAddress);
		//browser.pause(2000);
		//EquipmentPage.editManager_Select.click();
		//browser.pause(2000);
		//EquipmentPage.editManager_Select.keys(stateselection);
		//var randomIp = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);
		//EquipmentPage.editIp_Address.setValue(randomIp);
	}
	
	updateAssignedCPE()
	{
		EquipmentPage.assignedCPEUpdate.waitForDisplayed();
		EquipmentPage.assignedCPEUpdate.click();
	}
	
	addSiteEquipment()
	{
		EquipmentPage.actionsMenu.waitForDisplayed();
		EquipmentPage.actionsMenu.click();
		browser.pause(2000);
		EquipmentPage.addEquipment.waitForDisplayed();
		EquipmentPage.addEquipment.click();
		browser.pause(4000);
	}
	
	enterSiteEquipmentDetails(model, make, description, owner, serialno, provisioned, mac, type, ip, manage, download, upload, note)
	{
		
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		EquipmentPage.editModel.waitForDisplayed();
		EquipmentPage.editModel.setValue(model);
		EquipmentPage.editMake.setValue(make);
		EquipmentPage.description.setValue(description);
		var currentDate = new Date();
		var ticks = currentDate.getTime();
		EquipmentPage.editSerial_Number.setValue(ticks);
		var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
		return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
		});
		//EquipmentPage.editMac_Address.setValue(macAddress);
		EquipmentPage.equipment_manager_Select.click();
		browser.pause(2000);
		EquipmentPage.equipment_manager_Select.keys(stateselection);
		/*var randomIp = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);		
		EquipmentPage.editIp_Address.setValue(randomIp);
		EquipmentPage.equipmentDownload.setValue(download);
		EquipmentPage.equipmentUpload.setValue(upload);
		EquipmentPage.equipmentNote.setValue(note);*/
	}
	
	addNewSiteEquipment()
	{
		EquipmentPage.equipmentAdd.waitForDisplayed();
		EquipmentPage.equipmentAdd.click();
	}
	
	editSiteEquipmentDetails(model, make, description, owner, serialno, provisioned, mac, type, ip, manage, download, upload, note)
	{
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(5000);
		EquipmentPage.editModel.waitForDisplayed();
		EquipmentPage.editModel.setValue(model);
		EquipmentPage.editMake.setValue(make);
		EquipmentPage.description.setValue(description);
		var currentDate = new Date();
		var ticks = currentDate.getTime();
		EquipmentPage.editSerial_Number.setValue(ticks);
		var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
		return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
		});
		EquipmentPage.editMac_Address.setValue(macAddress);
		EquipmentPage.equipment_manager_Select.click();
		browser.pause(2000);
		EquipmentPage.equipment_manager_Select.keys(stateselection);
		var randomIp = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0)+"."+(Math.floor(Math.random() * 255) + 0);		
		EquipmentPage.editIp_Address.setValue(randomIp);
		EquipmentPage.equipmentDownload.setValue(download);
		EquipmentPage.equipmentUpload.setValue(upload);
		EquipmentPage.equipmentNote.setValue(note);
	}
	
	updateSiteEquipment()
	{
		EquipmentPage.equipmentUpdate.waitForDisplayed();
		EquipmentPage.equipmentUpdate.click();
	}

	enterSiteEquipmentMappingDetails(azimuth, downtilt, elevation, power, beamWidth, beamHeight, range, fadeMargin)
	{
		browser.pause(5000);
		EquipmentPage.mappingAzimuth.waitForDisplayed();
		EquipmentPage.mappingAzimuth.setValue(azimuth);
		EquipmentPage.down_tilt.setValue(downtilt);
		EquipmentPage.elevation.setValue(elevation);
		EquipmentPage.power.setValue(power);
		EquipmentPage.beam_width.setValue(beamWidth);
		EquipmentPage.beam_height.setValue(beamHeight);
		EquipmentPage.range.setValue(range);
		var randomMargin = Math.floor(Math.random() * 50000);
		EquipmentPage.fade_margin.setValue(fadeMargin+randomMargin);
	}
	
	setSiteEquipmentMappingColor()
	{
		//EquipmentPage.mappingColor.waitForDisplayed();
		//EquipmentPage.mappingColor.setValue('#004080');
		console.log('color select required R&D');
	}
	
	saveSiteEquipmentMapping()
	{		
		EquipmentPage.saveMapping.waitForDisplayed();
		EquipmentPage.saveMapping.click();
	}

	editSiteEquipmentLocation()
	{
		var stateselection = ['\uE015', '\uE007'];// DownArrow + Enter
		browser.pause(3000);
		EquipmentPage.siteLocation_select.click();
		browser.pause(1000);
		EquipmentPage.siteLocation_select.keys(stateselection);
		browser.pause(2000);
	}
	
	saveSiteEquipmentLocation()
	{
		EquipmentPage.saveLocation.waitForDisplayed();
		EquipmentPage.saveLocation.click();
	}
	
	enterSSIDDetails(ssid, frequency)
	{   
		var clearKeys = ['\uE017'];// ctrl, alt, del '\uE009', '\uE00A', 
		console.log('>>>>>>>>>>>Waiting for SSID');
	
		browser.pause(1000);
		EquipmentPage.ssidName.doubleClick();
		EquipmentPage.ssidName.keys(clearKeys);
		EquipmentPage.ssidName.setValue((Math.floor(new Date() / 1000)));
		EquipmentPage.ssidFrequency.setValue(frequency);
	}
	
	addSSIDdetail()
	{
		//EquipmentPage.addSSID.waitForDisplayed();
		//EquipmentPage.addSSID.click(); //commented as it causes issues if SSIS already exists
		browser.pause(1000);
	}
	
	saveSSIDdetail()
	{
		EquipmentPage.saveSSID.waitForDisplayed();
		EquipmentPage.saveSSID.click();
	}
	
	selectAndUploadFile()
	{
		browser.pause(5000);
		EquipmentPage.upload_file.setValue("C:\Users\Administrator\Downloads\images\dekor-markt-bonnekoh_genc_300x300.jpg");
	}
	
	refreshAttachment()
	{
		EquipmentPage.refresh_attachment.waitForDisplayed();
		EquipmentPage.refresh_attachment.click();
	}
	
	gotoSiteEquipmentTab(tab)
	{
		EquipmentPage.siteEquipmentMappingTab(tab).waitForDisplayed();
		EquipmentPage.siteEquipmentMappingTab(tab).click();
		browser.pause(2000);
		EquipmentPage.penIconSsid.click();
		console.log('>>>>>>>>>>>>>Clicked pencil icon');
		browser.pause(2000);
	}
	
	verifyPageHeading(){
		browser.pause(5000);
		var pageText;
		EquipmentPage.pageHeading.waitForDisplayed();
		pageText = EquipmentPage.pageHeading.getText();
		
		expect(pageText).to.eql(this.pageTitle);
		console.log('I can view Equipment page successfully!');
	}
	
	selectEquipmentTab(tab)
	{
		switch(tab){
			case 'SITE LOCATION':
					EquipmentPage.siteLocation.click();
				 break;
				case 'SITE EQUIPMENT':
					EquipmentPage.siteEquipment.click();
				 break;
				case 'ASSIGNED CPE':
					EquipmentPage.assignedCPETab.click();
				 break;
				case 'INVENTORY':
					EquipmentPage.inventoryTab.click();
				 break;
				default:
					console.log('No such tab(s) found!');
					expect(0).to.eql(1);
				 break;
		}
	}
	verifyTabs(tabs){
		
		var eTabs = tabs.raw();
		
				
		for (var i=0; i<eTabs.length; i++){
			var siteLocation;
			var siteEquipment;
			var assignedCPE;
			var inventory;
			
			EquipmentPage.siteLocation.waitForDisplayed();
			
			siteLocation = EquipmentPage.siteLocation.getText();
			siteEquipment = EquipmentPage.siteEquipment.getText();
			assignedCPE = EquipmentPage.assignedCPETab.getText();
			inventory = EquipmentPage.inventoryTab.getText();
			
			switch(eTabs[i][0]){
				
				case 'SITE LOCATION':
					expect(siteLocation.slice(0, 13)).to.eql(eTabs[i][0]);
				 break;
				case 'SITE EQUIPMENT':
					expect(siteEquipment).to.eql(eTabs[i][0]);
				 break;
				case 'ASSIGNED CPE':
					expect(assignedCPE).to.eql(eTabs[i][0]);
				 break;
				case 'INVENTORY':
					expect(inventory).to.eql(eTabs[i][0]);
				 break;
				default:
					console.log('No such tab(s) found!');
					expect(0).to.eql(1);
				 break;
			}
			
			console.log('tab name is: ' + eTabs[i][0]);
		}
	}
	
	verifySiteLocationSaved(){
		
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.ispSiteConfMsg);
		console.log('Your changes are saved successfully');
	}
	
	verifySiteMarginSaved(){
		
		var successMsg;
		
		EquipmentPage.confirmationMsg.waitForDisplayed();
		successMsg = EquipmentPage.confirmationMsg.getText();
		
		expect(successMsg).to.eql(this.locationExpense);
		console.log('Site margin saved successfully!');
		//browser.pause(3000);
	}
	
	verifySiteMarginRemoved(){
		
		expect(EquipmentPage.locationExpenseFirstRow.getAttribute('value')).to.not.eql(this.locationExpense);
	}
	
	verifyReportInNewTab(){
		//var tabs = browser.getTabIds();
		var tabs = [browser.options.baseUrl, 'https://ubo-reports.visp.net/', 'https://testing.visp.net/']
		var report;
		
		browser.pause(2000);
		switch(browser.options.baseUrl){
			case 'https://app.visp.net/':
				browser.switchWindow(tabs[1]);
				break;
			case 'https://staging.visp.net/':
				browser.switchWindow(tabs[2]);
				break;
		}
			
		
		report = browser.getUrl();
		
		if (report.match(/ISP\%20Site\%20Margin\.php/)){
			expect(1).to.eql(1);
			console.log('Report opened successfully!');
		}else{
			console.log('Report launch failed!');
			expect(1).to.eql(0);
		}
		browser.switchWindow(tabs[0]);
		browser.pause(2000);
	}
	
	verifyContactAddition(){
		EquipmentPage.contactAdditionConfirmationMsg.waitForDisplayed();
		expect(EquipmentPage.contactAdditionConfirmationMsg.getText()).to.eql(this.contactAdditionConfirmationMsg);
		console.log(EquipmentPage.contactAdditionConfirmationMsg.getText());
	}
	
	verifySiteDeletion(){
		EquipmentPage.contactDeletionConfirmationMsg.waitForDisplayed();
		expect(EquipmentPage.contactDeletionConfirmationMsg.getText()).to.eql(this.contactDeletionConfirmationMsg);
		console.log(EquipmentPage.contactDeletionConfirmationMsg.getText());
	}
	
	verifyAssignedCPEDeletion(){
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.assignedCPEDeleteConfirmationMsg);
		console.log('Assigned CPE deleted successfully!');
	}
	
	verifyAssignedCPEUnassigned(){
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.assignedCPEUnassignConfirmationMsg);
		console.log('Assigned CPE unassigned successfully!');
	}
	
	verifyContactModification(){
		EquipmentPage.contactAdditionConfirmationMsg.waitForDisplayed();
		expect(EquipmentPage.contactAdditionConfirmationMsg.getText()).to.eql(this.contactModificationConfirmationMsg);
		console.log(EquipmentPage.contactAdditionConfirmationMsg.getText());
	}
	
	verifyReceiveInventoryAdded()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.inventoryAddConfMsg);
		console.log('INVENTORY saved successfully!');
	}
	
	verifyReceiveInventoryUpdated()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.inventoryUpdateConfMsg);
		console.log('INVENTORY updated successfully!');
	}
	
	verifyAssignedCPEUpdated()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.assignedCPEUpdateConfMsg);
		console.log('Assigned CPE updated successfully!');
	}
	
	verifySiteEquipmentAdded()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteEquipmentAddConfMsg);
		console.log('Site Equipment saved successfully!');
	}
	
	verifySiteEquipmentUpdated()
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteEquipmentUpdateConfMsg);
		console.log('Site Equipment updated successfully!');
	}
	
	verifySiteEquipmentTabChangesSaved(tab)
	{
		var msg;
		EquipmentPage.confirmationMsg.waitForDisplayed();
		msg = EquipmentPage.confirmationMsg.getText();
		expect(msg).to.eql(this.siteEquipmentSaveMappingConfMsg);
		console.log('Site Equipment '+tab+' saved successfully!');
	}
	
	verifyAttachmentsReloaded()
	{
		expect(EquipmentPage.attachment_Name(this.attachmentFileName)).to.exist;
	}
	verifyEquipmentTabSelected(tab)
	{
		switch(tab){
			case 'SITE LOCATION':
					browser.pause(2000);
					var valueActobe = EquipmentPage.siteLocationTabByLink.getAttribute('class');
					expect(valueActobe).to.eql('active');
					console.log(tab+ 'tab is selected');
				 break;
				case 'SITE EQUIPMENT':
					browser.pause(2000);
					var valueActobe = EquipmentPage.siteEquipmentTabByLink.getAttribute('class');
					expect(valueActobe).to.eql('active');
					console.log(tab+ 'tab is selected');
				 break;
				case 'ASSIGNED CPE':
					browser.pause(2000);
					var valueActobe = EquipmentPage.assignedCPETabByLink.getAttribute('class');
					expect(valueActobe).to.eql('active');
					console.log(tab+ 'tab is selected');
				 break;
				case 'INVENTORY':
					browser.pause(2000);
					var valueActobe = EquipmentPage.inventoryTabByLink.getAttribute('class');
					expect(valueActobe).to.eql('active');
					console.log(tab+ 'tab is selected');
				 break;
				default:
					console.log('No such tab(s) found!');
					expect(0).to.eql(1);
				 break;
		}
	}
}
module.exports = new equipmentActions();
