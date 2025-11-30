// Contact Details.page.js
"use strict";
var Page = require('./page')
var Utils = require('../support/utils');

class subscriberDetailsContact extends Page{

	//#region TA-65
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnEditIcon(){return browser.$('.drawer-wrapper-full').$('[aria-label="Edit"]');}
    get primaryContactFields(){return browser.$('.table').$$('tr');}
    get editContactCompanyName(){return browser.$('.drawer-wrapper').$('[name="customer.customer_details.main_company"]');}
    get editAddressValue(){return browser.$('.drawer-wrapper').$('//*[@id="react-select-2-input"]');}
	get editAddressTwoValue(){return browser.$('.drawer-wrapper').$('[name="customer.customer_details.main_address2"]');}
    get editCityValue(){return browser.$('.drawer-wrapper').$('[name="customer.customer_details.main_city"]').$('input');}
    get editHomephoneValue(){return browser.$('.drawer-wrapper').$('[name="customer.customer_details.main_phone1"]');}
    get editWorkphoneValue(){return browser.$('.drawer-wrapper').$('[name="customer.customer_details.main_phone2"]');}
    get editEmailValue(){return browser.$('.drawer-wrapper').$('[name="customer.emails.0.email_address"]');}
    get editFirstName(){return browser.$('.drawer-wrapper').$('[name="customer.first_name"]');}
    get editLastName(){return browser.$('.drawer-wrapper').$('[name="customer.last_name"]');}
    get btnSaveEdits(){return browser.$('.drawer-footer').$('button=Save');}
    get btnSavePortalSettings(){return browser.$('//*[@id="vertical-tabpanel-3"]').$('button=Save');}
    get getFirstNameErrorMessage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div').$('p').$('span');}
    get getCityErrorMessage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div').$('p').$('span');}
    get getLastNameErrorMessage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]/div[1]/div/div[2]/div/div[3]/div').$('p').$('span');}
    get getAddressErrorMessage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]/div[1]/div/div[3]/span');}
		isMsgPresent(msg){return browser.$('span='+msg);}
    get btnPortalsfromMenu(){return browser.$('li=Portals');}
    get btnOnlineSignupinPortals(){return browser.$('button=Online Signup');}
    get checkboxInternationlAddressAllowed(){return browser.$('[name="flag_allow_international_address"]');}
    get settingsPortalDrawer(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]');}
    get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}
    get confirmationMsg(){return browser.$('.MuiAlert-message');}
		isMsgExist(msg){return browser.$('.MuiAlert-message='+msg);}
	get billingLastNameErrorMessage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]/div[2]/div/div[4]/div').$('p').$('span');}
	get billingFirstNameErrorMessage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[2]/div[2]/div/div[2]').$('p').$('span');}
	get primaryContactState(){return browser.$('//*[@id="react-select-single"]');}
	get primaryContactStateList(){return browser.$('//*[@id="react-select-single"]/div/div[1]');}
	get stateFieldLable(){return browser.$('.contact-state-fields').$('label');}
	get workPhoneBillingContact () {return browser.$('[name="customer.customer_details.bill_phone2"]');}
	get billingContactFields(){return browser.$('.subscriber-summary-boxes').$$('tr');}
	get homefaxPrimaryContact () {return browser.$('[name="customer.customer_details.main_fax"]');}
	//#endregion

	get billingContactTab() { return browser.$('button=Billing Contact');}
	//get clickEditContact () {return browser.$('//main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[1]/div[2]/button');}
	// get clickEditContactIcon () {return browser.$$('.MuiGrid-grid-xs-auto')[7].$('button');}
	get clickEditContactIcon () {return browser.$('[data-testid="EditIcon"]');}
	
	get companyBillingContact () {return browser.$('[name="customer.customer_details.bill_company"]');}
	get firstNameBillingContact () {return browser.$('[name="customer.customer_details.bill_first_name"]');}
	get miBillingContact () {return browser.$('[name="customer.customer_details.bill_middle_initial"]');}
	get lastNameBillingContact () {return browser.$('[name="customer.customer_details.bill_last_name"]');}
	get address1BillingContact () {return browser.$('#react-select-4-input');}
	get address2BillingContact () {return browser.$('[name="customer.customer_details.bill_address2"]');}
	get zipFieldBillingContact () {return browser.$('[name="customer.customer_details.bill_zip"]');}
	get homePhoneBillingContact () {return browser.$('[name="customer.customer_details.bill_phone1"]');}
	get homeworkPhoneBillingContact () {return browser.$('[name="customer.customer_details.bill_phone2"]');}
	get homecellPhoneBillingContact () {return browser.$('[name="customer.customer_details.bill_phone3"]');}
	get homefaxBillingContact () {return browser.$('[name="customer.customer_details.bill_fax"]');}
	get emailAddressBillingContact () {return browser.$('[name="customer.emails.0.email_address"]');}
	get cityBillingContact () {return browser.$('[name="customer.customer_details.bill_city"]').$('input');}
	get checkBoxesEmailTypeBillingContact () {return browser.$('[label="Billing"]');}
	get checkBoxesEmailTypeTechContact () {return browser.$('[label="Tech"]');}
	get checkBoxesEmailTypeMarketingContact () {return browser.$('[label="Marketing"]');}
		svgStatus(parent){return parent.$('svg');}
	get closeContactDetails(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[1]/div/div[3]/div/div/div[1]/div/div[2]/button');}

	get saveButtonOnContactScreen () {return browser.$$('.drawer-footer')[0].$('button=Save');}
	get cancelButtonOnContactScreen () {return browser.$$('.drawer-footer')[0].$('button=Cancel');}
	//get checkBoxSameAsBillingContact () {return browser.$$('.drawer-footer')[0].$('.css-13qwah');}
	get checkBoxSameAsBillingContact () {return browser.$$('.css-13qwah')[3];}
		isErrorMsgPresent(msg){return browser.$('.text-danger='+msg);}
	get saveButtonOnSettings () {return browser.$$('.drawer-footer')[1].$('button=Save');}

	get isSaveButtonDisabled () {return browser.$('.drawer-footer').$('css-1j60yed');}
	
	get stateFieldBillingContact () {return browser.$$('.css-v2cetj-singleValue');}

	get setStateValue() {return browser.$('#react-select-19-input');}
	get cityField() {return browser.$('[name="customer.customer_details.bill_city"]');}
	
	get settingsIcon () {return browser.$('.css-1gzpori');}
	get btnSettingsCRM(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-3"]');}
	get portalsIcon () {return browser.$('span=Portals');}

	get onlineSignUp () { return browser.$('[aria-label="Portal Menu"]').$$('.css-1kkc7xv')[3];}
	get internationalAddress () {return browser.$('[name="flag_allow_international_address"]');}
	get internationalAddressParent () {return browser.$('[label="Allow international address"]');}
	get checkUncheckinternationalSvg () {return this.internationalAddressParent.$('svg');}

	get confirmationMsg(){return browser.$('.MuiAlert-message');}


} 

module.exports = new subscriberDetailsContact();