var crmBomPage = require('../pageobjects/SDbomPackage.page');
const { emailThisList } = require('../pageobjects/subscriberlist.page');
var serviceDeskActions = require("../support/serviceDeskActions");
var Utils = require('./utils');
var expect = require('chai').expect; 

class SDbomPackageActions{
	
	constructor(){
		this.taxRate;
		this.taxableAmount;
		this.taxCharged;
		this.packageName;
		this.otherItemName;
	}

	makeSureTicketListed()
	{
		serviceDeskActions.goToTickets();
		var result = serviceDeskActions.getServiceDeskListCount();
		if(result>0){}
		else{
			serviceDeskActions.openTicketInterface('fromTopMenu');
			serviceDeskActions.addTicket('Monika', 'add','Text for Summary','Checking on Escalation','High', 'UnAssigned','Jon Automation');
			serviceDeskActions.saveCurrentTicket('add');
			serviceDeskActions.closeNewTicketDock();
		}
	}

	selectUnlinkedTicket()
	{
		if(crmBomPage.ticketIsParentOf.isExisting())
		{
			crmBomPage.closeCurrentTicket.click();
			browser.pause(1500);
			crmBomPage.selectSecondTicket.click();
			browser.pause(5000);
		}
	}

	openBomDock()
	{
		//browser.pause(7000);
		crmBomPage.btnBom.waitForDisplayed();
		crmBomPage.btnBom.waitForClickable();
		crmBomPage.btnBom.click();
		browser.pause(7000);
		// browser.pause(7000);
		// if(crmBomPage.btnBom.isExisting())
		// {
		// 	crmBomPage.btnBom.click();
		// 	browser.pause(7000);
		// }
	}

	addOtherItem()
	{
		crmBomPage.btnAddOtherItem.waitForDisplayed();
		crmBomPage.btnAddOtherItem.waitForClickable();
		crmBomPage.btnAddOtherItem.click();
		browser.pause(2000);
		//this.otherItemName ='Bom' + (Math.floor(new Date() / 1000));
		this.otherItemName ='Bom1657923';
		crmBomPage.searchPackage.setValue(this.otherItemName);
		browser.pause(3000);
		//crmBomPage.addNewOtherItem.waitForDisplayed();
		//crmBomPage.addNewOtherItem.waitForClickable();
		//crmBomPage.addNewOtherItem.click();
		//browser.pause(2000);
		//crmBomPage.otherItemName.setValue(this.otherItemName);
		crmBomPage.selectPakage.waitForDisplayed();
		crmBomPage.selectPakage.click();
		browser.pause(2000);
		
	}

	clickOKofOtherItem()
	{
		crmBomPage.qtyInput.waitForDisplayed();
		crmBomPage.qtyInput.waitForClickable();
		crmBomPage.qtyInput.click();
		browser.pause(1000);
		browser.keys('\uE004');//tab key
		browser.keys('\uE004');//tab key
		browser.pause(1000);
		//crmBomPage.btnOkOtherItem.waitForDisplayed();
		//crmBomPage.btnOkOtherItem.waitForClickable();
		//console.log('all ok buttons'+crmBomPage.btnOkOtherItem.length);
		crmBomPage.btnOkOtherItem.click();
	}

	checkUncheckRecurringBeforeAddWithExpires()
	{
		if(crmBomPage.recurringSvg.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInput.click();
			browser.pause(1000);
		}
		else
		{
			crmBomPage.recurringInput.click();
			browser.pause(1000);
		}
		this.checkUncheckExpire('Expires');
	}

	checkUncheckRecurringBeforeAddWithAutoSuspend()
	{
		if(crmBomPage.recurringSvg.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInput.click();
			browser.pause(1000);
		}
		else
		{
			crmBomPage.recurringInput.click();
			browser.pause(1000);
			crmBomPage.recurringInput.click();
			browser.pause(1000);
		}
		browser.pause(4000);
		crmBomPage.autoSuspendInput.click();
		browser.pause(1000);
		crmBomPage.expandRightArrow.click();
		browser.pause(1000);
	}

	clickOnDate()
	{
		browser.pause(1000);
		crmBomPage.yearView.click();
		browser.pause(1000);
	}

