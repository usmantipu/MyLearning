var LoginPage = require('../pageobjects/login.page');
var subPkgInv = require('../pageobjects/subscriberDetailsPackageInvoice.page');
const subscriberlistActions = require('../support/subscriberlistActions');
var Utils = require('./utils');
var expect = require('chai').expect; 
var should = require('chai').should();

class subscriberDetailsPackageInvoiceActions{
	
	constructor(){
		this.userName;this.existingUserName;
		this.customerID;
		this.invoiceNumber;
		this.voidInvoiceConfMsg='INVOICE voided successfully';
		this.totalForTheInvoice;
		this.actualActivePackageCount;
		this.summaryInvoiceDate;this.summaryInvoiceAmount;this.summaryInvoiceBalance;this.summaryInvoiceNumber;//TA-65
		this.otherNewItemName;this.otherItemRate;//TA-148
		this.OtherItemAddedConfMsg='Customer item added successfully.';
		this.billingCycle;
		this.itemRemovedConfMsg='Item removed successfully.';
		this.specificPackageCount;
		this.dateToSetAndVerify;
		this.otherItemQuantity;this.otherItemTax;this.OtherItemTotalAmount;
		this.beforeInvoice;
	}

	keepSubscriberDetails()
	{
		this.customerID = subPkgInv.subCustomerID.getText();
		this.userName = subPkgInv.subUserName.getText();
		this.existingUserName = this.userName;
	}

	selectPackageInvoicing()
	{
		browser.pause(2000);
		subPkgInv.btnPackageInvoicing.click();
		browser.pause(2000);
	}

	checkApplyInvoicingSuspension()
	{
		if(subPkgInv.svgStatus(subPkgInv.invoicingSuspension).getAttribute('data-testid')=="CheckBoxOutlineBlankIcon")
		{
			subPkgInv.inputInvoicingSuspension.click();
			browser.pause(2000);
			subPkgInv.btnSaveTopMenu.click();
		}
		browser.pause(3000);
		subPkgInv.btnCloseTopMenu.click();
	}

	takeNoteActivePackageInCurrentInvoice()
	{
		browser.pause(2000);
		var allpackages = subPkgInv.allActivePackageCountOfInvoice;
		this.actualActivePackageCount =0;
		for(var i=0; i<allpackages.length; i++){
			if(allpackages[i].getAttribute('style').includes('fill: rgb(98, 221, 82);'))
			{
				this.actualActivePackageCount++;
			}
		}
	}

	selectCurrentActivePackage()
	{
		subPkgInv.selectPackage.click();
		browser.pause(5000);
		//subPkgInv.expandSelectedPackage.click();
		subPkgInv.packageDialUp.waitForDisplayed();
		subPkgInv.packageDialUp.scrollIntoView();
		subPkgInv.packageDialUp.click();
		browser.pause(3000);
		if(subPkgInv.btnDeactivate.isClickable())
		{
			subPkgInv.btnDeactivate.click();
		}
		browser.pause(3000);
	}

	selectInvoiceFromTableWithProvidedStatus(invoiceStatus)
	{
		browser.pause(5000);
		subPkgInv.expandInvoiceStatus.click();
		browser.pause(5000);
		var allInvoiceStatements = subPkgInv.invoiceStatementsData;
		for(var i=0; i<allInvoiceStatements.length; i++){
			if(allInvoiceStatements[i].getText().includes(invoiceStatus))
			{
				if(invoiceStatus.includes('Upcoming'))// changes made for TA-65 scenario #6 and #7
				{
					browser.pause(4000);
					this.summaryInvoiceDate = allInvoiceStatements[i-1].getText();
					this.summaryInvoiceAmount = allInvoiceStatements[i+3].getText();
					this.summaryInvoiceNumber = allInvoiceStatements[i+2].getText();
				}
				if(invoiceStatus.includes('quote'))
				{
					browser.pause(4000);
					this.summaryInvoiceDate = allInvoiceStatements[i-1].getText();
					this.summaryInvoiceAmount = allInvoiceStatements[i+3].getText();
					this.summaryInvoiceNumber = allInvoiceStatements[i].getText();
				}
				allInvoiceStatements[i].click();
				break;
			}
		}
		browser.pause(3000);
		if(invoiceStatus.includes('quote')){}
		else{
			this.userName = subPkgInv.selectedInvoiceRow[5].getText();
			this.customerID = subPkgInv.selectedInvoiceRow[6].getText();
			this.invoiceNumber = subPkgInv.selectedInvoiceRow[8].getText();
		}
	}

	selectInvoiceFromTableOtherThanUpcomingAndQuote()
	{
		browser.pause(5000);
		subPkgInv.expandInvoiceStatus.click();
		browser.pause(5000);
		var allInvoiceStatements = subPkgInv.invoiceStatementsData;
		for(var i=0; i<allInvoiceStatements.length; i++){
			//console.log(allInvoiceStatements[i].getText());
			if(allInvoiceStatements[i].getText().includes('Paid') || allInvoiceStatements[i].getText().includes('Invoice - Open'))
			{
				allInvoiceStatements[i].moveTo();
				allInvoiceStatements[i].click();
				break;
			}
		}
		browser.pause(3000);
		this.userName = subPkgInv.selectInvoiceRow[0].getText();
		this.customerID = subPkgInv.selectInvoiceRow[1].getText();
		this.invoiceNumber = subPkgInv.selectInvoiceRow[3].getText();
	}

	selectInvoiceOpenFromTable()
	{
		browser.pause(5000);
		subPkgInv.expandInvoiceStatus.click();
		browser.pause(5000);
		var allInvoiceStatements = subPkgInv.invoiceStatementsData;
		for(var i=0; i<allInvoiceStatements.length; i++){
			if(allInvoiceStatements[i].getText().includes('invoice - Open'))
			{
				allInvoiceStatements[i].click();
				break;
			}
		}
		browser.pause(3000);
	}
	
	clickEmailButton()
	{
		subPkgInv.btnEmailFromInvoice.click();
		browser.pause(3000);
	}

	selectUpcomingInvoiceAlreadyNotSelected(invoiceStatus)
	{
		if(subPkgInv.btnUpcomingInvoice.isExisting()){
			this.userName = subPkgInv.selectInvoiceRow[0].getText();
			this.customerID = subPkgInv.selectInvoiceRow[1].getText();
			this.invoiceNumber = subPkgInv.selectInvoiceRow[3].getText();
		}
		else{
			this.selectInvoiceFromTableWithProvidedStatus(invoiceStatus);
		}
	}

	expandDottedMenu()
	{
		browser.pause(2000);
		subPkgInv.expandPackageInvoiceDottedMenu.click();
		browser.pause(2000);
	}

