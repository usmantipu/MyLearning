const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberDetailsPayments extends Page {


	get noDataAvailableIsExist(){return browser.$('p*=No Data Available...').isExisting();}
	get getPackageStatus(){return browser.$('[data-testid="LensIcon"]');}
	get expandPackageMenu(){return browser.$('[data-testid="ArrowRightIcon"]');}
	get suspendPackage(){return browser.$('li=Suspend');}
	get closeRightDrawer(){return browser.$('[aria-label="Close"]');}
	get closePackageRightDrawer(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[1]/div/div[2]/button');}
	    pathSelector(parentElement){return parentElement.$('path');}
	get totalcount() {return browser.$('p*=Showing ');}
	get getSubscriberName() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div[1]/div/div/button[1]');}					
	get btnSuspendAll() {return browser.$('//body/div[3]/div[3]/div/div[2]/span[1]/button');}
	get btnsuspendSpecific(){return browser.$('/html/body/div[3]/div[3]/div/div[2]/span[2]/button');}
	get noDataAvailable(){return browser.$('#subscriberPage').$('p=No Data Available...');}

	/**Payments*/
	get btnPayments(){return browser.$('button=Payments');}
	get btnPostPaymentCreditMemo(){return browser.$('button=Post Payment');}
	get btnPaymentOptions(){return browser.$('button=Payment Options');}
	get radioReceivePayment(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[1]/div[1]/div/label[1]/span[1]');}
	get radiocreditMemo(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[1]/div[1]/div/label[2]/span[1]');}
	    getPaymentOptionFromDD(itemName){return browser.$('li='+itemName);}
	get expandPaymentMethod(){return browser.$$('[name="payment_method"]');}
	get expandPaymentMethodFromPostPayments(){return browser.$('[name="payment_method"]');}
	get paymentAmount(){return browser.$('[name="payment_amount"]');}
	get paymentAmountFromDialog(){return browser.$('.MuiDialog-container').$('[name="payment_amount"]');}
	get AllPaymentAmount(){return browser.$$('[name="payment_amount"]');}
	get creditCardNumberFromDialog(){return browser.$('.MuiDialog-container').$('[name="credit_card"]');}
	get creditCardExpireMonthFromDialog(){return browser.$('.MuiDialog-container').$('[name="exp_month"]');}
	get creditCardExpireYearFromDialog(){return browser.$('.MuiDialog-container').$('[name="exp_year"]');}
	get PaymentDate(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[1]/div[2]/div[1]/h6[2]');}
	get dialogPaymentDate(){return browser.$('.MuiDialog-container').$$('h6')[2];}
	get dialogPaymentHeader(){return browser.$('//*[@id="responsive-dialog-title"]/div/div[1]/h6');}
	get referenceNumber(){return browser.$('[name="payment_reference"]');}
	get transactionID(){return browser.$('[name="transaction_id"]');}
	get checkNo(){return browser.$('[name="check_number"]');}
	get creditCardNo(){return browser.$('[name="credit_card"]');}
	get allDropDowns(){return browser.$('#SummaryTabs').$$('[data-testid="ArrowDropDownIcon"]');}
	get expandCreditExpireOn(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[2]/div[5]/span/div/div').$('.MuiSelect-standard');}
	get expandCreditYearsOn(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[2]/div[6]/span/div/div').$('.MuiSelect-standard');}
		getListItem(itemName){return browser.$('li='+itemName);}
	get processPaymentNow(){return browser.$('[name="process_payment"]');}
	get amountLable(){return browser.$('label=Amount');}
	get btnPostPaymentSubmit(){return browser.$$('button=Post Payment')[1];}
	get btnTransactions(){return browser.$('button=Transactions');}
	get getAllTransactions(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[4]').$('.p-3').$('.bottomRightGrid').$$('.MuiTableCell-root');}
	get autoSuspendedOption(){return browser.$('[name="auto_unsuspend"]');}
	get autoSuspendText(){return browser.$('span=Automatically unsuspend');}
	get routingNumber(){return browser.$('[name="routing_number"]');}
	get echeckAcountNumber(){return browser.$('[name="account_number"]');}
	get noDataInDistribution(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[3]/div[1]/div/div[1]/div/div/p');}
	get getAllRowsData(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[3]/div[1]/div/div[1]/div/div/div/div/div[2]/div/div').$$('.MuiTableCell-root');}
	get getAmountPaidForSelectedInvoice(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[3]/div[2]/div/div[2]/p[2]');}
	get unappliedPaymentAmount(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[3]/div[2]/div/div[3]/p[2]');}
	get btnCreditPayment(){return browser.$('button=Credit Payment');}
	get btnSaveNewCredit(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[1]/div[2]/div/span[1]/span/button');}
	get getAllCheckbox(){return browser.$('#SummaryTabs').$$('.PrivateSwitchBase-input');}
	get getDateColumn(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[3]/div[1]/div/div[1]/div/div/div/div/div[2]/div/div/div[2]');}

	get routingNumberFromPaymentOptions(){return browser.$('[name="ach_routing"]');}
    get accountNumberFromPaymentOptions(){return browser.$('[name="ach_account_view"]');}
	get autoPayOnTheLable(){return browser.$('[label="Autopay on the "]');}
	get autoPayOnThe(){return browser.$('[name="flag_autobill"]');}
	get btnDayOfTheMonth(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[4]/div[1]/div[2]/button');}
	get expandCustomerAutoPayDay(){return browser.$('.MuiDialog-container').$('.MuiOutlinedInput-root')}
	get btnSavePaymentOptions(){return browser.$('#SummaryTabs').$('button=Save');}
	get paymentMehtodTypeValue(){return browser.$('[name="payment_method"]');}
	get expandCreditCardType(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[3]/div[2]/div[2]/div/div[1]/span/div/div');}
	//get expandCreditCardType(){return browser.$('div=Card Type');}
	    inputValue(parent){return parent.$('input');}
	get creditCardNumberFromPaymentOptions(){return browser.$('[name="input_card.0.card_number"]');}
	get expandcreditCardExpireMonthFromPaymentOptions(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[3]/div[2]/div[2]/div/div[3]/span/div/div');}
	get creditCardExpireMonthFromPaymentOptions(){return browser.$('[name="input_card.0.card_exp_month"]');}
	get expandcreditCardExpireYearFromPaymentOptions(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[3]/div[2]/div[2]/div/div[4]/span/div/div');}
	get creditCardExpireYearFromPaymentOptions(){return browser.$('[name="input_card.0.card_exp_year"]');}
	get autoRetryLable(){return browser.$('[label="Automatically retry processing unsuccessful autopay credit card transactions once every"]');}
	get flagAutoRetry(){return browser.$('[name="flag_auto_retry_cc"]');}
	get expandautoRetry1stOption(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[4]/div[2]/div[2]/div/div');}
	get expandautoRetry2ndOption(){return browser.$('//*[@id="SummaryTabs"]/div[3]/div/div[4]/div[2]/div[4]/div/div');}
	get creditCardAutoRetryCCDays(){return browser.$$('[name="auto_retry_cc_days"]');}
	get eftTranist(){return browser.$('[name="transit"]');}
	get eftInstitue(){return browser.$('[name="institution"]');}
	get eftAccountNumber(){return browser.$('[name="eft_account_number"]');}
	get paymentMemo(){return browser.$('[name="payment_memo"]');}
	get creditBillingZip(){return browser.$('[name="input_card.0.zip_code"]');}
	get creditAppliedToAmount(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[2]/div[2]/div/div[2]/p[2]');}
	get btnBillingOptions(){return browser.$('button*= Billing Options');}


	/**add package and new invoice*/
	get btnPackageAndInvoice(){return browser.$('button=Packages & Invoices');}
	get btnAddPackage(){return browser.$('button=+ Package');}
	get hostingPackage(){return browser.$('//*[@id="code"]');}
	get btnAddToInvoice(){return browser.$('button=Add to Invoice');}
	get btnOpenANewInvoice(){return browser.$('button=Open a new invoice');}
	get btnSaveAndConfigure(){return browser.$('button=Save & Configure');}


	get confirmationMsg(){return browser.$('.MuiAlert-message');}
		isAlertExist(msg){return browser.$('div*='+msg);}
	get popRequiredFieldMsg(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div/p/span');}
	get btnSaveAdditionalDetails(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/form/div[2]/span');}

	get sourceDetailsValidation(){return browser.$('span=Source Details must be alphanumeric, can contain spaces')}

	/**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnPaymentFromMenu(){return browser.$('li=Payments');}
	get btnSettingsBilling(){return browser.$('.MuiToolbar-root').$('//*[@id="settings-tab-1"]');}
	

	/**top menu payment options */
	get btnPaymentOptionsFromMenu(){return browser.$('h6=Payment Options');}
	get btnVisa(){return browser.$('#Visa');}
	get btnMasterCard(){return browser.$('#MasterCard');}
	get btnAmEx(){return browser.$('#AmEx');}
	get btnDiscover(){return browser.$('#Discover');}
	get btnToken(){return browser.$('#Token');}
	get btnPaypal(){return browser.$('#PayPal');}
	get btnEFT(){return browser.$('#EFT');}
	get btneCheck(){return browser.$('#eCheck');}
		svgStatus(parent){return parent.$('svg');}
	get btnDialogOk(){return browser.$('.MuiDialogActions-root').$('button=OK');}
	get btnSaveTopMenu(){return browser.$('.settings-drawer-wrapper').$('span=Save');}
	get btnCloseTopMenu(){return browser.$('.settings-drawer-wrapper').$('[data-testid="CloseIcon"]');}


    open() {
        super.open('login');
		//utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
}
module.exports = new subscriberDetailsPayments();