	clickOnCalendarView()
	{
		browser.pause(1000);
		crmBomPage.CalendarView.click();
		browser.pause(1000);
	}

	checkUncheckRecurring()
	{
		browser.pause(2000);
		if(crmBomPage.recurringSvgAfterAdd.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInputAfterAdd.click();
			browser.pause(1000);
		}
		else
		{
			crmBomPage.recurringInputAfterAdd.click();
			browser.pause(1000);
			crmBomPage.recurringInputAfterAdd.click();
			browser.pause(1000);
		}
	}

	hitEscapeKey()
	{
		browser.pause(1000);
		browser.keys('\uE00C');//escape key
		browser.pause(1000);
	}

	selectRecurringAutoSuspended(indexToSelect)
	{
		if(crmBomPage.recurringSvgAfterAdd.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInputAfterAdd.click();
			browser.pause(2000);
			crmBomPage.autoSuspendInput.click();
			browser.pause(2000);
			crmBomPage.expandRightArrow.click();
			 browser.pause(1000);
			crmBomPage.autoSuspendSubMenus[indexToSelect].click();
		}
	}

	selectRecurringAlongAutoSuspended()
	{
		if(crmBomPage.recurringSvgAfterAdd.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInputAfterAdd.click();
			browser.pause(2000);
			crmBomPage.autoSuspendInput.click();
			browser.pause(2000);
			crmBomPage.expandRightArrow.click();
			browser.pause(1000);
		}
		console.log('auto suspended clicked');
	}

	selectSpecificRecurringSuspendOption(indexToSelect)
	{
		browser.pause(1000);
		if(indexToSelect<3){
			crmBomPage.autoSuspendSubMenus[indexToSelect].click();}
		else
		{
			crmBomPage.autoSuspendSubMenus[indexToSelect].click();
			crmBomPage.selectFirstOpenedPackage.waitForDisplayed();
			this.packageName = crmBomPage.selectFirstOpenedPackage.getText();
			crmBomPage.selectFirstOpenedPackage.click();
		}
		console.log('option get selected');
	}

