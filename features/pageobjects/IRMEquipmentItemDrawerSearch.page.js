"use strict";
var Page = require('./page')

class IRMEquipmentItemDrawerSearch extends Page{

	get firstEquipmentProfile(){return browser.$('.react-grid-item*=Inventory').$('h6');}
	get equipmentDrawerSearchInput(){return browser.$('.MuiDrawer-paperAnchorRight').$('[placeholder="Search"]');}
	get inventorySection(){return browser.$('.react-grid-item*=Inventory');}
	get inventoryMeatBall(){return  this.inventorySection.$('[data-testid="MenuIcon"]');}
	get btnPageSize(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[3]/div/div[2]/div/div');}
	get pageSizeValue(){return this.btnPageSize.$('input');}
	get btnEquipmentProfile(){return this.inventorySection.$('button=Equipment');}
	get firstColumn(){return browser.$('//*[@id="IRM-container"]/div/div[2]/div/div[2]/div[2]/div/div/div/div[1]/div/div/div[2]/div[1]');}
	get firstColumnSortbtn(){return this.firstColumn.$('svg');}
	
	//locksearch
	get openLockUnlockOption(){return browser.$('[data-testid="LockOpenIcon"]');}
	get lockedOption(){return browser.$('[data-testid="LockIcon"]');}
		selectListItem(newStatus){return browser.$('li='+newStatus);}
	get inventorySearch(){return this.inventorySection.$('input');}
	get inventoryHeaderbuttons(){return browser.$('.react-grid-item*=Inventory').$$('.MuiIconButton-root');}
	get isListViewSelected(){return browser.$('.MuiListItem-root*=List').$('svg');}
	get isTileViewSelected(){return browser.$('.MuiListItem-root*=Tiles').$('svg');}
	get noInventoryIsPresent(){return browser.$('div=No Data Available...');}
	get subMenuParent(){return browser.$('[aria-labelledby="nested-list-subheader"]');}
	get inventoryTableView(){return this.subMenuParent.$('div=List');}
	get inventoryCardView(){return this.subMenuParent.$('div=Tiles');}
		InventorySelectedOptions(parentelement) {return parentelement.$('.MuiSvgIcon-root');}


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
	
	
	open(path){	super.open(path);	}
}
module.exports = new IRMEquipmentItemDrawerSearch();
