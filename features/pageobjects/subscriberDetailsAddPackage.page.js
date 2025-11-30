const utils = require('../support/utils');
"use strict";
var Page = require('./page')
class subscriberDetailsAddPackage extends Page {


	get noDataAvailableIsExist(){return browser.$('p*=No Data Available...').isExisting();}
	get getPackageStatus(){return browser.$('[data-testid="LensIcon"]');}
	get expandPackageMenu(){return browser.$('[data-testid="ArrowRightIcon"]');}
	get suspendPackage(){return browser.$('li=Suspend');}
	get selectFirstItem(){return browser.$('.MuiTreeView-root').$('.MuiTreeItem-group').$('.MuiTreeItem-iconContainer')}
	get firstPackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[2]/div[1]/div[2]/div/div/div[1]/div/div[2]/div/div[1]/span');}
	get wirelessPackage(){return browser.$('[aria-label="Wireless"]');}
	    anyPackageName(pckgName){return browser.$('[aria-label="'+pckgName+'"]');}
	get closeRightDrawer(){return browser.$('[data-testid="CloseIcon"]');}
	    pathSelector(parentElement){return parentElement.$('path');}
	get totalcount() {return browser.$('p*=Records with page size');}
	get btnTransactions(){return browser.$('button=Transactions');}
	get btnAddPackageFromTop(){return browser.$('[data-testid="AddCircleOutlineIcon"]');}
	get getAllAttachedPackages(){return browser.$$('.subscriber-summary-boxes')[1].$$('d-inline-block');}
	get getSubscriberName() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[2]/div[1]/div/div/button[1]');}					
	get openrecentLogItem(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[5]/div/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div/div/div[2]');}
	get getPackageStatusFromSubDrawer(){return browser.$('.MuiTreeView-root').$$('[data-testid="LensIcon"]');}
	get getSuspendedSubscriberStatus(){return browser.$('[data-testid="PersonOutlineIcon"]');}
	get getGreenSubscriberStatus(){return browser.$('.MuiDrawer-paperAnchorRight').$('[data-testid="PersonIcon"]');}
	/**Payments*/
	get btnPayments(){return browser.$('//*[@id="SummaryTabs"]/div[1]/div/div/button[2]/span');}
	get btnPostPaymentCreditMemo(){return browser.$('button=Post Payment/Credit Memo');}
	get btnPaymentOptions(){return browser.$('button=Payment Options');}
	get radioReceivePayment(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[1]/div[1]/div/label[1]/span[1]');}
	get radiocreditMemo(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[1]/div[1]/div/label[2]/span[1]');}
	    getPaymentOptionFromDD(itemName){return browser.$('#SummaryTabs').$('li='+itemName);}

	get allDropDowns(){return browser.$('#SummaryTabs').$$('[data-testid="ArrowDropDownIcon"]');}
	get expandCreditExpireOn(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[2]/div[5]/div/div').$('.MuiSelect-standard');}
	get expandCreditYearsOn(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div[2]/div[6]/div/div').$('.MuiSelect-standard');}
		getListItem(itemName){return browser.$('li='+itemName);}


	/**add package and new invoice*/
	get btnPackageAndInvoice(){return browser.$('button=Packages & Invoices');}
	get btnAddPackage(){return browser.$('button=+ Package');}
	get hostingPackage(){return browser.$('//*[@id="code"]');}
	get btnAddToInvoice(){return browser.$('button=Add to Invoice');}
	get btnAddAndConfigure(){return browser.$('button=Add and Configure');}
	get btnOpenANewInvoice(){return browser.$('button=Open a new invoice');}
	get btnSaveAndConfigure(){return browser.$('button=Save & Configure');}
	get allAvailablePackages(){return browser.$$('//*[@id="code"]');}
	get packagePrice(){return browser.$('h6=Package Pricing');}
	get showEachPackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/div[2]/div/div/div[2]/div/div[2]/label');}
	get searchPackage(){return browser.$('#searchPackage');}
	get expandButtonOptions(){return browser.$('.MuiButtonGroup-contained').$('[data-testid="ArrowDropDownIcon"]');}
	get btnSyncInvoice(){return browser.$('button=Sync term with The Upcoming Invoice');}
	get btnCurrentInvoice(){return browser.$('button=Go to the current invoice');}
	get btnCancel(){return browser.$('button=Cancel');}
	get closeBtnforChangeDockAnchorRight() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[1]/div/div[2]/button');}
	get btnProceedText(){return browser.$('.MuiDialog-container').$('p=The Billing Start Date set is outside the billing term scope of this upcoming invoice. How would you like to proceed?');}
	get getAllRateColumns(){return browser.$$('#tRate');}
	//get packageInvoiceAmount(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr/td[7]/h6');}
	//get totalForInvoice(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[4]/h6');}

	/**package details*/
	getHeading(headingName){return browser.$('h6*='+headingName);}
	get addPackageAndService(){return browser.$('button=Add Package/Service');}
	get btnPackageAdditionalInfo(){return browser.$('button=Additional Information');}
	get btnPackageDelete(){return browser.$('button=Delete');}
	get btnPackageChange(){return browser.$('button=Change');}
	get btnPackageSuspend(){return browser.$('button=Suspend');}
	get btnPackageUnsuspend(){return browser.$('button=Unsuspend');}
	get btnPackageHibernate(){return browser.$('button=Hibernate');}
	get viewCurrentInvoice(){return browser.$('span=View the current invoice');}
	get btnPackageInvoiceNow(){return browser.$('button=Invoice Now');}
	get packageAdditionalAddress(){return browser.$('[name ="package_location_address1"]');}
	get packageAdditionalAddressTwo(){return browser.$('[name ="package_location_address2"]');}
	get packageAdditionalCity(){return browser.$('[name ="package_location_city"]');}
	get packageAdditionalZip(){return browser.$('[name ="package_location_zip"]');}
	get expandDisabledPackage(){return browser.$('[data-testid="RemoveCircleIcon"]');}
	get packageDomain(){return browser.$('[name ="domain"]');}
	get packageDialUp(){return browser.$('.MuiTreeItem-content=Dialup');}
	get packageUsername(){return browser.$('[name ="username"]');}
	get packagePassword(){return browser.$('[name ="password"]');}
	get packageVerifyPassword(){return browser.$('[name ="confirmPassword"]');}
	get btnActivate(){return browser.$('button=Activate');}
	get logFromPpopUp(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div/h6[1]/div');}
	get packageSearch(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div/div[2]/div/div[1]/div/div/div[2]/input')}
	get expandSearchItem(){return browser.$('[data-testid="ChevronRightIcon"]')};
	get billingStartDate(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div[3]/div/div[2]/div[2]/div[2]/div/div/div[1]/div');}
	get allweekdays(){return browser.$$('.dow');}
	get billingInvoiceDate(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div[3]/div/div[2]/div[3]');}
	get billingTermDate(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div[3]/div/div[2]/div[4]');}

	get findRequiredPackage() {return browser.$('#code')}
	get addPackageToInvoiceBtn() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/div[3]/header/div/div[2]/span[3]/div/span/span/button')}
	get openNewInvoiceBtnFromAlert() {return browser.$('/html/body/div[2]/div[3]/div/div[2]/button[2]')}
	get pkgAmmount() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/table/tbody/tr[1]/td[7]/h6')}
	get totAmmount() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[5]/div/div[2]/div/table/tbody/tr/td[4]/h6')}

	get pkgSaveConfigureBtn() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/div/span[1]/span/button')}
	get saveChangePckgConfigsBtn() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[3]/div[2]/span/button')}
	get configureForm() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[6]/div')}
	get dropDownMenuBtn() {return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[3]/div[3]/div/div[2]/div/div[4]/div/div[3]/header/div/div[2]/span[3]/div/button')}
	get dropDownMenuList() {return browser.$('//*[@id="split-button-menu"]/span[1]/li')}
	
	get confirmationMsg(){return browser.$('.MuiAlert-message');}
	get popRequiredFieldMsg(){return browser.$('/html/body/div[2]/div[3]/div/div[1]/div/p/span');}
	get btnSaveAdditionalDetails(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/form/div[2]/span');}
	get btnChoosePackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[4]/div/div[4]/div/div[2]/div[2]/div/div[2]/div[2]/button')}
	get btnChoosePackageonPopover(){return browser.$('/html/body/div[2]/div[3]/div/div/div/div[3]/header/div/div[2]/span[2]/button');}

	get sourceDetailsValidation(){return browser.$('span=Source Details must be alphanumeric, can contain spaces');}

	get startBillingPromptforNextTerm(){return browser.$('span=Start billing for the next term on the next Invoice Day')}
	get promptforBillforNextBilling(){return browser.$('span=Bill now for the next billing term')}
	get promptforReverseUnusedMonths(){return browser.$('span=Reverse unused months of the current term and bill for a new term')}
	get promptforReverseUnusedPeriod(){return browser.$('span=Reverse full unused period of the current term and bill for a new term')}
    get findRequiredPackagefromDialog(){return browser.$('//*[@id="code"]');}
	get packageAutoActionCheck(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div[4]/div/div[2]/label');}
	get packageAutoActionCheckbox(){return browser.$('//*[@id="SummaryTabs"]/div[2]/div/div[4]/div/div[2]/label/span/svg');}
	get autoHibernateOption(){return browser.$('li=Auto-Hibernate')}

	/**top menu */
	get btnAppIcon(){return browser.$('[data-testid="AppsIcon"]');}
	get btnItemsFromMenu(){return browser.$('li=Items');}
	

	/**top menu Items options */
	   svgStatus(parent){return parent.$('svg');}
	get btnPackageFromSettings(){return browser.$('.settings-drawer-wrapper').$('span=Package');}
	get allPackagesFromPopUp(){return browser.$('.settings-drawer-wrapper').$('.bottomRightGrid').$('.ReactVirtualized__Grid__innerScrollContainer').$$('.MuiTableCell-root');}
	get btnLegacyPackageConfigurations(){return browser.$('button=Legacy Package Configurations');}
	get btnPackageHibernation(){return browser.$('button=Package Hibernation');}
	get packageSettingsAutoActionCheck(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[5]/div/div/div/div[2]/div/div[4]/div[1]/div[2]/div[2]/div/div[1]/label')}
	get packageSettingsAutoActionCheckbox(){return browser.$('//main/div[5]/div/div[2]/div[5]/div/div/div/div[2]/div/div[4]/div[1]/div[2]/div[2]/div/div[1]/label/span[1]/input');}
	get btnDialogOk(){return browser.$('.MuiDialogActions-root').$('button=OK');}
	get btnSaveTopMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[5]/div/div/div/div[2]/div/div[4]/div[2]/span/button');}
	get btnCloseTopMenuPackage(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[5]/div/div/div/div[1]/div/div[2]/button');}
	get btnCloseTopMenu(){return browser.$('//*[@id="app-inner"]/div[2]/div[2]/main/div[5]/div/div[2]/div[1]/div/div[2]/button[2]');}


    open() {
        super.open('login');
		//utils.clearLocalStorage();
    }
    
    submit() {
        this.form.submitForm();
    }
}
module.exports = new subscriberDetailsAddPackage();