	selectPackageIfShowed(itemToSelect)
	{
		var textToSelect = itemToSelect.replace(/['"]+/g, '');
		this.packageName = textToSelect;
		if(crmBomPage.selectDivByText(textToSelect).isExisting())
		{
			crmBomPage.selectDivByText(textToSelect).click();
			browser.pause(2000);
		}
	}

	checkUncheckExpire(expire)
	{
		browser.pause(1000);
		var option = expire.replace(/['"]+/g, '');
		if(crmBomPage.expireCheckboxStatus.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.expireCheckbox.click();
			browser.pause(1000);
		}
		else
		{
			crmBomPage.expireCheckbox.click();
			browser.pause(1000);
			crmBomPage.expireCheckbox.click();
			browser.pause(1000);
		}
	}

	clickOnBtnExpire()
	{
		var today = new Date();
		var result = new Date(today.getFullYear(), today.getMonth() + 3, 0);
		var mm = result.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = result.getFullYear();
		var nextMonths = mm   + ' '+ yyyy;//button name next period
		console.log('next month date is ' + nextMonths);
		browser.pause(500);
		crmBomPage.clickBtnExpireAfter.click();
		browser.pause(1000);
	}

	openAddPackageDock()
	{
		crmBomPage.btnAddPackage.click();
	}

	cancelAddPackageDock()
	{
		crmBomPage.btnCancelPackage.click();
		browser.pause(3000);
	}

	searchAndSelect(packageName)
	{
		browser.pause(2000);
		var dataToPass = packageName.raw();
		this.otherItemName = dataToPass[0][0];
		crmBomPage.searchPackage.setValue(this.otherItemName);
		browser.pause(2000);
		this.taxRate = crmBomPage.selectPakageRate.getText().replace( /[^\d\.]*/g, '');
		crmBomPage.selectPakage.click();
		browser.pause(2000);
	}

	addToBom()
	{
		browser.pause(2000);
		crmBomPage.btnAddToBom.click();
		browser.pause(3000);
	}
	
	clickOkToSave()
	{
		crmBomPage.qtyInput.waitForDisplayed();
		crmBomPage.qtyInput.click();
		browser.pause(1000);
		browser.keys('\uE004');//tab key
		browser.keys('\uE004');//tab key
		browser.pause(2000);
		crmBomPage.btnOKpackage.click();
		browser.pause(1000);
	}

	saveBomChanges()
	{
		crmBomPage.btnSaveBom.waitForDisplayed();
		crmBomPage.btnSaveBom.waitForClickable();
		crmBomPage.btnSaveBom.click();
		browser.pause(2000);
	}

	openTaxSettings()
	{
		browser.pause(2000);
		var allRows = crmBomPage.getAllRows;
		var lastTaxItem = allRows.length-1;
		crmBomPage.openTaxSettings(crmBomPage.getAllRows[lastTaxItem]).click();
		browser.pause(2000);
		crmBomPage.expandTaxSettings.click();
		crmBomPage.selectListItem('GST').click();
		browser.pause(2000);
		this.taxableAmount = crmBomPage.taxableAmount.getText();
		this.taxCharged = crmBomPage.taxCharged.getText();
		crmBomPage.saveTaxSettings.click();
		browser.pause(2000);
	}

	/////////// BOM OtherActions

	saveBom()
	{
		browser.pause(2000);
		crmBomPage.btnSaveBom.click();
		browser.pause(2000);
	}

	bomCancel()
	{
		browser.pause(2000);
		crmBomPage.btnCancelBom.click();
		browser.pause(2000);
	}

	deleteBomItem()
	{
		browser.pause(3000);
		var allRows = crmBomPage.getAllRows;
		var lastTaxItem = allRows.length-1;
		var qtyElement = crmBomPage.btnQty(crmBomPage.getAllRows[lastTaxItem]);
		if(qtyElement.isClickable())
		{
			qtyElement.click();
			browser.pause(1000);
			//crmBomPage.qtyInput.click();
			//browser.pause(1000);
			browser.keys('\uE004');//tab key
			browser.keys('\uE004');//tab key
			browser.keys('\uE004');//tab key
		}
		browser.pause(1000);
		var menuElement = crmBomPage.btnMenu(crmBomPage.getAllRows[lastTaxItem]);
		menuElement.click();
		//crmBomPage.bomItemDottedMenu.click();
		browser.pause(1000);
		crmBomPage.btnDeleteItem.click();
		browser.pause(2000);
	}


	verifyBomTab()
	{
		browser.pause(9000);
		crmBomPage.getBomText.waitForDisplayed();
		expect(crmBomPage.getBomText.isExisting()).to.be.true;		
	}

	verifyAddPackageInBom()
	{
		expect(crmBomPage.btnAddPackage.isExisting()).to.be.true;//addPckage
		expect(crmBomPage.btnAddService.isExisting()).to.be.true;//AddService
		expect(crmBomPage.btnAddOtherItem.isExisting()).to.be.true;//OtherItem
	}

	verifyAddPackageClosed()
	{
		expect(crmBomPage.packagePricing.isExisting()).to.be.false;//packagePriceNotPresent
		expect(crmBomPage.packageServiceSummary.isExisting()).to.be.false;//packageSummaryNotPresent
		this.verifyAddPackageInBom();
	}

	verifyPackageGetDeleted(packageName)
	{
		browser.pause(3000);
		var dataToPass = packageName.raw();
		this.otherItemName = dataToPass[0][0];
		// var allRows = crmBomPage.getAllRows;
		// var lastTaxItem = allRows.length-1;
		// crmBomPage.getAllRows[lastTaxItem].scrollIntoView();
		// browser.pause(1000);
		// var btnDescription = crmBomPage.buttonByParent(crmBomPage.getAllRows[lastTaxItem]);
		// btnDescription[1].click();
		// console.log('dotted button clicked');
		// browser.pause(2000);
		// browser.keys('\uE004');//tab key
		// browser.keys('\uE004');//tab key
		// browser.keys('\uE004');//tab key
		// browser.pause(2000);
		// crmBomPage.btnCancelDescription.click();
		// console.log('cancel button clicked');
		// var menuElement = crmBomPage.btnMenu(crmBomPage.getAllRows[lastTaxItem]);
		// menuElement.click();
		crmBomPage.menuButton.scrollIntoView();
		browser.pause(1500);
		crmBomPage.menuButton.click();
		browser.pause(1000);
		crmBomPage.btnDeleteItem.waitForDisplayed();
		crmBomPage.btnDeleteItem.waitForClickable();
		crmBomPage.btnDeleteItem.click();
		this.saveBomChanges();
		console.log('package item deleted and changes saved');
		this.openBomDock();
		if(crmBomPage.header('Click the button below to add package, equipment and other item').isExisting())//when there is no data
		{
			expect(1).to.eql(1);
		}
		else{
			var itemName = crmBomPage.headingByParent(crmBomPage.getAllRows[lastTaxItem]);
			expect(itemName[0].getText()===this.otherItemName).to.be.false;
		}
	}

	verifyQTYAvailable()
	{
		browser.pause(2000);
		expect(crmBomPage.qtyHeader.isExisting()).to.be.true;
		console.log('header quantity');
		var allRows = crmBomPage.getAllRows;
		var lastTaxItem = allRows.length-1;
		var itemName = crmBomPage.btnQty(crmBomPage.getAllRows[lastTaxItem]);
		expect(itemName.isClickable()).to.be.false;
		console.log('quantity input');
	}

	verifyPredefiniedTaxSelected()
	{
		browser.pause(4000);
		var allRows = crmBomPage.getAllRows;
		var lastTaxItem = allRows.length-1;
		var taxElement = crmBomPage.openTaxSettings(crmBomPage.getAllRows[lastTaxItem]);
		expect(taxElement.getText()).to.eql(this.taxCharged.replace("$",""));
	}

	veriftTaxSettingsPreview(dataToVerify)
	{
		var taxSettingsToVerify = dataToVerify.raw();
		browser.pause(4000);
		var allRows = crmBomPage.getAllRows;
		var lastTaxItem = allRows.length-1;
		var taxElement = crmBomPage.openTaxSettings(crmBomPage.getAllRows[lastTaxItem]);
		expect(taxElement.getText()).to.eql(this.taxCharged.replace("$",""));
		taxElement.click();
		browser.pause(3000);
		expect(crmBomPage.header(taxSettingsToVerify[0][0]).isExisting()).to.be.true;
		expect(crmBomPage.header(taxSettingsToVerify[0][1]).isExisting()).to.be.true;
		expect(crmBomPage.header(taxSettingsToVerify[0][2]).isExisting()).to.be.true;
		expect(crmBomPage.header(taxSettingsToVerify[0][3]).isExisting()).to.be.true;
		//verify valuess
		expect(crmBomPage.taxRate.getText()).to.eql(taxSettingsToVerify[1][0]);
		expect(crmBomPage.taxableAmount.getText().includes('$'+this.taxRate)).to.be.true;
		expect(crmBomPage.nonTaxableAmount.getText()).to.eql(taxSettingsToVerify[1][2]);
		console.log('>>>>>>>>>>>>>>>actual tax: '+ crmBomPage.taxCharged.getText());
		console.log('>>>>>>>>>>>>>>>expected tax: '+ Math.trunc(this.taxRate/2));
		expect(crmBomPage.taxCharged.getText().includes('$'+ Math.trunc(this.taxRate/2))).to.be.true;//to avoid rounding errors
	}

	verifyAddService()
	{
		browser.pause(2000);
		expect(crmBomPage.btnAddService.isExisting()).to.be.true;
	}

	verifyRecurringGetSelected()
	{
		browser.pause(2000);
		if(crmBomPage.recurringSvgAfterAdd.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInputAfterAdd.click();
			browser.pause(2000);
			expect(crmBomPage.recurringSvgAfterAdd.getAttribute('data-testid')).to.eql('CheckBoxIcon');
		}
		else
		{
			expect(1).to.eql(0);
		}
	}

	verifyRecurringUnChecked()
	{
		browser.pause(2000);
		crmBomPage.recurringInputAfterAdd.click();
		browser.pause(2000);
		crmBomPage.cancelAutoSuspend.click();
		browser.pause(2000);
		expect(crmBomPage.recurringSvgAfterAdd.getAttribute('data-testid')).to.eql('CheckBoxOutlineBlankIcon');
	}

	verifyAutoSuspendedOption(autoSuspendText)
	{
		browser.pause(2000);
		autoSuspendText = autoSuspendText.replace(/['"]+/g, '');
		if(crmBomPage.buttonByParent(crmBomPage.autoSuspendText).length>0)
		{
			if(crmBomPage.buttonByParent(crmBomPage.autoSuspendText)[0].isExisting())
			{
				expect(crmBomPage.buttonWithSpecificText(this.packageName).isExisting()).to.be.true;
			}
		}
		else
		{
			//console.log('extracted packge is'+crmBomPage.autoSuspendText.getText());
			expect(crmBomPage.autoSuspendText.getText()).to.eql(autoSuspendText);
		}
	}

	//////////// BOM otherItems Verifications
	
	verifyAddOtherItemInBom()
	{
		browser.pause(3000);
		expect(crmBomPage.btnAddOtherItem.isExisting()).to.be.true;//OtherItem
	}

	verifyOtherItemAdded(otherItems)
	{
		browser.pause(5000);
		var dataToVerify = otherItems.raw();
		var allRows = crmBomPage.getAllRows;
		var lastTaxItem = allRows.length-1;
		crmBomPage.header(this.otherItemName).waitForDisplayed();
		var itemName = crmBomPage.headingByParent(crmBomPage.getAllRows[lastTaxItem]);
		expect(itemName[0].getText()).to.eql(this.otherItemName);
		var itemDescription = crmBomPage.buttonByParent(crmBomPage.getAllRows[lastTaxItem]);
		expect(itemDescription[0].getText()).to.eql(dataToVerify[0][0]);
		var qtyElement = crmBomPage.btnQty(crmBomPage.getAllRows[lastTaxItem]);
		expect(qtyElement.getText()).to.eql(dataToVerify[0][1]);
		qtyElement.click();
		browser.pause(1000);
		browser.keys('\uE004');//tab key
		browser.keys('\uE004');//tab key
		browser.keys('\uE004');//tab key
		browser.pause(1000);
		var rateElement = crmBomPage.rateHeader(crmBomPage.getAllRows[lastTaxItem]);
		expect(rateElement.getText()).to.eql(dataToVerify[0][2]);
		console.log('rate verified');
		var taxElement = crmBomPage.getTax(crmBomPage.getAllRows[lastTaxItem]);
		expect(taxElement.getText()).to.eql(dataToVerify[0][2]);
		console.log('tax verified');
		var amountElement = crmBomPage.totalHeader(crmBomPage.getAllRows[lastTaxItem]);
		expect(amountElement.getText()).to.eql(dataToVerify[0][2]);
		console.log('amount verified');
	}

	verifyBomOtherCanceled()
	{
		browser.pause(3000);
		if(crmBomPage.header('Click the button below to add package, equipment and other item').isExisting())//when there is no data
		{
			expect(1).to.eql(1);
		}
		else{
			var allRows = crmBomPage.getAllRows;
			var lastTaxItem = allRows.length-1;
			var itemName = crmBomPage.headingByParent(crmBomPage.getAllRows[lastTaxItem]);
			expect(itemName[0].getText()===this.otherItemName).to.be.false;
		}
	}

	verifybomItemDeleted()
	{
		browser.pause(3000);
		if(crmBomPage.header('Click the button below to add package, equipment and other item').isExisting())//when there is no data
		{
			expect(1).to.eql(1);
		}
		else{
			var allRows = crmBomPage.getAllRows;
			var lastTaxItem = allRows.length-1;
			var itemName = crmBomPage.headingByParent(crmBomPage.getAllRows[lastTaxItem]);
			expect(itemName[0].getText()===this.otherItemName).to.be.false;
		}
	}

	verifyOtherRecurringSelect()
	{
		if(crmBomPage.recurringSvg.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInput.click();
			browser.pause(1000);
			expect(crmBomPage.recurringSvg.getAttribute('data-testid')).to.eql('CheckBoxIcon');
		}
		else
		{
			expect(0).to.eql(1);
		}
	}

	verifyOtherRecurringUnselect()
	{
		if(crmBomPage.recurringSvg.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			crmBomPage.recurringInput.click();
			this.hitEscapeKey();
			crmBomPage.recurringInput.click();
			browser.pause(1000);
			expect(crmBomPage.recurringSvg.getAttribute('data-testid')).to.eql('CheckBoxOutlineBlankIcon');
		}
		else
		{
			expect(0).to.eql(1);
		}
	}

	verifyAutoSuspendOption()
	{
		browser.pause(2000);
		expect(crmBomPage.autoSuspendSvg.isExisting()).to.be.true;//verify checkbox available
		console.log('auto suspend text' + crmBomPage.autoSuspendText.getText().replace(/\n|\r/g, " "));
		expect(crmBomPage.autoSuspendText.getText().replace(/\n|\r/g, " ").includes('Auto-suspend  ')).to.be.true;
	}

	verifyExpireCheckbox(expirecheckbox)
	{
		browser.pause(1000);
		var expirecheckbox = expirecheckbox.replace(/['"]+/g, '');
		console.log('expire option' + crmBomPage.expireParent.getText());	
		expect(crmBomPage.expireParent.getText()).to.eql(expirecheckbox);
		if(crmBomPage.expireCheckboxStatus.getAttribute('data-testid')==='CheckBoxOutlineBlankIcon')
		{
			expect(1).to.eql(1);
		}
		else
		{
			expect(1).to.eql(0);
		}
	}

	verifyExpireLabel(expirecheckbox)
	{
		browser.pause(1000);
		var option = expirecheckbox.replace(/['"]+/g, '');
		console.log('expire option' + crmBomPage.expireParent.getText());
		// Expires\nafter\nSep 2022
		var today = new Date();
		var result = new Date(today.getFullYear(), today.getMonth() + 5, 0);
		var mm = result.toLocaleDateString(undefined, { month: 'short'});
		var yyyy = result.getFullYear();
		var nextMonths = mm   + ' '+ yyyy;
		console.log('actual expire after date ' + option +' '+nextMonths);
		console.log('expires after date' + crmBomPage.expireParent.getText());
		//expect(crmBomPage.expireParent.getText().replace(/\n|\r/g, " ")).to.eql(option +' '+nextMonths);
		expect(crmBomPage.expireParent.getText().includes(option)).to.be.true;
	}

	verifyExpiresOnCalendar()
	{
		browser.pause(1000);
		expect(crmBomPage.yearView.isExisting()).to.be.true;
		crmBomPage.yearView.click();
		browser.pause(1000);
		expect(crmBomPage.CalendarView.isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Jan').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Feb').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Mar').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Apr').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('May').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Jun').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Jul').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Aug').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Sep').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Oct').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Nov').isExisting()).to.be.true;
		expect(crmBomPage.buttonWithSpecificText('Dec').isExisting()).to.be.true;
	}

	verifyUpComingYears()
	{
		var today = new Date();
		var result = new Date(today.getFullYear(), today.getMonth() + 2, 0);
		var yyyy = result.getFullYear();
		var year = yyyy;
		browser.pause(1000);//random verifications
		expect(crmBomPage.buttonWithSpecificText(year).isExisting()).to.be.true;
		console.log('current year is verified' + year);
		expect(crmBomPage.buttonWithSpecificText(year+1).isExisting()).to.be.true;
		console.log('next year is verified' + year +1);
	}

	verifyUpComingMonths()
	{
		var today = new Date();
		var result = new Date(today.getFullYear(), today.getMonth() + 3, 0);
		var mm = result.toLocaleDateString(undefined, { month: 'short'});
		var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let index = monthNames.indexOf(mm);
		for(var i = index ; i<= monthNames.length-1; i++){
			//console.log(monthNames[i]);
			expect(crmBomPage.buttonWithSpecificText(monthNames[i]).isExisting()).to.be.true;//verifying upcoming enabled months
		}
	}

}

module.exports = new SDbomPackageActions();