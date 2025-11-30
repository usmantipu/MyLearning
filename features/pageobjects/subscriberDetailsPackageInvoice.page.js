const utils = require('../support/utils');
"use strict";
var Page = require('./page');
const { billingTermDate } = require('./subscriberDetailsAddPackage.page');
class subscriberDetailsPackageInvoice extends Page {

	get subCustomerID(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[3]');}
	get subUserName(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[5]');}
	get topActivePackages(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[2]/div/div/div[1]').$$('[data-testid="LensIcon"]');}
	/**package and new invoice*/
	get btnPackageAndInvoice(){return browser.$('button=Packages & Invoices');}
	get btnAddPackage(){return browser.$('button=+ Package');}
	get hostingPackage(){return browser.$('//*[@id="code"]');}
	get btnAddToInvoice(){return browser.$('button=Add to Invoice');}
	get btnOpenANewInvoice(){return browser.$('button=Open a new invoice');}
	get btnSyncTermUpcoming(){return browser.$('button=Sync term with The Upcoming Invoice');}
	get btnSaveAndConfigure(){return browser.$('button=Save & Configure');}

	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	    isAlertPresent(message){return browser.$('.MuiAlert-message='+message);}
	get popRequiredFieldMsg(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div/p/span');}
	get btnSaveAdditionalDetails(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/form/div[2]/span');}

	get selectedInvoiceRow(){return browser.$('.MuiDrawer-paperAnchorRight').$('.MuiTable-root').$$('.MuiTableCell-root');}
	get selectInvoiceRow(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[2]/table/tbody/tr').$$('td');}
	get btnUpcomingInvoice(){return browser.$('button=Upcoming Invoice');}
	get btnInvoiceOpen(){return browser.$('button=Invoice - Open');}
	get packageAndInvoiceHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div');}
	get expandInvoiceStatus(){return this.packageAndInvoiceHeader.$('[data-testid="ArrowDropDownIcon"]');}
	get expandPackageInvoiceDottedMenu(){return this.packageAndInvoiceHeader.$('[data-testid="MoreVertIcon"]');}
	    getListItem(itemName){return browser.$('li='+itemName);}
	get invoiceStatementsData(){return browser.$('//*[@id="statements-list"]/div[3]/div/div[1]/div/div').$('.bottomRightGrid').$$('.MuiTableCell-root')}
	get btnEmailFromInvoice(){return browser.$('button=Email');}
	get emailHeader(){return browser.$('.email-header');}
	get emailAttachedInvoice(){return this.emailHeader.$('.MuiChip-label');}
	get btnDeleteInvoice(){return browser.$('button=Delete Invoice');}
	get emptyInvoiceOrQuoteItems(){return browser.$('h6*=Click the button below to add package, equipment and other item');}
	get btnCancelInvoice(){return browser.$('button=Cancel Invoice');}
	get btnInvoiceMore(){return browser.$('button=More');}
	get activePackagesOfOtherInvoice(){return browser.$('[aria-labelledby="active-packages-subheader"]').$$('li');}
	get btnAddToQuote(){return browser.$('button=Add to Quote');}
	get btnCloseAddedPackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[1]/div/div[2]/button');}
	get btnDeleteQuote(){return browser.$('button=Delete Quote');}
	get btnViewPDF(){return browser.$('button=View PDF');}
	get btnConvertToInvoice(){return browser.$('button=Convert To Invoice');}
	get btnYesConvertToInvoice(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
	get chooseAddToNewInvoice(){return browser.$('.MuiDialogContent-root').$('.MuiCheckbox-root').$('svg');}
	get inputAddToNewInvoice(){return browser.$('.MuiDialogContent-root').$('.MuiCheckbox-root').$('input');}
	get clickOkOfConfirm(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button');}
	get yesVoidThisInvoice(){return browser.$('[role="dialog"]').$('button');}
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get btnTransactions(){return browser.$('button=Transactions');}
	get getAllLogsData(){return browser.$('.activity-table').$('.bottomRightGrid').$$('p');}
	get openRecentLogItem(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[1]');}
	get logFromPpopUp(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div/h6[1]/div');}
	get btnOpenANewInvoice(){return browser.$('button=Open a new invoice');}
	get closeRightDrawer(){return browser.$('[aria-label="Close"]');}
	get SelectRecentTransactionItemDescription(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]/div/div[2]/div[1]/div[1]/div/div/div/div/div[2]/div/div/div[2]');}
	get SelectRecentTransactionItemStatus(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]/div/div[2]/div[1]/div[1]/div/div/div/div/div[2]/div/div/div[4]');}
	get SelectInvoicePaidDueBalance(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div[2]/div/div[2]/h6');}
	get getAllTransactions(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]/div/div[2]/div[1]/div[1]/div/div/div/div/div[2]/div/div').$$('.MuiTableCell-root');}
	get selectSecondSubscriber(){return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div[18]');}
	get quotetotalData(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr').$$('h6');}
	get totalForTheInvoice(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[4]');}
	get oldTotalForInvoice(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[2]');}
	get allActivePackageCountOfInvoice(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[3]/div/table/tbody').$$('[data-testid="LensIcon"]');}
	get selectPackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[3]/div/table/tbody/tr').$('button');}
	get expandSelectedPackage(){return browser.$('[data-testid="CheckCircleIcon"]');}
	get btnDeactivate(){return browser.$('button=Deactivate');}
	get invoiceHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[2]/table/thead/tr/th[4]');}
	get packagePeriod(){return browser.$('//*[@id="desc"]/div/div/div[2]/h6');}
	get totalForInvoice(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/div[2]/div/div/div[2]/div/div[3]/div[2]/div[2]/div/div').$('input');}
	/**TA-65*/
	get allTransactionsData(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]/div/div[2]/div[1]/div[1]/div/div/div/div/div[2]/div/div').$$('.MuiTableCell-root')}
	get allInvoicePackageRows(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[3]/div/table/tbody').$$('tr');}
		getColumnsByParent(parent){return parent.$$('td');}
	get upcomingTotalBalance(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[4]');}
	get upcomingTotalAmount(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[2]');}
	get userName(){return browser.$('[name="username"]');}
	get btnSaveUserName(){return browser.$('/html/body/div[2]/div[3]/div/div/div[3]/div/span');}
	get readQuoteData(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div').$$('td');}
	get defaultPackageSuspendedInactive(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/label/span');}
	
	/*    < --   TA-148   -- >     */
	get openedPackageHeader(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[2]/div/div[2]/div[1]/div/div[1]/h6');}
	get btnQuoteInvoiceUpcomingInvoice() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[1]/button[1]');}
	get isExistOpenInvoice() {return browser.$('//*[@id="statements-list"]/div[3]/div/div/div/div/div/div[2]/div/div').$$('div');}
	get chooseAddtothecurrentopeninvoice(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div/label[1]/span[1]');}
	get checkboxOnConfirmation() {return browser.$('/html/body/div[2]/div[3]/div/div[1]/label/span[1]/input');}
	get btnBillingOptions() {return browser.$('button=Billing Options');}
	get syncWithUpcomingInvoice(){return browser.$('');}
	get termStartDay() {return browser.$('[name="customer.customer_billing_settings.term_start_day"]');}
	get btnTermStartDate() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr/td[2]/div/div[2]/div/div[2]/div/button');}
	get btnTermEndDate() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr/td[2]/div/div[2]/div/div[3]/button');}
	get dateOnDatePicker() {return browser.$('.PrivatePickersSlideTransition-root').$$('button');}
	get date1OnDatePicker() {return this.dateOnDatePicker[0].$('button');}
	get date2OnDatePicker() {return this.dateOnDatePicker[1].$('button');}
	get billingCycle() {return browser.$('[name="customer.billing_cycle.name"]');}
	get btnOtherItems() {return browser.$('button=+ Other Item');}
	get selectOtherItem() {return browser.$$('.MuiListItem-button');}
	get btnAddOtherItem() {return browser.$('button=Add');}
	get btnSaveOtherItem() {return browser.$('//*[@id="saveBtn"]');}
	get alertMessage() {return browser.$('.MuiAlert-message');}
	get btnAddNewItem(){return browser.$('h6*=Add new item...');}
	get inputOtherItem(){return browser.$('[name="previewLineItem.0.item_name"]');}
	get otherItemRateParent(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[5]');}
	get otherItemBtnRate(){return this.otherItemRateParent.$('button');}
	get otherItemRate(){return this.otherItemRateParent.$('input');}
		isItemExists(itemToFound){return browser.$('h6*='+itemToFound);}
	get invoicePackageDatePeriod(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr/td[2]/div/div[2]');}
	get btnAddEquipment() {return browser.$('button=+ Equipment');}
	get equipment() {return browser.$('.MuiTableContainer-root').$('tbody').$$('td');} // Another .MuiListItem-button =>  [6]
	get closeInvoiceSettingPanel() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[3]/div[6]/div/div[1]/div/div[2]/button');}
		isBtnExists(itemToFound){return browser.$('button='+itemToFound);}

	/**TA-149*/
	get otherRecurringParent(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[3]/div/span[1]/label/span[1]');}
	get checkOtherRecurring() {return this.otherRecurringParent.$('input');}
	get secondRecurringParent(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[3]/td[3]/div/span[1]/label/span[1]');}
	get checkSecondOtherRecurring() {return this.secondRecurringParent.$('input');}
	get btnLeftRecurringOption(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[3]/td[3]/div/span[2]');}
	get recurringItemPeriod(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[2]/div/h6');}
	get recurringItemYetToStart(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[3]/td[2]/div/div/div/div[2]/h6');}
	get otherBillingPeriod(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[2]/div/div/div/div[2]');}
	get btnDoNotProratedOnly(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[2]/div[1]/label/span');}
	get btnProratedOnly(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[2]/div[2]/div/label/span');}
	get btnAddFullAmountPlus(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div[2]/div[2]/div/label/span');}
	get btnAddFullAmountToBothInvoices(){return browser.$('/html/body/div[3]/div[3]/div/div[1]/div[2]/div[3]/div/label/span');}
		getInputByParent(parent){return parent.$('input');}
	get inputStartDate(){return browser.$('[placeholder="mmm d, yyyy"]');}
	get openCalendarOption(){return browser.$('[data-testid="CalendarIcon"]');}
	get checkAutoSuspenditem(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/label/span[1]/input');}
		isDivExists(itemToFound){return browser.$('div='+itemToFound);}
	get defaultAutoSelected(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/label/span[2]/h6');}
	get btnOtherDescription(){return browser.$('//*[@id="desc"]').$('button');}
	get enterDescriptionValue(){return browser.$('//*[@id="desc"]').$('input');}
	get btnSaveDescription(){return browser.$('//*[@id="saveBtn"]');}
	get btnTaxFromInvoiceItem(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[6]/button');}
    get expandTaxSettingsFromInvoiceItems(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div/div/div');}
    get checkGSTTaxRate(){return browser.$('/html/body/div[2]/div[3]/div/div[4]');}
        getListItem(itemName){return browser.$('li='+itemName);}
	get btnSaveFromTaxSetting(){return browser.$('/html/body/div[2]/div[3]/div/div[11]/span/button');}
	get btnQuantity(){return browser.$('//*[@id="qty"]/div/button');}
	get btnQuantityInput(){return this.invoiceItemQuantity.$('input');}
	get invoiceItemQuantity(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[4]/div');}
	get invoiceItemRate(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[5]');}
	get invoiceItemTotalAmount(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[7]/h6');}
	get invoiceItemTaxAmount(){return browser.$('/html/body/div[2]/div[3]/div/div[6]/h6');}
	get btnExpandInvoiceDotted(){return browser.$('//*[@id="menu"]/span/button');}
	get btnDeleteInvoiceFromMenu(){return browser.$('li=Delete');}
	get invoiceDeleteMenuOptionsParentOne(){return browser.$('/html/body/div[3]/div[3]');}
	get getDeleteOnlyInvoiceItem(){return this.invoiceDeleteMenuOptionsParentOne.$('h6');}
	get btnRadioDeletOnlyInvoiceItem(){return this.invoiceDeleteMenuOptionsParentOne.$('span');}
	get invoiceDeleteMenuOptionsParentTwo(){return browser.$('/html/body/div[3]/div[3]/div/div[1]/div/label[2]');}
	get getDeleteInvoiceItemAndPackage(){return this.invoiceDeleteMenuOptionsParentTwo.$('.MuiTypography-root');}
	get btnRadioDeletInvoicePackage(){return this.invoiceDeleteMenuOptionsParentTwo.$('span');}
	get btnOKDeleteInvoiceDotted(){return this.invoiceDeleteMenuOptionsParentOne.$('button');}
	get btnYesOfCofirmDialog(){return browser.$('[role="dialog"]').$('button');}
	get voidedInvoiceMsg(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[3]/div/h6[2]');}
		packageCount(packagename){return browser.$$('li='+packagename);}
	get inActivePackageExpandedOrNot(){return browser.$$('.MuiTreeItem-iconContainer');}
	get expandInActivePackage(){return browser.$('.MuiTreeItem-label*=Inactive Packages & Services');}
	get proratedDatePeriod(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[2]');}
	get packageDialUp(){return browser.$('.MuiTreeItem-content*=Dialup');}
	/**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnInvoicing(){return browser.$('li=Invoicing');}
	get btnSettingsBilling(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-1"]');}

	/**top menu Invoicing options */
		svgStatus(parent){return parent.$('svg');}
	get btnDialogOk(){return browser.$('.MuiDialogActions-root').$('button=OK');}
	get btnSaveTopMenu(){return browser.$('.settings-drawer-wrapper').$('span=Save');}
	get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
	get btnPackageInvoicing(){return browser.$('button=Package Invoicing');}
	get invoicingSuspension(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div[2]/div/div[5]/span/label');}
	get inputInvoicingSuspension(){return browser.$('[name="isp_settings.flag_invoice_suspended_apply"]');}
	get btnContinueAuto(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/label/span');}
	get btnDiscountinueAuto(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/label/span');}

    open() {
        super.open('login');
		//utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
}
module.exports = new subscriberDetailsPackageInvoice();
