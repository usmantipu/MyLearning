const {Given, When, Then} = require("@cucumber/cucumber");
const equipmentActions = require('../support/equipmentActions');
const Utils = require('../support/utils');

	
	Given(/^I open UBOW$/, function(){
		equipmentActions.openubow();
	});
	
	Given(/^I login with username and password to use equipment$/, function(credentials){
		equipmentActions.loginToUBOW(credentials);
	});
	
	When(/^I navigate to Equipment page$/, function(){
		equipmentActions.navigateToEquipment();
	});
	
	When(/^I navigate to Add ISP Site Location page by selecting ADD SITE button$/, function(){
		equipmentActions.openSiteForm();
	});
	
	When(/^I fill the (.*), (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, function(_location, height, lattidue, longitude, city, state, zip, notes){
		equipmentActions.enterSiteDetails(_location, height, lattidue, longitude, city, state, zip, notes);
		
	});
	
	When(/^I save details$/, function(){
		equipmentActions.saveSiteDetails();
	});
	
	When(/^I select 1st ISP Site Location$/, function(){
		equipmentActions.selectFirstRecord();
	});
	
	When(/^I change the (.*), (.*), (.*), (.*), (.*), and (.*)$/, function(_location, address1, city, state, zip, notes){
		      
		equipmentActions.updateSiteDetails(_location, address1, city, state, zip, notes);
	});
	
	When(/^I save the changes$/, function(){
		equipmentActions.saveSiteDetails();
	});
	
	When(/^I navigate to ISP Site Margin$/, function(){
		equipmentActions.navigateToSignMargin();
	});
	
	When(/^I enter Cost Description and Cost$/, function(margin){
		equipmentActions.enterSiteMargin(margin);
	});
	
	When(/^I save site margin details$/, function(){
		equipmentActions.saveSiteMargin();
	});
	
	When(/^I delete ISP site cost$/, function(){
		
		equipmentActions.deleteSiteMargin();
	//	equipmentActions.saveSiteMargin();
	});
	
	When(/^I click "Load Report" button$/, function(){
		equipmentActions.clickLoadReport();
	});
	
	When(/^I navigate to Add Site Contact page by selecting ADD NEW button$/, function(){
		equipmentActions.openSiteContactTab();
		equipmentActions.clickAddNew();
	});
	
	When(/^I fill in contact details$/, function(contactDetails){
		        
		equipmentActions.addContactDetails(contactDetails);
	});
	
	When(/^I save informaiton$/, function(){
		
		equipmentActions.saveContactDetails();
	});
	
	When(/^I select 1st Site Contact$/, function(){
		equipmentActions.openSiteContactTab();
		equipmentActions.openFirstContact();
	});
	
	When(/^I click "Delete" button from dotted menu for 1st ISP Site Location$/, function(){
		equipmentActions.deleteSiteLocation();
	});
	
	When(/^I click "Yes" button in confirmation dialogue$/, function(){
		equipmentActions.deletionConfirmation();
	});
	
	When(/^I navigate to Add Recieve Inventory page by selecting "Recieve Inventory" button$/, function(){
		equipmentActions.selectEquipmentTab("INVENTORY");
		equipmentActions.receiverInventory();
	});
	
	When(/^I enter the details of inventory (.*), (.*), (.*) (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, function(model, make, description, owner, serialno, provisioned, mac, type, ip, manage){
		equipmentActions.enterReceiveInventory(model, make, description, owner, serialno, provisioned, mac, type, ip, manage);
		
	});
	
	When(/^I select 1st Receive Inventory from Inventory page$/, function(){
		equipmentActions.selectEquipmentTab("INVENTORY");
		equipmentActions.selectFirstRecord();
		//equipmentActions.selectFirstInventory();
	});
	
	When(/^I edit the details of inventory (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*). (.*) and (.*)$/, function(model, make, description, owner, serialno, provisioned, mac, type, ip, manage){
		equipmentActions.updateReceiveInventory(model, make, description, owner, serialno, provisioned, mac, type, ip, manage);
		
	});
	
	When(/^I click "Add"$/, function(){
		equipmentActions.addInventory();
	});
	
	When(/^I update inventory$/, function(){
		equipmentActions.updateInventory();
	});
	
	When(/^I navigate to "Assigned CPE" tab$/, function(){
		equipmentActions.selectEquipmentTab("ASSIGNED CPE");
	});
	
	When(/^I select 1st record of Assigned CPE$/, function(){
		equipmentActions.selectFirstAssignedCPE();
	});
	
	When(/^I edit the Assigned CPE info (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, function(model, make, description, owner, serialno, provisioned, mac, type, ip, manage){
		equipmentActions.updateAssignedCPEDetails(model, make, description, owner, serialno, provisioned, mac, type, ip, manage);
		
	});
	
	When(/^I update Assigned CPE$/, function(){
		equipmentActions.updateAssignedCPE();
	});
	
	When(/^I click "Delete" button from dotted menu for 1st record$/, function(){
		equipmentActions.deleteAssignedCPE();
	});
	
	When(/^I click "Unaasigned Equipment" button from dotted menu for 1st record$/, function(){
		equipmentActions.unAssignAssignedCPE();
	});
	
	When(/^I navigate to Add Equiment by selecting "Site Equiment" button$/, function(){
		equipmentActions.selectEquipmentTab("SITE EQUIPMENT");
		equipmentActions.addSiteEquipment();
	});
	
	When(/^I add Site Equiment$/, function(){
		equipmentActions.addNewSiteEquipment();
	});
	
	When(/^I enter the Site Equiment info (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, function(model, make, description, owner, serialno, provisioned, mac, type, ip, manage, download, upload, note){
		equipmentActions.enterSiteEquipmentDetails(model, make, description, owner, serialno, provisioned, mac, type, ip, manage, download, upload, note);
		
	});
	
	When(/^I select 1st ISP Site Equipment$/, function(){
		equipmentActions.selectEquipmentTab("SITE EQUIPMENT");
		equipmentActions.selectFirstRecord();
	});
	
	When(/^I edit Site Equiment info (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, function(model, make, description, owner, serialno, provisioned, mac, type, ip, manage, download, upload, note){
		equipmentActions.editSiteEquipmentDetails(model, make, description, owner, serialno, provisioned, mac, type, ip, manage, download, upload, note);
		
	});
	
	When(/^I click Save to update the ISP Site Equipment$/, function(){
		equipmentActions.updateSiteEquipment();
	});
	
	When(/^I select Mapping tab from Site Equiment$/, function(){
		equipmentActions.gotoSiteEquipmentTab("Mapping");
	});
	
	When(/^I set the value of (.*) (.*), (.*), (.*), (.*), (.*), (.*) and (.*)$/, function(azimuth, downtilt, elevation, power, beamWidth, beamHeight, range, fadeMargin){
		equipmentActions.enterSiteEquipmentMappingDetails(azimuth, downtilt, elevation, power, beamWidth, beamHeight, range, fadeMargin);
	});
	
	When(/^I Choose Color from available options$/, function(){
		equipmentActions.setSiteEquipmentMappingColor();
	});
	
	When(/^I click Save to configure the ISP Site Equipment Mapping$/, function(){
		equipmentActions.saveSiteEquipmentMapping();
	});
	
	When(/^I select Location tab from Site Equiment$/, function(){
		equipmentActions.gotoSiteEquipmentTab("Location");
	});
	
	When(/^I select Location  from ISP Site location drop down$/, function(){
		equipmentActions.editSiteEquipmentLocation();
	});
	
	When(/^I save selected Site Equiment Location$/, function(){
		equipmentActions.saveSiteEquipmentLocation();
	});
	
	When(/^I navigate to SSID$/, function(){
		equipmentActions.gotoSiteEquipmentTab("SSID");
	});
	
	When(/^I Enter (.*) and (.*)$/, function(ssid, frequency){
		equipmentActions.enterSSIDDetails(ssid, frequency);
	});
	
	When(/^I click Add$/, function(){
		equipmentActions.addSSIDdetail();
	});
	
	When(/^I save added details of SSID$/, function(){
		equipmentActions.saveSSIDdetail();
	});
	
	When(/^I navigate to Attachments$/, function(){
		equipmentActions.gotoSiteEquipmentTab("Attachments");
	});
	
	When(/^I select a file to upload$/, function(){
		equipmentActions.selectAndUploadFile();
	});
	
	When(/^I click Refresh$/, function(){
		equipmentActions.refreshAttachment();
	});
	
	Then(/^I should get redirected to Equipment page$/, function(){
		equipmentActions.verifyPageHeading();
		Utils.clearLocalStorage();
	});
	
	Then(/^I see four Tabs on Equipment page$/, function(tabs){
		equipmentActions.verifyTabs(tabs);
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Location should get added in "ISP Site Location" table$/, function(){
		equipmentActions.verifySiteLocationSaved();
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Location should get updated$/, function(){
		equipmentActions.verifySiteLocationSaved();
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Cost should get added$/, function(){
		equipmentActions.verifySiteMarginSaved();
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Cost should get deleted$/, function(){
		equipmentActions.verifySiteMarginRemoved();
		Utils.clearLocalStorage();
	
	});
	
	Then(/^ISP Site Margin report should get load in new browser tab$/, function(){
		equipmentActions.verifyReportInNewTab();
		Utils.clearLocalStorage();
	});
	
	Then(/^Site Contact for selected ISP Site Location should get added$/, function(){
		equipmentActions.verifyContactAddition();
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Location should get deleted$/, function(){
		equipmentActions.verifySiteDeletion();
		Utils.clearLocalStorage();
	});
	
	Then(/^Site Contact for selected ISP Site Location should get updated$/, function(){
		equipmentActions.verifyContactModification();
		Utils.clearLocalStorage();
	});
	
	Then(/^I see records of Assigned CPE$/, function(){
		equipmentActions.verifyEquipmentTabSelected("ASSIGNED CPE");
		Utils.clearLocalStorage();
	});
	
	Then(/^Recieve Inventory should get added in "Inventory" table$/, function(){
		equipmentActions.verifyReceiveInventoryAdded();
		Utils.clearLocalStorage();
	});
	
	Then(/^Recieve Inventory should get updated in "Inventory" table$/, function(){
		equipmentActions.verifyReceiveInventoryUpdated();
		Utils.clearLocalStorage();
	});
	
	Then(/^Assigned CPE info for selected user should get updated$/, function(){
		equipmentActions.verifyAssignedCPEUpdated();
		Utils.clearLocalStorage();
	});
	
	Then(/^Assigned CPE record should get deleted$/, function(){
		equipmentActions.verifyAssignedCPEDeletion();
		Utils.clearLocalStorage();
	});
	
	Then(/^Assigned CPE record should get Unassigned Equipment$/, function(){
		equipmentActions.verifyAssignedCPEUnassigned();
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Equipment should get added in "ISP Site Equipment" table$/, function(){
		equipmentActions.verifySiteEquipmentAdded();
		Utils.clearLocalStorage();
	});
	
	Then(/^Site Equiment info should get updated$/, function(){
		equipmentActions.verifySiteEquipmentUpdated();
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Equipment Mapping should be configured$/, function(){
		equipmentActions.verifySiteEquipmentTabChangesSaved("Mapping");
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Equipment Location should get mapped$/, function(){
		equipmentActions.verifySiteEquipmentTabChangesSaved("Location");
		Utils.clearLocalStorage();
	});
	
	Then(/^ISP Site Equipment SSID should get added$/, function(){
		equipmentActions.verifySiteEquipmentTabChangesSaved("SSID");
		Utils.clearLocalStorage();
	});
	
	Then(/^Attachments list should get reload$/, function(){
		//equipmentActions.verifyAttachmentsReloaded();
		Utils.clearLocalStorage();
	});