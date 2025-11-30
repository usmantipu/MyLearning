const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IRMInventoryDetails extends Page {
    get inventorySection(){return browser.$('.react-grid-item*=Inventory');}
	get btnInventoryTab(){return this.inventorySection.$('button=Inventory');}
	get inventoryColumns(){return this.inventorySection.$('.MuiTable-stickyHeader').$$('.MuiGrid-container');}
	get firstInventoryRowData(){return browser.$('.react-grid-item*=Inventory').$('.MuiTableBody-root').$('.MuiTableRow-root').$$('.MuiTableCell-root');}
	get highlightInventoryRowData(){return browser.$('.react-grid-item*=Inventory').$('.highlight-text');}
	get inventoryExpandedData(){return browser.$('.react-grid-item*=Inventory').$('.MuiTableBody-root').$$('.MuiGrid-item');}
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
	get isListViewSelected(){return browser.$('.MuiListItem-button*=List').$('svg');}
	get isTileViewSelected(){return browser.$('.MuiListItem-button*=Tiles').$('svg');}
	get noInventoryIsPresent(){return browser.$('h6=To create a profile, go to Settings > Inventory Profile.');}
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
	get locationField(){return browser.$('[name="location_id"]');}
	get InventoryProfileField(){return browser.$('[name="inventory_profile_id"]');}
		addInventoryFields(fieldName){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiFormLabel-root*='+fieldName);}
		getInputValue(parent){return parent.$('input');}
	get inventoryprofile(){return browser.$('[name="inventory_profile_id"]').$('input');}
	get inventoryPurchasePrice(){return browser.$('.MuiDrawer-paperAnchorRight').$('[name="purchase_price"]');}
	get InventoryNote(){return browser.$('.MuiDrawer-paperAnchorRight').$('[name="note"]');}
	get inventoryItemSerial(){return browser.$('[name="stock_list.0.serial"]');}
	get btnAddStock(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="AddCircleIcon"]');}
	get inventoryItemSecondSerial(){return browser.$('[name="stock_list.1.serial"]');}
	get btnRemoveStock(){return browser.$('.MuiDrawer-paperAnchorRight').$$('[data-testid="HighlightOffIcon"]');}
	get chkEquipmentProfile(){return browser.$('[name="flag_same_profile"]');}
	get EquipmentProfileID(){return browser.$('[name="profile_id"]');}
	get EquipmentProfile(){return browser.$('[name="stock_list.0.profile_id"]');}
	get btnScanEquipment(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiSwitch-switchBase');}
		equipmentFieldOption(optionName){return browser.$('[name="'+optionName+'"]');}
		equipmentFieldGetAdded(optionName){return browser.$('[name="stock_list.0.'+optionName+'"]');}
	get btnUploadCSV(){return browser.$('.MuiButtonBase-root=Upload CSV');}
	get btnDownloadTemplate(){return browser.$('.MuiButtonBase-root=Download Template');}
	get btnSaveInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save');}
	get btnCancelInventory(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Cancel');}
	get inventoryItemSerialAfterCreate(){return browser.$('[name="serial"]');}
	get EpAddedToInventoryParent(){return browser.$('.MuiFormControl-root*=Equipment Profile');}
	get EpAddedToInventory(){return this.EpAddedToInventoryParent.$('input');}

	///////////////////Inventory details  //////////////////////////////
	get inventoryDrawerMeatBall(){return  browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="MenuIcon"]');}
	get firstInventoryDrawerRowData(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiDataGrid-virtualScrollerRenderZone').$$('.MuiDataGrid-cell');}
	get inventoryDrawerColumns(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiDataGrid-columnHeadersInner').$$('.MuiDataGrid-columnHeaderDraggableContainer');}
	get enableDisableSerial(){return browser.$('.MuiFormControlLabel-root*=Serial').$('.MuiButtonBase-root');}
	get closeChooseColumnDetails(){return browser.$('button=Close');}
	get ResetChooseColumnDetails(){return browser.$('button=Restore Defaults');}
	get drawerSearch(){return browser.$('.MuiDrawer-paperAnchorRight').$('input');}
	get btnDotMenu(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="MoreVertIcon"]');}
	get btnDeleteItem(){return browser.$('li=Delete');}
	get txtPopUpContent(){return browser.$('.MuiDialogContent-root');}
	get btnPopUpYes(){return browser.$('.MuiDialogActions-root').$('button=Yes');}
	get btnPopUpNo(){return browser.$('.MuiDialogActions-root').$('button=No');}
	get inventoryText(){return browser.$('h6=Inventory Item');}
	get lblSerialNum(){return browser.$('.MuiFormControl-root*=Serial No.');}
	get lblLocation(){return browser.$('.MuiFormControl-root*=Location');}
	get lblEquipment(){return browser.$('.MuiFormControl-root*=Equipment');}
	get lblReceiveDate(){return browser.$('.MuiFormControl-root*=Received Date');}
	get lblPurchasePrice(){return browser.$('.MuiFormControl-root*=Purchase Price');}
	get lblAssertTag(){return browser.$('.MuiFormControl-root*=Asset Tag');}
	get lblNote(){return browser.$('.MuiFormControl-root*=Note');}
	get inputSerial(){return browser.$('#serial');}
	get serialError(){return browser.$('#serial-helper-text');}
	get inputAssetTag(){return this.lblAssertTag.$('input');}
	get inputLocation(){return this.lblLocation.$('input');}
	get locationDropDown(){return this.lblLocation.$('[data-testid="ArrowDropDownIcon"]');}
	get LocationError(){return browser.$('p=Please select a location');}
	get inputEquipment(){return this.lblEquipment.$('input');}
	get btnCloseSubItem(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('[data-testid="CloseIcon"]');}
	get changeReceiveDate(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[1]/div[2]/div[1]/div[6]/div/div').$('input')}
	get emptyReceiveDateError(){return browser.$('p=Please select a valid date.');}
	get btnSaveInventoryItem(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('button=Save');}
	get btnRestoreInventoryItem(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('button=Restore');}
	get btnRMADotMenu(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('[aria-label="settings"]');}
	get btnCreateRMA(){return browser.$('li=Create RMA');}
	get colRMA(){return browser.$('[data-field="rma_number"]');}
	get colStatus(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[2]/div[2]/div/div/div/div/div[1]/div/div/div[2]/div[1]');}
	get colRMA(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[2]/div[2]/div/div/div/div/div[1]/div/div/div[1]/div[1]');}
	get colVendor(){return browser.$('[aria-label="Vendor"]');}
	get colRD(){return browser.$('[aria-label="Return Date"]');}
	get colRT(){return browser.$('[aria-label="Return Tracking"]');}
	get colSD(){return browser.$('[aria-label="Shipped Date"]');}

	get rmaDrawerParent(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[2]}
	get lblRMADate(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Date');}
	get lblRMAStatus(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Status');}
	get lblRMAVendor(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Vendor');}
	get lblRMANumber(){return this.rmaDrawerParent.$('.MuiFormControl-root*=RMA Number');}
	get lblRMAReturnDate(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Return Date');}
	get lblRMARTN(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Return Tracking Number');}
	get lblRMAShippedDate(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Shipped Date');}
	get lblRMASTN(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Shipped Tracking Number');}
	get lblRMALocation(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Location');}
	get inputVendor(){return this.rmaDrawerParent.$('.MuiAutocomplete-input');}
    vendorName(vendorName){return browser.$('.MuiAutocomplete-popper').$('span*='+vendorName);}
	get inputRMANumber(){return this.rmaDrawerParent.$('.MuiFormControl-root*=RMA Number').$('input');}
	get rmaStatusValue(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Status').$('input');}
	get rmaRDinput(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Return Date').$('input');}
	get rmaRTNinput(){return this.rmaDrawerParent.$('.MuiFormControl-root*=Return Tracking Number').$('input');}
	get rmaShippingDate(){return this.lblRMAShippedDate.$('input');}
	get rmaSTNinput(){return this.lblRMASTN.$('input');}
	get rmaRTNArrow(){return this.lblRMARTN.$('[data-testid="OpenInNewIcon"]');}
	get rmaSTNArrow(){return this.lblRMASTN.$('[data-testid="OpenInNewIcon"]');}
	get rmaLocationInput(){return this.lblRMALocation.$('input');}
	get rmaBtnSave(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[2].$('button=Save');}
	get rmaBtnCancel(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[2].$('button=Cancel');}
	get rmaBtnRestore(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[2].$('button=Restore');}
	get btnCloseRMA(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[2].$('[data-testid="CloseIcon"]');}
	get firstRowOfRma(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[1]/div[1]');}
	get statusOfRMA(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[1]/div[2]');}
	get selectedRMA(){return this.rmaDrawerParent.$('.Mui-selected');}
	get rmaError(){return this.lblRMANumber.$('label');}
	get rDError(){return this.lblRMAReturnDate.$('label');}
	get RTNError(){return this.lblRMARTN.$('label');}
	get SDError(){return this.lblRMAShippedDate.$('label');}
	get STNError(){return this.lblRMASTN.$('label');}
	get activityLogs(){return browser.$('.MuiToolbar-root=Activity Logs');}
	get activityDateCol(){return browser.$('.MuiDataGrid-columnHeaderTitle=Date');}
	get activityTypeCol(){return browser.$('.MuiDataGrid-columnHeaderTitle=Type');}
	get activityDetailsCol(){return browser.$('.MuiDataGrid-columnHeaderTitle=Details');}
	get activityAppUserCol(){return browser.$('.MuiDataGrid-columnHeaderTitle=App User');}
	get valueOfFirstactivityDate(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[3]/div[2]/div[2]/div/div/div/div[2]/div/div/div[1]/div[1]');}
	get activitySearchArea(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[3]/div[2]/div[1]/div/div/div').$('input');}
	get valueOfFirstactivityType(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[3]/div[2]/div[2]/div/div/div/div[2]/div/div/div[1]/div[2]');}
	get valueOfFirstactivityDetails(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[4]/div/div[2]/div[3]/div[2]/div[2]/div/div/div/div[2]/div/div/div[1]/div[3]');}
	get changedHistoryDialogDetails(){return browser.$('.MuiDialogContent-root').$$('h6');}
	get dropdown1stOption(){return browser.$('.MuiAutocomplete-popper').$$('span');}

	



	//Top Menu
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnSettingsEquipment(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-2"]');}
	get btnEquipmentFromMenu(){return browser.$('[data-testid="SettingsIcon"]');}
	get chkAssetTag(){return browser.$('[label="Show Asset Tag field"]');}
	get btnSaveTopMenu(){return browser.$('.settings-drawer-wrapper').$('span=Save');}
	get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
	


}
module.exports = new IRMInventoryDetails();
