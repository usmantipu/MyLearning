"use strict";
var Page = require('./page')

class equipmentAssembliesSearch extends Page{

	get equipmentMenu(){return browser.$('[aria-label="IRM"]');}
	get pageHeading(){return browser.$('.MuiTypography-root=Infrastructure Resource Management');}
	get infrastructureLocationCardHeading(){return browser.$('.MuiTypography-root=Infrastructure Locations');}
	get equipmentProfilesCardHeading(){return browser.$('.MuiTab-textColorPrimary=Equipment');}
	get equipmentAssembliesCardHeading(){return browser.$('.MuiTab-textColorPrimary=Equipment Assemblies');}
	get inventoryCardHeading(){return browser.$('.MuiTab-textColorPrimary=Inventory');}
	get purchaseOrdersCardHeading(){return browser.$('h6=Purchase Orders');}
	get subMenuParent(){return browser.$('[aria-labelledby="nested-list-subheader"]');}
	/*Site location*/
	get siteLocationHemburgerMenu(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//div[@role="table"]//button')}
	get siteActionsMenu(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//span/button[3]');}
	get siteSearch(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//span/button[2]');}
	get selectFirstSite(){return browser.$('//div[@class="react-grid-layout layout dashboard-Quad"]/div[1]//div[@role="table"]//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div/div[2]')}
	/*Add Site location*/
	
	get btnAddSite(){return browser.$('[vispdata-testid="add-infrastructure-location-button"]');}
	get siteName(){return browser.$('.MuiFormControl-root*=Name').$('input');}
	get elevationSite() {return browser.$('.MuiFormControl-root*=Elevation (ft)').$('input');}
	get btnSave(){return browser.$('[vispdata-testid="add-infrastructure-location-button"]');}//button/span[text()="Save"]
	get siteProfileTypeDropDown(){ return browser.$('.MuiFormControl-root*=Infrastructure Profile');}
	get siteProfileTypeInput(){ return this.siteProfileTypeDropDown.$('input');}
	siteParentByLableName(label){var allitems = browser.$('.MuiDrawer-paperAnchorRight').$$('.MuiGrid-item');
										for (let i = 0; i < allitems.length; i++) {
											console.log('extracted text is '+allitems[i].getText());
												if(allitems[i].getText().includes(label))
												{
													return allitems[i];
												}
										}
	}
	inputByParent(parent){return parent.$('input');}
	get	siteAddress2(){return browser.$('.MuiFormControl-root*=Address 2').$('input');}
	get lattidue(){return browser.$('.MuiFormControl-root*=Latitude').$('input');}
	get longitude(){return browser.$('.MuiFormControl-root*=Longitude').$('input');}
	get generateCoordinatesUsigAddress(){return browser.$('[aria-label="Geocode the address to get latitude/longitude."]');}
	get city(){return browser.$('.MuiFormControl-root*=City').$('input');}
	get addSiteStateElement(){return browser.$('.MuiFormControl-root*=State').$('input');}
	get zip(){return browser.$('.MuiFormControl-root*=Zip').$('input');}
	get zipdropdownValue(){return browser.$('li*=10002');}
	get zipErrorMessage(){return browser.$('.MuiFormControl-root*=Zip').$('.Mui-error');}
	get noDataAvailable(){return browser.$('.text-center*=No Data Available...');}
	get btnequipmentSearch(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="SearchIcon"]');}
	get equipmentSearch(){return browser.$('.react-grid-item*=Equipment').$('input');}
	get equipmentClearSearch(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="CloseIcon"]');}
	get btnEquipmentHeaderMenu(){return this.inventoryParent.$('[data-testid="MoreVertIcon"]');}
	get selectEquipmentListItem(){return this.subMenuParent.$('div=List');}
	get selectEquipmentTilesItem(){return this.subMenuParent.$('div=Tiles');}
	get profileDescription(){return browser.$('.MuiFormControl-root*=Description').$('input');}
	get addEquipmentDialogHeader(){return browser.$('.MuiDrawer-paperAnchorRight*=Equipment');}
	get profilelocation(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Location').$('div');}
	get profilelocationInput(){return this.profilelocation.$('input');}
	get equipmentprofile(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Equipment Profile').$('div');}
	get equipmentprofileInput(){return this.equipmentprofile.$('input');}
	get macAddressEquipment(){return browser.$('.MuiFormControl-root*=Radio MAC').$('input');}
	get ethernetMacEquipment(){return browser.$('.MuiFormControl-root*=Ethernet MAC').$('input');}
	//get ipAddressEquipment(){return browser.$('[name="equipment_data.10.value"]');}

	get ipAddressEquipment(){var allfields =  browser.$$('.MuiTextField-root');
	 										for(var i=0; i<=allfields.length; i++){
											if (allfields[i].getText().includes('IP Address'))
												{
													return allfields[i].$('input');}}}

	get isErrorMsgExist(){return browser.$('.Mui-error').isExisting()}
	get allErrorMsgs(){return browser.$('.MuiDrawer-paperAnchorRight').$('.drawer-wrapper').$$('.Mui-error');}
	get inventoryFromEquipment(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Inventory Item').$('input');}
	get addNewInventoryItem (){return browser.$('[label="Add New Inventory Item"]');}
	// get inventoryItemSerialNumber (){return browser.$('[label="Add New Inventory Item"]');}

	get inventoryItemSerialNumber (){return browser.$('.MuiFormControl-root*=Serial No.').$('input');}
	get inventorySaveBtn (){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[1]/div[2]/div[3]/div[2]/div/div[3]/span/button');}

	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get btnAddEquipmentFromSiteMenu(){return browser.$('[aria-label="site location"]').$('button');}
	get btnAddEquipmentFromSite(){return browser.$('li=Add Equipment');}
	get btnEquipmentAssembly(){return browser.$('[vispdata-testid="view-assemblies"]');;}
	get	btnCopyAssembly(){return browser.$('[aria-label="Copy Assembly"]');}
	get searchTextBox() {return browser.$('.MuiInputBase-adornedStart').$('input');}
	get equipmentAssemblyInListView() {return browser.$$('.MuiDataGrid-virtualScrollerRenderZone')[1].$$('.MuiDataGrid-cell')[3];}
	get highlightedSearchText () {return browser.$('.highlight-text');}

	highlightedSearchTexts (){var allfields =  browser.$$('.highlight-text');
		// for(var i=0; i<=allfields.length; i++)
			{
				// console.log("highlighted records are: ", allfields.length);
				return allfields.length;
	   		// if (allfields[i].getText().includes('IP Address'))
		   	// {
			//    return allfields[i].$('input');}
			}}

	get lockOpenIcon () {return browser.$('[data-testid="LockOpenIcon"]');}
	get serialOPtionContextMenu () {return browser.$('span=Serial');}
	get SKUOPtionContextMenu () {return browser.$('span=SKU');}
	get manufacturerOPtionContextMenu () {return browser.$('span=Manufacturer');}
	get MACOPtionContextMenu () {return browser.$('span=Mac');}
	get IPAddressOPtionContextMenu () {return browser.$('span=IP Address');}
	get locationOPtionContextMenu () {return browser.$('span=Location');}
	get firstEquipmentAssemblyRowData(){return browser.$$('.MuiDataGrid-virtualScrollerContent')[1].$$('.MuiDataGrid-cell')[0];}
	get serialSelectedInSearch () {return browser.$('div*= Serial');}
	get SKUSelectedInSearch () {return browser.$('div*= SKU');}
	get SKUSelectedValue () {return browser.$('div*= SKU').$('.MuiTypography-body1');}
	get manufacturerSelectedInSearch () {return browser.$('div*= Manufacturer:');}
	get manufacturerValue () {return browser.$('div*= Manufacturer').$('.MuiTypography-body1');}
	get MACSelectedInSearch () {return browser.$('div*= Mac:');}
	get IPAdressSelectedInSearch () {return browser.$('div*= IP Address:');}
	get locationSelectedInSearch () {return browser.$('div*= Location:');}
	get equipmentSearchCloseIcon(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="CloseIcon"]');}
	get copyAssemblyBtn () {return browser.$('[aria-label="Copy Assembly"]')[0];}
	get assemblyDescription(){return browser.$('.MuiFormControl-root*=Description').$('input');}
	get copyAssemblySaveBtn(){return browser.$('.drawer-footer').$('button=Save');}
	get closeBtnCopyAssemblyPopup(){return browser.$$('.docker-buttons')[0].$('[data-testid="CloseIcon"]');}
	get lockedIconInSearch(){return browser.$('[data-testid="LockIcon"]');}
	get copyEquipRadioMACAdress(){return browser.$('[name="equipment_data.0.value"]');}
	get copyEquipEthernetAdress(){return browser.$('[name="equipment_data.1.value"]');}
	// get copyEquipIPAdress(){return browser.$$('#equipment_data.7.value')[1];}
	get copyEquipIPAdress(){return browser.$('//*[@id="equipment_data.7.value"]');}

	get inventoryParent(){return browser.$('.react-grid-item*=Inventory');}
	get inventoryHeaderbuttons(){return this.inventoryParent.$$('.MuiIconButton-root');}
	get inventorySearch(){return this.inventoryParent.$('input');}
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnSettingsEquipment(){return browser.$('#settings-tab-2');}
	get btnInventoryProfileFromMenu(){return browser.$('[vispdata-testid="view-inventory-profile"]');}
	get btnInfrastructureProfileFromMenu(){return browser.$('[vispdata-testid="view-infrastructure-profile"]');}
	get btnAddNewProfileCircleIcon(){return browser.$('[vispdata-testid="view-add-infrastructure-profile-form"]');}
	get btnAddNewInventoryProfile(){return browser.$('[vispdata-testid="view-add-inventory-profile-form"]');}
	get nameOfInfrastructureProfile(){return browser.$('[name="name"]');}
	get summaryOfInfrastructureProfile(){return browser.$('[name="summary"]');}
	get typeOfInfrastructureProfile(){return browser.$$('[name="type"]')[0];}
	get descriptionOfInfrastructureProfile(){return browser.$('[name="description"]');}
	get modelNameInventoryProfile(){return browser.$('[name="model"]');}
	get manufacturerInventoryProfile(){return browser.$('[name="manufacturer"]');}
	get manufacturerAddNew(){return browser.$('[label="Add new manufacturer"]');}
	get manufacturerReadyAddNew(){return browser.$('[name="manufacturer.value"]');}
	get inventorySKU(){return browser.$('[name="sku"]');}
	get descriptionOfInventory(){return browser.$('[name="description"]');}
	get infrastructureProfileCloseIcon () {return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
	get equipmentProfilesTab(){return browser.$('[vispdata-testid="view-equipment-profile-tab"]');}
	get btnCreateEquipmentProfileOnInventoryProfile(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div[2]/div/div[2]/div[3]/button');}
	get createEquipmentProfile(){return browser.$('[vispdata-testid="create-equipment-profile-form"]');}
	get typeOfNewEquipmentProfile(){return browser.$$('[name="type"]')[0];}
	get descriptionOfEquipmentProfile(){return browser.$('[name="description"]');}
	get equipmentProfileClose(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[3]/div/div[1]/div/div[2]/button');}
	get selectTypeAsAP(){return browser.$('//*[@id="menu-type"]/div[3]/ul/li[1]');}
	get descriptionOfNewEquipmentProfile(){return browser.$('[name="description"]');}
	
	get vendorsTab() {return browser.$('button=Vendors');}
	
	get createVendorBtn() {return browser.$('[aria-label="Create a new vendor option for your inventory profiles."]');}
	get vendorName(){return browser.$('[name="name"]');}
	get vendorFN(){return browser.$('[name="contact.first"]');}
	get vendorLN(){return browser.$('[name="contact.last"]');}
	get vendorCompany(){return browser.$('[name="contact.company"]');}
	// get vendorAddressCountry(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[3]/div[8]/div/div/div/div[1]/div[1]');}
	get vendorAddressCountry(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[3]/div[8]/div/div/div/div[1]');}
	get vendorCity(){return browser.$('[name="contact.city"]');}
	get vendorZip(){return browser.$('[name="contact.zip"]');}
	get vendorStateElement(){return browser.$('.MuiFormControl-root*=State');}
	get vendorStateInput(){return this.vendorStateElement.$('input');}
	
	get inventoryProfileCloseBtn(){return browser.$('.settings-drawer-wrapper').$('[aria-label="Close"]');}
	// get vendorZip(){return browser.$('[name="contact.zip"]');}
	get editEquipment () {return browser.$('[aria-label="settings"]');}
	get addChildEquip () {return browser.$('[vispdata-testid="add-child-equipment"]');}
	get newChildEquip () {return browser.$('[vispdata-testid="add-child-new-equipment-option"]');}
	get btnEquipment () {return browser.$('[vispdata-testid="view-profiles"]');}
	get btnAddEquipment () {return browser.$('[vispdata-testid="add-equipment"]');}
	get equipmentprofileChild(){return browser.$('.MuiFormControl-root*=Equipment Profile').$('input');}
	get childEquipmentInventorySaveBtn(){return browser.$$('.drawer-footer')[0].$('button=Save');}
	get childEquipmentSaveBtn(){return browser.$('.drawer-footer').$('button=Save');}
	get newInventoryProfileAddBtn(){return browser.$('.drawer-footer').$('button=Add');}
	get newInfrastructureProfileAddBtn(){return browser.$('.drawer-footer').$('button=Add');}
	get childEquipmentCloseBtn(){return browser.$('/html/body/section/div/div[2]/div[2]/main/div[4]/div/div[5]/div/div[1]/div/div[2]/button/svg');}
	get equipmentDescription(){return browser.$('.MuiFormControl-root*=Description').$('input');}
	get inventoryLocation(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[1]/div[2]/div[3]/div[2]/div/div[2]/div/div[2]/div/div/div').$('input');}
	get saveBtnAddEquipment(){return browser.$('[vispdata-testid="add-equipment-button"]');}
	get closeBtnInfraLocationPopup(){return browser.$('.docker-buttons').$('[data-testid="CloseIcon"]');}
	get btnEquipmentProfileFromMenu(){return browser.$('li*=Equipment Profile');}
	get btnAdd(){return browser.$('[vispdata-testid="create-equipment-profile"]');}
	

	open(path){	super.open(path);	}
}
module.exports = new equipmentAssembliesSearch();