	selectOptionFromDottedMenu(invoiceType)
	{
		invoiceType = invoiceType.replace(/['"]+/g, '');
		console.log('invoice type '+ invoiceType);
		browser.pause(2000);
		subPkgInv.getListItem(invoiceType).click();
	}

	clickMoreButton()
	{
		browser.pause(2000);
		subPkgInv.btnInvoiceMore.click();
		browser.pause(2000);
	}

	clickAddToQuote()
	{
		browser.pause(2000);
		subPkgInv.btnAddToQuote.click();
		browser.pause(3000);
	}

	clickSaveAndConfigure()
	{
		subPkgInv.btnSaveAndConfigure.click();
		browser.pause(5000);
	}

	clickClosePackageDrawer()
	{
		browser.pause(3000);
		this.specificPackageCount = subPkgInv.packageCount('Hosting').length;
		subPkgInv.btnCloseAddedPackage.click();
		browser.pause(5000);
	}

	clickConvertToInvoice()
	{
		browser.pause(2000);
		subPkgInv.btnConvertToInvoice.click();
		browser.pause(1000);
		subPkgInv.btnYesConvertToInvoice.click();
		browser.pause(2000);
	}

	keepQuoteAmountBeforeInvoice()
	{
		browser.pause(3000);
		this.summaryInvoiceAmount = subPkgInv.oldTotalForInvoice.getText();
		console.log('extracted amount is'+this.summaryInvoiceAmount);
		this.summaryInvoiceBalance = subPkgInv.totalForTheInvoice.getText();
		console.log('extracted balance is'+this.summaryInvoiceBalance);
	}

	clickAddToANewInvoice()
	{
		subPkgInv.chooseAddToNewInvoice.waitForDisplayed();
		if(subPkgInv.chooseAddToNewInvoice.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			subPkgInv.inputAddToNewInvoice.click();
		}
		subPkgInv.clickOkOfConfirm.click();
		browser.pause(3000);
	}

	clickYesInvoidInvoice()
	{
		browser.pause(2000);
		subPkgInv.yesVoidThisInvoice.click();
	}

	clickOpenANewInvoice()
	{
		browser.pause(2000);
		if(subPkgInv.btnOpenANewInvoice.isExisting())
		{
			subPkgInv.btnOpenANewInvoice.waitForDisplayed();
			subPkgInv.btnOpenANewInvoice.waitForClickable();
			subPkgInv.btnOpenANewInvoice.click();
		}
		
	}
	
	///// TA-65 ////
	selectFirstPackage()
	{
		subPkgInv.selectPackage.click();
		browser.pause(5000);
	}

	checkDefaultPackageSuspendedInactiveSelected()
	{
		browser.pause(3000);
		var saveStatus=false;
		if(subPkgInv.defaultPackageSuspendedInactive.getAttribute('class').includes('Mui-checked')){}
		else
		{
			subPkgInv.defaultPackageSuspendedInactive.click();
			saveStatus = true;
		}
		if(saveStatus=== true)
		{
			browser.pause(2000);
			subPkgInv.btnSaveTopMenu.waitForDisplayed();
			subPkgInv.btnSaveTopMenu.click();
			browser.pause(2000);
		}
		browser.pause(2000);
		subPkgInv.btnCloseTopMenu.click();
	}

	openTransactionTab() {
		browser.pause(1000);
		subPkgInv.btnTransactions.click();
	}

	clickAvailableInvoiceOnTransactionTab(itemToSelect)
	{
		browser.pause(5000);
		var allTransData = subPkgInv.allTransactionsData;
		for(var i=0; i<allTransData.length; i++){
			if(allTransData[i].getText().includes(itemToSelect))
			{
				this.summaryInvoiceDate = allTransData[i-1].getText();
				this.summaryInvoiceNumber = allTransData[i].getText();
				allTransData[i].click();
				break;
			}
		}
		browser.pause(5000);
	}

	selectAndEditInvoiceUsername()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var invoiceData = subPkgInv.selectInvoiceRow;
		invoiceData[0].click();
		browser.pause(1000);
		subPkgInv.userName.click();
		subPkgInv.userName.keys(clearKeys);
		this.userName = this.generateRandomName();
		subPkgInv.userName.setValue(this.userName);		
	}

	generateRandomName()
	{
		const num = 8;
   		let res = '';
   		for(let i = 0; i < num; i++){
      		const random = Math.floor(Math.random() * 27);
      		res += String.fromCharCode(97 + random);
   		};
   		return res.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	}

	selectAndEnterAlreadyTakenUsername()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		var invoiceData = subPkgInv.selectInvoiceRow;
		invoiceData[0].click();
		browser.pause(1000);
		subPkgInv.userName.click();
		subPkgInv.userName.keys(clearKeys);
		subPkgInv.userName.setValue(this.existingUserName);
	}

	saveUsernameChanges()
	{
		browser.pause(1000);
		subPkgInv.btnSaveUserName.click();
	}

    openVispApp(){
		subPkgInv.open();
	}
	
	loginToVisp(login, password) {
        Utils.login(login, password);
    }

	gotoPaymentsSettings(){
		subPkgInv.btnAppIcon.click();
		browser.pause(2000);
		subPkgInv.btnPaymentFromMenu.waitForDisplayed();
		subPkgInv.btnPaymentFromMenu.click();
		browser.pause(2000);
	}

	
	/*    < --   TA-148  -- >     */
	clickAddtothecurrentopeninvoice()
	{
		subPkgInv.chooseAddtothecurrentopeninvoice.click();
		subPkgInv.clickOkOfConfirm.click();
		browser.pause(3000);
	}
	keepOpenInvoiceAmountBeforeInvoice()
	{
		// browser.pause(2000);
		// this.summaryQuoteAmount = subPkgInv.totalForTheInvoice.getText();
		// console.log('\n\n' + this.summaryQuoteAmount + '\n\n');
		// console.log('\n\n I am here \n\n');
		// subPkgInv.btnQuoteInvoiceUpcomingInvoice.click();
		// console.log('\n\n I am here \n\n');
		// browser.pause(2000);
		// var count = 0;
		// // for (var i = 0; i < subPkgInv.isExistOpenInvoice.length; ++i)
		// // 	if(subPkgInv.isExistOpenInvoice[i] === 'invoice - Open'){
		// // 		++count;
		// // 		this.summaryInvoiceAmount = subPkgInv.isExistOpenInvoice[i+1].getText();
		// // 		this.summaryInvoiceBalance = subPkgInv.isExistOpenInvoice[i+2].getText();
		// // 		break;
		// // 	}
		// // if(count == 0){
		// // 	this.clickAddToANewInvoice();
		// // 	this.keepOpenInvoiceAmountBeforeInvoice();
		// // }
	}

	clickOnOtherItem() {
		browser.pause(2000);
		subPkgInv.btnOtherItems.click();
	}

	clickOnAddNewItem() {
		browser.pause(2000);
		subPkgInv.btnAddNewItem.click();
	}

	enterNewOtherItemValue()
	{
		browser.pause(2000);
		this.otherNewItemName = 'Test' + (Math.floor(new Date() / 1000));
		subPkgInv.inputOtherItem.waitForDisplayed();
		subPkgInv.inputOtherItem.setValue(this.otherNewItemName);
	}

	enterOtherItemRate()
	{
		browser.pause(1000);
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subPkgInv.otherItemBtnRate.click();
		browser.pause(1000);
		subPkgInv.otherItemRate.click();
		subPkgInv.otherItemRate.keys(clearKeys);
		browser.pause(500);
		subPkgInv.otherItemRate.click();
		browser.keys('\uE01B');
	}

