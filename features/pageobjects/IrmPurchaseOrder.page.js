const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class IrmPurchaseOrder extends Page {
    get puchaseOrderSection(){return browser.$('.react-grid-item*=Purchase Orders');}
	get puchaseOrderColumns(){return this.puchaseOrderSection.$('.topRightGrid').$$('.MuiTypography-root');}
	get purchaseHeaderbuttons(){return browser.$('.react-grid-item*=Purchase Orders').$$('.MuiButtonBase-root');}
	get subMenuParent(){return browser.$('[aria-labelledby="nested-list-subheader"]');}
	get purchaseOrderTableView(){return this.subMenuParent.$('div=List');}
	get purchaseOrderCardView(){return this.subMenuParent.$('div=Tiles');}
		purchaseTableView(parentelement) {return parentelement.$('.MuiSvgIcon-root');}
	get purchaseOrderTableHalf(){return this.subMenuParent.$('div=Half');}
	get purchaseOrderTableFull(){return this.subMenuParent.$('div=Full');}
	get purchaseOrderMeatBall(){return  this.puchaseOrderSection.$('[data-testid="MenuIcon"]');}
	get purchaseOrderCardViewVerification(){return this.puchaseOrderSection.$('.MuiGrid-root');}
	get btnCreatePurchaseOrder(){return browser.$('[aria-label="Create Purchase Order"]');}
	get dockedProfileItem(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div[1]/div/div/div');}
	get dockedProfileItemInput(){return this.dockedProfileItem.$('input');}
	 selectProfileItem(profileitem){return browser.$('span='+profileitem);}
	get dockedVendor(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div[2]/div/div/div');}
	get dockedVendorInput(){return this.dockedVendor.$('input');}
	 selectVendorItem(vendor){return browser.$('li='+vendor);}
	get invalidPIError(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Please select a profile item.');}
	get invalidVendorError(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Please select a vendor.');}
	get dockedquantity(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiInputBase-input')[2];}
	get btnContinue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Continue');}
	get btnCancel(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Cancel');}
	get btnCreatePO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiButtonBase-root=Create PO');}
	get btnAddMoreItems(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="AddCircleIcon"]');}
	get poSummaryHeader(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('h6=Purchase Order Summary');}
	get pobtnBackSummary(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="ArrowBackIcon"]');}
	get poNumber(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=PO#');}
	get poDate(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Date');}
	get poGetDate(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiGrid-item*=Date').$('h6');}
	get poVendor(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=ISP Vendors');}
	get poVendorAddress(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=7 Prairieview Lane, Topeka, KS, 66699');}
	get poShipTo(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Automation Test');}
	get poShipToAddress(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=9450 SW Gemini Dr. #33000, Beaverton, OR, 97008-7105');}
	get poItemNumber(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=SKU');}
	get poItemName(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Name');}
	get poItemSKU(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Name');}
	get poItemQty(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=QTY');}
	get poItemUP(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Unit Price');}
	get poItemTR(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Tax Rate');}
	get poItemTotal(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('p=Total');}
	get allHyperLinks(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiLink-underlineHover');}
	get btnCreatePO(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Create PO');}
	get purchaseOrderfirstRowData(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div/div/div/div[2]/div/div/div[1]').$$('.MuiTypography-root');}
	get purchaseOrderAllColumns(){return browser.$('.react-grid-item*=Purchase Orders').$('.MuiDataGrid-main').$$('.MuiDataGrid-columnHeaderTitle');}
	get btnOrderStatus(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="ArrowDropDownIcon"]');}
    get btnCloseDialog(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[aria-label="Close"]');}
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get getAllText(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiTypography-root');}
	get poStatusValue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTypography-root=PARTIAL');}
	    changePoStatus(newStatus){return browser.$('li='+newStatus);}
	get btnPopYes(){return browser.$('.MuiDialog-container').$('button=Yes');}
	get btnAddItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Add Item');}
	get openVendor(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div/div');}
	get changeVendorItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('input')[0];}
	get changeVendorQty(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('input')[1];}
	get btnSaveChanges(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Save Changes');}
		verifyItem(itemName){return browser.$('.MuiTableCell-root='+itemName);}
	get inputID(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[4]/div/div').$('input');}	
	get inputNotice(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[6]/div/div/div[1]/div/div/div[2]/div/div[1]/div/div').$('input');}
	get inputSecondNotice(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[6]/div/div/div[1]/div/div/div[2]/div[2]/div[1]/div/div').$('input');}
	get btnAddMoreNotice(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="AddCircleIcon"]');}
	get itemTotal(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[1]/td[6]');}
	get poDockedValues(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="ExpandMoreIcon"]');}
	btnpoItem(parent){return parent.$('button');}
	get purchaseItemSerial(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div[3]/div/table/tbody/tr[1]/td/div/div/div/div[1]/div/div').$('input');}
	get purchaseItemLocation(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div[3]/div/table/tbody/tr[1]/td/div/div/div/div[3]/div/div/div');}
	get equipmentProfileLocation(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div/div[2]/div/div[2]/div/div[3]/div[2]/table/tbody/tr[2]/td[2]/div/div[3]/div/table/tbody/tr[1]/td/div/div/div/div[2]/div/div/div');}
	get btnPurchaseReceive(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('button=Receive');}
	get chkEquipmentProfile(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[name="order_items.0.flag_same_profile"]');}
	get btnPartiallyReceive(){return browser.$('.MuiDialogContent-root').$('button=Partially receive inventory');}
	get btnCreateNewPO(){return browser.$('.MuiDialogContent-root').$('button=Create new PO for the missing items');}
	//get poStatusValue(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div/div[1]/div/div/div[1]/div/div[1]/p');}
	get menuOfPurchaseOrder(){return browser.$('.react-grid-item*=Purchase Orders').$('[data-testid="MenuIcon"]');}
	get btnChooseColumn(){return browser.$('li=Choose Columns');}
	get btnDateOrderedColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Date Ordered').$('.MuiSwitch-root');}
	get btnItemNameColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Item Name(s)').$('.MuiSwitch-root');}
	get btnLastUpdatedColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Last Update').$('.MuiSwitch-root');}
	get btnVendorColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Vendor').$('.MuiSwitch-root');}
	get btnStatusColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Status').$('.MuiSwitch-root');}
	get btnTotalColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=Total').$('.MuiSwitch-root');}
	get btnPoNumberColumn(){return browser.$('.MuiDialogContent-root').$('.MuiFormControlLabel-root=PO#').$('.MuiSwitch-root');}
	get btnResetColumns(){return browser.$('.MuiDialog-paper').$('.MuiDialogActions-root').$('button=Reset');}
	get btnRestoreolumns(){return browser.$('.MuiDialog-paper').$('.MuiDialogActions-root').$('button=Restore Defaults');}
	get btnCloseColumnsDialog(){return browser.$('.MuiDialogActions-root').$('button=Close');}
	get poQTYvalue(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTableBody-root').$$('.MuiTableCell-root')[2];}
	get editUP(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('.MuiLink-button')[1];}
	get dockInPo(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="ArrowForwardIcon"]');}
	get dockedInBtn(){return browser.$('[aria-label="Show Recent Actions"]');}
	get dockedOutBtn(){return browser.$('.MuiListItemAvatar-root');}
	get purchaseOrderHeading(){return browser.$('h6*=Purchase Order');}
	get subscriberPage(){return browser.$('[aria-label="Subscribers"]');}
	get	dottedMenu(){return browser.$('.react-grid-item*=Purchase Orders').$('.MuiDataGrid-virtualScrollerContent').$('[data-testid="MoreVertIcon"]');}
	get archiveMenu(){return browser.$('li=Archive');}
	get closeOpenedPOdrawer(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="CloseIcon"]')}
	get showArchived(){return browser.$('li*=Show Archived');}
	get statusOfShowArchived(){return this.showArchived.$('svg');}
	get addMoreItems(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('[data-testid="AddCircleIcon"]')}
	get dockedSecondProfileItem(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div[2]/div[1]/div/div/div');}
	get dockedThirdrofileItem(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div[3]/div[1]/div/div/div');}
	get firstVendorList(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[3]/div[2]/div[1]/div[2]/div/div/div').$('input');}
	get SecondVendorList(){return browser.$('//*[@id="IRM-container"]/dv/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/div/div').$('input');}
	get skuItem(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('.MuiTableCell-root*=Mikrotik');}
	get getAllInputsOfDrawer(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$$('input')}
}
module.exports = new IrmPurchaseOrder();
