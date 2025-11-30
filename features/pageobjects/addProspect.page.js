const utils = require('../support/utils');
"use strict";
var Page = require('./page')

class addProspectPage extends Page {


	//#region Usman

	get globalCreateMenu () {return browser.$('.justify-content-between').$('[aria-label="More"]');}
	get prospectTabCloseButton () {return browser.$('.docker-buttons').$('[aria-label="Close"]');}
	get addProspectOrSubscriberOption () {return browser.$('li=Add Prospect or Subscriber');}
	get addProspectTab () {return browser.$('//main/div[5]/div/div[1]/div/div[1]/div/div/div/button[1]');}
	get billingContactTab () {return browser.$('//main/div[5]/div/div[1]/div/div[1]/div/div/div/button[2]');}
	get accountTab () {return browser.$('//main/div[5]/div/div[1]/div/div[1]/div/div/div/button[3]');}
	get checkboxAlsoTheBillingContact () {return browser.$('.drawer-footer').$('svg');}
	get checkboxToClick () {return browser.$('.drawer-footer').$('input');}
	get firstNameProspectPage () {return browser.$('[name ="customer.first_name"]');}
	get lastNameProspectPage () {return browser.$('[name ="customer.last_name"]');}
	get address1ProspectPage () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[2]/div/div[1]/div/div[3]/div').$('input');}
	//get address1ValueProspectPage () {return browser.$$('.css-12bkeun')[1];}
	get address1ValueProspectPage () {return browser.$('#react-select-3-input');}
	get invalidAddress () {return browser.$('span=Invalid character');}
	get cityProspectPage() {return browser.$('[name="customer.customer_details.main_city"]');}
	get cityListProspectPage() {return browser.$('//*[@id="react-autowhatever-1"]/ul').$$('li');}
	get cellPhoneProspectPage() {return browser.$('[name="customer.customer_details.main_phone3"]');}
	get emailProspectPage() {return browser.$('[name="customer.emails.0.email_address"]');}
	//get cityName() {return this.cityListProspectPage}
	get addressAfterSavingProspect () {return browser.$('.table-borderless').$('[name="address"]');}
	// get phoneNumberAfterSavingProspect () {return browser.$('//main/div[6]/div/div[3]/div[2]/div[1]/div[1]/div/div[2]/table/tbody/tr[3]/td[2]/p');} // before
	// get phoneNumberAfterSavingProspect () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div[2]/div[1]/div[1]/div/div[2]/table/tbody/tr[4]/td[2]/p');} // after
	get phoneNumberAfterSavingProspect () {return browser.$('//main/div[6]/div/div[3]/div[2]/div[1]/div[1]/div/div[2]/table/tbody/tr[4]/td[2]/p');}
	
	get emailAfterSavingProspect () {return browser.$('[name="email"]');}
	
	get table () {return browser.$('.table-borderless').$$('tr');}


	get nextButtonProspectPage () {return browser.$('.drawer-footer').$('button=Next');}
	//get accountAutoGenerationSlider () {return browser.$('//main/div[5]/div/div[2]/div/div[4]/div/div[1]/label/span[1]/span[1]/input');}
	get accountAutoGenerationSlider () {return browser.$('.MuiSwitch-sizeMedium');}
	get autogenerationStatus () {return this.accountAutoGenerationSlider.$('.PrivateSwitchBase-input');}

	get addButtonProspectPage () {return browser.$('.drawer-footer').$('button=Add');}	
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get username(){return browser.$('.MuiTypography-inherit');}
	get usernameValue() {return browser.$('[name="username"]');}
	get passwordValue() {return browser.$('[name="password"]');}
	
	get usernameOnAccountTab() {return browser.$('[name="customer.username"]');}
	get passwordOnAccountTab() {return browser.$('[name="customer.password"]');}
	get confirmPasswordOnAccountTab() {return browser.$('[name="customer.confirmPassword"]');}

	get invoiceDayOnInvoiceMenu () {return browser.$('#mui-component-select-invoice_day');}
	get invoiceDueDateOnInvoiceMenu () {return browser.$('#mui-component-select-inv_due_date');}
	get termStartDateOnInvoiceMenu () {return browser.$('#mui-component-select-term_start_day');}

	get taxCycleOnBillingOption () {return browser.$('[name="customer.billing_cycle.name"]');}

	get taxdropdownOnBillingOption () {return browser.$('#mui-component-select-customer.customer_details.tax_id');}

	get taxElementsInTaxDropdown () {return browser.$$('.MuiMenu-list')[2].$$('li');}
	get taxChangeOptionPopupTitle () {return browser.$('#alert-dialog-title');}
	get cancelButtonOnTaxChangeOptionPopup () { return browser.$('[aria-labelledby="alert-dialog-title"]').$('button=Cancel');}


	get btnBillingOption () {return browser.$('button=Billing Options');}

	get taxesTabOnInvoiceSettings () {return browser.$('button=Taxes');}
	get fromInvoiceSetting() {return browser.$('.settings-drawer-wrapper');}
    get btnAddNewInvoiceSetting() {return this.fromInvoiceSetting.$('.drawer-footer').$('button=Add New');}
	get nameOnTaxProfile () {return browser.$('[name="tax_name"]');}
	// get valueOnTaxProfile () {return browser.$('//*[@id="react-select-single"]/div/div[1]/div[2]/div')[2];}
	//get valueOnTaxProfile () {return browser.$$('#react-select-single')[2].$('#react-select-12-input');}
	get valueOnTaxProfile () {return browser.$('#react-select-single')[2];}
	