	clickOnAddEquipment() {
		subPkgInv.btnAddEquipment.waitForDisplayed();
		subPkgInv.btnAddEquipment.click();
	}
	chooseEquipment() {
		browser.pause(3000);
		this.equipmentName = subPkgInv.equipment[0].getText();
		subPkgInv.equipment[0].click();
		console.log('selected equipment is'+this.equipmentName);
	}
	clickOnSaveBtn() {
		subPkgInv.btnAddToInvoice.click();
		subPkgInv.btnSaveAndConfigure.waitForDisplayed();
		subPkgInv.btnSaveAndConfigure.click();
	}

	chooseOtherItem() {
		browser.pause(2000);
		subPkgInv.selectOtherItem[6].click();
	}

	clickOnAddOtherItemBtn() {
		browser.pause(2000);
		subPkgInv.btnAddOtherItem.click();
		browser.pause(2000);
		subPkgInv.btnSaveOtherItem.click();
	}

	keepValueOfBillingCycle()
	{
		browser.pause(4000);
		subPkgInv.btnBillingOptions.click();
		subPkgInv.billingCycle.waitForDisplayed();
		this.billingCycle = subPkgInv.billingCycle.getText();
	}

	 clickOnAddToTheInvoice()
	 {
		 browser.pause(2000);
		 this.beforeInvoice = subPkgInv.totalForInvoice.getText();
		 subPkgInv.btnAddToInvoice.click();
		 browser.pause(2000);
	 }
	/*  < --   TA-148 ends   -- >   */

	//#region TA-149 Actions
	clickOtherRecurringCheck()
	{
		browser.pause(500);
		subPkgInv.checkOtherRecurring.click();
		browser.pause(500);
	}

