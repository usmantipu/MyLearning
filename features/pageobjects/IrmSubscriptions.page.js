const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IrmSubscriptions extends Page {

	get infraLocationsParent(){return browser.$('.react-grid-item*=Infrastructure Locations');}
    get btnAddSite(){return browser.$('[vispdata-testid="add-infrastructure-location-button"]');}
	get siteName(){return browser.$('.MuiFormControl-root*=Name').$('input');}
	get siteProfileDropDown() {return browser.$('//div[@name="site_profile_id"]');}
	get selectSiteProfileFromDropDown(){return browser.$('//ul[@role="listbox"]/li[1]');}
	get elevationSite() {return browser.$('.MuiFormControl-root*=Elevation').$('input');}
	get siteData_Name() {return browser.$('[name="site_data.0.value"]'); }
	get btnSave(){return browser.$('.MuiDrawer-paperAnchorRight').$('button=Save');}//button/span[text()="Save"]
	get elevationSubLocation(){ return browser.$('[name="amsl_total"]');}
	get siteProfileTypeDropDown(){ return browser.$('.MuiFormControl-root*=Infrastructure Profile');}
	get siteProfileTypeInput(){ return this.siteProfileTypeDropDown.$('input');}
	get selectSiteProfileTypeOption(){ return browser.$('//ul[@name="site_profile_id"]/li[2]');}
    get	siteAddress2(){return browser.$('.MuiFormControl-root*=Address 2').$('input');}
	get lattidue(){return browser.$('.MuiFormControl-root*=Latitude').$('input');}
	get longitude(){return browser.$('.MuiFormControl-root*=Longitude').$('input');}
    get generateCoordinatesUsigAddress(){return browser.$('[aria-label="Geocode the address to get latitude/longitude."]');}
	get city(){return browser.$('.MuiFormControl-root*=City').$('input');}
	get state(){return browser.$('//*[@id="app-inner"]/div[2]/div/main/div[4]/div/div[4]/div/div/div/div[9]');}
	get addSiteStateElement(){return browser.$('.MuiFormControl-root*=State').$('input');}
	get contactStateElement(){return browser.$('.MuiFormControl-root*=State');}
	get contactStateInput(){return this.contactStateElement.$('input');}
	get zip(){return browser.$('.MuiFormControl-root*=Zip').$('input');}
	get zipdropdownValue(){return browser.$('li*=10002');}
	get zipErrorMessage(){return browser.$('.MuiFormControl-root*=Zip').$('.Mui-error');}
    inputByParent(parent){return parent.$('input');}
    siteParentByLableName(label){var allitems = browser.$('.MuiDrawer-paperAnchorRight').$$('.MuiGrid-item');
        for (let i = 0; i < allitems.length; i++) {
            console.log('extracted text is '+allitems[i].getText());
                if(allitems[i].getText().includes(label))
                {
                    return allitems[i];
                }
        }
    }
    get siteHeader(){return browser.$('.drawer-header');}
    get editSiteBtn(){return browser.$$('[vispdata-testid="edit-Location"]')[0];}
    get btnSiteClose(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="CloseIcon"]');}
    get firstRowData(){return this.infraLocationsParent.$('.MuiDataGrid-virtualScrollerContent').$$('.MuiTypography-root');}
    get InfrastructureRowData(){return this.infraLocationsParent.$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell');}
    get btnSiteRecordMenu(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[1]/div[3]/div/div/div/div[2]/div/div/div/div[1]/div/div/button');}
    get btnDeleteItem(){return browser.$('li=Delete');}
    get btnConDialogYes(){return browser.$('.MuiDialog-container').$('button=Yes');}
	get btnConDialogNo(){return browser.$('.MuiDialog-container').$('button=No');}
	get noDataAvailable(){return browser.$('.text-center*=No Data Available...');}
    //Sub-location
    get addSubLocationBtn(){ return browser.$('[vispdata-testid="add-sub-location"]');}
	get subLocation_name(){return browser.$('.MuiFormControl-root*=Name').$('input');}
	get subLocation_elevation(){return browser.$('.MuiFormControl-root*=Elevation').$('input');}
    get btnCloseSubSite(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiGrid-container*=Locations').$('[aria-label="Close"]');}
	 	subSiteHeader(subsitename){return browser.$('#panel1a-header='+subsitename +' (sub-location)');}
    
    /*Site Contacts*/
	get editSiteContactsBtn(){return browser.$('[vispdata-testid="edit-Contacts"]');}
	get btnAddContact(){return browser.$('button=Add Contact');}
	get	company(){return browser.$('.MuiFormControl-root*=Company').$('input');}
    get	fName(){return browser.$('.MuiFormControl-root*=First Name').$('input');}
    get	mName(){return browser.$('.MuiFormControl-root*=MI').$('input');}
    get	lName(){return browser.$('.MuiFormControl-root*=Last Name').$('input');}
	get contactNotes(){return browser.$('.MuiFormControl-root*=Notes').$('input');}
    get	address1(){return browser.$('//*[@id="react-select-5-input"]');}
    get	selectAddress1Suggestion(){return browser.$('//div[@class="MuiPaper-root autocomplete-dropdown-container MuiPaper-elevation1 MuiPaper-rounded"]/div[1]');}
	get	address2(){return browser.$('.MuiFormControl-root*=Address 2').$('input');}
    get	contactCity(){return browser.$('.MuiFormControl-root*=City').$('input');}
    get	state(){return browser.$('//div[@id="react-select-single"]/div[1]');}
    get	selectState_TX(){return browser.$('//div[@id="react-select-2-option-50"]');}
    get	contactZip(){return browser.$('.MuiFormControl-root*=Zip').$('input');}
		contactZipdropdownValue(valueToSet){return browser.$('li='+valueToSet);}
	get	contactNumber(){return browser.$('.MuiFormControl-root*=Number').$('input');}
	get	contactNumberType(){return browser.$$('.MuiFormControl-root*=Type')[1].$('input');}
    get	homePhoneType(){return browser.$('.MuiAutocomplete-popper').$('span*=home');}
    get	workPhoneType(){return browser.$('.MuiAutocomplete-popper').$('span*=work');}
    get	cellPhoneType(){return browser.$('.MuiAutocomplete-popper').$('span*=mobile');}
    get	email(){return browser.$('.MuiFormControl-root*=Email').$('input');}
	get	emailType(){return browser.$('.MuiFormControl-root*=Type').$('input');}
	get	primaryEmailType(){return browser.$('.MuiAutocomplete-popper').$('span*=Primary');}
	get btcSaveContactDeatils(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/span/button');}
	get contactAdditionConfirmationMsg(){return browser.$('.MuiAlert-message');}
	get btnSaveContact(){return browser.$('.drawer-footer').$('span=Save');}
	get getAllsaveButtons(){return browser.$$('button=Save');}
    get closeEditContactDock(){return browser.$$('.MuiDrawer-paperAnchorRight')[1].$('[aria-label="Close"]');}
    siteDockItemByName(nametoFind){return browser.$('.MuiAccordion-root*='+nametoFind);}
	siteDockDetailsByName(nametoFind){ var allDetailsSections = browser.$$('.MuiAccordion-root')
												for(var i=0; i<=allDetailsSections.length; i++){
												if (allDetailsSections[i].getText().includes(nametoFind))
													{
														return allDetailsSections[i].$$('.MuiTypography-root');
													}	
												}

	}
    get updateContactsAddressParent(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div/div[9]');}
    get contactHeader () {return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div[2]/div/div/div/div').$('#panel1a-header')};
	get NoContactText () {return browser.$('h6=No Contacts available.')};
	get contactTitle () {return this.contactHeader.$('.MuiTypography-root')};
    get deleteIcon () {return browser.$('[data-testid="DeleteIcon"]')};

    //search site field
    get btnCloseSiteSearch(){return this.infraLocationsParent.$('[data-testid="CloseIcon"]');}
    get btnSiteSearch(){return this.infraLocationsParent.$('[data-testid="SearchIcon"]');}
	get btnCloseSiteSearch(){return this.infraLocationsParent.$('[data-testid="CloseIcon"]');}
	get inputSiteSearch(){return this.infraLocationsParent.$('input');}
	//Inventory
	get inventorySection(){return browser.$('.react-grid-item*=Inventory');}
	get btnInventoryTab(){return this.inventorySection.$('button=Inventory');}
	get btnAddInventory(){return browser.$('[aria-label="Add Inventory"]');}
	get locationField(){return browser.$('.MuiFormControl-root*=Location').$('input');}
	get txtPopUpContent(){return browser.$('.MuiDialogContent-root');}
	get InventoryProfileField(){return browser.$('[name="inventory_profile_id"]');}
		addInventoryFields(fieldName){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormLabel-root*='+fieldName);}
		getInputValue(parent){return parent.$('input');}
	get inventoryprofile(){return browser.$('.MuiFormControl-root*=Inventory Profile').$('input');}
	get inventoryPurchasePrice(){return browser.$('.MuiFormControl-root*=Purchase Price').$('input');}
	get InventoryNote(){return browser.$('.MuiFormControl-root*=Note').$('input');}
	get inventoryItemSerial(){return browser.$('.MuiFormControl-root*=Serial No.').$('input');}
	get btnAddStock(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="AddCircleOutlineIcon"]');}
	get inventoryItemSecondSerial(){return browser.$$('.MuiFormControl-root*=Serial No.');}
	get btnRemoveStock(){return browser.$('.MuiDrawer-paperAnchorRight').$$('[data-testid="HighlightOffIcon"]');}
	get chkEquipmentProfile(){return browser.$('[name="flag_same_profile"]');}
	get EquipmentProfileID(){return browser.$('.MuiFormControl-root*=Equipment Profile').$('input');}
	get EquipmentProfile(){return browser.$('.MuiFormControl-root*=Equipment Profile').$('input');}
	get inputEquipment(){return browser.$('.MuiFormControl-root*=Equipment').$('input');}
	get btnScanEquipment(){return browser.$('.MuiFormControlLabel-root*=Scan Equipment Field').$('.MuiSwitch-switchBase');}
		equipmentFieldOption(optionName){return browser.$('[name="'+optionName+'"]');}
		equipmentFieldGetAdded(optionName){return browser.$('.MuiFormControlLabel-root*='+optionName);}
	get changeReceiveDate(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormControl-root*=Received Date').$('input');}
	get btnUploadCSV(){return browser.$('.MuiButtonBase-root=Upload CSV');}
	get btnDownloadTemplate(){return browser.$('.MuiButtonBase-root=Download Template');}
	get btnSaveInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save');}
	get btnCancelInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Cancel');}
	get inventoryItemSerialAfterCreate(){return browser.$('.MuiFormControl-root*=Serial No.').$('input');}
	get EpAddedToInventoryParent(){return browser.$('.MuiFormControl-root*=Equipment Profile');}
	get EpAddedToInventory(){return this.EpAddedToInventoryParent.$('input');}
	get inventoryMeatBall(){return  this.inventorySection.$('[data-testid="MenuIcon"]');}
	get inventoryHeaderbuttons(){return browser.$('.react-grid-item*=Inventory').$$('.MuiIconButton-root');}
	get inventoryTableView(){return this.subMenuParent.$('div=List');}
	get searchInventoryItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[placeholder="Search"]');}
	get dockedInventoryItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell');}
    get btnInvItemRecordMenu(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiDataGrid-virtualScrollerContent').$('[data-testid="MoreVertIcon"]');}
	get btn3DotMenu(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="MoreVertIcon"]');}
	get liInventoryProfiles(){return browser.$('[vispdata-testid="view-inventory-profile"]');}
	get btnInventoryProfiles(){return browser.$('[vispdata-testid="view-add-inventory-profile-form"]');}
	get inputModel(){return browser.$('[name="model"]');}
	get divManufacturer(){return browser.$('.MuiAutocomplete-root*=Manufacturer').$('input');}
	get inputSku(){return browser.$('[name="sku"]');}
	get inputDescription(){return browser.$('[name="description"]');}
	get btnAdd(){return browser.$('[vispdata-testid="add-inventory-profile"]');}
	get btnUpdate(){return browser.$('[vispdata-testid="update-inventory-profile"]');}
	get btnDeleteProfile(){return browser.$('.drawer-footer').$('button=Delete Profile');}
	//Equipment
	get btnEquipmentProfile(){return browser.$('[vispdata-testid="view-profiles"]');}
	get btnAddEquipment(){return browser.$('[vispdata-testid="add-equipment"]');}
	get btnequipmentSearch(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="SearchIcon"]');}
	get equipmentSearch(){return browser.$('.react-grid-item*=Equipment').$('input');}
	get equipmentClearSearch(){return browser.$('.react-grid-item*=Equipment').$('[data-testid="CloseIcon"]');}
	get btnEquipmentHeaderMenu(){return this.inventorySection.$('[data-testid="MoreVertIcon"]');}
	get selectEquipmentListItem(){return browser.$('.MuiListItem-root=List');}
	get selectEquipmentTilesItem(){return browser.$('.MuiListItem-root=Tiles');}
	get firstEquipmentProfile(){return browser.$('.react-grid-item*=Inventory').$('h6');}
	get equipmentprofile(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Equipment Profile').$('div');}
	get equipmentprofileInput(){return this.equipmentprofile.$('input');}
	get selectFirstProfile(){return browser.$('#menu-profile_id').$('.MuiMenu-list').$$('.MuiMenuItem-root')[1];}
		selectCustomEquipmentProfile(customEquipment){return browser.$('#menu-profile_id').$('.MuiMenu-list').$('.MuiMenuItem-root*=' + customEquipment);}
		selectProvidedEquipmentProfile(equipProfile){return browser.$('#menu-profile_id').$('.MuiMenu-list').$('li='+equipProfile);}
	get profileDescription(){return browser.$('.MuiFormControl-root*=Description').$('input');}
	get addEquipmentDialogHeader(){return browser.$('.MuiDrawer-paperAnchorRight*=Equipment');}
	get profilelocation(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Location').$('div');}
	get profilelocationInput(){return this.profilelocation.$('input');}
	get selectFirstLocation(){return browser.$('#menu-location_id').$('.MuiMenu-list').$$('.MuiMenuItem-root')[1];}
		selectCustomLocation(customlocation){return browser.$('#menu-location_id').$('.MuiMenu-list').$('.MuiMenuItem-root=' + customlocation);}
	get equipmentUpdateIpAddressZero(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[name="equipment_data.0.value"]');}
	get macAddressEquipment(){return browser.$('.MuiFormControl-root*=Radio MAC').$('input');}
	get ethernetMacEquipment(){return browser.$('.MuiFormControl-root*=Ethernet MAC').$('input');}
	get ipAddressEquipment(){var allfields =  browser.$$('.MuiTextField-root');
												 for(var i=0; i<=allfields.length; i++){
												if (allfields[i].getText().includes('IP Address'))
													{
														return allfields[i].$('input');}}}
	get updateEthernetMACaddressWhileCopy(){return browser.$('[name="equipment_data.2.value"]');}
	get updateIpAddressEquipment(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormControl-root*=IP Address').$('input');}
	get updateMacAddressWhileCopy(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormControl-root*=Radio MAC').$('input');}
	firstEquipmentCard(profilename){return browser.$('h6*='+profilename);}												
	get dockedSearhField(){return browser.$('.MuiDrawer-paperAnchorRight').$('[placeholder="Search"]');}
	get dockedEquipmentItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiDataGrid-virtualScrollerContent').$$('.MuiDataGrid-cell');}
	get inventoryFromEquipment(){return this.addEquipmentDialogHeader.$('.MuiFormControl-root*=Inventory Item').$('input');}
	get btnDotEquiment() {return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiDataGrid-virtualScrollerContent').$('[data-testid="MoreVertIcon"]');}
	
	//Equipment Assembly
	get btnEquipmentAssembly(){return browser.$('[vispdata-testid="view-assemblies"]');}
	get	btnCopyAssembly(){return browser.$('[vispdata-testid="copy-assembly-icon"]');}
	get	btnEditAssembly(){return browser.$('[vispdata-testid="edit-assembly-icon"]');}
	get	allEAColumns(){return browser.$('.react-grid-item*=Inventory').$('.MuiDataGrid-main').$$('.MuiDataGrid-columnHeaderTitle');}
	get equipmenAssemblyNoSearchResult(){return browser.$('span=No Equipment Assembly available.');}
	get btnAddChild(){return browser.$('[vispdata-testid="add-child-equipment"]');}
	get btnFromUnassigned(){return browser.$('div=From Unassigned');}
	get expandEquipmentDropdown(){return browser.$('[name="equipment_id"]');}
	selectProvidedEquipment(equipmentName){return browser.$('li='+equipmentName);}
	get editEquipmentHeader(){return browser.$('h6*=Edit Equipment');}
	get Assemblylocation(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormControl-root*=Location').$('div');}
    //Purchase Order
	get puchaseOrderSection(){return browser.$('.react-grid-item*=Purchase Orders');}
	get btnCreatePurchaseOrder(){return browser.$('[vispdata-testid="create-purchase-order"]');}
	get dockedProfileItem(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div[1]/div/div/div');}
	get dockedProfileItemInput(){return this.dockedProfileItem.$('input');}
	get dockedVendor(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div[2]/div');}
	get dockedVendorInput(){return this.dockedVendor.$('input');}
	get dockedquantity(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiInputBase-input')[2];}
	get	autoComplete(){return browser.$('.MuiAutocomplete-popper');}
	get btnContinue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Continue');}
	get poSummaryHeader(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('h6=Purchase Order Summary');}
	get btnCreatePO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Create PO');}
	get purchaseOrderMeatBall(){return  this.puchaseOrderSection.$('[data-testid="MenuIcon"]');}
	get purchaseHeaderbuttons(){return browser.$('.react-grid-item*=Purchase Orders').$$('.MuiButtonBase-root');}
	get purchaseOrderTableView(){return this.subMenuParent.$('div=List');}
	get purchaseOrderCardView(){return this.subMenuParent.$('div=Tiles');}
	get purchaseOrderfirstRowData(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div/div/div[1]').$$('.MuiTypography-root');}
	get btnSaveChanges(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save Changes');}
	get btnOpenNewlyPO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiLink-underlineHover');}
	get allHyperLinks(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiLink-underlineHover');}
	get btnOrderStatus(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="ArrowDropDownIcon"]');}
	get poStatusValue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTypography-root=PARTIAL');}
	    changePoStatus(newStatus){return browser.$('li='+newStatus);}
	get	dottedMenu(){return browser.$('.react-grid-item*=Purchase Orders').$('.MuiDataGrid-virtualScrollerContent').$('[data-testid="MoreVertIcon"]');}
	get inputNotice(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[6]/div/div/div[1]/div/div/div[2]/div/div[1]/div/div').$('input');}
	get inputID(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[4]/div/div').$('input');}	




	//common methods
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
    get btnSave(){return browser.$('.MuiDrawer-paperAnchorRight').$('button=Save');}
    get btnClose(){return browser.$('.MuiDrawer-paperAnchorRight').$('[aria-label="Close"]');}
	get btnCloseSubItem(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('[data-testid="CloseIcon"]');}
	get subMenuParent(){return browser.$('[aria-labelledby="nested-list-subheader"]');}
	get isListViewSelected(){return browser.$('.MuiListItem-root*=List').$('svg');}
	get isTileViewSelected(){return browser.$('.MuiListItem-root*=Tiles').$('svg');}
	get isErrorMsgExist(){return browser.$('.Mui-error').isExisting();}
	get allErrorMsgs(){return browser.$('.MuiDrawer-paperAnchorRight').$('.drawer-wrapper').$$('.Mui-error');}
	get btnSaveSubItem(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('button=Save');}
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnEquipmentFromSetting(){return browser.$('//*[@id="settings-tab-2"]');}
	
	

}
module.exports = new IrmSubscriptions();