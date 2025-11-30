var LoginPage = require('../pageobjects/login.page');
var SubAddPackagePage = require('../pageobjects/subscriberDetailsAddPackage.page');
const subscriberlistActions = require('../support/subscriberlistActions');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class subscriberDetailsAddPackageActions{
	
	constructor(){
		this.serviceactivated ='Service is activated successfully.';
		this.suspendedPackageConfMsg = 'Successfully SUSPENDED package.';
		this.unSuspendedPackageConfMsg = 'Successfully UNSUSPENDED package.';
		this.saveSuccessMessage = 'Successfully save';
		this.packageBillingStatus = false;
		this.packageName;
		this.defaultPackageAutoActionStatus;this.defaultSettingsPackageAutoActionStatus;this.defaultHibernationStatus;this.updatedPackageAutoActionStatus;this.updatedHibernationStatus;this.updatedSettingsPackageAutoActionStatus;
		this.secondPackageName;
	}
	
    openVispApp(){
		SubAddPackagePage.open();
	}
	
	loginToVisp(login, password) {
        Utils.login(login, password);
    }
	
	openSubscriberList(){
		SubAddPackagePage.subscribersmenu.waitForExist();
		SubAddPackagePage.subscribersmenu.waitForDisplayed();
		SubAddPackagePage.subscribersmenu.click();
		browser.pause(5000);
		console.log('I open subscriber list');
	}

	openSubscriberFromPaidUp()
	{
		subscriberlistActions.clickAllSubscriberList();
		browser.pause(5000);
		// subscriberlistActions.clickSortingButton("Paid up");
		subscriberlistActions.clickSortingButton("All");
		browser.pause(5000);
		subscriberlistActions.clickOnAnySubscriber();
		browser.pause(3000);
	}
	openSubscriberFromProspect()
	{
		// subscriberlistActions.clickAllSubscriberList();
		// browser.pause(5000);
		// subscriberlistActions.clickSortingButton("Prospect");
		// browser.pause(5000);
		subscriberlistActions.clickOnAnySubscriber();
		browser.pause(3000);
	}

	clickOnAnySubscriber(){
		browser.pause(7000);
		SubAddPackagePage.selectFirstSubscriber.waitForDisplayed();
		SubAddPackagePage.selectFirstSubscriber.click();
	}
	
	getSpecificSubscriberListCount()
	{
		browser.pause(5000);
		let total = SubAddPackagePage.totalcount.getText();
		//console.log('total records are :' + total);
		const myArray = total.split(' ');
		let position = myArray.indexOf("of") + 1;
		return myArray[position];
	}

	clickAllSubscriberList()
	{
		SubAddPackagePage.btn_PastDue.waitForExist();
		SubAddPackagePage.btn_PastDue.waitForDisplayed();
		SubAddPackagePage.btn_PastDue.click();
		SubAddPackagePage.btn_All.waitForDisplayed();
		SubAddPackagePage.btn_All.waitForExist();
		SubAddPackagePage.btn_All.click();
		browser.pause(7000);
	}

	clickOnPackagesAndInvoices(){
		browser.pause(5000);
		SubAddPackagePage.btnPackageAndInvoice.waitForDisplayed();
		SubAddPackagePage.btnPackageAndInvoice.click();
	}

	gotoPaymentsSettings(){
		SubAddPackagePage.btnAppIcon.click();
		browser.pause(2000);
		SubAddPackagePage.btnPaymentFromMenu.waitForDisplayed();
		SubAddPackagePage.btnPaymentFromMenu.click();
		browser.pause(2000);
	}

	clickOnSubscriberName(){
		browser.pause(2000);
		SubAddPackagePage.getSubscriberName.click();
		browser.pause(2000);
	}

	clickAddPackage(){
		browser.pause(2000);
		SubAddPackagePage.btnAddPackage.scrollIntoView();
		browser.pause(1000);
		SubAddPackagePage.btnAddPackage.click();
		browser.pause(2000);
	}

	searchPackage(pacakge){
		browser.pause(1000);
		var dataToPass = pacakge.raw();
		//pacakge = pacakge.replace(/['"]+/g, '');
		SubAddPackagePage.searchPackage.click();
		this.packageName =dataToPass[0][0];
		SubAddPackagePage.searchPackage.setValue(this.packageName);
		browser.pause(2000);
		SubAddPackagePage.findRequiredPackage.waitForDisplayed();
		SubAddPackagePage.findRequiredPackage.click();
	}

	addPackageToInvoice() {
		browser.pause(2000);
		SubAddPackagePage.addPackageToInvoiceBtn.click();
	}

	clickOnDropDownMenuBtn() {
		browser.pause(2000);
		SubAddPackagePage.dropDownMenuBtn.click();
		SubAddPackagePage.dropDownMenuList.click();
		browser.pause(1000);
		SubAddPackagePage.btnAddAndConfigure.click();
	}
	openNewInvoice() {
		browser.pause(2000);
		SubAddPackagePage.openNewInvoiceBtnFromAlert.click();
	}

	clickOnSaveAndConfigureBtn() {
		browser.pause(2000);
		SubAddPackagePage.btnSaveAndConfigure.click();
		browser.pause(5000);
	}

	clickAnyAvailablePackage()
	{
		browser.pause(2000);
		SubAddPackagePage.wirelessPackage.click();
		browser.pause(2000);
	}

	activatePackage()
	{
		//browser.pause(3000);
		//SubAddPackagePage.expandDisabledPackage.click();
		browser.pause(5000);
		//SubAddPackagePage.packageDomain.click();
		//SubAddPackagePage.packageDomain.setValue('testautomation.com');
		SubAddPackagePage.packageDialUp.waitForDisplayed();
		SubAddPackagePage.packageDialUp.scrollIntoView();
		SubAddPackagePage.packageDialUp.click();
		browser.pause(1000);
		SubAddPackagePage.packageUsername.waitForDisplayed();
		SubAddPackagePage.packageUsername.click();
		SubAddPackagePage.packageUsername.setValue('admin'+(Math.floor(new Date() / 1000)));
		SubAddPackagePage.packagePassword.click();
		SubAddPackagePage.packagePassword.setValue('6kYLtN@5');
		SubAddPackagePage.packageVerifyPassword.click();
		SubAddPackagePage.packageVerifyPassword.setValue('6kYLtN@5');
		browser.pause(2000);
		SubAddPackagePage.btnActivate.click();
	}

	clickInvoiceNow()
	{
		browser.pause(2000);
		SubAddPackagePage.btnPackageInvoiceNow.click();
		browser.pause(2000);
	}

	openFirstPackage()
	{
		browser.pause(2000);
		SubAddPackagePage.firstPackage.click();
		//SubAddPackagePage.selectFirstItem.click();
		browser.pause(2000);
	}

	searchAndOpenSpecificPackage(pkgName)
	{
		//pkgName = pkgName.replace(/['"]+/g, '');
		var dataToPass = pkgName.raw();
		browser.pause(2000);
		SubAddPackagePage.packageSearch.click();
		SubAddPackagePage.packageSearch.setValue(dataToPass[0][0]);
		browser.pause(2000);
		SubAddPackagePage.expandSearchItem.click();
	}

	compareBillingDate()
	{
		browser.pause(2000);
		var definedDate = SubAddPackagePage.billingStartDate.getAttribute('value');
		console.log('extracted date is' +definedDate );
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();	
		today = mm + '-' + dd + '-' + yyyy;
		const x = new Date(definedDate);
		const y = new Date(today);
		if(x>y)
		{
			this.packageBillingStatus = true;
		}
	}

	clickOnAddToInvoice()
	{
		browser.pause(2000);
		SubAddPackagePage.btnAddToInvoice.click();
		browser.pause(2000);
	}

	clickChangePackage()
	{
		browser.pause(2000);
		SubAddPackagePage.btnPackageChange.waitForDisplayed();
		SubAddPackagePage.btnPackageChange.click();
	}

	clickChooseAPackage()
	{
		browser.pause(2000);
		SubAddPackagePage.btnChoosePackage.click();
		this.secondPackageName = this.packageName;
		console.log('Second package name='+this.secondPackageName)
		browser.pause(2000);
	}

	clickChoosePackageonPopover()
	{
		browser.pause(2000);
		SubAddPackagePage.btnChoosePackageonPopover.click();
		browser.pause(2000);
	}

	clickBtnSavePackgConfigs()
	{
		browser.pause(2000);
		SubAddPackagePage.saveChangePckgConfigsBtn.click();
		SubAddPackagePage.closeBtnforChangeDockAnchorRight.click();
		console.log('Cross icon clicked');
		browser.pause(2000);
	}
	
	searchAndClickPackageinDialogBox(pacakge){
		browser.pause(1000);
		var dataToPass = pacakge.raw();
		SubAddPackagePage.searchPackage.click();
		this.packageName =dataToPass[0][0];
		SubAddPackagePage.searchPackage.setValue(this.packageName);
		browser.pause(2000);
		SubAddPackagePage.findRequiredPackagefromDialog.click();
	}
	
	getSubscriberPackageAutoOptionsStatus()
	{
		browser.pause(2000);
		SubAddPackagePage.packageAutoActionCheck.scrollIntoView();
		if(SubAddPackagePage.packageAutoActionCheck.isClickable()){

				this.defaultPackageAutoActionStatus = true;
				this.defaultHibernationStatus = true;
			

		}
		else{ 
					this.defaultPackageAutoActionStatus = false;		
		}

		if(SubAddPackagePage.btnPackageHibernate.isClickable())
		{
			this.defaultHibernationStatus = true;
		}
	}

	gotoItemsInAppsSettings(pkgName)
	{
		SubAddPackagePage.btnAppIcon.click();
		browser.pause(3000);
		SubAddPackagePage.btnItemsFromMenu.click();
		browser.pause(2000);
		SubAddPackagePage.btnPackageFromSettings.click();
		browser.pause(2000);
		var allpckgs = SubAddPackagePage.allPackagesFromPopUp;
		for(var i=0; i<allpckgs.length; i++){
			if (allpckgs[i].getText()===pkgName){
				browser.pause(2500);
				allpckgs[i].click();
				break;
			}
			browser.pause(500);
		}
		browser.pause(2000);
		SubAddPackagePage.btnLegacyPackageConfigurations.click();
		browser.pause(2000);
		SubAddPackagePage.btnPackageHibernation.click();
	}


	getPackageItemAutoOptionsFromSettings()
	{
		browser.pause(3000);
		if(SubAddPackagePage.svgStatus(SubAddPackagePage.packageSettingsAutoActionCheck).getAttribute('data-testid')==="CheckBoxOutlineBlankIcon"){
			this.defaultSettingsPackageAutoActionStatus = false;
		}
		else{this.defaultSettingsPackageAutoActionStatus = true;}
	}

	changePackageSettingsAutoActionsAndGetStatus()
	{
		if(this.defaultSettingsPackageAutoActionStatus===false)
		{	
			browser.pause(2000);
			SubAddPackagePage.packageSettingsAutoActionCheck.click();
			browser.pause(2000);
			SubAddPackagePage.btnSaveTopMenu.scrollIntoView();
			SubAddPackagePage.btnSaveTopMenu.click();
			this.defaultSettingsPackageAutoActionStatus=true;
			browser.pause(2000);
			
		}
		this.updatedSettingsPackageAutoActionStatus = true;
		SubAddPackagePage.btnCloseTopMenuPackage.scrollIntoView();
		SubAddPackagePage.btnCloseTopMenuPackage.click();
		browser.pause(2000);
		SubAddPackagePage.btnCloseTopMenu.click();
		
	}

	getPackageUpdatedAutoActionStatus()
	{
		browser.pause(2000);
		SubAddPackagePage.packageAutoActionCheck.scrollIntoView();
		if(SubAddPackagePage.packageAutoActionCheck.isClickable()){
			this.updatedPackageAutoActionStatus = true;
			this.updatedHibernationStatus = true;
		}
		else{
			this.updatedPackageAutoActionStatus = false;
		}
		if(SubAddPackagePage.btnPackageHibernate.isClickable())
		{
			this.updatedHibernationStatus = true;
		}
		else
		{
			this.updatedHibernationStatus = false;
		}
	}

	disableHibernateOptionsIfEnabled()
	{
		browser.pause(2000);
		if(SubAddPackagePage.svgStatus(SubAddPackagePage.packageSettingsAutoActionCheck).getAttribute('data-testid')==="CheckBoxIcon"){
		//	this.changePackageSettingsAutoActionsAndGetStatus();
			browser.pause(2000);
			SubAddPackagePage.packageSettingsAutoActionCheck.click();
			SubAddPackagePage.btnSaveTopMenu.scrollIntoView();
			SubAddPackagePage.btnSaveTopMenu.click();
			browser.pause(2000);
			SubAddPackagePage.btnCloseTopMenuPackage.scrollIntoView();
			SubAddPackagePage.btnCloseTopMenuPackage.click();
			browser.pause(2000);
			SubAddPackagePage.btnCloseTopMenu.click();
		}
	}

	selectActivatedPackage()
	{
		browser.pause(2000);
		SubAddPackagePage.expandSearchItem.click();
		browser.pause(3000);
	}

	clickSuspendButton()
	{
		browser.pause(5000);
		SubAddPackagePage.btnPackageSuspend.click();
	}

	selectSuspendedPackage()
	{
		browser.pause(5000);
		var allPackagesStatus = SubAddPackagePage.getPackageStatusFromSubDrawer;
		for(var i=0; i<allPackagesStatus.length; i++)
		{
			var pathStatus = SubAddPackagePage.pathSelector(allPackagesStatus[i]).getAttribute('d');
			if(pathStatus =='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z')
			{
				allPackagesStatus[i].scrollIntoView();
				browser.pause(1000);
				SubAddPackagePage.expandSearchItem.click();
				break;
			}
		}
	}

	clickUnsuspendButton()
	{
		browser.pause(5000);
		SubAddPackagePage.btnPackageUnsuspend.waitForDisplayed();
		SubAddPackagePage.btnPackageUnsuspend.waitForExist();
		SubAddPackagePage.btnPackageUnsuspend.click();
	}


	verifypackageservicearea()
	{
		browser.pause(2000);
		expect(SubAddPackagePage.getHeading('Packages/Services').isExisting()).to.be.true;
		expect(SubAddPackagePage.btnAddPackageFromTop.isExisting()).to.be.true;
		expect(SubAddPackagePage.getAllAttachedPackages.length>=0).to.be.true;
	}

	VerifyTotalAmountWithPackageAmount() {
		browser.pause(3000);
		var allrates = SubAddPackagePage.getAllRateColumns;
		var totalRate = 0;
		for(var i=0; i<allrates.length; i++)
		{
			var getrate = allrates[i].getText();
			totalRate = totalRate + Number(getrate);
		}
		expect('$' + totalRate).to.eql(SubAddPackagePage.totAmmount.getText());
	}

	verifyTotalAmountForNewInvoice()
	{
		expect('$' + SubAddPackagePage.pkgAmmount.getText()).to.eql(SubAddPackagePage.totAmmount.getText());
	}

	verifyPackageSaveButtonEnabled() {
		browser.pause(2000);
		expect(SubAddPackagePage.pkgSaveConfigureBtn.getAttribute('disabled')).to.eql(null);
	}

	verifyConfigureFormOpens() {
		this.clickOnSaveAndConfigureBtn();
		browser.pause(10000);
		var getStyle = SubAddPackagePage.configureForm.getAttribute('style');
		expect(getStyle.includes('visibility: hidden;')).to.be.false;
	}

	verifyPackageConfigurationPanelOpened()
	{
		browser.pause(4000);
		expect(SubAddPackagePage.addPackageAndService.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnPackageDelete.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnPackageChange.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnPackageSuspend.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnPackageHibernate.isExisting()).to.be.true;
		expect(SubAddPackagePage.getHeading('Package Services Summary').isExisting()).to.be.true;
		expect(SubAddPackagePage.getHeading('Package Pricing').isExisting()).to.be.true;
		expect(SubAddPackagePage.getHeading('Package Billing Status').isExisting()).to.be.true;
		expect(SubAddPackagePage.getHeading('Package Auto Actions').isExisting()).to.be.true;
		expect(SubAddPackagePage.viewCurrentInvoice.isExisting()).to.be.true;
		browser.pause(1000);
		SubAddPackagePage.btnPackageAdditionalInfo.click();
		browser.pause(3000);
		expect(SubAddPackagePage.getHeading('Associated Location').isExisting()).to.be.true;
		expect(SubAddPackagePage.packageAdditionalAddress.isExisting()).to.be.true;
		expect(SubAddPackagePage.packageAdditionalAddressTwo.isExisting()).to.be.true;
		expect(SubAddPackagePage.packageAdditionalCity.isExisting()).to.be.true;
		expect(SubAddPackagePage.packageAdditionalZip.isExisting()).to.be.true;
	}

	verifyPackageActivated()
	{
		var msg;
		SubAddPackagePage.confirmationMsg.waitForDisplayed();
		msg = SubAddPackagePage.confirmationMsg.getText();
		expect(msg).to.eql(this.serviceactivated);
		browser.pause(3000);
		subscriberlistActions.clickOnAnySubscriber();
		browser.pause(3000);
		expect(SubAddPackagePage.getPackageStatus.getAttribute('style')!=="fill: rgb(98, 221, 82);").to.be.true;
	}

	verifyActivatedPackageLogs()
	{
		SubAddPackagePage.btnTransactions.click();
		browser.pause(2000);
		SubAddPackagePage.openrecentLogItem.click();
		browser.pause(7000);
		expect(SubAddPackagePage.logFromPpopUp.getText()).to.eql(this.packageName+' service [testautomation.com] has been activated in the ['+this.packageName+'] package.');
	}

	verifyPackageBillingDetails()
	{
		browser.pause(3000);
		expect(this.packageBillingStatus).to.be.false;
		expect(SubAddPackagePage.getHeading('Package Billing Status').isExisting()).to.be.true;
		expect(SubAddPackagePage.billingStartDate.getAttribute('class').includes('Mui-disabled')).to.be.true;
		expect(SubAddPackagePage.viewCurrentInvoice.isExisting()).to.be.true;
	}

	verifyInvoiceNowButtonNotPresent()
	{
		expect(SubAddPackagePage.btnPackageInvoiceNow.isClickable()).to.be.false;
	}

	verifyBillingDatePicker()
	{
		browser.pause(3000);
		SubAddPackagePage.billingStartDate.click();
		browser.pause(5000);
		var alldays = SubAddPackagePage.allweekdays;
		expect(alldays[0].getText()).to.eql('Su');
		expect(alldays[1].getText()).to.eql('Mo');
		expect(alldays[2].getText()).to.eql('Tu');
		expect(alldays[3].getText()).to.eql('We');
		expect(alldays[4].getText()).to.eql('Th');
		expect(alldays[5].getText()).to.eql('Fr');
		expect(alldays[6].getText()).to.eql('Sa');
	}

	verifyInvoiceNowButtonPresentAndEnabled()
	{
		expect(SubAddPackagePage.btnPackageInvoiceNow.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnPackageInvoiceNow.isClickable()).to.be.false;
	}

	verifyInvoiceAndTermDates()
	{
		browser.pause(3000);
		expect(this.packageBillingStatus).to.be.false;
		expect(SubAddPackagePage.billingInvoiceDate.getAttribute('hidden')).to.eql('true');
		expect(SubAddPackagePage.billingTermDate.getAttribute('hidden')).to.eql('true');
	}

	verifyAddToInvoicePrompt()
	{
		expect(SubAddPackagePage.btnSyncInvoice.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnOpenANewInvoice.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnCancel.isExisting()).to.be.true;
		expect(SubAddPackagePage.btnProceedText.isExisting()).to.be.true;
	}

	verifyPackageSaved()
	{
		var msg;
		SubAddPackagePage.confirmationMsg.waitForDisplayed();
		msg = SubAddPackagePage.confirmationMsg.getText();
		expect(msg).to.eql(this.saveSuccessMessage);
		browser.pause(2000);
	}

	verifyPrompttoApplyChangesonCurrentorNextInvoice()
	{
		expect(SubAddPackagePage.startBillingPromptforNextTerm.isExisting()).to.be.true;
		expect(SubAddPackagePage.promptforBillforNextBilling.isExisting()).to.be.true;
		expect(SubAddPackagePage.promptforReverseUnusedMonths.isExisting()).to.be.true;
		expect(SubAddPackagePage.promptforReverseUnusedPeriod.isExisting()).to.be.true;
		console.log('I reached '+ SubAddPackagePage.startBillingPromptforNextTerm);
	}

	verifyChangedPackageLogs()
	{
		SubAddPackagePage.btnTransactions.click();
		browser.pause(2000);
		SubAddPackagePage.openrecentLogItem.click();
		browser.pause(7000);
		console.log('['+this.secondPackageName+'] package has been changed to ['+this.packageName+'] package with the following data:\nPackage Billing Option: Start billing for the next term on the next Invoice Day');
		expect(SubAddPackagePage.logFromPpopUp.getText()).to.eql('['+this.secondPackageName+'] package has been changed to ['+this.packageName+'] package with the following data:');
	}

	verifyAutoActionOptions()
	{
		expect(this.defaultPackageAutoActionStatus).to.eql(this.defaultSettingsPackageAutoActionStatus);
		expect(this.defaultSettingsPackageAutoActionStatus).to.eql(this.defaultHibernationStatus);
		expect(this.updatedPackageAutoActionStatus).to.eql(this.updatedSettingsPackageAutoActionStatus);
		expect(this.updatedSettingsPackageAutoActionStatus).to.eql(this.updatedHibernationStatus);
	}

	verifyAutoHibernateOptionNotPresent()
	{
		browser.pause(2000);
		expect(SubAddPackagePage.autoHibernateOption.isExisting()).to.be.false;
		expect(SubAddPackagePage.btnPackageHibernate.isClickable()).to.be.false;
	}
	
	verifySuspendedPackageHaveRedDot()
	{
		var msg;
		SubAddPackagePage.confirmationMsg.waitForDisplayed();
		msg = SubAddPackagePage.confirmationMsg.getText();
		expect(msg).to.eql(this.suspendedPackageConfMsg);
		browser.pause(3000);
		var pathStatus = SubAddPackagePage.pathSelector(SubAddPackagePage.getPackageStatusFromSubDrawer[0]).getAttribute('d');
		expect(pathStatus).to.eql('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z');
	}

	verifySuspendedSubscriberStatus()
	{
		expect(SubAddPackagePage.btnPackageUnsuspend.isExisting()).to.be.true;
		browser.pause(2000);
		expect(SubAddPackagePage.getSuspendedSubscriberStatus.getAttribute('class').includes('text-danger')).to.be.true;
		var pathStatus = SubAddPackagePage.pathSelector(SubAddPackagePage.getSuspendedSubscriberStatus).getAttribute('d');
		expect(pathStatus).to.eql('M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z');
	}

	verifyPackageGreenStatus()
	{
		var msg;
		SubAddPackagePage.confirmationMsg.waitForDisplayed();
		msg = SubAddPackagePage.confirmationMsg.getText();
		expect(msg).to.eql(this.unSuspendedPackageConfMsg);
		browser.pause(3000);
		var pathStatus = SubAddPackagePage.pathSelector(SubAddPackagePage.getPackageStatusFromSubDrawer[0]).getAttribute('d');
		expect(pathStatus).to.eql('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z');
	}

	verifySubscriberGreenStatus()
	{
		//expect(SubAddPackagePage.btnPackageSuspend.isExisting()).to.be.true;
		browser.pause(5000);
		expect(SubAddPackagePage.getGreenSubscriberStatus.getAttribute('class').includes('text-success')).to.be.true;
		var pathStatus = SubAddPackagePage.pathSelector(SubAddPackagePage.getGreenSubscriberStatus).getAttribute('d');
		expect(pathStatus).to.eql('M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z');
	}
}
module.exports = new subscriberDetailsAddPackageActions();