	reOpenRecurringOption()
	{
		browser.pause(2000);
		subPkgInv.btnLeftRecurringOption.click();
		browser.pause(1000);
	}
	selectRecurringOption(recurringOption)
	{
		console.log('going to click checkbox');
		//this.clickOtherRecurringCheck();
		subPkgInv.checkOtherRecurring.click();
		browser.pause(1000);
		recurringOption = recurringOption.replace(/['"]+/g, '');
		switch(recurringOption){
			case "Do not prorate":
				if(subPkgInv.btnDoNotProratedOnly.getAttribute('class').includes('Mui-checked'))
				{
					subPkgInv.btnProratedOnly.click();
					browser.pause(2000);
					subPkgInv.checkSecondOtherRecurring.click();
					browser.pause(1000);
					subPkgInv.checkOtherRecurring.click();
					browser.pause(1000);
				}
				subPkgInv.getInputByParent(subPkgInv.btnDoNotProratedOnly).click();
				browser.pause(500);
				break;
			case "Add prorated amount only":
				subPkgInv.getInputByParent(subPkgInv.btnProratedOnly).click();
				browser.pause(500);
				break;
			case "Add full amount plus prorate":
				subPkgInv.getInputByParent(subPkgInv.btnAddFullAmountPlus).click();
				browser.pause(500);
				break;
			case "Add full amount to both invoices (prorate and full)":
				subPkgInv.getInputByParent(subPkgInv.btnAddFullAmountToBothInvoices).click();
				browser.pause(500);
				break;
		}
	}

	enbleDisableSuspendedAndInactiveOption(status)
	{
		subPkgInv.btnAppIcon.click();
		browser.pause(2000);
		subPkgInv.btnSettingsBilling.waitForDisplayed();
		subPkgInv.btnSettingsBilling.waitForClickable();
		subPkgInv.btnSettingsBilling.click();
		subPkgInv.btnInvoicing.waitForDisplayed();
		subPkgInv.btnInvoicing.waitForClickable();
		subPkgInv.btnInvoicing.click();
		browser.pause(2000);
		subPkgInv.btnPackageInvoicing.click();
		browser.pause(2000);
		if(status===true)
		{
			if(subPkgInv.btnContinueAuto.getAttribute('class').includes('Mui-checked')){}
			else{subPkgInv.getInputByParent(subPkgInv.btnContinueAuto).click();}
		}
		else
		{
			if(subPkgInv.btnDiscountinueAuto.getAttribute('class').includes('Mui-checked')){}
			else{subPkgInv.getInputByParent(subPkgInv.btnDiscountinueAuto).click();}
		}
		browser.pause(1000);
		subPkgInv.btnSaveTopMenu.click();
		browser.pause(5000);
		subPkgInv.btnCloseTopMenu.click();
	}

	editDescriptionsAfterInvoice()
	{
		//subPkgInv.btnSaveAndConfigure.click();
		browser.pause(5000);
		subPkgInv.btnOtherDescription.click();
		this.otherNewItemName = 'Updated' + (Math.floor(new Date() / 1000));
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subPkgInv.enterDescriptionValue.click();
		subPkgInv.enterDescriptionValue.keys(clearKeys);
		subPkgInv.enterDescriptionValue.setValue(this.otherNewItemName);
		browser.pause(1000);
		subPkgInv.btnSaveDescription.click();
		browser.pause(1000);
	}

	saveOtherItem()
	{
		subPkgInv.btnSaveOtherItem.click();
	}

	configureTaxForOtherItem()
	{
		console.log('going to apply tax')
		browser.pause(4000);
        subPkgInv.btnTaxFromInvoiceItem.click();
        browser.pause(1000);
        if(subPkgInv.checkGSTTaxRate.getText()==='0.00%')
        {
            subPkgInv.expandTaxSettingsFromInvoiceItems.click();
            browser.pause(1000);
            subPkgInv.getListItem('GST').click();
        }
        browser.pause(1000);
        subPkgInv.btnSaveFromTaxSetting.click();
        browser.pause(3000);
		browser.keys(['\uE00C']);
	}

	keepOtherItemDataBeforeQtUpdate()
	{
		this.otherItemQuantity = subPkgInv.btnQuantityInput.getAttribute('value');
		this.otherItemRate = subPkgInv.invoiceItemRate.getText();
		this.OtherItemTotalAmount = subPkgInv.invoiceItemTotalAmount.getText();
		subPkgInv.btnTaxFromInvoiceItem.click();
		browser.pause(1000);
		this.otherItemTax = subPkgInv.invoiceItemTaxAmount.getText();
		browser.pause(2000);
		browser.keys(['\uE00C']);
	}

	editQuantityAndSaveIt()
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		//subPkgInv.btnQuantity.click();
		subPkgInv.btnQuantityInput.click();
		browser.pause(1000);
		subPkgInv.btnQuantityInput.keys(clearKeys);
		browser.pause(500);
		subPkgInv.btnQuantityInput.setValue('2');
		//subPkgInv.btnSaveDescription.click();
		browser.pause(1000);
	}
	
	expandInvoiceDottedMenu()
	{
		browser.pause(5000);
		subPkgInv.btnExpandInvoiceDotted.click();
		subPkgInv.btnDeleteInvoiceFromMenu.click();
	}

	selectDeleteOnlyInvoiceItem()
	{
		subPkgInv.btnRadioDeletOnlyInvoiceItem.click();
	}
	selectDeleteInvoiceAndPackage()
	{
		subPkgInv.btnRadioDeletInvoicePackage.click();
	}
	clickOkOfDeleteInvoiceItem()
	{
		subPkgInv.btnOKDeleteInvoiceDotted.click();
		browser.pause(1000);
		subPkgInv.btnYesOfCofirmDialog.click();
	}

	expandInActivePackage()
	{
		browser.pause(5000);
		if(subPkgInv.svgStatus(subPkgInv.inActivePackageExpandedOrNot[0]).getAttribute('data-testid')==='ExpandMoreIcon')
		{
			subPkgInv.expandInActivePackage.click();
		}
	}

	//#endregion

	verifyInvoiceDetails()
	{
		var selectedInvoice ='Paid Invoice';
		if(subPkgInv.btnUpcomingInvoice.isExisting())
			selectedInvoice ='Upcoming Invoice';
		var invoiceData = subPkgInv.selectedInvoiceRow;
		expect(invoiceData[5].getText()).to.eql(this.userName);
		expect(invoiceData[6].getText()).to.eql(this.customerID);
		expect(isNaN(Date.parse(invoiceData[7].getText()))).to.be.false;//parsed date to ticks
		expect(invoiceData[8].getText()).to.eql(this.invoiceNumber);
		expect(isNaN(Date.parse(invoiceData[9].getText()))).to.be.false;//parsed date to ticks
	}

	verifySelectedInvoiceAttachedToEmail()
	{
		subPkgInv.emailHeader.waitForDisplayed();
		console.log('>>>>>>>>>>>extracted header is'+subPkgInv.emailHeader.getText());
		console.log('>>>>>>>>>>>username is: ' + this.userName);
		//expect(subPkgInv.emailHeader.getText().includes(this.userName)).to.be.true;
		//console.log('>>>>>>>>>>>username verified');
		expect(subPkgInv.emailHeader.getText().includes(this.customerID)).to.be.true;
		console.log('>>>>>>>>>>>customerID verified');
		expect(subPkgInv.emailAttachedInvoice.getText()).to.eql('Invoice '+this.invoiceNumber);
	}

	verifyDeletInvoiceButtonNotPresent()
	{
		expect(subPkgInv.btnDeleteInvoice.isExisting()).to.be.false;
	}

	verifyVoidThisInvoiceDisabled()
	{
		expect(subPkgInv.getListItem('Void this Recurring Invoice').isClickable()).to.be.false;
	}

	verifyNewInvoiceEmptyPanel()
	{
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = today.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = today.getFullYear();
		var currentDate = mm + ' ' + dd + ' ' + yyyy;
		browser.pause(7000);
		var invoiceData = subPkgInv.selectedInvoiceRow;
		expect(invoiceData[7].getText()).to.eql(currentDate);
		expect(invoiceData[8].getText()).to.eql('-');
		expect(invoiceData[9].getText()).to.eql('-');
		expect(subPkgInv.emptyInvoiceOrQuoteItems.isExisting()).to.be.true;
		expect(subPkgInv.btnCancelInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnInvoiceMore.isExisting()).to.be.true;
	}

	verifyNewQuoteEmptyPanel()
	{
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = today.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = today.getFullYear();
		var currentDate = mm + ' ' + dd + ' ' + yyyy;
		browser.pause(3000);
		var invoiceData = subPkgInv.selectedInvoiceRow;
		expect(invoiceData[7].getText()).to.eql(currentDate);
		expect(invoiceData[8].getText()).to.eql('-');
		expect(invoiceData[9].getText()).to.eql('-');
		expect(subPkgInv.emptyInvoiceOrQuoteItems.isExisting()).to.be.true;
	}

	verifyActivePackagesInMore()
	{
		browser.pause(2000);
		var allactiveFromMore = subPkgInv.activePackagesOfOtherInvoice;
		var allactiveFromTop = subPkgInv.topActivePackages;
		var activeCount = 0;
		for(var i=0; i<allactiveFromTop.length; i++){
			if(allactiveFromTop[i].getAttribute('style')==='fill: rgb(98, 221, 82);')
			{
				activeCount++;
			}
		}
		expect(allactiveFromMore.length).to.eql(activeCount);
	}

	verifyQuoteAvailableButtons()
	{
		expect(subPkgInv.btnDeleteQuote.isExisting()).to.be.true;
		expect(subPkgInv.btnViewPDF.isExisting()).to.be.true;
		expect(subPkgInv.btnEmailFromInvoice.isExisting()).to.be.true;
	}

	verifyInvoiceVoidSuccessfully()
	{
		subPkgInv.isAlertPresent(this.voidInvoiceConfMsg).waitForDisplayed();
		expect(subPkgInv.isAlertPresent(this.voidInvoiceConfMsg).isExisting()).to.be.true;
	}

	closeSubscriberRightDrawer()
	{
		subPkgInv.closeRightDrawer.waitForDisplayed();
		subPkgInv.closeRightDrawer.waitForClickable();
		subPkgInv.closeRightDrawer.click();
		browser.pause(2000);
	}

	openSecondSubscriber()
	{
		subPkgInv.selectSecondSubscriber.waitForDisplayed();
		subPkgInv.selectSecondSubscriber.waitForClickable();
		subPkgInv.selectSecondSubscriber.click();
		browser.pause(2000);
	}

	takeNoteOfInvoiceTotal()
	{
		browser.pause(3000);
		this.totalForTheInvoice = subPkgInv.totalForTheInvoice.getText();
	}

	verifyVoidInvoidInLogs()
	{
		//this.closeSubscriberRightDrawer();
		//subscriberlistActions.clickOnAnySubscriber();
		browser.pause(3500);
		subPkgInv.btnTransactions.click();
		browser.pause(3500);
		var allLogsData = subPkgInv.getAllLogsData;
		this.invoiceNumber = this.invoiceNumber.replace(/[^0-9]/g,'');
		let message = 'Invoice '+this.invoiceNumber+' successfully voided.';
		let status = false;
		for (var i=0; i<allLogsData.length-1;i++)
		{
			if(allLogsData[i].getText()===message)
			{
				status = true;
				allLogsData[i].click();
				break;
			}
		}
		browser.pause(3000);
		expect(status).to.be.true;
		console.log('void message exist in logs');
		expect(subPkgInv.logFromPpopUp.getText()).to.eql(message);
	}

	verifyVoidInvoiceBalanceInTransactions()
	{
		// this.closeSubscriberRightDrawer();
		// browser.pause(2000);
		// subscriberlistActions.clickOnAnySubscriber();
		// browser.pause(5000);
		// subPkgInv.btnPackageAndInvoice.click();
	    // browser.pause(2000);
		// this.selectInvoiceFromTableWithProvidedStatus('Voided invoice');
		browser.pause(5000);
		//expect(subPkgInv.SelectInvoicePaidDueBalance.getText()).to.eql('$0.00');
		var allDataItems = subPkgInv.getAllTransactions;
		let extractedBalance=0;
		for (var i=0; i<allDataItems.length;i++)
		{
			if(allDataItems[i].getText().includes('VOID'))
			{
				allDataItems[i].click();
				browser.pause(2000);
				var key =['\uE014'];
				browser.keys(key);
				browser.keys(key);
				browser.keys(key);
				browser.keys(key);
				allDataItems = subPkgInv.getAllTransactions;
				extractedBalance = allDataItems[allDataItems.length-2].getText();
				break;
			}
		}
		console.log('extracted balance is '+extractedBalance);
		console.log('extracted balance is '+allDataItems[allDataItems.length-2].getText());
		expect(allDataItems[allDataItems.length-2].getText()).to.eql(extractedBalance);
		//subPkgInv.btnTransactions.click();
		//browser.pause(3000);
		//expect(subPkgInv.SelectRecentTransactionItemDescription.getText()).to.eql('invoice #'+this.invoiceNumber);
		//expect(subPkgInv.SelectRecentTransactionItemStatus.getText()).to.eql('VOID');
		//this.verifyValueFromTransactions('$0.00');
	}

	verifyValueFromTransactions(balanceValue)
	{
		var allDataItems = subPkgInv.getAllTransactions;
		allDataItems[5].click();
		browser.pause(2000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		allDataItems = subPkgInv.getAllTransactions;
		expect(allDataItems[allDataItems.length-2].getText()).to.eql(balanceValue);
	}

	verifyQuoteAmountExcludedInTransaction()
	{
		subPkgInv.btnTransactions.click();
		browser.pause(5000);
		var allDataItems = subPkgInv.getAllTransactions;
		allDataItems[5].click();
		browser.pause(2000);
		var key =['\uE014'];
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.keys(key);
		browser.pause(2000);
		allDataItems = subPkgInv.getAllTransactions;
		expect(allDataItems[5].getText().includes('$')).to.be.true;
		//this.verifyValueFromTransactions('$0.00');
	}

	verifyMoreButtonIsNotPresent()
	{
		browser.pause(2000);
		expect(subPkgInv.btnInvoiceMore.isExisting()).to.be.false;
	}

	verifyInvoiceTotalAmountUpdated()
	{
		browser.pause(4000);
		expect(subPkgInv.oldTotalForInvoice.getText()).to.eql(this.totalForTheInvoice);//old amount should be same
		expect(subPkgInv.totalForTheInvoice.getText()).to.not.equal(this.totalForTheInvoice);//updated amount should not be same
	}

	verifyInactivePackageShouldNotList()
	{
		browser.pause(5000);
		var allpackages = subPkgInv.allActivePackageCountOfInvoice;
		var currentActivePackageCount =0;
		for(var i=0; i<allpackages.length; i++){
			if(allpackages[i].getAttribute('style').includes('fill: rgb(98, 221, 82);'))
			{
				currentActivePackageCount++;
			}
		}
		browser.pause(2000);
		expect(this.actualActivePackageCount).to.not.equal(currentActivePackageCount);
		var packgDate = subPkgInv.packagePeriod.getText();
		packgDate = packgDate.substring(1, 14);
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = today.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = today.getFullYear();
		var currentDate = mm + ' ' + dd + ', ' + yyyy;
		currentDate = new Date(currentDate);
		packgDate = new Date(packgDate);
		console.log('current date is '+currentDate+' and package date is '+packgDate);
		expect(currentDate <= packgDate).to.be.true;
	}

	verifyQuoteToInvoice()
	{
		browser.pause(7000);
		expect(subPkgInv.invoiceHeader.getText()).to.eql('INVOICE #');
		subPkgInv.btnInvoiceOpen.scrollIntoView();
		expect(subPkgInv.btnInvoiceOpen.isExisting()).to.be.true;
		expect(subPkgInv.btnDeleteInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnEmailFromInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnViewPDF.isExisting()).to.be.true;
		expect(subPkgInv.oldTotalForInvoice.getText()).to.eql(this.summaryInvoiceAmount);
		console.log('amount verified')
		expect(subPkgInv.totalForTheInvoice.getText()).to.eql(this.summaryInvoiceBalance);
		console.log('invoice total verified')
		//if(data === 'new'){ // changes made for TA-148 scenario #1 and #2
		//	expect(subPkgInv.oldTotalForInvoice.getText()).to.eql(this.summaryInvoiceAmount);
		//	expect(subPkgInv.totalForTheInvoice.getText()).to.eql(this.summaryInvoiceBalance);
		//}
		//else
		//{
		//	expect(subPkgInv.oldTotalForInvoice.getText()).to.eql(this.summaryInvoiceAmount);
		//	expect(subPkgInv.totalForTheInvoice.getText()).to.eql(this.summaryInvoiceBalance);
		//}
	}
	
	//////////////////////////// TA-65 assertions //////////////////////////////////////////////////
	verifyPackageAndInvoicePageOpened() {
		browser.pause(7000);
        expect(subPkgInv.btnPackageAndInvoice.getAttribute('aria-selected')).to.eql('true');
		expect(subPkgInv.btnUpcomingInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnAddPackage.isExisting()).to.be.true;
		expect(subPkgInv.expandPackageInvoiceDottedMenu.isExisting()).to.be.true;
	}

	verifyUpcomingInvoiceDefaultSelected()
	{
		browser.pause(7000);
		expect(subPkgInv.btnUpcomingInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnUpcomingInvoice.getText()).to.eql('Upcoming Invoice')
	}

	verifyUpcomingInvoiceData()
	{
		browser.pause(3000);
		var invoiceData = subPkgInv.selectInvoiceRow;
		expect(invoiceData[0].getText()).to.eql(this.userName);
		expect(invoiceData[1].getText()).to.eql(this.customerID);
		expect(isNaN(Date.parse(invoiceData[2].getText()))).to.be.false;//parsed date to ticks
		expect(isNaN(Date.parse(invoiceData[4].getText()))).to.be.false;//parsed date to ticks
	}

	verifyUpcomingInvoiceNumber(valueToVerify)
	{
		browser.pause(3000);
		var invoiceData = subPkgInv.selectInvoiceRow;
		expect(invoiceData[3].getText()).to.eql(valueToVerify);
	}

	verifyInvoiceLoadedFromTransactions()
	{
		browser.pause(3000);
		var invoiceData = subPkgInv.selectInvoiceRow;
		expect(invoiceData[2].getText()).to.eql(this.summaryInvoiceDate.replace(/,/g, ''));
		expect('invoice #'+invoiceData[3].getText()).to.eql(this.summaryInvoiceNumber);
	}

	verifyQuoteLoadedFromTransactions()
	{
		browser.pause(3000);
		var quoteData = subPkgInv.readQuoteData;
		expect(quoteData[2].getText()).to.eql(this.summaryInvoiceDate.replace(/,/g, ''));
		expect('quote #'+quoteData[3].getText()).to.eql(this.summaryInvoiceNumber);
	}

	verifyAccurateTotalForUpcomingInvoice()
	{
		browser.pause(3000);
		var allRowsData = subPkgInv.allInvoicePackageRows;
		var invoicePackageTotal =0;
		for(var i=0; i<allRowsData.length; i++){
			var extractedAmountIS = subPkgInv.getColumnsByParent(allRowsData[i])[6].getText();
			invoicePackageTotal = invoicePackageTotal + Number(extractedAmountIS);
		}
		var currentAmountis = subPkgInv.upcomingTotalBalance.getText();
		expect(currentAmountis.substring(0, currentAmountis.length - 1).replace(/,/g, '').includes('$'+invoicePackageTotal));
	}

	verifyEmailAndPdfButtons()
	{
		browser.pause(3000);
		expect(subPkgInv.btnEmailFromInvoice.isExisting()).to.be.false;
		expect(subPkgInv.btnViewPDF.isExisting()).to.be.false;
	}

	verifyCorrectUpcomingInvoiceDataDisplayed()
	{
		browser.pause(2000);
		var invoiceData = subPkgInv.selectInvoiceRow;
		expect(invoiceData[2].getText()).to.eql(this.summaryInvoiceDate.replace(/,/g, ''));
		expect(invoiceData[3].getText()).to.eql(this.summaryInvoiceNumber);
		expect(subPkgInv.upcomingTotalAmount.getText()).to.eql(this.summaryInvoiceAmount);
	}

	verifyPackageInvoiceOptions(options)
	{  
		var allItems = options.raw();
		browser.pause(2000);
		expect(subPkgInv.getListItem(allItems[0][0]).isExisting()).to.be.true;
		expect(subPkgInv.getListItem(allItems[1][0]).isExisting()).to.be.true;
		expect(subPkgInv.getListItem(allItems[2][0]).isExisting()).to.be.true;
	}

	verifyUpdatedUserName()
	{
		browser.pause(2000);
		var invoiceData = subPkgInv.selectInvoiceRow;
		expect(invoiceData[0].getText()).to.eql(this.userName);
	}

	verifyUserNameAlreadyExists()
	{
		subPkgInv.isAlertPresent('Username '+this.existingUserName+' already exists').waitForDisplayed();
		expect(subPkgInv.isAlertPresent('Username '+this.existingUserName+' already exists').isExisting()).to.be.true;
	}

	verifyCorrectQuoteIsSelected()
	{
		browser.pause(5000);
		this.selectInvoiceFromTableWithProvidedStatus('quote');
		var quoteData = subPkgInv.readQuoteData;
		expect(quoteData[2].getText()).to.eql(this.summaryInvoiceDate.replace(/,/g, ''));
		expect(this.summaryInvoiceNumber.includes(quoteData[3].getText())).to.be.true;
		expect(subPkgInv.upcomingTotalAmount.getText()).to.eql(this.summaryInvoiceAmount);
	}

	/* TA-148 */

	verifyQuoteToInvoiceTransition()
	{
		browser.pause(7000);
		expect(subPkgInv.invoiceHeader.getText()).to.eql('INVOICE #');
		subPkgInv.btnInvoiceOpen.scrollIntoView();
		expect(subPkgInv.btnInvoiceOpen.isExisting()).to.be.true;
		expect(subPkgInv.btnDeleteInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnEmailFromInvoice.isExisting()).to.be.true;
		expect(subPkgInv.btnViewPDF.isExisting()).to.be.true;
	}

	verifyStartDayClosestToTermStartDay() {
		browser.pause(2000);
		subPkgInv.btnSyncTermUpcoming.click();
		browser.pause(2000);
		var startDateText = subPkgInv.btnTermStartDate.getText();
		subPkgInv.btnSaveAndConfigure.click();
		browser.pause(4000);
		this.clickClosePackageDrawer();
		subPkgInv.btnBillingOptions.click();
		subPkgInv.termStartDay.waitForDisplayed();
		var dayText = subPkgInv.termStartDay.getValue();
		console.log('extracted date'+dayText);
		expect(dayText[0]).to.eql(startDateText[4]);
	}
	verifyIAmUnableToChangeStartDate() {
		browser.pause(2000);
		subPkgInv.btnSyncTermUpcoming.click();
		browser.pause(2000);
		var startDateText = subPkgInv.btnTermStartDate.getText();
		subPkgInv.btnTermStartDate.click();
		browser.pause(2000);
		var allbuttons = subPkgInv.dateOnDatePicker;
		//console.log('extracted date is'+subPkgInv.date1OnDatePicker.getText());
		let count=0;
		for (var i=0; i<allbuttons.length;i++)
		{
			if(allbuttons[i].getAttribute('class').includes('Mui-disabled'))
			{
				count = count+1;
			}
		}
		console.log('total length is'+allbuttons.length);
		console.log('total disabled count is'+count);
		expect(allbuttons.length-1).to.eql(count);
		// if(startDateText[4] === subPkgInv.date1OnDatePicker.getText())
		// 	expect(subPkgInv.date2OnDatePicker.getAttribute('disabled')).to.eql('true');
		// else
		// 	expect(subPkgInv.date1OnDatePicker.getAttribute('disabled')).to.eql('true');
	}

	verifyEndDateWithBillingCycle() {
		browser.pause(5000);
		var packgDate = subPkgInv.invoicePackageDatePeriod.getText();
		console.log('extracted package date is'+packgDate);
		packgDate = packgDate.substring(packgDate.indexOf("-")+1);
		packgDate = packgDate.replace(")","");
		packgDate = packgDate.trim();
		var cycle = this.billingCycle;
		var today = new Date();
		if(cycle === 'Monthly') {
			var result = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  			var dd = String(result.getDate()).padStart(2, '0');
			var mm = result.toLocaleDateString(undefined, { month: 'short'});
			var yyyy = result.getFullYear();
			var currentDate = mm   + ' ' + dd + ', ' + yyyy;
			expect(packgDate).to.eql(currentDate);
		}
		else if(cycle === 'Quarterly') {
			var result = new Date(today.getFullYear(), today.getMonth() + 3, 0);
			var mm = result.toLocaleDateString(undefined, { month: 'short'});
			var yyyy = result.getFullYear();
			console.log('sQuarterly year is '+yyyy);
			console.log('Quarterly month is '+mm);
			expect(subPkgInv.btnTermEndDate.getText().includes(yyyy)).to.be.true;
			console.log('year verified');
			expect(subPkgInv.btnTermEndDate.getText().includes(mm)).to.be.true;
			console.log('month verified');
		}
		else if(cycle === 'Semi-annually') {
			var result = new Date(today.getFullYear(), today.getMonth() + 6, 0);
			var mm = result.toLocaleDateString(undefined, { month: 'short'});
			var yyyy = result.getFullYear();
			console.log('semi-annully year is '+yyyy);
			console.log('semi-annully month is '+mm);
			expect(subPkgInv.btnTermEndDate.getText().includes(yyyy)).to.be.true;
			console.log('year verified');
			expect(subPkgInv.btnTermEndDate.getText().includes(mm)).to.be.true;
			console.log('month verified');
		}
		else {
				var year = new Date().getFullYear()+1;
				expect(packgDate.includes(year.toString())).to.be.true;
		}
	}

	verifyEquipmentAdded() 
	{
		subPkgInv.isAlertPresent('Customer equipment added successfully.').waitForDisplayed();
		expect(subPkgInv.isAlertPresent('Customer equipment added successfully.').isExisting()).to.be.true;
	}
	verifyAccurateEquipmentAdded() {
		browser.pause(4000);
		subPkgInv.closeInvoiceSettingPanel.click();
		browser.pause(3000);
		subPkgInv.btnPackageAndInvoice.click();
		browser.pause(2000);
		subPkgInv.btnOtherItems.scrollIntoView();
		browser.pause(2000);
		expect(subPkgInv.isBtnExists(this.equipmentName).isExisting()).to.be.true;
	}
	
	verifyOtherItemAdded() {
		subPkgInv.isAlertPresent(this.OtherItemAddedConfMsg).waitForDisplayed();
		subPkgInv.isAlertPresent(this.OtherItemAddedConfMsg).waitForClickable();
		expect(subPkgInv.isAlertPresent(this.OtherItemAddedConfMsg).getText()).to.eql('Customer item added successfully.');
		browser.pause(4000);
		this.closeSubscriberRightDrawer();
		subscriberlistActions.clickOnAnySubscriber();
		browser.pause(4000);
		subPkgInv.btnPackageAndInvoice.click();
		browser.pause(2000);
		expect(subPkgInv.isItemExists(this.otherNewItemName).isExisting()).to.be.true;
	}

	//#region TA-149 Assertions
	verifyBillingCycleAndRateForOther()
	{
		//subPkgInv.checkOtherRecurring.waitForDisplayed();
		subPkgInv.checkOtherRecurring.click();
		browser.pause(2000);
		var packgDate = subPkgInv.otherBillingPeriod.getText();
		browser.pause(500);
		browser.keys(['\uE00C']);
		browser.pause(2000);
		packgDate = packgDate.substring(16,28);
		var cycle = this.billingCycle;
		if(cycle === 'Monthly') {
			var today = new Date();
			var result = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  			var dd = String(result.getDate()).padStart(2, '0');
			var mm = result.toLocaleDateString(undefined, { month: 'short'});
			var yyyy = result.getFullYear();
			var currentDate = mm   + ' ' + dd + ', ' + yyyy;
			expect(packgDate).to.eql(currentDate);
		}
		else {
			
				var year = new Date().getFullYear();
				expect(packgDate.includes(year.toString())).to.be.true;

		}
		expect(subPkgInv.isItemExists('1.00').isExisting()).to.be.true;
	}

	verifyRecurringCheckboxEditable()
	{
		//subPkgInv.checkOtherRecurring.click();
		browser.pause(2000);
		expect(subPkgInv.otherRecurringParent.isClickable()).to.be.true;
		//expect(subPkgInv.svgStatus(subPkgInv.otherRecurringParent).getAttribute('data-testid')==='CheckBoxIcon').to.be.true;
	}

	verifyStartDateCanBeSet(period)
	{
		var clearKeys = ['\uE011', '\uE008', '\uE010', '\uE017'];
		subPkgInv.inputStartDate.click();
		subPkgInv.inputStartDate.keys(clearKeys);
		period = period.replace(/['"]+/g, '');
		var valueToSet ;
		var today = new Date();
		switch(period){
			case "Month":
				var resultStart = new Date(today.getFullYear(), today.getMonth()+1, 0);
  				var startdd = String(today.getDate()).padStart(1, '0');
				var startmm = resultStart.toLocaleDateString(undefined, { month: 'short'});
				var startyyyy = resultStart.getFullYear();
				//valueToSet = startmm   + ' ' + startdd + ', ' + startyyyy;
				valueToSet = startdd;
				valueToSet = (today.getDate()+1);
				break;
			case "Day":
				var startdd = String(today.getDate()).padStart(1, '0');
				var startmm = today.toLocaleDateString(undefined, { month: 'short'});
				var startyyyy = today.getFullYear();
				//valueToSet = startmm   + ' ' + startdd + ', ' + startyyyy;
				valueToSet = startdd;
				valueToSet = (today.getDate()+1);
		}
		subPkgInv.openCalendarOption.waitForDisplayed();
		subPkgInv.openCalendarOption.click();
		subPkgInv.isBtnExists(valueToSet).waitForDisplayed();
		subPkgInv.isBtnExists(valueToSet).click();
		browser.pause(1000);
		this.dateToSetAndVerify = subPkgInv.inputStartDate.getValue();
		console.log('date to set in input'+this.dateToSetAndVerify);
		browser.keys(['\uE00C']);
		browser.pause(1000);
	}

	verifyRecurringYetToStart()
	{
		var today = new Date();
    	var resultStart = new Date(today.getFullYear(), today.getMonth()+1,0);
  		var startdd = String(resultStart.getDate()).padStart(1, '0');
		var startmm = resultStart.toLocaleDateString(undefined, { month: 'short'});
		var startyyyy = resultStart.getFullYear();
		var dateTo = startmm   + ' ' + startdd + ', ' + startyyyy;
		var extractedDate = subPkgInv.recurringItemYetToStart.getText();
		expect(extractedDate).to.not.equal('This item will start recurring on '+dateTo);
		console.log('extracted data is '+extractedDate +' and start date is '+startmm);
		expect(extractedDate.includes(startmm)).to.be.false;
	}

	verifyUpdatedStartDatePersist()
	{
		var today = new Date();
		var result = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  		var dd = String(result.getDate()).padStart(2, '0');
		var mm = result.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = result.getFullYear();
		var endOfNextMonth = mm   + ' ' + dd + ', ' + yyyy;
		var resultStart = new Date(today.getFullYear(), today.getMonth()+1, 0);
  		var startdd = (today.getDate()+1);
		var startmm = resultStart.toLocaleDateString(undefined, { month: 'short'});
		var startyyyy = resultStart.getFullYear();
		var startOfNextMonth = startmm   + ' ' + startdd + ', ' + startyyyy;
		browser.pause(2000);
		var extractedDate = subPkgInv.recurringItemPeriod.getText();
		console.log('extracted date is'+extractedDate);
		console.log('start date is'+startOfNextMonth+' and end date is '+endOfNextMonth);
		expect(extractedDate.includes("("+startOfNextMonth+" - "+endOfNextMonth+")")).to.be.true;
	}

	verifyFullTermInTheInvoice()
	{
		var packgDate = subPkgInv.otherBillingPeriod.getText();
		var today = new Date();
			var result = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  			var dd = String(result.getDate()).padStart(2, '0');
			var mm = result.toLocaleDateString(undefined, { month: 'short'});
			var yyyy = result.getFullYear();
			var endOfNextMonth = mm   + ' ' + dd + ', ' + yyyy;
			
			var resultStart = new Date(today.getFullYear(), today.getMonth()+1, 1);
  			var startdd = String(resultStart.getDate()).padStart(2, '0');
			var startmm = result.toLocaleDateString(undefined, { month: 'short'});
			var startyyyy = result.getFullYear();
			var startOfNextMonth = startmm   + ' ' + startdd + ', ' + startyyyy;
			expect(packgDate).to.eql("("+startOfNextMonth+" - "+endOfNextMonth+")");
	}

	verifyProraredTermWithStartDate()
	{
		var today = new Date();
		var dd = String(today.getDate()-1).padStart(2, '0');
		var mm = today.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = today.getFullYear();
		var currentDate = mm   + ' ' + dd + ', ' + yyyy;
		browser.pause(2000);
		var extractedDate = subPkgInv.recurringItemPeriod.getText();
		console.log('extracted date is '+extractedDate +' and expected date is '+this.dateToSetAndVerify);
		expect(extractedDate.includes(this.dateToSetAndVerify)).to.be.true;
	}

	verifyProrateAndFullRecords()
	{
		subPkgInv.otherItemBtnRate.waitForDisplayed();
		subPkgInv.otherItemBtnRate.click();
		subPkgInv.otherItemRate.waitForDisplayed();
		subPkgInv.otherItemRate.click();
		browser.pause(3000);
		var extractedDate = subPkgInv.recurringItemPeriod.getText();
		expect(subPkgInv.isItemExists(this.otherNewItemName).isExisting()).to.be.true;
		expect(subPkgInv.isItemExists(this.otherNewItemName+' Prorate').isExisting()).to.be.true;
		expect(extractedDate.includes(this.dateToSetAndVerify)).to.be.true;
	}

	verifyDefualtAutoSelected()
	{
		subPkgInv.checkOtherRecurring.click();
		browser.pause(1000);
		expect(subPkgInv.defaultAutoSelected.getText()).to.eql('Auto-suspend  when thepackage is not billed');
	}

	verifyNoneDefualtAutoSelected()
	{
		subPkgInv.checkOtherRecurring.click();
		browser.pause(1000);
		subPkgInv.checkAutoSuspenditem.click();
		subPkgInv.checkAutoSuspenditem.click();
		subPkgInv.checkAutoSuspenditem.click();
		browser.pause(5000);
		expect(subPkgInv.defaultAutoSelected.getText()).to.eql('Auto-suspend  when the subscriber is suspended or inactive');
	}
	verifyDescriptionChangePromptOpt()
	{
		expect(subPkgInv.isDivExists('Apply to this invoice only').isExisting()).to.be.true;
		expect(subPkgInv.isDivExists('Apply to future invoices only').isExisting()).to.be.true;
		expect(subPkgInv.isDivExists('Apply to this invoice and future invoices (default)').isExisting()).to.be.true;
	}
	verifyTaxAmountUpdated(taxAmount)
	{
		browser.pause(4000);
		var taxToVerify = taxAmount.raw();
		var valueToVerify = subPkgInv.btnQuantityInput.getAttribute('value');
		//console.log('extracted qty is '+valueToVerify);
		//console.log('qty to verify is '+this.otherItemQuantity);
		expect(valueToVerify).to.eql('0'+(this.otherItemQuantity*2).toString());
		console.log('qty verified');
		valueToVerify = subPkgInv.invoiceItemRate.getText();
		expect(valueToVerify).to.eql((this.otherItemRate).toString());
		console.log('rate verified');
		expect(subPkgInv.invoiceItemTotalAmount.getText()).to.eql((this.OtherItemTotalAmount*2).toString()+'.00');
		subPkgInv.btnTaxFromInvoiceItem.click();
		browser.pause(1000);
		expect(subPkgInv.invoiceItemTaxAmount.getText()).to.eql(taxToVerify[0][0]);
		console.log('tax verified');
	}
	verifyInvoiceDottedMenuItems()
	{
		browser.pause(2000);
		expect(subPkgInv.getDeleteOnlyInvoiceItem.getText()).to.eql('Delete only the invoice item');
		expect(subPkgInv.getDeleteInvoiceItemAndPackage.getText()).to.eql('Delete the invoice item and the package and services');
	}
	verifyOnlyInvoiceItemDeleted()
	{
		subPkgInv.isAlertPresent(this.itemRemovedConfMsg).waitForDisplayed();
		subPkgInv.isAlertPresent(this.itemRemovedConfMsg).waitForClickable();
		expect(subPkgInv.isAlertPresent(this.itemRemovedConfMsg).getText()).to.eql('Item removed successfully.');
		browser.pause(1000);
		expect(subPkgInv.voidedInvoiceMsg.getText()).to.eql('Click the button below to add package, equipment and other item');
	}
	verifyPackageRetainedInSubscriberAccount(packageName)
	{
		browser.pause(3000);
		var valueToVerify = packageName.raw();
		expect(subPkgInv.packageCount(valueToVerify[0][0]).length).to.eql(this.specificPackageCount);
	}
	verifyPackageDeletedInSubscriberAccount(packageName)
	{
		browser.pause(3000);
		var valueToVerify = packageName.raw();
		expect(subPkgInv.packageCount(valueToVerify[0][0]).length).to.eql(this.specificPackageCount-1);
	}
	//#endregion
	
	 verifyPackageAddedInSelectedInvoice(pacakge) {
		var dataToPass = pacakge.raw();
		this.packageName =dataToPass[0][0];
		 if(subPkgInv.btnSyncTermUpcoming.isExisting())
		 {
			subPkgInv.btnSyncTermUpcoming.click();
			subPkgInv.btnSaveAndConfigure.waitForDisplayed();
			subPkgInv.btnSaveAndConfigure.waitForClickable();
			subPkgInv.btnSaveAndConfigure.click();
			browser.pause(3000);
		 }
		 if(subPkgInv.btnSaveAndConfigure.isExisting())
		 {
			subPkgInv.btnSaveAndConfigure.waitForDisplayed();
			subPkgInv.btnSaveAndConfigure.waitForClickable();
			subPkgInv.btnSaveAndConfigure.click();
			browser.pause(3000);
		 }
		 subPkgInv.btnCloseAddedPackage.waitForDisplayed();
		 subPkgInv.btnCloseAddedPackage.waitForClickable();
		 subPkgInv.openedPackageHeader.waitForDisplayed();
		 expect(subPkgInv.openedPackageHeader.getText()).to.eql(this.packageName); 
		// subPkgInv.btnCloseAddedPackage.click();
		// browser.pause(3000);
		// subPkgInv.btnQuoteInvoiceUpcomingInvoice.waitForDisplayed();
		// var text = subPkgInv.btnQuoteInvoiceUpcomingInvoice.getText();
		// var updatedVal;
		// var val;
		// if(text === 'Upcoming Invoice') {
		// 	subPkgInv.syncWithUpcomingInvoice.click();
		// 	browser.pause(2000);
		// 	val = parseFloat(subPkgInv.invoiceAmount.getText());	
		// 	updatedVal = subPkgInv.totalForInvoice.getText();
		// }
		// subPkgInv.btnSaveAndConfigure.click();
		// this.clickClosePackageDrawer();
		// updatedVal = updatedVal.replace("$","");
		// updatedVal = updatedVal.replace(",","");
		// var previousVal = this.beforeInvoice.replace("$", "");
		// previousVal = previousVal.replace(",", "")
		// var addition =  parseFloat(val) + parseFloat(previousVal);
		// updatedVal = parseFloat(updatedVal);
		// browser.pause(2000);
		// expect((updatedVal.toFixed(2)).toString()).to.eql((addition.toFixed(2)).toString());
	}
	
}
module.exports = new subscriberDetailsPackageInvoiceActions();
