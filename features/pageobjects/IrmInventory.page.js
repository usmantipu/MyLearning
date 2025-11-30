const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IrmInventory extends Page {
    get inventorySection(){return browser.$('.react-grid-item*=Inventory');}
	get btnInventoryTab(){return this.inventorySection.$('button=Inventory');}
	get inventoryColumns(){return this.inventorySection.$('.MuiDataGrid-columnHeaders').$$('[role="columnheader"]');}
	get firstInventoryRowData(){return browser.$('.react-grid-item*=Inventory').$('.MuiDataGrid-virtualScroller').$$('.MuiDataGrid-cell');}
	get firstInventoryRowTextData(){return browser.$('.react-grid-item*=Inventory').$('.MuiDataGrid-virtualScroller').$$('.MuiTypography-root');}
	get inventoryExpandedData(){return this.inventorySection.$('.MuiDataGrid-virtualScroller').$('.MuiGrid-container').$$('.MuiGrid-item');}
	get inventoryHeaderbuttons(){return browser.$('.react-grid-item*=Inventory').$$('.MuiIconButton-root');}
	get inventoryDrawerHeading(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('h6');}
	get subMenuParent(){return browser.$('[aria-labelledby="nested-list-subheader"]');}
	get inventoryTableView(){return this.subMenuParent.$('div=List');}
	get inventoryCardView(){return this.subMenuParent.$('div=Tiles');}
		InventorySelectedOptions(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get inventoryTableHalf(){return this.subMenuParent.$('div=Half');}
	get inventoryTableFull(){return this.subMenuParent.$('div=Full');}
	get inventoryMeatBall(){return  this.inventorySection.$('[data-testid="MenuIcon"]');}
	get inventoryTableInlineEditing(){return browser.$('li*=Enable Inline Editing');}
	get inventoryTableExportCSV(){return browser.$('li*=Export CSV');}
	get isListViewSelected(){return browser.$('.MuiListItem-root*=List').$('svg');}
	get isTileViewSelected(){return browser.$('.MuiListItem-root*=Tiles').$('svg');}
	get noInventoryIsPresent(){return browser.$('div=No Data Available...');}
		getParaElement(parentelement) {return parentelement.$('.MuiTypography-root');}
		getParaButtonElement(parentelement) {return parentelement.$('.MuiLink-root');}
	//inline editing 
	
	inputInlineEditing(parentelement){return parentelement.$('input');}
	saveInlineEditing(parentelement){return parentelement.$('[aria-label="Save"]');}
	closeInlineEditing(parentelement){return parentelement.$('[aria-label="Close"]');}
    
    get inventorySearch(){return this.inventorySection.$('input');}
	get inventoryCardViewVerification(){return this.inventorySection.$('.MuiGrid-root');}
	 selectProfileItem(profileitem){return browser.$('span='+profileitem);}
	get dockedVendor(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[name="items.0.vendor"]').$('input');}
	 selectVendorItem(vendor){return browser.$('li='+vendor);}
	get inventoryfirstRowData(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[2]/div/div[1]/div[1]/div/div/div/div[2]/div/div').$$('.MuiTypography-root');}
    get btnCloseDialog(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[aria-label="Close"]');}
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get getAllText(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiTypography-root');}
	    changePoStatus(newStatus){return browser.$('li='+newStatus);}
	get btnSaveChanges(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save Changes');}
		verifyItem(itemName){return browser.$('.MuiTableCell-root='+itemName);}
	btnpoItem(parent){return parent.$('button');}
	get menuOfinventory(){return browser.$('.react-grid-item*=Inventory').$('[data-testid="MenuIcon"]');}
	get btnChooseColumn(){return browser.$('li=Choose Columns');}
	//locksearch
	get openLockUnlockOption(){return browser.$('[data-testid="LockOpenIcon"]');}
	get lockedOption(){return browser.$('[data-testid="LockIcon"]');}
	get lockedKey(){return this.inventorySection.$('.MuiInputAdornment-root');}
	get btnAddInventory(){return browser.$('[aria-label="Add Inventory"]');}
	//addInventory
	get locationField(){return browser.$('.MuiFormControl-root*=Location').$('input');}
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
	get btnScanEquipment(){return browser.$('.MuiFormControlLabel-root*=Scan Equipment Field').$('.MuiSwitch-switchBase');}
		equipmentFieldOption(optionName){return browser.$('[name="'+optionName+'"]');}
		equipmentFieldGetAdded(optionName){return browser.$('.MuiFormControlLabel-root*='+optionName);}
	get btnUploadCSV(){return browser.$('.MuiButtonBase-root=Upload CSV');}
	get btnDownloadTemplate(){return browser.$('.MuiButtonBase-root=Download Template');}
	get btnSaveInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save');}
	get btnCancelInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Cancel');}
	get inventoryItemSerialAfterCreate(){return browser.$('.MuiFormControl-root*=Serial No.').$('input');}
	get EpAddedToInventoryParent(){return browser.$('.MuiFormControl-root*=Equipment Profile');}
	get EpAddedToInventory(){return this.EpAddedToInventoryParent.$('input');}
}
module.exports = new IrmInventory();