	//get firstTabOfSubscriber () {return browser.$$('.MuiTabs-flexContainer')[0].$$('.MuiButtonBase-root')[0];}
	get firstTabOfSubscriber () {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[2]/div[1]/div/div/button[1]/div/span');}

	// subscriber tab objects
	get susbcriberTable() {return browser.$('#subscriberPage').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
	susbcriberTableIndex(index) {return browser.$('//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/div['+ index +']/div/p');}
		//*[@id="subscriberPage"]/div/div[1]/div[1]/div/div/div/div[2]/div/div/
	// 6th element is first name, 7th is last name

	get subscribersmenu()  { return browser.$('[aria-label="Subscribers"]'); }	
	get sublistRibbon() {return browser.$('.section-title');}
	get subscriber_Allbutton()    {return browser.$$('.noselect.tbl-filter-item');}
	get btn_All()    {return browser.$('//span[contains(text(),"All")]');}
	get btn_PaidUp()    {return browser.$('.d-inline-block').$('.sort-filters=Paid up');}
	get btn_Due()    {return browser.$('.d-inline-block').$('.sort-filters=Due');}
	get btn_PastDue()    {return browser.$('.d-inline-block').$('.sort-filters=Past Due');}
	get btn_Suspended()    {return browser.$('.d-inline-block').$('.sort-filters=Suspended');}
	get btn_Hibernated()    {return browser.$('.d-inline-block').$('.sort-filters=Hibernated');}
	get btn_Prospect()    {return browser.$('.d-inline-block').$('.sort-filters=Prospects');}

	// from Mutahhar
	get btnPlusInHeader() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[3]/button[1]');}
    get listItems() {return browser.$$('.MuiMenu-list')[1].$$('li');}
    get inputCompanyName() {return browser.$('[name="customer.customer_details.main_company"]');}
    get inputFirstName() {return browser.$('[name="customer.first_name"]');}
    get inputLastName() {return browser.$('[name="customer.last_name"]');}
    get inputAddress() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div/div[1]/div/div[3]/div').$('input');}
    get btnNext() {return browser.$('button=Next');}
    get switchToogle() {return browser.$('.MuiSwitch-switchBase');}
    get btnAdd() {return browser.$('button=Add');}
    get subscriberName() {return browser.$('.MuiTabs-fixed').$('button');}
    get btnBillingOption() {return browser.$('button=Billing Options');}
    get checkBoxPaperInvoice() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[4]/div[1]/span');}
    // get btnTopMenu() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/header/div/div[3]/button[3]');} // update
	get btnTopMenu() {return browser.$('[data-testid="AppsIcon"]');} // updated
	get btnSaveTopMenu(){return browser.$('.settings-drawer-wrapper').$('span=Save');}
    get openInvoiceSetting() {return browser.$('li=Invoicing');}
    get btnLateFeesInInvoiceSettings() {return browser.$('button=Late Fee');}
    get latefeesDivInInvoiceSetting() {return browser.$('.drawer-wrapper-double-footer');}
    get checkBoxDefaultLateFeesInInvoiceSettings() {return this.latefeesDivInInvoiceSetting.$$('.MuiCheckbox-root');}
    get btnSaveInvoiceSetting() {return browser.$('button=Save');}
    get valueDefaultLateFeesInInvoiceSettings() {return browser.$('[name="default_late_fee"]');}
    get fromSetting() {return browser.$('.settings-drawer-wrapper');}
    get closeInvoiceSettings() {return this.fromSetting.$('[aria-label="Close"]');}
    get lateFees() {return browser.$('p*=Late Fee');}
    get optionsInLateFees() {return browser.$('[name="customer.late_fee.option"]');}
    get valueLateFeesBillingOption() {return browser.$('[name="customer.late_fee.amount"]');}
    get customerID() {return browser.$('#custId');}
    get btnLogs() {return browser.$('button=Logs');}
    get prospectCreationLog() {return browser.$('/html/body/div[2]/div[3]/div/div/div/div');}
    //get openLogDetails() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[3]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[1]/div');} // old
    get openLogDetails() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[6]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[3]/div/p');} // new
    get latitude() {return browser.$('[name="customer.customer_details.main_address1_lat"]');}
	get longitude() {return browser.$('[name="customer.customer_details.main_address1_lng"]');}
    get btnAdditionalInformation() {return browser.$('button=Additional Info');}
    get setUpDate() {return browser.$('[name="setup_date"]');}
    get btnPayments() {return browser.$('button=Payments');}
    get paidThrough() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div[1]/div[2]/div[2]/h6[2]');}
	// get btnSettingsBilling(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-1"]');}
	get btnSettingsBilling(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-1"]');}
    get btnAutoActions() {return browser.$('li=Auto Actions');}
    get checkBoxGracePeriods() {return browser.$('[name="flag_default_grace"]');}
    get graceDaysInAutoAction() {return browser.$('[name="grace_days"]');}
	get btnYesConfirmation(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[1]');}
    get btnCloseAutoAction() {return this.fromSetting.$('[aria-label="Close"]');}
	get billingGraceCheckboxCheckStatus(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[4]/div[3]/span').$('svg');}
	get billingGraceCheckBox(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[4]/div[3]/span').$('input');}
	get btnCloseGracePopUp(){return browser.$('/html/body/div[2]/div[3]/div/div[2]/div[1]/button');}
    get pGracePeriodInBillingOption() {return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div/div[2]/div[3]/div[4]/div[3]/p');}
    get checkBoxAutoAction() {return browser.$('[name="auto_action"]');}
    get discriptionAutoAction() {return this.fromSetting.$$('.MuiTypography-body1');}
    get discriptionAutoActionInBillingOptions() {return browser.$$('.MuiGrid-grid-md-4')[2].$('p');}

//#endregion Usman

}
module.exports = new addProspectPage();
