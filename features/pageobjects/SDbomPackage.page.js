const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class SDbomPackagePage extends Page {

	get getBomText(){return browser.$('[vispdata-testid="ticket-form-bill-of-material-container"]');}
	get btnBom(){return browser.$('[vispdata-testid="bill-of-material-summary-open-button"]');}
	get bomDockOpened(){return browser.$('h6=Bill of Materials');}
	get btnAddPackage(){return browser.$('button=+ Package');}
	get btnAddService(){return browser.$('button=+ Service');}
	get btnAddOtherItem(){return browser.$('button=+ Other Item');}
	get ticketIsParentOf(){return browser.$('p=Ticket is parent of');}
	get selectSecondTicket(){return browser.$('//div[@class="ReactVirtualized__Grid bottomRightGrid"]/div[@role="rowgroup"]/div[7]');}
	get packagePricing(){return browser.$('h6=Package Pricing');}
	get packageServiceSummary(){return browser.$('h6=Package Services Summary');}
	get btnCancelPackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[2]/div/div[3]/div/div[2]/div/div[1]/div[1]/div[2]/div[3]/header/div/div[2]/button');}
	get closeCurrentTicket(){return browser.$('[aria-label="Close"]');}
	get btnAddToBom(){return browser.$('button=Add to BoM');}
	get searchPackage(){return browser.$('#searchPackage');}
	get selectPakage(){return browser.$('.MuiDrawer-paperAnchorDockedRight').$('#code');}
	get selectPakageRate(){return browser.$('#rate');}
	get qtyHeader(){return browser.$('h6=Qty');}
	get qtyInput(){return browser.$('[name="previewLineItem.0.item_quantity"]');}
	get btnOKpackage(){return browser.$('button=Ok');}
	get getAllRows(){return this.bomHeaderParent.$('tbody').$$('tr');}
	openTaxSettings(parent){return parent.$('#tax').$('button');}
	get expandTaxSettings(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/div');}
	selectListItem(itemName){return browser.$('li='+itemName);}
	get saveTaxSettings(){return browser.$('/html/body/div[2]/div[3]/div/div[11]/span/span/button');}
	get taxableAmount(){return browser.$('/html/body/div[2]/div[3]/div/div[6]/h6');}
	get taxCharged(){return browser.$('/html/body/div[2]/div[3]/div/div[10]/h6');}
	get taxRate(){return browser.$('/html/body/div[2]/div[3]/div/div[4]/h6');}
	get nonTaxableAmount(){return browser.$('/html/body/div[2]/div[3]/div/div[8]/h6');}
	header(itemName){return browser.$('h6='+itemName);}
	getAllColumns(itemName){return itemName.$$('td');}
	get addNewOtherItem(){return browser.$('h6=Add new item...');}
	get otherItemName(){return browser.$('[name="previewLineItem.0.item_name"]');}
	get bomHeaderParent(){return browser.$('.MuiDrawer-paperAnchorDockedRight*=Bill of Materials');}
	get btnOkOtherItem(){return this.bomHeaderParent.$('button=Ok');}
	get selectDeSelectRecurringParent(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('.MuiCheckbox-root');}
	get recurringInput(){return this.selectDeSelectRecurringParent.$('input');}
	get recurringSvg(){return this.selectDeSelectRecurringParent.$('svg');}
	get selectDeSelectRecurringAfterAdd(){return browser.$$('.MuiDrawer-paperAnchorDockedRight')[1].$('.MuiCheckbox-root');}
	get recurringInputAfterAdd(){return this.selectDeSelectRecurringAfterAdd.$('input');}
	get recurringSvgAfterAdd(){return this.selectDeSelectRecurringAfterAdd.$('svg');}
	get selectDeSelectAutoSuspend(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/label/span[1]');}
	get autoSuspendSvg(){return this.selectDeSelectAutoSuspend.$('svg');}
	get autoSuspendInput(){return this.selectDeSelectAutoSuspend.$('input');}
	get autoSuspendSubMenus(){return browser.$('/html/body/div[3]/div[3]').$$('div');}
	get selectFirstOpenedPackage(){return browser.$('/html/body/div[4]/div[3]/div[1]');}
	selectDivByText(text){return browser.$('/html/body/div[3]/div[3]').$('div='+text);}
	get autoSuspendText(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/label/span[2]/h6');}
	get cancelAutoSuspend(){return browser.$('/html/body/div[2]/div[3]/div/div[5]/button');}
	get expandRightArrow(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/label/span[2]/button');}
	get btnSaveBom(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[5]/div/div[2]/div/div[2]/span/button');}
	get btnCancelDescription(){return browser.$('#cancelBtn');}
	btnDescription(desc){return browser.$('button='+desc);}

	///// BOMOtherItemPage
	get btnSaveBom(){return browser.$$('button=Save')[1];}
	get btnCancelBom(){return browser.$$('button=Cancel')[0];}
	btnQty(parent){return parent.$('#qty').$('button');}
	btnRate(parent){return parent.$('#rate').$('button');}
	btnTax(parent){return parent.$('#tax').$('button');}
	btnTotal(parent){return parent.$('#total').$('button');}
	btnMenu(parent){return parent.$('#menu').$('button');}
	headingByParent(parent){return parent.$$('h6');}
	buttonByParent(parent){return parent.$$('button');}
	buttonWithSpecificText(text){return browser.$('button='+text);}
	rateHeader(parent){return parent.$('#rate').$('h6');}
	totalHeader(parent){return parent.$('#total').$('h6');}
	getTax(parent){return parent.$('#tax');}
	get menuButton(){return browser.$('#menu').$('button');}
	get expireParent(){return browser.$('//div[contains(@class, "MuiGrid-item") and contains(., "Expires")]');}
	get expireCheckbox(){return this.expireParent.$('input');}
	get expireCheckboxStatus(){return this.expireParent.$('svg');}
	get clickBtnExpireAfter(){return this.expireParent.$('button');}
	get yearView(){return browser.$('[aria-label="year view is open, switch to calendar view"]');}
	get CalendarView(){return browser.$('[aria-label="calendar view is open, switch to year view"]');}
	get btnQtyAmount(){return browser.$('button=1');}
	get bomItemDottedMenu(){return browser.$('[aria-label=data-testid="MoreVertIcon"]');}
	get btnDeleteItem(){return browser.$('li=Delete');}
}
module.exports = new SDbomPackagePage();