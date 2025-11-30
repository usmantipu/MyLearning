"use strict";
var Page = require('./page')

class equipment extends Page{

	get equipmentMenu(){return browser.$('[title="Equipment"]');}
	get pageHeading(){return browser.$('h3=Equipment');}
	get inventoryTab(){return browser.$('button=Inventory');}
	get assignedCPETab(){return browser.$('button=Assigned CPE');}
	get siteEquipment(){return browser.$('button=Site Equipment');}
	get siteLocation(){return browser.$('.spn2*=Site Location');}
	get siteLocationTabByLink() {return browser.$('a[href="/equipmentManager/siteLocation');}
	get siteEquipmentTabByLink() {return browser.$('a[href="/equipmentManager/siteEquipment"]');}
	get assignedCPETabByLink() {return browser.$('a[href="/equipmentManager/assignedCPE"]');}
	get inventoryTabByLink() {return browser.$('a[href="/equipmentManager/inventory"]');}

	get actionsMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[1]/div[2]/div/div/button/span[1]');}

	/*Site location*/
	get siteLocationHemburgerMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[1]/div[2]/div/div/button')}
	get btnAddSite(){return browser.$('span=Site');}
	
	/*Site location dock*/
	get penIcon(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div[2]/div/div[1]/div/div/div[1]/div[2]/button/span[1]');};
	get _location(){return browser.$('[name="location_name"]');}
	get height(){return browser.$('[name="height"]');}
	get lattidue(){return browser.$('[name="latitude"]');}
	get longitude(){return browser.$('[name="longitude"]');}
	get city(){return browser.$('[name="city"]');}
	get state(){return browser.$('//*[@id="app-inner"]/div[2]/div/main/div[4]/div/div[4]/div/div/div/div[9]');}
	get zip(){return browser.$('[name="zip"]');}
	get notes(){return browser.$('[name="note"]');}
	get btnSave(){return browser.$('button=Save');}
	get confirmationMsg(){return browser.$('#client-snackbar');}
	
	/*Site location table*/
	get siteLocationTable(){return browser.$('//*[@id="app-inner"]/div[2]/div/main/div[2]/div[2]');}
	get colLocation(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]/div/p');}//its same for all tabs
	hoverFirstRecord(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]').moveTo();}//its same for all tabs
	get smDotMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/div[2]');}//its same for all tabs
	get miDelete(){return browser.$('li=Delete');}
	get miUnAssigned(){return browser.$('li=Unassign');}
	get contactDeletionConfirmationMsg(){return browser.$('#client-snackbar');}
	
	/*Site Margin*/
	get siteMarginTab(){return browser.$('span=Site Margin');}
	get locationExpenseFirstRow(){return browser.$('[name="revenueList.0.description"]');}
	get locationCostFirstRow(){return browser.$('[name="revenueList.0.cost"]');}
	get btnSaveSiteMargin(){return browser.$('button=Save');}
	get btnDelete(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div/div[3]/button[1]');}
	get MarginTitle(){return browser.$('b=Margin');}
	get dotMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div[2]/div/div[2]/div/div/div[1]/div[2]/button/span[1]');}
	get btnLoadReport(){return browser.$('li=Load Report');}
	get btnEditExpense(){return browser.$('li=Edit Expenses');}
	
	/*Site Contacts*/
	get siteContactsTab(){return browser.$('span=Site Contacts');}
	get btnAddNew(){return browser.$('button=Add New');}
	get description(){return browser.$('[name="description"]');}
	get	company(){return browser.$('[name="company"]');}
    get	fName(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[4]/div/div/input');}
    get	mName(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[6]/div/div/input');}
    get	lName(){return browser.$('[name="last_name"]');}
    get	address1(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[7]/div/div/input');}
    get	address2(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[8]/div/div/input');}
    get	contactCity(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[9]/div/div/input');}
    get	contactState(){return browser.$('/html/body/section/div/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[10]/div/div/div');}
    get	contactZip(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[1]/div[11]/div/div/input');}
    get	homePhone(){return browser.$('[name="home_phone"]');}
    get	workPhone(){return browser.$('[name="work_phone"]');}
    get	cellPhone(){return browser.$('[name="cell_phone"]');}
    get	fax(){return browser.$('[name="fax_phone"]');}
	get btcSaveContactDeatils(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div[2]/div/span/button/span[1]');}
	get contactAdditionConfirmationMsg(){return browser.$('#client-snackbar');}
	get siteContactSection(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div/div/div/div/div[2]/div/div[1]/h6');}
	get btnHoverEdit(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div/div[2]/div/div/div/div/div/div/div[2]/div/div[2]/div/span[1]');}
	get imsi(){return browser.$('[name="imsi"]');}
	
	/*Confirmation box*/
	get btnYesDeleteSite(){return browser.$('.MuiButton-label=Yes');}
	
	/*Received Inventory*/
	get hamburgerMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[1]/div[2]/div/div/button/span[1]');}
	get receiveInventory(){return browser.$('/html/body/div[2]/div[3]/nav/div[1]/div/div/div/div[3]/div');}
	get model(){return browser.$('(//input[@name="model"])');}
	get inventory_description(){return browser.$('(//input[@name="description"])[1]');}
	get make(){return browser.$('(//input[@name="make"])');}
	get provisioned_Date(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[4]/div[2]/div/div[1]/div[4]/div/div/input');}
	get owner_Select(){return browser.$('(//div[@id="select-owner"])');}
	get dropdownMenuOption1() {return browser.$('//*[@id="menu-owner"]/div[3]/ul/li[2]');}
	get assert_tag(){return browser.$('(//input[@name="asset_tag"])');}
	get type_Select(){return browser.$('#select-type');}
	get serial_Number(){return browser.$('(//input[@name="serial_number"])');}
	get mac_Address(){return browser.$('(//input[@name="mac_address"])');}
	get manager_Select(){return browser.$('#mui-component-select-manage');}
	get ip_Address(){return browser.$('(//input[@name="ip_address"])');}
	get Inventoryadd(){return browser.$('button=Add');}
	get equipmentProfile(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div/div[1]/div[1]/div');}
	
	/*Update Received Inventory*/
	get firstInventory(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[2]/div[1]/div/div/div/div[2]/div/div/div[3]');}
	get editModel() {return browser.$('(//input[@name="model"])[1]');}
	get editMake() {return browser.$('(//input[@name="make"])[1]');}
	get editAssertTag() {return browser.$('(//input[@name="asset_tag"])[1]');}
	get editSerial_Number(){return browser.$('(//input[@name="serial_number"])[1]');}
	get editMac_Address(){return browser.$('(//input[@name="mac_address"])[1]');}
	get editIp_Address(){return browser.$('(//input[@name="ip_address"])[1]');}
	get editOwner_Select(){return browser.$('(//div[@id="select-owner"])[1]');}
	get editManager_Select(){return browser.$('#mui-component-select-status');}
	get inventoryUpdate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div/div[2]/div[1]/div[16]/span[1]/span/button');}
	
	/*Assigned CPE*/
	get colAssignedCPE(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
	get assignedCPEUpdate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[2]/div/div[16]/span[1]/span/button/span[1]');}
	get aCpDotMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div[2]/div/div[2]/div/div/div[1]/div[2]/button/span[1]');}
	get aCpEditMenu(){return browser.$('li=Edit');}
	
	/*Site Equipment*/
	get addEquipment() { return browser.$('span=Equipment Profile');}
	get equipmentModel() {return browser.$('(//input[@name="model"])[1]');}
	get equipmentMake()  {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[4]/div[2]/div/div[1]/div[1]/div/div/input');}
	get equipment_manager_Select(){return browser.$('#mui-component-select-manage');}
	get equipmentDownload() {return browser.$('[name="download"]');}
	get equipmentUpload() {return browser.$('[name="upload"]');}
	get equipmentNote() {return browser.$('(//input[@name="note"])[1]');}
	get equipmentAdd() {return browser.$('span=Add');}
	get equipmentUpdate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[1]/div/div/div[2]/div[1]/div[18]/span[1]/span/button');}
	
	/*Site Equipment Mapping*/
	siteEquipmentMappingTab(tab){return browser.$('span='+tab);}
	get mappingAzimuth() {return browser.$('[name="azimuth"]');}
	get down_tilt(){return browser.$('[name="down_tilt"]');}
	get elevation(){return browser.$('[name="elevation"]');}
	get power(){return browser.$('[name="power"]');}
	get beam_width(){return browser.$('[name="beam_width"]');}
	get beam_height(){return browser.$('[name="beam_height"]');}
	get range(){return browser.$('[name="range"]');}
	get fade_margin(){return browser.$('[name="fade_margin"]');}	
	get  mappingColor(){return browser.$('(//input[@name="color"])[2]');}
	get saveMapping(){return browser.$('(//*[button="Save"])[2]')};
	
	/*Site Equipment Location*/
	get siteLocation_select() {return browser.$('#mui-component-select-site_id');}
	get saveLocation(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[3]/div[3]/div[10]/span/button')};
	
	/*Site Equipment SSID*/
	get penIconSsid(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div[2]/div/div[5]/div/div/div[1]/div[2]');}
	get ssidName(){return browser.$('[name="equipment_ssid.0.ssid"]');}
	
	get ssidFrequency(){return browser.$('[name="equipment_ssid.0.frequency"]');}
	get addSSID(){
		var mostParent = browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[4]/form/div[1]/div[3]');
		var allSvgs = mostParent.$$('svg');
		return allSvgs[1];
		};
	get delSSID(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[4]/form/div[1]/div[3]/svg[1]/path');	}
	get saveSSID(){return browser.$('span=Save');}
	
	/*Site Equipment Attachment*/
	get refresh_attachment(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[5]/div[2]/div/button');}
	get upload_file(){return browser.$('.file-upload');}	
	attachment_Name(attachmentFile){return browser.$('h6='+attachmentFile);}
	
	open(path){	super.open(path);	}
}
module.exports = new equipment();